// Usage: node scripts/snap.mjs <url> <out.png> [width] [height] [waitMs] [scrollY] [fullPage]
import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright');
const [,, url, out, w = 1440, h = 900, wait = 4000, sy = 0, full = ''] = process.argv;
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: +w, height: +h }, isMobile: +w < 500, hasTouch: +w < 800 });
p.on('pageerror', (e) => console.log('PAGEERROR', e.message)); p.on('console', (m) => m.type() === 'error' && console.log('CONSOLE', m.text().slice(0, 300)));
await p.goto(url, { waitUntil: 'load' }); await p.waitForTimeout(+wait);
if (+sy) { await p.evaluate((y) => window.scrollTo(0, y), +sy); await p.waitForTimeout(1200); }
await p.screenshot({ path: out, fullPage: !!full, timeout: +(process.env.SHOT_TIMEOUT || 30000) }); await b.close();
