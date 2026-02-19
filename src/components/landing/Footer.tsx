import logoSjp from "@/assets/logo-sjp-lotus.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 text-primary-foreground/80">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-4">
            <img src={logoSjp} alt="SJP Development Logo" className="h-10 w-auto brightness-200" />
            <div>
              <p className="font-body text-sm font-semibold text-primary-foreground">
                SJP Development GmbH
              </p>
              <p className="font-body text-xs text-primary-foreground/60">Kreuzlingen</p>
            </div>
          </div>

          <div className="flex gap-6 font-body text-sm">
            <a href="#" className="transition-colors hover:text-primary-foreground">
              Impressum
            </a>
            <a href="#" className="transition-colors hover:text-primary-foreground">
              Datenschutz
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center">
          <p className="font-body text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Elisabeth Brommer-Kern. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
