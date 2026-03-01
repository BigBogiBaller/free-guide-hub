import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import AboutSection from "@/components/landing/AboutSection";
import NewsletterSection from "@/components/landing/NewsletterSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import BookCallSection from "@/components/landing/BookCallSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <AboutSection />
      <TestimonialsSection />
      <NewsletterSection />
      <FAQSection />
      <BookCallSection />
      <Footer />
    </main>
  );
};

export default Index;
