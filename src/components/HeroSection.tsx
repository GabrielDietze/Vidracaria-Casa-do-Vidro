import { ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-20"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="glass-dark rounded-3xl px-12 py-16 border-2 border-white/10 shadow-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            Soluções em vidro que{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-shimmer">
              transformam
            </span>{' '}
            seu espaço
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 font-light">
            Box, janelas, portas e vidros temperados sob medida
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all flex items-center justify-center gap-3"
            >
              <span className="relative z-10">Ver Portfólio</span>
              <ChevronRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="glass-strong border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
