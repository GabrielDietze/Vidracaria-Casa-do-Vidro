import { Shield, Wrench, Clock, MessageCircle } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-10"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-2xl">
            Por que escolher a Casa do Vidro?
          </h2>
          <div className="h-1 w-32 bg-white/60 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-dark rounded-3xl p-8 text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 group border border-white/20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all">
              <Shield className="text-blue-600" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Vidros de Segurança</h3>
            <p className="text-blue-50 leading-relaxed">Todos os nossos vidros são temperados e certificados</p>
          </div>

          <div className="glass-dark rounded-3xl p-8 text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 group border border-white/20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all">
              <Wrench className="text-blue-600" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Instalação Profissional</h3>
            <p className="text-blue-50 leading-relaxed">Equipe especializada e experiente</p>
          </div>

          <div className="glass-dark rounded-3xl p-8 text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 group border border-white/20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all">
              <Clock className="text-blue-600" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Entrega Rápida</h3>
            <p className="text-blue-50 leading-relaxed">Cumprimos prazos com qualidade garantida</p>
          </div>

          <div className="glass-dark rounded-3xl p-8 text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 group border border-white/20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all">
              <MessageCircle className="text-blue-600" size={36} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Suporte Personalizado</h3>
            <p className="text-blue-50 leading-relaxed">Atendimento direto via WhatsApp</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
