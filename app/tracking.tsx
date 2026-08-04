"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    _fbq?: unknown;
  }
}

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

function appendTrackedUtms(url: URL) {
  for (const key of UTM_KEYS) {
    const value = window.localStorage.getItem(`precifica_${key}`);
    if (value && !url.searchParams.has(key)) url.searchParams.set(key, value);
  }
}

export function Tracking() {
  useEffect(() => {
    const currentParams = new URLSearchParams(window.location.search);
    for (const key of UTM_KEYS) {
      const value = currentParams.get(key);
      if (value) window.localStorage.setItem(`precifica_${key}`, value);
    }

    const handleCheckoutClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const anchor = target?.closest<HTMLAnchorElement>('a[href*="pay.hotmart.com"]');
      if (!anchor) return;

      const checkoutUrl = new URL(anchor.href);
      appendTrackedUtms(checkoutUrl);
      anchor.href = checkoutUrl.toString();

      window.dataLayer?.push({ event: "checkout_iniciado", product: "precifica_mix" });
      window.gtag?.("event", "checkout_iniciado", { product: "precifica_mix" });
      window.fbq?.("track", "InitiateCheckout", { content_name: "Precifica Mix", value: 37, currency: "BRL" });
    };

    document.addEventListener("click", handleCheckoutClick);
    return () => document.removeEventListener("click", handleCheckoutClick);
  }, []);

  return (
    <>
      {gtmId ? (
        <>
          <Script id="gtm-loader" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        </>
      ) : null}

      {ga4Id ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`} strategy="afterInteractive" />
          <Script id="ga4-config" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${ga4Id}',{send_page_view:true});`}
          </Script>
        </>
      ) : null}

      {metaPixelId ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaPixelId}');fbq('track','PageView');fbq('track','ViewContent',{content_name:'Precifica Mix',value:37,currency:'BRL'});`}
        </Script>
      ) : null}
    </>
  );
}
