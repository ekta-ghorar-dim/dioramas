import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

/** v07 share card: a page from the rundown. Paper, black ink, one red rule. */
export async function ogImage(kicker: string, title: string) {
  const [font, logo] = await Promise.all([
    readFile(path.join(process.cwd(), 'src/fonts/schibsted-grotesk-latin-700-normal.woff')),
    readFile(path.join(process.cwd(), 'public/brand/aobs-logo-black.png')),
  ]);
  const size = title.length > 34 ? 70 : title.length > 22 ? 84 : 104;
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#f3f2ee', color: '#121212', padding: '56px 64px', fontFamily: 'Grotesk', borderTop: '18px solid #d71e28' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 26, borderBottom: '2px solid #121212', paddingBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`data:image/png;base64,${logo.toString('base64')}`} width={52} height={54} alt="" />
            <div style={{ fontSize: 40, marginLeft: 16, letterSpacing: -1 }}>AOBS</div>
          </div>
          <div style={{ display: 'flex', color: '#5f5d57' }}>Esports broadcast production</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 28, color: '#5f5d57' }}>{kicker}</div>
          <div style={{ display: 'flex', fontSize: size, lineHeight: 1, letterSpacing: -3, marginTop: 14, maxWidth: 1060 }}>{title}</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: [{ name: 'Grotesk', data: font, weight: 700, style: 'normal' }] },
  );
}
