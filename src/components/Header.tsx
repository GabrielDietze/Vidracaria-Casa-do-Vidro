import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
  setCurrentView: (view: 'home' | 'portfolio') => void;
}

const Header = ({ isMenuOpen, setIsMenuOpen, scrollToSection, setCurrentView }: HeaderProps) => {
  return (
    <header className="fixed top-0 w-full glass-strong shadow-lg z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img src="/image.png" alt="Casa do Vidro Logo" className="h-12 w-12 relative z-10 drop-shadow-lg" />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              Casa do Vidro
            </div>
          </div>

          <nav className="hidden md:flex space-x-2">
            <button onClick={() => { setCurrentView('home'); scrollToSection('inicio'); }} className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all font-medium group">
              <span className="relative z-10">Início</span>
              <div className="absolute inset-0 glass rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all font-medium group">
              <span className="relative z-10">Portfólio</span>
              <div className="absolute inset-0 glass rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button onClick={() => { setCurrentView('home'); scrollToSection('produtos'); }} className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all font-medium group">
              <span className="relative z-10">Produtos</span>
              <div className="absolute inset-0 glass rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button onClick={() => { setCurrentView('home'); scrollToSection('sobre'); }} className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all font-medium group">
              <span className="relative z-10">Sobre</span>
              <div className="absolute inset-0 glass rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button onClick={() => { setCurrentView('home'); scrollToSection('contato'); }} className="relative px-4 py-2 text-gray-700 hover:text-blue-600 transition-all font-medium group">
              <span className="relative z-10">Contato</span>
              <div className="absolute inset-0 glass rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </nav>

          <a href="https://wa.me/5531996503034" target="_blank" rel="noopener noreferrer" className="hidden md:block relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all group">
            <span className="relative z-10">Solicitar Orçamento</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700 glass p-2 rounded-lg hover:scale-110 transition-transform">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden glass-strong border-t border-white/20 animate-fade-in">
          <div className="px-4 py-4 space-y-2">
            <button onClick={() => { setCurrentView('home'); scrollToSection('inicio'); }} className="block w-full text-left glass px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:scale-105 transition-all font-medium">Início</button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left glass px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:scale-105 transition-all font-medium">Portfólio</button>
            <button onClick={() => { setCurrentView('home'); scrollToSection('produtos'); }} className="block w-full text-left glass px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:scale-105 transition-all font-medium">Produtos</button>
            <button onClick={() => { setCurrentView('home'); scrollToSection('sobre'); }} className="block w-full text-left glass px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:scale-105 transition-all font-medium">Sobre</button>
            <button onClick={() => { setCurrentView('home'); scrollToSection('contato'); }} className="block w-full text-left glass px-4 py-3 rounded-lg text-gray-700 hover:text-blue-600 hover:scale-105 transition-all font-medium">Contato</button>
            <a href="https://wa.me/5531996503034" target="_blank" rel="noopener noreferrer" className="block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold text-center mt-4 hover:shadow-lg hover:scale-105 transition-all">Solicitar Orçamento</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
