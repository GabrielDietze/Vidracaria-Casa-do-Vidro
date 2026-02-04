import { Phone } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5531996503034"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all z-40 group border-4 border-white/80"
    >
      <Phone className="text-white group-hover:rotate-12 transition-transform" size={28} />
      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10"></div>
    </a>
  );
};

export default WhatsAppButton;
