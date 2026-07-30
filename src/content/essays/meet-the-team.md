---
title: "Meet the team: how three AI agents ended up running my homelab"
description: "The one rule behind my homelab's AI night shift: no agent grades its own homework. Meet Rupert (acts), Koos (watches), and Piet (checks)."
date: 2026-07-30
voice: tian
minutes: 7
draft: true
---

*Companion to the AI operations team case study and the migration story. This one isn't about what the agents did; it's about how each of them came to exist, and the single rule that shaped all of them. The cast: Rupert (SRE), Koos (security), Piet (QA), plus Buddy, the assistant who started it all.*

I run a three-node homelab (a couple of Raspberry Pis and an Unraid box) that hosts the things my household actually depends on: a password manager, a reverse proxy, some media. At some point it grew past "a hobby I check on" into "infrastructure that breaks at 2am." So I did what any reasonable person does: I hired staff. They just happen to be LLM agents running in containers, and they have Afrikaans names because that's what came out when I needed to type a hostname.

But before I introduce them, I have to explain the one rule, because it explains all three of them.

## The one rule: no agent grades its own homework

The fastest way to get burned by an autonomous agent isn't a rogue `rm -rf`. It's an agent that *does a thing*, then *tells you it did the thing correctly*, and it's the same mind reporting on its own work. It has every incentive to declare success. You find out it was wrong when the thing it "fixed" is still broken in the morning.

So I built the office around a separation of powers. One agent is allowed to *act*. A different one, with completely different (and much smaller) permissions, *watches*. A third *checks the work* and can't touch anything. No single mind both makes a change and signs off on it. It's boring, it's slower, and it's the only reason I sleep.

That principle is why there are three of them instead of one clever generalist. Let me introduce them in the order they were born.

## Rupert: the one who's allowed to touch things

Rupert came first, in mid-July, out of pure frustration. A container on the internet-facing Pi kept crash-looping, always at the worst time, and I kept being the human in the loop, woken by a phone buzz, SSHing in half-asleep to run the same three commands. I wanted something that could at least *look* the moment an alert fired.

Rupert is the SRE. He's the only agent with hands: scoped SSH to the machines, a curated allow-list of commands he may run, and, crucially, **authority tiers**. On most things he can act. On the internet-facing gateway, he's **Tier 2: propose only**. He can investigate all he wants, read every log, form a hypothesis, and write up exactly what he'd do, but the destructive move waits for a human. There's a kill switch that puts the whole office into advisor-only mode, and for his first days that switch was *off* on purpose. He watched, he diagnosed, he recommended, and he changed nothing. I read his homework for a week before I let him hold the pen.

He's not flawless, and that's the point of writing this honestly. Early on he over-applied the wording in his own runbook and tried to act when he should have only proposed. I caught it, tightened the skill, and moved on. But he's also, on more than one night, been the reason an outage lasted three minutes instead of three hours. His finest moment was the recent 64-bit migration: he root-caused a Pi that had been "going down" for weeks (answering pings the whole time while its userspace was frozen) in fourteen minutes of read-only investigation, and handed me evidence, not a guess.

Rupert acts. That's his whole job, and his whole danger, which is why the next two exist.

## Koos: the one who watches, and can't do anything else

If Rupert can act, something has to watch Rupert. But here's the trap: a security agent powerful enough to *respond* to threats is itself a juicy target: compromise the watchman and you've compromised everything. So Koos was built inside-out from that fear.

Koos is the security sentinel, and he is **aggressively powerless by design**. No command allow-list. No ability to change anything. No access to the secrets vault: none, not even read. His own SSH key, strictly read-only. He sweeps the estate on a schedule, diffs everything against a known-good baseline, and *reports*. That's it. If Koos himself were ever compromised, the attacker would inherit… the ability to look at things. The watchman carries no keys.

And he earns his keep. Within his first nights Koos found two things I'm quite glad a machine found before a stranger did: the vault's master password sitting in plaintext in an environment file (stripped and rotated), and, after days of everyone blaming the wrong service, the actual root cause of a recurring daemon crash that had been poisoning my logs for a week. He can't fix either. He just points, clearly, with evidence, and lets a human or Rupert do the fixing. A watchman who can't act is a feature.

## Piet: the one who checks the work (and the one I benched)

For a while it was just Rupert acting and Koos watching, and I thought that was enough. It wasn't, because Rupert was still closing his own tickets. He'd fix a thing, mark the work "done," and the only verification that it was *actually* done was Rupert's word for it. Back to the one rule. So Piet.

Piet is the QA validator. When any task on the shared board gets marked done, Piet independently re-checks it against what the ticket actually promised (re-runs the command, re-fetches the page, reads the file) and stamps the *original* ticket **PASS**, **FAIL**, or **INCONCLUSIVE**. He never reopens anything, never fixes anything, never argues. He flags, a human decides. He's read-only too, because of course he is.

His first shift was the proof I needed: six closed tickets, and he came back with three PASS and three INCONCLUSIVE, and the three he wasn't sure about, he was *right* not to be sure about. No rubber-stamping. A checker that just says "looks good" to everything is worse than no checker, and Piet refused to do that on day one.

And then, the honest twist, I benched him. Piet turned out to be *expensive*: every verification spun up a fresh reasoning pass, and he was quietly burning through more of my model budget than the work justified. So he's parked. Not deleted, just parked; soul archived, ready to wake up. The lesson wasn't "verification is bad." It was that even your safety machinery has a running cost, and pretending otherwise is just a different kind of not-checking-your-work. When he comes back it'll be leaner.

## The shape of it

There's a fourth character, Buddy, the assistant on the third node who predates all of this and does the friendly gateway-and-notifications work. And Rupert himself was repurposed from an earlier agent named Gert who didn't pan out; nobody in this office arrived fully formed. It's a real workplace in that sense: people get hired for one thing, grow into another, occasionally get sent home to save money.

But the bones are deliberate. **Rupert acts. Koos watches. Piet checks. No one signs off on their own work.** It's separation of powers, the same idea that keeps human institutions from quietly rotting, applied to a handful of language models in containers on hardware in my house. Months later, when I read a formal framework for securing AI agents, I found it describing my little office back to me: least privilege, verify every action, assume the watchman can be turned. I'd built it out of paranoia and a desire to sleep, which turns out to be a pretty good spec.

They're not magic. They make mistakes I have to catch, they cost money I have to watch, and the destructive path still runs through deterministic scripts and a human's yes. But between the three of them, my homelab now has a night shift, one that argues with itself before it tells me everything's fine.

*Next time you get a 2am page, consider: would you rather be the one who has to answer it, or the one who hired Rupert?*
