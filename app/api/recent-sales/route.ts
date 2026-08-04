type RawSale = {
  id?: unknown;
  firstName?: unknown;
  name?: unknown;
  city?: unknown;
  state?: unknown;
  purchasedAt?: unknown;
};

type VerifiedSale = {
  id: string;
  firstName: string;
  city: string;
  state: string;
  purchasedAt?: string;
};

const cleanText = (value: unknown, maxLength: number) =>
  typeof value === "string"
    ? value.replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, maxLength)
    : "";

function normalizeSale(rawSale: RawSale, index: number): VerifiedSale | null {
  const rawName = cleanText(rawSale.firstName ?? rawSale.name, 80);
  const firstName = rawName.split(" ")[0]?.slice(0, 24) ?? "";
  const city = cleanText(rawSale.city, 42);
  const state = cleanText(rawSale.state, 2).toUpperCase();
  const purchasedAt = cleanText(rawSale.purchasedAt, 35);

  if (!firstName || !city || !/^[A-Z]{2}$/.test(state)) return null;

  const providedId = cleanText(rawSale.id, 80);
  const id = providedId || `${firstName}-${city}-${state}-${purchasedAt || index}`;

  return { id, firstName, city, state, purchasedAt: purchasedAt || undefined };
}

async function readSalesSource(): Promise<RawSale[]> {
  const endpoint = process.env.SOCIAL_PROOF_API_URL;

  if (endpoint) {
    const response = await fetch(endpoint, {
      cache: "no-store",
      headers: process.env.SOCIAL_PROOF_API_TOKEN
        ? { Authorization: `Bearer ${process.env.SOCIAL_PROOF_API_TOKEN}` }
        : undefined,
    });

    if (!response.ok) throw new Error("Não foi possível consultar as compras confirmadas.");
    const payload = (await response.json()) as RawSale[] | { sales?: RawSale[] };
    return Array.isArray(payload) ? payload : payload.sales ?? [];
  }

  const configuredSales = process.env.VERIFIED_RECENT_SALES_JSON;
  if (!configuredSales) return [];

  const payload = JSON.parse(configuredSales) as RawSale[] | { sales?: RawSale[] };
  return Array.isArray(payload) ? payload : payload.sales ?? [];
}

export async function GET() {
  try {
    const rawSales = await readSalesSource();
    const sales = rawSales
      .map(normalizeSale)
      .filter((sale): sale is VerifiedSale => sale !== null)
      .slice(0, 12);

    return Response.json(
      { sales },
      { headers: { "Cache-Control": "no-store, max-age=0" } },
    );
  } catch {
    return Response.json(
      { sales: [] },
      { headers: { "Cache-Control": "no-store, max-age=0" } },
    );
  }
}
