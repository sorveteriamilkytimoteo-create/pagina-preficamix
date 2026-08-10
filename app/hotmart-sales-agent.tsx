"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import {
  buildCheckoutUrl,
  getTrackingParams,
  trackSalesAgentOpened,
} from "./tracking";

const AGENT_CHECKOUT_URL = "https://pay.hotmart.com/D106845746F?off=dbag2uwj";
const HOTMART_WIDGET_SRC = "https://cta-widget-user-form.hp.hotmart.com/widget/widget.iife.js";

export function HotmartSalesAgent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const revealAfterDelay = window.setTimeout(() => setVisible(true), 35_000);

    function revealAfterScroll() {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight > 0 && window.scrollY / scrollableHeight >= 0.4) {
        setVisible(true);
        window.removeEventListener("scroll", revealAfterScroll);
      }
    }

    window.addEventListener("scroll", revealAfterScroll, { passive: true });
    revealAfterScroll();

    return () => {
      window.clearTimeout(revealAfterDelay);
      window.removeEventListener("scroll", revealAfterScroll);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.querySelector("wpp-button")) return;

    const checkoutUrl =
      buildCheckoutUrl(AGENT_CHECKOUT_URL, getTrackingParams()) || AGENT_CHECKOUT_URL;
    const button = document.createElement("wpp-button");

    button.setAttribute("phone", "5531953475617");
    button.setAttribute("href", checkoutUrl);
    button.setAttribute("producerName", "Luís Fernando Carvalho Ferreira");
    button.setAttribute("productName", "Precifica Mix");
    button.setAttribute("productId", "ODE3NjIyNw==");
    button.setAttribute("btnSize", "40px");
    button.setAttribute("extraInfo", "");
    button.setAttribute("customMessage", "");
    button.setAttribute("lang", "pt_BR");
    container.appendChild(button);
  }, []);

  return (
    <div
      ref={containerRef}
      id="hotmart-widget"
      className={`hotmart-sales-agent${visible ? " hotmart-sales-agent-visible" : ""}`}
      onClickCapture={trackSalesAgentOpened}
      aria-label="Tirar uma dúvida sobre o Precifica Mix pelo WhatsApp"
    >
      <Script id="hotmart-sales-agent-script" src={HOTMART_WIDGET_SRC} strategy="lazyOnload" />
    </div>
  );
}
