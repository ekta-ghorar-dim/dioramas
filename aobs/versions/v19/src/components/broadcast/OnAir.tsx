'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { captures, type Capture } from '@/lib/media';
import { tournament } from '@/lib/content';
import { Timecode } from '../Timecode';

/**
 * Real AOBS programme output. A switcher-style monitor: PGM shows the selected frame, the source row below acts as
 * preview buses. Auto-cuts every 6s while visible until the visitor takes control.
 */
export function OnAir({ items = captures, priority = false }: { items?: Capture[]; priority?: boolean }) {
  const [i, setI] = useState(0); const [manual, setManual] = useState(false); const [cut, setCut] = useState(0);
  const ref = useRef<HTMLDivElement>(null); const [near, setNear] = useState(false);
  useEffect(() => { const el = ref.current; if (!el) return; const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setNear(true); io.disconnect(); } }, { rootMargin: '300px 0px' }); io.observe(el); return () => io.disconnect(); }, []);
  useEffect(() => {
    if (manual || items.length < 2 || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let on = false; const io = new IntersectionObserver(([e]) => { on = e.isIntersecting; }, { threshold: 0.3 });
    if (ref.current) io.observe(ref.current);
    const id = setInterval(() => { if (on && !document.hidden) { setI((x) => (x + 1) % items.length); setCut((c) => c + 1); } }, 6000);
    return () => { clearInterval(id); io.disconnect(); };
  }, [manual, items.length]);
  const cur = items[i]; const t = tournament(cur.tournament);
  return (
    <div ref={ref}>
      <figure className="brackets relative overflow-hidden border border-line-2 bg-black">
        <div className="relative aspect-video">
          {items.map((c, k) => (k === i || near) && (
            <Image key={c.file} src={`/media/broadcast/${c.file}`} alt={k === i ? c.alt : ''} aria-hidden={k !== i} fill priority={priority && k === 0} loading={priority && k === 0 ? undefined : 'lazy'}
              sizes="(max-width: 1024px) 100vw, 1100px" className={`object-cover transition-opacity duration-200 ${k === i ? 'opacity-100' : 'opacity-0'}`} />
          ))}
          <span key={cut} className="cut-flash pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent p-3 md:p-4" aria-hidden="true">
            <span className="tally live"><span className="dot" />PGM</span>
            <Timecode className="text-[11px] text-white/90" start={5400} />
          </div>
        </div>
        <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-panel px-4 py-3">
          <span className="text-sm"><span className="mono mr-3 text-accent">{cur.title}</span>{t ? <Link href={`/work/${t.slug}`} className="link-u text-fg">{t.name}</Link> : null}</span>
          <span className="mono text-[10px] text-mute">Real AOBS broadcast output</span>
        </figcaption>
      </figure>
      <div role="tablist" aria-label="Broadcast sources" className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-5">
        {items.map((c, k) => (
          <button key={c.file} role="tab" aria-selected={k === i} aria-label={`${c.title}, ${tournament(c.tournament)?.name ?? ''}`} type="button" onClick={() => { setI(k); setManual(true); setCut((x) => x + 1); }}
            className={`group relative aspect-video overflow-hidden border-2 transition-colors ${k === i ? 'border-air' : 'border-line hover:border-fg/60'}`}>
            {near ? <Image src={`/media/broadcast/${c.file}`} alt="" fill sizes="200px" className="object-cover opacity-80 transition-opacity group-hover:opacity-100" loading="lazy" /> : null}
            <span className={`mono absolute bottom-0 left-0 px-1.5 text-[9px] ${k === i ? 'bg-air text-white' : 'bg-black/80 text-fg/80'}`}>{k === i ? 'PGM' : `SRC ${k + 1}`}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
