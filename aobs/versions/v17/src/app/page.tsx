import '@fontsource/italiana/400.css';
import '@fontsource/cinzel/400.css';
import '@fontsource/cinzel/500.css';
import '@fontsource/cinzel/600.css';
import '@fontsource/jost/300.css';
import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '../dio/lithos/style.css';
import { WORLD_HTML } from './world-markup';
import { WorldBoot } from './WorldBoot';
import { JsonLd } from '@/components/JsonLd';
import { meta, serviceLd } from '@/lib/seo';
import { capabilities } from '@/lib/content';

export const metadata = meta({
  title: 'AOBS | Esports Broadcast Production Company',
  description: 'AOBS is an esports broadcast production company. Crack open a raw stream: HUD, draft board, sponsor formats and a backup path inside.',
  path: '/',
});

export default function Home() {
  return (
    <>
      <div className="kp-root" dangerouslySetInnerHTML={{ __html: WORLD_HTML }} />
      <WorldBoot />
      <JsonLd data={capabilities.map((c) => serviceLd(c.title, c.line, c.href))} />
    </>
  );
}
