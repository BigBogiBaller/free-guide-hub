import { useState } from "react";
import { CheckCircle2, Calendar, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const plans = [
  {
    name: "Schnupper-Webinar",
    price: "0",
    currency: "CHF",
    description: "Klar auftreten. Sicher wirken. Bewusst kommunizieren – auch online.",
    features: [
      "Einblick in «Professionell Online Wirken»",
      "Was Wirkungskompetenz bedeutet",
      "Warum sie eine zentrale Future Skill ist",
      "Online-Meetings & Präsentationen meistern",
    ],
    cta: "Kostenlos anmelden",
    highlighted: false,
  },
  {
    name: "AKAD-Training",
    price: "480",
    currency: "CHF",
    description: "Professionell online wirken – Fit für die Zukunft mit Future Skills.",
    features: [
      "Systematisches & praxisnahes Training",
      "Sicher moderieren, leiten & präsentieren",
      "Remote Work & digitale Meetings meistern",
      "Angeboten & organisiert von der AKAD",
    ],
    cta: "Zum AKAD-Training",
    highlighted: true,
  },
  {
    name: "Individuelle Betreuung",
    price: "Auf Anfrage",
    currency: "",
    description: "Persönliches Coaching & Mentoring, massgeschneidert auf Ihre Ziele.",
    features: [
      "1:1 Coaching & Mentoring",
      "Individueller Trainingsplan",
      "Persönliches Feedback & Begleitung",
      "Flexible Termingestaltung",
    ],
    cta: "Gespräch buchen",
    highlighted: false,
  },
];

const webinarDates = [
  {
    date: "27. März 2026",
    time: "09:30 – 10:30 Uhr",
    link: "https://events.teams.microsoft.com/event/24091924-27d5-4dad-8113-0f403e543112@39c4c2ff-68df-4637-9c72-bcfea6b40e11",
  },
  {
    date: "30. März 2026",
    time: "18:00 – 19:00 Uhr",
    link: "https://events.teams.microsoft.com/event/b9154026-928a-4640-95ca-ce276b53134a@39c4c2ff-68df-4637-9c72-bcfea6b40e11",
  },
];

const PricingSection = () => {
  const [webinarOpen, setWebinarOpen] = useState(false);

  return (
    <section id="angebote" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 text-sm font-medium text-primary mb-4">
            Angebote
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Das passende Format für Sie
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Drei klare Optionen – wählen Sie das Format, das zu Ihren Bedürfnissen passt.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-shadow duration-300 ${
                plan.highlighted
                  ? "bg-card border-2 border-primary shadow-xl scale-[1.03]"
                  : "bg-card border border-border shadow-sm hover:shadow-md"
              }`}
            >
              <h3 className="font-playfair text-xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>

              <div className="mb-4">
                {plan.currency ? (
                  <div className="flex items-baseline gap-1">
                    <span className="font-playfair text-4xl lg:text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-lg">
                      {plan.currency}
                    </span>
                  </div>
                ) : (
                  <span className="font-playfair text-3xl lg:text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full rounded-full text-base py-6 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <a
                  href={
                    plan.name === "Schnupper-Webinar" || plan.name === "AKAD-Training"
                      ? "https://www.sjpdevelopment.ch/termine.html"
                      : "/buchen"
                  }
                  target={
                    plan.name === "Schnupper-Webinar" || plan.name === "AKAD-Training" ? "_blank" : undefined
                  }
                  rel={
                    plan.name === "Schnupper-Webinar" || plan.name === "AKAD-Training" ? "noopener noreferrer" : undefined
                  }
                >
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Webinar Date Selection Dialog */}
      <Dialog open={webinarOpen} onOpenChange={setWebinarOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-playfair text-2xl">Schnupper-Webinar buchen</DialogTitle>
            <DialogDescription>
              Wählen Sie Ihren Wunschtermin für das kostenlose Webinar.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-2">
            {webinarDates.map((item) => (
              <a
                key={item.date}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-border p-5 hover:border-primary hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-1">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-foreground">{item.date}</span>
                </div>
                <div className="flex items-center gap-3 mb-1">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground text-sm">{item.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground text-sm">Online</span>
                </div>
              </a>
            ))}
          </div>

          <div className="text-sm text-muted-foreground mt-2 space-y-1">
            <p>👉 Die Teilnahme ist kostenlos.</p>
            <p>👉 Anmeldung erforderlich – Plätze begrenzt.</p>
            <p className="pt-2">
              Ich freue mich darauf, Sie kennenzulernen und Ihnen einen Einblick in das Thema
              <span className="italic"> Professionell Online Wirken</span> zu geben.
            </p>
            <p className="pt-1">
              Es gelten unsere{" "}
              <a href="/agb" className="underline text-primary hover:text-primary/80">
                AGB
              </a>
              .
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PricingSection;
