import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Cocktails by Twan",
  description: "Cocktail of the Month bij Cafe 't Mingelmous.",
};

export default function CocktailsByTwanPage() {
  return (
    <>
      <SiteHeader />
      <main className="subpage-main">
        <section className="subpage-section">
          <h1>Cocktails by Twan</h1>
          <p>Deze pagina wordt nog ingevuld.</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
