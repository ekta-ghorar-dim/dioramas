// "Developed by Desiate" credit, shared by every demo: preloader + footer.
// Per demo: [anchor inside .loader, tag, classes copied so the credit uses that loader's type].
const SPOTS = {
  abyssal:   ['.checks', 'p', 'loader-title mono'],
  artemis:   ['.loader-bottom', 'p', 'rd'],
  atlas:     ['.loader-route', 'p', ''],
  ember:     ['.loader-line', 'p', 'loader-line'],
  florae:    ['.loader-sub', 'p', 'loader-sub caps'],
  gambit:    ['.loader-brand', 'p', 'loader-line'],
  hangar:    ['.ld-log li:last-child', 'li', 'on', '› Developed by Desiate', 'font-size:15px;color:#e6eaee;margin-top:6px;opacity:1;transform:none;'],
  horologie: ['.loader-line', 'p', 'caps'],
  keeper:    ['.loader-char', 'p', 'loader-char'],
  koen:      ['.loader-line', 'p', 'loader-line'],
  koi:       ['.loader-line', 'p', 'loader-line'],
  lithos:    ['.loader-line', 'p', 'loader-line'],
  lowfreq:   ['.loader-line', 'p', 'loader-line mono'],
  monolith:  ['.loader-meta', 'p', 'loader-meta mono'],
  nocturne:  ['.ld-line', 'p', 'ld-line'],
  racer:     ['.loader-line', 'p', ''],
  reliquary: ['.loader-line', 'p', 'loader-line'],
  sucre:     ['.loader-g', 'p', 'loader-line'],
  terrarium: ['.loader-line', 'p', 'loader-line'],
  velocity:  ['.loader-bot span:last-child', 'span', '', 'Developed by Desiate', 'font-size:14px;opacity:1;'],
};
const BIG = 'font-size:clamp(15px,1.5vw,19px);letter-spacing:.06em;margin-top:14px;opacity:.9;';

(() => {
  const demo = location.pathname.split('/').filter(Boolean).pop();
  const loader = document.querySelector('.loader');
  const [sel, tag, cls, text, css] = SPOTS[demo] || [];
  const anchor = loader && sel && loader.querySelector(sel);
  if (anchor) {
    const el = document.createElement(tag);
    el.className = 'desiate-credit ' + cls;
    el.textContent = text || 'Developed by Desiate';
    el.style.cssText = css || (BIG + 'text-align:center;');
    anchor.after(el);
  } else if (loader) {
    const el = document.createElement('p');
    el.className = 'desiate-credit';
    el.textContent = 'Developed by Desiate';
    el.style.cssText = BIG + 'position:absolute;left:0;right:0;bottom:32px;text-align:center;';
    loader.append(el);
  }
  const foot = [...document.querySelectorAll('footer')].pop();
  if (foot) {
    const p = document.createElement('p');
    p.className = 'desiate-credit';
    p.textContent = 'Developed by Desiate';
    p.style.cssText = 'margin:0;padding:20px 0;font-size:clamp(14px,1.2vw,17px);letter-spacing:.06em;text-align:center;opacity:.85;';
    foot.append(p);
  }
})();
