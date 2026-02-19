import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoSjp from "@/assets/logo-sjp.jpg";

const HeroSection = () => {
  const scrollToNewsletter = () => {
    document.getElementById("newsletter")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Navigation */}
      <nav className="container mx-auto flex items-center justify-between px-6 py-6">
        <img src={logoSjp} alt="SJP Development Logo" className="h-14 w-auto" />
        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          onClick={scrollToNewsletter}
        >
          Newsletter
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-6 pb-20 pt-12 lg:pb-28 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 font-body text-sm font-semibold uppercase tracking-widest text-accent">
              Coaching & Training
            </p>
            <h1 className="mb-6 font-display text-5xl font-bold leading-tight text-foreground lg:text-6xl xl:text-7xl">
              Professionell
              <br />
              <span className="text-primary">Online Wirken</span>
            </h1>
            <p className="mb-8 max-w-lg font-body text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Entfalte dein volles Potenzial in Videocalls, Online-Präsentationen und digitaler Kommunikation.
              Praxisnah, nachhaltig und mit Freude.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-semibold"
                onClick={scrollToNewsletter}
              >
                Gratis Guide sichern
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-base font-semibold"
                asChild
              >
                <a href="https://zeeg.me" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Kostenloses Gespräch buchen
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Image Side - Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="h-[420px] w-[420px] overflow-hidden rounded-full border-4 border-secondary bg-secondary lg:h-[480px] lg:w-[480px]">
                <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <div className="mx-auto mb-4 h-24 w-24 rounded-full bg-reed-green-dark/30" />
                    <p className="font-body text-sm">Foto von Elisabeth</p>
                    <p className="font-body text-xs text-muted-foreground">(Platzhalter)</p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-accent/10" />
              <div className="absolute -right-6 -top-6 h-16 w-16 rounded-full bg-primary/15" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
