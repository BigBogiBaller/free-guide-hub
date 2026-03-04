import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import elisabethPortrait3 from "@/assets/elisabeth-portrait-3.png";

const BookCallSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
      {/* Decorative */}
      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary-foreground/5" />
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary-foreground/5" />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left lg:max-w-xl"
          >
            <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              Lass uns sprechen
            </h2>
            <p className="mb-8 font-body text-base text-primary-foreground/80 sm:text-lg">
              In einem kostenlosen Erstgespräch finden wir gemeinsam heraus,
              wie Sie Ihre Online-Wirkung auf das nächste Level bringen.
            </p>
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-10 py-6 text-lg font-semibold shadow-xl"
              asChild
            >
              <a href="/buchen">
                <Calendar className="mr-2 h-5 w-5" />
                Kostenloses Gespräch buchen
              </a>
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary-foreground/20 shadow-2xl">
              <img
                src={elisabethPortrait3}
                alt="Elisabeth Brommer-Kern"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookCallSection;
