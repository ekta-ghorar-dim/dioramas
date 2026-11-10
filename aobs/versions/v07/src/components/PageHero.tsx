import Link from 'next/link';
import { Rich } from './Rich';
import { JsonLd } from './JsonLd';
import { breadcrumbLd } from '@/lib/seo';

/** v07 page head: breadcrumb as a running header, then a plain, large title. */
export function PageHero({ eyebrow, title, lede, crumbs, children }: { eyebrow: string; title: React.ReactNode; lede?: string; crumbs: [string, string][]; code?: string; children?: React.ReactNode }) {
  const all: [string, string][] = [['Home', '/'], ...crumbs];
  return (
    <section className="pb-14 pt-[100px] md:pb-20 md:pt-[130px]">
      <div className="wrap">
        <div className="flex flex-wrap items-baseline justify-between gap-4 border-b-2 border-fg pb-3 text-sm">
          <nav aria-label="Breadcrumb"><ol className="flex flex-wrap items-center gap-2 text-mute">
            {all.map(([n, p], i) => <li key={p} className="flex items-center gap-2">{i < all.length - 1 ? <><Link href={p} className="link-u">{n}</Link><span aria-hidden="true">/</span></> : <span aria-current="page" className="text-fg">{n}</span>}</li>)}
          </ol></nav>
          <span className="text-mute">{eyebrow}</span>
        </div>
        <h1 className="display t-1 mt-10 max-w-[18ch]">{title}</h1>
        {lede ? <p className="mt-7 max-w-[62ch] text-lg text-mute md:text-xl"><Rich text={lede} /></p> : null}
        {children ? <div className="mt-9 flex flex-wrap gap-3">{children}</div> : null}
      </div>
      <JsonLd data={breadcrumbLd(all)} />
    </section>
  );
}
