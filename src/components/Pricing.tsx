import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Car } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Weekly Plan",
      price: "R45",
      period: "/week",
      features: [
        "Weekly dustbin cleaning",
        "Deep sanitization",
        "Odor removal",
        "Eco-friendly products",
        "Cancel anytime"
      ],
      popular: false
    },
    {
      name: "Monthly Plan",
      price: "R140",
      period: "/month",
      features: [
        "4 cleanings per month",
        "Deep sanitization",
        "Odor removal",
        "Eco-friendly products",
        "Priority service",
        "Cancel anytime"
      ],
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-25 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Dustbin Cleaning Subscriptions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for you. No contracts, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-2 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-slide-up ${
                plan.popular ? 'border-primary shadow-glow animate-glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground text-xl">{plan.period}</span>
                </div>
                <CardDescription>Perfect for regular maintenance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="inline-block border-2 border-secondary shadow-glow-secondary hover:scale-105 transition-transform animate-bounce-in" style={{ animationDelay: '0.3s' }}>
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl flex items-center justify-center gap-3">
                <Car className="h-8 w-8 text-secondary" />
                Car Wash Services
              </CardTitle>
              <CardDescription className="text-lg pt-2">
                Visit us on-site at <span className="font-semibold text-foreground">Bloubok Street</span> for premium car wash services
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
