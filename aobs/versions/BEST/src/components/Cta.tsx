'use client';
import Link from 'next/link';
import { track } from '@/lib/analytics';

type Props = { href: string; children: React.ReactNode; variant?: 'primary' | 'ghost'; event?: 'request_demo' | 'request_quote'; label?: string; className?: string };
export function Cta({ href, children, variant = 'primary', event, label, className = '' }: Props) {
  return (
    <Link href={href} className={`btn ${variant === 'primary' ? 'btn-primary' : ''} ${className}`} onClick={() => event && track(event, { label: label || '' })}>
      {children}<span className="arr" aria-hidden="true">→</span>
    </Link>
  );
}
