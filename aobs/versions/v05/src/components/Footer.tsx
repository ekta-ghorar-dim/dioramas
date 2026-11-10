import Link from 'next/link';
import { Logo } from './Logo';
import { Rich } from './Rich';
import { site, technology } from '@/lib/content';

export function Footer() {
  const year = new Date().getFullYear();
  const socials = site.socials.filter((s) => s.url);
  return (
    <footer className="relative z-[1] border-t border-line bg-panel">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Link href="/" className="inline-flex items-center gap-3" aria-label="AOBS home">
            <Logo size={44} /><span className="display text-4xl">AOBS</span>
          </Link>
          <p className="mt-5 max-w-sm text-mute">{site.footerLine}</p>
          <p className="mt-6 text-sm">
            <span className="mono mr-3 text-mute">Email</span>
            {site.email.startsWith('{{') ? <Rich text={site.email} /> : <a className="link-u" href={`mailto:${site.email}`}>{site.email}</a>}
          </p>
        </div>
        <nav aria-label="Footer" className="md:col-span-3">
          <h2 className="mono mb-4 text-mute">Pages</h2>
          <ul className="space-y-2">
            {[...site.nav, { label: 'Contact', href: '/contact' }].map((n) => (
              <li key={n.href}><Link className="link-u" href={n.href}>{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-2">
          <h2 className="mono mb-4 text-mute">Technology</h2>
          <ul className="space-y-2">
            {technology.map((p) => (<li key={p.slug}><Link className="link-u" href={`/technology/${p.slug}`}>{p.name}</Link></li>))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h2 className="mono mb-4 text-mute">Follow</h2>
          {socials.length ? (
            <ul className="space-y-2">
              {socials.map((s) => (<li key={s.label}><a className="link-u" href={s.url!} target="_blank" rel="noopener noreferrer">{s.label}</a></li>))}
            </ul>
          ) : (
            <p className="text-sm"><Rich text="{{TODO: social profile URLs}}" /></p>
          )}
        </div>
      </div>
      <div className="wrap overflow-hidden" aria-hidden="true"><div className="foot-mark -mb-[0.12em] text-center">AOBS</div></div>
      <div className="border-t border-line">
        <div className="wrap flex flex-col items-start justify-between gap-3 py-5 text-[0.8rem] text-mute sm:flex-row sm:items-center">
          <p>© {year} AOBS. All rights reserved.</p>
          <a href={site.credit.url} target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-[0.72rem] tracking-wide text-mute/80 transition-colors hover:text-accent">
            {site.credit.logo ? <img src={site.credit.logo} alt="Desiate logo" width={16} height={16} className="h-4 w-auto opacity-80" /> : null}
            {site.credit.label}
          </a>
        </div>
      </div>
    </footer>
  );
}
