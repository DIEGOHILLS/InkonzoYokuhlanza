import { Users, Calendar, Star, Award } from "lucide-react";

const Stats = () => {
  const stats = [
    { icon: Users, value: "50+", label: "Happy Customers" },
    { icon: Calendar, value: "50+", label: "Bins Cleaned" },
    { icon: Star, value: "4.9", label: "Average Rating" },
    { icon: Award, value: "1+", label: "Years Experience" }
  ];

  return (
    <section className="py-16 bg-muted/50 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-20 -z-10" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:scale-110 transition-transform shadow-glow">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-gradient mb-2 group-hover:scale-105 transition-transform">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
