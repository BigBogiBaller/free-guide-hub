import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import AboutSection from "@/components/landing/AboutSection";
import NewsletterSection from "@/components/landing/NewsletterSection";
import BookCallSection from "@/components/landing/BookCallSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <NewsletterSection />
      <BookCallSection />
      <Footer />
    </main>
  );
};

export default Index;
