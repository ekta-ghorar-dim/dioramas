'use client';
import { useId, useState } from 'react';
import { MobaScene } from './MobaScene';
import { HudOverlay, DraftOverlay, StatsOverlay } from './Overlays';
import { useVisibleTick } from './useVisibleTick';
import { Timecode } from '../Timecode';

const SCENES = [
  { id: 'hud', label: 'In-game HUD', note: 'Scoreboard, player rails, minimap, objective timers' },
  { id: 'draft', label: 'Draft', note: 'Pick/ban locks in from the draft feed' },
  { id: 'stats', label: 'Game stats', note: 'Gold graph and head-to-head, built from match data' },
] as const;

/**
 * A programme monitor that cycles AOBS's MLBB-style broadcast overlays over gameplay. Original overlay designs,
 * driven by demo data. Tabs are a real ARIA tablist; auto-advance stops once the visitor picks a scene.
 */
export function ProgramMonitor({ label = 'PVW', autoplay = true, className = '' }: { label?: string; autoplay?: boolean; className?: string }) {
  const [ref, tick] = useVisibleTick<HTMLDivElement>(1000);
  const [picked, setPicked] = useState<number | null>(null);
  const idx = picked ?? (autoplay ? Math.floor(tick / 9) % SCENES.length : 0);
  const id = useId(); const scene = SCENES[idx];
  return (
    <div ref={ref} className={`pm ${className}`}>
      <div className="pm-frame brackets" role="tabpanel" id={`${id}-panel`} aria-labelledby={`${id}-tab-${idx}`} aria-label={`${scene.label} overlay demo: ${scene.note}`}>
        <div className="absolute inset-0"><MobaScene seed={idx + 1} /></div>
        {scene.id === 'hud' ? <HudOverlay t={tick} /> : scene.id === 'draft' ? <DraftOverlay t={tick} /> : <StatsOverlay t={tick} />}
        <div className="pm-label" aria-hidden="true"><span className="pm-pgm">{label}</span><Timecode className="text-[10px]" start={3600} /></div>
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <div role="tablist" aria-label="Overlay scenes" className="flex flex-wrap gap-2">
          {SCENES.map((s, i) => (
            <button key={s.id} id={`${id}-tab-${i}`} role="tab" aria-selected={i === idx} aria-controls={`${id}-panel`} type="button" onClick={() => setPicked(i)}
              className={`mono min-h-[36px] border px-3 text-[11px] transition-colors ${i === idx ? 'border-accent bg-accent text-ink' : 'border-line-2 text-fg/80 hover:border-fg'}`}>{s.label}</button>
          ))}
        </div>
        <p className="mono text-[10px] text-mute">Overlay system demo · stand-in gameplay · demo data</p>
      </div>
    </div>
  );
}
