---
title: "My homelab went from \"fail2ban banned me again\" to self-healing in 24 hours (with an AI sysadmin)"
description: "It started with fail2ban locking me out of my own network. Again. So I let an AI agent loose on the homelab, with me holding the approval button."
date: 2026-07-17
voice: tian
minutes: 8
draft: true
---

It started with hours of troubleshooting a Raspberry Pi I was convinced had a hardware problem. Devices dropping off, SSH sessions dying mid-command, nothing responding to pings — the kind of intermittent mess that makes you start wondering if the SSD had finally given out (I'd moved every Pi off SD cards a while back, precisely so *this* wouldn't be the answer). I was well into "maybe it's just dying" territory before the actual cause turned up: **fail2ban on my gateway Pi had banned my own devices. Again.** Not a dying drive. Just my own security tool, doing exactly what I'd half-configured it to do, to me.

That was the moment I decided to stop patching symptoms and let an AI agent loose on my homelab — Claude, running the Fable model — with me holding the approval button.

Here's the part that actually motivates all of this, beyond it being a fun puzzle: once you self-host enough stuff, other people around you start depending on it without ever signing up to be "users" of anything. In my house that's my wife — she doesn't think of herself as using my homelab, she just expects the lights to turn on and the photos to be there. That's the shift that matters: the moment someone other than you relies on a thing, it stops being a hobby project you can leave half-broken overnight and becomes infrastructure. Outages aren't just a puzzle to me anymore, they're a clock. Sometimes the fix is ten minutes; sometimes it eats my entire evening or weekend. Either way, I want to be the one who catches it first, before the person depending on it even notices.

This is what happened in the ~24 hours that followed.

## The starting point

My setup: a Raspberry Pi 4 as the internet gateway (nginx reverse proxy + fail2ban), a Pi 5 running my AI agents, an Unraid NAS running most services (Immich, Wiki.js, n8n…), and Home Assistant. Self-hosted Vaultwarden for passwords. I set up a wiki with the intention to document it all, but never did. How the lab grew into this is a story of its own — one for another post.

```
Internet ──▶ Pi 4 (nginx, fail2ban)  ← single point of failure
                │
    ┌───────────┼──────────────┐
   Pi 5       Unraid NAS     HA box
 (agents)   (most services)
```

## Hour 0–2: Audit first, fix second

The agent's first move wasn't to fix anything — it was to compare **documented reality vs. actual reality**. The gap was humbling:

- I'd already killed the fail2ban service myself in the middle of the night, mostly out of self-preservation so I could actually get back into my own network. But the config underneath was still a minefield: **permanent bans** (`bantime = -1`), **no LAN whitelist**, and a duplicate jail double-banning everything. Any device on my own network that fumbled SSH three times was permanently cut off. Mystery solved — the hardware was fine the whole time.
- Of my seven public domains, five were actively used — and two were dead services (an old Nextcloud and a WordPress site) still exposed to the internet, quietly waiting to become someone's way in.
- A container had been **crash-looping for 3 weeks — 34,828 restarts** — silently burning CPU. It served the graph visualization for a side project, which is exactly why nothing was monitoring it.
- The password-manager backup ran weekly; the docs said daily. And nothing would have told me if it silently stopped altogether.

Everything went into the wiki: real service inventory, real network map, and the first entries ever in the Incident Log.

None of what followed got touched blind, either. For each of these, the agent wrote up what it found, proposed a fix, and I signed off section by section before anything changed on a live system. That back-and-forth — being shown the plan and asked to approve it, not just told "done" — is honestly why I trusted it with the bigger changes later that day, not blind faith in the tool.

## Hour 2–3: Never get locked out again

The fail2ban fix was two small files: a LAN whitelist (`ignoreip`), 1-hour bans instead of permanent, and a custom action that **pushes every ban/unban to my phone via ntfy** (self-hosted push notifications — a neat little tool).

Then came one of my favorite parts of the project — and also the one that gave me pause. While testing, the agent ran a "sanity check": try to ban a whitelisted LAN IP, expect it to be refused. Turns out **manual bans bypass the whitelist** in fail2ban entirely… and the IP it picked to test with was the Pi it was running on. It banned itself mid-test and cut its own SSH session.

Funny, yes — the thing sent to fix my self-inflicted lockout immediately reproduced it. But the part that actually got my attention came right after: by the time I saw the alert, it had already unbanned itself and carried on. It never quite spelled out how it got back in — my best guess is it hopped through an SSH session from another device on the network. Reproducing my mistake was funny. Quietly recovering from it without asking first is what made me pay closer attention for the rest of the project.

## Hour 3–10 (overnight): Eyes everywhere

This part ran fully unattended. While I slept, the agent deployed **Uptime Kuma** on the NAS: pings for every host, HTTPS checks for every public domain **through the full internet path** (so they test DNS + router + proxy + TLS + the app), cert-expiry warnings, and — the clever bit — a **dead man's switch on the backup job**: the backup script now sends a heartbeat after each run; if the heartbeat goes quiet for 8 days, my phone buzzes. A silently failing backup is no longer a thing that can happen to me.

Everything alerts through one private ntfy topic. Sixteen monitors by the end.

Waking up to that was honestly great. And my favorite detail: it had deliberately *not* tested the alerting overnight — testing means firing notifications, and firing notifications means buzzing the phone of a sleeping human. Instead it left a note asking me to say when I was up so we could test together. An unexpected courtesy.

## The secrets detour

