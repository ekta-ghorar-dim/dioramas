'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Cta } from './Cta';

/** Appears once the visitor has scrolled past the hero. Hidden on the contact page itself. */
export function StickyCta() {
  const path = usePathname();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => {
      const nearEnd = window.scrollY + window.innerHeight > document.documentElement.scrollHeight - 700;
      setShow(window.scrollY > window.innerHeight * 0.85 && !nearEnd);
    };
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, [path]);
  if (path === '/contact') return null;
  return (
    <div className={`fixed bottom-4 right-4 z-40 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'}`} inert={!show}>
      <Cta href="/contact" event="request_quote" label="sticky" className="shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
        <span className="h-2 w-2 rounded-full bg-air" aria-hidden="true" />Request a quote
      </Cta>
    </div>
  );
}
