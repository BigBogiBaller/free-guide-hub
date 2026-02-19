import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="h-[350px] w-[350px] overflow-hidden rounded-3xl bg-secondary lg:h-[420px] lg:w-[420px]">
                <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-reed-green-dark/30" />
                    <p className="font-body text-sm">Foto von Elisabeth</p>
                    <p className="font-body text-xs">(Platzhalter)</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-primary px-6 py-4 text-primary-foreground shadow-lg">
                <p className="font-display text-lg font-semibold">Sustainable · Joyful · Professional</p>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 font-body text-sm font-semibold uppercase tracking-widest text-accent">
              Über mich
            </p>
            <h2 className="mb-6 font-display text-3xl font-bold text-foreground lg:text-4xl">
              Elisabeth Brommer-Kern <span className="text-primary">M.A.</span>
            </h2>
            <p className="mb-4 font-body text-lg leading-relaxed text-muted-foreground">
              Als erfahrene Trainerin und Coach unterstütze ich Fach- und Führungskräfte dabei, 
              in der digitalen Welt professionell und authentisch aufzutreten.
            </p>
            <p className="mb-6 font-body text-lg leading-relaxed text-muted-foreground">
              Mit einem ganzheitlichen Ansatz verbinde ich Kommunikationsexpertise, 
              Präsenztraining und praktische Tools für den digitalen Arbeitsalltag. 
              Nachhaltig, mit Freude und auf den Punkt.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { number: "15+", label: "Jahre Erfahrung" },
                { number: "500+", label: "Teilnehmer:innen" },
                { number: "98%", label: "Zufriedenheit" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl font-bold text-primary lg:text-3xl">{stat.number}</p>
                  <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
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
