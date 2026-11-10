'use client';
import Link from 'next/link';
import { useState } from 'react';
import { workflow } from '@/lib/content';

const POS: Record<string, [number, number]> = { game: [90, 190], obs: [290, 190], sw: [490, 190], gfx: [690, 190], cloud: [900, 190], out: [1110, 190], backup: [900, 330] };
const PATHS = [
  { d: 'M90 190 H1110', cls: 'main' },
  { d: 'M90 190 V70 H690 V190', cls: 'data' },
  { d: 'M690 190 V330 H900 H1110 V190', cls: 'bkp' },
];

/** Interactive end-to-end signal flow. Every node's explanation is also in the list below, so nothing lives only in the SVG. */
export function SignalFlow() {
  const [active, setActive] = useState('sw');
  return (
    <div>
      <div className="relative hidden md:block">
        <svg viewBox="0 0 1200 400" className="w-full" role="group" aria-label="Broadcast signal flow diagram">
          {PATHS.map((p) => <path key={p.cls} d={p.d} className={`flow flow-${p.cls}`} fill="none" />)}
          {PATHS.map((p, i) => [0, 1, 2].map((k) => (
            <circle key={`${i}${k}`} r={i === 0 ? 4 : 3} className={`pulse pulse-${p.cls}`}>
              <animateMotion dur={`${i === 0 ? 5 : 6}s`} begin={`${k * (i === 0 ? 1.66 : 2)}s`} repeatCount="indefinite" path={p.d} />
            </circle>
          )))}
          <text x="390" y="60" className="flabel">LIVE GAME DATA · API</text>
          <text x="990" y="352" className="flabel" textAnchor="middle">FAILOVER PATH</text>
          {workflow.nodes.map((n) => {
            const [x, y] = POS[n.id]; const on = active === n.id;
            return (
              <g key={n.id} transform={`translate(${x} ${y})`} className={`node ${on ? 'on' : ''}`} role="button" tabIndex={0} aria-pressed={on} aria-label={`${n.label}: ${n.text}`}
                onMouseEnter={() => setActive(n.id)} onFocus={() => setActive(n.id)} onClick={() => setActive(n.id)} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(n.id); } }}>
                <rect x="-62" y="-30" width="124" height="60" />
                <text y="-6" textAnchor="middle" className="ntag">{n.tag}</text>
                <text y="14" textAnchor="middle" className="nlabel">{n.label}</text>
              </g>
            );
          })}
        </svg>
      </div>
      <ol className="mt-2 grid gap-px bg-line md:mt-8 md:grid-cols-7">
        {workflow.nodes.map((n, i) => {
          const on = active === n.id;
          return (
            <li key={n.id} onMouseEnter={() => setActive(n.id)} className={`relative bg-ink p-4 transition-colors md:p-4 ${on ? 'md:bg-panel-2' : ''}`}>
              <span className={`absolute left-0 top-0 h-px w-full origin-left bg-accent transition-transform duration-500 ${on ? 'scale-x-100' : 'scale-x-0'}`} aria-hidden="true" />
              <span className="mono flex items-center gap-2 text-mute"><span className={on ? 'text-accent' : ''}>{String(i + 1).padStart(2, '0')}</span>{n.tag}</span>
              <h3 className="mt-2 font-medium text-fg">{n.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{n.text}</p>
              {'href' in n && n.href ? <Link href={n.href} className="link-u mono mt-3 inline-block text-[10px] text-accent">Learn more →</Link> : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
