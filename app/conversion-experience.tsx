"use client";

import { useEffect, useMemo, useState } from "react";

type DemoScreen = "canais" | "taxa" | "impacto";

const burgerIngredients = [
  "Pão brioche",
  "Carne de 160 g",
  "Queijo",
  "Molho",
  "Bacon",
  "Salada",
  "Embalagem",
  "Guardanapo e sacola",
];

const burgerCostLines = [
  ["Pão brioche", "1 un", "R$ 1,42"],
  ["Carne artesanal", "160 g", "R$ 4,96"],
  ["Queijo e molho", "1 porção", "R$ 2,18"],
  ["Embalagem", "1 un", "R$ 1,15"],
];

const money = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function RevealController() {
  useEffect(() => {
    document.documentElement.classList.add("reveal-ready");
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}

export function InteractivePricingDemo() {
  const [screen, setScreen] = useState<DemoScreen>("canais");
  const isChannels = screen === "canais";
  const isFee = screen === "taxa";
  const label = screen === "canais" ? "Ficha e canais" : screen === "taxa" ? "Taxas do iFood" : "Impacto no lucro";
  const eyebrow = screen === "canais" ? "O QUE ESTA TELA MOSTRA" : screen === "taxa" ? "POR QUE O PREÇO MUDA NO IFOOD" : "POR QUE ISSO IMPORTA";
  const explanation = screen === "canais"
    ? "O hambúrguer custa R$ 9,71, mas precisa de preços diferentes no balcão e no iFood para preservar a margem da operação."
    : screen === "taxa"
      ? "Os R$ 29,90 no iFood consideram a taxa de 17%. O sistema calcula essa diferença para evitar que a comissão saia do seu lucro."
      : "Se o preço atual for R$ 21,90, uma correção de R$ 3 representa R$ 300 a mais em 100 vendas mensais.";

  return (
    <section className="interactive-demo section-space" id="demonstracao" data-reveal>
      <div className="container">
        <div className="section-heading centered">
          <span className="section-kicker">PRECIFICAÇÃO DE UM HAMBÚRGUER NA PRÁTICA</span>
          <h2>Veja exatamente o que o sistema considera <em>antes de sugerir o preço.</em></h2>
          <p>
            O exemplo abaixo calcula um hambúrguer artesanal. O sistema reúne a ficha técnica,
            considera as taxas de cada canal e mostra o impacto financeiro do ajuste.
          </p>
        </div>

        <div className="demo-step-tabs" role="tablist" aria-label="Etapas da precificação do hambúrguer">
          <button
            type="button"
            role="tab"
            aria-selected={isChannels}
            className={isChannels ? "active" : ""}
            onClick={() => setScreen("canais")}
          >
            <span>1</span> Preço por canal
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={isFee}
            className={isFee ? "active" : ""}
            onClick={() => setScreen("taxa")}
          >
            <span>2</span> Taxa do iFood
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={screen === "impacto"}
            className={screen === "impacto" ? "active" : ""}
            onClick={() => setScreen("impacto")}
          >
            <span>3</span> Impacto no lucro
          </button>
        </div>

        <div className="real-screen-shell" key={screen}>
          <div className="real-screen-topbar">
            <div><i /><i /><i /></div>
            <span>Demonstração do Precifica Mix</span>
            <b>{label}</b>
          </div>
          <div className="burger-demo-screen">
            <div className="burger-demo-heading">
              <div><span>FICHA TÉCNICA</span><strong>Hambúrguer artesanal 160 g</strong></div>
              <small>CUSTO REAL CALCULADO</small>
            </div>

            {screen === "canais" && (
              <div className="burger-demo-grid">
                <div className="burger-cost-card">
                  <div className="burger-card-title"><b>1</b><span><small>COMPOSIÇÃO DO PRODUTO</small><strong>Ingredientes e embalagem</strong></span></div>
                  <div className="burger-cost-lines">
                    {burgerCostLines.map(([name, quantity, cost]) => (
                      <div key={name}><span>{name}<small>{quantity}</small></span><b>{cost}</b></div>
                    ))}
                  </div>
                  <div className="burger-cost-total"><span>CUSTO TOTAL DA FICHA</span><strong>R$ 9,71</strong></div>
                </div>
                <div className="burger-channel-card">
                  <div className="burger-card-title"><b>2</b><span><small>RESULTADO POR CANAL</small><strong>Preço recomendado</strong></span></div>
                  <article><small>BALCÃO E RETIRADA</small><strong>R$ 24,90</strong><div><span>CMV</span><b>39%</b></div></article>
                  <article className="ifood-demo-result"><small>IFOOD E DELIVERY APP</small><strong>R$ 29,90</strong><div><span>Taxa considerada</span><b>17%</b></div></article>
                </div>
              </div>
            )}

            {screen === "taxa" && (
              <div className="fee-demo-grid">
                <div className="fee-parameters">
                  <span>PARÂMETROS DO IFOOD</span>
                  <div><small>Custo da ficha</small><strong>R$ 9,71</strong></div>
                  <div><small>Margem desejada</small><strong>35%</strong></div>
                  <div className="fee-highlight"><small>Taxas e comissões</small><strong>17%</strong></div>
                  <div><small>Embalagem extra</small><strong>R$ 0,00</strong></div>
                </div>
                <div className="fee-result-card">
                  <span>PREÇO POR CANAL</span>
                  <div><small>Balcão</small><strong>R$ 24,90</strong></div>
                  <b>+ R$ 5,00</b>
                  <div className="fee-recommended"><small>iFood</small><strong>R$ 29,90</strong></div>
                  <p>Diferença calculada para compensar a taxa do canal.</p>
                </div>
              </div>
            )}

            {screen === "impacto" && (
              <div className="impact-demo-grid">
                <div className="impact-input-card">
                  <span>COMPARADOR DE PREÇO</span>
                  <div><small>Preço praticado atualmente</small><strong>R$ 21,90</strong></div>
                  <div><small>Vendas mensais do produto</small><strong>100</strong></div>
                  <p>O sistema compara o preço atual com o valor recomendado.</p>
                </div>
                <div className="impact-result-card">
                  <span>IMPACTO FINANCEIRO</span>
                  <div className="impact-price-change"><small>Atual</small><strong>R$ 21,90</strong><b>→</b><small>Recomendado</small><strong>R$ 24,90</strong></div>
                  <div className="impact-values"><article><small>ACRÉSCIMO MENSAL</small><strong>R$ 300</strong></article><article><small>IMPACTO ANUAL</small><strong>R$ 3.600</strong></article></div>
                  <p>Simulação baseada em uma diferença de R$ 3 por venda.</p>
                </div>
              </div>
            )}
          </div>
          <div className="screen-explanation">
            <span>{eyebrow}</span>
            <p>{explanation}</p>
          </div>
        </div>

        <div className="proof-metrics" aria-label="Resultados da precificação demonstrada">
          <div><span>CUSTO DA FICHA</span><strong>R$ 9,71</strong></div>
          <div><span>PREÇO NO BALCÃO</span><strong>R$ 24,90</strong></div>
          <div><span>PREÇO NO IFOOD</span><strong>R$ 29,90</strong></div>
          <div><span>DIFERENÇA PROTEGIDA</span><strong>+ R$ 5,00</strong></div>
        </div>

        <div className="ingredient-proof">
          <div className="ingredient-proof-copy">
            <span className="section-kicker">NADA FICA FORA DA CONTA</span>
            <h3>Todos os insumos entram no custo do hambúrguer.</h3>
            <p>
              Ingredientes, complementos e embalagens são calculados pela quantidade realmente usada.
              Isso inclui os itens baratos que normalmente são esquecidos.
            </p>
          </div>
          <div className="ingredient-chips">
            {burgerIngredients.map((ingredient) => (
              <span key={ingredient}><b>✓</b>{ingredient}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function LossCalculator() {
  const [sales, setSales] = useState(20);
  const [loss, setLoss] = useState(1.5);
  const monthlyLoss = useMemo(() => sales * loss * 30, [sales, loss]);

  return (
    <section className="loss-section section-space" data-reveal>
      <div className="container loss-grid">
        <div className="loss-copy">
          <span className="section-kicker">O PREÇO DO ERRO REPETIDO</span>
          <h2>Um pequeno erro pode custar mais que a ferramenta inteira.</h2>
          <p>
            Ajuste os valores abaixo e veja quanto uma diferença aparentemente pequena representa
            quando se repete todos os dias.
          </p>
          <div className="loss-controls">
            <label>
              <span>Vendas por dia</span>
              <strong>{sales}</strong>
              <input
                aria-label="Vendas por dia"
                type="range"
                min="5"
                max="100"
                step="5"
                value={sales}
                onChange={(event) => setSales(Number(event.target.value))}
              />
            </label>
            <label>
              <span>Erro em cada preço</span>
              <strong>{money.format(loss)}</strong>
              <input
                aria-label="Erro em cada preço"
                type="range"
                min="0.5"
                max="10"
                step="0.5"
                value={loss}
                onChange={(event) => setLoss(Number(event.target.value))}
              />
            </label>
          </div>
        </div>
        <div className="loss-result" aria-live="polite">
          <span>PERDA ESTIMADA EM 30 DIAS</span>
          <strong>{money.format(monthlyLoss)}</strong>
          <p>
            Isso equivale a <b>{Math.max(1, Math.round(monthlyLoss / 27))} vezes</b> o valor desta
            oferta do Precifica Mix.
          </p>
          <a href="#oferta">QUERO PARAR DE PRECIFICAR NO ESCURO <span>→</span></a>
          <small>Simulação educativa. O resultado real depende da sua operação.</small>
        </div>
      </div>
    </section>
  );
}
