import Image from "next/image";
import { TrackedCheckoutLink } from "./tracking";
import { RecentSaleNotification } from "./recent-sale-notification";
import { DirectWhatsAppButton } from "./direct-whatsapp-button";

const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_HOTMART_CHECKOUT_URL ||
  "https://pay.hotmart.com/D106845746F?checkoutMode=10";

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Precifica Mix",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Ferramenta de precificação, fichas técnicas e controle de estoque para negócios de food service.",
  offers: {
    "@type": "Offer",
    price: "47.00",
    priceCurrency: "BRL",
    url: CHECKOUT_URL,
  },
};

function Brand() {
  return (
    <a className="brand" href="#topo" aria-label="Precifica Mix — início">
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
    ["Pão brioche", "R$ 1,42"],
    ["Carne 160g", "R$ 4,96"],
    ["Queijo + molho", "R$ 2,18"],
    ["Embalagem", "R$ 1,15"],
  ];

  return (
    <div className="product-stage" aria-label="Precificação detalhada de um hambúrguer artesanal no Precifica Mix">
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
              <div className={`menu-item ${index === 0 ? 'active' : ''}`} key={item}>
                <i aria-hidden="true" />{item}
              </div>
            ))}
          </aside>
          <div className="app-content">
            <div className="app-heading">
              <div><small>PRECIFICAÇÃO INTELIGENTE</small><strong>Hambúrguer artesanal</strong></div>
              <span>PRONTO EM MENOS DE 5 MIN</span>
            </div>

            <div className="burger-pricing-grid">
              <div className="ingredient-panel">
                <div className="panel-title"><span>1</span><div><small>FICHA TÉCNICA</small><strong>Ingredientes e custos</strong></div></div>
                <div className="ingredient-list">
                  {ingredients.map(([name, price]) => (
                    <div key={name}><span>{name}</span><b>{price}</b></div>
                  ))}
                </div>
              </div>

              <div className="channel-panel">
                <div className="panel-title"><span>2</span><div><small>PREÇO POR CANAL</small><strong>Taxas consideradas</strong></div></div>
                <div className="channel-result counter-result">
                  <div><small>BALCÃO</small><strong>R$ 24,90</strong></div>
                  <span><small>CMV</small><b>39%</b></span>
                </div>
                <div className="channel-result ifood-channel">
                  <div><small>IFOOD · TAXA 17%</small><strong>R$ 29,90</strong></div>
                  <span><small>CMV</small><b>32,5%</b></span>
                </div>
              </div>
            </div>

            <div className="pricing-summary">
              <div><small>CUSTO TOTAL</small><strong>R$ 9,71</strong></div>
              <span>+</span>
              <div><small>MARGEM DESEJADA</small><strong>35%</strong></div>
              <span>=</span>
              <div className="recommended-price"><small>PREÇO RECOMENDADO</small><strong>R$ 24,90</strong></div>
            </div>
            <div className="automatic-note"><span>✓</span> CMV calculado e margem protegida em cada canal.</div>
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
  "Restaurantes e lanchonetes",
  "Hamburguerias e pizzarias",
  "Confeitarias e padarias",
  "Marmitarias e delivery",
  "Sorveterias e açaiterias",
  "Bares, cafés e cozinhas",
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
    question: "O pagamento é mensal?",
    answer: "Não. Nesta oferta, o pagamento é único e não existe assinatura mensal recorrente.",
  },
  {
    question: "Os insumos já vêm cadastrados?",
    answer: "Você recebe uma biblioteca inicial com insumos e modelos comuns de food service para acelerar a configuração. Depois, pode ajustar preços, embalagens e itens conforme a realidade do seu negócio.",
  },
  {
    question: "Funciona para qualquer negócio de alimentação?",
    answer: "Sim. A estrutura foi pensada para restaurantes, lanchonetes, hamburguerias, pizzarias, confeitarias, padarias, delivery, sorveterias, açaiterias e outros negócios de food service.",
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
    question: "Tenho garantia?",
    answer: "Sim. Você tem 7 dias para conhecer a ferramenta. Se ela não fizer sentido para o seu negócio, pode solicitar o reembolso dentro do prazo pela plataforma.",
  },
];

