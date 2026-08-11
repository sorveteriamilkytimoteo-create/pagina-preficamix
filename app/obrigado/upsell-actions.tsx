"use client";

import { type MouseEvent, useEffect } from "react";
import { buildCheckoutUrl, getTrackingParams } from "../tracking";

type UpsellActionsProps = {
  checkoutUrl: string;
  isHotmartCheckout: boolean;
};

function pushEvent(event: string, data: Record<string, unknown> = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
}

export function UpsellActions({
  checkoutUrl,
  isHotmartCheckout,
}: UpsellActionsProps) {
  useEffect(() => {
    const tracking = getTrackingParams();
    pushEvent("upsell_visualizado", {
      produto: "implantacao_vip_precifica_mix",
      value: 49.9,
      currency: "BRL",
      ...tracking,
    });
  }, []);

  function handleAccept(event: MouseEvent<HTMLAnchorElement>) {
    const tracking = getTrackingParams();
    pushEvent("upsell_aceito", {
      produto: "implantacao_vip_precifica_mix",
      value: 49.9,
      currency: "BRL",
      ...tracking,
    });

    if (!isHotmartCheckout) return;

    event.preventDefault();
    const destination = buildCheckoutUrl(checkoutUrl, tracking);
    if (destination) window.location.assign(destination);
  }

  function handleDecline() {
    pushEvent("upsell_recusado", {
      produto: "implantacao_vip_precifica_mix",
      value: 49.9,
      currency: "BRL",
      ...getTrackingParams(),
    });
  }

  return (
    <div className="vip-actions" id="hotmart-funnel-widget-slot">
      {/* Substitua este bloco pelo Widget do Funil de Vendas gerado pela Hotmart
          para habilitar a compra pós-venda em um clique. Enquanto isso, o botão
          usa o checkout definido na variável NEXT_PUBLIC_IMPLANTACAO_VIP_CHECKOUT_URL. */}
      <a className="vip-accept" href={checkoutUrl} onClick={handleAccept}>
        <span>SIM, QUERO A IMPLANTAÇÃO VIP</span>
        <small>Adicionar por apenas R$ 49,90</small>
      </a>
      <a className="vip-decline" href="/obrigado/final" onClick={handleDecline}>
        Não, obrigado. Quero configurar sozinho.
      </a>
    </div>
  );
}
