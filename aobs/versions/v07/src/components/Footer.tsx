import Link from 'next/link';
import { Logo } from './Logo';
import { Rich } from './Rich';
import { site, technology } from '@/lib/content';

/** v07 colophon: set like the last page of a printed running order. */
export function Footer() {
  const year = new Date().getFullYear();
  const socials = site.socials.filter((s) => s.url);
  return (
    <footer className="relative z-[1] border-t-2 border-fg bg-ink">
      <div className="wrap grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link href="/" className="inline-flex items-center gap-3" aria-label="AOBS home"><Logo size={36} /><span className="text-3xl font-bold tracking-[-0.04em]">AOBS</span></Link>
          <p className="mt-4 max-w-sm text-mute">{site.footerLine}</p>
          <p className="mt-6 text-sm">Email: {site.email.startsWith('{{') ? <Rich text={site.email} /> : <a className="link-u" href={`mailto:${site.email}`}>{site.email}</a>}</p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 text-sm md:col-span-7 md:grid-cols-3">
          <div><h2 className="mb-3 text-mute">Site</h2><ul className="space-y-1.5">{[...site.nav, { label: 'Book a production', href: '/contact' }].map((n) => <li key={n.href}><Link className="link-u" href={n.href}>{n.label}</Link></li>)}</ul></div>
          <div><h2 className="mb-3 text-mute">Technology</h2><ul className="space-y-1.5">{technology.map((p) => <li key={p.slug}><Link className="link-u" href={`/technology/${p.slug}`}>{p.name}</Link></li>)}</ul></div>
          <div><h2 className="mb-3 text-mute">Elsewhere</h2>{socials.length ? <ul className="space-y-1.5">{socials.map((s) => <li key={s.label}><a className="link-u" href={s.url!} target="_blank" rel="noopener noreferrer">{s.label}</a></li>)}</ul> : <Rich text="{{TODO: social profile URLs}}" />}</div>
        </nav>
      </div>
      <div className="border-t border-fg">
        <div className="wrap flex flex-col justify-between gap-2 py-4 text-[0.8rem] text-mute sm:flex-row">
          <p>© {year} AOBS. All rights reserved.</p>
          <a href={site.credit.url} target="_blank" rel="noopener" className="text-mute transition-colors hover:text-accent">{site.credit.label}</a>
        </div>
      </div>
    </footer>
  );
}
