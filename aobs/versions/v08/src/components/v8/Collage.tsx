'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const PINS = [
  { src: '/media/key-visuals/pakistan-community-cup-key-visual.webp', w: 1200, h: 1200, alt: 'Pakistan Community Cup key visual', style: { left: '2%', top: '6%', width: '34%' }, r: '-5deg', d: 14, priority: true },
  { src: '/media/broadcast/mini-mayhem-mlbb-ingame-overlay-sponsor-squeezeback.webp', w: 1600, h: 900, alt: 'Mini Mayhem MLBB broadcast with sponsor squeeze-back', style: { left: '30%', top: '30%', width: '46%' }, r: '2deg', d: 24 },
  { src: '/media/key-visuals/mlbb-womens-war-coming-soon-key-visual.webp', w: 1200, h: 675, alt: "MLBB Women's War key visual", style: { right: '1%', top: '2%', width: '36%' }, r: '4deg', d: 10 },
  { src: '/media/key-visuals/aobs-halloween-fest-registration-poster.webp', w: 720, h: 534, alt: 'AOBS Halloween Fest registration poster', style: { right: '4%', bottom: '2%', width: '26%' }, r: '-3deg', d: 18 },
  { src: '/media/key-visuals/pakistan-community-cup-prize-pool-poster.webp', w: 1200, h: 727, alt: 'Pakistan Community Cup prize pool poster', style: { left: '6%', bottom: '0%', width: '30%' }, r: '3deg', d: 8 },
];

/** Pinned-up wall of real AOBS key visuals and broadcast frames. Drifts gently with the pointer (desktop, motion allowed). */
export function Collage() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el || matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)').matches) return;
    const mv = (e: PointerEvent) => { el.style.setProperty('--mx', String((e.clientX / innerWidth - 0.5) * 2)); el.style.setProperty('--my', String((e.clientY / innerHeight - 0.5) * 2)); };
    addEventListener('pointermove', mv, { passive: true }); return () => removeEventListener('pointermove', mv);
  }, []);
  return (
    <div ref={ref} className="collage" role="group" aria-label="AOBS key visuals and broadcast frames">
      {PINS.map((p) => (
        <figure key={p.src} className="pin" style={{ ...p.style, '--r': p.r, '--d': p.d } as unknown as React.CSSProperties}>
          <Image src={p.src} alt={p.alt} width={p.w} height={p.h} priority={p.priority} sizes="(max-width: 768px) 50vw, 40vw" className="block h-auto w-full" />
        </figure>
      ))}
    </div>
  );
}
