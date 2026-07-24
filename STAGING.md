# Staging & drafts workflow

A local-only way to review drafts, preview the public site, and leave notes —
no external service, nothing deployed until you say so.

## The two local views

Drafts (`draft: true` in a post's frontmatter) are **visible in local dev** and
**hidden in the deployed build**. That gives you two views:

| Command | URL | Shows | Use it to |
|---|---|---|---|
| `npm run dev` | http://localhost:4321 | Everything, **including drafts** | Review drafts as real blog pages |
| `npm run build && npm run preview` | http://localhost:4321 | **Published only** (drafts hidden) | See exactly what the world sees |

In the dev view, drafts are marked: an amber `draft` badge on the homepage card
and an amber banner at the top of the draft's page. Neither ever reaches the live
site — the deploy runs a production build, which drops all drafts.

> The live site only ever changes when something is pushed to `main` **and** its
> `draft:` is `false`. Local dev never publishes anything.

## The `staging` branch

`main` is the branch GitHub Actions deploys. Keep works-in-progress and review
notes on the `staging` branch so `main` stays clean and publish-ready.

```bash
git checkout staging        # switch to the staging branch
npm run dev                 # review drafts + notes locally at localhost:4321
# ...edit drafts, add notes...
git add -A && git commit -m "notes on the homelab draft"
git push -u origin staging  # push so Claude can review
```

When a post is ready to publish, its change moves to `main` and `draft:` is
flipped to `false` (Claude can do the merge/flip, or you can).

## Leaving notes for Claude (goal 3, the simple version)

Because drafts never deploy, you can write review notes straight into a draft and
they'll render as a visible callout in your local dev view. Use a `NOTE:` line:

```markdown
> **NOTE:** this paragraph feels long — can we cut it to two sentences?
```

Then tell Claude "check my notes on the homelab draft." Claude scans for `NOTE:`
markers, addresses each, and removes the marker. (This is deliberately low-tech —
a real in-browser editor would mean running a CMS, which we're not doing.)

## Cheat sheet

```bash
git checkout staging                  # work area for drafts + notes
npm run dev                           # staging view (drafts visible) → localhost:4321
npm run build && npm run preview      # world view (drafts hidden)   → localhost:4321
```
