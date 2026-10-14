#!/usr/bin/env bash
# Sync the "School Lines" static site from upstream into public/school-lines/.
# Upstream: https://github.com/tiandklerk/school-systems  (its site/ folder is the app).
#
# Run this whenever the school-systems repo changes, then commit public/school-lines/:
#   ./scripts/sync-school-lines.sh && git add public/school-lines && git commit -m "Sync School Lines"
#
# The app is a plain static site (hash routing, relative paths), so it just drops
# into Astro's public/ and serves at /school-lines/.
set -euo pipefail
cd "$(dirname "$0")/.."

REPO="tiandklerk/school-systems"   # private repo; cloned via gh (needs a valid gh login)
SRC=".school-systems-src"        # gitignored, throwaway clone of upstream
DEST="public/school-lines"

rm -rf "$SRC"
# Private repo: use gh so it authenticates with your GitHub login.
# If this fails with a 401/auth error, run: gh auth refresh -h github.com
gh repo clone "$REPO" "$SRC" -- --depth 1 -q
REV="$(git -C "$SRC" rev-parse --short HEAD)"

rm -rf "$DEST"
mkdir -p "$DEST"
cp -r "$SRC/site/." "$DEST/"

# Blog-side attribution: name the original author in the footer. Upstream carries a
# generic "Inspired by a Dutch School Line map" line; this re-applies the explicit
# credit on every sync so it survives future pulls. Idempotent and tolerant.
python3 - "$DEST/index.html" <<'PY'
import sys
p = sys.argv[1]
s = open(p, encoding="utf-8").read()
old = '<p>Inspired by a Dutch “School Line” map. Built as a static site; see README to add a country.</p>'
new = ('<p>Inspired by <a href="https://www.reddit.com/user/trunobozzini2" rel="noopener">u/trunobozzini2</a>’s '
       'Dutch “School Line” map, expanded here to 38 systems. Built as a static site; see the README to add a country.</p>')
if old in s:
    open(p, "w", encoding="utf-8").write(s.replace(old, new))
    print("  credit applied")
elif "trunobozzini2" in s:
    print("  credit already present upstream")
else:
    print("  WARNING: footer line not found - credit NOT applied (did upstream change it?)")
PY

echo "synced School Lines @ $REV -> $DEST ($(find "$DEST" -type f | wc -l) files)"

# The staging dev server (Vite) loses track of files replaced under public/ via
# rm+copy, and then 404s them. Restart it so the viewer serves the fresh copy.
# Best-effort and staging-only; a no-op anywhere the service isn't running.
if command -v systemctl >/dev/null 2>&1; then
  if XDG_RUNTIME_DIR="${XDG_RUNTIME_DIR:-/run/user/$(id -u)}" \
       systemctl --user restart blog-staging.service 2>/dev/null; then
    echo "  restarted staging dev server"
  fi
fi
