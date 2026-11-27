import Image from "next/image";
import { OfferPlans } from "./offer-plans";
import { RecentSaleNotification } from "./recent-sale-notification";
import { DirectWhatsAppButton } from "./direct-whatsapp-button";
import {
  InteractivePricingDemo,
  LossCalculator,
  RevealController,
} from "./conversion-experience";

const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_HOTMART_CHECKOUT_URL ||
  "https://pay.hotmart.com/D106845746F?off=dbag2uwj&checkoutMode=10";

const COMPLETE_CHECKOUT_URL = "https://pay.hotmart.com/D106845746F?off=vmyz2iyc&checkoutMode=10";

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Precifica Mix",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Ferramenta de precificação, fichas técnicas e controle de estoque para hamburguerias.",
  offers: {
    "@type": "Offer",
    price: "37.00",
    priceCurrency: "BRL",
    url: CHECKOUT_URL,
  },
};

function Brand() {
  return (
    <a className="brand" href="#topo" aria-label="Precifica Mix, início">
      <span className="brand-mark" aria-hidden="true">P</span>
      <span className="brand-copy">
        <strong>Precifica<span>Mix</span></strong>
        <small>FOOD SERVICE</small>
      </span>
    </a>
  );
}

function CheckIcon() {
  return <span className="check-icon" aria-hidden="true">✓</span>;
}

