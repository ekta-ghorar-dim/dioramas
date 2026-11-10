import { Feed, type FeedKind } from './Feed';

const TILES: { label: string; kind: FeedKind; state?: 'pgm' | 'pvw'; span?: boolean }[] = [
  { label: 'PGM', kind: 'map', state: 'pgm', span: true },
  { label: 'PVW', kind: 'grid', state: 'pvw', span: true },
  { label: 'OBS 1', kind: 'map' },
  { label: 'OBS 2', kind: 'grid' },
  { label: 'CAM 1', kind: 'grid' },
  { label: 'REPLAY', kind: 'map' },
  { label: 'GFX', kind: 'wave' },
  { label: 'DATA', kind: 'wave' },
  { label: 'CASTER', kind: 'grid' },
  { label: 'AUX', kind: 'bars' },
];

/** Control-room multiviewer: PGM/PVW on top, sources below. Feeds are procedural stand-ins until real clips are supplied. */
export function Multiview({ className = '' }: { className?: string }) {
  return (
    <div className={`grid grid-cols-4 gap-[3px] bg-black p-[3px] ${className}`} role="img" aria-label="Control-room multiviewer showing programme, preview, observer, camera, replay and graphics sources">
      {TILES.map((t, i) => (
        <div key={t.label} className={`relative aspect-video overflow-hidden scanlines ${t.span ? 'col-span-2' : ''} ${t.state === 'pgm' ? 'outline outline-2 -outline-offset-2 outline-air' : t.state === 'pvw' ? 'outline outline-2 -outline-offset-2 outline-accent' : ''}`}>
          <Feed kind={t.kind} seed={i + 1} />
          <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 px-2 py-[1px] font-mono text-[9px] tracking-[0.16em] ${t.state === 'pgm' ? 'bg-air text-white' : t.state === 'pvw' ? 'bg-accent text-ink' : 'bg-black/80 text-fg/80'}`}>{t.label}</span>
        </div>
      ))}
    </div>
  );
}
