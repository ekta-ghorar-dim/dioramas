// Usage: node scripts/shots.mjs <port> <vXX> [--quick]
import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright'); import fs from 'fs'; import path from 'path';
const [,, port, ver, flag] = process.argv;
const out = path.resolve(`/home/user/docs/reviews/screens/${ver}`); fs.mkdirSync(out, { recursive: true });
const pages = flag === '--quick' ? [['home', '/']] : [['home', '/'], ['broadcast', '/broadcast'], ['graphics-data', '/graphics-data'], ['technology', '/technology'], ['backup-streamer', '/technology/backup-streamer'], ['work', '/work'], ['case-bwc-2026', '/work/bwc-2026'], ['about', '/about'], ['contact', '/contact']];
const vps = [['desktop-1440', 1440, 900], ['tablet-768', 768, 1024], ['mobile-390', 390, 844]];
const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
for (const [vn, w, h] of vps) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, isMobile: w < 500, hasTouch: w < 800 });
  const page = await ctx.newPage();
  const errs = []; page.on('pageerror', (e) => errs.push(e.message)); page.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
  for (const [name, url] of pages) {
    await page.goto(`http://localhost:${port}${url}${w >= 1024 ? "?3d=1" : ""}`, { waitUntil: "load" }); await page.waitForTimeout(w >= 1024 ? 3500 : 800);
    await page.waitForTimeout(1800);
    if (name === 'home') await page.screenshot({ path: `${out}/${vn}-home-fold.png` });
    const H = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < H; y += h * 0.7) { await page.evaluate((yy) => window.scrollTo(0, yy), y); await page.waitForTimeout(140); }
    await page.evaluate(() => { document.querySelectorAll('.reveal').forEach((e) => e.classList.add('in')); window.scrollTo(0, 0); }); await page.waitForTimeout(700);
    await page.screenshot({ path: `${out}/${vn}-${name}.png`, fullPage: true });
  }
  if (errs.length) console.log(vn, 'console errors:', [...new Set(errs)].slice(0, 8));
  await ctx.close();
}
await browser.close(); console.log('shots saved to', out);
