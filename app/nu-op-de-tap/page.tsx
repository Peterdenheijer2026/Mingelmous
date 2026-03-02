import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata = {
  title: "Nu op de tap",
  description: "Welke bieren er nu op de tap staan bij Cafe 't Mingelmous.",
};

export default function NuOpDeTapPage() {
  return (
    <>
      <SiteHeader />
      <main className="subpage-main">
        <section className="subpage-section">
          <h1>Nu op de tap</h1>
          <p>Deze pagina wordt nog ingevuld.</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
