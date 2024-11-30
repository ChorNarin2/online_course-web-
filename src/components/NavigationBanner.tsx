import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface BannerSlide {
  title: string;
  description: string;
  imageUrl: string;
}

const slides: BannerSlide[] = [
  {
    title: "Learning that gets you",
    description: "Skills for your present (and your future). Get started with us.",
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80"
  },
  {
    title: "Learn from industry experts",
    description: "Get practical knowledge from professionals who've been there.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
  },
  {
    title: "Achieve your goals",
    description: "Take the next step in your career with our certified courses.",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
  }
];

export function NavigationBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[500px] mt-16 bg-gray-100 overflow-hidden">
      <div 
        className="absolute inset-0 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute top-0 left-0 w-full h-full"
            style={{ left: `${index * 100}%` }}
          >
            <div className="relative w-full h-full">
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
                  <div className="max-w-xl text-white">
                    <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                    <p className="text-xl">{slide.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}