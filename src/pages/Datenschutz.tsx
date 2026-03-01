import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Datenschutz = () => {
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

        <h1 className="font-display text-4xl font-bold lg:text-5xl">Datenschutzerklärung</h1>

        <div className="mt-10 max-w-3xl space-y-8 font-body text-base leading-relaxed text-muted-foreground">
          <p>
            Wir freuen uns sehr über Ihr Interesse an unserem Schweizer Unternehmen. Datenschutz hat
            einen besonders hohen Stellenwert für die Geschäftsleitung der SJP-Development GmbH.
            Eine Nutzung der Internetseiten der SJP-Development GmbH ist grundsätzlich ohne jede
            Angabe personenbezogener Daten möglich. Sofern eine betroffene Person besondere Services
            unseres Unternehmens über unsere Internetseite in Anspruch nehmen möchte, könnte jedoch
            eine Verarbeitung personenbezogener Daten erforderlich werden. Ist die Verarbeitung
            personenbezogener Daten erforderlich und besteht für eine solche Verarbeitung keine
            gesetzliche Grundlage, holen wir generell eine Einwilligung der betroffenen Person ein.
          </p>

          <p>
            Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die
            datenschutzrechtlichen Bestimmungen des Bundes (Datenschutzgesetz, DSG) hat jede Person
            Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor Missbrauch ihrer
            persönlichen Daten. Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
            entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-foreground">
              Name und Anschrift des für die Verarbeitung Verantwortlichen
            </h2>
            <p>
              SJP Development GmbH
              <br />
              Elisabeth Brommer-Kern, Geschäftsführerin
              <br />
              Hafenweg 2
              <br />
              CH 8280 Kreuzlingen
            </p>
            <p className="mt-2">
              Tel.: +41 78 695 07 18
              <br />
              E-Mail:{" "}
              <a href="mailto:info@sjpdevelopment.ch" className="text-primary hover:underline">
                info@sjpdevelopment.ch
              </a>
              <br />
              Webseite:{" "}
              <a
                href="https://sjpdevelopment.ch"
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://sjpdevelopment.ch
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-foreground">
              Begriffsbestimmungen
            </h2>
            <p>
              Die Datenschutzerklärung der SJP-Development GmbH beruht auf den Begrifflichkeiten,
              die durch den Europäischen Richtlinien- und Verordnungsgeber beim Erlass der
              Datenschutz-Grundverordnung (DS-GVO) verwendet wurden.
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold text-foreground">a) Personenbezogene Daten</h3>
                <p>
                  Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte
                  oder identifizierbare natürliche Person beziehen.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">b) Betroffene Person</h3>
                <p>
                  Betroffene Person ist jede identifizierte oder identifizierbare natürliche Person,
                  deren personenbezogene Daten von dem für die Verarbeitung Verantwortlichen
                  verarbeitet werden.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">c) Verarbeitung</h3>
                <p>
                  Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte
                  Vorgang im Zusammenhang mit personenbezogenen Daten wie das Erheben, das Erfassen,
                  die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung, das
                  Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung,
                  Verbreitung oder eine andere Form der Bereitstellung, den Abgleich oder die
                  Verknüpfung, die Einschränkung, das Löschen oder die Vernichtung.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">d) Pseudonymisierung</h3>
                <p>
                  Pseudonymisierung ist die Verarbeitung personenbezogener Daten in einer Weise, auf
                  welche die personenbezogenen Daten ohne Hinzuziehung zusätzlicher Informationen
                  nicht mehr einer spezifischen betroffenen Person zugeordnet werden können.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  e) Verantwortlicher oder für die Verarbeitung Verantwortlicher
                </h3>
                <p>
                  Verantwortlicher ist die natürliche oder juristische Person, Behörde, Einrichtung
                  oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und
                  Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">f) Einwilligung</h3>
                <p>
                  Einwilligung ist jede von der betroffenen Person freiwillig für den bestimmten
                  Fall in informierter Weise und unmissverständlich abgegebene Willensbekundung, mit
                  der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie
                  betreffenden personenbezogenen Daten einverstanden ist.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-foreground">Cookies</h2>
            <p>
              Die Internetseiten der SJP-Development GmbH verwenden Cookies. Cookies sind
              Textdateien, welche über einen Internetbrowser auf einem Computersystem abgelegt und
              gespeichert werden. Durch den Einsatz von Cookies kann die SJP-Development GmbH den
              Nutzern dieser Internetseite nutzerfreundlichere Services bereitstellen. Die
              betroffene Person kann die Setzung von Cookies durch unsere Internetseite jederzeit
              mittels einer entsprechenden Einstellung des genutzten Internetbrowsers verhindern.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-foreground">
              Erfassung von allgemeinen Daten und Informationen
            </h2>
            <p>
              Die Internetseite der SJP-Development GmbH erfasst mit jedem Aufruf eine Reihe von
              allgemeinen Daten und Informationen. Diese allgemeinen Daten und Informationen werden
              in den Logfiles des Servers gespeichert. Bei der Nutzung dieser allgemeinen Daten und
              Informationen zieht die SJP-Development GmbH keine Rückschlüsse auf die betroffene
              Person. Die anonymen Daten der Server-Logfiles werden getrennt von allen durch eine
              betroffene Person angegebenen personenbezogenen Daten gespeichert.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-foreground">
              Rechte der betroffenen Person
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground">a) Recht auf Bestätigung</h3>
                <p>
                  Jede betroffene Person hat das Recht, von dem für die Verarbeitung
                  Verantwortlichen eine Bestätigung darüber zu verlangen, ob sie betreffende
                  personenbezogene Daten verarbeitet werden.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">b) Recht auf Auskunft</h3>
                <p>
                  Jede von der Verarbeitung personenbezogener Daten betroffene Person hat das Recht,
                  jederzeit unentgeltliche Auskunft über die zu seiner Person gespeicherten
                  personenbezogenen Daten und eine Kopie dieser Auskunft zu erhalten.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">c) Recht auf Berichtigung</h3>
                <p>
                  Jede betroffene Person hat das Recht, die unverzügliche Berichtigung sie
                  betreffender unrichtiger personenbezogener Daten zu verlangen.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  d) Recht auf Löschung (Recht auf Vergessen werden)
                </h3>
                <p>
                  Jede betroffene Person hat das Recht, von dem Verantwortlichen zu verlangen, dass
                  die sie betreffenden personenbezogenen Daten unverzüglich gelöscht werden, sofern
                  einer der gesetzlichen Gründe zutrifft und soweit die Verarbeitung nicht
                  erforderlich ist.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  e) Recht auf Einschränkung der Verarbeitung
                </h3>
                <p>
                  Jede betroffene Person hat das Recht, von dem Verantwortlichen die Einschränkung
                  der Verarbeitung zu verlangen, wenn eine der gesetzlichen Voraussetzungen gegeben
                  ist.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">f) Recht auf Datenübertragbarkeit</h3>
                <p>
                  Jede betroffene Person hat das Recht, die sie betreffenden personenbezogenen Daten
                  in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">g) Recht auf Widerspruch</h3>
                <p>
                  Jede betroffene Person hat das Recht, aus Gründen, die sich aus ihrer besonderen
                  Situation ergeben, jederzeit gegen die Verarbeitung sie betreffender
                  personenbezogener Daten Widerspruch einzulegen.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  h) Recht auf Widerruf einer datenschutzrechtlichen Einwilligung
                </h3>
                <p>
                  Jede betroffene Person hat das Recht, eine Einwilligung zur Verarbeitung
                  personenbezogener Daten jederzeit zu widerrufen.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-3 font-display text-xl font-semibold text-foreground">
              Rechtsgrundlage der Verarbeitung
            </h2>
            <p>
              Art. 6 I lit. a DS-GVO dient unserem Unternehmen als Rechtsgrundlage für
              Verarbeitungsvorgänge, bei denen wir eine Einwilligung für einen bestimmten
              Verarbeitungszweck einholen. Ist die Verarbeitung personenbezogener Daten zur
              Erfüllung eines Vertrags erforderlich, so beruht die Verarbeitung auf Art. 6 I lit. b
              DS-GVO. Unterliegt unser Unternehmen einer rechtlichen Verpflichtung, so basiert die
              Verarbeitung auf Art. 6 I lit. c DS-GVO.
            </p>
          </section>

          <p className="text-sm text-muted-foreground/60">
            Diese Datenschutzerklärung wurde durch den Datenschutzerklärungs-Generator der
            Cancellarius AG (Schweiz) erstellt in enger Kooperation mit der DGD Deutsche
            Gesellschaft für Datenschutz GmbH.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
