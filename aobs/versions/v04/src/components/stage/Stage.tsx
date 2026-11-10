'use client';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const StageCanvas = dynamic(() => import('./StageCanvas'), { ssr: false });

/** True only on hardware that can afford the 3D control room: desktop, fine pointer, real GPU, motion allowed. */
function capable() {
  const q = new URLSearchParams(location.search); const force = q.get('3d');
  if (q.get('capture')) document.documentElement.classList.add('capture');
  if (force === '1') return true; if (force === '0') return false;
  if (!matchMedia('(min-width: 1024px) and (pointer: fine)').matches) return false;
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  const nav = navigator as Navigator & { connection?: { saveData?: boolean }; deviceMemory?: number };
  if (nav.connection?.saveData || (nav.hardwareConcurrency || 8) < 4 || (nav.deviceMemory || 8) < 4) return false;
  try {
    const gl = document.createElement('canvas').getContext('webgl2') as WebGL2RenderingContext | null; if (!gl) return false;
    const ext = gl.getExtension('WEBGL_debug_renderer_info'); const r = ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : '';
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    if (/swiftshader|llvmpipe|software|basic render/i.test(r)) return false; // software GL: keep the poster
  } catch { return false; }
  return true;
}

/**
 * Persistent 3D control room. Mounted once in the root layout so it survives navigation: the camera glides to a new
 * position per route instead of the scene being torn down. Lazy-loaded after the page is idle; never blocks first paint.
 * Phones, tablets, reduced-motion, data-saver and software-GL devices keep the static poster instead.
 */
export function Stage() {
  const [on, setOn] = useState(false); const [active, setActive] = useState(true);
  const wrap = useRef<HTMLDivElement>(null); const path = usePathname();
  useEffect(() => {
    if (!capable()) return;
    const start = () => (window.requestIdleCallback ? window.requestIdleCallback(() => setOn(true), { timeout: 1200 }) : setTimeout(() => setOn(true), 300));
    if (document.readyState === 'complete') start(); else { window.addEventListener('load', start, { once: true }); return () => window.removeEventListener('load', start); }
  }, []);
  useEffect(() => {
    if (!on) return;
    const base = path === '/' ? 1 : 0.42;
    let focus = false;
    const onStation = (e: Event) => { focus = !!(e as CustomEvent<string | null>).detail; upd(); };
    window.addEventListener('aobs:station', onStation);
    const upd = () => {
      const p = window.scrollY / window.innerHeight; const o = focus ? 1 : base * Math.max(0, 1 - Math.max(0, p - 0.35) / 0.6);
      if (wrap.current) wrap.current.style.opacity = String(o);
      setActive(o > 0.01 && !document.hidden);
    };
    upd(); window.addEventListener('scroll', upd, { passive: true }); document.addEventListener('visibilitychange', upd);
    return () => { window.removeEventListener('scroll', upd); window.removeEventListener('aobs:station', onStation); document.removeEventListener('visibilitychange', upd); };
  }, [on, path]);
  return (
    <div ref={wrap} className="stage" aria-hidden="true">
      {on ? <StageCanvas active={active} onReady={() => document.documentElement.classList.add('stage-ready')} /> : null}
    </div>
  );
}
