import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Play, Check, Star } from "lucide-react";
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
    <section className="relative overflow-hidden bg-primary pt-20 sm:pt-24 min-h-[100svh]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />

      <div className="container relative mx-auto px-4 sm:px-6">
        <div className="grid items-end gap-0 lg:grid-cols-2 lg:gap-0 min-h-[calc(100svh-6rem)]">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center py-12 sm:py-16 lg:py-20 text-center lg:text-left"
          >
            <h1 className="mb-6 font-display text-[2.75rem] font-bold leading-[1.05] text-primary-foreground sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Professionell
              <br />
              <span className="text-secondary">Online Wirken</span>
            </h1>
            <p className="mx-auto mb-10 max-w-md font-body text-base leading-relaxed text-primary-foreground/75 sm:text-lg lg:mx-0 lg:max-w-lg">
              Entfalte dein volles Potenzial in Videocalls, Online-Präsentationen und digitaler Kommunikation. Praxisnah, nachhaltig und mit Freude.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start mb-12 lg:mb-16">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-10 py-7 text-base font-semibold shadow-lg inline-flex items-center gap-2"
                onClick={() => setDialogOpen(true)}
              >
                <span className="h-2 w-2 rounded-full bg-accent-foreground/80" />
                Gratis Guide sichern
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex flex-col items-center gap-3 lg:items-start">
              <div className="flex items-center gap-4">
                {/* Avatar stack */}
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-9 w-9 rounded-full border-2 border-primary bg-secondary/60 flex items-center justify-center"
                    >
                      <span className="font-body text-xs font-semibold text-foreground/70">
                        {["E", "M", "S"][i - 1]}
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-primary-foreground">
                    500+ zufriedene Teilnehmer:innen
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
                <span className="ml-1 font-body text-sm text-primary-foreground/70">
                  4.9 (500+) · Excellent
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Elisabeth's Image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end items-end self-end"
          >
            {/* Decorative circles behind the image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] lg:w-[520px] lg:h-[520px]">
                {/* Elliptical rings */}
                <div className="absolute inset-0 rounded-full border-[3px] border-secondary/30 rotate-[15deg] scale-x-[1.3]" />
                <div className="absolute inset-4 rounded-full border-[3px] border-secondary/20 -rotate-[10deg] scale-x-[1.4]" />
                <div className="absolute inset-8 rounded-full border-[3px] border-secondary/15 rotate-[25deg] scale-x-[1.2]" />
              </div>
            </div>

            {/* Elisabeth image — bottom-aligned, no crop on head */}
            <div className="relative z-10 w-[280px] sm:w-[360px] lg:w-[460px]">
              <img
                src={elisabethCasual}
                alt="Elisabeth Brommer-Kern"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Section below hero */}
      <div className="relative bg-primary">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mx-auto max-w-3xl py-16 sm:py-24"
          >
            <h2 className="mb-8 text-center font-display text-2xl font-bold text-primary-foreground sm:text-3xl lg:text-4xl">
              Lerne Elisabeth kennen
            </h2>
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
