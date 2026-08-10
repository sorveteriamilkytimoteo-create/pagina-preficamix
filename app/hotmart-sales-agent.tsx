"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";
import {
  buildCheckoutUrl,
  getTrackingParams,
  trackSalesAgentOpened,
} from "./tracking";

const AGENT_CHECKOUT_URL = "https://pay.hotmart.com/D106845746F?off=dbag2uwj";
const WIDGET_SCRIPT = "https://cta-widget-user-form.hp.hotmart.com/widget/widget.iife.js";

export function HotmartSalesAgent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.querySelector("wpp-button")) return;

    const button = document.createElement("wpp-button");
    const checkoutUrl =
      buildCheckoutUrl(AGENT_CHECKOUT_URL, getTrackingParams()) || AGENT_CHECKOUT_URL;

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
      onClickCapture={trackSalesAgentOpened}
      aria-label="Tirar uma dúvida sobre o Precifica Mix pelo WhatsApp"
    >
      <Script id="hotmart-sales-agent-script" src={WIDGET_SCRIPT} strategy="afterInteractive" />
    </div>
  );
}
