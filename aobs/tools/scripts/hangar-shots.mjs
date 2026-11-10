import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright');
const [,, url, out] = process.argv;
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1280, height: 760 } });
await p.goto(url, { waitUntil: 'load' }); await p.waitForTimeout(35000);
await p.screenshot({ path: `${out}-0.png`, timeout: 240000 });
await p.keyboard.down('Space'); await p.waitForTimeout(9000); await p.keyboard.up('Space'); await p.waitForTimeout(25000);
await p.screenshot({ path: `${out}-1.png`, timeout: 240000 });
const H = await p.evaluate(() => document.documentElement.scrollHeight - innerHeight);
for (const [i, f] of [[2, 0.3], [3, 0.62]]) { await p.evaluate((y) => (window.__lenis ? window.__lenis.scrollTo(y, { immediate: true }) : scrollTo(0, y)), Math.round(H * f)); await p.waitForTimeout(16000); await p.screenshot({ path: `${out}-${i}.png`, timeout: 240000 }); }
await b.close();
