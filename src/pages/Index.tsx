import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import WasErwartetSection from "@/components/landing/WasErwartetSection";
import AboutSection from "@/components/landing/AboutSection";
import NewsletterSection from "@/components/landing/NewsletterSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import VideoSection from "@/components/landing/VideoSection";
import BookCallSection from "@/components/landing/BookCallSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <WasErwartetSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
      <NewsletterSection />
      <FAQSection />
      <VideoSection />
      <BookCallSection />
      <Footer />
    </main>
  );
};

export default Index;
