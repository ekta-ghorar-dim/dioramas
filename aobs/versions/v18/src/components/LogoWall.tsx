import { LogoTile } from './LogoTile';
import { tournaments } from '@/lib/content';

/** The full board: every tournament logo, monochrome until you "switch channel" on hover. */
export function LogoWall() {
  return (
    <section className="section !pt-0" aria-labelledby="wall-title">
      <div className="wrap">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <h2 id="wall-title" className="mono text-fg"><span className="mr-3 inline-block h-2 w-2 rounded-full bg-air align-middle" aria-hidden="true" />Tournaments we&apos;ve broadcast · {tournaments.length} on the board</h2>
          <p className="mono text-mute">Hover to switch channel</p>
        </div>
        <ul className="reveal mt-6 grid grid-cols-3 gap-px sm:grid-cols-4 lg:grid-cols-6">
          {tournaments.map((t) => <li key={t.slug}><LogoTile t={t} sizes="(max-width: 640px) 30vw, 200px" /></li>)}
        </ul>
      </div>
    </section>
  );
}
