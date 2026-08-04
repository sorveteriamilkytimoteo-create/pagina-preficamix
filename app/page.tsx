import { RecentSaleToast } from "./recent-sale-toast";

const CHECKOUT_URL = "https://pay.hotmart.com/D106845746F?checkoutMode=10";

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
    price: "37.00",
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
  return (
    <div className="product-stage" aria-label="Demonstração visual do Precifica Mix">
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
              <div><small>VISÃO GERAL</small><strong>Boa tarde, seu negócio está saudável.</strong></div>
              <span>Food Service</span>
            </div>
            <div className="guide-card">
              <strong>Guia de primeiros passos</strong>
              <div className="guide-steps">
                <span><b>1</b>Cadastrar insumos</span>
                <span><b>2</b>Montar produtos</span>
                <span><b>3</b>Conferir preço</span>
              </div>
            </div>
            <div className="metric-grid">
              <div><small>FATURAMENTO ESTIMADO</small><b>R$ 48.750</b><em>↗ 12%</em></div>
              <div><small>CUSTO MÉDIO DO CARDÁPIO</small><b>28,6%</b><em>Saudável</em></div>
              <div><small>POTENCIAL DE GANHO</small><b>R$ 3.250</b><em>Este mês</em></div>
            </div>
            <div className="chart-card">
              <div><small>MARGEM DOS PRODUTOS</small><strong>Veja onde seu lucro está</strong></div>
              <div className="bars" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>
            </div>
          </div>
        </div>
      </div>
      <div className="floating-card floating-cost">
        <span>Custo exato</span><strong>R$ 8,42</strong><small>calculado automaticamente</small>
      </div>
      <div className="floating-card floating-price">
        <span>Preço recomendado</span><strong>R$ 24,90</strong><small>com sua margem desejada</small>
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
          <a className="header-cta" href="#oferta">VER OFERTA <span>→</span></a>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span>✓</span> PARA QUEM VENDE ALIMENTOS</div>
            <h1>Seu cardápio vende.<br />Mas ele realmente <em>dá lucro?</em></h1>
            <p className="hero-lead">
              Descubra o custo exato de cada produto, monte fichas técnicas e encontre o preço ideal —
              mesmo que você não entenda nada de finanças.
            </p>
            <div className="hero-benefits">
              <span><CheckIcon /> Sem planilhas complicadas</span>
              <span><CheckIcon /> Insumos já pré-cadastrados</span>
              <span><CheckIcon /> Pagamento único</span>
            </div>
            <a className="primary-cta" href="#oferta">
              QUERO PARAR DE PRECIFICAR NO ACHISMO <span>→</span>
              <small>Oferta especial por tempo limitado</small>
            </a>
            <p className="microcopy"><span aria-hidden="true">🔒</span> Compra segura · 7 dias de garantia · Sem assinatura</p>
          </div>
          <ProductMockup />
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

      <section className="library-section section-space">
        <div className="container library-grid">
          <div className="library-visual">
            <div className="library-window">
              <div className="library-header"><div><span>▱</span><strong>Biblioteca de sugestões</strong></div><small>41 modelos disponíveis</small></div>
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
            <div className="speed-stat"><strong>41+</strong><span>modelos iniciais para acelerar os primeiros cadastros</span></div>
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
            <span className="section-kicker">CONDIÇÃO ESPECIAL POR TEMPO LIMITADO</span>
            <h2>Quanto custa continuar vendendo um produto sem saber se ele dá lucro?</h2>
            <p>Um único erro de porção ou precificação pode custar mais do que o acesso completo ao Precifica Mix.</p>
            <ul className="offer-benefits">
              <li><CheckIcon /> Precificação automática dos produtos</li>
              <li><CheckIcon /> Fichas técnicas completas</li>
              <li><CheckIcon /> Biblioteca de insumos pré-cadastrados</li>
              <li><CheckIcon /> Controle de insumos e estoque</li>
              <li><CheckIcon /> Histórico de custos e diagnóstico</li>
              <li><CheckIcon /> Acesso pelo celular e computador</li>
            </ul>
          </div>
          <div className="price-card">
            <div className="limited-badge">OFERTA ESPECIAL</div>
            <p>De <s>R$ 97,00</s> por apenas:</p>
            <div className="price"><span>R$</span><strong>37</strong><small>,00</small></div>
            <div className="one-time"><span>✓</span><div><strong>Pagamento único</strong><small>Sem assinatura e sem mensalidade</small></div></div>
            <p className="price-argument">Menos do que o prejuízo que um único produto mal precificado pode causar.</p>
            <a className="buy-button" href={CHECKOUT_URL}>
              QUERO PRECIFICAR CERTO AGORA <span>→</span>
              <small>Acesso liberado após a confirmação</small>
            </a>
            <div className="payment-note">🔒 Pagamento processado com segurança pela Hotmart</div>
            <div className="guarantee-box"><span>♢</span><div><strong>GARANTIA DE 7 DIAS</strong><p>Conheça a ferramenta sem risco. Se não fizer sentido para você, solicite o reembolso dentro do prazo.</p></div></div>
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

      <RecentSaleToast />
      <a className="mobile-sticky" href="#oferta">VER OFERTA POR R$ 37 <span>→</span></a>
    </main>
  );
}
