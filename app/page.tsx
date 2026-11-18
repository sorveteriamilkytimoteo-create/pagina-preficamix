import Image from "next/image";
import { OfferPlans } from "./offer-plans";
import { TrackedCheckoutLink } from "./tracking";
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
      <p className="product-demo-label">Veja abaixo como seria a precificação do seu produto na prática.</p>
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
                <div className="panel-title"><span>1</span><div><small>COMPOSIÇÃO DO PRODUTO</small><strong>Ingredientes, complementos e embalagens</strong></div></div>
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
                  <span><small>TAXA CONSIDERADA</small><b>17%</b></span>
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
            <div className="automatic-note"><span>✓</span> + R$ 5,00 no iFood para compensar taxas e comissões.</div>
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
    text: "Ele tem outros custos, fornecedores e porções. O preço que funciona para ele pode dar prejuízo para você.",
  },
  {
    number: "02",
    title: "Multiplicar o custo por dois",
    text: "Essa conta ignora embalagem, perdas, taxas, despesas e a margem que o seu negócio realmente precisa.",
  },
  {
    number: "03",
    title: "Achar que faturamento é lucro",
    text: "Dinheiro entrando não significa dinheiro sobrando. Sem ficha técnica, o prejuízo pode estar escondido no cardápio.",
  },
];

const features = [
  {
    icon: "⌁",
    title: "Custo exato por ingrediente",
    text: "Saiba quanto cada grama, ml ou unidade representa no custo final da receita.",
  },
  {
    icon: "▤",
    title: "Fichas técnicas padronizadas",
    text: "Registre ingredientes, rendimento, porções e embalagens em um único lugar.",
  },
  {
    icon: "$",
    title: "Preço ideal de venda",
    text: "Defina sua margem e encontre um preço coerente para balcão, delivery e outros canais.",
  },
  {
    icon: "▣",
    title: "Estoque organizado",
    text: "Acompanhe entradas, saídas e o valor dos insumos para reduzir desperdícios.",
  },
  {
    icon: "↗",
    title: "Histórico de custos",
    text: "Veja alterações de preço e entenda quando seus produtos precisam ser recalculados.",
  },
  {
    icon: "✓",
    title: "Diagnóstico do cardápio",
    text: "Identifique produtos fora da margem e priorize o que precisa de correção primeiro.",
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
    title: "iFood e delivery",
    text: "Inclua a comissão percentual e as cobranças do canal para não absorver taxas sem perceber.",
  },
  {
    icon: "%",
    title: "Máquinas de cartão",
    text: "Considere débito, crédito e parcelamento para enxergar quanto realmente sobra em cada venda.",
  },
  {
    icon: "⌁",
    title: "99Food e marketplaces",
    text: "Configure as condições de cada plataforma e compare o preço necessário por canal.",
  },
  {
    icon: "▣",
    title: "Balcão e retirada",
    text: "Mantenha preços coerentes sem misturar custos de canais com operações diferentes.",
  },
];

