---
title: "Well, Looks Like Working Remote Is Over"
description: "Robots are shaped like humans because the world is built for humans to operate. Give an AI agent the same screen, mouse, and keyboard, and you've built something universal and very hard to detect."
date: 2026-07-23
voice: tian
minutes: 5
draft: false
---

Have you ever wondered why (most) robots are shaped like humans? Maybe you already know: it's because the world was designed to be interacted with by humans. A humanoid robot can interact with anything a human can. Place a robot in a car and you have a self-driving car.

I did a case study (please feel free to read it in full [here](/essays/agent-at-the-end-of-a-usb-cable/)) where I worked with Claude to write a harness for any tool-calling, Sonnet-level agent to be able to drive any desktop using a networked [PiKVM](https://pikvm.org/). Now you may think, "But Tian, this can already be solved at the OS level, like Anthropic's own Computer Use," to which I would reply, "You're missing the point: it's not efficiency, it's universality."

This means you can automate things that previously required some type of access to your OS-level API, SSH, or a CLI. You also don't need to stitch a workflow together. Copying data from one system to another would once have required API calls and access; now it just needs a USB and HDMI cable, the same thing you'd need to interact with your computer. API integration would most probably be more efficient and consistent, but this is more universally applicable, whether it's Mac, Linux, or Windows.

So now the reality is that a person can automate a task or have an agent autonomously "do their job" (not sure AI is that good yet). If they're willing to risk it, it can act on their behalf; it can answer their Slack, Teams, or Outlook. Hell, it's possibly simpler and cheaper than sub-contracting. And the issue is a company would be none the wiser, as this is essentially undetectable, since HID and HDMI can be spoofed. The cost barrier is also coming down: multimodal Sonnet-level is affordable, and the ability to create specialised agents is simpler than ever. In fact, the cost barrier can also be acquiring a Mac Mini or AI card and running local LLMs (at least this is sort of more secure).

I know the title seems a little melodramatic, but it got you to read this. More seriously, the security landscape for organisations is getting hazier and more volatile by the day. This use case introduces an attack vector or misuse that would be hard to detect, which means a way to protect against a user doing this is to physically secure the hardware. Keep it in a controlled space, like the office, so running a networked KVM is harder. It's just a matter of time.

P.S. If you are curious about this, please find my repo [here](https://github.com/tiandklerk/kvmpilot). Also, full transparency: I found another person who built a version of this while fact-checking (`kultivatorconsulting/pikvm_mcp_server`, though I did not explore further than confirming it exists), as well as Sipeed NanoKVM-Go / NanoKVM-Pro, commercial KVM hardware with an "AI Agent" feature built into the firmware itself. This proves my concern and means there may be more.
