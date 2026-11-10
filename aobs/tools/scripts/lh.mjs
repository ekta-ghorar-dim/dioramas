// Usage: node scripts/lh.mjs <port> <vXX> [path ...]   -> writes docs/reviews/lighthouse/<vXX>.json and prints a table
import lighthouse from 'lighthouse'; import * as chromeLauncher from 'chrome-launcher'; import desktopConfig from 'lighthouse/core/config/desktop-config.js'; import fs from 'fs';
const [,, port, ver, ...paths] = process.argv; const urls = paths.length ? paths : ['/', '/broadcast'];
const chrome = await chromeLauncher.launch({ chromePath: '/opt/pw-browsers/chromium', chromeFlags: ['--headless=new', '--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const res = [];
for (const p of urls) for (const mode of ['mobile', 'desktop']) {
  const r = await lighthouse(`http://localhost:${port}${p}`, { port: chrome.port, output: 'json', logLevel: 'error', onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'] }, mode === 'desktop' ? desktopConfig : undefined);
  const l = r.lhr; const a = l.audits; const sc = (k) => Math.round((l.categories[k].score ?? 0) * 100);
  const row = { path: p, mode, perf: sc('performance'), a11y: sc('accessibility'), bp: sc('best-practices'), seo: sc('seo'), LCP: +(a['largest-contentful-paint'].numericValue / 1000).toFixed(2), CLS: +a['cumulative-layout-shift'].numericValue.toFixed(3), TBT: Math.round(a['total-blocking-time'].numericValue), FCP: +(a['first-contentful-paint'].numericValue / 1000).toFixed(2), SI: +(a['speed-index'].numericValue / 1000).toFixed(2),
    fails: Object.values(a).filter((x) => x.score !== null && x.score < 0.9 && ['binary', 'numeric', 'metricSavings'].includes(x.scoreDisplayMode) && Object.values(l.categories).some((c) => c.id !== 'performance' && c.auditRefs.some((ref) => ref.id === x.id && ref.weight > 0))).map((x) => x.id) };
  res.push(row);
}
await chrome.kill();
fs.mkdirSync('/home/user/docs/reviews/lighthouse', { recursive: true }); fs.writeFileSync(`/home/user/docs/reviews/lighthouse/${ver}.json`, JSON.stringify(res, null, 2));
console.table(res.map(({ fails, ...r }) => r)); res.forEach((r) => r.fails.length && console.log(r.path, r.mode, 'failing:', r.fails.join(', ')));
