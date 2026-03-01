import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const AGB = () => {
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

        <h1 className="font-display text-4xl font-bold lg:text-5xl">
          Allgemeine Geschäftsbedingungen
        </h1>

        <p className="mt-4 font-body text-sm text-muted-foreground">
          SJP Development GmbH · Berneggstrasse 10a · CH – 8280 Kreuzlingen TG
        </p>

        <div className="mt-10 max-w-3xl space-y-8 font-body text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-foreground">
              1. Vertragsabschluss, Anmeldung, Leistungsbestätigung / Rechnung, Haftung
            </h2>
            <p>
              Mit Ihrer Anmeldung bieten Sie der SJPD GmbH den Abschluss eines Vertrages über
              diejenigen Leistungen verbindlich an, die Gegenstand Ihrer Anmeldung sind. Dabei kann
              es sich im Einzelnen handeln um:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-6">
              <li>ein Webseminar</li>
              <li>ein Präsenzseminar</li>
              <li>eine Coaching- oder Personaltraining-Leistung</li>
              <li>eine Fortbildung</li>
            </ul>
            <p className="mt-4">
              Die Anmeldung kann schriftlich, telefonisch, per Mail oder online über unser
              Buchungstool erfolgen. Sofern Sie die Anmeldung für ein Unternehmen vornehmen, teilen
              Sie uns dies bitte mit. Der Vertrag kommt mit unserer Bestätigung (Rechnung) zustande,
              die den Inhalt der Leistung bezeichnet.
            </p>
            <p className="mt-4">
              Sie erhalten eine Bestätigung, die die Art und den Inhalt der Leistung, den
              Veranstaltungstermin und gegebenenfalls den Veranstaltungsort bestätigt und die
              zugleich unsere Rechnung darstellt. Widersprechen Sie unserer Bestätigung nicht
              innerhalb von fünf Tagen nach Erhalt, gilt der bestätigte Inhalt als vereinbart.
            </p>
            <p className="mt-4">
              In den Preisen für Präsenzseminare inbegriffen sind die Seminarunterlagen, Getränke,
              Mittagessen (nur bei ganztägigen Veranstaltungen), Pausenverpflegung sowie ein
              Zertifikat.
            </p>
            <p className="mt-4">
              SJPD GmbH haftet im Rahmen der Sorgfaltspflichten ordentlicher Kaufleute für die
              sorgfältige Erbringung ihrer Leistungen. Soweit SJPD GmbH an der Erbringung ihrer
              Leistungen durch Umstände höherer Gewalt verhindert ist, wird sie erhaltene
              Vergütungen erstatten, schuldet darüber hinaus aber keine Abgeltung oder
              Schadenersatz.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-foreground">
              2. Stornobedingungen
            </h2>

            <h3 className="mt-4 mb-2 font-semibold text-foreground">
              2.1. Bei Webinaren, Online-Calls oder e-Workshops
            </h3>
            <p>
              Sie können Ihre Buchung jederzeit stornieren oder einen Ersatzteilnehmer stellen. Bei
              einem Storno von bis zu fünf Tagen vor Veranstaltungsbeginn werden sämtliche bereits
              geleisteten Zahlungen erstattet. Bei einem Storno von weniger als fünf Tagen vor
              Veranstaltungsbeginn ist eine Stornokostenpauschale von 100% des Teilnahmepreises
              geschuldet.
            </p>
            <p className="mt-3">
              Bei Abmeldung in Folge von Krankheit oder Unfall wird beim Vorliegen eines ärztlichen
              Zeugnisses eine Gutschrift erstellt. Bei Gruppen-Trainings mit mehreren
              Moduleinheiten finden keine Rückerstattung statt.
            </p>

            <h3 className="mt-4 mb-2 font-semibold text-foreground">
              2.2. Bei Präsenzseminaren
            </h3>
            <p>
              Die Durchführung steht unter dem Vorbehalt des Erreichens der Mindestteilnehmerzahl
              bis zum Stichtag von 30 Tagen vor Veranstaltungsbeginn. Bei einem Storno von bis zu 30
              Tagen vor Veranstaltungsbeginn werden sämtliche bereits geleisteten Zahlungen
              erstattet. Bei bis zu 14 Tagen: 50% Stornokostenpauschale. Bei weniger als 14 Tagen:
              80% Stornokostenpauschale.
            </p>

            <h3 className="mt-4 mb-2 font-semibold text-foreground">
              2.3. Bei Coaching oder Personaltraining-Leistungen
            </h3>
            <p>
              Coaching oder Personaltraining-Leistungen können bis 48 Stunden vor dem vereinbarten
              Beginn kostenfrei storniert werden. Umbuchungswünsche werden als Storno und Neubuchung
              behandelt.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-foreground">
              3. Datenschutz
            </h2>
            <p>
              Mit Ihrer Anmeldung erklären Sie Ihr Einverständnis mit der Be- und Verarbeitung
              Ihrer personenbezogenen Daten unter Beachtung der Bestimmungen des Schweizerischen
              Datenschutzgesetzes. SJPD GmbH verpflichtet sich, Ihre Daten vertraulich zu behandeln
              und nicht an Dritte weiterzugeben.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-foreground">
              4. Urheber- und Persönlichkeitsrechte
            </h2>
            <p>
              Die Leistungen der SJPD GmbH unterliegen dem Urheberrecht. Jede über die eigene
              persönliche Nutzung hinausgehende Vervielfältigung, Verbreitung oder sonstige
              Verwendung ist ausdrücklich untersagt. Video- und Tonaufnahmen sind nur mit dem
              Einverständnis der Teilnehmenden und der Veranstalterin gestattet.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-foreground">
              5. Schlussbestimmungen
            </h2>
            <p>
              Das vorliegende Vertragsverhältnis bestimmt sich nach Schweizerischem Recht.
              Erweiterungen oder Änderungen der Leistungsverpflichtungen bedürfen der schriftlichen
              Bestätigung durch die SJPD GmbH. Der Gerichtsstand bestimmt sich nach dem Sitz der
              SJPD GmbH.
            </p>
            <p className="mt-4 text-sm text-muted-foreground/60">
              Kreuzlingen, 15. Januar 2026
              <br />
              SJP Development GmbH – Berneggstrasse 10a, 8280 Kreuzlingen, Schweiz
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AGB;
