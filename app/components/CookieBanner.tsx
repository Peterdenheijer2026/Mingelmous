"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const STORAGE_KEY = "mingelmous-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const accepted = localStorage.getItem(STORAGE_KEY);
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie melding">
      <div className="cookie-banner__inner">
        <p className="cookie-banner__text">
          Wij gebruiken functionele cookies voor het goed laten werken van de website. 
          Meer informatie vindt u in onze{" "}
          <Link href="/privacy" className="cookie-banner__link">privacyverklaring</Link>.
        </p>
        <button
          type="button"
          className="cookie-banner__btn btn btn--gold"
          onClick={accept}
        >
          Akkoord
        </button>
      </div>
    </div>
  );
}
