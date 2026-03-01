import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 py-24 lg:py-32">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Link>

        <h1 className="font-display text-4xl font-bold lg:text-5xl">Impressum</h1>

        <div className="mt-10 max-w-3xl space-y-8 font-body text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-foreground">
              Angaben gemäss UWG
            </h2>
            <p>
              SJP Development GmbH
              <br />
              Beratung – Bildung – Coaching
              <br />
              Hafenweg 2
              <br />
              CH – 8280 Kreuzlingen TG
            </p>
            <p className="mt-4">
              <a href="https://www.sjpdevelopment.ch" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                www.sjpdevelopment.ch
              </a>
              <br />
              <a href="mailto:info@sjpdevelopment.ch" className="text-primary hover:underline">
                info@sjpdevelopment.ch
              </a>
            </p>
            <p className="mt-4">
              Eingetragen im Handelsregister des Kantons Thurgau
              <br />
              UID- und MWST-Nummer: CHE-252.673.153
              <br />
              Geschäftsführerin: Elisabeth Brommer-Kern
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-foreground">Kontakt</h2>
            <p>
              Telefon DE: +41 79 570 03 43
              <br />
              Telefon CH: +49 176 228 34 228
              <br />
              E-Mail:{" "}
              <a href="mailto:info@sjpdevelopment.ch" className="text-primary hover:underline">
                info@sjpdevelopment.ch
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-foreground">
              Verantwortlich für den Inhalt
            </h2>
            <p>
              Elisabeth Brommer
              <br />
              Hafenweg 2
              <br />
              CH – 8280 Kreuzlingen TG
              <br />
              SCHWEIZ
            </p>
          </section>

          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-foreground">
              Haftung für Inhalte
            </h2>
            <p>
              Als Dienstanbieter sind wir gemäss UWG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Verpflichtungen zur Entfernung oder Sperrung der
              Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
              Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
              konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-foreground">
              Haftung für Links
            </h2>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
              der Verlinkung auf mögliche Rechtsverstösse überprüft. Rechtswidrige Inhalte waren
              zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
              nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
              umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-foreground">
              Urheberrecht
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen Schweizer Urheberrecht (URG). Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads
              und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
              gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
              werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als
              solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung
              aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
