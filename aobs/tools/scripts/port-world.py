#!/usr/bin/env python3
"""Port a Dioramas example world into an AOBS version folder.
Usage: python3 -I port-world.py <version> <slug>
Copies engine + world modules to src/dio/, models/images to public/, writes src/app/world-markup.ts (body HTML as a
template string, scripts removed), src/app/WorldBoot.tsx and src/app/page.tsx (fonts imported from @fontsource)."""
import sys, os, re, shutil, json, subprocess
ver, slug = sys.argv[1], sys.argv[2]
D = '/home/user/ekta-ghorar-dim/dioramas'; V = f'/home/user/versions/{ver}'
ex = f'{D}/examples/{slug}'
os.makedirs(f'{V}/src/dio/core', exist_ok=True)
for f in ['assets', 'engine', 'input', 'reflector', 'scroll', 'textures', 'ui', 'volumetric']:
    shutil.copy(f'{D}/src/core/{f}.js', f'{V}/src/dio/core/')
shutil.copy(f'{D}/src/core/ui.css', f'{V}/src/dio/core/')
shutil.copy(f'{D}/LICENSE', f'{V}/src/dio/LICENSE-dioramas.txt')
s = open(f'{V}/src/dio/core/ui.js').read()
s = s.replace("import { WORLDS } from './worlds.js';\n", '')
if 'export function worldNav' in s and 'return null; }' not in s:
    s = s[:s.index('/** Small collection navigator')] + "/** Dioramas' cross-world navigator is not used on the AOBS site. */\nexport function worldNav() { return null; }\n"
open(f'{V}/src/dio/core/ui.js', 'w').write(s)
for f in os.listdir(f'{V}/src/dio/core'):
    if f.endswith('.js'):
        p = f'{V}/src/dio/core/{f}'; t = open(p).read().replace('import.meta.env.BASE_URL', "'/'"); open(p, 'w').write(t)
dst = f'{V}/src/dio/{slug}'; shutil.rmtree(dst, ignore_errors=True); os.makedirs(dst)
for f in os.listdir(ex):
    if f.endswith('.js') or f.endswith('.css'):
        t = open(f'{ex}/{f}').read().replace("'../../src/core/", "'../core/").replace('import.meta.env.BASE_URL', "'/'")
        t = re.sub(r"\n\s*worldNav\([^)]*\);", '', t)
        open(f'{dst}/{f}', 'w').write(t)
for sub in ['models', 'img']:
    src = f'{D}/public/{sub}/{slug}'
    if os.path.isdir(src): shutil.copytree(src, f'{V}/public/{sub}/{slug}', dirs_exist_ok=True)
html = open(f'{ex}/index.html').read()
fonts = re.findall(r'family=([^&"]+)', html)
body = re.search(r'<body[^>]*>(.*)</body>', html, re.S).group(1)
body = re.sub(r'<script[^>]*>.*?</script>', '', body, flags=re.S).replace('`', '\\`').replace('${', '\\${')
open(f'{V}/src/app/world-markup.ts', 'w').write(f'// Dioramas "{slug}" structure; copy rewritten for AOBS. Server-rendered HTML.\nexport const WORLD_HTML = `{body}`;\n')
open(f'{V}/src/app/WorldBoot.tsx', 'w').write("""'use client';
import { useEffect } from 'react';

/** Boots the Dioramas scene once the server-rendered markup is in the page. */
export function WorldBoot() {
  useEffect(() => {
    import('../dio/%s/main.js').catch((e) => console.error('[world] failed to start', e));
    // The scene owns the window (canvas, smooth scroll, cursor); leaving via client navigation reloads cleanly.
    return () => { setTimeout(() => { if (location.pathname !== '/') location.reload(); }, 0); };
  }, []);
  return null;
}
""" % slug)
print('fonts in source:', fonts)
print('done', dst)
