interface Product {
  name: string;
  image: string;
}

const products: Product[] = [
  { name: 'Box para Banheiro', image: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Janelas de Correr', image: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Portas de Vidro', image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Guarda-corpo', image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Espelhos sob Medida', image: 'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Fechamentos de Varanda', image: 'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

const ProductsSection = () => {
  return (
    <section id="produtos" className="py-24 bg-gradient-to-b from-gray-50/50 to-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
            Nossos Produtos
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Soluções completas em vidro temperado para todos os ambientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image container with overlay */}
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                {/* Glass card on hover */}
                <div className="absolute inset-0 glass-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center px-6">
                    <p className="text-white text-lg mb-4">Clique para mais detalhes</p>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Product name */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="glass-dark rounded-2xl p-4 border border-white/10">
                  <h3 className="text-2xl font-bold text-white group-hover:scale-105 transition-transform">
                    {product.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
