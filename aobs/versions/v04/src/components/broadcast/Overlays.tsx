'use client';
import overlay from '@/content/overlay.json';

const [A, B] = overlay.teams;
const mmss = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
const initials = (h: string) => h.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();

/** Deterministic match state from a clock, so server and client agree and the "game" evolves believably. */
export function matchState(t: number) {
  const s = 742 + t; const f = (k: number, p: number) => Math.floor((s - 600) / p + k);
  const kills: [number, number] = [Math.max(0, f(4, 37)), Math.max(0, f(2, 44))];
  const towers: [number, number] = [Math.min(9, 3 + Math.floor((s - 600) / 150)), Math.min(9, 2 + Math.floor((s - 600) / 190))];
  const gold: [number, number] = [31.2 + (s - 742) * 0.081, 29.9 + (s - 742) * 0.074];
  const lord = 900 - (s % 900 > 0 ? s % 900 : 0) - 0; const turtle = Math.max(0, 600 - s);
  return { s, kills, towers, gold, lord: Math.max(0, 1080 - s) || 180 - (s % 180), turtle, event: s % 23 < 4 ? (s % 46 < 23 ? 'Lord slain · Team Aurora' : 'Turret destroyed · Team Vanguard') : null, lordUnused: lord };
}

function Portrait({ hero, role, color, dead = 0, side }: { hero: string; role: string; color: string; dead?: number; side: 'l' | 'r' }) {
  return (
    <div className={`ov-pl ${side === 'r' ? 'r' : ''}`}>
      <div className="ov-face" style={{ background: `linear-gradient(140deg, ${color}, #0b1015 85%)` }}>
        <span>{initials(hero)}</span>
        {dead ? <i className="ov-dead">{dead}</i> : null}
      </div>
      <div className="ov-plmeta"><b>{hero}</b><em>{role}</em></div>
    </div>
  );
}

/** In-game HUD: centre scoreboard, side player rails, minimap, objective timers, event pop. Original design in the style of pro MLBB broadcasts. */
export function HudOverlay({ t }: { t: number }) {
  const m = matchState(t); const lead = m.gold[0] - m.gold[1];
  return (
    <div className="ov ov-hud" aria-hidden="true">
      <div className="ov-top">
        <div className="ov-team l" style={{ '--c': A.color } as React.CSSProperties}><span className="ov-tag">{A.tag}</span><span className="ov-gold">{m.gold[0].toFixed(1)}k</span><span className="ov-tw">▲{m.towers[0]}</span></div>
        <div className="ov-score"><b style={{ color: A.color }}>{m.kills[0]}</b><div><span>{mmss(m.s)}</span><em>{overlay.stage}</em></div><b style={{ color: B.color }}>{m.kills[1]}</b></div>
        <div className="ov-team r" style={{ '--c': B.color } as React.CSSProperties}><span className="ov-tw">{m.towers[1]}▲</span><span className="ov-gold">{m.gold[1].toFixed(1)}k</span><span className="ov-tag">{B.tag}</span></div>
      </div>
      <div className="ov-lead"><span style={{ width: `${Math.max(4, Math.min(96, 50 + lead * 8))}%`, background: A.color }} /><em>{lead >= 0 ? `${A.tag} +${lead.toFixed(1)}k` : `${B.tag} +${(-lead).toFixed(1)}k`}</em></div>
      <div className="ov-rail l">{A.players.map((p, i) => <Portrait key={p.hero} {...p} color={A.color} side="l" dead={(m.s + i * 13) % 97 < 6 ? 6 - ((m.s + i * 13) % 97) : 0} />)}</div>
      <div className="ov-rail r">{B.players.map((p, i) => <Portrait key={p.hero} {...p} color={B.color} side="r" dead={(m.s + i * 29) % 83 < 7 ? 7 - ((m.s + i * 29) % 83) : 0} />)}</div>
      <div className="ov-mini"><i /><i /><i /><b style={{ left: `${30 + 20 * Math.sin(t * 0.13)}%`, top: `${45 + 20 * Math.cos(t * 0.17)}%` }} /></div>
      <div className="ov-obj"><span><i className="lord" />Lord {mmss(m.lord)}</span><span><i className="turtle" />Turtle {m.turtle ? mmss(m.turtle) : 'gone'}</span></div>
      <div className={`ov-event ${m.event ? 'on' : ''}`}>{m.event || ' '}</div>
      <div className="ov-bug">{overlay.event}</div>
    </div>
  );
}

