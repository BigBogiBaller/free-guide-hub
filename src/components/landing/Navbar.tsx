import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoSjp from "@/assets/logo-sjp-lotus.png";

const navLinks = [
  { label: "Vorteile", href: "#vorteile" },
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Newsletter", href: "#newsletter" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src={logoSjp} alt="SJP Development" className="h-10 w-auto sm:h-12" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-6 font-body font-semibold"
            asChild
          >
            <a href="https://zeeg.me" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-1.5 h-4 w-4" />
              Gespräch buchen
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-base font-medium text-foreground/80 hover:text-primary py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-body font-semibold w-full"
                asChild
              >
                <a href="https://zeeg.me" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-1.5 h-4 w-4" />
                  Gespräch buchen
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