All this automation needed credentials — and scattering tokens across dotfiles felt wrong. This detour was my call, a pattern I'd designed earlier from my experience running OpenClaw and Hermes: every automation secret moved into **Vaultwarden itself**, and scripts fetch them at runtime via the Bitwarden CLI. The vault's master password sits on disk encrypted against the Pi's hardware serial — no plaintext anywhere. My favorite detail: the agent's own access to the password manager is governed by the same password manager it's protecting.

## Hour 12–20: Killing the single point of failure

The big one. That gateway Pi carried *all* internet traffic alone.

For a change this size the agent presented the entire plan up front — topology, priorities, rollback story — and I signed off on the whole thing before it touched a single node. It then went, honestly, remarkably smoothly; we even tested the failover deliberately rather than waiting for it to happen to us.

Now there are **three nginx nodes** — gateway Pi, the Pi 5, and a container on Unraid — sharing one **virtual IP** via keepalived (VRRP). The router forwards 443 to the VIP. Health checks verify nginx is *actually answering*, not just that the box is up. If the active node dies, the VIP moves in about **10 seconds**, and my phone gets a play-by-play.

```
Internet ──▶ router ──▶ VIP .5
                          │ (keepalived VRRP, ~10 s failover)
             ┌────────────┼────────────┐
        gateway Pi      Pi 5        Unraid
        (prio 150)   (prio 100)   (prio 50)
             └── identical nginx, deployed from git ──┘
```

The nginx config became **config-as-code**: one git repo, one `deploy-all-nodes.sh` that tests before reloading each node. The subtle traps of multi-node config: `proxy_pass http://0.0.0.0:8080` means "localhost" — fine on one machine, silently wrong on three; and every node binds different addresses (one Pi shares 443 with Tailscale, Unraid's GUI owns 443 on the host IP), solved with tiny per-node listen snippets while every site file stays identical.

TLS got the same treatment — and taught me something. For years my cert renewal was a twice-yearly ritual: open port 80 on the router, run the renewal script on the gateway, close everything up again. I simply didn't know **DNS-01** existed. Now it's one wildcard cert, validated through DNS instead of an open port, renewed automatically, synced to all three nodes by a deploy hook, phone notification included. Simpler than what I was doing by hand — and because every node carries the same cert, both my primary and my fallbacks can serve traffic. Port 80 is now closed *forever*.

## Hour 20–24: The password store gets a parachute

Vaultwarden's SQLite database is now **continuously replicated** — Litestream streams the WAL to the NAS every 10 seconds, taking the recovery point from hours down to seconds. Honestly though, the number wasn't the point for me. The point is that a failover now *exists at all*: a standby container on the Pi 5 sits empty until needed, and one command — `vw-promote.sh` — restores the newest replica, starts the standby, and flips the nginx upstream. Same URL, same cert; the apps never notice. That's the peace of mind.

The agent's own call, which I agreed with: **no auto-promotion**. A monitor can't distinguish "app dead" from "network blip", and auto-promoting a live password database forks it into two unmergeable copies (split-brain). So for now the alert tells *me*; I run one command; my phone confirms. For a password store that trade is right — especially since Bitwarden clients cache vaults offline anyway. (For now, because the next step is closing that loop: an AIOps agent that investigates an alert on its own, tells me whether it's down for real, and runs the promotion for me. More on that below.)

Then we **drilled it, live**: killed the primary, promoted, verified the vault served publicly from the standby (648 entries intact), failed back. ~3 minutes of write-downtime. And the drill earned its keep — it flushed out a stale certificate path that would have blocked a real failover. That's why you drill.

```
NORMAL                              FAILOVER (one command)
gateway: Vaultwarden                 pi5: vw-promote.sh
   │ WAL stream (10 s)                 1. restore newest replica
   ▼                                   2. start standby
  NAS  ◀──────────────                 3. flip nginx upstream
                                       4. notify phone
```

## The scoreboard

| | Before | After |
|---|---|---|
| fail2ban | permanent bans, no whitelist, no alerts, *stopped* | LAN-immune, 1 h bans, every ban on my phone |
| Monitoring | none | 16 monitors + backup dead-man's-switch + external check |
| Secrets | scattered files | Vaultwarden only, runtime-fetched |
| Edge | one Pi, single point of failure | 3-node VIP, ~10 s self-healing failover |
| TLS | manual, downtime, port 80 games | wildcard, DNS-01, fully automatic |
| Passwords | no failover, recovery from backups (hours) | streamed replica, drill-tested one-command failover |
| Docs | aspirational | live wiki: runbooks, tracker, incident log |

## What I learned

1. **Audit before fixing.** Half the value was discovering what was actually running (and exposed).
2. **Alert on absence, not just failure.** The backup heartbeat pattern is trivial and catches the scariest failure mode: silence.
3. **Drills find what reviews miss.** A planned 3-minute outage found a bug that a real 3 a.m. outage would have found for me.
4. **Keep humans in the loop where data can fork.** Automate detection and recovery mechanics; keep the promote decision human.
5. **Runbooks are the real deliverable.** Every procedure is now documented well enough that I can drive it without the AI.
6. **Once someone else depends on it, it's infrastructure, not a hobby.** My wife doesn't know she's a user of my homelab — she just expects the lights and the photos to work. That's the real bar all of this has to clear: reliable enough that the people around me never have to think about it.

Next up: wiring the alerts into an AIOps/SRE agent, powered by Hermes, that *investigates on its own* — confirms whether something is really down, tells me what it found, and handles the recovery. But that's the next post.
