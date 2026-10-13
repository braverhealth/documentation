# Simulate Netlify serving support.braver.net and its alias support-en.braver.net from one dist/ + _redirects.
# Usage: python3 redirect-sim.py <dist> <url-list>...   (prints failures and a summary)
import os, sys, re
dist, *lists = sys.argv[1:]
SITE = 'https://support.braver.net'
rules = []
for line in open(os.path.join(dist, '_redirects'), encoding='utf8'):
    parts = line.split()
    if len(parts) >= 3 and not line.startswith('#'):
        rules.append((parts[0], parts[1], parts[2].endswith('!')))
def page_exists(path):
    path = path.split('#')[0].rstrip('/') or '/'
    return os.path.exists(os.path.join(dist, 'index.html' if path == '/' else path.lstrip('/') + '.html'))
def match(src, host, path):
    m = re.match(r'https?://([^/]+)(/.*)', src)
    shost, spath = (m.group(1), m.group(2)) if m else (None, src)
    if shost and shost != host: return None
    if spath.endswith('/*'):
        base = spath[:-2]
        if path == base or path.startswith(base + '/'): return path[len(base) + 1:] if path.startswith(base + '/') else ''
        return None
    return '' if spath == path else None
def serve(url, hops=0):
    m = re.match(r'https?://([^/]+)(/[^#?]*)?', url)
    host, path = m.group(1), (m.group(2) or '/')
    for src, dst, force in rules:
        splat = match(src, host, path)
        if splat is None: continue
        if not force and host == 'support.braver.net' and page_exists(path): break
        target = dst.replace(':splat', splat)
        if target.startswith('/'): target = SITE + target
        if hops > 3: return ('loop', url)
        return serve(target, hops + 1) if not page_exists(re.sub(r'^https?://[^/]+', '', target)) or 'support-en' in target else ('ok', target, hops + 1)
    if host == 'support.braver.net' and page_exists(path): return ('ok', SITE + path, hops)
    return ('404', url)
total = fails = 0
for lst in lists:
    for url in open(lst):
        url = url.strip()
        if not url: continue
        total += 1
        r = serve(url)
        if r[0] != 'ok': fails += 1; print('FAIL', url, r)
        elif r[2] > 1: print('CHAIN', url, r)
print(f'{total} URLs, {fails} fail')
