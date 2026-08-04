"use client";

import { useEffect, useMemo, useState } from "react";

type RecentSale = {
  name?: string;
  city?: string;
  state?: string;
};

const FIRST_APPEARANCE_MS = 5_000;
const DISPLAY_DURATION_MS = 6_000;
const REPEAT_INTERVAL_MS = 22_000;

const anonymousSale: RecentSale = {
  name: "Novo cliente",
};

function sanitize(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : undefined;
}

function getConfiguredSales(): RecentSale[] {
  const raw = process.env.NEXT_PUBLIC_RECENT_SALES_JSON;
  if (!raw) return [anonymousSale];

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [anonymousSale];

    const sales = parsed
      .slice(0, 20)
      .map((item) => {
        if (!item || typeof item !== "object") return null;
        const sale = item as Record<string, unknown>;
        const normalized: RecentSale = {
          name: sanitize(sale.name, 40),
          city: sanitize(sale.city, 50),
          state: sanitize(sale.state, 2)?.toUpperCase(),
        };
        return normalized.name ? normalized : null;
      })
      .filter((sale): sale is RecentSale => Boolean(sale));

    return sales.length ? sales : [anonymousSale];
  } catch {
    return [anonymousSale];
  }
}

export function RecentSaleNotification() {
  const sales = useMemo(getConfiguredSales, []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout> | undefined;

    const showNotification = () => {
      setVisible(true);
      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = setTimeout(() => setVisible(false), DISPLAY_DURATION_MS);
    };

    const firstTimer = setTimeout(showNotification, FIRST_APPEARANCE_MS);
    const repeatTimer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % sales.length);
      showNotification();
    }, REPEAT_INTERVAL_MS);

    return () => {
      clearTimeout(firstTimer);
      if (hideTimer) clearTimeout(hideTimer);
      clearInterval(repeatTimer);
    };
  }, [sales.length]);

  function dismissNotification() {
    setVisible(false);
    setDismissed(true);
  }

  if (dismissed) return null;

  const sale = sales[activeIndex];
  const location = [sale.city, sale.state].filter(Boolean).join(" — ");

  return (
    <aside
      className={`sale-notification ${visible ? "sale-notification-visible" : ""}`}
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="sale-notification-icon" aria-hidden="true">✓</span>
      <div className="sale-notification-copy">
        <small><i aria-hidden="true" /> COMPRA CONFIRMADA</small>
        <strong>{sale.name} garantiu o acesso</strong>
        <span>{location || "Precifica Mix • pagamento único"}</span>
      </div>
      <button
        className="sale-notification-close"
        type="button"
        onClick={dismissNotification}
        aria-label="Fechar notificação"
      >
        ×
      </button>
    </aside>
  );
}
