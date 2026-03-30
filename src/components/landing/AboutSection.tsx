import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
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
              className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-semibold px-8"
              asChild
            >
              <a href="https://sjpdevelopment.ch/ueber-mich/" target="_blank" rel="noopener noreferrer">
                Mehr über mich erfahren
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
