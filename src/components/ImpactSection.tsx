import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

export const ImpactSection = () => {
  const stats = [
    { value: "65%", label: "PM2.5 Reduction", sublabel: "Within 2 hours" },
    { value: "40-60%", label: "Optimal Humidity", sublabel: "Maintained naturally" },
    { value: "24/7", label: "Active Monitoring", sublabel: "IoT-powered" },
    { value: "100%", label: "Natural & Safe", sublabel: "No chemicals" },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Environmental Scientist",
      initial: "SM",
      quote: "As a researcher in air quality, I'm impressed by how Smart Moss Panel combines natural processes with precise monitoring. The PM2.5 reduction data is remarkable.",
      color: "bg-primary/20 text-primary",
    },
    {
      name: "Ahmad Rizki",
      role: "Architect & Designer",
      initial: "AR",
      quote: "Finally, an air purifier that enhances interior design rather than disrupting it. My clients love the biophilic aesthetic combined with smart functionality.",
      color: "bg-accent/20 text-accent-foreground",
    },
    {
      name: "Linda Hartono",
      role: "Mother of Two",
      initial: "LH",
      quote: "Since installing Smart Moss Panel, my children's allergies have improved significantly. The app gives me peace of mind knowing our air quality is constantly monitored.",
      color: "bg-secondary/30 text-secondary-foreground",
    },
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Playfair_Display']">
            Proven Impact, Real Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-poppins">
            Backed by data and trusted by users who care about clean air
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-card hover:shadow-medium transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">What Our Users Say</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
                  <p className="text-muted-foreground leading-relaxed mb-6 italic font-poppins">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <Avatar className={testimonial.color}>
                      <AvatarFallback className="font-semibold">
                        {testimonial.initial}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
