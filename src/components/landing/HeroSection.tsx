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
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";

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
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-0 min-h-[calc(100svh-6rem)]">
          
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center py-12 sm:py-16 lg:py-20 text-center lg:text-left order-2 lg:order-1"
          >
            <h1 className="mb-6 font-display text-[2.75rem] font-bold leading-[1.05] text-primary-foreground sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Professionell
              <br />
              <span className="text-secondary">Online Wirken</span>
            </h1>
            <p className="mx-auto mb-10 max-w-md font-body text-base leading-relaxed text-primary-foreground/75 sm:text-lg lg:mx-0 lg:max-w-lg">
              Werde souverän, klar und wirkungsvoll in jeder Online-Veranstaltung.
              Kostenloser Impuls-Newsletter + Checkliste für Coaches, Trainer:innen, Führungskräfte und alle, die online überzeugen wollen.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start mb-12 lg:mb-16">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-10 py-7 text-base font-semibold shadow-lg inline-flex items-center gap-2"
                onClick={() => setDialogOpen(true)}
              >
                <span className="h-2 w-2 rounded-full bg-accent-foreground/80" />
                Jetzt kostenlos anmelden
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex flex-col items-center gap-3 lg:items-start">
              <div className="flex items-center gap-4">
                {/* Avatar stack */}
                <div className="flex -space-x-3">
                  {[avatar1, avatar2, avatar3].map((src, i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-primary overflow-hidden"
                    >
                      <img src={src} alt="Teilnehmende" className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-body text-xs sm:text-sm font-semibold text-primary-foreground leading-tight">
                    8.000+ geschulte
                    <span className="sm:inline"> </span>
                    <br className="sm:hidden" />
                    Teilnehmende
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
                <span className="ml-1 font-body text-sm text-primary-foreground/70">
                  20+ Jahre Erfahrung
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Elisabeth's Image – full height, edge-to-edge like reference */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end items-stretch order-1 lg:order-2 lg:-mr-8 xl:-mr-16"
          >
            <div className="relative z-10 w-full max-w-[500px] lg:max-w-none lg:w-[110%] xl:w-[120%]">
              <img
                src={elisabethCasual}
                alt="Elisabeth Brommer-Kern"
                className="w-full h-[50vh] sm:h-[60vh] lg:h-[calc(100svh-6rem)] object-cover object-top rounded-2xl lg:rounded-none lg:rounded-l-3xl shadow-2xl"
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
                Checkliste + Newsletter sichern
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
                  um deine kostenlose Checkliste zu erhalten.
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
                  Checkliste + Newsletter sichern
                </DialogTitle>
                <DialogDescription className="font-body text-muted-foreground">
                  Melde dich an und erhalte deine kostenlose Checkliste „Dein perfekter Start in jedes Online-Meeting" direkt in dein Postfach.
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
                  {isSubmitting ? "Wird gesendet..." : "Jetzt kostenlos anmelden"}
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
