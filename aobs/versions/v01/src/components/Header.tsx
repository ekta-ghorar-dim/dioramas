'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { Cta } from './Cta';
import { site } from '@/lib/content';

export function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', esc);
    return () => window.removeEventListener('keydown', esc);
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300 border-b ${scrolled || open ? 'bg-ink/85 backdrop-blur-md border-line' : 'border-transparent'}`}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-ink">Skip to content</a>
      <div className="wrap flex h-16 items-center justify-between gap-6 md:h-[72px]">
        <Link href="/" className="flex items-center gap-3" aria-label="AOBS home">
          <Logo size={34} />
          <span className="display text-[1.7rem] leading-none tracking-tight">AOBS</span>
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {site.nav.map((n) => {
              const active = path === n.href || path.startsWith(n.href + '/');
              return (
                <li key={n.href}>
                  <Link href={n.href} aria-current={active ? 'page' : undefined} className={`mono link-u py-2 ${active ? 'text-accent' : 'text-fg/80'}`}>{n.label}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <Cta href="/contact" event="request_quote" label="header" className="hidden sm:inline-flex !min-h-[40px] !px-4">Request a quote</Cta>
          <button type="button" className="lg:hidden grid h-11 w-11 place-items-center border border-line-2" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((o) => !o)}>
            <span className="relative block h-3 w-5" aria-hidden="true">
              <span className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-300 ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
              <span className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform duration-300 ${open ? '-translate-y-[5px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>
      <div id="mobile-nav" hidden={!open} className="lg:hidden border-t border-line bg-ink">
        <nav aria-label="Mobile" className="wrap flex h-[calc(100dvh-64px)] flex-col justify-between overflow-y-auto py-8">
          <ul>
            {[{ label: 'Home', href: '/' }, ...site.nav].map((n, i) => (
              <li key={n.href} className="border-b border-line">
                <Link href={n.href} className="flex items-baseline gap-4 py-4">
                  <span className="mono text-mute">{String(i).padStart(2, '0')}</span>
                  <span className="display text-4xl">{n.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Cta href="/contact" event="request_quote" label="mobile-nav" className="mt-8 w-full">Request a broadcast quote</Cta>
        </nav>
      </div>
    </header>
  );
}
