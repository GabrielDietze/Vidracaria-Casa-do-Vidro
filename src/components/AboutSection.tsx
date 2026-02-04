import { Check } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-gradient-to-b from-white/90 to-gray-50/90 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block mb-6">
              <div className="glass rounded-full px-6 py-2 text-blue-600 font-semibold text-sm tracking-wider">
                NOSSA HISTÓRIA
              </div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              Sobre Nós
            </h2>
            
            <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mb-8 rounded-full"></div>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              A Casa do Vidro Santa Luzia oferece soluções personalizadas em vidro temperado com qualidade, segurança e acabamento impecável.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              Atendemos residências, comércios e construtoras em toda a região de Santa Luzia e Grande BH, sempre com compromisso de entregar projetos que superam expectativas.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 glass-strong p-4 rounded-2xl border border-white/30 hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Check className="text-white" size={24} />
                </div>
                <span className="font-semibold text-gray-800 text-lg">Mais de 10 anos de experiência</span>
              </div>
              
              <div className="flex items-center gap-4 glass-strong p-4 rounded-2xl border border-white/30 hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Check className="text-white" size={24} />
                </div>
                <span className="font-semibold text-gray-800 text-lg">Produtos certificados</span>
              </div>
              
              <div className="flex items-center gap-4 glass-strong p-4 rounded-2xl border border-white/30 hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Check className="text-white" size={24} />
                </div>
                <span className="font-semibold text-gray-800 text-lg">Garantia de qualidade</span>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
              <img src="https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Equipe Casa do Vidro" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
