import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const checklistItems = [
"Was du vor jedem Call prüfen solltest",
"Wie du Stimme, Körpersprache und Technik optimal einsetzt",
"Wie du souverän wirkst – auch wenn du nervös bist",
"Wie du deine Wirkung bewusst steuerst"];


const NewsletterSection = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName.trim() || !email.trim()) {
      toast({ title: "Bitte fülle alle Felder aus.", variant: "destructive" });
      return;
    }
    if (!privacy) {
      toast({ title: "Bitte akzeptiere die Datenschutzbestimmungen.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
      const res = await fetch(
        `https://${projectId}.supabase.co/functions/v1/subscribe-newsletter`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ firstName: firstName.trim(), email: email.trim() }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Anmeldung fehlgeschlagen.");
      }

      setIsSuccess(true);
    } catch (err: any) {
      toast({
        title: "Fehler bei der Anmeldung",
        description: err.message || "Bitte versuche es später erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="newsletter" className="bg-card py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-lg rounded-3xl bg-primary p-12 text-center text-primary-foreground">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/20">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="mb-3 font-display text-2xl font-bold">Vielen Dank!</h3>
            <p className="font-body text-primary-foreground/90">
              Bitte prüfe dein E-Mail-Postfach und bestätige deine Anmeldung,
              um deine kostenlose Checkliste zu erhalten.
            </p>
          </motion.div>
        </div>
      </section>);

  }

  return (
    <section id="newsletter" className="bg-card py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-8 rounded-3xl bg-background border border-border p-4 sm:p-8 shadow-sm lg:grid-cols-2 lg:p-12 overflow-hidden">

            {/* Left: Leadmagnet info */}
            <div>
              


              <h2 className="mb-3 font-display text-2xl font-bold text-foreground lg:text-3xl">
                Kostenlose Checkliste: „Dein perfekter Start in jedes Online-Meeting"
              </h2>
              <p className="mb-6 font-body text-muted-foreground">
                Du bekommst eine kompakte, wirkungsvolle Übersicht:
              </p>
              <ul className="space-y-3">
                {checklistItems.map((item) =>
                <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="font-body text-sm text-foreground sm:text-base">{item}</span>
                  </li>
                )}
              </ul>
              <p className="mt-6 font-body text-sm text-muted-foreground italic">
                Diese Checkliste ist dein schneller Einstieg in mehr Wirkungskompetenz.
              </p>
            </div>

            {/* Right: Form */}
            <div className="flex flex-col justify-center">
              <h3 className="mb-2 font-display text-xl font-bold text-foreground">
                Jetzt kostenlos anmelden
              </h3>
              <p className="mb-5 font-body text-sm text-muted-foreground">
                Erhalte deine Checkliste + regelmäßige Impulse für mehr Wirkung in Online-Veranstaltungen.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto lg:max-w-none lg:mx-0">
                <Input
                  placeholder="Dein Vorname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="h-12 rounded-xl bg-card font-body text-base"
                  maxLength={100} />

                <Input
                  type="email"
                  placeholder="Deine E-Mail-Adresse"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-xl bg-card font-body text-base"
                  maxLength={255} />

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacy"
                    checked={privacy}
                    onCheckedChange={(checked) => setPrivacy(checked === true)}
                    className="mt-1" />

                  <label htmlFor="privacy" className="cursor-pointer font-body text-sm leading-relaxed text-muted-foreground">
                    Ich bin damit einverstanden, den Newsletter zu erhalten und akzeptiere die{" "}
                    <a href="#" className="text-accent underline hover:no-underline">
                      Datenschutzbestimmungen
                    </a>
                    . Du kannst dich jederzeit abmelden.
                  </label>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-base font-semibold rounded-xl">

                  {isSubmitting ? "Wird gesendet..." : "Checkliste + Newsletter sichern"}
                  {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default NewsletterSection;