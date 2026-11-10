'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * Mounts heavy, purely demonstrative widgets only when they approach the viewport, keeping their hydration and
 * timers off the critical path. Reserves `minHeight` so nothing shifts. Not used for SEO-relevant text.
 */
export function LazyMount({ children, minHeight, label }: { children: React.ReactNode; minHeight: number | string; label: string }) {
  const ref = useRef<HTMLDivElement>(null); const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { rootMargin: '400px 0px' });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} style={{ minHeight: on ? undefined : minHeight }}>{on ? children : <span className="sr-only">{label}</span>}</div>;
}
