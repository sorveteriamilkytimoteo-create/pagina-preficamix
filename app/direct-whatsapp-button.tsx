"use client";

import { useEffect, useState } from "react";
import { getTrackingParams } from "./tracking";

const DIRECT_WHATSAPP_URL =
  "https://wa.me/5531983238881?text=Ol%C3%A1%21%20Estou%20na%20p%C3%A1gina%20do%20Precifica%20Mix%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20antes%20de%20comprar.";

export function DirectWhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 35_000);
    return () => window.clearTimeout(timer);
  }, []);

  function handleClick() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "whatsapp_direto_clicado",
      produto: "precifica_mix",
      origem: "botao_flutuante",
      ...getTrackingParams(),
    });
  }

  return (
    <a
      className={`direct-whatsapp${visible ? " direct-whatsapp-visible" : ""}`}
      href={DIRECT_WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Tirar uma dúvida diretamente pelo WhatsApp"
      onClick={handleClick}
    >
      <span className="direct-whatsapp-icon" aria-hidden="true">✆</span>
      <span className="direct-whatsapp-copy">
        <small>ATENDIMENTO DIRETO</small>
        <strong>Tirar uma dúvida</strong>
      </span>
    </a>
  );
}
