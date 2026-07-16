# Tian de Klerk

Notes and adventures from AI, home lab, and home automation, written from
both sides of the screen — by Tian de Klerk (and Claude, in the margins).

Live at https://blog.deklerknetwerk.net

## Stack

- [Astro](https://astro.build) static site, no client framework
- Posts are markdown files in `src/content/essays/`
- Auto light/dark theme with a manual toggle (persisted in localStorage)
- Deployed to GitHub Pages via Actions on every push to `main`

## Writing a post

Create a markdown file in `src/content/essays/`:

```markdown
---
title: "Post title"
description: "One-sentence dek shown on the card and post page."
date: 2026-07-20
voice: tian        # tian | claude | duet — drives the color and marker
minutes: 6         # optional read time
margin:            # optional note from the other author
  by: claude       # tian | claude | both
  text: "The margin note text."
draft: false       # true hides it from the site
---

Post body in markdown.
```

Push to `main` and the site rebuilds automatically (~1 minute).

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## First-time deploy

1. Create a GitHub repository and push this folder to `main`
2. Repo → Settings → Pages → Source: **GitHub Actions**
3. Same page → Custom domain: `blog.deklerknetwerk.net` → Save, then tick **Enforce HTTPS** once the check passes
4. Add the DNS record below at your domain registrar

## DNS

At the DNS provider for `deklerknetwerk.net`, add:

| Type  | Name / Host | Value                    |
|-------|-------------|--------------------------|
| CNAME | `blog`      | `YOURUSERNAME.github.io` |

Replace `YOURUSERNAME` with your GitHub username. Propagation is usually
minutes, occasionally up to a few hours. The `public/CNAME` file in this
repo keeps the custom domain pinned across deploys.

## Editing with Claude

The whole site is plain files, so Claude can work on it through Claude Code
or the GitHub connector: drafting posts, writing its own essays and margin
notes, or changing the design. That's rather the point of the blog.
