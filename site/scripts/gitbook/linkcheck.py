# Check internal links + #anchors in the built site (content area only).
import html, os, re, sys, urllib.parse, collections
dist = sys.argv[1]
pages = {}
for root, _, files in os.walk(dist):
    for f in files:
        if not f.endswith('.html') or f == '404.html': continue
        rel = os.path.relpath(os.path.join(root, f), dist).replace('\\', '/')
        # build.format 'file': /a/b is a/b.html, / is index.html (legacy directory format also accepted)
        rel = '/' + re.sub(r'(^|/)index\.html$', '', rel).removesuffix('.html')
        pages[rel.rstrip('/') or '/'] = open(os.path.join(root, f), encoding='utf8').read()
ids = {p: set(re.findall(r'\sid="([^"]+)"', h)) for p, h in pages.items()}
bad = collections.Counter(); badpages = collections.defaultdict(set); total = 0
for p, h in pages.items():
    m = re.search(r'<div class="sl-markdown-content">(.*)', h, re.S)  # content only, skip chrome
    body = m.group(1) if m else ''
    for href in map(html.unescape, re.findall(r'href="([^"]+)"', body)):
        if href.startswith(('http', 'mailto:', 'tel:', '/_astro')): continue
        if href.startswith('/files/'):
            total += 1
            if not os.path.exists(os.path.join(dist, urllib.parse.unquote(href)[1:])): bad['missing file'] += 1; badpages[p].add(href)
            continue
        total += 1
        url = urllib.parse.urlparse(urllib.parse.unquote(href.replace('&amp;', '&')))
        path = (url.path.rstrip('/') or '/') if url.path else p
        if path not in pages: bad['missing page'] += 1; badpages[p].add(href); continue
        if url.fragment and url.fragment not in ids[path]: bad['missing anchor'] += 1; badpages[p].add(href)
print(f'internal content links: {total}, broken: {sum(bad.values())} {dict(bad)}')
for p, hs in list(badpages.items())[:40]: print(' ', p, '->', sorted(hs)[:3])