function ProductMockup() {
  const ingredients = [
    ["Pão brioche", "1 un", "R$ 1,42"],
    ["Carne artesanal", "160 g", "R$ 4,96"],
    ["Queijo", "2 fatias", "R$ 1,20"],
    ["Molho da casa", "30 g", "R$ 0,98"],
    ["Embalagem", "1 un", "R$ 1,15"],
  ];

  return (
    <div className="product-stage" aria-label="Ficha técnica e precificação de um hambúrguer artesanal no Precifica Mix">
      <p className="product-demo-label">Veja o sistema calculando um hambúrguer artesanal na prática.</p>
      <div className="glow glow-one" />
      <div className="glow glow-two" />
      <div className="browser-shell">
        <div className="browser-bar">
          <span /><span /><span />
          <div className="browser-address">app.precificamix.com.br</div>
        </div>
        <div className="app-shell">
          <aside className="app-sidebar">
            <div className="mini-brand"><b>P</b><span>Precifica<span>Mix</span></span></div>
            {['Visão Geral', 'Insumos', 'Produtos', 'Precificação', 'Estoque'].map((item, index) => (
              <div className={`menu-item ${index === 3 ? 'active' : ''}`} key={item}>
                <i aria-hidden="true" />{item}
              </div>
            ))}
          </aside>
          <div className="app-content">
            <div className="app-heading">
              <div><small>FICHA TÉCNICA</small><strong>Hambúrguer artesanal 160 g</strong></div>
              <span>CUSTO REAL CALCULADO</span>
            </div>

            <div className="burger-pricing-grid">
              <div className="ingredient-panel">
                <div className="panel-title"><span>1</span><div><small>COMPOSIÇÃO DO PRODUTO</small><strong>Ingredientes e embalagem</strong></div></div>
                <div className="ingredient-list">
                  {ingredients.map(([name, qty, price]) => (
                    <div key={name}><span>{name}<small style={{display:'block', opacity:.6, fontSize:'9px'}}>{qty}</small></span><b>{price}</b></div>
                  ))}
                </div>
              </div>

              <div className="channel-panel">
                <div className="panel-title"><span>2</span><div><small>RESULTADOS POR CANAL</small><strong>Preço recomendado</strong></div></div>
                <div className="channel-result counter-result">
                  <div><small>BALCÃO · RETIRADA</small><strong>R$ 24,90</strong></div>
                  <span><small>MARGEM DESEJADA</small><b>35%</b></span>
                  <span><small>CMV</small><b>39%</b></span>
                </div>
                <div className="channel-result ifood-channel">
                  <div><small>IFOOD · DELIVERY APP</small><strong>R$ 29,90</strong></div>
                  <span><small>TAXA CONSIDERADA</small><b>17,19%</b></span>
                  <span><small>CMV</small><b>32,5%</b></span>
                </div>
              </div>
            </div>

            <div className="pricing-summary">
              <div><small>CUSTO DA RECEITA</small><strong>R$ 9,71</strong></div>
              <span>→</span>
              <div><small>BALCÃO</small><strong>R$ 24,90</strong></div>
              <span>→</span>
              <div className="recommended-price"><small>IFOOD / DELIVERY APP</small><strong>R$ 29,90</strong></div>
            </div>
            <div className="automatic-note"><span>✓</span> + R$ 5,00 no iFood para cobrir a taxa de 17,19% e proteger sua margem.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const painPoints = [
  {
    number: "01",
    title: "Copiar o preço do concorrente",
    text: "Ele tem outros custos, fornecedores e gramaturas. O preço dele pode corroer o seu lucro.",
  },
  {
    number: "02",
    title: "Multiplicar o custo por dois",
    text: "Ignora embalagem, molhos, perdas e a taxa de 17,19% do iFood que saem do seu caixa.",
  },
  {
    number: "03",
    title: "Confundir faturamento com lucro",
    text: "Vender muito com margem errada faz a cozinha rodar e o lucro sumir no fim do mês.",
  },
];

const features = [
  {
    icon: "⌁",
    title: "Custo exato por porção",
    text: "Saiba quanto cada grama, ml ou unidade custa de verdade na receita.",
  },
  {
    icon: "▤",
    title: "Fichas técnicas claras",
    text: "Reúna ingredientes, rendimento e embalagens sem depender de planilhas.",
  },
  {
    icon: "$",
    title: "Preço por canal de venda",
    text: "Calcule balcão, delivery próprio e apps como iFood e 99Food com margem real.",
  },
  {
    icon: "▣",
    title: "Controle de estoque",
    text: "Acompanhe entradas, saídas e custos dos insumos para reduzir perdas.",
  },
  {
    icon: "↗",
    title: "Atualização de custos",
    text: "Subiu o preço do insumo? Recalcule o impacto nos produtos em poucos cliques.",
  },
  {
    icon: "✓",
    title: "Cardápio digital no Completo",
    text: "No plano Completo, ganhe 30 dias de Gestão Mix com cardápio digital para otimizar vendas.",
  },
];

const audiences = [
  "Hambúrguer artesanal",
  "Smash burger e blends",
  "Combos e promoções",
  "Adicionais e molhos",
  "Balcão e retirada",
  "iFood e delivery próprio",
];

const salesChannels = [
  {
    icon: "↗",
    title: "iFood e delivery (17,19%)",
    text: "Embuta a taxa de 17,19% e os custos do canal para não trabalhar sem lucro no app.",
  },
  {
    icon: "%",
    title: "Máquinas de cartão",
    text: "Considere taxas de débito, crédito e parcelamento direto na margem do produto.",
  },
  {
    icon: "⌁",
    title: "99Food e marketplaces",
    text: "Compare o preço ideal de cada canal sem misturar margens diferentes.",
  },
  {
    icon: "▣",
    title: "Balcão e cardápio digital",
    text: "Padronize preços no balcão e leve sua operação com o Gestão Mix no plano Completo.",
  },
];

const faqs = [
  {
    question: "Preciso entender de finanças ou planilhas?",
    answer: "Não. Você informa o que paga nos insumos e embalagens, e o Precifica Mix faz os cálculos automaticamente.",
  },
  {
    question: "O que o plano Completo (R$ 67) ganha a mais que o Essencial (R$ 37)?",
    answer: "Além do app Precifica Mix, o Completo inclui um PDF com 30 fichas técnicas de hamburgueria e 30 dias de acesso ao Gestão Mix com cardápio digital e recursos para otimizar vendas.",
  },
  {
    question: "Os 30 dias de Gestão Mix viram cobrança automática?",
    answer: "Não. O pagamento do Precifica Mix é único e os 30 dias de Gestão Mix não têm cobrança automática; a continuidade após o período é opcional.",
  },
  {
    question: "Já vem com insumos cadastrados e taxa do iFood?",
    answer: "Sim. Você conta com 50 modelos de insumos para agilizar o início e pode configurar a taxa de 17,19% do iFood, outros canais e cartão.",
  },
  {
    question: "Funciona no celular e tem garantia?",
    answer: "Sim. Funciona no navegador de celular, tablet e computador, com acesso imediato após a compra e garantia de 7 dias pela Hotmart.",
  },
];

function MiniPricingScreen() {
  return (
    <div className="pricing-screen" aria-label="Exemplo de cálculo de preço no Precifica Mix">
      <div className="screen-title"><span>$</span><div><small>PRECIFICAÇÃO INTELIGENTE</small><strong>Hambúrguer artesanal 160 g</strong></div></div>
      <div className="ingredient-lines">
        <div><span>Pão brioche</span><b>R$ 1,42</b></div>
        <div><span>Carne artesanal 160 g</span><b>R$ 4,96</b></div>
        <div><span>Queijo e molho</span><b>R$ 2,18</b></div>
        <div><span>Embalagem</span><b>R$ 1,15</b></div>
      </div>
      <div className="pricing-total">
        <div><small>CUSTO TOTAL</small><strong>R$ 9,71</strong></div>
        <span>+</span>
        <div><small>MARGEM DESEJADA</small><strong>35%</strong></div>
        <span>=</span>
        <div className="recommended"><small>PREÇO NO BALCÃO</small><strong>R$ 24,90</strong></div>
      </div>
      <div className="healthy-message"><span>✓</span> Margem saudável calculada com base no custo real da receita.</div>
    </div>
  );
}

function HeroSocialProof() {
  const avatars = [
    { initials: "MM", bg: "#047857" },
    { initials: "PS", bg: "#15803d" },
    { initials: "MA", bg: "#0f766e" },
    { initials: "LC", bg: "#b45309" },
    { initials: "RF", bg: "#065f46" },
  ];
  return (
    <div className="pm-hero-proof" aria-label="Avaliação de donos de hamburguerias e lanchonetes">
      <div className="pm-hero-avatars" aria-hidden="true">
        {avatars.map((a) => (
          <span key={a.initials} style={{ backgroundColor: a.bg }}>
            {a.initials}
          </span>
        ))}
      </div>
      <div className="pm-hero-proof-copy">
        <div className="pm-hero-stars">
          <span>★★★★★</span>
          <strong>4,9/5</strong>
        </div>
        <p>
          <strong>+5.000 hamburguerias e lanchonetes</strong> já precificam com o Precifica Mix
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="topo">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
        </div>
      </header>

      <section className="hero" data-reveal>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span>BF</span> BLACK FRIDAY · HAMBURGUERIAS E LANCHONETES</div>
            <h1>Faturamento não é lucro. Descubra o <em>preço certo</em> dos seus lanches.</h1>
            <p className="hero-lead">
              Calcule custo real, margem e preço ideal para balcão e iFood em minutos — e no plano Completo leve <strong>30 dias de Gestão Mix com cardápio digital</strong>.
            </p>
          </div>
          <ProductMockup />
          <div className="hero-action">
            <div className="hero-benefits">
              <span><CheckIcon /> Custo por lanche</span>
              <span><CheckIcon /> Taxa iFood 17,19%</span>
              <span><CheckIcon /> Cardápio digital no Completo</span>
            </div>
            <a className="primary-cta" href="#oferta">
              QUERO APROVEITAR A BLACK FRIDAY <span>→</span>
            </a>
            <HeroSocialProof />
            <p className="microcopy"><span aria-hidden="true">🔒</span> Pagamento único · Compra segura pela Hotmart · Garantia de 7 dias</p>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Benefícios de compra">
        <div className="container trust-grid">
          <div><b>✓</b><span><strong>Pagamento único</strong><small>Sem mensalidade ou fidelidade</small></span></div>
          <div><b className="client-count">+200</b><span><strong>Clientes ativos</strong><small>Operações ajustando margens</small></span></div>
          <div><b>✓</b><span><strong>Garantia de 7 dias</strong><small>Teste sem risco na Hotmart</small></span></div>
          <div><b>✓</b><span><strong>Gestão Mix + Cardápio</strong><small>30 dias grátis no plano Completo</small></span></div>
        </div>
      </section>

      <section className="credibility-bar" aria-label="Por que confiar no Precifica Mix">
        <div className="container credibility-grid">
          <div><strong>Operação real</strong><span>Criado por quem vive food service</span></div>
          <div><strong>Sem planilha complexa</strong><span>Sistema guiado no navegador</span></div>
          <div><strong>Foco em lucro real</strong><span>Balcão, delivery e cardápio digital</span></div>
        </div>
      </section>

      <section className="pain-section section-space">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">O PREJUÍZO QUE NÃO APARECE</span>
            <h2>Três erros que fazem seus pedidos <em>trabalharem contra o lucro.</em></h2>
            <p>Quando o preço ignora embalagem, perdas ou taxas, o movimento alto não vira dinheiro no caixa.</p>
          </div>
          <div className="pain-grid">
            {painPoints.map((item) => (
              <article className="pain-card" key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="belief-card">
            <div className="belief-icon">!</div>
            <div>
              <strong>Você não precisa ser expert em finanças para precificar certo.</strong>
              <p>O Precifica Mix guia o cálculo passo a passo: você coloca insumos e margens e vê o preço ideal por canal.</p>
            </div>
          </div>
        </div>
      </section>

      <InteractivePricingDemo />

      <LossCalculator />

      <section className="solution-section section-space">
        <div className="container solution-grid">
          <div className="solution-copy">
            <span className="section-kicker">DA RECEITA AO PREÇO IDEAL</span>
            <h2>Chega de decidir no escuro.</h2>
            <p>Monte a ficha técnica uma vez e enxergue custo, margem e preço recomendado antes de vender.</p>
            <ul className="check-list">
              <li><CheckIcon /><span><strong>Custos atualizados rápido</strong><small>Ajuste o preço do insumo e veja o impacto nos lanches.</small></span></li>
              <li><CheckIcon /><span><strong>Margem clara por canal</strong><small>Evite perder lucro com taxas e embalagens esquecidas.</small></span></li>
              <li><CheckIcon /><span><strong>Mais vendas com o Gestão Mix</strong><small>No plano Completo, leve 30 dias com cardápio digital para otimizar pedidos.</small></span></li>
            </ul>
            <a className="text-cta" href="#oferta">VER OFERTA DE BLACK FRIDAY <span>→</span></a>
          </div>
          <MiniPricingScreen />
        </div>
      </section>

      <section className="features-section section-space">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">TUDO O QUE VOCÊ PRECISA</span>
            <h2>Controle total do cardápio em <em>poucos minutos.</em></h2>
          </div>
          <div className="features-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <span className="feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="channels-section section-space">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">LUCRO DIFERENTE EM CADA CANAL</span>
            <h2>O preço do balcão pode dar <em>prejuízo no delivery.</em></h2>
            <p>Configure taxas de iFood, maquininhas e marketplaces para proteger sua margem em cada pedido.</p>
          </div>
          <div className="channels-grid">
            {salesChannels.map((channel) => (
              <article className="channel-card" key={channel.title}>
                <span>{channel.icon}</span>
                <div>
                  <h3>{channel.title}</h3>
                  <p>{channel.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="channel-callout">
            <strong>Taxa de 17,19% e custos de canal na conta.</strong>
            <span>Veja quanto realmente sobra no caixa antes de publicar seu preço.</span>
          </div>
        </div>
      </section>

      <section className="library-section section-space">
        <div className="container library-grid">
          <div className="library-visual">
            <div className="library-window">
              <div className="library-header"><div><span>▱</span><strong>Biblioteca de sugestões</strong></div><small>50 modelos disponíveis</small></div>
              <div className="library-search">Buscar insumo, embalagem ou ingrediente...</div>
              <div className="library-tags"><span>Ingredientes</span><span>Embalagens</span><span>Complementos</span></div>
              <div className="library-items">
                {['Pão brioche', 'Carne bovina', 'Queijo cheddar', 'Bacon', 'Molho especial', 'Embalagem burger'].map((item, index) => (
                  <div key={item}><i>{['PB','CB','QC','BC','ME','EB'][index]}</i><span><strong>{item}</strong><small>Modelo pronto para personalizar</small></span><b>+</b></div>
                ))}
              </div>
            </div>
          </div>
          <div className="library-copy">
            <span className="section-kicker">COMECE SEM PERDER HORAS</span>
            <h2>50 insumos prontos para acelerar seu início.</h2>
            <p>Importe modelos comuns de hamburguerias e adapte apenas os valores da sua região.</p>
            <div className="speed-stat"><strong>50</strong><span>insumos pré-cadastrados para montar suas fichas mais rápido</span></div>
            <p className="reassurance"><CheckIcon /> Edite, duplique ou crie seus próprios itens quando quiser.</p>
          </div>
        </div>
      </section>

      <section className="steps-section section-space">
        <div className="container">
          <div className="section-heading centered light-heading">
            <span className="section-kicker">SIMPLES DE VERDADE</span>
            <h2>Em três passos você enxerga<br />a margem real do seu lanche.</h2>
          </div>
          <div className="steps-grid">
            <article><span>1</span><div><small>PASSO 01</small><h3>Cadastre os insumos</h3><p>Informe o valor pago, quantidade e unidade do ingrediente ou embalagem.</p></div></article>
            <article><span>2</span><div><small>PASSO 02</small><h3>Monte a ficha técnica</h3><p>Defina gramaturas, rendimento e custos extras do produto.</p></div></article>
            <article><span>3</span><div><small>PASSO 03</small><h3>Defina o preço ideal</h3><p>Veja o preço recomendado para balcão e delivery com margem protegida.</p></div></article>
          </div>
        </div>
      </section>

      <section className="comparison-section section-space">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">A DIFERENÇA NA PRÁTICA</span>
            <h2>Achismo ou clareza na <em>hora de vender?</em></h2>
          </div>
          <div className="comparison-grid">
            <article className="without-card">
              <div className="comparison-title"><span>×</span><div><small>SEM O PRECIFICA MIX</small><strong>Decisão no escuro</strong></div></div>
              <ul>
                <li><b>×</b> Copia preço da concorrência</li>
                <li><b>×</b> Não sabe o custo real da porção</li>
                <li><b>×</b> Descobre o prejuízo tarde</li>
                <li><b>×</b> Trava em planilhas confusas</li>
                <li><b>×</b> Perde margem nas taxas de entrega</li>
              </ul>
            </article>
            <article className="with-card">
              <div className="comparison-title"><span>✓</span><div><small>COM O PRECIFICA MIX</small><strong>Decisão com margem</strong></div></div>
              <ul>
                <li><b>✓</b> Custo exato por receita e porção</li>
                <li><b>✓</b> Margem definida por canal de venda</li>
                <li><b>✓</b> Corrige preços antes de perder</li>
                <li><b>✓</b> Fichas técnicas e estoque organizados</li>
                <li><b>✓</b> No Completo: Gestão Mix + cardápio digital</li>
              </ul>
            </article>
          </div>
          <a className="secondary-cta" href="#oferta">ESCOLHER MEU PLANO DE BLACK FRIDAY <span>→</span></a>
        </div>
      </section>

      <section id="prova-real" className="founders-section section-space" aria-labelledby="founders-title" data-reveal>
        <div className="container">
          <div className="founders-grid">
            <figure className="founders-photo-card">
              <Image
                className="founders-photo"
                src="/fundadores-precifica-mix.webp"
                alt="Os dois irmãos criadores do Precifica Mix em frente à Sorvetes Milky, onde a solução nasceu"
                width={1175}
                height={1339}
                sizes="(max-width: 980px) 100vw, 52vw"
              />
              <figcaption>
                <strong>Luís e Lucas · Criadores do Precifica Mix</strong>
                <span>8+ anos na operação de food service + tecnologia simples.</span>
              </figcaption>
            </figure>

            <div className="founders-copy">
              <span className="section-kicker">QUEM ESTÁ POR TRÁS</span>
              <h2 id="founders-title">Feito por quem vive o balcão <em>todos os dias.</em></h2>
              <p>
                Criamos o Precifica Mix a partir da rotina real de alimentação: vender muito, trabalhar duro e precisar enxergar o lucro exato de cada produto sem contas complexas.
              </p>
              <p>
                Unimos experiência prática de operação com tecnologia simples para você precificar rápido e focar no que gera resultado.
              </p>
              <div className="founders-signature">
                <span aria-hidden="true">✓</span>
                <p><strong>Operação de verdade.</strong> Ferramenta pensada para a rotina de hamburguerias e lanchonetes.</p>
              </div>
            </div>
          </div>

          <div className="testimonials-wrap" aria-labelledby="testimonials-title">
            <div className="testimonials-heading">
              <span className="section-kicker">RESULTADOS DE CLIENTES</span>
              <h3 id="testimonials-title">Quem usa o Precifica Mix no dia a dia.</h3>
              <p>Relatos de quem ajustou custos, taxas e margens para parar de trabalhar no prejuízo.</p>
            </div>
            <div className="testimonials-grid">
              <article className="testimonial-card">
                <div className="testimonial-copy">
                  <span>SORVETERIA E DELIVERY</span>
                  <blockquote>“Eu não considerava a taxa de 17,19% e outros custos, e estava tendo prejuízo sem saber!”</blockquote>
                  <p>Maria Martins <small>· Sorveteria Sabor Real</small></p>
                </div>
                <a href="/depoimento-maria-precifica-mix.png" target="_blank" rel="noopener noreferrer" aria-label="Abrir o depoimento completo de Maria Martins em nova aba">
                  <Image src="/depoimento-maria-precifica-mix.png" alt="Depoimento completo de Maria Martins sobre o Precifica Mix" width={1254} height={1254} sizes="(max-width: 760px) 90vw, (max-width: 1100px) 44vw, 30vw" />
                  <span>Ver depoimento completo ↗</span>
                </a>
              </article>
              <article className="testimonial-card">
                <div className="testimonial-copy">
                  <span>HAMBURGUERIA</span>
                  <blockquote>“Descobri que estava tendo prejuízo em 3 produtos do meu cardápio.”</blockquote>
                  <p>Patricia S. <small>· Vila Real Hamburgueria</small></p>
                </div>
                <a href="/depoimento-patricia-precifica-mix.jpg" target="_blank" rel="noopener noreferrer" aria-label="Abrir o depoimento completo de Patricia S. em nova aba">
                  <Image src="/depoimento-patricia-precifica-mix.jpg" alt="Depoimento completo de Patricia S. sobre o Precifica Mix" width={1134} height={944} sizes="(max-width: 760px) 90vw, (max-width: 1100px) 44vw, 30vw" />
                  <span>Ver depoimento completo ↗</span>
                </a>
              </article>
              <article className="testimonial-card">
                <div className="testimonial-copy">
                  <span>LANCHONETE</span>
                  <blockquote>“O aplicativo é excelente, muito prático.”</blockquote>
                  <p>Marcos Assis <small>· Lanchonete Ponto do Sabor</small></p>
                </div>
                <a href="/depoimento-marcos-precifica-mix.png" target="_blank" rel="noopener noreferrer" aria-label="Abrir o depoimento completo de Marcos Assis em nova aba">
                  <Image src="/depoimento-marcos-precifica-mix.png" alt="Depoimento completo de Marcos Assis sobre o Precifica Mix" width={1254} height={1254} sizes="(max-width: 760px) 90vw, (max-width: 1100px) 44vw, 30vw" />
                  <span>Ver depoimento completo ↗</span>
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="audience-section section-space">
        <div className="container audience-grid">
          <div>
            <span className="section-kicker">FEITO PARA HAMBURGUERIAS</span>
            <h2>Do smash ao artesanal: cada item na conta.</h2>
            <p>Calcule lanches, combos, adicionais e embalagens com clareza para balcão, retirada e delivery.</p>
          </div>
          <div className="audience-list">
            {audiences.map((audience) => <div key={audience}><CheckIcon />{audience}</div>)}
          </div>
        </div>
      </section>

      <section className="guidance-section section-space" aria-labelledby="guidance-title" data-reveal>
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">COMEÇO GUIADO</span>
            <h2 id="guidance-title">Simples de usar e com <em>suporte quando precisar.</em></h2>
            <p>Aulas curtas, orientação inicial e garantia de 7 dias para testar na sua operação.</p>
          </div>
          <div className="guidance-grid">
            <article>
              <span aria-hidden="true">▶</span>
              <h3>Videoaulas passo a passo</h3>
              <p>Aprenda a cadastrar insumos, montar fichas e ajustar margens sem enrolação.</p>
            </article>
            <article>
              <span aria-hidden="true">1</span>
              <h3>Orientação inicial</h3>
              <p>Passo a passo direto para configurar seus primeiros produtos com segurança.</p>
            </article>
            <article>
              <span aria-hidden="true">♥</span>
              <h3>Suporte humano</h3>
              <p>Atendimento direto para tirar dúvidas sobre o uso do sistema.</p>
            </article>
          </div>
          <div className="guarantee-banner">
            <strong>7</strong>
            <div>
              <span>GARANTIA INCONDICIONAL DE 7 DIAS</span>
              <h3>Teste o Precifica Mix sem risco.</h3>
              <p>Cadastre seus lanches, confira suas margens e, se não fizer sentido para o seu negócio, peça o reembolso dentro do prazo da garantia.</p>
            </div>
            <a href="#oferta">QUERO COMEÇAR SEM RISCO <span>→</span></a>
          </div>
        </div>
      </section>

      <section id="oferta" className="offer-section section-space">
        <div className="container offer-wrap">
          <div className="offer-copy">
            <Brand />
            <span className="section-kicker">BLACK FRIDAY · PAGAMENTO ÚNICO</span>
            <h2>Escolha seu plano e otimize suas vendas.</h2>
            <p>Comece com o Essencial por R$ 37 ou leve o Completo por R$ 67 com 30 fichas técnicas + 30 dias de Gestão Mix com cardápio digital.</p>
            <ul className="offer-benefits">
              <li><CheckIcon /> Precificação por canal (17,19% iFood)</li>
              <li><CheckIcon /> Fichas técnicas e margem real</li>
              <li><CheckIcon /> 50 insumos prontos para importar</li>
              <li><CheckIcon /> Estoque, aulas e suporte</li>
              <li><CheckIcon /> +30 fichas técnicas (Plano Completo)</li>
              <li><CheckIcon /> Gestão Mix + cardápio digital (30 dias)</li>
              <li><CheckIcon /> Sem cobrança automática após 30 dias</li>
              <li><CheckIcon /> Garantia de 7 dias na Hotmart</li>
            </ul>
          </div>
          <div className="offer-card-column">
            <div className="mobile-offer-headline">
              <span>BLACK FRIDAY · PAGAMENTO ÚNICO</span>
              <h2>Dois planos para precificar e vender melhor.</h2>
              <p>No Completo (R$ 67), ganhe 30 fichas + 30 dias de Gestão Mix com cardápio digital.</p>
            </div>
            <OfferPlans essentialUrl={CHECKOUT_URL} completeUrl={COMPLETE_CHECKOUT_URL} />
          </div>
        </div>
      </section>

      <section id="duvidas" className="faq-section section-space" data-reveal>
        <div className="container faq-wrap">
          <div className="faq-heading">
            <span className="section-kicker">DÚVIDAS RÁPIDAS</span>
            <h2>Tudo claro antes de começar.</h2>
            <p>Respostas diretas sobre planos, cardápio digital e garantia.</p>
            <a href="https://wa.me/5531983238881?text=Ol%C3%A1%21%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20Precifica%20Mix." target="_blank" rel="noreferrer">FALAR NO WHATSAPP <span>→</span></a>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<span>+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-card">
          <div>
            <span className="section-kicker">BLACK FRIDAY · MARGEM E VENDAS SOB CONTROLE</span>
            <h2>Pare de perder lucro no preço do lanche.</h2>
            <p>Calcule certo no Precifica Mix e leve o Gestão Mix com cardápio digital no plano Completo para otimizar suas vendas.</p>
          </div>
          <a href="#oferta">VER PLANOS AGORA <span>→</span></a>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <Brand />
          <p>© 2026 Precifica Mix. Todos os direitos reservados.</p>
          <div><span>🔒 Ambiente seguro</span><a href="https://wa.me/5531983238881" target="_blank" rel="noreferrer">Suporte</a></div>
        </div>
      </footer>
      <RecentSaleNotification />
      <DirectWhatsAppButton />
      <RevealController />
    </main>
  );
}
