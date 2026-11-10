'use client';
import { useEffect, useRef, useState } from 'react';

/** Increments every `ms` while the element is on screen (and motion is allowed). Returns [ref, tick]. */
export function useVisibleTick<T extends HTMLElement>(ms = 1000, start = 0) {
  const ref = useRef<T>(null); const [tick, setTick] = useState(start);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let on = false; const io = new IntersectionObserver(([e]) => { on = e.isIntersecting; }, { threshold: 0.15 });
    if (ref.current) io.observe(ref.current);
    const id = setInterval(() => { if (on && !document.hidden) setTick((t) => t + 1); }, ms);
    return () => { clearInterval(id); io.disconnect(); };
  }, [ms]);
  return [ref, tick] as const;
}
