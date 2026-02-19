import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

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

    // TODO: Brevo Edge Function integration
    // For now, simulate success
    await new Promise((r) => setTimeout(r, 1000));
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <section id="newsletter" className="bg-card py-20 lg:py-28">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-lg rounded-3xl bg-primary p-12 text-center text-primary-foreground"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/20">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="mb-3 font-display text-2xl font-bold">Vielen Dank!</h3>
            <p className="font-body text-primary-foreground/90">
              Bitte prüfe dein E-Mail-Postfach und bestätige deine Anmeldung, 
              um deinen kostenlosen Guide zu erhalten.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="newsletter" className="bg-card py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-background border border-border p-8 shadow-sm lg:p-12"
          >
            <div className="mb-8 text-center">
              <p className="mb-2 font-body text-sm font-semibold uppercase tracking-widest text-accent">
                Kostenloser Guide
              </p>
              <h2 className="mb-3 font-display text-3xl font-bold text-foreground lg:text-4xl">
                Hol dir deinen Guide
              </h2>
              <p className="font-body text-muted-foreground">
                Melde dich für den Newsletter an und erhalte deinen kostenlosen Guide 
                für professionelles Online-Auftreten direkt in dein Postfach.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  placeholder="Dein Vorname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="h-12 rounded-xl bg-card font-body text-base"
                  maxLength={100}
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Deine E-Mail-Adresse"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-xl bg-card font-body text-base"
                  maxLength={255}
                />
              </div>
              <div className="flex items-start gap-3">
                <Checkbox
                  id="privacy"
                  checked={privacy}
                  onCheckedChange={(checked) => setPrivacy(checked === true)}
                  className="mt-1"
                />
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
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-base font-semibold rounded-xl"
              >
                {isSubmitting ? "Wird gesendet..." : "Jetzt Guide sichern"}
                {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5" />}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
