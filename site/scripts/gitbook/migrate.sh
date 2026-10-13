#!/usr/bin/env bash
# One-shot GitBook -> Starlight migration. Run from the site root:
#   scripts/gitbook/migrate.sh <documentation-repo> [ref=origin/main]
# 1. exports the GitBook spaces at <ref>
# 2. matches English pages to French ones (git history + i18n-map/pairs.json)
# 3. rebuilds GitBook's URL history (for links and redirects)
# 4. converts both languages to src/content/docs (French) and src/content/docs/en (English),
#    writes the sidebar and public/_redirects, then builds and checks the site.
set -euo pipefail
REPO=$(cd "$1" && pwd); REF=${2:-origin/main}
SITE=$(pwd); HERE="$SITE/scripts/gitbook"; WORK=$(mktemp -d)
git -C "$REPO" archive "$REF" | tar -x -C "$WORK/"
node "$HERE/pairmap.mjs" "$WORK" "$REPO" > "$WORK/pairmap.json"
node "$HERE/redirects.mjs" "$REPO" "$HERE/site-fr.json" "$WORK/redirects-fr.txt" "$REF"
node "$HERE/redirects.mjs" "$REPO" "$HERE/site-en.json" "$WORK/redirects-en.txt" "$REF"
rm -rf src/content/docs src/includes public/files
find src/assets -mindepth 1 -maxdepth 1 ! -name brand -exec rm -rf {} +
node "$HERE/convert.mjs" "$WORK" "$SITE" "$HERE/site.json" "$WORK/pairmap.json" "$WORK/redirects-fr.txt" "$WORK/redirects-en.txt" > "$WORK/convert.json"
pnpm astro build
python3 "$HERE/linkcheck.py" dist | head -1
python3 "$HERE/assetcheck.py" dist
echo "Converted. Report: $WORK/convert.json"
