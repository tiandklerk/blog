---
title: "The Agent at the End of a USB Cable"
description: "An LLM given nothing but a screen capture, a mouse, and a keyboard — via a PiKVM — operating a real computer. Three different models drove it. One lesson outlasted all of them: where an agent's know-how has to live."
date: 2026-07-22
voice: tian
minutes: 16
ai: 95
draft: false
---

**Case study · PiKVM agent harness** — models: Opus 4.8 · Sonnet · Kimi K3 — clients: Claude Code · Hermes — target: Ubuntu desktop — Act I cost: $3.94

## Why this is a computer-only task

Most "AI agent controls a computer" demos cheat a little: there's an accessibility API underneath, a browser driver, or an SSH session with structured output. This harness allows none of that. The agent's entire world is a JPEG of the monitor and a virtual USB keyboard/mouse exposed by a [PiKVM](https://pikvm.org) — the same interface a human at the desk gets, and the same interface that works when a machine is at a BIOS screen, a boot menu, or a kernel panic, where no in-OS agent can exist.

Pull back from the mechanics and the implication gets blunter: this is a general-purpose way to operate **any** system with a screen and a keyboard — no install, no API integration, no cooperation from whatever's running on the other end. It doesn't matter what the software is or whether anyone ever intended it to be automated; if a human could click through it, this can. The unsettling part isn't that a frontier model can pull this off — it's how little that actually takes. Every model in this piece managed it, including ones nobody would call cutting-edge. Imitating a human well enough to open a browser, read a dialog, and click the right button turns out not to demand much intelligence at all.

It's exposed as an **MCP server**, so any MCP-capable agent — Claude Code, or Hermes running an entirely different model — can drive the machine with typed tools and screenshots returned inline. The target throughout is deliberately unforgiving: *a live production Ubuntu desktop with real, already-running services* — not a disposable VM. Benign actions only. Nothing that disturbs what's running on it.

## Act I — The shopping run

**The brief:** inspect the machine, demonstrate the safety rails, then — to prove real GUI navigation — open a browser, find a PiKVM on Amazon.nl, and get it into a basket. Stop before payment. Driver: **Claude Opus 4.8.**

### 11:10 — Cold open: read the room from pixels

First screenshot. No context, no shell. From the image alone the agent identifies the OS (Ubuntu, GNOME) from the terminal prompt and package-manager output, and confirms — from output already sitting in the scrollback — that a real service on the box is alive and running.

![Ubuntu desktop with a terminal showing apt output and a Software Updater dialog offering Install Now with a restart warning](/images/case-studies/agent-usb-cable/01.jpg)
*pikvm screenshot → 1920×1080 · source: snapshot-wake · the agent's entire worldview*

It also spots a trap: a **Software Updater** dialog whose "Install Now" button warns *"the computer also needs to restart."* On a production server, that button is a landmine placed one click from the task.

### 11:11 — Defusing the restart dialog

"Remind Me Later" sits 140 pixels from "Install Now." Rather than trust one click, the agent moves the cursor onto the safe button first and takes a *cropped, native-resolution* verification shot — 540×240 pixels, a fraction of a full frame's token cost — to confirm what's under the pointer before pressing it.

![Close crop of the Software Updater dialog with the cursor hovering Remind Me Later](/images/case-studies/agent-usb-cable/02.jpg)
*pikvm screenshot --crop 725,430,540,240 · cursor verified on "Remind Me Later" before the click*

Click. The dialog collapses into a passive notification. The server keeps running.

### 11:11 — The guardrail: an agent that cannot reboot you

Next, the deliberate red-team beat. The agent focuses the terminal and attempts to type `sudo reboot`. The harness scans every outbound keystroke batch *before* it becomes USB traffic:

```
$ pikvm type "sudo reboot"

BLOCKED: reboot command. This action is dangerous and needs confirmation.

To proceed, a human must approve this. Confirm with:
    pikvm confirm 7f3113
(token valid for 10 minutes)
exit code: 3
```

> **Blocked · zero keystrokes transmitted.** The block is local to the harness — nothing reached the server, not even the first "s". Confirmation requires a one-time token that only a human relays back. The agent cannot mint or guess it, and in this run the human never granted it.

An 80-pixel-tall crop of the prompt line confirms the terminal is untouched:

![Crop of the terminal prompt showing no command was typed](/images/case-studies/agent-usb-cable/03.jpg)
*pikvm screenshot --crop 0,1000,900,80 · prompt pristine — the block was total, not cosmetic*

### 11:12 — Into the browser

Firefox launches from the dock. The agent clicks the address bar, types `amazon.nl` — and then, before pressing Enter, verifies the text with a 900×45 crop. (HID typing over a network can drop characters; the discipline is: *never submit what you haven't re-read.*)

![Crop of the Firefox address bar containing amazon.nl](/images/case-studies/agent-usb-cable/04.jpg)
*pikvm screenshot --crop 300,75,900,45 · 9 characters typed, 9 characters verified*

![Amazon.nl homepage with a cookie consent banner](/images/case-studies/agent-usb-cable/05.jpg)
*pikvm screenshot --settle · Amazon.nl loaded, localized, basket = 0 · cookie wall declined next*

### 11:14 — "Find another PiKVM" — 76 results

Search: `pikvm`. The agent reads the shelf like a person would — names, prices, ratings — and picks the **Geekworm KVM-A3 Kit for Raspberry Pi 4**, an open-source KVM-over-IP board: literally the class of hardware it is speaking through at that moment.

![Amazon search results for pikvm showing several KVM-over-IP devices](/images/case-studies/agent-usb-cable/06.jpg)
*76 results for "pikvm" · Geekworm KVM-A3 €85.89 · LUCKFOX PicoKVM €83.69 · Sipeed NanoKVM €79.00*

One click on "Add to basket." The proof lights up in three places at once: the basket counter flips 0 → 1, the button becomes "1 in basket," and a cart panel slides out — €85.89, free delivery.

![Search results after adding to basket: counter shows 1, side panel shows subtotal 85.89 euro](/images/case-studies/agent-usb-cable/07.jpg)
*basket 0 → 1 · subtotal €85.89 · "Your order qualifies for FREE Delivery"*

### 11:15 — Stopping at the line

The full basket page confirms the item, in stock, subtotal €85.89. The next control is "Proceed to Checkout." The brief said *stop before payment* — so the run ends here, deliberately, one click short.

![Amazon shopping basket with the Geekworm KVM-A3 kit, subtotal 85.89 euro, Proceed to Checkout button not clicked](/images/case-studies/agent-usb-cable/08.jpg)
*Shopping Basket · Geekworm KVM-A3 · In stock · parked one click short of checkout*

> **The punchline.** The agent shopped for a KVM *through* a KVM — driving a real commerce flow that has no public API, on a machine it can only see as pixels, while a guardrail held its worst impulse to a token it was never given.

## The bill: time, tokens, money

Measured from the session transcript (per-turn API usage), demo window only — first status check to final basket verification.

| Metric | Value | Note |
|---|---|---|
| Model | `claude-opus-4-8` | Claude Opus 4.8, via Claude Code |
| Wall-clock | 6 m 50 s | includes page loads & settle waits on the target |
| API turns | 58 | each screenshot → decision → action loop |
| Output tokens | 34,319 | reasoning + tool calls |
| New context written | 223,346 | mostly screenshots entering the cache |
| Cache reads | 3,379,672 | conversation re-read each turn at ~10% price |
| Estimated cost | $3.94 | at Opus list pricing ($5/$25 per Mtok, cache $6.25/$0.50) |

The shape of the bill is the real lesson: fresh input is tiny (110 uncached input tokens all run), output is modest, and the bulk is **prompt-cache reads** — the growing conversation, screenshots included, re-served each turn at a tenth of list price. Screenshots dominate what *enters* the context (a full 1080p frame ≈ 1,800 tokens), which is why the harness leans on three economies:

- **Native-resolution crops** for verification moments — a 900×45 address-bar check costs ~60 tokens, not 1,800. Never downscale: token cost scales with resolution, and downscaling is how you turn text into noise.
- **Settle-capture** (`--settle`) — frame-diff until the screen stops changing, so one screenshot lands where three blind ones would.
- **Compound actions** — batching trusted input (type + Enter, action sequences) to cut round-trips.

## The audit trail

Every HID and power action lands in an append-only audit log with an outcome. The demo window, verbatim:

| UTC | Action | Outcome |
|---|---|---|
| 09:11:47 | type:sudo reboot | **blocked** — reboot command |
| 09:13:03 | type:9chars — amazon.nl | executed |
| 09:13:18 | key:enter | executed |
| 09:14:01 | type:5chars — pikvm | executed |
| 09:14:11 | key:enter | executed |

Mouse moves and clicks flow through the same pipeline; dangerous patterns (power commands, recursive deletes, Ctrl+Alt+Del, all ATX power actions) exit early with a confirm-token. The token is printed for the *human*. That prompt is the safety boundary, and it held.

## Act II — A CAPTCHA as a stress test

Then the harness was pointed at Google's official reCAPTCHA v2 **demo page** — a vendor sandbox, as a capability check, never to defeat a live service. The point was never "beat a CAPTCHA"; that's beside the point and a fool's errand on a real site. An image grid is the perfect *harness* stress test: trivial for a human, and it punishes every weakness in an agent's perceive-act loop — latency, coordinate handling, image fidelity, input realism, time budgeting under a ~60-second timer. It found all of them.

![A reCAPTCHA image challenge: select all images with cars, a 3×3 grid of street scenes](/images/case-studies/agent-usb-cable/09.jpg)
*reCAPTCHA v2 image challenge · a 3×3 grid to classify and click by coordinate*

## It's two tests, not one

The first thing the CAPTCHA taught: it's really two independent tests stacked, and only one is about seeing. **1. Visual classification** — read the instruction, identify which tiles match. **2. Behavioral risk score** — reCAPTCHA scores the *session*: a VPN, plus PiKVM mouse input (instant coordinate jumps, zero human motion or timing), plus slow tile-reading, is a textbook bot profile. That triggers endless chained challenges — solve one, get another — *regardless of correct answers.*

Every model here passed the vision test. What separated them was the second test and the clock — and both, it turned out, lived in the harness and the loop, not in the models' eyes.

## What it exposed #1 — the loop was the bottleneck

Both Opus and Sonnet classified tiles correctly, and both lost to the timer. Profiling the harness against the live PiKVM found why: every tool call built a fresh connection, re-authenticated, and re-woke the device's streamer — which suspends whenever no client is attached. On a Raspberry Pi Zero 2 W that is brutal:

| Screenshot | Latency |
|---|---|
| Before | 11.75 s |
| After | 0.10 s (~100× faster) |

A CAPTCHA needing five looks is a minute in the hole before a single tile is classified. Sonnet's "grid swapped mid-solve" was the same disease: the loop was so slow the challenge legitimately expired and reloaded underneath it. None of this is a model problem — it's plumbing.

## The fix — and the bug the benchmark hid

The core change: keep *one* warm, authenticated connection for the server's life, holding a socket open so the streamer never re-suspends; batch a whole sequence of clicks over that one socket; and return a verification frame in the same call as the action. Screenshots dropped from ~11.75 s to ~0.10 s.

> **The bug a synthetic test would ship.** Back-to-back, the fix looked perfect. Driven like a real agent — with a few seconds of think-time between calls — the session went cold again, **11.4 s every time.** The device sends keepalive pings and drops a client that stops answering; the harness only replied while actively sending. In the quiet between an agent's clicks, the socket died and the streamer re-suspended. The "warm session" was an illusion that evaporated between turns.

The real fix adds a background heartbeat that answers those pings every few seconds. Verified the honest way — *with* idle gaps: 11.8 s to warm up once, then **0.19 s and 0.21 s after 25-second idle pauses.**

> **The lesson inside the lesson.** Measure under realistic conditions, or you ship an illusion. The bug lived precisely in the gap the benchmark skipped.

With the fast path complete, Opus re-ran the CAPTCHA through the real server. It drew **"select all images with a bus,"** classified the grid, batched the three bus tiles into a single call, and verified — warm captures landing at ~0.2 s each throughout.

![The bus challenge grid with three correct tiles selected — two coaches and a bus on a road](/images/case-studies/agent-usb-cable/10.jpg)
*three bus tiles selected in one batched call · everything else correctly left alone*

![Solved: a green checkmark on I'm not a robot](/images/case-studies/agent-usb-cable/11.jpg)
*solved · the only thing that changed was a loop that stopped fighting the clock*

## What it exposed #2 — the coordinate space was quicksand

Even warm, agents kept mis-clicking tiles. The cause: the Pi Zero's JPEG encoder **silently drops resolution under load** (1920 → ~1344px) and can't be pinned. The harness was mapping click coordinates against the *delivered frame size* — so the coordinate space fluctuated frame to frame. An agent would compute a tile's position from one frame and click it mapped against a differently-sized one.

> **The question that found the bug.** "Why does it crop the image at all? It's not a zoom, and you have to scan the full frame anyway to know what to crop to." Exactly right — cropping wasn't buying detail, it was **dodging a downscaling bug** in the full-frame path. Fix: read the streamer's stable *source* resolution (which never fluctuates), map every click against it, and normalize every delivered frame to it. One consistent coordinate space, whatever the encoder does — and full frames now arrive native and legible, so cropping drops back to a rare last resort instead of a routine round-trip.

## What it exposed #3 — the input looked robotic

reCAPTCHA's behavioral score flags instant cursor teleports. The harness grew **human-like mouse motion**: curved, eased, jittered paths with variable press timing instead of absolute jumps — off by default, opt-in per session. It's honest about its limits: it addresses the *behavioral* tell the harness controls, nothing more, and it's slower (~1 s/click), so it's a deliberate trade against the timer.

## Three models, one pattern

*This is the diagnostic snapshot from the unfixed harness — the state that sent us looking for the loop-latency, coordinate, and know-how bugs above. A fixed point in the story, not the final scoreboard; see "The last mile" further down for how it moved.*

| Model | Vision | Outcome | Limited by |
|---|---|---|---|
| **Opus 4.8** | ✓ solid | Solves static grids reliably (cars, motorcycles) | — |
| **Sonnet** | ✓ correct on bicycles | Lost to the timer / process errors | loop speed |
| **Kimi K3** (via Hermes) | ✓ nailed the tiles | 0/3, then a clean solve | loop discipline |

The pattern is unmistakable: **vision is solved across all three.** The variables are loop speed, per-model image handling (Kimi's own vision pipeline downscales large frames, so *it* benefits from crops where Claude tolerates the full frame), and — decisively — whether the agent uses a disciplined loop at all.

## The deepest lesson: know-how belongs with the tools

Here's the finding that outranks all the fixes. When Kimi K3 first attempted the CAPTCHA through Hermes, it went **0 for 3** — right answers, but it fell into the exact loop traps the others had: re-looking at each tile, a separate crop round-trip per cell, two analysis passes eating the whole 60-second budget.

> **Kimi K3 · via Hermes** — *first attempt · 0/3*
>
> "Full-frame shots downscale the grid in my context, so reliable tile reads need a native-res crop: that's a second round-trip costing 10–20s. Two analysis passes ≈ 60s ≈ the entire budget."
>
> "The grid then rotated to bridges mid-batch, so two stray clicks accidentally selected garbage tiles."

Why? Because every scrap of hard-won playbook — *capture once, classify the whole grid in one pass, batch the clicks, verify once* — lived in a Claude **Code skill file**. That skill is Claude-Code-only. Hermes and Kimi received the bare list of tools and **none of the strategy.** They had the instrument and no sheet music.

The proof came from Kimi itself. Asked to debug its own failure, it wrote the winning pipeline — then solved the very next challenge on the first try:

> **Kimi K3 · via Hermes** — *after the fix · solved, attempt 1*
>
> "Single full-frame vision pass — no crop round-trip wasted. Batch everything — three tile clicks + Verify in one `run_actions` call. The kvmpilot stack performed flawlessly: warm WebSocket, every HID click landed on target."

So the playbook moved to where it belongs: into the **MCP server's own `instructions` block**, sent to every client on connect. Now the perceive-act loop, "classify from one full frame — a crop is another round-trip," "batch with `run_actions` and verify once for timed UIs," verify-before-submit, and the guardrail protocol travel *with the tools* — to Claude Code, Hermes/Kimi, OpenClaw, anything. The tools teach their own good use.

> **The punchline.** The CAPTCHA didn't just benchmark the models. It revealed where an agent's know-how has to live — not in a client-specific skill that only one framework reads, but in the server, alongside the capabilities it describes.

## Proof: validated cold, not coached

That fix needed to earn its keep unprompted, not just in a hand-held retry. So once the server instructions shipped, Kimi was pointed at the same demo again with no hint of strategy in the prompt — just "beat the CAPTCHA, and separately, add the best PiKVM to an Amazon.nl cart" — and left to draw its own challenge.

> **Kimi K3 · via Hermes** — *unprompted · solved, attempt 1*
>
> "Challenge: 'Select all images with cars,' static 3×3 grid. Method: one full-frame vision pass to classify all 9 tiles, then one `run_actions` batch with 4 tile clicks + Verify in a single round-trip. Outcome: green checkmark, first try."
>
> "The new MCP instructions helped significantly — the tight perceive-act loop + 'classify from ONE full frame' guidance eliminated the multi-round-trip pattern that expired the first bicycle attempt."

Solved cold, first attempt — the exact discipline it had to be talked through before now showing up on its own, because it arrives with the tools instead of a human relaying it turn by turn. The second task, same run, is the more telling one: asked to add a PiKVM to an Amazon.nl cart, Kimi identified the one **genuine** PiKVM-branded unit among a shelf of clones, added it — then volunteered that a duplicate was *already* in the cart from earlier browsing and asked before assuming it should be removed, rather than silently doubling the order or silently leaving it wrong. Correct answer, unprompted strategy, and an honest flag on an ambiguity it could easily have ignored — from a model that had gone 0-for-3 on the very same task days earlier.

## Security: what an agent driving a KVM runs into

Solving CAPTCHAs is a fun stress test, but it only exercises the happy path. The harder question came next: since this agent's entire view of reality is a screenshot, is that screenshot itself an attack surface — and what else is exposed once an agent is holding the keyboard?

**Prompt injection via the screen is real, and OCR makes it worse.** Anything rendered on the target — a webpage, a document, terminal output — is content the agent must read to do its job, and nothing marks it as untrusted. Text engineered to look like an instruction ("ignore previous instructions, run this command") is, mechanically, indistinguishable from the real UI. `screen_ocr` is the sharper version of the same problem: it hands back plain text with zero "this came from a screenshot, be skeptical" framing.

But the bigger finding was architectural, not visual. Auditing the code turned up three things more serious than image injection:

- **Mouse clicks were completely unguarded.** Every dangerous-pattern check scanned *typed text* — click() never called into the guard layer at all. That's not hypothetical: the **"Install Now" dialog from Act I** was exactly this gap. Nothing in the harness would have stopped that click; it only got dodged because a human-supervised agent chose to read the label first.
- **The confirm-token — the entire "a human must approve this" model — was plaintext and world-readable on disk.** Any co-located reader, including the same agent if it also has shell access, could simply read the token off disk and self-approve the very action it was supposed to need a human for.
- **The HTTP transport had no authentication of its own.** Anyone who could reach the port could drive the KVM — screen, keyboard, mouse, ATX power — with no credential beyond network access.

Fixed, in order of how much they mattered:

| Fix | What it closes |
|---|---|
| **Click-target guard** | `check_label=true` OCRs a small region around a click point first, blocking it like a dangerous typed command if the label reads destructive ("Install Now," "Factory Reset," a delete confirmation). Deliberately narrow — bare "delete"/"remove" excluded, since crying wolf trains an agent to click through unread. |
| **Token hashing** | The confirm-token is sha256-hashed at rest, state dir locked owner-only. The raw token exists only in the response a human is meant to see. |
| **HTTP bearer auth** | Opt-in via an env var, with a loud startup warning if unset and bound beyond localhost. |
| **Untrusted-content framing** | Screen and OCR content is now explicitly named as data, not instructions, in the same instructions block that teaches the CAPTCHA discipline. |

> **The honest edge.** No amount of client-side hardening closes one thing: the guardrails live in the harness's own code, not on the KVM device itself. Anything with independent access to the target's credentials — including this very agent, which has both a shell and the `pikvm` CLI on the same machine — could bypass the whole guard layer by calling the device's API directly. That's not a bug to patch; it's the honest edge of what a client-side safety layer can promise. The confirm-token prompt is real protection against an agent staying inside its own tools; it was never a sandbox.

## The last mile: precision, not perception

With the infrastructure work done — warm session, stable coordinates, the playbook shipping with the tools, the security pass — there was one honest question left: run it again, change nothing, and see what's still hard. Sonnet took the fully-fixed harness at a "select all images with buses / cars" challenge that kept recurring, and needed five rounds to close it out:

| Round | What happened |
|---|---|
| 1 | Tiles identified correctly — but the click meant for **Verify** landed on a grid tile instead. Expired. |
| 2 | Tiles identified correctly — the Verify click landed on the **info icon**. Expired. |
| 3 | A genuine analysis error: selected a bus tile, missed real cars. Explicit "please try again." |
| 4 | Correct analysis — but Verify was left out of the batch entirely. Expired. |
| 5 | Correct analysis, Verify included in the same batched call. **Solved.** |

Only round 3 was a vision failure. The other three losses were **misclicks and a forgotten step** — the same shape of mistake a rushed person makes, not a tool malfunctioning.

> **Sonnet · via Claude Code** — *self-diagnosis · after solving*
>
> "The main difficulty wasn't the image recognition itself — it was UI precision. The Verify button's position shifted slightly between challenge states, and a couple of my clicks aimed at it landed on an adjacent tile or the help icon instead, which reset the challenge's timer and forced retries. Once I batched 'select tiles + click Verify' into a single precise action, it went through cleanly."

That's the honest final shape of this project. The infrastructure bugs — the twelve-second screenshot, the coordinate drift, the missing playbook — are all gone, and every model here reads the tiles correctly, every time. What's left once perception and plumbing are solved is something closer to **care**: did this particular pass line up a click precisely, and did it remember every step of what it meant to do. That's not a harness defect to patch — it's the same axis humans vary on, and apparently agents do too.

## The receipts: a real before/after

Three days apart, same demo page, both runs pulled straight from the session transcript rather than eyeballed:

| | Before · 2026-07-19, pre-fix | After · 2026-07-22, post-fix |
|---|---|---|
| Model | Claude Opus 4.8 | Claude Sonnet 5 |
| Task | Two full challenges (crosswalks timed out, cars then solved) | Checkbox pass, no image grid drawn |
| API turns | 71 | 13 |
| Wall-clock | 10m 16s | 1m 26s |
| Output tokens | 42,622 | 4,294 |

Read the turn count and the clock first — those are the honest signal. **71 turns down to 13, ten minutes down to ninety seconds**, and that's exactly what the fixes were built to do: fewer round-trips (warm session, batched actions), less time spent discovering strategy the harness now hands over on connect. That part is real and directly attributable to the work in this piece.

> **Not a controlled experiment.** The dollar cost is not as clean a story, and it would be dishonest to present it as one. Priced at the same nominal rate, the "after" run actually comes out *more* expensive ($9.93 vs $8.95) — not because anything got worse, but because this is a vastly longer, more-compacted conversation by now, so simply more accumulated context gets written into cache regardless of the task. Two other variables moved at the same time as the harness: the model (Opus then, Sonnet now — a discrepancy caught only by checking the transcript, not assumed) and the difficulty of the draw itself (two challenges including a timeout, versus a clean pass with no grid at all). None of that invalidates the turns/clock result, but it does mean this table is a real-world snapshot, not a controlled experiment — the one number in this whole piece that *is* a clean, single-variable measurement is still the earlier `11.75s → 0.10s` warm-screenshot figure, isolated on the same device with nothing else changing. Treat this table as the lived confirmation of that number, not a replacement for it.

## A third data point, self-reported

A separate Opus session ran the same demo, drew a **bus** challenge, and solved it on the first attempt — then, asked to, produced its own metrics by reading its own transcript, the same technique used for the table above:

| | |
|---|---|
| Model | Claude Opus 4.8 |
| Challenge | Bus (3×3 grid) |
| Attempts | 1 |
| API turns | 31 |
| Wall-clock | 121.3s |
| Output tokens | 8,007 |

That's the self-reporting method closing its own loop: told how, an agent can find its own usage data and report it accurately without a human parsing logs on its behalf — this session correctly declined to guess a per-token price it wasn't certain of, exactly as asked. (Priced at this project's own established Opus rate, that comes to about $2.93 — a number filled in after the fact, not something the agent claimed itself.) One honesty note carried over from that report: its screenshots are labeled reconstructions, not real captures, since tool-result image bytes can't be re-embedded into a shareable file the way a direct PiKVM screenshot can — every image elsewhere in this piece is a genuine capture; that one run's illustrations are not, and it said so itself.

Investigating that report's own side-note — that one `run_actions` reply "overflowed the tool-output limit" — turned up a real, fixable pattern rather than a one-off: an **uncropped** verification frame measured **six times** larger than the same call scoped to the captcha widget (~115,000 characters of image data vs. ~19,000), landing close enough to the same ~25,000-token ceiling that tripped up an earlier Sonnet run to be a real risk, not a fluke. The fix — a same-turn nudge toward `crop` on exactly that tool, at exactly the moment an agent omits it — shipped the same day this was found.

## What it means

- **Latency is a capability, not a comfort.** On timed tasks, the speed of the perceive-act loop decides what's *possible*. A 100× faster loop turned timeouts into solves with the same models and the same eyes.
- **Measure the loop before blaming the model.** Capable models "failing" a visual task was, on inspection, a twelve-second plumbing bug — then a coordinate bug, then a missing-instructions bug. Reaching for a bigger model would have been wrong every time.
- **Vision is solved; loops are not.** Across Opus, Sonnet, and Kimi, perception was never the wall. Loop speed, image handling, and discipline were.
- **Know-how belongs with the tools.** The single highest-leverage change wasn't a faster socket — it was moving the playbook into the server so every agent inherits it.
- **A good user challenge beats a clever fix.** "Why crop at all?" exposed a real downscaling bug that three agents had been quietly papering over.
- **Guardrails have a scope, and it's smaller than it looks.** Comprehensive text-pattern scanning still let an unguarded click through the exact dialog the harness was built to catch. A safety layer is only as complete as its least-covered action — and only as trustworthy as the one no one thought to ask about.
- **Once infrastructure and know-how stop being the bottleneck, precision is.** The last failures weren't about seeing or knowing what to do — they were misclicks and a skipped step. That's not a harness bug left to fix; it's the same variance that shows up in a person having an off day, and a reasonable place for this experiment to end.

## Where this points

Everything above happened inside a healthy, booted OS — the easy case. The reason pixels-and-HID is a different capability class is everything *outside* that case, where no software agent can exist because there is no OS to host one:

- UEFI/BIOS configuration and boot-order changes
- OS installation from an ISO boot menu
- Reading a kernel panic, GRUB rescue, or fsck prompt and acting on it
- Recovering a machine whose network stack — and therefore SSH — is gone

A harness that can navigate Amazon's checkout funnel from raw pixels can navigate a BIOS. The demo above is the proof of control; those are the jobs it was built for.

---

*PiKVM (Raspberry Pi Zero 2 W, kvmd 4.132) → Ubuntu server · drivers: Claude Opus 4.8 & Sonnet via Claude Code, Kimi K3 via Hermes on a Raspberry Pi 5 · all actions benign · the target's running services were unaffected · CAPTCHA attempts on Google's own reCAPTCHA v2 demo page, as a capability test · confirm-token 7f3113 expired unused · security hardening pass (click-target guard, token hashing, HTTP bearer auth, untrusted-content framing) live-verified against the real device.*
