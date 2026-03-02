import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Contact",
  description: "Contactgegevens van Cafe 't Mingelmous.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="subpage-main">
        <section className="subpage-section">
          <h1>Contact</h1>
          <p>Deze pagina wordt nog ingevuld.</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
