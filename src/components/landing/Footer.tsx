import logoSjp from "@/assets/logo-sjp.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 text-background/80">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-4">
            <img src={logoSjp} alt="SJP Development Logo" className="h-10 w-auto brightness-200" />
            <div>
              <p className="font-body text-sm font-semibold text-background">
                SJP Development GmbH
              </p>
              <p className="font-body text-xs text-background/60">Kreuzlingen</p>
            </div>
          </div>

          <div className="flex gap-6 font-body text-sm">
            <a href="#" className="transition-colors hover:text-background">
              Impressum
            </a>
            <a href="#" className="transition-colors hover:text-background">
              Datenschutz
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-background/10 pt-6 text-center">
          <p className="font-body text-xs text-background/50">
            © {new Date().getFullYear()} Elisabeth Brommer-Kern. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
