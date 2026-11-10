'use client';
import { useEffect, useRef } from 'react';

export type FeedKind = 'map' | 'grid' | 'wave' | 'bars';
const BLUE = '#58c7ff', RED = '#ff5a4f', LIME = '#38e1ff';

/**
 * Procedural "camera feed" drawn on a small 2D canvas. These are stylised stand-ins, not real footage:
 * swap for <video> clips once portfolio footage is supplied. Pauses when off screen; static under reduced motion.
 */
export function Feed({ kind, seed = 1, className = '' }: { kind: FeedKind; seed?: number; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext('2d'); if (!ctx) return;
    const W = (c.width = 320), H = (c.height = 180);
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let raf = 0, visible = false, last = 0;
    const rnd = (i: number) => { const x = Math.sin(i * 127.1 + seed * 311.7) * 43758.5453; return x - Math.floor(x); };

    const draw = (t: number) => {
      ctx.fillStyle = '#080c10'; ctx.fillRect(0, 0, W, H);
      if (kind === 'bars') {
        const cols = ['#c0c0c0', '#c0c000', '#00c0c0', '#00c000', '#c000c0', '#c00000', '#0000c0'];
        cols.forEach((col, i) => { ctx.fillStyle = col; ctx.globalAlpha = 0.55; ctx.fillRect((i * W) / 7, 0, W / 7 + 1, H * 0.72); });
        ctx.globalAlpha = 1; ctx.fillStyle = '#0b0f13'; ctx.fillRect(0, H * 0.72, W, H);
        ctx.fillStyle = '#eaf0f2'; ctx.fillRect(W * 0.18, H * 0.78, W * 0.14, H * 0.16);
      } else if (kind === 'wave') {
        ctx.strokeStyle = 'rgba(255,255,255,0.08)'; ctx.lineWidth = 1;
        for (let y = 30; y < H; y += 30) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
        for (let k = 0; k < 2; k++) {
          ctx.beginPath(); ctx.strokeStyle = k ? 'rgba(56, 225, 255,0.9)' : 'rgba(88,199,255,0.6)'; ctx.lineWidth = 1.5;
          for (let x = 0; x <= W; x += 3) {
            const a = Math.sin(x * 0.045 + t * (1.6 + k) + seed) * Math.sin(x * 0.012 + t * 0.7 + k * 2) * 46 * (0.5 + 0.5 * Math.sin(t * 0.9 + k));
            x ? ctx.lineTo(x, H / 2 + a) : ctx.moveTo(x, H / 2 + a);
          }
          ctx.stroke();
        }
      } else if (kind === 'grid') {
        const hz = H * 0.42;
        const g = ctx.createLinearGradient(0, hz, 0, H); g.addColorStop(0, 'rgba(88,199,255,0)'); g.addColorStop(1, 'rgba(88,199,255,0.22)');
        ctx.fillStyle = g; ctx.fillRect(0, hz, W, H - hz);
        ctx.strokeStyle = 'rgba(88,199,255,0.55)'; ctx.lineWidth = 1;
        for (let i = -12; i <= 12; i++) { ctx.beginPath(); ctx.moveTo(W / 2 + i * 6, hz); ctx.lineTo(W / 2 + i * 70 + Math.sin(t * 0.5) * 30, H); ctx.stroke(); }
        for (let i = 0; i < 9; i++) { const z = (i + (t * 0.9) % 1) / 9; const y = hz + (H - hz) * z * z; ctx.globalAlpha = z; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
        ctx.globalAlpha = 1;
        for (let i = 0; i < 4; i++) { const x = W * (0.2 + 0.2 * i) + Math.sin(t * (0.6 + rnd(i)) + i) * 26, y = hz + 22 + rnd(i + 9) * 60; ctx.fillStyle = i % 2 ? RED : LIME; ctx.fillRect(x - 5, y - 16, 10, 16); ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.fillRect(x - 9, y + 1, 18, 3); }
      } else {
        // 'map': abstract MOBA mini-map. Three lanes, ten moving units, the odd team fight.
        ctx.save(); ctx.translate(W / 2, H / 2); const S = 74;
        ctx.strokeStyle = 'rgba(255,255,255,0.14)'; ctx.lineWidth = 7; ctx.lineCap = 'round';
        ctx.strokeRect(-S, -S, S * 2, S * 2); ctx.beginPath(); ctx.moveTo(-S, S); ctx.lineTo(S, -S); ctx.stroke();
        ctx.lineWidth = 1; ctx.strokeStyle = 'rgba(255,255,255,0.1)'; ctx.beginPath(); ctx.moveTo(-S, -S); ctx.lineTo(S, S); ctx.stroke();
        ctx.fillStyle = BLUE; ctx.fillRect(-S - 6, S - 6, 12, 12); ctx.fillStyle = RED; ctx.fillRect(S - 6, -S - 6, 12, 12);
        for (let i = 0; i < 10; i++) {
          const team = i < 5 ? 0 : 1, lane = i % 3; const p = 0.5 + 0.42 * Math.sin(t * (0.25 + rnd(i) * 0.3) + rnd(i + 20) * 6.28) * (team ? -1 : 1) * 0.6 + (team ? 0.08 : -0.08);
          let x = 0, y = 0;
          if (lane === 0) { x = -S + 2 * S * p; y = S - 2 * S * p; }
          else if (lane === 1) { if (p < 0.5) { x = -S; y = S - 4 * S * p; } else { x = -S + 4 * S * (p - 0.5); y = -S; } }
          else { if (p < 0.5) { x = -S + 4 * S * p; y = S; } else { x = S; y = S - 4 * S * (p - 0.5); } }
          x += Math.sin(t * 2 + i) * 3; y += Math.cos(t * 1.7 + i * 2) * 3;
          ctx.fillStyle = team ? RED : BLUE; ctx.beginPath(); ctx.arc(x, y, 4, 0, 6.3); ctx.fill();
        }
        const f = (t * 0.35 + seed) % 1; ctx.strokeStyle = `rgba(56, 225, 255,${1 - f})`; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(Math.sin(seed * 3 + Math.floor(t * 0.35 + seed)) * 40, Math.cos(seed + Math.floor(t * 0.35 + seed) * 2) * 40, f * 34, 0, 6.3); ctx.stroke();
        ctx.restore();
      }
      // noise + rolling scan bar
      for (let i = 0; i < 40; i++) { ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.06})`; ctx.fillRect(Math.random() * W, Math.random() * H, 2, 1); }
      const sy = ((t * 40) % (H + 40)) - 40; const sg = ctx.createLinearGradient(0, sy, 0, sy + 40); sg.addColorStop(0, 'rgba(255,255,255,0)'); sg.addColorStop(0.5, 'rgba(255,255,255,0.05)'); sg.addColorStop(1, 'rgba(255,255,255,0)'); ctx.fillStyle = sg; ctx.fillRect(0, sy, W, 40);
    };

    draw(seed * 3.3);
    if (still) return;
    const loop = (now: number) => { if (!visible) return; if (now - last > 80) { last = now; draw(now / 1000 + seed * 3.3); } raf = requestAnimationFrame(loop); };
    const io = new IntersectionObserver(([e]) => { const was = visible; visible = e.isIntersecting; if (visible && !was) raf = requestAnimationFrame(loop); });
    io.observe(c);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, [kind, seed]);
  return <canvas ref={ref} className={`block h-full w-full ${className}`} aria-hidden="true" />;
}
