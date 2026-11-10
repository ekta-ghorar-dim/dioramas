import lighthouse from 'lighthouse'; import * as chromeLauncher from 'chrome-launcher';
const chrome = await chromeLauncher.launch({ chromePath: '/opt/pw-browsers/chromium', chromeFlags: ['--headless=new', '--no-sandbox'] });
const r = await lighthouse(process.argv[2], { port: chrome.port, output: 'json', logLevel: 'error', onlyCategories: ['accessibility'] });
for (const i of r.lhr.audits['color-contrast'].details?.items || []) console.log(i.node.snippet.slice(0, 160), '|', i.node.explanation.split('\n')[1]?.slice(0, 120));
await chrome.kill();
