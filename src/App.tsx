import React from 'react';
import { ThemeProvider } from './hooks/use-theme';
import Navigation from './components/navigation';
import HeroSection from './components/sections/hero-section';
import AboutSection from './components/sections/about-section';
import ServicesSection from './components/sections/services-section';
import PricingSection from './components/sections/pricing-section';
import PortfolioSection from './components/sections/portfolio-section';
import TestimonialsSection from './components/sections/testimonials-section';
import ContactSection from './components/sections/contact-section';
import Footer from './components/footer';
import AdminAccess from './components/AdminAccess';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="webcraft-pro-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <PricingSection />
          <PortfolioSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
        <AdminAccess />
      </div>
    </ThemeProvider>
  );
}

export default App;
