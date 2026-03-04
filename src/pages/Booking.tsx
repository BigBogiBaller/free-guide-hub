import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Booking = () => {
  useEffect(() => {
    // Load Zeeg embed script
    const script = document.createElement("script");
    script.src = "https://assets.zeeg.me/embed.min.js";
    script.setAttribute("data-user", "ebk-sjp");
    script.setAttribute("data-event-type", "30min");
    script.setAttribute("data-redirect-parent", "true");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück zur Startseite
        </Link>

        <h1 className="font-display text-3xl font-bold text-foreground mb-2 sm:text-4xl">
          Kostenloses Erstgespräch buchen
        </h1>
        <p className="font-body text-muted-foreground mb-8 max-w-xl">
          Wählen Sie einen passenden Termin und ich melde mich bei Ihnen.
        </p>

        <div
          className="zeeg-inline-widget"
          id="zeeg-embed-ebk-sjp-30min"
          style={{ minWidth: 320, height: 780 }}
        />
      </div>
    </div>
  );
};

export default Booking;
