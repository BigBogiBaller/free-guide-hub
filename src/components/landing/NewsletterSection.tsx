import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const checklistItems = [
"Was Sie vor jedem Call prüfen sollten",
"Wie Sie Stimme, Körpersprache und Technik optimal einsetzen",
"Wie Sie souverän wirken – auch wenn Sie nervös sind",
"Wie Sie Ihre Wirkung bewusst steuern"];


const NewsletterSection = () => {
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
      toast({ title: "Bitte füllen Sie alle Felder aus.", variant: "destructive" });
      return;
    }
    if (!privacy) {
      toast({ title: "Bitte akzeptieren Sie die Datenschutzbestimmungen.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("subscribe-newsletter", {
        body: { firstName: firstName.trim(), lastName: lastName.trim(), phone: phone.trim(), email: email.trim() },
      });

      if (error) {
        throw new Error(error.message || "Anmeldung fehlgeschlagen.");
      }

      if (data?.error) {
        throw new Error(data.error);
      }

      setIsSuccess(true);
    } catch (err: any) {
      toast({
        title: "Fehler bei der Anmeldung",
        description: err.message || "Bitte versuchen Sie es später erneut.",
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
            <p className="font-body text-primary-foreground/90 mb-5">
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
                Kostenlose Checkliste: „Ihr perfekter Start in jedes Online-Meeting"
              </h2>
              <p className="mb-6 font-body text-muted-foreground">
                Sie bekommen eine kompakte, wirkungsvolle Übersicht:
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
                Diese Checkliste ist Ihr schneller Einstieg in mehr Wirkungskompetenz.
              </p>
            </div>

            {/* Right: Form */}
            <div className="flex flex-col justify-center">
              <h3 className="mb-2 font-display text-xl font-bold text-foreground">
                Jetzt kostenlos anmelden
              </h3>
              <p className="mb-5 font-body text-sm text-muted-foreground">
                Erhalten Sie Ihre Checkliste + regelmäßige Impulse für mehr Wirkung in Online-Veranstaltungen.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4 max-w-sm mx-auto lg:max-w-none lg:mx-0">
                <Input
                  placeholder="Ihr Vorname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="h-12 rounded-xl bg-card font-body text-base"
                  maxLength={100} />

                <Input
                  placeholder="Ihr Nachname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="h-12 rounded-xl bg-card font-body text-base"
                  maxLength={100} />


                <Input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
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
                    <a href="/datenschutz" target="_blank" rel="noopener noreferrer" className="text-accent underline hover:no-underline">
                      Datenschutzbestimmungen
                    </a>
                    . Sie können sich jederzeit abmelden.
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