import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import logoSjp from "@/assets/logo-sjp.jpg";

const HeroSection = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      toast({ title: "Bitte fülle alle Felder aus.", variant: "destructive" });
      return;
    }
    if (!privacy) {
      toast({ title: "Bitte akzeptiere die Datenschutzbestimmungen.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    // TODO: Brevo Edge Function integration
    await new Promise((r) => setTimeout(r, 1000));
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Navigation */}
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 sm:py-6">
        <img src={logoSjp} alt="SJP Development Logo" className="h-10 w-auto sm:h-14" />
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-xs sm:text-sm"
            asChild
          >
            <a href="https://zeeg.me" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-1.5 h-4 w-4" />
              <span className="hidden sm:inline">Gespräch buchen</span>
              <span className="sm:hidden">Buchen</span>
            </a>
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 pb-16 pt-8 sm:px-6 lg:pb-28 lg:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-widest text-accent sm:mb-4 sm:text-sm">
            Coaching & Training
          </p>
          <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            Professionell
            <br />
            <span className="text-primary">Online Wirken</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl font-body text-base leading-relaxed text-muted-foreground sm:mb-10 sm:text-lg lg:text-xl">
            Entfalte dein volles Potenzial in Videocalls, Online-Präsentationen und digitaler Kommunikation.
            Praxisnah, nachhaltig und mit Freude.
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mb-10 max-w-3xl sm:mb-12"
        >
          <div className="relative overflow-hidden rounded-2xl border-2 border-secondary bg-anthracite shadow-xl aspect-video">
            {/* Video Placeholder */}
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-110 cursor-pointer sm:h-20 sm:w-20">
                  <Play className="h-7 w-7 ml-1 sm:h-8 sm:w-8" />
                </div>
                <p className="font-body text-sm text-muted-foreground sm:text-base">
                  Video von Elisabeth
                </p>
                <p className="font-body text-xs text-muted-foreground/70">(Platzhalter)</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA under video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto flex max-w-xl flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            size="lg"
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 text-base font-semibold sm:w-auto"
            onClick={() => setDialogOpen(true)}
          >
            Gratis Guide sichern
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-base font-semibold sm:w-auto"
            asChild
          >
            <a href="https://zeeg.me" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-5 w-5" />
              Kostenloses Gespräch buchen
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z" fill="white" />
        </svg>
      </div>

      {/* Newsletter Popup Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="mx-4 max-w-md rounded-2xl sm:mx-auto">
          {isSuccess ? (
            <div className="py-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                <Check className="h-7 w-7 text-primary" />
              </div>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl font-bold text-foreground">
                  Vielen Dank!
                </DialogTitle>
                <DialogDescription className="mt-2 font-body text-muted-foreground">
                  Bitte prüfe dein E-Mail-Postfach und bestätige deine Anmeldung,
                  um deinen kostenlosen Guide zu erhalten.
                </DialogDescription>
              </DialogHeader>
              <Button
                className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => {
                  setDialogOpen(false);
                  setIsSuccess(false);
                  setFirstName("");
                  setLastName("");
                  setEmail("");
                  setPrivacy(false);
                }}
              >
                Schließen
              </Button>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl font-bold text-foreground">
                  Hol dir deinen Gratis Guide
                </DialogTitle>
                <DialogDescription className="font-body text-muted-foreground">
                  Melde dich an und erhalte deinen kostenlosen Guide für professionelles Online-Auftreten.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="mt-2 space-y-4">
                <Input
                  placeholder="Vorname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="h-12 rounded-xl bg-card font-body text-base"
                  maxLength={100}
                />
                <Input
                  placeholder="Nachname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="h-12 rounded-xl bg-card font-body text-base"
                  maxLength={100}
                />
                <Input
                  type="email"
                  placeholder="E-Mail-Adresse"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-xl bg-card font-body text-base"
                  maxLength={255}
                />
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacy-dialog"
                    checked={privacy}
                    onCheckedChange={(checked) => setPrivacy(checked === true)}
                    className="mt-1"
                  />
                  <label
                    htmlFor="privacy-dialog"
                    className="cursor-pointer font-body text-sm leading-relaxed text-muted-foreground"
                  >
                    Ich akzeptiere die{" "}
                    <a href="#" className="text-accent underline hover:no-underline">
                      Datenschutzbestimmungen
                    </a>
                    . Abmeldung jederzeit möglich.
                  </label>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-base font-semibold rounded-xl"
                >
                  {isSubmitting ? "Wird gesendet..." : "Jetzt Guide sichern"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>
              </form>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
