import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  title: string;
  autoPlay?: boolean;
}

const ImageCarousel = ({ images, title, autoPlay = true }: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    if (!autoPlay || isHovered || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [autoPlay, isHovered, images.length]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <>
      <div
        className="relative w-full h-full overflow-hidden rounded-3xl cursor-pointer group border-4 border-white/50 shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setLightboxOpen(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`${title} - ${index + 1}`}
              className={`w-full h-full object-cover transition-all duration-700 ${
                index === currentIndex ? 'scale-100' : 'scale-100'
              } group-hover:scale-105 group-hover:brightness-105`}
            />
          </div>
        ))}

        {/* Glass overlay effect */}
        <div className="absolute inset-0 glass-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none flex items-center justify-center">
          <div className="text-white text-center">
            <p className="text-xl font-semibold mb-2">Clique para ampliar</p>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrev();
              }}
              className={`absolute left-4 top-1/2 -translate-y-1/2 glass-strong border-2 border-white/40 rounded-full p-3 transition-all duration-300 ${
                isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
              } hover:scale-110 shadow-2xl cursor-pointer z-10`}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" strokeWidth={3} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className={`absolute right-4 top-1/2 -translate-y-1/2 glass-strong border-2 border-white/40 rounded-full p-3 transition-all duration-300 ${
                isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              } hover:scale-110 shadow-2xl cursor-pointer z-10`}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" strokeWidth={3} />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 glass-dark px-4 py-3 rounded-full">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    index === currentIndex
                      ? 'w-10 h-2.5 bg-gradient-to-r from-blue-400 to-cyan-400 shadow-lg shadow-blue-400/50'
                      : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            <div
              className={`absolute top-4 right-4 glass-strong border-2 border-white/40 rounded-full px-5 py-2 transition-all duration-500 shadow-xl ${
                isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              <span className="text-gray-800 text-sm font-bold">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </>
        )}
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 bg-white/95 border border-gray-200 rounded-full p-3 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg z-10 cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6 text-gray-800" strokeWidth={2} />
          </button>

          <div className="relative w-full h-full flex items-center justify-center px-4">
            <div
              className="absolute inset-0 -z-10"
              style={{
                backdropFilter: 'blur(6px)',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
              }}
            />

            <img
              src={images[currentIndex]}
              alt={`${title} - ${currentIndex + 1}`}
              className="max-w-[85vw] max-h-[85vh] object-contain rounded-2xl shadow-2xl transition-all duration-400 scale-100 animate-lightbox-zoom"
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1), 0 0 60px rgba(255, 255, 255, 0.15)',
              }}
              onClick={(e) => e.stopPropagation()}
            />

            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrev();
                  }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/95 border border-gray-200 rounded-full p-4 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-7 h-7 text-gray-800" strokeWidth={2} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/95 border border-gray-200 rounded-full p-4 hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-7 h-7 text-gray-800" strokeWidth={2} />
                </button>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/95 border border-gray-200 rounded-full px-6 py-3 shadow-lg">
                  <span className="text-gray-800 text-lg font-light">
                    {currentIndex + 1} / {images.length}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ImageCarousel;
