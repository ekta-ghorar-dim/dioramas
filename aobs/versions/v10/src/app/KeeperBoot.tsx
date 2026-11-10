'use client';
import { useEffect } from 'react';

/** Boots the Dioramas Keeper scene once the server-rendered markup is in the page. */
export function KeeperBoot() {
  useEffect(() => {
    document.documentElement.classList.add('kp-home');
    import('../dio/keeper/main.js').catch((e) => console.error('[keeper] failed to start', e));
    // The scene owns the window (canvas, smooth scroll, cursor). Leaving the page via client navigation reloads cleanly.
    return () => { setTimeout(() => { if (location.pathname !== '/') location.reload(); }, 0); };
  }, []);
  return null;
}
