'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { tournaments, gameNames, type Tournament } from '@/lib/content';

/** Tournaments set as end credits. The logo appears in a small proof window next to the cursor. */
export function Credits() {
  const [t, setT] = useState<Tournament | null>(null); const peek = useRef<HTMLDivElement>(null);
  const move = (e: React.MouseEvent) => { if (peek.current) { peek.current.style.left = `${e.clientX}px`; peek.current.style.top = `${e.clientY}px`; } };
  return (
    <div onMouseMove={move}>
      <ol className="credits columns-1 gap-10 sm:columns-2 lg:columns-3">
        {tournaments.map((x) => (
          <li key={x.slug} className="border-b border-line-2">
            <Link href={`/work/${x.slug}`} onMouseEnter={() => setT(x)} onMouseLeave={() => setT(null)} onFocus={() => setT(null)}
              className="group flex items-baseline justify-between gap-4 py-3">
              <span className="text-lg font-semibold tracking-[-0.02em] transition-colors group-hover:text-accent">{x.name}</span>
              <span className="shrink-0 text-sm text-mute">{x.games.map((g) => (g === 'MLBB' ? 'MLBB' : g)).join(', ')}{x.year ? ` · ${x.year}` : ''}</span>
            </Link>
          </li>
        ))}
      </ol>
      <div ref={peek} className={`credit-peek hidden md:grid ${t ? 'on' : ''}`} aria-hidden="true" style={{ background: t?.hoverBg === 'dark' ? '#121212' : '#fff' }}>
        {t ? <Image src={`/logos/${t.logo}`} alt="" width={t.w} height={t.h} sizes="168px" className="max-h-full w-auto max-w-full object-contain" /> : null}
      </div>
      <p className="sr-only">Games: {Object.values(gameNames).join(', ')}</p>
    </div>
  );
}
