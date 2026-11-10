'use client';
import { useEffect, useRef, useState } from 'react';
import { broadcast } from '@/lib/content';
import { Multiview } from './Multiview';

const ORDER = ['control', 'observer', 'replay', 'caster', 'stage', 'cams'];
const STATIONS = ORDER.map((id) => broadcast.stations.find((s) => s.id === id)!).filter(Boolean);
const LABEL: Record<string, string> = { control: 'Multiviewer · all sources', observer: 'OBS 1-3', replay: 'REPLAY', caster: 'CASTER', stage: 'AUX · venue screens', cams: 'CAM 1-2' };

/**
 * Scroll camera fly-through. On desktops with the 3D stage, the section pins and scrolling moves the 3D camera
 * from station to station on the monitor wall. Everywhere else it is a readable list next to the 2D multiviewer.
 * All station copy is real HTML in both modes.
 */
export function FlyThrough() {
  const root = useRef<HTMLElement>(null); const [active, setActive] = useState(0); const [pinned, setPinned] = useState(false);
  const stations = STATIONS;

  useEffect(() => {
    const el = root.current; if (!el) return;
    if (!matchMedia('(min-width: 1024px) and (pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let st: { kill: () => void } | null = null; let alive = true; let last = -1;
    const start = async () => {
      if (!document.documentElement.classList.contains('stage-ready')) return; // no 3D on this device: keep the list layout
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
      if (!alive) return; gsap.registerPlugin(ScrollTrigger); setPinned(true);
      requestAnimationFrame(() => {
        st = ScrollTrigger.create({
          trigger: el, start: 'top top', end: () => `+=${window.innerHeight * stations.length * 0.9}`, pin: true, anticipatePin: 1,
          onUpdate: (s) => { const i = Math.min(stations.length - 1, Math.floor(s.progress * stations.length)); if (i !== last) { last = i; setActive(i); window.dispatchEvent(new CustomEvent('aobs:station', { detail: stations[i].id })); } },
          onLeave: () => { last = -1; window.dispatchEvent(new CustomEvent('aobs:station', { detail: null })); },
          onLeaveBack: () => { last = -1; window.dispatchEvent(new CustomEvent('aobs:station', { detail: null })); },
        });
        ScrollTrigger.refresh();
      });
    };
    const t = setTimeout(start, 1800); // after the stage has had a chance to boot
    return () => { alive = false; clearTimeout(t); st?.kill(); window.dispatchEvent(new CustomEvent('aobs:station', { detail: null })); };
  }, [stations]); // stable module-level array: the trigger is created once

  return (
    <section ref={root} className={`fly relative ${pinned ? 'is-pinned h-[100svh]' : 'section border-y border-line bg-panel'}`} aria-labelledby="fly-title">
      <div className={`wrap ${pinned ? 'flex h-full flex-col justify-center pt-[72px]' : ''}`}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className={`lg:col-span-5 ${pinned ? 'fly-panel p-7' : ''}`}>
            <p className="eyebrow">Fly-through</p>
            <h2 id="fly-title" className={`display mt-4 ${pinned ? 'text-5xl' : 't-2'}`}>Walk the gallery.</h2>
            <p className="mt-4 text-mute">{pinned ? 'Keep scrolling. The camera moves from station to station on the wall.' : 'Every position on an esports broadcast has one job. Here is each one, and where it sits on the multiviewer.'}</p>
            <ol className="mt-8 border-t border-line">
              {stations.map((s, i) => (
                <li key={s.id} className={`fly-step border-b border-line transition-[opacity,padding] duration-300 ${pinned ? (i === active ? 'py-4' : 'py-2 opacity-40') : 'py-4'}`} aria-current={pinned && i === active ? 'step' : undefined}>
                  <div className="flex items-baseline justify-between gap-4"><h3 className={`display ${pinned && i !== active ? 'text-lg' : 't-3'}`}>{s.title}</h3><span className="mono shrink-0 text-[10px] text-accent">{LABEL[s.id]}</span></div>
                  <p className="mt-2 text-sm text-mute">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
          {!pinned ? <div className="lg:col-span-7"><div className="brackets border border-line lg:sticky lg:top-28"><Multiview /></div></div> : null}
        </div>
      </div>
      {pinned ? <div className="pointer-events-none absolute bottom-6 right-6 mono text-mute" aria-hidden="true">{String(active + 1).padStart(2, '0')} / {String(stations.length).padStart(2, '0')}</div> : null}
    </section>
  );
}
