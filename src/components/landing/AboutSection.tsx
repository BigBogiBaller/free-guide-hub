import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import elisabethPortrait from "@/assets/elisabeth-portrait-2.png";

const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="ueber-mich" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-80 sm:w-80 sm:h-96 lg:w-[380px] lg:h-[450px] overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={elisabethPortrait}
                  alt="Elisabeth Brommer-Kern"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl bg-secondary" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">
              Über mich
            </p>
            <h2 className="mb-6 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Elisabeth <span className="text-primary">Brommer-Kern</span>
            </h2>
            <p className="mb-4 font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
              Ich bin Trainerin, Speakerin und Autorin von „Professionell Online Wirken". 
              In den letzten Jahren habe ich tausende Menschen in Online-Veranstaltungen begleitet — 
              von kleinen Teams bis zu globalen Change-Projekten.
            </p>
            <p className="mb-8 font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
              Meine Mission: Menschen dabei unterstützen, authentisch, souverän und wirkungsvoll online aufzutreten.
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8">
              {[
                { number: "20+", label: "Jahre Erfahrung" },
                { number: "8.000+", label: "Teilnehmende" },
                { number: "98%", label: "Zufriedenheit" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-card border border-border p-4 text-center">
                  <p className="font-display text-xl font-bold text-primary sm:text-2xl lg:text-3xl">{stat.number}</p>
                  <p className="font-body text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={() => setExpanded(!expanded)}
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-semibold px-8"
            >
              {expanded ? "Weniger anzeigen" : "Mehr über mich erfahren"}
              {expanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
            </Button>
          </motion.div>
        </div>

        {/* Expanded Bio */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-12 lg:mt-16 max-w-4xl mx-auto space-y-8">
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4 sm:text-3xl">
                    Wo ich herkomme und was mich auszeichnet
                  </h3>
                  <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
                    <p>
                      Ursprünglich komme ich aus der Nähe von Darmstadt und bin als jüngstes von vier Kindern in einer Familie mit drei Brüdern aufgewachsen. Musik war schon immer ein zentraler Bestandteil meines Lebens, weshalb ich in Basel ein erfolgreiches Musikstudium absolvierte. Mein Wissensdurst brachte mich zu einem zweiten Studium in Musikpädagogik und Wirtschaft sowie Informatik (Grundstudium), das ich 1994 mit dem Magistra Artium abschloss.
                    </p>
                    <p>
                      Mein beruflicher Werdegang ist geprägt von meiner Leidenschaft für Administration und Organisation; ich strebe stets danach, Kommunikation und Zusammenarbeit zu fördern. In verschiedenen Führungspositionen im Kulturbereich sowie im Management habe ich wertvolle Erfahrungen gesammelt. Als Lehrbeauftragte an Business-Schulen gebe ich meine berufspraktische Erfahrungen in den Fächern Kommunikation in Deutsch, Eventmanagement, Arbeitsorganisation und Zeitmanagement sowie Projektmanagement weiter. Zuletzt unterrichtete ich als IT-Trainer für Microsoft 365 und habe in kurzen und knackigen Online-Trainings mehrere Tausend Mitarbeitende erreicht.
                    </p>
                    <p>
                      Mein Engagement für Nachhaltigkeit zeigt sich besonders in einem Pilotprojekt für nachhaltige Business-Meetings, das ich initiiert habe. Gemeinsam mit Prof. Ulrich Holzbaur habe ich den Quick Guide für nachhaltige Business-Meetings und -Events verfasst, der 2022 veröffentlicht wurde.
                    </p>
                    <p>
                      Ausgestattet mit solch vielfältigem Wissen und reichlich Erfahrung, teile ich mein Know-how in Trainings, Beratungen, Coachings und Mentoring.
                    </p>
                    <p>
                      Heute lebe ich mit meinem Ehemann in Kreuzlingen am Bodensee und genieße es, in den Bergen zu wandern, Ski zu fahren oder in ruhigen Stunden zu lesen und zu schreiben.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-display text-xl font-bold text-foreground mb-3 sm:text-2xl">Studien</h4>
                  <ul className="space-y-2 font-body text-base text-muted-foreground sm:text-lg list-disc list-inside">
                    <li>Musikpädagogik, Wirtschaftswissenschaften, Informatik (Nebenfach) in Basel und Oldenburg, Magistra Artium (1994)</li>
                    <li>Studium der Musik in Darmstadt, Zürich, Basel, Lehr- und Konzertreifediplom (1989, 1991)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-display text-xl font-bold text-foreground mb-3 sm:text-2xl">Weitere Qualifikationen</h4>
                  <ul className="space-y-2 font-body text-sm text-muted-foreground sm:text-base list-disc list-inside">
                    <li>Certified Project Manager (GMP) IPMA Level C, gültig bis 13.02.2026</li>
                    <li>Certified Project Management Associate IPMA Level D, gültig bis 29.10.2025</li>
                    <li>Eventcontrolling – Webinar bei Prof. Dr. Hans Rück, 2020</li>
                    <li>Nachhaltiges Eventmanagement nach ISO 20121:2012, 2020</li>
                    <li>Beauftragte Nachhaltiges Eventmanagement nach ISO 20121, 2020</li>
                    <li>Manager für nachhaltige Events, Gutcert Akademie, Berlin, 2019</li>
                    <li>5S-Auditor – tqm – Total Quality Management, 2019</li>
                    <li>SharePoint-Administration, 2018</li>
                    <li>SVEB 1 Zertifikat – Lernveranstaltungen mit Erwachsenen durchführen</li>
                    <li>Zeitmanagement bei Prof. Lothar Seiwert, Heidelberg, 2015</li>
                    <li>Systemisches Lösungsorientiertes Coaching, zertifiziert als Coach, 2013</li>
                    <li>Lehrgang „Clinical Trial Management", Zürich, 2010</li>
                    <li>Qualitätsmanagement ISO 9000 ff. – Qualitätsbeauftragte, Qualitätsmanagerin und Fach-Auditorin, 2006</li>
                    <li>Diverse Weiterbildungen im Bereich Presse- und Öffentlichkeitsarbeit, EDV etc.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutSection;