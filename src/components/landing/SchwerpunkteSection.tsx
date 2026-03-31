import { motion } from "framer-motion";

const schwerpunkte = [
  {
    label: "Schwerpunkt 1 — Professionell online wirken",
    tags: [
      { text: "Professionell online wirken", highlight: true },
      { text: "Elevator Pitch & Selbstpräsentation", highlight: false },
      { text: "Hintergrund und Setup im Video-Call", highlight: false },
      { text: "Souveränes Auftreten vor der Kamera", highlight: false },
      { text: "Future Skills", highlight: false },
    ],
  },
  {
    label: "Schwerpunkt 2 — Meetings planen und Participant Journey gestalten",
    tags: [
      { text: "Participant Journey", highlight: true },
      { text: "Online-Meetings und Webinare strukturieren", highlight: false },
      { text: "Nachhaltige Business-Meetings und -Events", highlight: false },
      { text: "Moderation und Dramaturgie", highlight: false },
    ],
  },
  {
    label: "Weiteres",
    tags: [
      { text: "Effizientes Arbeiten mit M365", highlight: false },
      { text: "Büro- und Arbeitsorganisation", highlight: false },
      { text: "Teams, SharePoint und digitale Abläufe", highlight: false },
    ],
  },
];

const SchwerpunkteSection = () => {
  return (
    <section className="bg-[hsl(var(--light-blue))] py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-accent sm:text-4xl lg:text-5xl">
            Schwerpunkte und Themen
          </h2>
          <p className="mx-auto max-w-2xl font-body text-base text-muted-foreground sm:text-lg">
            Diese Inhalte deckt der Newsletter ab:
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-10">
          {schwerpunkte.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.15em] text-accent">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span
                    key={tag.text}
                    className={`inline-block rounded-full px-4 py-2 font-body text-sm ${
                      tag.highlight
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "bg-card border border-border text-foreground"
                    }`}
                  >
                    {tag.text}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchwerpunkteSection;
