import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trash2, Car, Wrench, Sparkles, Shield, Clock } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Trash2,
      title: "Dustbin Cleaning",
      description: "Subscription-based cleaning service - choose weekly (R45) or monthly (R140) plans for hassle-free bin maintenance.",
      gradient: "gradient-hero"
    },
    {
      icon: Wrench,
      title: "Bin Repair",
      description: "Expert repair services for damaged bins, extending their lifespan and saving you replacement costs.",
      gradient: "gradient-accent"
    },
    {
      icon: Car,
      title: "Premium Car Wash",
      description: "Visit us on-site at Bloubok Street for professional car washing services that leave your vehicle spotless. Valet services available upon request.",
      gradient: "gradient-hero. "
    }
  ];

  const features = [
    { icon: Sparkles, title: "Eco-Friendly", description: "Environmentally safe cleaning products" },
    { icon: Clock, title: "Fast & Reliable", description: "Quick turnaround on all services" }
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 gradient-mesh opacity-30 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional cleaning solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card 
              key={index} 
              className="border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 group animate-bounce-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader>
                <div className={`w-20 h-20 rounded-2xl ${service.gradient} flex items-center justify-center mb-6 shadow-glow group-hover:scale-110 transition-transform`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 p-6 rounded-lg bg-muted/50 hover:bg-muted transition-all hover:scale-105 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
