import Link from "next/link";
import HeaderLogo from "./HeaderLogo";

export default function SiteHeader() {
  return (
    <header className="header header--kramer">
      <HeaderLogo />
      <nav className="header__nav">
        <ul>
          <li><Link href="/#welkom">Welkom</Link></li>
          <li><Link href="/menu">Menu</Link></li>
          <li><Link href="/cocktails-by-twan">Cocktails by Twan</Link></li>
          <li><Link href="/nu-op-de-tap">Nu op de tap</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
      <a
        href="https://www.google.com/maps/search/?api=1&query=Menistenplein+10+Stadskanaal"
        target="_blank"
        rel="noopener noreferrer"
        className="header__location"
      >
        <span className="header__location-icon" aria-hidden="true">
          <img src="/Locatie.png" alt="" className="header__location-icon-img" />
        </span>
        <span className="header__location-address">Menistenplein 10, Stadskanaal</span>
      </a>
    </header>
  );
}
