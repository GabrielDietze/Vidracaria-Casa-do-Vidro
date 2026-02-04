import { ChevronRight } from 'lucide-react';

interface PortfolioSectionProps {
  handleViewPortfolio: () => void;
}

const PortfolioSection = ({ handleViewPortfolio }: PortfolioSectionProps) => {
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-white/80 to-gray-50/80 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="glass-strong rounded-3xl p-12 shadow-2xl border border-white/30">
          <div className="inline-block mb-6">
            <div className="glass rounded-full px-6 py-2 text-blue-600 font-semibold text-sm tracking-wider">
              NOSSOS TRABALHOS
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
            Portfólio de Projetos
          </h2>
          
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-8 rounded-full"></div>
          
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
            Descubra nossos projetos exclusivos em vidro temperado, onde elegância e sofisticação se encontram em cada detalhe. Cada instalação é uma obra-prima de precisão e design.
          </p>
          
          <button
            onClick={handleViewPortfolio}
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-12 py-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">Explorar Portfólio Completo</span>
            <ChevronRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
