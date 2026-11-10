import Image from 'next/image';
import Link from 'next/link';
import type { Tournament } from '@/lib/content';
import { capturesFor, visualsFor } from '@/lib/media';

/** Monochrome tournament logo; a "channel switch" glitch reveals full colour on hover/focus. Proportions are never altered. */
export function LogoTile({ t, showMeta = false, sizes = '(max-width: 768px) 45vw, 220px' }: { t: Tournament; showMeta?: boolean; sizes?: string }) {
  return (
    <Link href={`/work/${t.slug}`} className={`logo-tile group relative flex flex-col bg-ink ${t.hoverBg === 'light' ? 'hover-light' : ''}`} data-mono={t.mono} aria-label={`${t.name} broadcast production case study`}>
      <span className="relative flex aspect-[4/3] items-center justify-center p-[14%]">
        <Image src={`/logos/${t.logo}`} alt={`${t.name} logo`} width={t.w} height={t.h} sizes={sizes} className="max-h-full w-auto max-w-full object-contain" />
        {showMeta && (capturesFor(t.slug).length || visualsFor(t.slug).length) ? <span className="mono absolute right-2 top-2 border border-accent/60 bg-ink px-1.5 py-0.5 text-[9px] text-accent">{capturesFor(t.slug).length ? 'Footage' : 'Visuals'}</span> : null}
        <span className="ch mono absolute left-2 top-2 text-[9px] text-mute opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true">● Live</span>
      </span>
      {showMeta ? (
        <span className="flex items-center justify-between gap-3 border-t border-line px-3 py-2.5">
          <span className="truncate text-sm text-fg">{t.name}</span>
          <span className="mono shrink-0 text-[10px] text-mute">{t.games.length > 1 ? `${t.games.length} titles` : t.games[0]}</span>
        </span>
      ) : null}
    </Link>
  );
}
