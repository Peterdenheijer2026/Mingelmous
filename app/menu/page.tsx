import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Menu",
  description: "Menu van Cafe 't Mingelmous.",
};

export default function MenuPage() {
  return (
    <>
      <SiteHeader />
      <main className="subpage-main">
        <section className="subpage-section">
          <h1>Menu</h1>
          <p>Deze pagina wordt nog ingevuld.</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
