import { Facebook, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logoSjp from "@/assets/logo-sjp-lotus.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* CTA Banner */}
      <div className="border-b border-primary-foreground/10 py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
                Bereit, online
                <br />
                <span className="text-secondary">wirkungsvoller aufzutreten?</span>
              </h2>
              <p className="mt-4 max-w-md font-body text-base text-primary-foreground/70 sm:text-lg">
                Starte jetzt mit einem kostenlosen Erstgespräch und entdecke,
                wie du souverän und authentisch online wirkst.
              </p>
            </div>
            <a
              href="/buchen"
              className="group flex items-center gap-3 rounded-full border border-primary-foreground/20 bg-primary-foreground px-8 py-4 font-body text-sm font-semibold text-foreground transition-all hover:bg-primary-foreground/90"
            >
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              Erstgespräch buchen
            </a>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
            {/* Left: Logo & description */}
            <div className="max-w-sm">
              <div className="flex items-center gap-3">
                <img src={logoSjp} alt="SJP Development Logo" className="h-10 w-auto brightness-200" />
                <div>
                  <p className="font-body text-sm font-semibold text-primary-foreground">
                    SJP Development GmbH
                  </p>
                  <p className="font-body text-xs text-primary-foreground/60">Kreuzlingen</p>
                </div>
              </div>
              <p className="mt-4 font-body text-sm leading-relaxed text-primary-foreground/60">
                Professionelle Online-Präsenz für Führungskräfte, Teams und Unternehmen.
              </p>

              {/* Social icons */}
              <div className="mt-6 flex gap-3">
                {[
                  { icon: Instagram, href: "https://www.instagram.com/elisabeth.brommer.kern/", label: "Instagram" },
                  { icon: Facebook, href: "https://www.facebook.com/Elisabeth.Brommer.Kern", label: "Facebook" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/elisabeth-brommer/", label: "LinkedIn" },
                  { icon: Youtube, href: "https://www.youtube.com/@Eisabeth-SJP-Development/", label: "YouTube" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-foreground/20 text-primary-foreground/60 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Newsletter */}
            <div className="max-w-sm">
              <h3 className="font-display text-xl font-bold text-primary-foreground">
                Bleib in Kontakt
              </h3>
              <p className="mt-2 font-body text-sm text-primary-foreground/60">
                Erhalte Tipps, Impulse und Updates rund um professionelles Online-Auftreten.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4 flex items-center rounded-full border border-primary-foreground/20 bg-primary-foreground/5 pl-5 pr-1"
              >
                <input
                  type="email"
                  placeholder="E-Mail eingeben"
                  className="flex-1 bg-transparent py-3 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-foreground text-foreground transition-colors hover:bg-primary-foreground/90"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 py-6">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="font-body text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Elisabeth Brommer-Kern. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6 font-body text-xs text-primary-foreground/50">
            <Link to="/impressum" className="transition-colors hover:text-primary-foreground">
              Impressum
            </Link>
            <Link to="/datenschutz" className="transition-colors hover:text-primary-foreground">
              Datenschutz
            </Link>
            <Link to="/agb" className="transition-colors hover:text-primary-foreground">
              AGB
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
