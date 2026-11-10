'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { site } from '@/lib/content';

/** v09 header: an instrument bar. Nav left, mark centred, request right; a thin signal-orange rule on top. */
export function Header() {
  const path = usePathname(); const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => { const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false); addEventListener('keydown', esc); return () => removeEventListener('keydown', esc); }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-t-[3px] border-[#e8490f] bg-ink">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-fg focus:px-3 focus:py-2 focus:text-ink">Skip to content</a>
      <div className="wrap grid h-14 grid-cols-[1fr_auto_1fr] items-center border-b border-line">
        <nav aria-label="Main" className="hidden lg:block"><ul className="flex gap-6 text-sm">{site.nav.map((n) => { const a = path === n.href || path.startsWith(n.href + '/'); return <li key={n.href}><Link href={n.href} aria-current={a ? 'page' : undefined} className={`${a ? 'text-fg' : 'text-mute hover:text-fg'}`}>{n.label}</Link></li>; })}</ul></nav>
        <button type="button" className="min-h-[44px] min-w-[44px] text-sm font-semibold lg:hidden justify-self-start" aria-expanded={open} aria-controls="mnav" onClick={() => setOpen((o) => !o)}>{open ? 'Close' : 'Menu'}</button>
        <Link href="/" className="flex items-center gap-2" aria-label="AOBS home"><Logo size={24} /><span className="display text-xl">AOBS</span></Link>
        <Link href="/contact" className="flex min-h-[44px] items-center justify-self-end text-sm font-semibold"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#e8490f] align-middle" aria-hidden="true" />Request a quote</Link>
      </div>
      <nav id="mnav" aria-label="Mobile" hidden={!open} className="border-b border-line bg-ink lg:hidden"><ul className="wrap py-4">{[{ label: 'Home', href: '/' }, ...site.nav, { label: 'Request a quote', href: '/contact' }].map((n) => <li key={n.href}><Link href={n.href} className="display block py-2 text-2xl">{n.label}</Link></li>)}</ul></nav>
    </header>
  );
}
