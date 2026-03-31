import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import WasErwartetSection from "@/components/landing/WasErwartetSection";
import SchwerpunkteSection from "@/components/landing/SchwerpunkteSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import NewsletterSection from "@/components/landing/NewsletterSection";
import VideoSection from "@/components/landing/VideoSection";
import BookCallSection from "@/components/landing/BookCallSection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <WasErwartetSection />
      <SchwerpunkteSection />
      <TestimonialsSection />
      <PricingSection />
      <NewsletterSection />
      <VideoSection />
      <BookCallSection />
      <FAQSection />
      <Footer />
    </main>
  );
};

export default Index;
