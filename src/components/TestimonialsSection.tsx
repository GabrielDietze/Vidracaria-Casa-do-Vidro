import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  { name: 'Maria Silva', text: 'Excelente atendimento e qualidade impecável. O box ficou perfeito!', rating: 5 },
  { name: 'João Santos', text: 'Profissionais muito qualificados. Recomendo para qualquer serviço em vidro.', rating: 5 },
  { name: 'Ana Costa', text: 'Fechamento da minha varanda superou minhas expectativas. Adorei!', rating: 5 },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50/80 to-white/80 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="glass rounded-full px-6 py-2 text-blue-600 font-semibold text-sm tracking-wider">
              DEPOIMENTOS
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
            O que nossos clientes dizem
          </h2>
          
          <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-strong rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/30 group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current group-hover:scale-110 transition-transform" size={22} style={{ transitionDelay: `${i * 50}ms` }} />
                ))}
              </div>
              
              <p className="text-gray-700 mb-8 text-lg italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">Cliente verificado ✓</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
