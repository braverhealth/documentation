# Every /_astro/ and /files/ URL referenced by built HTML must exist.
import html, re, os, glob, sys, urllib.parse
dist = sys.argv[1]; missing = set(); total = 0
for f in glob.glob(f'{dist}/**/*.html', recursive=True):
    for m in [html.unescape(x) for x in re.findall(r'(?:src|srcset|href)="([^"]+)"', open(f, encoding='utf8').read())]:
        for u in re.split(r'\s+\d+(?:\.\d+)?[wx],?\s*', m):  # srcset: "url 1x, url 2x"
            u = u.strip()
            if u.startswith(('/_astro/', '/files/')):
                total += 1
                if not os.path.exists(dist + urllib.parse.unquote(u.split('#')[0])): missing.add(u)
print(f'{dist}: asset refs {total}, missing {len(missing)}', sorted(missing)[:3])
