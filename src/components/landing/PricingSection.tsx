import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const PricingSection = () => {
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
              {/* Plan name */}
              <h3 className="font-playfair text-xl font-bold text-foreground mb-2">
                {plan.name}
              </h3>

              {/* Price */}
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

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                className={`w-full rounded-full text-base py-6 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
