'use client';
import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

/**
 * Broadcast "stinger" page transition. Three brand-coloured bars wipe across (260ms in, 280ms out).
 * Lives in the root layout. Skipped entirely for prefers-reduced-motion.
 */
export function Transition() {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const path = usePathname();
  const busy = useRef(false);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement).closest('a');
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return;
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      e.preventDefault();
      if (busy.current) return;
      busy.current = true;
      ref.current?.setAttribute('data-state', 'in');
      setTimeout(() => router.push(url.pathname + url.search + url.hash), 260);
      setTimeout(() => { if (busy.current) { busy.current = false; ref.current?.setAttribute('data-state', 'out'); } }, 2500); // safety net
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [router]);

  useEffect(() => {
    if (!busy.current) return;
    busy.current = false;
    requestAnimationFrame(() => ref.current?.setAttribute('data-state', 'out'));
  }, [path]);

  return (
    <div ref={ref} className="stinger" data-state="idle" aria-hidden="true">
      <i /><i /><i />
    </div>
  );
}
