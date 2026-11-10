'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FRAMES } from './frames';

const LAYERS = [
  { n: '01', name: 'Observers', text: 'In-game cameras driven by people who read the map ahead of the fight.', ann: 5, href: '/broadcast' },
  { n: '02', name: 'Scoreboard', text: 'Kills, turrets, gold and the clock across the top, from match data.', ann: 1, href: '/graphics-data' },
  { n: '03', name: 'Rosters', text: 'Both teams down the sides: hero, KDA, level. Nobody retypes a stat.', ann: 3, href: '/graphics-data' },
  { n: '04', name: 'Map', text: 'The minimap stays on screen, so viewers can read the rotation.', ann: 0, href: '/graphics-data' },
  { n: '05', name: 'Identity', text: 'Stage, series and credits in the event’s own colours.', ann: 2, href: '/work/pakistan-community-cup' },
];

/** Hover a layer: its region lights up on the real frame. Velocity Lab's tech callouts, for a broadcast. */
export function Layers() {
  const [i, setI] = useState(0); const f = FRAMES[0]; const a = f.anns[LAYERS[i].ann];
  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <ol className="lg:col-span-5">
        {LAYERS.map((l, k) => (
          <li key={l.n} className="border-t border-line-2 last:border-b">
            <button type="button" onMouseEnter={() => setI(k)} onFocus={() => setI(k)} onClick={() => setI(k)} aria-pressed={i === k}
              className="group grid w-full grid-cols-[3rem_1fr] gap-x-4 py-5 text-left">
              <span className={`text-sm tabular-nums ${i === k ? 'text-accent' : 'text-mute'}`}>{l.n}</span>
              <span className={`display text-[clamp(1.4rem,2.2vw,2rem)] transition-colors ${i === k ? 'text-fg' : 'text-mute group-hover:text-fg'}`}>{l.name}</span>
              <span className="col-start-2 mt-2 text-mute">{l.text}</span>
            </button>
          </li>
        ))}
      </ol>
      <figure className="lg:sticky lg:top-24 lg:col-span-7 lg:self-start">
        <div className="relative aspect-video overflow-hidden bg-black">
          <Image src={`/media/broadcast/${f.file}`} alt={f.alt} fill sizes="(max-width: 1024px) 100vw, 720px" className="object-cover opacity-60" loading="lazy" />
          <div className="ann transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ left: `${a.x}%`, top: `${a.y}%`, width: `${a.w}%`, height: `${a.h}%`, boxShadow: '0 0 0 9999px rgba(0,0,0,0.45)' }}><span>{LAYERS[i].name}</span></div>
        </div>
        <figcaption className="mt-3 flex justify-between text-sm text-mute"><span>Pakistan Community Cup, grand final.</span><Link href={LAYERS[i].href} className="link-u text-fg">More on {LAYERS[i].name.toLowerCase()} →</Link></figcaption>
      </figure>
    </div>
  );
}
