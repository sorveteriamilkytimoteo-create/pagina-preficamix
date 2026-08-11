import { UpsellActions } from "./upsell-actions";

const WHATSAPP_FALLBACK =
  "https://wa.me/5531983238881?text=Ol%C3%A1%21%20Comprei%20o%20Precifica%20Mix%20e%20quero%20adicionar%20a%20Implanta%C3%A7%C3%A3o%20VIP.";

const configuredCheckout =
  process.env.NEXT_PUBLIC_IMPLANTACAO_VIP_CHECKOUT_URL?.trim() || "";
const checkoutUrl = configuredCheckout || WHATSAPP_FALLBACK;

function MiniBrand() {
  return (
    <div className="vip-brand" aria-label="Precifica Mix">
      <span aria-hidden="true">P</span>
      <strong>Precifica<i>Mix</i></strong>
    </div>
  );
}

const benefits = [
  {
    icon: "1",
    title: "Sessão individual",
    text: "Até 30 minutos pelo WhatsApp para começar do jeito certo.",
  },
  {
    icon: "2",
    title: "Primeiros cadastros",
    text: "Ajuda na configuração inicial e no cadastro dos primeiros insumos.",
  },
  {
    icon: "3",
    title: "Ficha revisada",
    text: "Conferência da precificação do primeiro produto escolhido por você.",
  },
  {
    icon: "4",
    title: "Suporte por 7 dias",
    text: "Acompanhamento prioritário durante o período de implantação.",
  },
];

export default function ObrigadoPage() {
  return (
    <main className="vip-page">
      <header className="vip-header">
        <div className="vip-container vip-header-inner">
          <MiniBrand />
          <span>COMPRA PROTEGIDA PELA HOTMART</span>
        </div>
      </header>

      <section className="vip-success">
        <div className="vip-container">
          <span className="vip-success-icon" aria-hidden="true">✓</span>
          <div>
            <strong>Seu pedido do Precifica Mix foi recebido!</strong>
            <p>Os dados de acesso serão enviados para o e-mail utilizado na compra.</p>
          </div>
        </div>
      </section>

      <section className="vip-hero">
        <div className="vip-container vip-hero-grid">
          <div className="vip-copy">
            <span className="vip-kicker">UMA ÚLTIMA OPORTUNIDADE</span>
            <h1>
              Quer começar com sua primeira <em>precificação pronta?</em>
            </h1>
            <p className="vip-lead">
              Adicione a <strong>Implantação VIP</strong> e tenha ajuda humana
              para configurar o Precifica Mix, cadastrar os primeiros insumos e
              revisar sua primeira ficha técnica.
            </p>

            <div className="vip-benefits">
              {benefits.map((benefit) => (
                <article key={benefit.title}>
                  <span>{benefit.icon}</span>
                  <div>
                    <strong>{benefit.title}</strong>
                    <p>{benefit.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="vip-proof-note">
              <span aria-hidden="true">✓</span>
              <p>
                Atendimento feito por quem conhece a rotina real de um negócio
                de food service e utiliza a ferramenta na prática.
              </p>
            </div>
          </div>

          <aside className="vip-offer-card">
            <span className="vip-exclusive">OFERTA EXCLUSIVA DE BOAS-VINDAS</span>
            <div className="vip-card-icon" aria-hidden="true">VIP</div>
            <h2>Implantação VIP</h2>
            <p className="vip-card-subtitle">Comece acompanhado, sem travar na configuração.</p>
            <div className="vip-price-anchor">Valor normal <s>R$ 97,00</s></div>
            <div className="vip-price">
              <span>R$</span>
              <strong>49</strong>
              <small>,90</small>
            </div>
            <p className="vip-payment">Pagamento único. Sem mensalidade.</p>

            <UpsellActions
              checkoutUrl={checkoutUrl}
              isHotmartCheckout={Boolean(configuredCheckout)}
            />

            <div className="vip-secure-row">
              <span>🔒 Compra segura</span>
              <span>🤝 Suporte humanizado</span>
            </div>
            <p className="vip-urgency">
              Esta condição especial aparece somente neste momento da compra.
            </p>
          </aside>
        </div>
      </section>

      <section className="vip-details">
        <div className="vip-container">
          <div className="vip-detail-heading">
            <span>COMO FUNCIONA</span>
            <h2>Você compra agora e agenda com a nossa equipe</h2>
          </div>
          <div className="vip-steps">
            <article><span>01</span><strong>Confirmação</strong><p>Você recebe as orientações de início após a confirmação da compra.</p></article>
            <article><span>02</span><strong>Contato</strong><p>Chame a equipe no WhatsApp e envie seus dados de compra.</p></article>
            <article><span>03</span><strong>Agendamento</strong><p>Escolha um horário disponível para sua sessão de até 30 minutos.</p></article>
            <article><span>04</span><strong>Acompanhamento</strong><p>Conte com suporte prioritário por sete dias para concluir a implantação.</p></article>
          </div>
          <p className="vip-service-note">
            Atendimento de segunda a sexta, das 9h às 17h, com pausa das 12h às 13h. A oferta não inclui o cadastro completo do cardápio nem atendimento 24 horas.
          </p>
        </div>
      </section>
    </main>
  );
}
