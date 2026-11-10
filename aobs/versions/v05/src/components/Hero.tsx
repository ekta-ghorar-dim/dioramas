'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Cta } from './Cta';
import { Timecode } from './Timecode';
import { captures } from '@/lib/media';

const FRAMES = captures.filter((c) => c.kind === 'ingame').concat(captures.filter((c) => c.kind !== 'ingame'));

/**
 * v05 "Cobalt Signal" hero: a real AOBS programme screen that grows to full-bleed as you scroll (desktop),
 * cutting between real broadcast frames like a director. Headline is real HTML above it; the first frame is the LCP image.
 */
export function Hero() {
  const wrap = useRef<HTMLElement>(null); const [i, setI] = useState(0); const [armed, setArmed] = useState(false);
  useEffect(() => {
    const el = wrap.current; if (!el) return;
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0;
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect(); const total = el.offsetHeight - innerHeight; const p = Math.min(1, Math.max(0, -r.top / Math.max(1, total)));
      el.style.setProperty('--p', still ? '1' : p.toFixed(4));
    }); };
    on(); addEventListener('scroll', on, { passive: true }); addEventListener('resize', on);
    // Director cuts begin on the visitor's first interaction: a frame swapping in before then would be
    // re-reported as the Largest Contentful Paint, and nobody is watching yet anyway.
    let id = 0;
    const go = () => { if (id || still) return; setArmed(true); ['scroll', 'pointermove', 'keydown', 'touchstart'].forEach((e) => removeEventListener(e, go));
      id = window.setInterval(() => { if (!document.hidden && scrollY < innerHeight * 2.5) setI((x) => (x + 1) % FRAMES.length); }, 3800); };
    ['scroll', 'pointermove', 'keydown', 'touchstart'].forEach((e) => addEventListener(e, go, { passive: true, once: true }));
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on); ['scroll', 'pointermove', 'keydown', 'touchstart'].forEach((e) => removeEventListener(e, go)); clearInterval(id); cancelAnimationFrame(raf); };
  }, []);
  const cur = FRAMES[i];
  return (
    <section ref={wrap} className="hero5 relative" aria-labelledby="hero-title">
      <div className="hero5-sticky">
        <div className="wrap hero5-head relative z-10 pt-[104px] text-center md:pt-[120px]">
          <div className="flex items-center justify-center gap-3" aria-hidden="true">
            <span className="tally live"><span className="dot" />On air</span>
            <Timecode className="text-xs text-mute" start={3725} />
          </div>
          <h1 id="hero-title" className="mt-6">
            <span className="sr-only">AOBS, esports broadcast production company. </span>
            <span className="display t-hero block">Esports, broadcast<br /><span className="hero5-grad">like the finals.</span></span>
          </h1>
          <p className="lede mx-auto mt-6 !max-w-[60ch]">AOBS is an esports broadcast production company. Observers, replay, live data graphics, sponsor integrations and transmission, run end to end on technology we build ourselves.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Cta href="/contact" event="request_quote" label="hero">Request a broadcast quote</Cta>
            <Cta href="/work" variant="ghost">See our work</Cta>
          </div>
        </div>
        <div className="hero5-screen-wrap">
          <figure className="hero5-screen">
            {(armed ? FRAMES : FRAMES.slice(0, 1)).map((c, k) => (
              <Image key={c.file} src={`/media/broadcast/${c.file}`} alt={k === i ? c.alt : ''} aria-hidden={k !== i} fill priority={k === 0} loading={k === 0 ? undefined : 'lazy'} quality={60} sizes="(max-width: 768px) 92vw, (max-width: 1024px) 90vw, 100vw"
                className={`object-cover transition-opacity duration-300 ${k === i ? 'opacity-100' : 'opacity-0'}`} />
            ))}
            <span key={i} className="cut-flash pointer-events-none absolute inset-0" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-3 md:p-5" aria-hidden="true">
              <span className="tally live"><span className="dot" />PGM</span>
              <span className="mono rounded-full bg-black/60 px-3 py-1 text-white">{cur.title}</span>
            </div>
            <figcaption className="hero5-lt"><span className="mono text-accent">Real AOBS broadcast</span><span className="text-sm text-white">{cur.alt.split(':')[0]}</span></figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
