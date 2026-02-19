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
    <section className="bg-card py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground lg:text-4xl">
            Was du bekommst
          </h2>
          <p className="mx-auto max-w-2xl font-body text-lg text-muted-foreground">
            Dein Weg zu mehr Wirkung und Präsenz in der digitalen Welt
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group rounded-2xl border border-border bg-background p-8 text-center transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <benefit.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="font-body leading-relaxed text-muted-foreground">
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
