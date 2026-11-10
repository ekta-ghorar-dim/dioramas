'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FRAMES, MODES } from './frames';

/**
 * The Lens (after Dioramas' Velocity Lab X-ray lens). A circular lens follows the pointer over a real AOBS frame;
 * inside it the frame renders in an alternate mode. Pure CSS + SVG filters: no WebGL, nothing heavy to load.
 * Keyboard: 1-3 switch modes, arrow keys move the lens when the stage is focused. Touch: tap or drag to place it.
 */
export function Lens() {
  const stage = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<(typeof MODES)[number]['id']>('data');
  const [fi, setFi] = useState(0); const f = FRAMES[fi];
  const pos = useRef({ x: 0.5, y: 0.46, tx: 0.5, ty: 0.46 });

  useEffect(() => {
    const el = stage.current; if (!el) return;
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0; let idle = true; let t0 = performance.now();
    const set = () => { el.style.setProperty('--x', `${pos.current.x * 100}%`); el.style.setProperty('--y', `${pos.current.y * 100}%`); };
    const loop = (now: number) => {
      const p = pos.current;
      if (idle && !still) { const t = (now - t0) / 1000; p.tx = 0.5 + Math.sin(t * 0.45) * 0.28; p.ty = 0.42 + Math.sin(t * 0.7) * 0.2; }
      p.x += (p.tx - p.x) * (still ? 1 : 0.16); p.y += (p.ty - p.y) * (still ? 1 : 0.16); set(); raf = requestAnimationFrame(loop);
    };
    const move = (e: PointerEvent) => { const r = el.getBoundingClientRect(); pos.current.tx = (e.clientX - r.left) / r.width; pos.current.ty = (e.clientY - r.top) / r.height; idle = false; };
    const leave = () => { idle = true; t0 = performance.now(); };
    const key = (e: KeyboardEvent) => {
      const i = ['1', '2', '3'].indexOf(e.key); if (i >= 0) { setMode(MODES[i].id); return; }
      const d = 0.04; const p = pos.current;
      if (document.activeElement !== el) return;
      if (e.key === 'ArrowLeft') p.tx -= d; else if (e.key === 'ArrowRight') p.tx += d; else if (e.key === 'ArrowUp') p.ty -= d; else if (e.key === 'ArrowDown') p.ty += d; else return;
      e.preventDefault(); idle = false; p.tx = Math.min(1, Math.max(0, p.tx)); p.ty = Math.min(1, Math.max(0, p.ty));
    };
    el.addEventListener('pointermove', move); el.addEventListener('pointerdown', move); el.addEventListener('pointerleave', leave); addEventListener('keydown', key);
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); el.removeEventListener('pointermove', move); el.removeEventListener('pointerdown', move); el.removeEventListener('pointerleave', leave); removeEventListener('keydown', key); };
  }, []);

  const cur = MODES.find((m) => m.id === mode)!;
  return (
    <div>
      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        <filter id="thermal" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="0.3 0.59 0.11 0 0  0.3 0.59 0.11 0 0  0.3 0.59 0.11 0 0  0 0 0 1 0" />
          <feComponentTransfer>
            <feFuncR type="table" tableValues="0.02 0.10 0.55 0.95 1 1" />
            <feFuncG type="table" tableValues="0.02 0.05 0.05 0.35 0.78 1" />
            <feFuncB type="table" tableValues="0.12 0.55 0.6 0.1 0.05 0.85" />
          </feComponentTransfer>
        </filter>
        <filter id="wire" colorInterpolationFilters="sRGB">
          <feColorMatrix type="matrix" values="0.3 0.59 0.11 0 0  0.3 0.59 0.11 0 0  0.3 0.59 0.11 0 0  0 0 0 1 0" />
          <feConvolveMatrix order="3" kernelMatrix="-1 -1 -1 -1 8 -1 -1 -1 -1" preserveAlpha="true" />
          <feComponentTransfer><feFuncR type="linear" slope="5" intercept="0.03" /><feFuncG type="linear" slope="5" intercept="0.1" /><feFuncB type="linear" slope="5" intercept="0.22" /></feComponentTransfer>
        </filter>
      </svg>

      <div ref={stage} className="lens-stage" tabIndex={0} role="img" aria-label={`${f.alt}. Lens in ${cur.label} mode: ${cur.hint}. Use 1, 2 and 3 to switch modes and the arrow keys to move the lens.`}>
        <Image src={`/media/broadcast/${f.file}`} alt="" fill priority sizes="(max-width: 1360px) 100vw, 1260px" quality={72} className="object-cover" />
        <div className="lens-layer" aria-hidden="true">
          <div className="mag">
            <Image src={`/media/broadcast/${f.file}`} alt="" fill sizes="(max-width: 1360px) 100vw, 1260px" quality={72} className="object-cover"
              style={{ filter: mode === 'thermal' ? 'url(#thermal)' : mode === 'wire' ? 'url(#wire)' : 'grayscale(1) brightness(0.55) contrast(1.1)' }} />
            {mode === 'data' ? f.anns.map((a) => (
              <div key={a.label} className={`ann ${a.pos ?? ''}`} style={{ left: `${a.x}%`, top: `${a.y}%`, width: `${a.w}%`, height: `${a.h}%` }}><span>{a.label}</span></div>
            )) : null}
          </div>
        </div>
        <div className="lens-ring" aria-hidden="true" />
        <div className="lens-label" aria-hidden="true">{cur.label.toUpperCase()}</div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
        <div role="radiogroup" aria-label="Lens mode" className="flex flex-wrap gap-2">
          {MODES.map((m, i) => (
            <button key={m.id} type="button" role="radio" aria-checked={mode === m.id} onClick={() => setMode(m.id)}
              className={`flex min-h-[40px] items-center gap-2 border px-4 text-sm font-semibold transition-colors ${mode === m.id ? 'border-fg bg-fg text-ink' : 'border-line-2 hover:border-fg'}`}>
              <kbd className={`text-[11px] font-normal ${mode === m.id ? 'text-ink/70' : 'text-mute'}`}>{i + 1}</kbd>{m.label}
            </button>
          ))}
        </div>
        <div role="radiogroup" aria-label="Broadcast frame" className="flex flex-wrap gap-2 text-sm">
          {FRAMES.map((x, i) => (
            <button key={x.id} type="button" role="radio" aria-checked={fi === i} onClick={() => setFi(i)} className={`min-h-[40px] border-b-2 px-1 transition-colors ${fi === i ? 'border-accent text-fg' : 'border-transparent text-mute hover:text-fg'}`}>{x.name}</button>
          ))}
        </div>
      </div>
      <p className="mt-2 text-sm text-mute">{cur.hint}. Real AOBS broadcast frame; move the lens over it.</p>
    </div>
  );
}
