import Image from 'next/image';
import Link from 'next/link';
import { featured } from '@/lib/content';

export function FeaturedCases() {
  return (
    <section className="section" aria-labelledby="cases-title">
      <div className="wrap">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div><p className="eyebrow">On the record</p><h2 id="cases-title" className="display t-2 mt-4">Featured broadcasts.</h2></div>
          <Link href="/work" className="link-u mono text-fg">All 18 tournaments →</Link>
        </div>
        <ul className="mt-12 grid gap-px bg-line md:grid-cols-2">
          {featured.map((t, i) => (
            <li key={t.slug} className="reveal bg-ink" style={{ '--d': `${i * 70}ms` } as React.CSSProperties}>
              <Link href={`/work/${t.slug}`} className="case group relative flex h-full min-h-[300px] flex-col justify-between overflow-hidden p-6 md:min-h-[380px] md:p-9">
                <span className="flex items-center justify-between">
                  <span className="mono text-mute">Case {String(i + 1).padStart(2, '0')}</span>
                  <span className="flex gap-2">{[t.format, t.year, ...t.games].filter(Boolean).map((x) => <span key={String(x)} className="mono border border-line-2 px-2 py-1 text-[10px] text-fg/80">{x}</span>)}</span>
                </span>
                <span className={`case-logo pointer-events-none absolute right-[6%] top-1/2 flex h-[52%] w-[46%] -translate-y-1/2 items-center justify-center`} data-mono={t.mono}>
                  <Image src={`/logos/${t.logo}`} alt={`${t.name} logo`} width={t.w} height={t.h} sizes="(max-width: 768px) 45vw, 320px" className="max-h-full w-auto max-w-full object-contain" />
                </span>
                <span className="relative max-w-[55%]">
                  <span className="display block text-[clamp(1.8rem,3.2vw,3rem)] transition-colors group-hover:text-accent">{t.name}</span>
                  <span className="mono mt-3 inline-flex items-center gap-2 text-mute">Broadcast production <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
