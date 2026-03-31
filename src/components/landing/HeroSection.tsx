import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Star } from "lucide-react";
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

  // Inline form state (separate from dialog)
  const [inlineFirstName, setInlineFirstName] = useState("");
  const [inlineLastName, setInlineLastName] = useState("");
  const [inlineEmail, setInlineEmail] = useState("");
  const [inlinePrivacy, setInlinePrivacy] = useState(false);
  const [inlineSubmitting, setInlineSubmitting] = useState(false);
  const [inlineSuccess, setInlineSuccess] = useState(false);

  useEffect(() => {
    const handler = (e: CustomEvent<{ email: string }>) => {
      setEmail(e.detail.email);
      setDialogOpen(true);
    };
    window.addEventListener("open-newsletter-dialog", handler as EventListener);
    return () => window.removeEventListener("open-newsletter-dialog", handler as EventListener);
  }, []);

  const doSubmit = async (fn: string, ln: string, em: string) => {
    const res = await fetch(
      `https://${import.meta.env.VITE_SUPABASE_PROJECT_ID}.supabase.co/functions/v1/subscribe-newsletter`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: fn.trim(), lastName: ln.trim(), email: em.trim() }),
      }
    );
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Anmeldung fehlgeschlagen.");
    return data;
  };

  const handleDialogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      toast({ title: "Bitte füllen Sie alle Felder aus.", variant: "destructive" });
      return;
    }
    if (!privacy) {
      toast({ title: "Bitte akzeptieren Sie die Datenschutzbestimmungen.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      await doSubmit(firstName, lastName, email);
      setIsSuccess(true);
    } catch (err: any) {
      toast({ title: err.message || "Ein Fehler ist aufgetreten.", variant: "destructive" });
    }
    setIsSubmitting(false);
  };

  const handleInlineSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inlineFirstName.trim() || !inlineLastName.trim() || !inlineEmail.trim()) {
      toast({ title: "Bitte füllen Sie alle Felder aus.", variant: "destructive" });
      return;
    }
    if (!inlinePrivacy) {
      toast({ title: "Bitte akzeptieren Sie die Datenschutzbestimmungen.", variant: "destructive" });
      return;
    }
    setInlineSubmitting(true);
    try {
      await doSubmit(inlineFirstName, inlineLastName, inlineEmail);
      setInlineSuccess(true);
    } catch (err: any) {
      toast({ title: err.message || "Ein Fehler ist aufgetreten.", variant: "destructive" });
    }
    setInlineSubmitting(false);
  };

  return (
    <section className="relative overflow-hidden bg-primary pt-24 sm:pt-28 pb-16 sm:pb-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />

      <div className="container relative mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Badge */}
          <span className="inline-block mb-6 px-5 py-2 rounded-full border border-primary-foreground/20 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/80">
            Kostenloser Newsletter
          </span>

          {/* Headline */}
          <h1 className="mb-6 font-display text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            Wirkung entfalten.
            <br />
            <span className="text-secondary italic">Praktisches Wissen</span>
            <br />
            direkt ins Postfach.
          </h1>

          {/* Subtext */}
          <p className="mx-auto mb-10 max-w-2xl font-body text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            Praxisnahe Impulse zu professionellem Auftreten im Video-Call,
            wirkungsvollen Meetings und einer durchdachten Participant Journey — kompakt und sofort anwendbar.
            Eine kostenlose Checkliste für einen professionellen Start in jedes Online-Meeting
            erhalten Sie gleich zu Beginn.
          </p>

          {/* Inline Newsletter Form */}
          {inlineSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mx-auto max-w-md rounded-2xl bg-primary-foreground/10 backdrop-blur-sm p-8 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/20">
                <Check className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="mb-3 font-display text-2xl font-bold text-primary-foreground">Vielen Dank!</h3>
              <p className="font-body text-primary-foreground/90 mb-4">
                Bitte prüfen Sie Ihr E-Mail-Postfach und bestätigen Sie Ihre Anmeldung,
                um Ihre kostenlose Checkliste zu erhalten.
              </p>
              <div className="rounded-xl bg-primary-foreground/10 p-4 text-left">
                <p className="font-body text-sm leading-relaxed text-primary-foreground/90">
                  <span className="mr-1">📌</span> <strong>Damit Sie meine E-Mails immer erhalten:</strong> Falls diese Nachricht im Werbung- oder Spam-Ordner gelandet ist, verschieben Sie sie bitte in Ihren Posteingang und speichern Sie meine Adresse{" "}
                  <span className="font-semibold text-primary-foreground">ebk@sjpdevelopment.ch</span> in Ihren Kontakten.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mx-auto max-w-md"
            >
              <div className="rounded-2xl bg-card/95 backdrop-blur-sm p-6 sm:p-8 shadow-xl">
                <h3 className="mb-2 font-display text-lg font-bold text-foreground sm:text-xl">
                  Jetzt anmelden & informiert bleiben
                </h3>
                <p className="mb-5 font-body text-sm text-muted-foreground">
                 Erhalten Sie Ihre Checkliste + regelmässige Impulse für mehr Wirkung in Online-Veranstaltungen.
                </p>
                <p className="mb-1 font-body text-xs text-muted-foreground/70">
                  Kein Spam. Abmeldung jederzeit möglich. Ihre Daten werden vertraulich behandelt.{" "}
                  <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:no-underline">Datenschutz</a>
                </p>
                <form onSubmit={handleInlineSubmit} className="space-y-3">
                  <Input
                    placeholder="Ihr Vorname"
                    value={inlineFirstName}
                    onChange={(e) => setInlineFirstName(e.target.value)}
                    className="h-12 rounded-xl bg-background font-body text-base"
                    maxLength={100}
                  />
                  <Input
                    placeholder="Ihr Nachname"
                    value={inlineLastName}
                    onChange={(e) => setInlineLastName(e.target.value)}
                    className="h-12 rounded-xl bg-background font-body text-base"
                    maxLength={100}
                  />
                  <Input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    value={inlineEmail}
                    onChange={(e) => setInlineEmail(e.target.value)}
                    className="h-12 rounded-xl bg-background font-body text-base"
                    maxLength={255}
                  />
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="privacy-inline"
                      checked={inlinePrivacy}
                      onCheckedChange={(checked) => setInlinePrivacy(checked === true)}
                      className="mt-1"
                    />
                    <label htmlFor="privacy-inline" className="cursor-pointer font-body text-xs leading-relaxed text-muted-foreground text-left">
                      Ich bin damit einverstanden, den Newsletter zu erhalten und akzeptiere die{" "}
                      <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:no-underline">
                        Datenschutzbestimmungen
                      </a>
                      . Sie können sich jederzeit abmelden.
                    </label>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={inlineSubmitting}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-base font-semibold rounded-xl"
                  >
                    {inlineSubmitting ? "Wird gesendet..." : "Checkliste + Newsletter sichern"}
                    {!inlineSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                  </Button>
                </form>
              </div>
            </motion.div>
          )}

          {/* Social proof */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[avatar1, avatar2, avatar3].map((src, i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-primary overflow-hidden">
                    <img src={src} alt="Teilnehmende" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="font-body text-xs sm:text-sm font-semibold text-primary-foreground leading-tight">
                8.000+ geschulte<span className="sm:inline"> </span><br className="sm:hidden" />Teilnehmende
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 fill-stars text-stars" />
              ))}
              <span className="ml-1 font-body text-sm text-primary-foreground/70">20+ Jahre Erfahrung</span>
            </div>
          </div>

          {/* Themen-Tags */}
          <div className="mt-8">
            <p className="font-display text-base font-semibold text-primary-foreground/90 mb-4">
              Diese Themen erwarten Sie
            </p>
            <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
              {[
                "Professionell online wirken",
                "Wirkungskompetenz im Video-Call",
                "Elevator Pitch & Selbstpräsentation",
                "Online-Meetings strukturieren",
                "Nachhaltige Business-Events",
                "Effizientes Arbeiten mit M365",
                "Digitale Zusammenarbeit",
                "Participant Journey",
                "Future Skills",
                "Büro- & Arbeitsorganisation",
              ].map((topic) => (
                <span
                  key={topic}
                  className="inline-block rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 px-4 py-1.5 font-body text-xs sm:text-sm text-primary-foreground/85"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Newsletter Popup Dialog (fallback for other CTAs) */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-md">
          {isSuccess ? (
            <div className="py-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                <Check className="h-7 w-7 text-primary" />
              </div>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl font-bold text-foreground">Vielen Dank!</DialogTitle>
                <DialogDescription className="mt-2 font-body text-muted-foreground">
                  Bitte prüfen Sie Ihr E-Mail-Postfach und bestätigen Sie Ihre Anmeldung, um Ihre kostenlose Checkliste zu erhalten.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 rounded-xl bg-muted p-4 text-left">
                <p className="font-body text-sm leading-relaxed text-foreground/80">
                  <span className="mr-1">📌</span> <strong>Damit Sie meine E-Mails immer erhalten:</strong> Falls diese Nachricht im Werbung- oder Spam-Ordner gelandet ist, verschieben Sie sie bitte in Ihren Posteingang und speichern Sie meine Adresse{" "}
                  <span className="font-semibold text-foreground">ebk@sjpdevelopment.ch</span> in Ihren Kontakten.
                </p>
              </div>
              <Button
                className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => { setDialogOpen(false); setIsSuccess(false); setFirstName(""); setLastName(""); setEmail(""); setPrivacy(false); }}
              >
                Schließen
              </Button>
            </div>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-2xl font-bold text-foreground">Checkliste + Newsletter sichern</DialogTitle>
                <DialogDescription className="font-body text-muted-foreground">
                  Melden Sie sich an und erhalten Sie Ihre kostenlose Checkliste „Ihr perfekter Start in jedes Online-Meeting" direkt in Ihr Postfach.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleDialogSubmit} className="mt-2 space-y-4">
                <Input placeholder="Vorname" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="h-12 rounded-xl bg-card font-body text-base" maxLength={100} />
                <Input placeholder="Nachname" value={lastName} onChange={(e) => setLastName(e.target.value)} className="h-12 rounded-xl bg-card font-body text-base" maxLength={100} />
                <Input type="email" placeholder="E-Mail-Adresse" value={email} onChange={(e) => setEmail(e.target.value)} className="h-12 rounded-xl bg-card font-body text-base" maxLength={255} />
                <div className="flex items-start gap-3">
                  <Checkbox id="privacy-dialog" checked={privacy} onCheckedChange={(checked) => setPrivacy(checked === true)} className="mt-1" />
                  <label htmlFor="privacy-dialog" className="cursor-pointer font-body text-sm leading-relaxed text-muted-foreground">
                    Ich akzeptiere die{" "}
                    <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:no-underline">Datenschutzbestimmungen</a>. Abmeldung jederzeit möglich.
                  </label>
                </div>
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-base font-semibold rounded-xl">
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
