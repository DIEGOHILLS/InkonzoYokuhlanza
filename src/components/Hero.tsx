import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-clean-service.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Subtle blue gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-90" />
      
      {/* Gradient mesh overlay */}
      <div className="absolute inset-0 z-0 gradient-mesh opacity-20" />
      
      {/* Background image with blend mode */}
      <div 
        className="absolute inset-0 z-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Floating Bubbles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 20}%`,
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`,
              animationDuration: `${8 + Math.random() * 8}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center text-white pt-20">
        <div className="flex justify-center mb-8 animate-bounce-in">
          <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-glow animate-glow">
            <Sparkles className="h-12 w-12" />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in-up drop-shadow-2xl">
          Premium Cleaning Services
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed animate-slide-up drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
          Weekly or monthly dustbin cleaning subscriptions from <span className="font-bold">R45/week</span>
          <br />
          Premium car wash services available on-site
        </p>
        
                <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm opacity-90 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2 hover:scale-110 transition-transform">
            <div className="w-2 h-2 rounded-full bg-white animate-glow" />
            <span>Eco-Friendly Products</span>
          </div>
          <div className="flex items-center gap-2 hover:scale-110 transition-transform">
            <div className="w-2 h-2 rounded-full bg-white animate-glow" />
            <span>No Contracts</span>
          </div>
          <div className="flex items-center gap-2 hover:scale-110 transition-transform">
            <div className="w-2 h-2 rounded-full bg-white animate-glow" />
            <span>Cancel Anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
