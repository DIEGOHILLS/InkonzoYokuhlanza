import { CheckCircle2 } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    "Experienced and trained professionals",
    "Affordable pricing with no hidden fees",
    "Flexible scheduling to fit your needs",
    "Satisfaction guaranteed on every job",
    "Advanced cleaning equipment and techniques",
    "Friendly and courteous service",
    "Valet services available"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-25 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Why Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're committed to providing exceptional cleaning services that exceed your expectations. 
            Our professional team ensures your bins are spotless year-round.
          </p>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle2
                  className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5 animate-bounce-in"
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                />
                <p className="text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
