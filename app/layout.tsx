import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SalesTrackingProvider } from "./tracking";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Precifica Mix | Precificação inteligente para Food Service",
  description:
    "Calcule custos, monte fichas técnicas, controle o estoque e encontre o preço ideal dos seus produtos com o Precifica Mix.",
  keywords: [
    "precificação food service",
    "ficha técnica restaurante",
    "calcular preço de venda",
    "controle de estoque food service",
    "Precifica Mix",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Precifica Mix | Pare de precificar no achismo",
    description:
      "Descubra o custo exato dos produtos, monte fichas técnicas e encontre o preço ideal do seu cardápio.",
    type: "website",
    locale: "pt_BR",
    siteName: "Precifica Mix",
  },
  twitter: {
    card: "summary",
    title: "Precifica Mix | Precificação inteligente para Food Service",
    description:
      "Custos, fichas técnicas, precificação e estoque em uma ferramenta simples para food service.",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const trackingMode = process.env.NEXT_PUBLIC_TRACKING_MODE || "gtm";

  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {trackingMode === "gtm" && gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(gtmId)}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        ) : null}
        <SalesTrackingProvider />
        {children}
      </body>
    </html>
  );
}
