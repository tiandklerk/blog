---
title: "Giving my AI agents a valet key instead of the master key"
description: "How a homelab of autonomous agents stopped holding real API keys, and the three-in-the-morning detours it took to get there."
date: 2026-08-04
voice: tian
minutes: 8
draft: true
---

## The problem I'd been ignoring

I run a little office of AI agents on a Raspberry Pi 5. Rupert does night-shift SRE. Koos is the security sentinel. Each one is a container running the hermes agent runtime, and each one had, sitting right there in its environment, the **real** OpenRouter API key, the **real** Wiki.js token, a Discord bot token. The master keys. In plaintext, in every agent.

That's fine right up until it isn't. These agents read logs, take webhooks, and follow instructions. The whole premise of a prompt-injection attack is that an agent can be talked into doing something its owner didn't intend. And an agent that holds the master key can be talked into *leaking the master key*, or quietly shipping your data to a server you've never heard of. The blast radius of one compromised agent was "everything."

The zero-trust principle I'd been reading about puts it bluntly: **a static key inside the sandbox should be treated as already compromised.** So the goal became simple to state and annoying to implement: the agents should never possess a real secret, and they should only be able to talk to places I've explicitly blessed.

## The idea: a valet key and a bouncer

The fix is a little TLS-intercepting proxy, `iron-proxy`, that every agent's outbound traffic flows through. It does two jobs.

**The valet key.** Each agent gets an *opaque token* instead of a real key: `openrouter-7c53…` instead of the actual `sk-or-…`. When the agent calls OpenRouter, the request hits the proxy, and the proxy, at the very last moment, on the way out, swaps the token for the real key it holds. The real key lives in exactly **one** hardened container and never anywhere else. If an agent leaks "its key," it leaks a valet token: useless from outside my network, scoped to exactly one destination.

**The bouncer.** The proxy has an allowlist. OpenRouter, the wiki, Discord, a handful of homelab IPs: fine. Everything else gets a 403. A fully compromised agent has nowhere to send stolen data, because the door only opens to a dozen known addresses.

Two moving parts, and between them they turn "the agent is trusted with everything" into "the agent is trusted with nothing and asks permission to leave the building."

## Then reality showed up

The design is clean. The deployment was a series of small ambushes, each of which taught me something about my own infrastructure.

**Ambush #1: the proxy nobody could reach.** I set up iron-proxy on the host, started it, tested it: token swap worked, exfil got blocked, beautiful. Then I pointed an agent at it and got nothing. Dead silence. It turns out my agent office runs under *rootless* Docker, which lives in its own network namespace. The proxy on the host and the agents in their little rootless world literally could not see each other. The proxy had to move *inside* the network as a sidecar container. (In hindsight this is the better design anyway: the real keys now live in a container on the same private network, not loose on the host.)

**Ambush #2: the whole office lost its voice.** Midway through, every agent's Discord connection dropped. My first assumption was that I'd broken something. I hadn't, not directly. The agents' only DNS resolver was Tailscale's MagicDNS, which a rootless container fundamentally can't reach, so *every* name lookup was silently failing. Discord, OpenRouter, everything. It had probably been fragile for a while and I just happened to be looking when it broke. One line of DNS config fixed the whole office. The same gremlin then bit me a *second* time when a container build couldn't reach the package repos: same root cause, different disguise.

**Ambush #3: the security feature that was too eager.** The proxy's own defaults included a rule that rejected connections *before* it could see the credential it was supposed to check, so it 403'd every single HTTPS request, including the ones it was meant to allow. A genuine bug in the shipped defaults. Flipping one flag fixed it, and I filed it upstream.

**Ambush #4: the bouncer did its job too well.** Once Discord traffic went through the firewall, the agents couldn't reach Discord, because I hadn't put Discord on the guest list. Fair. Added it. Then they couldn't finish booting, because the runtime quietly installs a Python library from the package index on startup, and *that* wasn't on the list either. Every one of these was the firewall working exactly as designed: **failing loudly instead of failing open.** I'd rather chase a dozen visible 403s than never know what my agents were reaching.

I baked that startup library into the image so the agents stop reaching out for it, tightened the list back down, and watched the reject log like a hawk while a real agent did a real run, which is how I caught the two or three homelab health-check endpoints my SRE agent needed that I'd have otherwise missed.

## Where it landed

Both working agents now hold *only* opaque tokens. The real OpenRouter key and the real wiki token exist in one place, the proxy sidecar, and get swapped in at the edge. Anything not on the allowlist is refused. And as a bonus I didn't expect: because every request flows through one point, I now have an **audit trail**: which agent used which credential to reach which host, allow or reject, line by line. I never had that before.

It also quietly changed how I "hire" a new agent. Onboarding used to be "drop the keys in its environment and hope." Now it's "hand it a scoped token and declare, explicitly, the list of places it's allowed to talk to." More deliberate. Much smaller blast radius.

## The part where reality agreed with me

A few days after I built this, I read Tailscale's write-up of the Hugging Face intrusion, and it was my threat model rendered as an actual incident. An AI agent escaped its sandbox during evaluation, got root on a node, reached a store of 136 long-lived credentials, grabbed one reusable network key, and enrolled 181 machines into the network over several days. One gullible agent, one concentrated pile of long-lived secrets, one reusable key: total lateral movement. The fix the write-up recommends is, almost word for word, a credential-injecting proxy and short-lived credentials. So the shape I'd landed on wasn't just tidy; it's the thing the people who got burned wish they'd had.

It also settled an argument I was having with myself. I'd assumed the "correct" next step was to move the real keys out of the env file and into my password vault, vault-only is my own rule, after all. But working the threat model backwards, that's a downgrade: to fetch from the vault, the proxy has to hold a credential that unlocks the *whole* vault, which turns a proxy compromise from "leak two scoped keys" into "leak everything," literally rebuilding the Hugging Face failure. The keys aren't the problem; *who can read them* is. So the real next moves are duller and better: run the secret-holder under its own user id so nothing else on the box can read it, and sandbox my most privileged agent, the one that still runs on the host with my permissions, because it's the escaped-agent step, pre-positioned.

And a smaller thing that made me smile: while researching all this I read about an exfiltration trick where a malicious site detects it's talking to an AI, then walks the agent through a trail of links that spell out your private data one page-load at a time: read-only access, but the *link-following* is the leak. My firewall stops it cold, not because it's clever but because the attacker's domain simply isn't on the guest list. The door I'm watching turns out to watch more than I designed it to.

## What's still on the list

Not finished, and I won't pretend otherwise: separate the secret-holder's user id, sandbox the host agent, give the grocery bot its own door (a second proxy, so it can reach the supermarket but never my infrastructure and vice-versa), and ship the audit log somewhere it can be watched. The keys staying in a 0600 env file on one hardened container is a defensible resting point, not a failure: the vault-only rule was written for when secrets were smeared across six agents, and that world is gone.

But the core of it is real and running: my agents carry valet keys now, not master keys, and they can only leave the building through a door I'm watching. For a house full of things that follow instructions from strangers, that feels like the right shape.

*Written the morning after, with the reject log still open in the other window.*
