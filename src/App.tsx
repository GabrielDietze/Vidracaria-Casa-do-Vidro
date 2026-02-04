import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import WhyChooseUs from './components/WhyChooseUs';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ProjectGallery from './components/ProjectGallery';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'portfolio'>('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'portfolio') {
      setCurrentView('portfolio');
      setIsMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentView === 'portfolio') {
      setCurrentView('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleViewPortfolio = () => {
    setCurrentView('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToGallery = () => {
    const galleryElement = document.querySelector('.project-gallery-section');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {currentView === 'portfolio' && <ScrollProgress progress={scrollProgress} />}

      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        setCurrentView={setCurrentView}
      />

      {currentView === 'portfolio' ? (
        <div className="mt-20">
          <Hero scrollToGallery={scrollToGallery} />
          <ProjectGallery />
          <Footer />
        </div>
      ) : (
        <>
          <HeroSection scrollToSection={scrollToSection} />
          <ProductsSection />
          <WhyChooseUs />
          <PortfolioSection handleViewPortfolio={handleViewPortfolio} />
          <TestimonialsSection />
          <AboutSection />
          <ContactSection />
          <Footer />
        </>
      )}

      <WhatsAppButton />
    </div>
  );
}

export default App;
