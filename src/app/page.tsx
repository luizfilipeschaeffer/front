import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import ProductsSection from '@/components/ProductsSection';
import CommunicationSection from '@/components/CommunicationSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SupportSection from '@/components/SupportSection';
import BlogPreview from '@/components/BlogPreview';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <ProductsSection />
        <CommunicationSection />
        <StatsSection />
        <TestimonialsSection />
        <SupportSection />
        <BlogPreview />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}