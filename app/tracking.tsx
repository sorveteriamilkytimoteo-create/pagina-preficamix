"use client";

import {
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
  useEffect,
} from "react";

const TRACKING_STORAGE_KEY = "precifica_mix_sales_tracking";
const CHECKOUT_DEDUPLICATION_MS = 1_500;

const knownTrackingKeys = new Set([
  "fbclid",
  "gclid",
  "ttclid",
  "src",
  "sck",
  "xcod",
]);

type TrackingParams = Record<string, string>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    pixelId?: string;
    __precificaSalesTrackingInitialized?: boolean;
    __precificaPageViewSent?: boolean;
    __precificaLastCheckoutAt?: number;
    gtag?: (...args: unknown[]) => void;
    fbq?: {
      (...args: unknown[]): void;
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      loaded?: boolean;
      version?: string;
      push?: (...args: unknown[]) => void;
    };
    _fbq?: Window["fbq"];
  }
}

function sanitizeValue(value: string) {
  return value.trim().slice(0, 500);
}

function isTrackingKey(key: string) {
  const normalizedKey = key.toLowerCase();
  return normalizedKey.startsWith("utm_") || knownTrackingKeys.has(normalizedKey);
}

function readStoredTracking(): TrackingParams {
  if (typeof window === "undefined") return {};

  try {
    const stored = window.sessionStorage.getItem(TRACKING_STORAGE_KEY);
    if (!stored) return {};
    const parsed = JSON.parse(stored) as unknown;
    return parsed && typeof parsed === "object" ? (parsed as TrackingParams) : {};
  } catch {
    return {};
  }
}

export function captureTrackingParams(): TrackingParams {
  if (typeof window === "undefined") return {};

  const merged: TrackingParams = { ...readStoredTracking() };
  const search = new URLSearchParams(window.location.search);

  search.forEach((value, key) => {
    const normalizedKey = key.toLowerCase();
    if (value && isTrackingKey(normalizedKey)) {
      merged[normalizedKey] = sanitizeValue(value);
    }
  });

  try {
    window.sessionStorage.setItem(TRACKING_STORAGE_KEY, JSON.stringify(merged));
  } catch {
    // O checkout continua funcionando mesmo quando o navegador bloqueia storage.
  }

  return merged;
}

export function getTrackingParams() {
  return captureTrackingParams();
}

export function trackSalesAgentOpened() {
  const tracking = getTrackingParams();

  pushDataLayerEvent("assistente_hotmart_aberto", {
    produto: "precifica_mix",
    canal: "whatsapp",
    ...tracking,
  });

  if ((process.env.NEXT_PUBLIC_TRACKING_MODE || "gtm") === "direct") {
    window.gtag?.("event", "assistente_hotmart_aberto", {
      produto: "precifica_mix",
      canal: "whatsapp",
      ...tracking,
    });
  }
}

function addScript(
  id: string,
  src: string,
  attributes: Record<string, string> = {},
) {
  if (document.getElementById(id)) return;

  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  Object.entries(attributes).forEach(([key, value]) => script.setAttribute(key, value));
  document.head.appendChild(script);
}

function initializeGtm(gtmId: string) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  addScript("precifica-gtm", `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`);
}

function initializeGa4(ga4Id: string) {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer?.push(args as unknown as Record<string, unknown>));
  window.gtag("js", new Date());
  window.gtag("config", ga4Id, { send_page_view: false });
  addScript("precifica-ga4", `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4Id)}`);
}

function initializeMetaPixel(pixelId: string) {
  if (!window.fbq) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue?.push(args);
    } as NonNullable<Window["fbq"]>;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    window.fbq = fbq;
    window._fbq = fbq;
    addScript("precifica-meta-pixel", "https://connect.facebook.net/en_US/fbevents.js");
  }

  window.fbq?.("init", pixelId);
}

