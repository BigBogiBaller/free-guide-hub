import { motion } from "framer-motion";
import { Clock, Star, CalendarDays, Users } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Regelmässige Impulse",
    description: "Kompakte Tipps für Ihren Berufsalltag — ohne grossen Zeitaufwand lesbar.",
  },
  {
    icon: Star,
    title: "Praktisch & umsetzbar",
    description: "Konkrete Anregungen, die Sie sofort in Meetings, Calls und Ihrem Arbeitsalltag einsetzen können.",
  },
  {
    icon: CalendarDays,
    title: "Frühe Termininfos",
    description: "Abonnentinnen und Abonnenten erfahren als Erste von neuen Webinaren, Workshops und freien Plätzen.",
  },
  {
    icon: Users,
    title: "Für Menschen mit Wirkung",
    description: "Inhalte für Fach- und Führungskräfte, Teams, HR und alle, die professioneller kommunizieren möchten.",
  },
];

const WasErwartetSection = () => {
  return (
    <section className="bg-muted py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-accent sm:text-4xl lg:text-5xl">
            Was Sie erwartet
          </h2>
          <p className="mx-auto max-w-2xl font-body text-base text-muted-foreground sm:text-lg">
            Kein Theorie-Overload. Nur das, was Sie wirklich weiterbringt.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl bg-card p-6 sm:p-8 shadow-sm border border-border ${index === 3 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WasErwartetSection;
