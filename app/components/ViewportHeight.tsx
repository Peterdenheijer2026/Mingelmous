"use client";

import { useEffect } from "react";

/**
 * Zet --window-height op de zichtbare viewport-hoogte (px).
 * Gebruikt visualViewport waar mogelijk (exact zichtbaar scherm op mobiel).
 */
export default function ViewportHeight() {
  useEffect(() => {
    const setHeight = () => {
      const vv = typeof window !== "undefined" && window.visualViewport;
      const h = vv ? vv.height : window.innerHeight;
      document.documentElement.style.setProperty("--window-height", `${h}px`);
    };

    setHeight();
    requestAnimationFrame(setHeight);
    const t1 = setTimeout(setHeight, 100);
    const t2 = setTimeout(setHeight, 500);
    window.addEventListener("resize", setHeight);
    window.addEventListener("orientationchange", setHeight);
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", setHeight);
      window.visualViewport.addEventListener("scroll", setHeight);
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("resize", setHeight);
      window.removeEventListener("orientationchange", setHeight);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener("resize", setHeight);
        window.visualViewport.removeEventListener("scroll", setHeight);
      }
    };
  }, []);

  return null;
}
