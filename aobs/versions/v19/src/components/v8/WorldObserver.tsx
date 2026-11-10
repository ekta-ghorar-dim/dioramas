'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/** Sets html[data-world] from whichever [data-world] section fills the middle of the viewport. */
export function WorldObserver() {
  const path = usePathname();
  useEffect(() => {
    const root = document.documentElement; const els = [...document.querySelectorAll<HTMLElement>('[data-world]')].filter((e) => e !== root);
    if (!els.length) { delete root.dataset.world; return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) root.dataset.world = (e.target as HTMLElement).dataset.world!; });
    }, { rootMargin: '-45% 0px -45% 0px' });
    els.forEach((e) => io.observe(e));
    return () => { io.disconnect(); delete root.dataset.world; };
  }, [path]);
  return null;
}
