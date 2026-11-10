import Script from 'next/script';

/** Plausible or GA4, chosen by env. Renders nothing when neither is configured. */
export function Analytics() {
  const plausible = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  if (plausible) return <Script src="https://plausible.io/js/script.tagged-events.js" data-domain={plausible} strategy="lazyOnload" />;
  if (ga) return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="lazyOnload" />
      <Script id="ga4" strategy="lazyOnload">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${ga}');`}</Script>
    </>
  );
  return null;
}
