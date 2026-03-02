import Link from "next/link";

export const metadata = {
  title: "Algemene voorwaarden",
  description: "Algemene voorwaarden van Cafe 't Mingelmous.",
};

export default function AlgemeneVoorwaardenPage() {
  return (
    <div className="legal-page">
      <header className="legal-page__header">
        <Link href="/" className="legal-page__back">← Terug naar home</Link>
        <Link href="/" className="legal-page__brand" aria-label="Home">Cafe &apos;t Mingelmous</Link>
      </header>

      <main className="legal-page__main">
        <h1>Algemene voorwaarden</h1>
        <p className="legal-page__updated">Laatst bijgewerkt: {new Date().toLocaleDateString("nl-NL")}</p>

        <section>
          <h2>1. Toepasselijkheid</h2>
          <p>Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten tussen Cafe &apos;t Mingelmous (hierna: &quot;de horecaonderneming&quot;) en de gast/klant. Afwijkingen zijn alleen geldig indien schriftelijk overeengekomen.</p>
        </section>

        <section>
          <h2>2. Consumpties en betaling</h2>
          <p>Alle genoemde prijzen zijn inclusief btw, tenzij anders vermeld. De horecaonderneming aanvaardt contant en pinbetaling. Bij groepen kan een voorschot of aparte afrekening worden gevraagd.</p>
        </section>

        <section>
          <h2>3. Huisregels</h2>
          <p>Gasten worden geacht zich te houden aan de huisregels. De horecaonderneming is gerechtigd personen die de sfeer of veiligheid verstoren de toegang te weigeren of te verwijderen. Het is niet toegestaan eigen consumpties mee te nemen.</p>
        </section>

        <section>
          <h2>4. Aansprakelijkheid</h2>
          <p>De horecaonderneming is niet aansprakelijk voor diefstal of beschadiging van eigendommen van gasten, tenzij sprake is van opzet of grove schuld. Voor kleding en andere goederen die aan de garderobe worden afgegeven geldt een beperkte aansprakelijkheid volgens gangbare usance.</p>
        </section>

        <section>
          <h2>5. Klachten</h2>
          <p>Klachten dienen zo mogelijk ter plekke te worden gemeld. Schriftelijke klachten kunnen worden gericht aan de onderneming. Wij proberen binnen redelijke termijn te reageren.</p>
        </section>

        <section>
          <h2>6. Toepasselijk recht</h2>
          <p>Op deze voorwaarden is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement waar de onderneming is gevestigd.</p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>Cafe &apos;t Mingelmous, Menistenplein 10, Stadskanaal. Voor vragen over deze voorwaarden kunt u contact met ons opnemen.</p>
        </section>
      </main>

      <footer className="legal-page__footer">
        <Link href="/">Home</Link>
        <Link href="/privacy">Privacy</Link>
        <p className="legal-page__copy">&copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
