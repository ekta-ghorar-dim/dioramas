'use client';
import { useState } from 'react';
import { broadcast } from '@/lib/content';

const ZONES: Record<string, { x: number; y: number; w: number; h: number }> = {
  control: { x: 360, y: 30, w: 280, h: 110 }, observer: { x: 60, y: 60, w: 240, h: 120 }, replay: { x: 700, y: 60, w: 240, h: 120 },
  caster: { x: 90, y: 360, w: 220, h: 110 }, stage: { x: 360, y: 230, w: 280, h: 180 }, cams: { x: 690, y: 360, w: 220, h: 110 },
};

/** 2.5D broadcast scene: pick a station to see what it does. Keyboard accessible; all copy is mirrored in the list. */
export function SceneBuilder() {
  const [id, setId] = useState('control');
  const cur = broadcast.stations.find((s) => s.id === id)!;
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="brackets border border-line bg-panel p-2 lg:col-span-8">
        <svg viewBox="0 0 1000 520" className="scene w-full" role="group" aria-label="Broadcast scene plan. Select a station to learn what it does.">
          <defs><pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#1d252c" /></pattern></defs>
          <rect width="1000" height="520" fill="url(#g)" />
          <g className="wires" fill="none">
            <path d="M300 120 H360" /><path d="M700 120 H640" /><path d="M500 140 V230" /><path d="M200 360 V300 H430 V140" /><path d="M800 360 V300 H570 V140" />
          </g>
          <rect x="390" y="250" width="220" height="30" className="led" /><rect x="400" y="320" width="80" height="50" className="desk" /><rect x="520" y="320" width="80" height="50" className="desk" />
          {broadcast.stations.map((s) => {
            const z = ZONES[s.id]; const on = s.id === id;
            return (
              <g key={s.id} className={`zone ${on ? 'on' : ''}`} role="button" tabIndex={0} aria-pressed={on} aria-label={`${s.title}: ${s.text}`}
                onClick={() => setId(s.id)} onMouseEnter={() => setId(s.id)} onFocus={() => setId(s.id)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setId(s.id); } }}>
                <rect x={z.x} y={z.y} width={z.w} height={z.h} />
                <circle cx={z.x + 18} cy={z.y + 18} r="5" />
                <text x={z.x + 32} y={z.y + 22} className="ztag">{s.tag}</text>
                <text x={z.x + 16} y={z.y + z.h - 16} className="zlabel">{s.title}</text>
              </g>
            );
          })}
        </svg>
      </div>
      <div className="lg:col-span-4">
        <div className="panel h-full p-6 md:p-8" aria-live="polite">
          <span className="tally live"><span className="dot" />{cur.tag}</span>
          <h3 className="display t-3 mt-5">{cur.title}</h3>
          <p className="mt-4 text-mute">{cur.text}</p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {broadcast.stations.map((s) => (
              <li key={s.id}><button type="button" onClick={() => setId(s.id)} aria-pressed={s.id === id} className={`mono border px-2.5 py-1.5 text-[10px] transition-colors ${s.id === id ? 'border-accent text-accent' : 'border-line-2 text-mute hover:text-fg'}`}>{s.tag}</button></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
