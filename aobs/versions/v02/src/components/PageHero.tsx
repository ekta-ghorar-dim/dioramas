import Link from 'next/link';
import { Rich } from './Rich';
import { Timecode } from './Timecode';
import { JsonLd } from './JsonLd';
import { breadcrumbLd } from '@/lib/seo';

export function PageHero({ eyebrow, title, lede, crumbs, code = 'PGM', children }: { eyebrow: string; title: React.ReactNode; lede?: string; crumbs: [string, string][]; code?: string; children?: React.ReactNode }) {
  const all: [string, string][] = [['Home', '/'], ...crumbs];
  return (
    <section className="relative isolate overflow-hidden border-b border-line pb-16 pt-[120px] md:pb-24 md:pt-[160px]">
      <div className="gridbg absolute inset-0 -z-10" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--color-ink)_0%,rgba(5,7,10,0.9)_45%,rgba(5,7,10,0.35)_100%)]" aria-hidden="true" />
      <div className="wrap">
        <div className="flex items-center justify-between gap-4">
          <nav aria-label="Breadcrumb">
            <ol className="mono flex flex-wrap items-center gap-2 text-mute">
              {all.map(([n, p], i) => (
                <li key={p} className="flex items-center gap-2">
                  {i < all.length - 1 ? <><Link href={p} className="link-u">{n}</Link><span aria-hidden="true">/</span></> : <span aria-current="page" className="text-fg">{n}</span>}
                </li>
              ))}
            </ol>
          </nav>
          <div className="hidden items-center gap-3 sm:flex" aria-hidden="true"><span className="mono text-mute">{code}</span><Timecode className="text-xs text-mute" start={1800} /></div>
        </div>
        <p className="eyebrow mt-12">{eyebrow}</p>
        <h1 className="display t-1 mt-5 max-w-[16ch]">{title}</h1>
        {lede ? <p className="lede mt-7"><Rich text={lede} /></p> : null}
        {children ? <div className="mt-9 flex flex-wrap gap-3">{children}</div> : null}
      </div>
      <JsonLd data={breadcrumbLd(all)} />
    </section>
  );
}