function initializeUtmify(pixelId: string) {
  window.pixelId = pixelId;
  addScript("precifica-utmify-pixel", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
  addScript(
    "precifica-utmify-utms",
    "https://cdn.utmify.com.br/scripts/utms/latest.js",
    { "data-utmify-prevent-subids": "" },
  );
}

function pushDataLayerEvent(event: string, data: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
}

function sendPageView() {
  if (window.__precificaPageViewSent) return;
  window.__precificaPageViewSent = true;

  const tracking = getTrackingParams();
  pushDataLayerEvent("page_view", {
    page_title: document.title,
    page_location: window.location.href,
    produto: "precifica_mix",
    ...tracking,
  });
  pushDataLayerEvent("view_content", {
    content_name: "Precifica Mix",
    content_category: "Food Service",
    value: 37,
    currency: "BRL",
    meta_event_name: "ViewContent",
    ...tracking,
  });

  const mode = process.env.NEXT_PUBLIC_TRACKING_MODE || "gtm";
  if (mode === "direct") {
    window.gtag?.("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      produto: "precifica_mix",
      ...tracking,
    });
    window.fbq?.("track", "PageView");
    window.fbq?.("track", "ViewContent", {
      content_name: "Precifica Mix",
      content_category: "Food Service",
      value: 37,
      currency: "BRL",
    });
  }
}

function trackCheckoutStarted(tracking: TrackingParams) {
  const now = Date.now();
  if (now - (window.__precificaLastCheckoutAt || 0) < CHECKOUT_DEDUPLICATION_MS) {
    return false;
  }
  window.__precificaLastCheckoutAt = now;

  pushDataLayerEvent("checkout_iniciado", {
    produto: "precifica_mix",
    content_name: "Precifica Mix",
    value: 37,
    currency: "BRL",
    meta_event_name: "InitiateCheckout",
    ...tracking,
  });

  if ((process.env.NEXT_PUBLIC_TRACKING_MODE || "gtm") === "direct") {
    window.gtag?.("event", "checkout_iniciado", {
      produto: "precifica_mix",
      value: 37,
      currency: "BRL",
      ...tracking,
    });
    window.fbq?.("track", "InitiateCheckout", {
      content_name: "Precifica Mix",
      value: 37,
      currency: "BRL",
    });
  }

  return true;
}

export function buildCheckoutUrl(baseUrl: string, tracking: TrackingParams) {
  try {
    const url = new URL(baseUrl);
    if (url.protocol !== "https:" || !/(^|\.)hotmart\.com$/i.test(url.hostname)) {
      return null;
    }

    Object.entries(tracking).forEach(([key, value]) => {
      if (value && isTrackingKey(key) && !url.searchParams.has(key)) {
        url.searchParams.set(key, value);
      }
    });

    return url.toString();
  } catch {
    return null;
  }
}

export function SalesTrackingProvider() {
  useEffect(() => {
    captureTrackingParams();

    if (!window.__precificaSalesTrackingInitialized) {
      window.__precificaSalesTrackingInitialized = true;

      const trackingMode = process.env.NEXT_PUBLIC_TRACKING_MODE || "gtm";
      const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
      const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
      const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
      const utmifyPixelId = process.env.NEXT_PUBLIC_UTMIFY_PIXEL_ID;

      if (trackingMode === "gtm" && gtmId) initializeGtm(gtmId);
      if (trackingMode === "direct") {
        if (ga4Id) initializeGa4(ga4Id);
        if (metaPixelId) initializeMetaPixel(metaPixelId);
      }
      if (utmifyPixelId) initializeUtmify(utmifyPixelId);
    }

    sendPageView();
  }, []);

  return null;
}

type TrackedCheckoutLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "onClick"
> & {
  baseUrl: string;
  children: ReactNode;
};

export function TrackedCheckoutLink({
  baseUrl,
  children,
  ...props
}: TrackedCheckoutLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    const latestTracking = getTrackingParams();
    // Usa o href atual para preservar parâmetros que o script oficial da UTMify
    // possa ter acrescentado e, depois, garante todos os parâmetros capturados.
    const checkoutUrl = buildCheckoutUrl(event.currentTarget.href || baseUrl, latestTracking);
    if (!checkoutUrl) return;
    if (!trackCheckoutStarted(latestTracking)) return;

    window.location.assign(checkoutUrl);
  }

  return (
    <a {...props} href={baseUrl} onClick={handleClick}>
      {children}
    </a>
  );
}
