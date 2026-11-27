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
        <h3>Precificação sem achismo</h3>
        <div className="pm-plan-price">R$ 37<span>,00</span></div>
        <p>Pagamento único. Acesso ao Precifica Mix no navegador.</p>
        <ul>
          <li>✓ Fichas técnicas e custo real</li>
          <li>✓ Preço por canal (balcão e delivery)</li>
          <li>✓ CMV, margem e simulador de lucro</li>
          <li>✓ Estoque, videoaulas e suporte</li>
        </ul>
        <button type="button" className="pm-plan-btn pm-plan-btn-outline" onClick={() => setActive("essencial")}>ESCOLHER ESSENCIAL</button>
      </article>
      <article className="pm-plan pm-plan-featured">
        <span className="pm-plan-ribbon">BLACK FRIDAY · MAIS ESCOLHIDO</span>
        <span className="pm-plan-eyebrow">COMPLETO + GESTÃO MIX</span>
        <h3>Precifique, ganhe cardápio digital e otimize vendas</h3>
        <div className="pm-plan-price">R$ 67<span>,00</span></div>
        <p>Pagamento único no Precifica Mix + pacote extra para acelerar suas vendas.</p>
        <ul>
          <li>✓ Tudo do plano Essencial</li>
          <li>✓ <strong>PDF com 30 fichas técnicas de hamburgueria</strong></li>
          <li>✓ <strong>30 dias de Gestão Mix com cardápio digital</strong> e ferramentas para otimizar vendas (sem cobrança automática)</li>
        </ul>
        <div className="pm-bonus-preview">
          <img src="/bonus-30-fichas-capa.png" alt="Capa ilustrada do bônus com 30 fichas técnicas de hamburgueria" />
          <span>20 lanches, 5 porções e 5 combos prontos para adaptar + 30 dias de Gestão Mix com cardápio digital.</span>
        </div>
        <button type="button" className="pm-plan-btn" onClick={() => setActive("completo")}>QUERO O COMPLETO POR R$ 67</button>
        <small>Apenas R$ 30 a mais que o Essencial</small>
      </article>
    </div>
    <p className="pm-plan-note">As 30 fichas são um PDF de referência para adaptar à sua operação (não é planilha Excel). Os 30 dias de acesso ao Gestão Mix com cardápio digital são gratuitos no plano Completo sem cobrança automática; a continuidade após o período é opcional.</p>
    {active && <div className="pm-modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) setActive(null); }}>
      <div className="pm-modal" role="dialog" aria-modal="true" aria-labelledby="pm-modal-title">
        <button type="button" className="pm-modal-close" aria-label="Fechar" onClick={() => setActive(null)}>×</button>
        <span className="pm-plan-eyebrow">CONDIÇÃO BLACK FRIDAY · PAGAMENTO ÚNICO</span>
        <h3 id="pm-modal-title">Precifica Mix {isComplete ? "Completo" : "Essencial"}</h3>
        <div className="pm-plan-price">R$ {isComplete ? "67" : "37"}<span>,00</span></div>
        <p>{isComplete ? "App Precifica Mix, PDF com 30 fichas técnicas e 30 dias de Gestão Mix com cardápio digital (sem cobrança automática)." : "Acesso ao Precifica Mix com precificação por canal, fichas técnicas, estoque, videoaulas e suporte."}</p>
        <TrackedCheckoutLink className="pm-plan-btn pm-modal-checkout" baseUrl={isComplete ? completeUrl : essentialUrl} offerValue={isComplete ? 67 : 37}>IR PARA O PAGAMENTO SEGURO →</TrackedCheckoutLink>
        <small>Compra segura pela Hotmart · Garantia incondicional de 7 dias</small>
      </div>
    </div>}
  </>;
}
