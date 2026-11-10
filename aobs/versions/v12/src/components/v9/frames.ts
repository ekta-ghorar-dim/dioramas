export type Ann = { x: number; y: number; w: number; h: number; label: string; pos?: 'below' | 'right' };
export type LensFrame = { id: string; name: string; file: string; alt: string; anns: Ann[] };

/** Real AOBS frames, with the HUD regions measured from the captures (percent of frame). */
export const FRAMES: LensFrame[] = [
  { id: 'pcc', name: 'Pakistan Community Cup', file: 'pakistan-community-cup-mlbb-ingame-broadcast.webp',
    alt: 'Pakistan Community Cup grand final, AOBS in-game HUD over MLBB gameplay',
    anns: [
      { x: 0.3, y: 0.4, w: 17.4, h: 30.5, label: 'Minimap · live map state', pos: 'below' },
      { x: 18, y: 0.4, w: 58.5, h: 6.6, label: 'Scoreboard · kills, turrets, gold ← match data', pos: 'below' },
      { x: 77, y: 0.4, w: 22.6, h: 8.6, label: 'Stage · grand final · credits', pos: 'below' },
      { x: 0.3, y: 32.5, w: 9.5, h: 45, label: 'Blue roster · KDA, level' },
      { x: 90.2, y: 32.5, w: 9.5, h: 45, label: 'Red roster', pos: 'right' },
      { x: 33, y: 50, w: 24, h: 30, label: 'Observer camera · on the fight' },
    ] },
  { id: 'mm', name: 'Mini Mayhem', file: 'mini-mayhem-mlbb-ingame-overlay-sponsor-squeezeback.webp',
    alt: 'Mini Mayhem MLBB broadcast squeezed back inside a sponsor L-frame',
    anns: [
      { x: 0.4, y: 6, w: 16.8, h: 76, label: 'Sponsor panel · runs during play', pos: 'below' },
      { x: 17.8, y: 0.4, w: 81.8, h: 81.5, label: 'Live game, squeezed back · never leaves the screen', pos: 'below' },
      { x: 44, y: 84.5, w: 25.5, h: 6.5, label: 'Sponsor URL' },
      { x: 33, y: 0.4, w: 46, h: 7, label: 'Scorebug · event mark at centre', pos: 'below' },
    ] },
];
export const MODES = [
  { id: 'thermal', label: 'Thermal', hint: 'Where the eye goes: brightness as heat' },
  { id: 'wire', label: 'Wire', hint: 'The layout as a blueprint: every edge of the package' },
  { id: 'data', label: 'Data', hint: 'What each element is, and where its numbers come from' },
] as const;
