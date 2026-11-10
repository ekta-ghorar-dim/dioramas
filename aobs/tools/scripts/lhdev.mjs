// Lighthouse mobile with real (devtools) throttling instead of simulation, for a second opinion on LCP.
import lighthouse from 'lighthouse'; import * as chromeLauncher from 'chrome-launcher';
const chrome = await chromeLauncher.launch({ chromePath: '/opt/pw-browsers/chromium', chromeFlags: ['--headless=new', '--no-sandbox'] });
for (const u of process.argv.slice(2)) {
  const r = await lighthouse(u, { port: chrome.port, output: 'json', logLevel: 'error', onlyCategories: ['performance'], throttlingMethod: 'devtools' });
  const a = r.lhr.audits; console.log(u, 'perf', Math.round(r.lhr.categories.performance.score * 100), 'LCP', (a['largest-contentful-paint'].numericValue / 1000).toFixed(2), 'TBT', Math.round(a['total-blocking-time'].numericValue), 'CLS', a['cumulative-layout-shift'].numericValue.toFixed(3));
}
await chrome.kill();
