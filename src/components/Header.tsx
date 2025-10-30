import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className={`w-10 h-10 rounded-lg gradient-hero flex items-center justify-center ${isScrolled ? 'shadow-glow' : ''}`}>
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className={`text-xl font-bold ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              InkonzoYokuhlanza
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className={`font-medium transition-colors hover:text-primary ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              Services
            </a>
            <a href="#pricing" className={`font-medium transition-colors hover:text-primary ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              Pricing
            </a>
            <a href="#contact" className={`font-medium transition-colors hover:text-primary ${isScrolled ? 'text-foreground' : 'text-white'}`}>
              Contact
            </a>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;
