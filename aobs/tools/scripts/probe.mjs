import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright');
const [,, url, w = 1440, h = 900] = process.argv;
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: +w, height: +h } });
p.on('pageerror', (e) => console.log('PAGEERROR', e.message)); p.on('console', (m) => m.type() === 'error' && console.log('CONSOLE', m.text().slice(0, 200)));
await p.goto(url, { waitUntil: 'load' }); await p.waitForTimeout(1500);
const H = await p.evaluate(() => document.documentElement.scrollHeight);
for (let y = 0; y < H; y += 500) { await p.evaluate((yy) => window.scrollTo(0, yy), y); await p.waitForTimeout(250); }
await p.waitForTimeout(800);
console.log(await p.evaluate(() => { const r = [...document.querySelectorAll('.reveal')]; return { total: r.length, notIn: r.filter((e) => !e.classList.contains('in')).map((e) => e.className.slice(0, 40) + ' | ' + (e.textContent || '').slice(0, 40)) }; }));
await b.close();
