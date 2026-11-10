// Scroll stops for heavy WebGL pages: node kshots.mjs url outprefix w h stops(comma fractions)
import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright');
const [,, url, out, w = 1280, h = 760, stops = '0.15,0.35,0.6,0.9'] = process.argv;
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: +w, height: +h } });
await p.goto(url, { waitUntil: 'load' }); await p.waitForTimeout(35000);
const H = await p.evaluate(() => document.documentElement.scrollHeight - innerHeight);
let i = 0;
for (const f of stops.split(',').map(Number)) {
  await p.evaluate((y) => (window.__lenis ? window.__lenis.scrollTo(y, { immediate: true }) : window.scrollTo(0, y)), Math.round(H * f));
  await p.waitForTimeout(14000); await p.screenshot({ path: `${out}-${i++}.png`, timeout: 240000 });
}
await b.close();
