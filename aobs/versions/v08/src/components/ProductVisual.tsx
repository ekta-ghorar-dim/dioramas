import { Feed } from './Feed';

/** Small looping visual per product. Pure CSS/SVG plus one procedural feed. */
export function ProductVisual({ slug }: { slug: string }) {
  if (slug === 'aobs-cloud') {
    return (
      <svg viewBox="0 0 520 320" className="pv w-full" role="img" aria-label="Diagram: sources from several locations meet in AOBS Cloud and go out as one programme">
        {[[60, 60, 'OBS'], [60, 160, 'CAST'], [60, 260, 'GFX']].map(([x, y, l]) => (
          <g key={l as string}><path d={`M${(x as number) + 44} ${y} C 180 ${y}, 180 160, 230 160`} className="pv-line" /><rect x={(x as number) - 44} y={(y as number) - 20} width="88" height="40" className="pv-box" /><text x={x} y={(y as number) + 4} textAnchor="middle" className="pv-t">{l}</text></g>
        ))}
        <path d="M330 160 H430" className="pv-line pv-main" />
        <rect x="230" y="110" width="100" height="100" className="pv-core" /><text x="280" y="156" textAnchor="middle" className="pv-t on">AOBS</text><text x="280" y="174" textAnchor="middle" className="pv-t on">CLOUD</text>
        <rect x="430" y="140" width="70" height="40" className="pv-box live" /><text x="465" y="164" textAnchor="middle" className="pv-t">LIVE</text>
      </svg>
    );
  }
  if (slug === 'obs-plugins') {
    return (
      <div className="border border-line bg-ink font-mono text-[11px]" role="img" aria-label="Illustration of an OBS dock with AOBS plugins loaded">
        <div className="flex items-center justify-between border-b border-line px-3 py-2 text-mute"><span>OBS · Docks</span><span className="text-accent">AOBS</span></div>
        {['AOBS plugin 01', 'AOBS plugin 02', 'AOBS plugin 03', 'AOBS plugin 04'].map((n, i) => (
          <div key={n} className="flex items-center justify-between border-b border-line/60 px-3 py-3 last:border-0">
            <span className="flex items-center gap-3 text-fg"><span className="h-2 w-2 bg-accent" style={{ animation: `blink 1.6s ${i * 0.3}s steps(2, jump-none) infinite` }} />{n}</span>
            <span className="text-mute">loaded</span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-[3px] bg-black p-[3px]" role="img" aria-label="Primary and backup signal monitors">
      <div className="relative aspect-video overflow-hidden scanlines outline outline-2 -outline-offset-2 outline-air"><Feed kind="map" seed={2} /><span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-air px-2 font-mono text-[9px] tracking-[0.16em] text-white">PRIMARY</span></div>
      <div className="relative aspect-video overflow-hidden scanlines outline outline-2 -outline-offset-2 outline-accent"><Feed kind="map" seed={2} /><span className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-accent px-2 font-mono text-[9px] tracking-[0.16em] text-ink">BACKUP</span></div>
    </div>
  );
}
