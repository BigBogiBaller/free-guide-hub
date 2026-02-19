import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const BookCallSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
      {/* Decorative circles */}
      <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-primary-foreground/5" />
      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary-foreground/5" />

      <div className="container relative mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground lg:text-5xl">
            Lass uns sprechen
          </h2>
          <p className="mx-auto mb-8 max-w-xl font-body text-lg text-primary-foreground/85">
            In einem kostenlosen Erstgespräch finden wir gemeinsam heraus, 
            wie du deine Online-Wirkung auf das nächste Level bringst.
          </p>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-6 text-lg font-semibold rounded-xl shadow-lg"
            asChild
          >
            <a href="https://zeeg.me" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-5 w-5" />
              Kostenloses Gespräch buchen
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BookCallSection;
