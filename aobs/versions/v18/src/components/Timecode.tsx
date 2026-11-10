'use client';
import { useEffect, useRef } from 'react';

const pad = (n: number) => String(n).padStart(2, '0');
/** Running SMPTE-style timecode (25 fps). Writes straight to the DOM, no React re-renders. */
export function Timecode({ className = '', start = 0 }: { className?: string; start?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const t0 = performance.now(); let raf = 0; let last = -1;
    const tick = (now: number) => {
      const f = Math.floor(((now - t0) / 1000 + start) * 25);
      if (f !== last) { last = f; const s = Math.floor(f / 25); el.textContent = `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}:${pad(f % 25)}`; }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start]);
  return <span ref={ref} className={`font-mono tabular-nums ${className}`} aria-hidden="true">00:00:00:00</span>;
}
