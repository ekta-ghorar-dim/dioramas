'use client';
import { useEffect, useRef } from 'react';

/**
 * Procedural top-down MOBA gameplay stand-in (2D canvas): terrain, river, three lanes, towers, minion waves,
 * ten heroes with health bars and skill flashes. Used only until real AOBS broadcast captures are supplied.
 * Animates only while visible, ~15 fps, and renders one still frame under reduced motion.
 */
export function MobaScene({ seed = 1, className = '' }: { seed?: number; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return; const ctx = c.getContext('2d'); if (!ctx) return;
    const W = (c.width = 480), H = (c.height = 270);
    const rnd = (i: number) => { const x = Math.sin(i * 127.1 + seed * 311.7) * 43758.5453; return x - Math.floor(x); };
    // Pre-render static terrain once.
    const bg = document.createElement('canvas'); bg.width = W; bg.height = H; const b = bg.getContext('2d')!;
    const g = b.createLinearGradient(0, 0, W, H); g.addColorStop(0, '#16261b'); g.addColorStop(0.5, '#1c2e1f'); g.addColorStop(1, '#14231a'); b.fillStyle = g; b.fillRect(0, 0, W, H);
    for (let i = 0; i < 900; i++) { b.fillStyle = `rgba(${rnd(i) > 0.5 ? '40,70,40' : '10,20,12'},${0.25 + rnd(i + 1) * 0.35})`; const r = 2 + rnd(i + 2) * 7; b.beginPath(); b.arc(rnd(i + 3) * W, rnd(i + 4) * H, r, 0, 6.3); b.fill(); }
    b.strokeStyle = 'rgba(70,130,170,0.55)'; b.lineWidth = 34; b.lineCap = 'round'; b.beginPath(); b.moveTo(-20, 40); b.bezierCurveTo(160, 90, 300, 170, W + 20, 230); b.stroke();
    b.strokeStyle = 'rgba(120,190,220,0.18)'; b.lineWidth = 18; b.stroke();
    b.strokeStyle = 'rgba(176,160,120,0.42)'; b.lineWidth = 16;
    b.beginPath(); b.moveTo(-10, H * 0.92); b.lineTo(W + 10, H * 0.08); b.stroke();
    b.beginPath(); b.moveTo(W * 0.06, H + 10); b.lineTo(W * 0.06, H * 0.1); b.lineTo(W * 0.94, H * 0.1); b.stroke();
    b.beginPath(); b.moveTo(W * 0.06, H * 0.9); b.lineTo(W * 0.94, H * 0.9); b.lineTo(W * 0.94, -10); b.stroke();
    for (let i = 0; i < 40; i++) { b.fillStyle = 'rgba(8,16,10,0.6)'; b.beginPath(); b.ellipse(rnd(i + 50) * W, rnd(i + 60) * H, 6 + rnd(i) * 12, 4 + rnd(i + 7) * 8, rnd(i + 8) * 3, 0, 6.3); b.fill(); }
    const towers: [number, number, number][] = [[0.3, 0.66, 0], [0.18, 0.78, 0], [0.7, 0.34, 1], [0.82, 0.22, 1], [0.06, 0.5, 0], [0.94, 0.5, 1], [0.5, 0.9, 0], [0.5, 0.1, 1]];
    const team = ['#45b8ff', '#ff5a4f'];
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0, visible = false, last = 0;
    const draw = (t: number) => {
      ctx.drawImage(bg, 0, 0);
      towers.forEach(([x, y, k]) => { ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.fillRect(x * W - 6, y * H - 2, 12, 6); ctx.fillStyle = team[k]; ctx.fillRect(x * W - 4, y * H - 12, 8, 12); ctx.fillStyle = 'rgba(255,255,255,0.7)'; ctx.fillRect(x * W - 4, y * H - 12, 8, 2); });
      // minion waves along mid lane
      for (let w = 0; w < 2; w++) for (let m = 0; m < 4; m++) {
        const p = ((t * 0.05 + w * 0.5 + m * 0.012) % 1) * 0.5 + (w ? 0.5 : 0) * 0; const pp = w ? 1 - p : p;
        const x = pp * W, y = H - pp * H + 4 * Math.sin(m * 2 + t); ctx.fillStyle = team[w]; ctx.globalAlpha = 0.85; ctx.fillRect(x - 2, y - 2, 4, 4); ctx.globalAlpha = 1;
      }
      // heroes clustered in a skirmish that drifts around the map
      const cx = W * (0.5 + 0.18 * Math.sin(t * 0.13 + seed)), cy = H * (0.5 + 0.2 * Math.cos(t * 0.17 + seed * 2));
      for (let i = 0; i < 10; i++) {
        const k = i < 5 ? 0 : 1; const a = rnd(i) * 6.28 + t * (0.3 + rnd(i + 9) * 0.4) * (k ? -1 : 1);
        const r = 18 + 26 * rnd(i + 3) + 8 * Math.sin(t * 1.3 + i);
        const x = cx + Math.cos(a) * r + (k ? 14 : -14), y = cy + Math.sin(a) * r * 0.7;
        ctx.fillStyle = 'rgba(0,0,0,0.45)'; ctx.beginPath(); ctx.ellipse(x, y + 5, 7, 3, 0, 0, 6.3); ctx.fill();
        ctx.fillStyle = team[k]; ctx.beginPath(); ctx.arc(x, y, 5.5, 0, 6.3); ctx.fill(); ctx.strokeStyle = 'rgba(255,255,255,0.85)'; ctx.lineWidth = 1; ctx.stroke();
        const hp = 0.25 + 0.75 * (0.5 + 0.5 * Math.sin(t * 0.8 + i * 1.7));
        ctx.fillStyle = 'rgba(0,0,0,0.7)'; ctx.fillRect(x - 9, y - 13, 18, 3); ctx.fillStyle = k ? '#ff6a5f' : '#62d36b'; ctx.fillRect(x - 9, y - 13, 18 * hp, 3);
        if (Math.sin(t * 2.3 + i * 3.1) > 0.92) { ctx.strokeStyle = k ? 'rgba(255,140,90,0.9)' : 'rgba(140,220,255,0.9)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y, 12 + 10 * ((t * 3 + i) % 1), 0, 6.3); ctx.stroke(); }
      }
      // fog / vignette
      const v = ctx.createRadialGradient(cx, cy, 40, cx, cy, W * 0.75); v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(0,0,0,0.55)'); ctx.fillStyle = v; ctx.fillRect(0, 0, W, H);
    };
    draw(seed * 7);
    if (still) return;
    const loop = (now: number) => { if (!visible) return; if (now - last > 66) { last = now; draw(now / 1000 + seed * 7); } raf = requestAnimationFrame(loop); };
    const io = new IntersectionObserver(([e]) => { const was = visible; visible = e.isIntersecting; if (visible && !was) raf = requestAnimationFrame(loop); });
    io.observe(c);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, [seed]);
  return <canvas ref={ref} className={`block h-full w-full ${className}`} aria-hidden="true" />;
}
