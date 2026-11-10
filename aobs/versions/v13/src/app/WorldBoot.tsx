'use client';
import { useEffect } from 'react';

/** Boots the Dioramas scene once the server-rendered markup is in the page. */
export function WorldBoot() {
  useEffect(() => {
    document.body.classList.add('is-cold');
    import('../dio/hangar/main.js').catch((e) => console.error('[world] failed to start', e));
    // The scene owns the window (canvas, smooth scroll, cursor); leaving via client navigation reloads cleanly.
    return () => { setTimeout(() => { if (location.pathname !== '/') location.reload(); }, 0); };
  }, []);
  return null;
}
