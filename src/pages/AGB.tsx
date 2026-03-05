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

        <h1 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
          Allgemeine Geschäftsbedingungen
        </h1>

        <p className="mt-4 font-body text-sm text-muted-foreground">
          SJPD GmbH · Berneggstrasse 10a · CH – 8280 Kreuzlingen TG
        </p>

        <div className="mt-10 max-w-3xl space-y-8 font-body text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground sm:text-xl">
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
              Sie uns dies bitte mit, falls es nicht über die Registrierung abgefragt wird. Der
              Vertrag kommt mit unserer Bestätigung (Rechnung) zustande, die den Inhalt der Leistung
              bezeichnet. Geben Sie Ihre Anmeldung für eine Gruppe von Teilnehmern ab, stehen Sie für
              deren Verpflichtungen wie für Ihre eigenen ein.
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
              Ihre Zahlungen sind zu den angegebenen Daten fällig und werden, falls Sie die Buchung
              über eine Kreditkarte vorgenommen haben, Ihrem Konto zum vereinbarten Termin belastet.
            </p>
            <p className="mt-4">
              SJPD GmbH haftet im Rahmen der Sorgfaltspflichten ordentlicher Kaufleute für die
              sorgfältige Erbringung ihrer Leistungen, auch soweit die Verpflichtungen ihrer
              Erfüllungsgehilfen betroffen sind. Die Veranstaltungen der SJPD GmbH geben den zum
              Redaktionsschluss der gebuchten Leistung gültigen wissenschaftlichen Standard wieder.
              Es besteht kein Anspruch auf Verbreitung oder Kommentierung von Lehrinhalten, die von
              diesem abweichen oder über diesen hinausgehen. Leistungen Dritter, die mit uns nicht
              vertraglich verbunden sind, sind von der Haftung der SJPD GmbH nicht umfasst
              (Beispiele: Eigenanreise zu Präsenzseminaren mit öffentlichen oder privaten
              Verkehrsmitteln).
            </p>
            <p className="mt-4">
              Soweit SJPD GmbH an der Erbringung ihrer Leistungen durch Umstände höherer Gewalt
              verhindert ist, wird sie erhaltene Vergütungen erstatten, schuldet darüber hinaus aber
              keine Abgeltung oder Schadenersatz.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground sm:text-xl">
              2. Stornobedingungen
            </h2>

            <h3 className="mt-4 mb-2 font-semibold text-foreground">
              2.1. Bei Webinaren, Online-Calls oder e-Workshops
            </h3>
            <p>
              Sie können Ihre Buchung jederzeit stornieren oder einen Ersatzteilnehmer stellen.
            </p>
            <p className="mt-3">
              Bei einem Storno von bis zu fünf Tagen vor Veranstaltungsbeginn werden sämtliche
              bereits geleisteten Zahlungen erstattet bzw. Sie sind frei von den eingegangenen
              Verpflichtungen. Bei einem Storno von weniger als fünf Tagen vor Veranstaltungsbeginn
              ist eine Stornokostenpauschale von 100% des Teilnahmepreises geschuldet bzw. wird gegen
              mögliche Zahlungen verrechnet.
            </p>
            <p className="mt-3">
              Sofern ein Teilnehmer von einer Warteliste aufgenommen werden kann, entfällt die
              Stornogebühr. Massgeblich für die Berechnung der Fristen ist der Eingang Ihrer
              Stornoerklärung bei der SJPD GmbH.
            </p>
            <p className="mt-3">
              Meldet sich ein Kunde bzw. Teilnehmer während der Veranstaltung ab bzw. verlässt er
              diese vorzeitig, hat er keinen Anspruch auf (anteilige) Rückerstattung der Entgelte.
            </p>
            <p className="mt-3">
              Bei Abmeldung in Folge von Krankheit oder Unfall wird beim Vorliegen eines ärztlichen
              Zeugnisses eine Gutschrift erstellt, mit der die gleiche Veranstaltung zu einem
              späteren Zeitpunkt besucht werden kann. Es besteht kein Anspruch auf Rückvergütungen
              in Geld.
            </p>
            <p className="mt-3">
              Bei Gruppen-Trainings mit mehreren Moduleinheiten finden keine Rückerstattung statt.
              Soweit möglich, werden Online-Aufnahmen des verpassten Moduls zur Verfügung gestellt.
            </p>

            <h3 className="mt-4 mb-2 font-semibold text-foreground">
              2.2. Bei Präsenzseminaren
            </h3>
            <p>
              Sofern Gegenstand unserer Leistung ein Präsenzseminar ist, steht die Durchführung der
              Veranstaltung unter dem Vorbehalt des Erreichens der Mindestteilnehmerzahl bis zum
              Stichtag von 30 Tagen vor Veranstaltungsbeginn. Wird die Veranstaltung von unserer
              Seite wegen Nichterreichens der Mindestteilnehmerzahl abgesagt, werden sämtliche
              bereits geleisteten Zahlungen ohne Abzug erstattet. Weitergehende Ansprüche wie auf
              Erfüllung oder Schadenersatz sind hingegen ausgeschlossen.
            </p>
            <p className="mt-3">
              Sie können Ihre Buchung jederzeit stornieren. Bei einem Storno von bis zu 30 Tagen vor
              Veranstaltungsbeginn werden sämtliche bereits geleisteten Zahlungen erstattet bzw. Sie
              sind frei von den eingegangenen Verpflichtungen. Bei einem Storno von bis zu 14 Tagen
              vor Veranstaltungsbeginn bleibt eine Stornokostenpauschale von 50% des
              Teilnahmepreises geschuldet bzw. wird gegen mögliche bereits geleistete Zahlungen
              verrechnet. Bei einem Storno von weniger als 14 Tagen vor Veranstaltungsbeginn bleibt
              eine Stornokostenpauschale von 80% des Teilnahmepreises geschuldet bzw. wird gegen
              mögliche Zahlungen verrechnet. Die Stornierung ist in der Form der Anmeldung zu
              erklären. Massgeblich für die Berechnung der Fristen ist der Eingang Ihrer
              Stornoerklärung bei der SJPD GmbH.
            </p>

            <h3 className="mt-4 mb-2 font-semibold text-foreground">
              2.3. Bei Coaching oder Personaltraining-Leistungen
            </h3>
            <p>
              Coaching oder Personaltraining-Leistungen können bis 48 Stunden vor dem vereinbarten
              Beginn kostenfrei storniert werden, woraufhin Ihnen alle bereits geleisteten Zahlungen
              erstattet werden. Bei dem Beginn von Leistungen, die an einem Montag beginnen, muss
              die Stornierung jedoch bis zum voraufgegangenen Freitag um 12h erklärt werden.
            </p>
            <p className="mt-3">
              Umbuchungswünsche von einer in eine andere Leistungsart werden als Storno und
              Neubuchung behandelt.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground sm:text-xl">
              3. Datenschutz
            </h2>
            <p>
              Mit Ihrer Anmeldung erklären Sie Ihr Einverständnis mit der Be- und Verarbeitung
              Ihrer personenbezogenen Daten unter Beachtung der Bestimmungen des Schweizerischen
              Datenschutzgesetzes. Gleichzeitig erklären Sie Ihr Einverständnis mit der Zusendung
              späterer Informationen im Zusammenhang mit unseren Leistungen, wobei Sie Ihr
              Einverständnis jederzeit widerrufen können. SJPD GmbH verpflichtet sich, Ihre Daten
              vertraulich zu behandeln und nicht an Dritte weiterzugeben, soweit es sich bei diesen
              nicht um Erfüllungs- oder Verrichtungsgehilfen handelt oder sie durch gesetzliche
              Vorschriften zur Weitergabe verpflichtet ist.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground sm:text-xl">
              4. Urheber- und Persönlichkeitsrechte
            </h2>
            <p>
              Die Leistungen der SJPD GmbH unterliegen dem Urheberrecht. Jede über die eigene
              persönliche Nutzung hinausgehende Vervielfältigung, Verbreitung oder sonstige
              Verwendung ist ausdrücklich untersagt, auch soweit diese durch soziale Medien erfolgt.
              Im Falle der Zuwiderhandlung steht der SJPD GmbH sowohl der Unterlassungs- als auch
              der Anspruch auf Herausgabe des Erlangten zu.
            </p>
            <p className="mt-4">
              Bei Präsenzveranstaltungen kann während der Veranstaltung fotografiert werden. Bitte
              beachten Sie, dass Aufnahmen von Personen, auch von Lehrpersonen, nur mit deren
              schriftlicher Zustimmung zulässig sind. Im Falle der Zuwiderhandlung steht sowohl der
              SJPD GmbH wie auch dem Betroffenen der Unterlassungs-, der Schadenersatz- und der
              Herausgabeanspruch zu.
            </p>
            <p className="mt-4">
              Video- und Tonaufnahmen sind nur mit dem Einverständnis der Teilnehmenden und der
              Veranstalterin gestattet. In einigen Trainings, Webinaren oder Seminaren werden zu
              Übungszwecken Video- und Tonaufnahmen gemacht. Mit der Anmeldung bestätigen die
              Teilnehmer, dass sie damit einverstanden sind. Diese Aufnahmen werden sieben Tage nach
              der Veranstaltung wieder gelöscht. Wenn der Kunde hiermit nicht einverstanden ist, kann
              er an bestimmten Gruppen-Trainings nicht teilnehmen. Hier empfiehlt sich ein
              Personal-Training.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-lg font-semibold text-foreground sm:text-xl">
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
