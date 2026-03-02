import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ForWenSection from "@/components/landing/ForWenSection";
import AboutSection from "@/components/landing/AboutSection";
import NewsletterSection from "@/components/landing/NewsletterSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import BookCallSection from "@/components/landing/BookCallSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <ForWenSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
      <NewsletterSection />
      <FAQSection />
      <BookCallSection />
      <Footer />
    </main>
  );
};

export default Index;
