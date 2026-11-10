'use client';
import { useEffect, useRef, useState } from 'react';

type S = { clock: number; k: [number, number]; g: [number, number]; t: [number, number]; log: string[] };
const init: S = { clock: 754, k: [7, 5], g: [24.6, 23.1], t: [2, 1], log: [] };
const EVENTS = [
  (s: S, a: number) => { s.k[a]++; s.g[a] += 0.3; return `{"type":"kill","team":"${a ? 'RED' : 'BLU'}","gold":300}`; },
  (s: S, a: number) => { s.g[a] += 0.5; return `{"type":"objective","team":"${a ? 'RED' : 'BLU'}","gold":500}`; },
  (s: S, a: number) => { s.t[a]++; s.g[a] += 0.4; return `{"type":"tower","team":"${a ? 'RED' : 'BLU'}","lane":"mid"}`; },
  (s: S, a: number) => { s.g[a] += 0.1; return `{"type":"gold_tick","team":"${a ? 'RED' : 'BLU'}","delta":100}`; },
];
const mmss = (n: number) => `${String(Math.floor(n / 60)).padStart(2, '0')}:${String(n % 60).padStart(2, '0')}`;

/** "API in, graphic out": a simulated data feed drives a scorebug and gold-lead bar in real time. Demo data, clearly labelled. */
export function LiveData() {
  const [s, setS] = useState<S>(init);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let on = false; const io = new IntersectionObserver(([e]) => { on = e.isIntersecting; }, { threshold: 0.2 });
    if (root.current) io.observe(root.current);
    let n = 0;
    const id = setInterval(() => {
      if (!on) return; n++;
      setS((p) => {
        const s2: S = { clock: p.clock + 1, k: [...p.k] as [number, number], g: [...p.g] as [number, number], t: [...p.t] as [number, number], log: p.log };
        const r = Math.random(); const a = Math.random() > 0.48 ? 0 : 1;
        const ev = n % 2 === 0 ? EVENTS[r < 0.22 ? 0 : r < 0.3 ? 1 : r < 0.34 && s2.t[a] < 9 ? 2 : 3](s2, a) : null;
        if (ev) s2.log = [`${mmss(s2.clock)} ${ev}`, ...p.log].slice(0, 7);
        if (s2.clock > 1500) return init;
        return s2;
      });
    }, 500);
    return () => { clearInterval(id); io.disconnect(); };
  }, []);
  const lead = s.g[0] - s.g[1]; const pct = Math.max(8, Math.min(92, 50 + lead * 9));
  return (
    <div ref={root} className="grid gap-4 lg:grid-cols-[minmax(0,5fr)_auto_minmax(0,7fr)] lg:items-stretch">
      <div className="panel brackets flex flex-col p-4 md:p-5" aria-hidden="true">
        <div className="flex items-center justify-between"><span className="mono text-accent">Game API · in</span><span className="mono text-mute">WS · 200 OK</span></div>
        <pre className="mt-4 h-[168px] overflow-hidden font-mono text-[11px] leading-6 text-mute">
          {s.log.length ? s.log.map((l, i) => <span key={l + i} className={`block truncate ${i === 0 ? 'text-fg' : ''}`} style={{ opacity: 1 - i * 0.13 }}>{l}</span>) : <span className="block">waiting for match data…</span>}
        </pre>
      </div>
      <div className="flex items-center justify-center lg:flex-col" aria-hidden="true">
        <span className="pipe" /><span className="mono mx-3 text-accent lg:my-3 lg:[writing-mode:vertical-rl]">AOBS data engine</span><span className="pipe" />
      </div>
      <div className="relative overflow-hidden border border-line bg-black scanlines" role="img" aria-label="Simulated broadcast scorebug and gold lead bar updating from live data">
        <div className="absolute inset-0 opacity-70" style={{ background: 'radial-gradient(circle at 30% 60%, rgba(88,199,255,0.14), transparent 50%), radial-gradient(circle at 75% 40%, rgba(255,90,79,0.13), transparent 50%)' }} />
        <div className="relative flex h-full min-h-[240px] flex-col justify-between p-4 md:p-6">
          <div className="mx-auto flex items-stretch font-mono text-sm shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
            <span className="grid w-16 place-items-center bg-[#58c7ff] font-bold text-ink md:w-20">BLU</span>
            <span className="grid w-10 place-items-center bg-panel-2 text-lg font-bold tabular-nums md:w-12">{s.k[0]}</span>
            <span className="flex flex-col items-center justify-center bg-ink px-3 md:px-4"><span className="text-[9px] tracking-[0.2em] text-mute">GAME 3</span><span className="tabular-nums text-accent">{mmss(s.clock)}</span></span>
            <span className="grid w-10 place-items-center bg-panel-2 text-lg font-bold tabular-nums md:w-12">{s.k[1]}</span>
            <span className="grid w-16 place-items-center bg-[#ff5a4f] font-bold text-ink md:w-20">RED</span>
          </div>
          <div>
            <div className="mb-2 flex justify-between font-mono text-[11px] tabular-nums"><span className="text-[#58c7ff]">{s.g[0].toFixed(1)}K · T{s.t[0]}</span><span className="text-mute">GOLD {lead >= 0 ? '+' : ''}{lead.toFixed(1)}K</span><span className="text-[#ff5a4f]">T{s.t[1]} · {s.g[1].toFixed(1)}K</span></div>
            <div className="relative h-2 bg-[#ff5a4f]/70"><div className="absolute inset-y-0 left-0 bg-[#58c7ff] transition-[width] duration-500" style={{ width: `${pct}%` }} /><span className="absolute inset-y-[-3px] left-1/2 w-px bg-white/70" /></div>
            <p className="mono mt-4 text-[10px] text-mute">Simulated feed · demo data, not a real match</p>
          </div>
        </div>
      </div>
    </div>
  );
}
