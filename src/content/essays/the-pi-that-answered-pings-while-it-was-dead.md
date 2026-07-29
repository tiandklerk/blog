---
title: "The Pi That Answered Pings While It Was Dead: An AIOps Migration Story"
description: "My gateway Pi kept 'going down' while still answering pings, so I put an SRE agent on it and ran an overnight, fully remote migration to 64-bit."
date: 2026-07-28
voice: tian
minutes: 10
draft: true
---

*The migration ran overnight; this is written after everything, including the next-morning follow-ups, was done and verified. The cast: Rupert (my SRE agent), Koos (security agent), Piet (QA agent), and Claude (Claude Code, the orchestrator), all running against a 3-node homelab.*

## The mystery

My internet-facing Raspberry Pi 4 (gateway, reverse proxy, and Vaultwarden host) kept "going down." Except it didn't look down: the kernel answered pings the whole time. Monitoring said *up*, users said *dead*. After one 15-hour hang that ended in a power cycle, I asked my SRE agent to find the root cause.

## The diagnosis (14 minutes, read-only)

Rupert, an LLM agent with read-only access and a strict "propose, don't act" tier on the gateway, worked the incident like an SRE: Kuma history, `journalctl -k -b -1`, throttle flags, USB error logs, memory stats. His verdict, with evidence:

> **32-bit kernel LowMem exhaustion.** On 32-bit ARM the kernel can only directly address a slice of RAM ("LowMem"). Exhaust it and the OOM killer fires, even with gigabytes "free." On Jul 25 it killed `dockerd`; userspace froze for 15 hours while the kernel kept answering pings. The box has a 64-bit CPU running a 32-bit OS. The real fix is a 64-bit reimage.

Not undervoltage (my prior), not the USB adapter, not qBittorrent misbehaving. An architectural limit. And a bonus finding from his follow-up audit: our crashed qBittorrent container *couldn't* be fixed on 32-bit, because upstream had silently dropped 32-bit ARM images entirely. Same root cause, second symptom.

## The plan (and how it evolved)

Three iterations, each triggered by a real constraint:

1. **"Buy a second SSD, stage everything":** classic belt-and-suspenders, two maintenance windows, physical disk swaps.
2. **"Use the old 500 GB HDD I just found":** soak on the fast SSD, keep the HDD as a bootable 32-bit rollback clone. One cutover instead of two. (The HDD turned out to have a live NTFS partition on it, and the agents' recon caught that *before* we wiped someone's data.)
3. **"Why do I need to touch it at all?":** the final form, a **fully remote night-run**. No laptop, no disk swaps, no human hands:

```
stop containers → cold Vaultwarden backup + SQLite integrity gate (hard abort)
→ fail VIP to the standby node → rpi-clone SSD→HDD (bootable rollback)
→ disable SSD boot files → reboot onto the HDD
→ dd the 64-bit image onto the freed SSD, pre-seed it headlessly
→ reboot onto the 64-bit SSD → provision → restore → verify → VIP back
```

The trick that makes it deterministic: a Pi 4 can't be told *which* of two USB disks to boot, so you make sure only one of them is bootable at any moment (rename `start4.elf` on the other). rpi-clone gives the clone its own PARTUUID, so there's no identity collision. And keepalived's VIP means the internet-facing services keep running on the standby node the whole time; the password manager goes into a brief planned maintenance (clients keep working from cache; no split-brain by design).

## What the safety rails looked like

- **Verified backup first**: 32 files to the NAS, every sha256 checked, before anything else. Then a *second*, cold Vaultwarden backup with a real `PRAGMA integrity_check` as the go/no-go gate.
- **A bootable rollback at every step**: at no point in the sequence is there zero bootable disks; worst case overnight is "the gateway waits for morning" while the standby node keeps serving.
- **Least privilege with a time-boxed exception**: the agents normally operate under scoped sudo. The night-run got a temporary passwordless grant, installed by the human, removed by the automation as its final scripted step, on both disks.
- **The board as the source of truth**: every phase tracked as kanban cards the agents and I share; the QA agent independently re-verifies closed cards.

## What the agents actually contributed

- **Rupert**: root cause in 14 minutes; multi-arch image audit (caught the dead 32-bit qBittorrent tag); validated every script assumption against the live gateway before D-day (and caught a wrong TLS-cert path in my verify script).
- **Koos**: continuous security watch; flagged SMBv1 on the NAS mount as a migration-window improvement.
- **Claude**: wrote and staged the four migration scripts (backup / provision / restore / parity-verify), drove the orchestration, and (full disclosure) made its own mistakes along the way: a monitoring race that briefly "verified" a half-written manifest, and an early backup script that would have tarred terabytes of NAS media if recon hadn't caught the CIFS binds first.

The pattern that kept working: **deterministic scripts for anything destructive, agents for diagnosis and verification, humans for authorization.** The LLMs never touch `dd`.

## The night run: results

It worked. It also did not go to plan, which is the honest and more useful story.

