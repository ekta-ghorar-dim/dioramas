'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import type Lenis from 'lenis';

let lenis: Lenis | null = null;
export const getLenis = () => lenis;

/** Lenis smooth scrolling, kept in the root layout so it persists across navigation. Skipped for reduced motion and touch. */
export function SmoothScroll() {
  const path = usePathname();
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || matchMedia('(pointer: coarse)').matches) return;
    let raf = 0; let alive = true;
    (async () => {
      const [{ default: L }, { gsap }, { ScrollTrigger }] = await Promise.all([import('lenis'), import('gsap'), import('gsap/ScrollTrigger')]);
      if (!alive) return;
      gsap.registerPlugin(ScrollTrigger);
      lenis = new L({ duration: 1.05, smoothWheel: true });
      lenis.on('scroll', ScrollTrigger.update);
      const loop = (t: number) => { lenis?.raf(t); raf = requestAnimationFrame(loop); };
      raf = requestAnimationFrame(loop);
    })();
    return () => { alive = false; cancelAnimationFrame(raf); lenis?.destroy(); lenis = null; };
  }, []);
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) { setTimeout(() => (lenis ? lenis.scrollTo(el as HTMLElement, { offset: -80 }) : el.scrollIntoView()), 60); return; }
    }
    lenis?.scrollTo(0, { immediate: true });
  }, [path]);
  return null;
}
