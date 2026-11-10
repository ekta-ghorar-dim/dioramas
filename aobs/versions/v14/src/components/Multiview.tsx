import Image from 'next/image';
import { Feed, type FeedKind } from './Feed';

const TILES: { label: string; kind: FeedKind; state?: 'pgm' | 'pvw'; span?: boolean; img?: string }[] = [
  { label: 'PGM', kind: 'map', state: 'pgm', span: true, img: 'pakistan-community-cup-mlbb-ingame-broadcast.webp' },
  { label: 'PVW', kind: 'grid', state: 'pvw', span: true, img: 'mini-mayhem-mlbb-ingame-overlay-sponsor-squeezeback.webp' },
  { label: 'OBS 1', kind: 'map' },
  { label: 'OBS 2', kind: 'grid' },
  { label: 'CAM 1', kind: 'grid' },
  { label: 'REPLAY', kind: 'map', img: 'mini-mayhem-mlbb-ingame-overlay-sponsor-lower-ad.webp' },
  { label: 'GFX', kind: 'wave' },
  { label: 'DATA', kind: 'wave' },
  { label: 'CASTER', kind: 'grid' },
  { label: 'AUX', kind: 'bars', img: 'mini-mayhem-semi-final-stream-starting-screen.webp' },
];

/** Control-room multiviewer: PGM/PVW on top, sources below. Four real AOBS broadcast frames. */
export function Multiview({ className = '' }: { className?: string }) {
  const tiles = TILES.filter((t) => t.img);
  return (
    <div className={`grid grid-cols-2 gap-[3px] bg-black p-[3px] ${className}`} role="img" aria-label="Control-room multiviewer showing programme, preview, observer, camera, replay and graphics sources">
      {tiles.map((t, i) => (
        <div key={t.label} className={`relative aspect-video overflow-hidden scanlines  ${t.state === 'pgm' ? 'outline outline-2 -outline-offset-2 outline-air' : t.state === 'pvw' ? 'outline outline-2 -outline-offset-2 outline-accent' : ''}`}>
          {t.img ? <Image src={`/media/broadcast/${t.img}`} alt="" fill sizes="(max-width: 1024px) 50vw, 400px" className="object-cover" loading="lazy" /> : <Feed kind={t.kind} seed={i + 1} />}
          <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 px-2 py-[1px] font-mono text-[9px] tracking-[0.16em] ${t.state === 'pgm' ? 'bg-air text-white' : t.state === 'pvw' ? 'bg-accent text-ink' : 'bg-black/80 text-fg/80'}`}>{t.label}</span>
        </div>
      ))}
    </div>
  );
}
