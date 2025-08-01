import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-jewelry.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury Jewelry" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Timeless
          <span className="block text-primary">Elegance</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in">
          Discover our exquisite collection of handcrafted jewelry, 
          where every piece tells a story of luxury and sophistication.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button variant="luxury" size="lg" className="text-lg px-8 py-4">
            Explore Collection
          </Button>
          <Button variant="elegant" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white text-white hover:bg-white hover:text-secondary">
            Custom Design
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;