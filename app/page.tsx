import Link from "next/link";
import HeroCarousel from "./components/HeroCarousel";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero loopt tot boven; menubalk ligt eroverheen */}
        <section className="hero hero--kramer hero--with-carousel">
          <HeroCarousel />
          <div className="hero__kramer-bg" aria-hidden="true" />
        </section>

        {/* Introtekst */}
        <section id="welkom" className="intro intro--kramer">
          <div className="intro__inner">
            <div className="intro__line" aria-hidden="true" />
            <h2 className="intro__title">BIJ &apos;T MINGELMOUS</h2>
            <p className="intro__lead">
              Bij Café-Bar &apos;t Mingelmous draait alles om gezelligheid, speciaalbier en samenkomen. Een plek waar stamgasten, sportteams, vrienden en collega&apos;s elkaar vinden aan de bar of op het terras.
            </p>
            <p className="intro__lead">
              Binnen voelt als een echte bruine kroeg: warme kleuren, houten tafels, muziek en een bar waar altijd wat gebeurt. Buiten hebben we een ruim terras midden in het centrum – ideaal voor een zonnige middag of lange zomeravond.
            </p>
            <p className="intro__lead">
              Of je nu langskomt voor een snelle borrel, een heerlijke avond of een speciaalbiermiddag: bij &apos;t Mingelmous ben je welkom.
            </p>
          </div>
        </section>

        {/* Menu-stappen: Dranken, Cocktails, Borrelhapjes – tekst, lijntje zo breed als foto, foto los */}
        <section id="menu" className="menu-steps menu-steps--kramer">
          <div className="menu-steps__inner">
            <article className="menu-steps__item">
              <div className="menu-steps__head">
                <h2 className="menu-steps__title">Dranken</h2>
                <Link href="#menu" className="menu-steps__link">Bekijk de drankkaart →</Link>
              </div>
              <div className="menu-steps__line-under" aria-hidden="true" />
              <div className="menu-steps__img-wrap">
                <img src="/dranken.jpg" alt="Dranken" className="menu-steps__img" />
              </div>
            </article>
            <article className="menu-steps__item">
              <div className="menu-steps__head">
                <h2 className="menu-steps__title">Cocktails</h2>
                <Link href="#menu" className="menu-steps__link">Bekijk de cocktailkaart →</Link>
              </div>
              <div className="menu-steps__line-under" aria-hidden="true" />
              <div className="menu-steps__img-wrap">
                <img src="/cocktails.jpg" alt="Cocktails" className="menu-steps__img" />
              </div>
            </article>
            <article className="menu-steps__item">
              <div className="menu-steps__head">
                <h2 className="menu-steps__title">Borrelhapjes</h2>
                <Link href="#menu" className="menu-steps__link">Bekijk de borrelkaart →</Link>
              </div>
              <div className="menu-steps__line-under" aria-hidden="true" />
              <div className="menu-steps__img-wrap">
                <img src="/borrelhapjes.jpg" alt="Borrelhapjes" className="menu-steps__img" />
              </div>
            </article>
          </div>
        </section>

        {/* Cocktails by Twan: foto links, tekst + knop rechts – zelfde uitlijning als menu-stappen */}
        <section id="ruimte" className="cta-split cta-split--kramer">
          <div className="cta-split__inner">
            <div className="cta-split__img-wrap">
              <img src="/cocktail-of-the-month-twan.png" alt="Cocktails by Twan" className="cta-split__img" />
            </div>
            <div className="cta-split__content">
            <h2 className="cta-split__title">Cocktails by Twan</h2>
            <p className="cta-split__subtitle">Speciale cocktailavonden in &apos;t Mingelmous</p>
            <p className="cta-split__text">
              Elke maand creëert Twan een unieke cocktail die exclusief in die maand verkrijgbaar is. Geen standaard drankje, maar een verrassende combinatie van smaken, perfect in balans en met zorg samengesteld. Of je nu houdt van fris en fruitig, kruidig en spannend of juist zacht en verfijnd — elke creatie vertelt zijn eigen verhaal.
            </p>
            <p className="cta-split__text">
              Ben je op zoek naar een unieke avond met verrassende cocktails? Dan zit je hier goed. De Cocktail of the Month is dé reden om langs te komen, iets nieuws te proeven en je te laten verrassen.
            </p>
            <Link href="#contact" className="btn btn--gold cta-split__btn">Cocktails by Twan</Link>
            </div>
          </div>
        </section>

        {/* Nu op de tap: zelfde opbouw als Cocktails by Twan, maar tekst links en afbeelding rechts */}
        <section id="werken" className="cta-split cta-split--kramer cta-split--reverse">
          <div className="cta-split__inner">
            <div className="cta-split__content">
              <h2 className="cta-split__title">Nu op de tap</h2>
              <p className="cta-split__subtitle">Welke biertjes er nu getapt worden</p>
              <p className="cta-split__text">
                Welk speciaalbiertje staat er vandaag op de tap? Hier zie je in één oogopslag alle bieren die we nu schenken. Van pils tot speciaal, van lokaal tot internationaal — altijd vers en goed getapt.
              </p>
              <p className="cta-split__text">
                De tap wisselt regelmatig, dus er is altijd iets nieuws te ontdekken. Kom langs en proef wat er staat.
              </p>
              <Link href="#menu" className="btn btn--gold cta-split__btn">Nu op de tap</Link>
            </div>
            <div className="cta-split__img-wrap">
              <img src="/nu-op-de-tap.png" alt="Nu op de tap" className="cta-split__img" />
            </div>
          </div>
        </section>

        {/* Sluitende tekst */}
        <section className="outro outro--kramer">
          <div className="outro__inner">
            <div className="outro__line" aria-hidden="true" />
            <p>Kom langs en ontdek. Een plek waar elk bezoek een nieuw verhaal creëert. We zien je graag.</p>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
