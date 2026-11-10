import Link from 'next/link';
import { Rich } from './Rich';
import { site, technology } from '@/lib/content';

/** v09 footer: the whole company as one equipment label. */
export function Footer() {
  const year = new Date().getFullYear();
  const rows: [string, React.ReactNode][] = [
    ['Company', 'AOBS'], ['Discipline', 'Esports broadcast production'], ['On record', 'Pakistan · Nepal · Bangladesh'],
    ['Pages', <span key="p" className="flex flex-wrap gap-x-4">{site.nav.map((n) => <Link key={n.href} className="link-u" href={n.href}>{n.label}</Link>)}</span>],
    ['Equipment', <span key="e" className="flex flex-wrap gap-x-4">{technology.map((p) => <Link key={p.slug} className="link-u" href={`/technology/${p.slug}`}>{p.name}</Link>)}</span>],
    ['Contact', site.email.startsWith('{{') ? <Rich key="c" text={site.email} /> : <a key="c" href={`mailto:${site.email}`}>{site.email}</a>],
  ];
  return (
    <footer className="relative z-[1] bg-ink py-12">
      <div className="wrap">
        <div className="max-w-3xl border-2 border-fg">
          <div className="flex items-baseline justify-between bg-fg px-4 py-2 text-ink"><span className="display text-lg">AOBS</span><span className="text-sm">Label 09</span></div>
          <dl className="text-sm">{rows.map(([k, v]) => <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-3 border-t border-fg px-4 py-2.5"><dt className="text-mute">{k}</dt><dd>{v}</dd></div>)}</dl>
        </div>
        <div className="mt-6 flex flex-col justify-between gap-2 text-[0.8rem] text-mute sm:flex-row">
          <p>© {year} AOBS. All rights reserved.</p>
          <a href={site.credit.url} target="_blank" rel="noopener" className="transition-colors hover:text-accent">{site.credit.label}</a>
        </div>
      </div>
    </footer>
  );
}
