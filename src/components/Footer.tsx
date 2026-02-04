const Footer = () => {
  return (
    <footer className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Glass reflection with sunlight"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative text-center px-6 z-10">
        <div className="glass-dark rounded-3xl px-16 py-12 inline-block border-2 border-white/20 shadow-2xl relative overflow-hidden group">
          {/* Shimmer effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 animate-shimmer"></div>
          </div>
          
          <div className="relative z-10">
            <p className="text-4xl md:text-6xl font-light text-white mb-8 tracking-wide drop-shadow-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
              Cada projeto, um reflexo de perfeição
            </p>
            <div className="h-0.5 w-64 bg-gradient-to-r from-transparent via-white/80 to-transparent mx-auto mb-8" />
            <div className="text-white/90 text-base tracking-[0.3em] font-semibold">
              CASA DO VIDRO
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="glass-dark rounded-full px-8 py-3 inline-block border border-white/20">
            <p className="text-white/70 text-sm tracking-wider">
              © {new Date().getFullYear()} Casa do Vidro. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