**The clean part (≈40 minutes):** stop containers → cold Bitwarden backup + `PRAGMA integrity_check ok` → VIP to the standby → rpi-clone SSD→HDD (16 min) → boot the HDD clone → dd the 64-bit image onto the freed SSD → boot the SSD. The Pi came up on **aarch64, kernel 6.18, cgroup v2 with the memory controller live**, so docker memory limits finally *enforce* (Vaultwarden now runs under a hard 384 MB cap), and the 32-bit LowMem OOM class is gone by construction. Along the way the automation caught and fixed three latent gremlins live: a truncated fstab inside the clone, CIFS mounts that had never actually survived a reboot, and `udisks2` auto-mounting the SSD mid-flash (which corrupted the first flash; it was masked and re-flashed clean).

**Then it hit a wall of my own making, and this is the lesson.** The plan assumed a fresh Raspberry Pi OS gives the first user passwordless sudo. **Trixie removed that default**, and I hadn't baked a `NOPASSWD` drop-in into the image. Result: the new box was healthy but I had no root, and couldn't reach the rollback disk to fix it either (that also needs root). The migration **paused for ~5 hours** until a human ran a single two-line command. It resumed and finished cleanly, but the autonomy ended exactly where a privilege I'd assumed didn't exist.

**The finish (≈20 minutes once unblocked):** provision (docker, swap, journald, certs, keepalived, crontabs) → restore the Bitwarden volume → recreate the container → deploy the real gateway nginx config (the backup had captured a *default* config, so the site blocks came from the config-as-code repo) → fail the VIP back → re-harden sudo. End state: **my Vaultwarden instance serving HTTPS end-to-end on 64-bit**, data verified (6 users / 667 ciphers), VIP back on the gateway, temp privilege stripped from both disks. The rollback clone was never needed but was valid the entire time. The media stack, CIFS mounts, and Litestream replication were deferred to the next morning; they need the NAS credential and aren't load-bearing for the vault (below).

**What actually mattered:** the destructive path never touched an LLM's hands, every step had a bootable fallback, and the one thing that stopped a fully-autonomous run wasn't data risk or a bad command, it was a *missing credential I'd assumed I had*.

## The morning after: the follow-ups

With the vault safe, the rest came back in daylight, and turned into a small lesson in credential handling and detective work.

**The media stack** (Medusa plus a VPN'd qBittorrent) needed the NAS shares mounted, which needed a credential I deliberately didn't want to hold. So I created `/etc/cifs-credentials` as a root-only template and had the human fill in the password; I never saw it. The first attempt got permission-denied on two shares; rather than guess, I read the NAS's own SMB access lists and found the shares grant write access to a *service user* (`madusa`), not the account I'd assumed. One corrected field and all four shares mounted, and, unprompted, they negotiated **SMB 3.1.1** instead of the insecure SMBv1 the old manual mounts used. The security nit Koos had flagged fixed itself.

**qBittorrent routes through the VPN container's network namespace**, so before trusting it I compared three public IPs: the host's real address, the VPN's exit, and qBittorrent's own. They lined up the safe way: qBittorrent exits via the VPN, never the real IP. A torrent client is exactly the thing you verify rather than assume.

Two bugs surfaced that *predated* the migration: the weekly vault-backup cron pointed at a script path that no longer existed (silently failing for who knows how long), and the old CIFS mounts were manual commands that never survived a reboot, which is *why* they'd vanished. Both are now fixed properly: the backup script restored and test-run, the mounts in `fstab` with `_netdev,nofail` so a NAS blip can't wedge boot again.

Litestream (continuous vault replication) went back last, with one gotcha: the latest version's config format had changed, so I installed the older version that matched the existing config rather than migrate it, and watched it write a fresh snapshot to the NAS before calling it done. The final item was the most trivial: the bare apex domain served a 404 because its static landing page lived in `/var/www`, which I hadn't backed up. The content was in the config repo; two minutes, and the last red monitor went green.

## Takeaways

1. **"Up" is a lie without userspace checks.** Ping said fine for 15 hours while everything above the kernel was dead. Monitor the service, not the ICMP echo.
2. **32-bit ARM on 4 GB+ Pis is a time bomb:** LowMem exhaustion looks like random flakiness until you read the OOM logs. If your Pi 4 runs armv7l, migrate.
3. **Persistent journald before you need it.** The first investigation had no logs from the crashed boot; enabling `Storage=persistent` made the next one solvable.
4. **Agents shine at diagnosis and verification, not destruction.** Read-only investigation, audits, and parity checks were flawless force-multipliers; the destructive path stayed scripted, checksummed, and human-authorized. The LLMs never touched `dd`.
5. **Plans should get simpler as they get safer.** Two windows and a shopping trip became one remote night-run, *because* each iteration was pressure-tested by recon.
6. **Autonomy dies at the privilege you assumed but didn't provision.** The run was recoverable, verified, and rollback-safe, and still stalled 5 hours on a single `sudoers` line, because "fresh RaspiOS = passwordless sudo" quietly stopped being true in Trixie. If a step needs root, bake the grant in and verify it, and check your escape hatch (here, the rollback disk) is reachable *without* the missing thing.
7. **Hold credentials you don't need to hold.** The NAS and VPN passwords never reached me in the clear: a root-only file the human filled, a shredded env-file for the container. You can automate around a secret without ever seeing it.
8. **Verify what's dangerous to get wrong.** A VPN'd torrent client earns a three-way IP comparison, not a "looks fine"; a restored database earns a `PRAGMA integrity_check`. Trust is a check, not a vibe.
