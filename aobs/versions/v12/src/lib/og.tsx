import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

/** v12 share card: ivory, navy, rose gold. */
export async function ogImage(kicker: string, title: string) {
  const [font, logo] = await Promise.all([
    readFile(path.join(process.cwd(), 'src/fonts/archivo-latin-800-normal.woff')),
    readFile(path.join(process.cwd(), 'public/brand/aobs-logo-black.png')),
  ]);
  const size = title.length > 34 ? 70 : title.length > 22 ? 84 : 104;
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#f3efe7', color: '#1b2238', padding: '56px 64px', fontFamily: 'Archivo', borderTop: '18px solid #c89b6d' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 26, borderBottom: '2px solid #1b2238', paddingBottom: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`data:image/png;base64,${logo.toString('base64')}`} width={52} height={54} alt="" />
            <div style={{ fontSize: 40, marginLeft: 16, letterSpacing: -1 }}>AOBS</div>
          </div>
          <div style={{ display: 'flex', color: '#a0724a' }}>Esports broadcast production</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 28, color: '#a0724a' }}>{kicker}</div>
          <div style={{ display: 'flex', fontSize: size, lineHeight: 1, letterSpacing: -3, marginTop: 14, maxWidth: 1060 }}>{title}</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: [{ name: 'Archivo', data: font, weight: 800, style: 'normal' }] },
  );
}
