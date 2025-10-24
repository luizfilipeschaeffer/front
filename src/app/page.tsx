import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BenefitsSection from '@/components/BenefitsSection';
import DemoSection from '@/components/DemoSection';
import FeaturesSection from '@/components/FeaturesSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import PricingSection from '@/components/PricingSection';
import AboutSection from '@/components/AboutSection';
import FAQSection from '@/components/FAQSection';
import GuaranteeSection from '@/components/GuaranteeSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BenefitsSection />
        <DemoSection />
        <FeaturesSection />
        <WhyChooseSection />
        <PricingSection />
        <AboutSection />
        <FAQSection />
        <GuaranteeSection />
      </main>
      <Footer />
    </div>
  );
}