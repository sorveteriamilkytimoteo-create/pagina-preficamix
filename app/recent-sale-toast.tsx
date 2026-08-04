"use client";

import { useEffect, useRef, useState } from "react";

type VerifiedSale = {
  id: string;
  firstName: string;
  city: string;
  state: string;
};

const FIRST_NOTIFICATION_DELAY = 14_000;
const NOTIFICATION_INTERVAL = 45_000;
const NOTIFICATION_DURATION = 6_500;
const SALES_REFRESH_INTERVAL = 30_000;

export function RecentSaleToast() {
  const [activeSale, setActiveSale] = useState<VerifiedSale | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const queueRef = useRef<VerifiedSale[]>([]);
  const knownSalesRef = useRef(new Set<string>());
  const activeRef = useRef(false);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const loadVerifiedSales = async () => {
      try {
        const response = await fetch("/api/recent-sales", { cache: "no-store" });
        if (!response.ok) return;

        const payload = (await response.json()) as { sales?: VerifiedSale[] };
        if (isCancelled || !Array.isArray(payload.sales)) return;

        for (const sale of payload.sales) {
          if (!knownSalesRef.current.has(sale.id)) {
            knownSalesRef.current.add(sale.id);
            queueRef.current.push(sale);
          }
        }
      } catch {
        // A prova social é complementar: falhas silenciosas não afetam a oferta.
      }
    };

    const showNextSale = () => {
      if (activeRef.current) return;

      const nextSale = queueRef.current.shift();
      if (!nextSale) return;

      activeRef.current = true;
      setActiveSale(nextSale);
      setIsVisible(true);

      hideTimerRef.current = setTimeout(() => {
        setIsVisible(false);
        activeRef.current = false;
      }, NOTIFICATION_DURATION);
    };

    void loadVerifiedSales();
    const refreshTimer = setInterval(loadVerifiedSales, SALES_REFRESH_INTERVAL);
    const firstTimer = setTimeout(showNextSale, FIRST_NOTIFICATION_DELAY);
    const notificationTimer = setInterval(showNextSale, NOTIFICATION_INTERVAL);

    return () => {
      isCancelled = true;
      clearInterval(refreshTimer);
      clearTimeout(firstTimer);
      clearInterval(notificationTimer);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  if (!activeSale) return null;

  const closeNotification = () => {
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    setIsVisible(false);
    activeRef.current = false;
  };

  return (
    <aside
      className={`recent-sale-toast ${isVisible ? "is-visible" : ""}`}
      aria-live="polite"
      aria-atomic="true"
      role="status"
    >
      <span className="recent-sale-icon" aria-hidden="true">✓</span>
      <span className="recent-sale-copy">
        <small>COMPRA CONFIRMADA</small>
        <strong>{activeSale.firstName} acabou de comprar o Precifica Mix</strong>
        <span>{activeSale.city} · {activeSale.state}</span>
      </span>
      <button type="button" onClick={closeNotification} aria-label="Fechar notificação de compra">×</button>
    </aside>
  );
}
