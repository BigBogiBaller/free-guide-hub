import { motion } from "framer-motion";
import elisabethPortrait from "@/assets/elisabeth-portrait-2.png";

const AboutSection = () => {
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
              {/* Decorative accent */}
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
              Als erfahrene Trainerin und Coach unterstütze ich Fach- und Führungskräfte dabei,
              in der digitalen Welt professionell und authentisch aufzutreten.
            </p>
            <p className="mb-8 font-body text-base leading-relaxed text-muted-foreground sm:text-lg">
              Mit einem ganzheitlichen Ansatz verbinde ich Kommunikationsexpertise,
              Präsenztraining und praktische Tools für den digitalen Arbeitsalltag.
              Nachhaltig, mit Freude und auf den Punkt.
            </p>

            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { number: "15+", label: "Jahre Erfahrung" },
                { number: "500+", label: "Teilnehmer:innen" },
                { number: "98%", label: "Zufriedenheit" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-card border border-border p-4 text-center">
                  <p className="font-display text-xl font-bold text-primary sm:text-2xl lg:text-3xl">{stat.number}</p>
                  <p className="font-body text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
