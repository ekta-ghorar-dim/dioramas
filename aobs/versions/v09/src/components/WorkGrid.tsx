'use client';
import { useMemo, useState } from 'react';
import { LogoTile } from './LogoTile';
import type { Tournament } from '@/lib/content';

function Group({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div role="group" aria-label={`Filter by ${label}`} className="flex flex-wrap items-center gap-2">
      <span className="mono mr-1 w-14 text-mute">{label}</span>
      {['All', ...options].map((o) => (
        <button key={o} type="button" aria-pressed={value === o} onClick={() => onChange(o)} className={`mono min-h-[36px] border px-3 text-[11px] transition-colors ${value === o ? 'border-accent bg-accent text-ink' : 'border-line-2 text-fg/80 hover:border-fg'}`}>{o}</button>
      ))}
    </div>
  );
}

export function WorkGrid({ items }: { items: Tournament[] }) {
  const [game, setGame] = useState('All'); const [year, setYear] = useState('All'); const [type, setType] = useState('All');
  const games = useMemo(() => [...new Set(items.flatMap((t) => t.games))], [items]);
  const years = useMemo(() => [...new Set(items.map((t) => (t.year ? String(t.year) : 'Year TBC')))].sort(), [items]);
  const types = useMemo(() => [...new Set(items.map((t) => t.format || 'Format TBC'))], [items]);
  const list = items.filter((t) => (game === 'All' || t.games.includes(game)) && (year === 'All' || (t.year ? String(t.year) : 'Year TBC') === year) && (type === 'All' || (t.format || 'Format TBC') === type));
  return (
    <div>
      <div className="flex flex-col gap-3 border-y border-line py-5">
        <Group label="Game" options={games} value={game} onChange={setGame} />
        <Group label="Year" options={years} value={year} onChange={setYear} />
        <Group label="Type" options={types} value={type} onChange={setType} />
      </div>
      <p className="mono mt-5 text-mute" aria-live="polite">{String(list.length).padStart(2, '0')} / {items.length} tournaments</p>
      <ul className="mt-5 grid grid-cols-2 gap-px md:grid-cols-3 lg:grid-cols-4">
        {list.map((t) => <li key={t.slug}><LogoTile t={t} showMeta sizes="(max-width: 768px) 45vw, 300px" /></li>)}
      </ul>
      {!list.length ? <p className="py-16 text-center text-mute">No tournaments match those filters yet.</p> : null}
    </div>
  );
}
