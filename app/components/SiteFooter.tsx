import Link from "next/link";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer footer--kramer">
      <div className="footer__inner">
        <h2 className="footer__name">Cafe &apos;t Mingelmous</h2>
        <div className="footer__line" aria-hidden="true" />
        <div className="footer__bottom">
          <div className="footer__contact">
            <p className="footer__address">Menistenplein 10, Stadskanaal</p>
            <p className="footer__phone"><a href="tel:+31613051313">06 13 05 13 13</a></p>
            <p className="footer__email"><a href="mailto:info@mingelmous.cafe">info@mingelmous.cafe</a></p>
          </div>
          <div className="footer__right">
            <p className="footer__social">Facebook · Instagram</p>
          </div>
        </div>
        <p className="footer__copy">&copy; {year} Cafe &apos;t Mingelmous</p>
        <p className="footer__legal">
          <Link href="/algemene-voorwaarden">Algemene voorwaarden</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/beheer/login" className="footer__beheer">Beheerders login</Link>
        </p>
      </div>
    </footer>
  );
}
