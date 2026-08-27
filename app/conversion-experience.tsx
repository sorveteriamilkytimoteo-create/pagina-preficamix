"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type DemoScreen = "canais" | "taxa" | "impacto";

const acaiIngredients = [
  "Creme de açaí",
  "Leite em pó",
  "Creme de Ovomaltine",
  "Banana",
  "Morango",
  "Copo e tampa",
  "Colher e guardanapo",
  "Sacola",
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
  const screenContent = {
    canais: {
      src: "/tela-precificacao-acai-canais.png",
      alt: "Tela real do Precifica Mix mostrando custo da ficha e preços do Açaí 700 ml para balcão e iFood",
      width: 1365,
      height: 692,
      label: "Balcão + iFood",
      eyebrow: "O QUE ESTA TELA MOSTRA",
      explanation: "O mesmo produto custa R$ 16,17, mas precisa de R$ 30,99 no balcão e R$ 39,99 no iFood para proteger a margem das taxas.",
    },
    taxa: {
      src: "/tela-precificacao-acai-taxa-ifood.png",
      alt: "Tela real do Precifica Mix mostrando a taxa de 17,19 por cento do iFood e o preço recomendado para preservar a margem",
      width: 1129,
      height: 567,
      label: "Taxas do iFood",
      eyebrow: "POR QUE O PREÇO MUDA NO IFOOD",
      explanation: "Os R$ 39,99 não são um aumento no achismo: o sistema considera 17,19% de taxas e comissões para manter a mesma margem líquida de 40% do balcão.",
    },
    impacto: {
      src: "/tela-precificacao-acai-impacto.png",
      alt: "Tela real do Precifica Mix mostrando comparação entre preço atual, preço recomendado e impacto financeiro",
      width: 1365,
      height: 707,
      label: "Impacto no lucro",
      eyebrow: "POR QUE ISSO IMPORTA",
      explanation: "Ao comparar R$ 25,99 com o preço recomendado de R$ 30,99, o sistema mostra um potencial de R$ 465 a mais por mês em 100 vendas.",
    },
  }[screen];

  return (
    <section className="interactive-demo section-space" id="demonstracao" data-reveal>
      <div className="container">
        <div className="section-heading centered">
          <span className="section-kicker">PRECIFICAÇÃO REAL DE UM AÇAÍ</span>
          <h2>Veja exatamente o que o sistema considera <em>antes de sugerir o preço.</em></h2>
          <p>
            Esta é uma tela real do Precifica Mix calculando o Açaí 700 ml. O sistema reúne a ficha
            técnica, as taxas de cada canal e mostra o impacto financeiro do ajuste.
          </p>
        </div>

        <div className="demo-step-tabs" role="tablist" aria-label="Etapas da precificação do açaí">
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
            <span>Tela real do Precifica Mix</span>
            <b>{screenContent.label}</b>
          </div>
          <Image
            src={screenContent.src}
            alt={screenContent.alt}
            width={screenContent.width}
            height={screenContent.height}
            sizes="(max-width: 900px) 100vw, 1120px"
            priority
            unoptimized
          />
          <div className="screen-explanation">
            <span>{screenContent.eyebrow}</span>
            <p>{screenContent.explanation}</p>
          </div>
        </div>

        <div className="proof-metrics" aria-label="Resultados da precificação demonstrada">
          <div><span>CUSTO DA FICHA</span><strong>R$ 16,17</strong></div>
          <div><span>PREÇO NO BALCÃO</span><strong>R$ 30,99</strong></div>
          <div><span>PREÇO NO IFOOD</span><strong>R$ 39,99</strong></div>
          <div><span>DIFERENÇA PROTEGIDA</span><strong>+ R$ 9,00</strong></div>
        </div>

        <div className="ingredient-proof">
          <div className="ingredient-proof-copy">
            <span className="section-kicker">NADA FICA FORA DA CONTA</span>
            <h3>Todos os insumos da ficha entram no custo do copo.</h3>
            <p>
              Ingredientes, complementos e embalagens são calculados pela quantidade realmente usada.
              Isso inclui os itens baratos que normalmente são esquecidos.
            </p>
          </div>
          <div className="ingredient-chips">
            {acaiIngredients.map((ingredient) => (
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
