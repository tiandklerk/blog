---
title: "My homelab went from \"fail2ban banned me again\" to self-healing in 24 hours (with an AI sysadmin)"
description: "It started with fail2ban locking me out of my own network. Again. So I let an AI agent loose on the homelab, with me holding the approval button."
date: 2026-07-17
voice: tian
minutes: 8
ai: 50
draft: false
---

It started one evening after a very long day. I noticed some of my hosted services were down, and I tracked it down to my Raspberry Pi 4 that I used as a sort of nginx gateway. I sometimes ran into issues with it and would end up restarting it. Even after trying that, I found I could still not SSH in, and Portainer was not responding either, so I was sure it was a hardware problem (in hindsight I should have checked if my other services were online). I had issues with the SD card before and had already done a project with AI to convert to a USB SSD as OS storage, so I could not understand what the hardware issue was. I needed to confirm on the desktop. This prompted an (and I wish I was kidding) hour and a half search for my mini HDMI to HDMI cable so I could just see what the error was. When I finally found it, I got it booted on a monitor and... everything was fine. I realized it must have been fail2ban that banned me. I cleared myself out of the jail and disabled the service.

Why all the effort there and then? Well, self hosting is awesome, but once you self-host enough stuff, other people around you start depending on it without ever signing up to be "users" of anything. The moment someone other than you relies on a thing, it stops being a hobby project you can leave half-broken overnight and becomes infrastructure. They just expect the lights to turn on and the photos to be there; otherwise you kind of lose trust. Not as stressful as work obviously, but I want them to use my stuff!

Sometimes the fix is ten minutes; sometimes it eats my entire evening or weekend. Either way, I want to be the one who catches it first, before the person depending on it even notices.

I just so happened to be messing with the new Fable model trying to do some other projects, so I thought, let me see what it can do here.

This is what happened in the ~24 hours that followed.

## The starting point

My setup: a Raspberry Pi 4 as basically an internet gateway (nginx reverse proxy + fail2ban), a Pi 5 running my AI agents, an Unraid NAS running most services (Immich, Wiki.js, n8n and Home Assistant). Self-hosted Vaultwarden for passwords. I set up a wiki with the intention to document it all and did some as part of previous experiments with OpenClaw, but never kept it up to date. How the lab grew into this is a story of its own, one for another post.

## Hour 0–2: Audit first, fix second

The agent's first move wasn't to fix anything. It was to compare documented reality vs. actual reality. There was obviously a gap, as my environment is never static:

Once I figured out it was fail2ban I killed the service until I got a chance to set it up properly. The config underneath, according to Claude, was still a minefield: permanent bans (bantime = -1), no LAN whitelist, and a duplicate jail double-banning everything. Meaning any device on my own network that fumbled SSH three times got permanently cut off.

We continued looking at the rest of the environment. The agent discovered that out of my seven public domains, five were actively used, and two were dead services still exposed to the internet, quietly waiting to become someone's way in. I knew I'd stopped the services, but I never cleaned up after myself.

A container had been crash-looping for 3 weeks and racked up 34,828 restarts. It served the graphdb visualization for a side project, which is exactly why nothing was monitoring it.

The password-manager backup ran weekly; the docs said daily, and nothing would have told me if it silently stopped altogether.

I asked the agent to add everything into the wiki: real service inventory, real network map, and the first entries ever in the Incident Log.

None of what followed got touched without documenting. For each of these, the agent wrote up what it found, proposed a fix, and I signed off section by section before anything changed on a live system. That back-and-forth, being shown the plan and asked to approve it rather than just told "done", is honestly why I trusted it with the bigger changes later that day, not blind faith in the tool.

## Hour 2–3: Never get locked out again

The fail2ban fix was two small files: a LAN whitelist (ignoreip), some other tweaks, and a custom action that pushes every ban/unban to my phone via ntfy (self-hosted push notifications, a neat little tool).

Then came an interesting highlight of the project that gave me pause. While testing, the agent ran a "sanity check": try to ban a whitelisted LAN IP, expect it to be refused. Turns out manual bans bypass the whitelist in fail2ban entirely… and the IP it picked to test with was the Pi it was running on. It banned itself mid-test and cut its own SSH session...

Funny, yes. The thing sent to fix my self-inflicted lockout immediately reproduced it, but the part that actually got my attention came right after: by the time I saw the alert, it had already unbanned itself and carried on. It never quite spelled out how it got back in. My best guess is it hopped through an SSH session from another device on the network. Quietly recovering from it without asking first is what made me pay closer attention for the rest of the project.

## Hour 3–10 (overnight): Eyes everywhere

This part ran fully unattended. I gave it a lot of requirements, and it came back with a big plan. I signed off and went to sleep. While I slept, the agent deployed Uptime Kuma on the NAS: pings for every host, HTTPS checks for every public domain through the full internet path (so they test DNS + router + proxy + TLS + the app), cert-expiry warnings, and the clever bit, a dead man's switch on the backup job: the backup script now sends a heartbeat after each run; if the heartbeat goes quiet for 8 days, my phone buzzes. A silently failing backup is no longer a thing that can happen to me. (Side note: as I was writing this article, this was never actually set up, and only now has been implemented.)

Everything alerts through one private ntfy topic. Sixteen monitors by the end.

Great progress overnight, with a cool little detail: the agent had deliberately not tested the alerting overnight. Why? Testing means firing notifications, and firing notifications means buzzing the phone of a sleeping human. Instead it left a note asking me to say when I was up so we could test together. An unexpected courtesy.