function MiniPricingScreen() {
  return (
    <div className="pricing-screen" aria-label="Exemplo de cálculo de preço no Precifica Mix">
      <div className="screen-title"><span>$</span><div><small>PRECIFICAÇÃO INTELIGENTE</small><strong>Hambúrguer artesanal</strong></div></div>
      <div className="ingredient-lines">
        <div><span>Pão brioche</span><b>R$ 1,42</b></div>
        <div><span>Carne 160g</span><b>R$ 4,96</b></div>
        <div><span>Queijo + molho</span><b>R$ 2,18</b></div>
        <div><span>Embalagem</span><b>R$ 1,15</b></div>
      </div>
      <div className="pricing-total">
        <div><small>CUSTO TOTAL</small><strong>R$ 9,71</strong></div>
        <span>+</span>
        <div><small>MARGEM DESEJADA</small><strong>35%</strong></div>
        <span>=</span>
        <div className="recommended"><small>PREÇO RECOMENDADO</small><strong>R$ 24,90</strong></div>
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

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span>!</span> PREJUÍZO ESCONDIDO NO CARDÁPIO</div>
            <h1>Você pode vender muito e ainda <em>perder dinheiro</em> em cada pedido.</h1>
            <p className="hero-lead">
              Em menos de 5 minutos, transforme ingredientes, CMV e taxas no preço certo para vender com margem.
            </p>
          </div>
          <ProductMockup />
          <div className="hero-action">
            <div className="hero-benefits">
              <span><CheckIcon /> Custo real</span>
              <span><CheckIcon /> Taxas por canal</span>
              <span><CheckIcon /> Margem e preço ideal</span>
            </div>
            <a className="primary-cta" href="#oferta">
              QUERO PRECIFICAR CERTO <span>→</span>
              <small>Pagamento único · sem assinatura</small>
            </a>
            <p className="microcopy"><span aria-hidden="true">🔒</span> Compra segura · garantia de 7 dias</p>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Benefícios de compra">
        <div className="container trust-grid">
          <div><b>✓</b><span><strong>Pagamento único</strong><small>Sem mensalidade ou fidelidade</small></span></div>
          <div><b>✓</b><span><strong>Acesso imediato</strong><small>Comece assim que confirmar</small></span></div>
          <div><b>✓</b><span><strong>Garantia de 7 dias</strong><small>Você testa sem correr risco</small></span></div>
          <div><b>✓</b><span><strong>Feito para food service</strong><small>Da cozinha ao cardápio</small></span></div>
        </div>
      </section>

      <section className="pain-section section-space">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-kicker">O PREJUÍZO QUE NÃO APARECE</span>
            <h2>O problema não é só vender pouco.<br /><em>É vender sem saber o que sobra.</em></h2>
            <p>Você pode estar cheio de pedidos e, ainda assim, trabalhar para pagar ingredientes, taxas e despesas.</p>
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
                {['Farinha de trigo', 'Queijo muçarela', 'Leite condensado', 'Copo 500 ml', 'Molho especial', 'Chocolate em pó'].map((item, index) => (
                  <div key={item}><i>{['FT','QM','LC','CP','ME','CH'][index]}</i><span><strong>{item}</strong><small>Modelo pronto para personalizar</small></span><b>+</b></div>
                ))}
              </div>
            </div>
          </div>
          <div className="library-copy">
            <span className="section-kicker">COMECE SEM PERDER HORAS</span>
            <h2>Insumos pré-cadastrados para facilitar sua configuração.</h2>
            <p>Em vez de começar com uma tela vazia, você recebe modelos comuns do food service e só precisa adaptar preço, embalagem e fornecedor para a sua realidade.</p>
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

      <section className="founders-section section-space" aria-labelledby="founders-title">
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
              <h2 id="founders-title">Criado por quem vive o food service <em>todos os dias.</em></h2>
              <p>
                O Precifica Mix nasceu dentro de uma sorveteria real, a partir de um problema que
                muitos donos de negócios de alimentação conhecem: vender, trabalhar muito e ainda
                não saber exatamente quanto sobra em cada produto.
              </p>
              <p>
                De um lado, mais de 8 anos de experiência prática em uma rede de sorveterias, com
                produção, operação, custos, estoque e precificações feitas manualmente. Do outro, a experiência de um gerente
                de sorveteria e bacharel em Sistemas de Informação, que transformou essa rotina em
                uma ferramenta simples de usar.
              </p>
              <p>
                Dessa parceria nasceu o Precifica Mix: uma solução direta para transformar contas
                manuais em fichas técnicas claras, organizar custos e encontrar um preço de venda
                mais seguro — mesmo para quem não entende de fórmulas ou sistemas complicados.
              </p>
              <div className="founders-signature">
                <span aria-hidden="true">✓</span>
                <p><strong>Não nasceu apenas da teoria.</strong> Nasceu de problemas que nós mesmos precisávamos resolver.</p>
              </div>
            </div>
          </div>

          <div className="real-use-wrap">
            <div className="real-use-heading">
              <span className="section-kicker">APLICADO EM OPERAÇÕES REAIS</span>
              <h3>Da sorveteria à padaria: custos diferentes, a mesma necessidade de clareza.</h3>
            </div>
            <div className="real-use-grid">
              <article className="real-use-card">
                <div className="real-use-icon" aria-hidden="true">🍨</div>
                <div>
                  <span>VALIDAÇÃO NA OPERAÇÃO</span>
                  <h4>Sorvetes Milky · Timóteo/MG</h4>
                  <p>
                    A rotina da sorveteria mostrou na prática a importância de reunir ingredientes,
                    porções, embalagens, adicionais e taxas de cada canal antes de definir o preço.
                  </p>
                </div>
              </article>
              <article className="real-use-card">
                <div className="real-use-icon" aria-hidden="true">🥖</div>
                <div>
                  <span>APLICAÇÃO EM NEGÓCIO FAMILIAR</span>
                  <h4>Padaria familiar</h4>
                  <p>
                    Em produtos com vários ingredientes e rendimentos, a ficha técnica organiza o
                    custo de produção e ajuda a chegar a um preço de venda mais seguro.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="audience-section section-space">
        <div className="container audience-grid">
          <div>
            <span className="section-kicker">FEITO PARA FOOD SERVICE</span>
            <h2>Se você transforma ingredientes em produtos, o Precifica Mix é para você.</h2>
            <p>Não importa se está começando ou se já vende todos os dias. O importante é parar de depender de suposições para definir seus preços.</p>
          </div>
          <div className="audience-list">
            {audiences.map((audience) => <div key={audience}><CheckIcon />{audience}</div>)}
          </div>
        </div>
      </section>

      <section id="oferta" className="offer-section section-space">
        <div className="container offer-wrap">
          <div className="offer-copy">
            <Brand />
            <span className="section-kicker">OFERTA ESPECIAL</span>
            <h2>Pare de precificar no achismo.</h2>
            <p>Calcule custos, taxas e o preço certo de cada canal em uma ferramenta simples.</p>
            <ul className="offer-benefits">
              <li><CheckIcon /> Custos e fichas técnicas</li>
              <li><CheckIcon /> Taxas do iFood, 99Food e cartão</li>
              <li><CheckIcon /> Preço certo por canal</li>
              <li><CheckIcon /> Controle de estoque</li>
            </ul>
          </div>
          <div className="offer-card-column">
            <div className="mobile-offer-headline">
              <span>OFERTA ESPECIAL</span>
              <h2>Pare de precificar no achismo.</h2>
              <p>Calcule custos, taxas e o preço certo de cada canal em uma ferramenta simples.</p>
            </div>
            <div className="price-card">
              <div className="limited-badge">PAGAMENTO ÚNICO</div>
              <p>De <s>R$ 97,00</s> por:</p>
              <div className="price"><span>R$</span><strong>47</strong><small>,00</small></div>
              <div className="one-time"><span>✓</span><div><strong>Pagamento único</strong><small>Acesso completo ao Precifica Mix</small></div></div>
              <div className="mobile-offer-benefits" aria-label="Benefícios incluídos">
                <div><span>50+</span><strong>Importe 50 insumos</strong></div>
                <div><span>●</span><strong>Suporte humanizado</strong></div>
                <div><span>▣</span><strong>Controle de estoque</strong></div>
              </div>
              <TrackedCheckoutLink className="buy-button" baseUrl={CHECKOUT_URL}>
                QUERO ACESSAR AGORA <span>→</span>
                <small>Acesso após a confirmação</small>
              </TrackedCheckoutLink>
              <div className="purchase-protection">
                <div className="secure-purchase"><span>🔒</span><div><strong>COMPRA SEGURA</strong><small>Pagamento protegido pela Hotmart</small></div></div>
                <div className="guarantee-highlight"><span>7</span><div><strong>7 DIAS DE GARANTIA</strong><small>Teste sem risco ou solicite o reembolso</small></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section section-space">
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
            <p>Organize custos, fichas técnicas e estoque em uma ferramenta criada para a rotina real do food service.</p>
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
    </main>
  );
}
