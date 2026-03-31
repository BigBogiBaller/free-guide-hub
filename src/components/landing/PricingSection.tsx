import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <section id="angebote" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 text-sm font-medium text-primary mb-4">
            Angebote
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Das passende Format für Sie
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Schnupper-Webinare – Workshops – Individuelle Unterstützung
          </p>
          <Button
            size="lg"
            className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-6 text-base font-semibold"
            asChild
          >
            <a href="https://www.sjpdevelopment.ch/termine.html" target="_blank" rel="noopener noreferrer">
              Hier geht es zu den Terminen
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
