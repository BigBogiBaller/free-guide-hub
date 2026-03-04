import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqItems = [
  {
    id: "item-1",
    question: "Für wen ist der Newsletter geeignet?",
    answer:
      "Für alle, die online professionell auftreten möchten: Coaches & Trainer:innen, Führungskräfte & Mitarbeitende, Berater:innen & Speaker, Selbstständige & Expert:innen. Wenn du online präsent bist, ist deine Wirkung dein wichtigstes Werkzeug.",
  },
  {
    id: "item-2",
    question: "Was erhalte ich nach der Anmeldung?",
    answer:
      "Sie erhalten sofort Ihre kostenlose Checkliste \u201EIhr perfekter Start in jedes Online-Meeting\u201C per E-Mail. Danach bekommen Sie regelmäßig Impulse für Stimme, Körpersprache, Mindset und Technik — klar strukturiert und sofort anwendbar.",
  },
  {
    id: "item-3",
    question: "Wie oft erscheint der Newsletter?",
    answer:
      "Der Impuls-Newsletter erscheint regelmäßig mit kurzen, praxisnahen Tipps und Übungen. Keine Flut an E-Mails — nur wertvolle Impulse, die Sie wirklich weiterbringen.",
  },
  {
    id: "item-4",
    question: "Kann ich mich jederzeit abmelden?",
    answer:
      "Ja, selbstverständlich. In jeder E-Mail finden Sie einen Abmelde-Link. Ein Klick genügt — ganz ohne Angabe von Gründen.",
  },
  {
    id: "item-5",
    question: "Was ist das kostenlose Erstgespräch?",
    answer:
      "In einem unverbindlichen 30-Minuten-Gespräch finden wir gemeinsam heraus, wie Sie Ihre Online-Wirkung auf das nächste Level bringen. Individuell, persönlich und ohne Verkaufsdruck.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">
              Häufige Fragen
            </p>
            <h2 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Ihre Fragen, <span className="text-primary">beantwortet</span>
            </h2>
            <p className="mx-auto max-w-xl font-body text-base text-muted-foreground sm:text-lg">
              Hier finden Sie Antworten auf die häufigsten Fragen rund um den Newsletter, die Checkliste und das Erstgespräch.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="rounded-2xl border border-border bg-card px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="font-display text-base font-semibold text-foreground hover:no-underline sm:text-lg py-5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-muted-foreground pb-5 text-sm sm:text-base leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
