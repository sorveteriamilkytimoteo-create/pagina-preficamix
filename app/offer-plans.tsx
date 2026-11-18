"use client";

import { useEffect, useState } from "react";
import { TrackedCheckoutLink } from "./tracking";

type Plan = "essencial" | "completo";

export function OfferPlans({ essentialUrl, completeUrl }: { essentialUrl: string; completeUrl: string }) {
  const [active, setActive] = useState<Plan | null>(null);
  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setActive(null); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [active]);
  const isComplete = active === "completo";
  return <>
    <div className="pm-plans" aria-label="Escolha seu plano">
      <article className="pm-plan">
        <span className="pm-plan-eyebrow">ESSENCIAL</span>
        <h3>Comece a precificar sem achismo</h3>
        <div className="pm-plan-price">R$ 37<span>,00</span></div>
        <p>Pagamento único. Acesso ao Precifica Mix e aos recursos do aplicativo.</p>
        <ul><li>✓ Fichas técnicas e custos</li><li>✓ Preço por canal de venda</li><li>✓ CMV, margens e simulações</li><li>✓ Estoque, videoaulas e suporte</li></ul>
        <button type="button" className="pm-plan-btn pm-plan-btn-outline" onClick={() => setActive("essencial")}>ESCOLHER ESSENCIAL</button>
      </article>
      <article className="pm-plan pm-plan-featured">
        <span className="pm-plan-ribbon">MAIS COMPLETO</span>
        <span className="pm-plan-eyebrow">COMPLETO</span>
        <h3>Precifique e comece com modelos prontos</h3>
        <div className="pm-plan-price">R$ 67<span>,00</span></div>
        <p>Pagamento único pelo pacote. Inclui tudo do Essencial e bônus exclusivos.</p>
        <ul><li>✓ Tudo do plano Essencial</li><li>✓ <strong>PDF com 30 fichas técnicas de hamburgueria</strong></li><li>✓ 30 dias de acesso ao Gestão Mix</li></ul>
        <div className="pm-bonus-preview"><img src="/bonus-30-fichas-capa.png" alt="Capa ilustrada do bônus com 30 fichas técnicas de hamburgueria" /><span>20 lanches, 5 porções e 5 combos. Exemplos de ingredientes, gramaturas e preços para adaptar no Precifica Mix.</span></div>
        <button type="button" className="pm-plan-btn" onClick={() => setActive("completo")}>QUERO O COMPLETO POR R$ 67</button>
        <small>Por R$ 30 a mais que o Essencial</small>
      </article>
    </div>
    <p className="pm-plan-note">As fichas são um PDF de referência, não uma planilha de precificação. Os custos e preços são exemplos que devem ser ajustados à sua operação no Precifica Mix. O acesso gratuito ao Gestão Mix dura 30 dias; a continuidade é opcional e depende de contratação separada.</p>
    {active && <div className="pm-modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) setActive(null); }}>
      <div className="pm-modal" role="dialog" aria-modal="true" aria-labelledby="pm-modal-title">
        <button type="button" className="pm-modal-close" aria-label="Fechar" onClick={() => setActive(null)}>×</button>
        <span className="pm-plan-eyebrow">CONFIRME SUA ESCOLHA</span>
        <h3 id="pm-modal-title">Precifica Mix {isComplete ? "Completo" : "Essencial"}</h3>
        <div className="pm-plan-price">R$ {isComplete ? "67" : "37"}<span>,00</span></div>
        <p>{isComplete ? "Aplicativo Precifica Mix, PDF com 30 fichas técnicas e 30 dias de Gestão Mix." : "Acesso ao Precifica Mix com os recursos de precificação, fichas técnicas e suporte."}</p>
        <TrackedCheckoutLink className="pm-plan-btn pm-modal-checkout" baseUrl={isComplete ? completeUrl : essentialUrl} offerValue={isComplete ? 67 : 37}>IR PARA O PAGAMENTO SEGURO →</TrackedCheckoutLink>
        <small>Pagamento processado pela Hotmart · 7 dias de garantia</small>
      </div>
    </div>}
  </>;
}
