import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Play, Check } from "lucide-react";
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
import { useToast } from "@/hooks/use-toast";
import elisabethCasual from "@/assets/elisabeth-casual.png";

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
    await new Promise((r) => setTimeout(r, 1000));
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  return (
    <section className="relative overflow-hidden bg-primary pt-20 sm:pt-24">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.2em] text-secondary sm:text-sm">
              Coaching & Training
            </p>
            <h1 className="mb-6 font-display text-4xl font-bold leading-[1.1] text-primary-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
              Professionell
              <br />
              <span className="text-secondary">Online Wirken</span>
            </h1>
            <p className="mx-auto mb-8 max-w-lg font-body text-base leading-relaxed text-primary-foreground/80 sm:text-lg lg:mx-0">
              Entfalte dein volles Potenzial in Videocalls, Online-Präsentationen und digitaler Kommunikation. Praxisnah, nachhaltig und mit Freude.
            </p>

            {/* Stats row */}
            <div className="mb-8 flex justify-center gap-8 lg:justify-start">
              {[
                { number: "15+", label: "Jahre Erfahrung" },
                { number: "500+", label: "Teilnehmer:innen" },
                { number: "98%", label: "Zufriedenheit" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl font-bold text-secondary sm:text-3xl">{stat.number}</p>
                  <p className="font-body text-xs text-primary-foreground/60 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-6 text-base font-semibold shadow-lg"
                onClick={() => setDialogOpen(true)}
              >
                Gratis Guide sichern
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 py-6 text-base font-semibold"
                asChild
              >
                <a href="https://zeeg.me" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Gespräch buchen
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right: Elisabeth's Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-primary-foreground/10">
                <img
                  src={elisabethCasual}
                  alt="Elisabeth Brommer-Kern"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-card rounded-2xl px-5 py-3 shadow-xl border border-border">
                <p className="font-display text-sm font-semibold text-primary sm:text-base">
                  Sustainable · Joyful · Professional
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Video Section below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto max-w-3xl pb-20 sm:pb-28"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-video border-2 border-primary-foreground/10">
            <div className="flex h-full w-full items-center justify-center bg-foreground/90">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-110 cursor-pointer sm:h-20 sm:w-20">
                  <Play className="h-7 w-7 ml-1 sm:h-8 sm:w-8" />
                </div>
                <p className="font-body text-sm text-primary-foreground/80 sm:text-base">
                  Video von Elisabeth ansehen
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-10 py-6 text-lg font-semibold shadow-xl"
              onClick={() => setDialogOpen(true)}
            >
              Hol dir den Gratis Guide
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
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