const faqs = [
  {
    question: "Preciso entender de finanças ou precificação?",
    answer: "Não. O Precifica Mix foi criado para simplificar. Você informa os valores e quantidades da sua operação, e a ferramenta organiza os cálculos para mostrar custo, margem e preço recomendado.",
  },
  {
    question: "Qual a diferença entre Essencial e Completo?",
    answer: "O Essencial inclui o Precifica Mix. O Completo inclui o mesmo aplicativo, um PDF com 30 fichas técnicas de hamburgueria para adaptar no sistema e 30 dias de Gestão Mix. Não inclui planilha Excel.",
  },
  {
    question: "O pagamento é mensal?",
    answer: "O pagamento pelo Precifica Mix é único. No Completo, o acesso ao Gestão Mix é gratuito por 30 dias; depois disso, a continuidade é opcional e exige contratação separada.",
  },
  {
    question: "Os insumos já vêm cadastrados?",
    answer: "Você recebe uma biblioteca inicial com ingredientes e embalagens comuns em hamburguerias para acelerar a configuração. Depois, pode ajustar os preços e criar seus próprios itens.",
  },
  {
    question: "Funciona para todos os produtos da minha hamburgueria?",
    answer: "Sim. Você pode criar fichas para hambúrgueres, porções, molhos, adicionais, combos e outros produtos, usando os ingredientes, rendimentos e embalagens reais da sua operação.",
  },
  {
    question: "Consigo considerar taxas do iFood e da máquina de cartão?",
    answer: "Sim. Você pode configurar os custos dos canais de venda, como comissão do iFood, taxas de outros marketplaces e percentuais das máquinas de cartão, para analisar quanto cada venda realmente deixa no caixa.",
  },
  {
    question: "Consigo acessar pelo celular?",
    answer: "Sim. A ferramenta funciona pelo navegador e se adapta a celular, tablet e computador. Para cadastros maiores, o computador pode deixar o trabalho ainda mais confortável.",
  },
  {
    question: "Como recebo o acesso depois da compra?",
    answer: "Após a confirmação do pagamento, os dados de acesso e as orientações são enviados para o e-mail informado na Hotmart.",
  },
  {
    question: "Vou receber ajuda para começar?",
    answer: "Sim. Você recebe videoaulas com o passo a passo, acompanhamento inicial para organizar os primeiros cadastros e suporte humanizado para tirar dúvidas sobre o uso da ferramenta.",
  },
  {
    question: "Tenho garantia?",
    answer: "Sim. Você tem 7 dias para conhecer a ferramenta. Se ela não fizer sentido para o seu negócio, pode solicitar o reembolso dentro do prazo pela plataforma.",
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
      <div className="healthy-message"><span>✓</span> Este produto está dentro da margem desejada.</div>
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
            <div className="eyebrow"><span>!</span> PARA DONOS DE HAMBURGUERIAS E LANCHONETES</div>
            <h1>Faturamento não é lucro. Descubra o <em>preço certo</em> dos seus produtos.</h1>
            <p className="hero-lead">
              Calcule custos, margem e preço ideal para balcão, delivery e iFood de forma simples e prática, em menos de 5 minutos.
            </p>
          </div>
          <ProductMockup />
          <div className="hero-action">
            <div className="hero-benefits">
              <span><CheckIcon /> Custo por lanche</span>
              <span><CheckIcon /> Taxas por canal</span>
              <span><CheckIcon /> Margem e preço ideal</span>
            </div>
            <a className="primary-cta" href="#oferta">
              QUERO PRECIFICAR CERTO AGORA <span>→</span>
            </a>
            <p className="microcopy"><span aria-hidden="true">🔒</span> Acesso imediato · compra segura pela Hotmart · garantia de 7 dias</p>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Benefícios de compra">
        <div className="container trust-grid">
          <div><b>✓</b><span><strong>Pagamento único</strong><small>Sem mensalidade ou fidelidade</small></span></div>
          <div><b className="client-count">+200</b><span><strong>Mais de 200 clientes</strong><small>Utilizando e aumentando seus lucros</small></span></div>
          <div><b>✓</b><span><strong>Garantia de 7 dias</strong><small>Você testa sem correr risco</small></span></div>
          <div><b>✓</b><span><strong>Feito para hamburguerias</strong><small>Do ingrediente ao preço do lanche</small></span></div>
        </div>
      </section>

      <section className="credibility-bar" aria-label="Por que confiar no Precifica Mix">
        <div className="container credibility-grid">
          <div><strong>Operação real</strong><span>Criado por quem vive food service</span></div>
          <div><strong>Não é planilha</strong><span>Sistema guiado e fácil de usar</span></div>
          <div><strong>Preço por canal</strong><span>Balcão, delivery e aplicativos</span></div>
        </div>
      </section>

      <section className="pain-section section-space">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">O PREJUÍZO QUE NÃO APARECE</span>
            <h2>Três erros silenciosos podem fazer seus pedidos <em>trabalharem contra o lucro.</em></h2>
            <p>O prejuízo geralmente começa na forma como o preço é definido: copiando o concorrente, multiplicando o custo por dois ou confundindo faturamento com lucro.</p>
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
              <strong>Você não precisa ser bom com números para precificar certo.</strong>
              <p>O Precifica Mix transforma contas complicadas em um processo guiado. Se você conhece a sua receita, consegue organizar seus preços.</p>
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
            <p>Monte a ficha técnica uma vez e deixe o sistema transformar ingredientes, rendimentos e despesas em informação clara para você agir.</p>
            <ul className="check-list">
              <li><CheckIcon /><span><strong>Custos atualizados automaticamente</strong><small>Altere o preço de um insumo e veja o impacto nos produtos.</small></span></li>
              <li><CheckIcon /><span><strong>Margem visível antes de vender</strong><small>Saiba se o preço está saudável sem esperar fechar o mês.</small></span></li>
              <li><CheckIcon /><span><strong>Decisões com mais segurança</strong><small>Ajuste porção, fornecedor ou preço com base em números reais.</small></span></li>
            </ul>
            <a className="text-cta" href="#oferta">QUERO VER A OFERTA <span>→</span></a>
          </div>
          <MiniPricingScreen />
        </div>
      </section>

      <section className="features-section section-space">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">TUDO O QUE VOCÊ PRECISA PARA COMEÇAR</span>
            <h2>Um processo simples para colocar<br /><em>seu cardápio sob controle.</em></h2>
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
            <h2>O preço que funciona no balcão pode dar <em>prejuízo no delivery.</em></h2>
            <p>
              O Precifica Mix permite considerar as taxas dos canais de venda para você não confundir
              faturamento com o valor que realmente fica no caixa.
            </p>
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
            <strong>Veja o custo real da venda antes de definir o preço.</strong>
            <span>Taxas percentuais, cobranças fixas e condições de cada canal entram na sua análise.</span>
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
            <h2>Insumos pré-cadastrados para facilitar sua configuração.</h2>
            <p>Em vez de começar com uma tela vazia, você recebe modelos de ingredientes, molhos e embalagens comuns em hamburguerias e só precisa adaptar os preços para a sua realidade.</p>
            <div className="speed-stat"><strong>50</strong><span>insumos para importar e acelerar os primeiros cadastros</span></div>
            <p className="reassurance"><CheckIcon /> Você mantém liberdade total para editar e criar seus próprios itens.</p>
          </div>
        </div>
      </section>

      <section className="steps-section section-space">
        <div className="container">
          <div className="section-heading centered light-heading">
            <span className="section-kicker">SIMPLES DE VERDADE</span>
            <h2>Em três passos você começa<br />a enxergar seus números.</h2>
          </div>
          <div className="steps-grid">
            <article><span>1</span><div><small>PRIMEIRO PASSO</small><h3>Cadastre os insumos</h3><p>Informe o que compra, a quantidade da embalagem e o valor pago.</p></div></article>
            <article><span>2</span><div><small>SEGUNDO PASSO</small><h3>Monte seus produtos</h3><p>Adicione ingredientes, porções, rendimento e embalagem na ficha técnica.</p></div></article>
            <article><span>3</span><div><small>TERCEIRO PASSO</small><h3>Confira o preço ideal</h3><p>Veja custo, margem, preço recomendado e onde precisa corrigir.</p></div></article>
          </div>
        </div>
      </section>

      <section className="comparison-section section-space">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">A DIFERENÇA NA PRÁTICA</span>
            <h2>Continue no achismo ou comece<br /><em>a decidir com clareza.</em></h2>
          </div>
          <div className="comparison-grid">
            <article className="without-card">
              <div className="comparison-title"><span>×</span><div><small>SEM O PRECIFICA MIX</small><strong>Decisão no escuro</strong></div></div>
              <ul>
                <li><b>×</b> Copia preço da concorrência</li>
                <li><b>×</b> Não sabe o custo de cada porção</li>
                <li><b>×</b> Descobre o prejuízo tarde demais</li>
                <li><b>×</b> Perde tempo com planilhas confusas</li>
                <li><b>×</b> Compra sem enxergar o estoque</li>
              </ul>
            </article>
            <article className="with-card">
              <div className="comparison-title"><span>✓</span><div><small>COM O PRECIFICA MIX</small><strong>Decisão com segurança</strong></div></div>
              <ul>
                <li><b>✓</b> Vê o custo real de cada produto</li>
                <li><b>✓</b> Define sua própria margem</li>
                <li><b>✓</b> Corrige produtos antes de perder</li>
                <li><b>✓</b> Organiza fichas técnicas</li>
                <li><b>✓</b> Controla insumos e estoque</li>
              </ul>
            </article>
          </div>
          <a className="secondary-cta" href="#oferta">QUERO TER MAIS CLAREZA NO MEU NEGÓCIO <span>→</span></a>
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
                <span>Experiência real + tecnologia aplicada à operação.</span>
              </figcaption>
            </figure>

            <div className="founders-copy">
              <span className="section-kicker">QUEM ESTÁ POR TRÁS DO PRECIFICA MIX</span>
              <h2 id="founders-title">Criado por quem vive a rotina de food service <em>todos os dias.</em></h2>
              <p>
                O Precifica Mix nasceu dentro de uma sorveteria real, a partir de um problema que
                muitos donos de negócios de alimentação conhecem: vender, trabalhar muito e ainda
                não saber exatamente quanto sobra em cada produto.
              </p>
              <p>
                De um lado, mais de 8 anos de experiência prática em operações de alimentação, com
                produção, operação, custos, estoque e precificações feitas manualmente. Do outro, a experiência de um gerente
                de food service e bacharel em Sistemas de Informação, que transformou essa rotina em
                uma ferramenta simples de usar.
              </p>
              <p>
                Dessa parceria nasceu o Precifica Mix: uma solução direta para transformar contas
                manuais em fichas técnicas claras, organizar custos e encontrar um preço de venda
                mais seguro, mesmo para quem não entende de fórmulas ou sistemas complicados.
              </p>
              <div className="founders-signature">
                <span aria-hidden="true">✓</span>
                <p><strong>Não nasceu apenas da teoria.</strong> Nasceu de problemas que nós mesmos precisávamos resolver.</p>
              </div>
            </div>
          </div>

          <div className="testimonials-wrap" aria-labelledby="testimonials-title">
            <div className="testimonials-heading">
              <span className="section-kicker">DEPOIMENTOS DE CLIENTES</span>
              <h3 id="testimonials-title">Quem usa o Precifica Mix conta o que mudou na hora de precificar.</h3>
              <p>Experiências de negócios de alimentação que começaram a olhar para custos, taxas e margens com mais clareza.</p>
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
            <h2>Do smash ao artesanal: enxergue o custo de cada montagem.</h2>
            <p>Não importa se está começando ou se já vende todos os dias. O importante é considerar cada ingrediente, adicional, embalagem e taxa antes de definir o preço.</p>
          </div>
          <div className="audience-list">
            {audiences.map((audience) => <div key={audience}><CheckIcon />{audience}</div>)}
          </div>
        </div>
      </section>

      <section className="guidance-section section-space" aria-labelledby="guidance-title" data-reveal>
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">VOCÊ NÃO PRECISA DESCOBRIR TUDO SOZINHO</span>
            <h2 id="guidance-title">Ferramenta simples, orientação para começar e <em>ajuda quando precisar.</em></h2>
            <p>Além do acesso ao sistema, você recebe conteúdos e suporte para transformar seus dados em uma precificação mais segura.</p>
          </div>
          <div className="guidance-grid">
            <article>
              <span aria-hidden="true">▶</span>
              <h3>Videoaulas passo a passo</h3>
              <p>Aprenda a cadastrar ingredientes, montar fichas técnicas e conferir os preços recomendados sem depender de aulas longas.</p>
            </article>
            <article>
              <span aria-hidden="true">1</span>
              <h3>Acompanhamento inicial</h3>
              <p>Receba orientações para organizar os primeiros cadastros e começar a utilizar a ferramenta com mais segurança.</p>
            </article>
            <article>
              <span aria-hidden="true">♥</span>
              <h3>Suporte humanizado</h3>
              <p>Quando surgir uma dúvida sobre o uso, você fala com uma pessoa de verdade e recebe uma orientação clara.</p>
            </article>
          </div>
          <div className="guarantee-banner">
            <strong>7</strong>
            <div>
              <span>GARANTIA INCONDICIONAL DE 7 DIAS</span>
              <h3>Conheça o Precifica Mix sem correr risco.</h3>
              <p>Cadastre seus produtos, faça suas primeiras precificações e confira se a ferramenta funciona para sua operação. Se não fizer sentido, você pode solicitar o reembolso dentro do prazo da garantia.</p>
            </div>
            <a href="#oferta">QUERO COMEÇAR SEM RISCO <span>→</span></a>
          </div>
        </div>
      </section>

      <section id="oferta" className="offer-section section-space">
        <div className="container offer-wrap">
          <div className="offer-copy">
            <Brand />
            <span className="section-kicker">OFERTA ESPECIAL · PAGAMENTO ÚNICO</span>
            <h2>Escolha como você quer começar a precificar.</h2>
            <p>Cadastre seus produtos, simule cenários e encontre o preço certo. O Precifica Mix faz as contas, organiza as informações e ainda oferece ajuda para você dar os primeiros passos.</p>
            <ul className="offer-benefits">
              <li><CheckIcon /> Precificação correta por canal</li>
              <li><CheckIcon /> Simulação de vendas e lucro</li>
              <li><CheckIcon /> Fichas técnicas completas</li>
              <li><CheckIcon /> Controle de estoque</li>
              <li><CheckIcon /> Mais de 50 insumos para importar</li>
              <li><CheckIcon /> Videoaulas passo a passo</li>
              <li><CheckIcon /> Acompanhamento inicial</li>
              <li><CheckIcon /> Suporte humanizado</li>
            </ul>
          </div>
          <div className="offer-card-column">
            <div className="mobile-offer-headline">
              <span>OFERTA ESPECIAL · PAGAMENTO ÚNICO</span>
              <h2>Dois planos. Um jeito mais fácil de precificar.</h2>
              <p>Escolha o Essencial ou leve também as 30 fichas técnicas no Completo.</p>
            </div>
            <OfferPlans essentialUrl={CHECKOUT_URL} completeUrl={COMPLETE_CHECKOUT_URL} />
          </div>
        </div>
      </section>

      <section id="duvidas" className="faq-section section-space" data-reveal>
        <div className="container faq-wrap">
          <div className="faq-heading">
            <span className="section-kicker">PERGUNTAS FREQUENTES</span>
            <h2>Ainda ficou com alguma dúvida?</h2>
            <p>Veja as respostas mais importantes antes de começar.</p>
            <a href="https://wa.me/5531983238881?text=Ol%C3%A1%21%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20Precifica%20Mix." target="_blank" rel="noreferrer">FALAR COM O SUPORTE <span>→</span></a>
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
            <span className="section-kicker">SEU PRÓXIMO PREÇO PODE SER UMA DECISÃO MELHOR</span>
            <h2>Pare de precificar no achismo.</h2>
            <p>Organize ingredientes, adicionais, embalagens, fichas técnicas e estoque em uma ferramenta preparada para a rotina de hamburguerias.</p>
          </div>
          <a href="#oferta">QUERO CONHECER O PRECIFICA MIX <span>→</span></a>
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