## A quick detour

All this automation needed credentials, and scattering tokens across dotfiles was just asking for trouble. This detour was my call, as the agent kept asking for creds. It's a pattern I'd designed earlier from my experience running OpenClaw and Hermes: every automation secret moved into an agent Vaultwarden, and scripts fetch them at runtime via the Bitwarden CLI. The vault's master password sits on disk encrypted against the Pi's hardware serial, so there's no plaintext anywhere.

Cool little detail: the agent's own access to the password manager is governed by the same password manager it's protecting.

## Hour 12–20: Killing the single point of failure

The big one. That gateway Pi carried all internet traffic alone.

For something this big, the agent and I had a lot of back and forth. It presented the entire plan up front (topology, priorities, rollback story) and I signed off. It then went, honestly speaking, much smoother than expected.

I asked it to test the failover to see how it would work.

Now there are three nginx nodes: gateway Pi, the Pi 5, and a container on Unraid, all sharing one virtual IP via keepalived (VRRP). The router forwards 443 to the VIP. Health checks verify nginx is actually answering, not just that the box is up. If the active node dies, the VIP moves in about 10 seconds, and my phone gets a play-by-play. That means 3 levels of failover.

```
Internet ──▶ router ──▶ VIP .5
                          │ (keepalived VRRP, ~10 s failover)
             ┌────────────┼────────────┐
        gateway Pi      Pi 5        Unraid
        (prio 150)   (prio 100)   (prio 50)
             └── identical nginx, deployed from git ──┘
```

The nginx config became config-as-code: one git repo, one deploy-all-nodes.sh that tests before reloading each node. The subtle traps of multi-node config: proxy_pass http://0.0.0.0:8080 means "localhost", fine on one machine, silently wrong on two; and every node binds different addresses (one Pi shares 443 with Tailscale, Unraid's GUI owns 443 on the host IP), solved with tiny per-node listen snippets while every site file stays identical.

TLS got the same treatment, and the agent taught me something new. For years my cert renewal was an activity I just did every 3 months: open port 80 on the router, run the renewal script on the gateway, close everything up again. I simply didn't know DNS-01 existed. This happens when you just follow home lab guides and don't do further research. Now it's one wildcard cert, validated through DNS instead of an open port, renewed automatically, synced to all three nodes by a deploy hook, phone notification included. This already removed one of the things I had to maintain manually, and because every node carries the same cert, both my primary and my fallbacks can serve my self hosted services.

## Hour 20–24: The password store gets a parachute

Vaultwarden's SQLite database is now continuously replicated. Litestream streams the WAL to the NAS every 10 seconds, taking the recovery point from hours down to seconds. Honestly though, the number wasn't the point for me. The point is that a failover now exists at all: a standby container on the Pi 5 sits cold but ready until needed, and one script to promote it restores the newest replica, starts the standby, and flips the nginx upstream. Same URL, same cert; the apps never notice.

The agent's own call, which I agreed with: no auto-promotion. A monitor can't distinguish "app dead" from "network blip", and auto-promoting a live password database forks it into two unmergeable copies (split-brain). So for now the alert tells me; I run one command; my phone confirms. For a password store that trade is right, especially since Bitwarden clients cache vaults offline anyway. (For now, because the next step is closing that loop: an AIOps agent that investigates an alert on its own, tells me whether it's down for real, and runs the promotion for me. More on that below.)

Then we drilled it, live: killed the primary, promoted, verified the vault served publicly from the standby (648 entries intact), failed back. ~3 minutes of write-downtime. And the drill earned its keep, as it flushed out a stale certificate path that would have blocked a real failover. That's why you drill.

```
NORMAL                              FAILOVER (one command)
gateway: Vaultwarden                 pi5: promote
   │ WAL stream (10 s)                 1. restore newest replica
   ▼                                   2. start standby
  NAS  ◀──────────────                 3. flip nginx upstream
                                       4. notify phone
```

## To summarize

| | Before | After |
|---|---|---|
| fail2ban | permanent bans, no whitelist, no alerts, stopped | LAN-immune, every ban alerts on my phone |
| Monitoring | none | 16 monitors + backup dead-man's-switch + external check |
| Secrets | scattered files | Vaultwarden only, runtime-fetched |
| Edge | one Pi, single point of failure | 3-node VIP, ~10 s self-healing failover |
| TLS | manual, downtime, port 80 games | wildcard, DNS-01, fully automatic |
| Passwords | no failover, recovery from backups (hours) | streamed replica, drill-tested one-command failover |
| Docs | aspirational, unmanaged | live wiki: runbooks, tracker, incident log |

## What I learned

1. **Audit before fixing.** Half the value was discovering what was actually running (and exposed).
2. **Alert on absence, not just failure.** The backup heartbeat pattern is trivial and catches the scariest failure mode: silence.
3. **Drills find what reviews miss.** A planned 3-minute outage found a bug and saved me from finding it in a real one.
4. **Keep humans in the loop where data can fork.** Automate detection and recovery mechanics; keep the promote decision human.
5. **Runbooks are the real deliverable.** Every procedure is now documented well enough that I can drive it without the AI.
6. **Once someone else depends on it, it's infrastructure, not just a hobby.** That's the real bar all of this has to clear: reliable enough that the people around me never have to think about it.

Next up: wiring the alerts into an AIOps/SRE agent, powered by Hermes, that investigates on its own, confirms whether something is really down, tells me what it found, and handles the recovery. But that's the next post.
