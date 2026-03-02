"use client";

import { useState, useEffect, useCallback } from "react";

/** Voeg je eigen foto's toe in public/ en pas deze paden aan */
const HERO_IMAGES = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg"];
const ROTATE_INTERVAL_MS = 10000;

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const goTo = useCallback((i: number) => {
    setIndex((prev) => (i + HERO_IMAGES.length) % HERO_IMAGES.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="hero-carousel">
      <div className="hero-carousel__slides">
        {HERO_IMAGES.map((src, i) => (
          <div
            key={src}
            className={`hero-carousel__slide ${i === index ? "hero-carousel__slide--active" : ""}`}
            aria-hidden={i !== index}
          >
            <img
              src={src}
              alt=""
              className="hero-carousel__img"
            />
          </div>
        ))}
      </div>
      <div className="hero-carousel__overlay" aria-hidden="true" />
      <div className="hero-carousel__dots" role="tablist" aria-label="Kies een headerfoto">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Foto ${i + 1}`}
            className={`hero-carousel__dot ${i === index ? "hero-carousel__dot--active" : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
