import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pedido recebido | Precifica Mix",
  description: "Próximos passos para acessar o Precifica Mix.",
  robots: { index: false, follow: false },
};

export default function ObrigadoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
