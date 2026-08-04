# Precifica Mix — Página de Vendas

Página direta da oferta Precifica Mix, pronta para GitHub e Vercel.

## Publicação

1. Envie o conteúdo desta pasta para a raiz de um repositório novo no GitHub.
2. Importe o repositório na Vercel com o preset **Next.js**.
3. Cadastre as variáveis do arquivo `.env.example` em **Settings → Environment Variables**.
4. Faça o deploy.

## Rastreamento

Configure os mesmos IDs já utilizados nos outros funis:

- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_GA4_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`
- `NEXT_PUBLIC_UTMIFY_PIXEL_ID`
- `NEXT_PUBLIC_SITE_URL`

O clique no checkout envia `checkout_iniciado` ao GA4/GTM e
`InitiateCheckout` ao Meta Pixel. Os parâmetros UTM são preservados no checkout.

## Notificação de compra verificada

A prova social aparece após 14 segundos, permanece por 6,5 segundos e alterna
compras a cada 45 segundos. No celular, fica acima do botão fixo da oferta.

Ela fica oculta até receber compras reais por uma destas fontes privadas:

- `SOCIAL_PROOF_API_URL`: endpoint que retorna `{ "sales": [{ "id": "...",
  "firstName": "...", "city": "...", "state": "MG" }] }`.
- `SOCIAL_PROOF_API_TOKEN`: token Bearer opcional do endpoint.
- `VERIFIED_RECENT_SALES_JSON`: alternativa temporária com o mesmo conteúdo.

Somente primeiro nome, cidade e estado são exibidos. Não use dados inventados.
