import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroProps {
  onViewPortfolio?: () => void;
  scrollToGallery?: () => void;
}

const Hero = ({ onViewPortfolio, scrollToGallery }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Animated background */}
      <div
        className={`absolute inset-0 transition-all duration-2000 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
        }`}
      >
        <img
          src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Modern glass facade"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="relative h-full flex flex-col items-center justify-center px-6">
        <div
          className={`text-center transition-all duration-1500 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="glass-dark rounded-3xl px-12 py-10 mb-8 inline-block shadow-2xl border-2 border-white/10 relative overflow-hidden group">
            {/* Shimmer effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 animate-shimmer"></div>
            </div>
            
            <div className="relative z-10">
              <h1 className="text-6xl md:text-8xl font-light text-white tracking-wider mb-4 drop-shadow-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Casa do Vidro
              </h1>
              <div className="h-0.5 w-48 bg-gradient-to-r from-transparent via-white/80 to-transparent mx-auto mb-6" />
              <p className="text-xl md:text-3xl text-white/95 font-light tracking-wide drop-shadow-lg">
                O reflexo da elegância em cada detalhe
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToGallery || onViewPortfolio}
          className={`mt-12 transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } group`}
          aria-label="Ver Portfólio"
        >
          <div className="glass-dark rounded-full px-10 py-5 hover:glass-strong transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border border-white/20 relative overflow-hidden">
            <span className="text-white font-medium tracking-wider text-base relative z-10">Explorar Nosso Trabalho</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <ChevronDown
            className="w-8 h-8 text-white/80 mx-auto mt-6 animate-bounce drop-shadow-lg"
            strokeWidth={2}
          />
        </button>
      </div>
    </section>
  );
};

export default Hero;
