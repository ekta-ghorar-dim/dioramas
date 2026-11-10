import { Rich } from './Rich';

export function SectionHead({ eyebrow, title, lede, as: Tag = 'h2', className = '' }: { eyebrow: string; title: React.ReactNode; lede?: string; as?: 'h1' | 'h2'; className?: string }) {
  return (
    <div className={`reveal ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <Tag data-decode className={`display mt-4 ${Tag === 'h1' ? 't-1' : 't-2'}`}>{title}</Tag>
      {lede ? <p className="lede mt-6"><Rich text={lede} /></p> : null}
    </div>
  );
}
