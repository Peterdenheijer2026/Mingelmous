import Link from "next/link";

export const metadata = {
  title: "Privacy",
  description: "Privacyverklaring van Cafe 't Mingelmous.",
};

export default function PrivacyPage() {
  return (
    <div className="legal-page">
      <header className="legal-page__header">
        <Link href="/" className="legal-page__back">← Terug naar home</Link>
        <Link href="/" className="legal-page__brand" aria-label="Home">Cafe &apos;t Mingelmous</Link>
      </header>

      <main className="legal-page__main">
        <h1>Privacyverklaring</h1>
        <p className="legal-page__updated">Laatst bijgewerkt: {new Date().toLocaleDateString("nl-NL")}</p>

        <section>
          <h2>1. Wie zijn wij</h2>
          <p>Cafe &apos;t Mingelmous, gevestigd aan Menistenplein 10, Stadskanaal, is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze privacyverklaring.</p>
        </section>

        <section>
          <h2>2. Welke gegevens verwerken wij</h2>
          <p>Wij verwerken alleen persoonsgegevens die u zelf verstrekt of die wij nodig hebben voor onze dienstverlening, bijvoorbeeld:</p>
          <ul>
            <li>Naam en contactgegevens (telefoon, e-mail) wanneer u contact met ons opneemt</li>
            <li>Gegevens die u achterlaat via de website of per e-mail</li>
          </ul>
        </section>

        <section>
          <h2>3. Doel en grondslag</h2>
          <p>Wij gebruiken uw gegevens om contact met u te onderhouden en, indien van toepassing, om te voldoen aan wettelijke verplichtingen (zoals administratie). De verwerking is gebaseerd op uw toestemming of een gerechtvaardigd belang (bijvoorbeeld het voeren van een café).</p>
        </section>

        <section>
          <h2>4. Bewaartermijn</h2>
          <p>Wij bewaren uw gegevens niet langer dan noodzakelijk. Contactgegevens bewaren wij zolang nodig voor de afhandeling en eventueel voor de wettelijk verplichte administratie. Daarna worden gegevens verwijderd of geanonimiseerd.</p>
        </section>

        <section>
          <h2>5. Delen met derden</h2>
          <p>Wij verkopen uw gegevens niet. Gegevens worden alleen gedeeld met derden indien dat nodig is voor onze dienstverlening (bijvoorbeeld een boekhoudprogramma of hosting) of op grond van de wet. Met deze partijen sluiten wij afspraken over beveiliging en vertrouwelijkheid.</p>
        </section>

        <section>
          <h2>6. Cookies en deze website</h2>
          <p>Onze website kan gebruikmaken van functionele cookies die strikt noodzakelijk zijn voor het gebruik van de site. Voor zover wij analytische of andere cookies gebruiken, informeren wij u daarover en vragen wij waar nodig uw toestemming.</p>
        </section>

        <section>
          <h2>7. Uw rechten</h2>
          <p>U heeft het recht om uw gegevens in te zien, te laten corrigeren of te laten verwijderen, en waar van toepassing bezwaar te maken of uw toestemming in te trekken. Stuur een verzoek naar ons contactadres. Binnen een maand reageren wij op uw verzoek. Heeft u een klacht over de verwerking van uw gegevens, dan kunt u deze voorleggen aan de Autoriteit Persoonsgegevens.</p>
        </section>

        <section>
          <h2>8. Contact</h2>
          <p>Voor vragen over deze privacyverklaring of over uw gegevens kunt u contact opnemen met Cafe &apos;t Mingelmous, Menistenplein 10, Stadskanaal, of per e-mail op het op de website vermelde adres.</p>
        </section>
      </main>

      <footer className="legal-page__footer">
        <Link href="/">Home</Link>
        <Link href="/algemene-voorwaarden">Algemene voorwaarden</Link>
        <p className="legal-page__copy">&copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
