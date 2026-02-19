import { motion } from "framer-motion";
import { Video, MessageCircle, Lightbulb } from "lucide-react";

const benefits = [
  {
    icon: Video,
    title: "Sicherheit in Videocalls",
    description:
      "Lerne, wie du in Online-Meetings souverän und authentisch auftrittst – mit Techniken, die sofort wirken.",
  },
  {
    icon: MessageCircle,
    title: "Wirkungsvolle Kommunikation",
    description:
      "Verbessere deine digitale Präsenz und Wirkung, damit deine Botschaft klar und überzeugend ankommt.",
  },
  {
    icon: Lightbulb,
    title: "Praxisnahe Tipps",
    description:
      "Erhalte wöchentliche Impulse und konkrete Strategien, die du direkt in deinem Arbeitsalltag umsetzen kannst.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="vorteile" className="bg-card py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">
            Deine Vorteile
          </p>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Was du <span className="text-primary">bekommst</span>
          </h2>
          <p className="mx-auto max-w-2xl font-body text-base text-muted-foreground sm:text-lg">
            Dein Weg zu mehr Wirkung und Präsenz in der digitalen Welt
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group rounded-2xl border border-border bg-background p-6 sm:p-8 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground sm:h-16 sm:w-16">
                <benefit.icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <h3 className="mb-3 font-display text-lg font-semibold text-foreground sm:text-xl">
                {benefit.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground sm:text-base">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
