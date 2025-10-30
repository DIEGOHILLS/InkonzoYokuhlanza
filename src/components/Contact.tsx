import { Button } from "@/components/ui/button";
import { Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const phoneNumber = "0740512319";
  const whatsappNumber = "27740512319"; 
  
  return (
    <section id="contact" className="py-24 bg-gradient-hero text-white relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Get in Touch
        </h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto opacity-95">
          Contact us or visit us for premium services
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
          <div className="flex flex-col items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 hover:scale-105 transition-all duration-300 animate-slide-in-left">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-xl">Call Us</h3>
            <p className="text-2xl font-bold opacity-95">074-051-2319</p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 mt-2"
              onClick={() => window.location.href = `tel:${phoneNumber}`}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
          
          <div className="flex flex-col items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 hover:scale-105 transition-all duration-300 animate-slide-in-right">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/20 flex items-center justify-center animate-glow">
              <MessageCircle className="h-8 w-8" />
            </div>
            <h3 className="font-semibold text-xl">WhatsApp Us</h3>
            <p className="text-2xl font-bold opacity-95">074-051-2319</p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 mt-2 bg-[#25D366] hover:bg-[#20BD5A]"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
               WhatsApp
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto hover:bg-white/20 transition-all animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <MapPin className="h-8 w-8" />
          </div>
          <h3 className="font-semibold text-xl">Visit Our Location</h3>
          <p className="text-2xl font-bold opacity-95">Bloubok Street</p>
          <p className="opacity-90">Come visit us for premium car wash services</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