const ORDER: [0 | 1, 'ban' | 'pick', number][] = [
  [0, 'ban', 0], [1, 'ban', 0], [0, 'ban', 1], [1, 'ban', 1], [0, 'ban', 2], [1, 'ban', 2],
  [0, 'pick', 0], [1, 'pick', 0], [1, 'pick', 1], [0, 'pick', 1], [0, 'pick', 2], [1, 'pick', 2],
  [1, 'ban', 3], [0, 'ban', 3], [1, 'ban', 4], [0, 'ban', 4],
  [1, 'pick', 3], [0, 'pick', 3], [0, 'pick', 4], [1, 'pick', 4],
];
/** Pick/ban draft board. Each tick locks in the next step of a standard 20-step pro draft. */
export function DraftOverlay({ t }: { t: number }) {
  const step = t % (ORDER.length + 4); const done = Math.min(step, ORDER.length); const cur = ORDER[done];
  const locked = (side: 0 | 1, kind: 'ban' | 'pick', i: number) => ORDER.slice(0, done).some(([s, k, n]) => s === side && k === kind && n === i);
  const active = (side: 0 | 1, kind: 'ban' | 'pick', i: number) => !!cur && cur[0] === side && cur[1] === kind && cur[2] === i;
  const team = (side: 0 | 1) => { const T = overlay.teams[side];
    return (
      <div className={`dr-side ${side ? 'r' : ''}`} style={{ '--c': T.color } as React.CSSProperties}>
        <div className="dr-name"><b>{T.tag}</b><span>{T.name}</span></div>
        <div className="dr-bans">{T.bans.map((h, i) => <div key={h} className={`dr-ban ${locked(side, 'ban', i) ? 'on' : ''} ${active(side, 'ban', i) ? 'act' : ''}`}>{locked(side, 'ban', i) ? initials(h) : ''}</div>)}</div>
        <div className="dr-picks">{T.players.map((p, i) => (
          <div key={p.hero} className={`dr-pick ${locked(side, 'pick', i) ? 'on' : ''} ${active(side, 'pick', i) ? 'act' : ''}`}>
            <span className="dr-role">{p.role}</span><span className="dr-hero">{locked(side, 'pick', i) ? p.hero : active(side, 'pick', i) ? 'Picking…' : ''}</span>
          </div>))}
        </div>
      </div>
    ); };
  return (
    <div className="ov ov-draft" aria-hidden="true">
      <div className="dr-head"><span>{overlay.event}</span><b>Draft</b><span>{overlay.stage}</span></div>
      <div className="dr-body">{team(0)}
        <div className="dr-mid"><em>{cur ? `${overlay.teams[cur[0]].tag} ${cur[1]}` : 'Draft complete'}</em><b>{cur ? String(30 - ((t * 7) % 30)).padStart(2, '0') : '--'}</b><span className="dr-bar"><i style={{ width: cur ? `${100 - ((t * 7) % 30) * 3.33}%` : '0%' }} /></span></div>
        {team(1)}
      </div>
    </div>
  );
}

/** Post-game / stats panel: gold graph plus head-to-head bars. */
export function StatsOverlay({ t }: { t: number }) {
  const pts = Array.from({ length: 24 }, (_, i) => Math.sin(i * 0.55 + 1) * 3 + Math.sin(i * 0.21) * 4 + (i > 14 ? (i - 14) * 0.9 : 0));
  const n = Math.min(24, 6 + (t % 30)); const max = 9;
  const path = pts.slice(0, n).map((v, i) => `${i ? 'L' : 'M'}${(i / 23) * 100} ${50 - (v / max) * 45}`).join(' ');
  const rows: [string, number, number][] = [['Kills', 21, 14], ['Gold (k)', 68.4, 59.1], ['Turrets', 9, 4], ['Lords', 2, 0], ['Turtles', 2, 1], ['Damage (k)', 412, 338]];
  return (
    <div className="ov ov-stats" aria-hidden="true">
      <div className="dr-head"><span>{overlay.event}</span><b>Game stats</b><span>{overlay.stage}</span></div>
      <div className="st-body">
        <div className="st-graph"><em>Gold difference</em>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none"><line x1="0" y1="50" x2="100" y2="50" /><path d={path} style={{ stroke: '#c6ff3d' }} /></svg>
          <div className="st-axis"><span style={{ color: A.color }}>{A.tag}</span><span style={{ color: B.color }}>{B.tag}</span></div>
        </div>
        <div className="st-rows">{rows.map(([k, a, b], i) => { const show = i < 1 + (t % 30) / 2; return (
          <div key={k} className="st-row"><b style={{ color: A.color }}>{show ? a : '–'}</b><div><span style={{ width: show ? `${(a / (a + b)) * 100}%` : '50%', background: A.color }} /><span style={{ background: B.color }} /></div><b style={{ color: B.color }}>{show ? b : '–'}</b><em>{k}</em></div>); })}
        </div>
      </div>
    </div>
  );
}
