import { motion } from "framer-motion";
import { Video, Users, CalendarDays, Clock, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Video,
    title: "Professionell online auftreten",
    description: "Wirkung, Technik und Kommunikation im Video-Call — damit Ihre Kompetenz auch online sichtbar wird.",
    highlighted: true,
  },
  {
    icon: Users,
    title: "Meetings und Participant Journey",
    description: "Wie Sie Meetings, Webinare und Events so planen, dass alle Beteiligten wirklich einbezogen sind — von der Einladung bis zum Abschluss.",
    highlighted: true,
  },
  {
    icon: CalendarDays,
    title: "Frühe Termininfos",
    description: "Als Erste erfahren Sie von neuen Webinaren, Workshops und freien Plätzen — bevor sie öffentlich ausgeschrieben werden.",
    highlighted: false,
  },
  {
    icon: Clock,
    title: "Kompakt und sofort lesbar",
    description: "Jede Ausgabe ist so aufgebaut, dass Sie den Kern in wenigen Minuten erfassen und direkt anwenden können.",
    highlighted: false,
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
            Kein theoretischer Überblick — nur das, was Sie in Ihrer täglichen Arbeit wirklich brauchen.
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
              className={`rounded-2xl bg-card p-6 sm:p-8 shadow-sm border ${
                item.highlighted ? "border-primary/40 border-2" : "border-border"
              }`}
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

          {/* P.S. Kachel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl bg-muted p-6 sm:p-8 shadow-sm border-2 border-dashed border-accent/30 sm:col-span-2 lg:col-span-1"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <p className="mb-1 font-body text-sm font-semibold italic text-accent">P.S.</p>
            <h3 className="mb-2 font-display text-lg font-bold text-foreground">
              Der Newsletter, den Sie irgendwann nicht mehr brauchen
            </h3>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">
              Nach drei Monaten können Sie selbst entscheiden, ob Sie ein Thema in einem Training vertiefen möchten — oder ob Sie genug wissen. Wir erinnern Sie daran.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WasErwartetSection;
