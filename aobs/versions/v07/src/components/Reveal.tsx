'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const GLYPHS = 'ABCDEFGHKLMNPRSTUVXYZ0123456789';
/** Broadcast "decode": characters resolve left to right over ~0.6s. Text nodes only, so markup and accessibility tree are untouched. */
function decode(el: HTMLElement) {
  const nodes: { n: Text; full: string }[] = [];
  const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  while (w.nextNode()) { const n = w.currentNode as Text; if (n.data.trim()) nodes.push({ n, full: n.data }); }
  const total = nodes.reduce((a, b) => a + b.full.length, 0); if (!total) return;
  el.setAttribute('aria-label', el.textContent || '');
  const t0 = performance.now(); const dur = Math.min(900, 380 + total * 9);
  const step = (now: number) => {
    const p = Math.min(1, (now - t0) / dur); let shown = Math.floor(p * total);
    for (const { n, full } of nodes) {
      const k = Math.max(0, Math.min(full.length, shown)); shown -= full.length;
      n.data = p >= 1 ? full : full.slice(0, k) + full.slice(k).replace(/[^\s]/g, () => GLYPHS[(Math.random() * GLYPHS.length) | 0]);
    }
    if (p < 1) requestAnimationFrame(step); else el.removeAttribute('aria-label');
  };
  requestAnimationFrame(step);
}

/** One IntersectionObserver for every `.reveal` element on the page; also triggers `[data-decode]` titles inside them. */
export function RevealObserver() {
  const path = usePathname();
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal:not(.in)');
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('in'); io.unobserve(e.target);
        if (!still) (e.target as HTMLElement).querySelectorAll<HTMLElement>('[data-decode]').forEach(decode);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [path]);
  return null;
}
