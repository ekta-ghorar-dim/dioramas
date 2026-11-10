import lighthouse from 'lighthouse'; import * as chromeLauncher from 'chrome-launcher';
const chrome = await chromeLauncher.launch({ chromePath: '/opt/pw-browsers/chromium', chromeFlags: ['--headless=new', '--no-sandbox'] });
const r = await lighthouse(process.argv[2], { port: chrome.port, output: 'json', logLevel: 'error', onlyCategories: ['performance'] }); const a = r.lhr.audits;
console.log(Object.keys(a).filter(k=>/lcp|largest/.test(k))); const k=Object.keys(a).find(k=>/lcp-breakdown|largest-contentful-paint-element|lcp-discovery/.test(k)); console.log(k, JSON.stringify(a[k]?.details).slice(0,1500));
const reqs = a['network-requests'].details.items.filter((i) => /image|webp|woff/.test(i.mimeType || i.url)).map((i) => `${Math.round(i.networkRequestTime)}→${Math.round(i.networkEndTime)} ${Math.round(i.transferSize / 1024)}KB ${i.url.slice(-90)}`); console.log(reqs.join('\n'));
await chrome.kill();
