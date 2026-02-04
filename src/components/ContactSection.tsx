import { Phone, MapPin, Instagram, Clock, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contato" className="py-24 bg-gradient-to-br from-blue-50/80 to-cyan-50/80 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">Solicite um orçamento sem compromisso</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form className="glass-strong rounded-3xl shadow-2xl p-10 space-y-6 border border-white/30">
              <div>
                <label className="block text-gray-800 font-semibold mb-3">Nome Completo</label>
                <input type="text" className="w-full px-5 py-4 rounded-xl glass border border-white/30 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder-gray-500" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-3">Telefone</label>
                <input type="tel" className="w-full px-5 py-4 rounded-xl glass border border-white/30 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder-gray-500" placeholder="(31) 99999-9999" />
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-3">Tipo de Serviço</label>
                <select className="w-full px-5 py-4 rounded-xl glass border border-white/30 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all">
                  <option>Selecione o serviço</option>
                  <option>Box para Banheiro</option>
                  <option>Janelas</option>
                  <option>Portas de Vidro</option>
                  <option>Guarda-corpo</option>
                  <option>Espelhos</option>
                  <option>Fechamento de Varanda</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-800 font-semibold mb-3">Mensagem</label>
                <textarea className="w-full px-5 py-4 rounded-xl glass border border-white/30 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all placeholder-gray-500 resize-none" rows={4} placeholder="Descreva seu projeto"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-5 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all relative overflow-hidden group">
                <span className="relative z-10">Enviar Solicitação</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="glass-strong rounded-3xl shadow-2xl p-10 border border-white/30">
              <h3 className="text-3xl font-bold mb-10 text-gray-900 text-center">Informações de Contato</h3>

              <div className="space-y-5">
                <a href="https://wa.me/5531996503034" target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="flex items-center gap-5 p-5 rounded-2xl glass hover:glass-strong transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:rotate-6 transition-all">
                      <Phone className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-lg text-gray-900">WhatsApp</p>
                      <p className="text-green-700 font-semibold text-lg">(31) 99650-3034</p>
                      <p className="text-sm text-gray-600">Clique para conversar</p>
                    </div>
                    <ExternalLink className="text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" size={22} />
                  </div>
                </a>

                <a href="https://maps.google.com/?q=R.+do+Comércio,+382,+São+João+Batista,+Santa+Luzia,+MG" target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="flex items-center gap-5 p-5 rounded-2xl glass hover:glass-strong transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:rotate-6 transition-all">
                      <MapPin className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-lg text-gray-900">Endereço</p>
                      <p className="text-blue-700 font-medium">R. do Comércio, 382</p>
                      <p className="text-sm text-gray-600">São João Batista, Santa Luzia, MG</p>
                    </div>
                    <ExternalLink className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" size={22} />
                  </div>
                </a>

                <a href="https://www.instagram.com/casadovidrosantaluzia" target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="flex items-center gap-5 p-5 rounded-2xl glass hover:glass-strong transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl group-hover:rotate-6 transition-all">
                      <Instagram className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-lg text-gray-900">Instagram</p>
                      <p className="text-purple-700 font-medium">@casadovidrosantaluzia</p>
                      <p className="text-sm text-gray-600">Veja nossos projetos</p>
                    </div>
                    <ExternalLink className="text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" size={22} />
                  </div>
                </a>

                <div className="flex items-center gap-5 p-5 rounded-2xl glass border border-white/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-lg text-gray-900">Horário</p>
                    <p className="text-gray-700 font-medium">Segunda a Sexta: 8h - 18h</p>
                    <p className="text-sm text-gray-600">Sábado: 8h - 12h</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-3xl shadow-2xl overflow-hidden h-80 border border-white/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.8!2d-43.85!3d-19.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQ2JzEyLjAiUyA0M8KwNTEnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
