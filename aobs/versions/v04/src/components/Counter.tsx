'use client';
import { useEffect, useRef } from 'react';

/** Counts up when scrolled into view. Server-renders the final value so it is readable without JS. */
export function Counter({ value, pad = 2 }: { value: number; pad?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const fmt = (n: number) => String(n).padStart(pad, '0');
  useEffect(() => {
    const el = ref.current; if (!el || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const t0 = performance.now(); const dur = 1400;
      const step = (now: number) => {
        const p = Math.min(1, (now - t0) / dur); const eased = 1 - Math.pow(1 - p, 4);
        el.textContent = fmt(Math.round(value * eased));
        if (p < 1) requestAnimationFrame(step);
      };
      el.textContent = fmt(0); requestAnimationFrame(step);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps
  return <span ref={ref} className="tabular-nums">{fmt(value)}</span>;
}
