import { createRequire } from 'module'; const { chromium } = createRequire(import.meta.url)('playwright');
const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const p = await b.newPage({ viewport: { width: 1000, height: 600 } }); let n = 0;
p.on('pageerror', (e) => { if (n++ < 2) console.log('PAGEERROR', e.message, '\n', (e.stack || '').split('\n').slice(0, 6).join('\n')); });
p.on('console', (m) => m.type() === 'error' && n < 4 && console.log('CONSOLE', m.text().slice(0, 300)));
await p.goto(process.argv[2], { waitUntil: 'load' }); await p.waitForTimeout(+(process.argv[3] || 15000)); await b.close();
