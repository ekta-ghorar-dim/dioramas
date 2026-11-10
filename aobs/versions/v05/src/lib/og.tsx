import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

/** Branded Open Graph / Twitter card, generated at build time for every page. */
export async function ogImage(kicker: string, title: string) {
  const [font, logo] = await Promise.all([
    readFile(path.join(process.cwd(), 'src/fonts/unbounded-latin-700-normal.woff')),
    readFile(path.join(process.cwd(), 'public/brand/aobs-logo-white.png')),
  ]);
  const size = title.length > 34 ? 60 : title.length > 22 ? 74 : 92;
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#050914', color: '#eaf0f2', padding: 64, fontFamily: 'Unbounded', backgroundImage: 'linear-gradient(#121c38 1px, transparent 1px), linear-gradient(90deg, #121c38 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`data:image/png;base64,${logo.toString('base64')}`} width={78} height={80} alt="" />
            <div style={{ fontSize: 64, marginLeft: 20 }}>AOBS</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', background: '#c8140c', border: '2px solid #ff3b30', padding: '8px 20px', fontSize: 30, letterSpacing: 4 }}>
            <div style={{ width: 16, height: 16, borderRadius: 16, background: '#fff', marginRight: 14 }} />ON AIR
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', fontSize: 30, letterSpacing: 6, color: '#38e1ff', textTransform: 'uppercase' }}>{kicker}</div>
          <div style={{ display: 'flex', fontSize: size, lineHeight: 0.95, marginTop: 18, letterSpacing: -2, maxWidth: 1040 }}>{title}</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, letterSpacing: 4, color: '#97a3ab', borderTop: '2px solid #1d252c', paddingTop: 22 }}>
          <div style={{ display: 'flex' }}>ESPORTS BROADCAST PRODUCTION COMPANY</div>
          <div style={{ display: 'flex', color: '#38e1ff' }}>PGM 01</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: [{ name: 'Unbounded', data: font, weight: 700, style: 'normal' }] },
  );
}
