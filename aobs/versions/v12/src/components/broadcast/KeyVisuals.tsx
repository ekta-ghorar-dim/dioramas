import Image from 'next/image';
import Link from 'next/link';
import { keyVisuals, type KeyVisual } from '@/lib/media';
import { tournament } from '@/lib/content';

/** Masonry of tournament key visuals and campaign posters produced for AOBS events. */
export function KeyVisuals({ items = keyVisuals }: { items?: KeyVisual[] }) {
  return (
    <ul className="columns-2 gap-3 md:columns-3 lg:columns-4 [&>li]:mb-3">
      {items.map((k) => { const t = tournament(k.tournament); return (
        <li key={k.file} className="reveal break-inside-avoid">
          <figure className="group relative overflow-hidden border border-line">
            <Image src={`/media/key-visuals/${k.file}`} alt={k.alt} width={k.w} height={k.h} sizes="(max-width: 768px) 50vw, 25vw" className="h-auto w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]" />
            {t ? <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-ink/90 px-3 py-2 transition-transform duration-300 group-hover:translate-y-0 group-focus-within:translate-y-0"><Link href={`/work/${t.slug}`} className="mono text-[10px] text-fg">{t.name} →</Link></figcaption> : null}
          </figure>
        </li>); })}
    </ul>
  );
}
