# Precifica Mix — Página de vendas

Página de vendas em Next.js 15 com encaminhamento completo de UTMs para o checkout da Hotmart.

## Variáveis de ambiente na Vercel

Cadastre em **Settings → Environment Variables** para Production, Preview e Development:

- `NEXT_PUBLIC_TRACKING_MODE`: use `gtm` quando GA4 e Meta Pixel estiverem configurados dentro do GTM; use `direct` somente para dispará-los diretamente pela aplicação.
- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_GA4_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`
- `NEXT_PUBLIC_UTMIFY_PIXEL_ID`
- `NEXT_PUBLIC_HOTMART_CHECKOUT_URL`
- `NEXT_PUBLIC_IMPLANTACAO_VIP_CHECKOUT_URL`: checkout comum da Implantação VIP enquanto o Widget do Funil de Vendas não estiver instalado.
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_RECENT_SALES_JSON` (opcional): lista de compras reais exibidas na notificação. Use somente primeiro nome, cidade e UF.

Depois de salvar ou alterar variáveis, faça um novo deploy.

Exemplo de notificação com dados reais:

```text
NEXT_PUBLIC_RECENT_SALES_JSON=[{"name":"Ana","city":"Timóteo","state":"MG"},{"name":"Carlos","city":"Ipatinga","state":"MG"}]
```

Sem essa variável, a página exibe uma confirmação anonimizada. A primeira notificação aparece após 5 segundos e as próximas a cada 22 segundos.

## Rastreamento do checkout

A página captura e mantém todos os parâmetros `utm_*`, além de `fbclid`, `gclid`, `ttclid`, `src`, `sck` e `xcod`. No clique do botão de compra, o endereço do checkout é reconstruído com os parâmetros mais recentes antes do redirecionamento.

Também são carregados os dois scripts da UTMify usados no diagnóstico Precifica Mix:

- `https://cdn.utmify.com.br/scripts/pixel/pixel.js`
- `https://cdn.utmify.com.br/scripts/utms/latest.js`

Eventos enviados ao `dataLayer`: `page_view`, `view_content` e `checkout_iniciado`.

## Pós-compra e Implantação VIP

- `/obrigado`: oferta pós-compra da Implantação VIP por R$ 49,90.
- `/obrigado/final`: confirmação final e orientação de acesso.

A Implantação VIP foi cadastrada como **Serviços Online**, por isso deve ser usada como upsell no **Funil de Vendas** da Hotmart, não como Order Bump. Depois de criar o funil, copie o código do Widget gerado pela Hotmart e substitua o bloco identificado por `hotmart-funnel-widget-slot` em `app/obrigado/upsell-actions.tsx`. O Widget é o responsável pelos botões de aceite e recusa em um clique.

Enquanto o Widget ainda não estiver instalado, o botão usa `NEXT_PUBLIC_IMPLANTACAO_VIP_CHECKOUT_URL`. Se a variável também não existir, o visitante é direcionado ao WhatsApp direto da equipe.

Eventos adicionais enviados ao `dataLayer`: `upsell_visualizado`, `upsell_aceito`, `upsell_recusado` e `whatsapp_direto_clicado`.

O botão flutuante da página de vendas abre o atendimento direto no número `(31) 98323-8881` após 35 segundos e não utiliza a IA de atendimento da Hotmart.

## Teste local

```bash
npm install
npm run typecheck
npm run build
npm run dev
```

Teste a entrada com parâmetros completos, por exemplo:

```text
http://localhost:3000/?utm_source=meta&utm_medium=cpc&utm_campaign=teste&utm_content=criativo_1&utm_term=food_service&utm_id=campanha_123&src=meta&sck=criativo_1&xcod=teste_123
```

Ao clicar em comprar, esses parâmetros devem aparecer também no endereço da Hotmart.
