"use client";

import { useState } from "react";
import Link from "next/link";

export default function HeaderLogo() {
  const [imgFailed, setImgFailed] = useState(false);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link href="#" className="header__logo" aria-label="Naar home" onClick={scrollToTop}>
      {!imgFailed ? (
        <img
          src="/logo.png"
          alt="Logo"
          className="header__logo-img"
          onError={() => setImgFailed(true)}
        />
      ) : null}
      {imgFailed ? (
        <span className="header__brand-main">Site</span>
      ) : null}
    </Link>
  );
}
