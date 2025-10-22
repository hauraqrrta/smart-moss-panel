import { Card, CardContent } from "@/components/ui/card";
import { Activity, Database, Smartphone, TrendingUp } from "lucide-react";

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: Activity,
      title: "Smart Sensors",
      description: "IoT sensors continuously monitor PM2.5, CO2, humidity, and temperature levels in real-time",
      color: "bg-primary/20 text-primary",
    },
    {
      icon: Database,
      title: "Data Gateway",
      description: "Advanced algorithms process sensor data and optimize moss panel performance automatically",
      color: "bg-accent/20 text-accent-foreground",
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "View live air quality metrics, receive alerts, and control your panel from anywhere",
      color: "bg-secondary/30 text-secondary-foreground",
    },
    {
      icon: TrendingUp,
      title: "Dashboard Insights",
      description: "Track historical data, get personalized recommendations, and monitor your air quality trends",
      color: "bg-primary/20 text-primary",
    },
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Playfair_Display']">
            How Smart Moss Panel Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-poppins">
            A seamless integration of nature and technology, working together to keep your air clean
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 relative">

            
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className="relative bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shadow-soft">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 mt-4`}>
                    <step.icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-poppins">
                    {step.description}
                  </p>

                  {/* Arrow (except last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 transform -translate-y-1/2" style={{ right:'-24px' }}>
                      <svg className="w-6 h-6 text-primary opacity-50" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <Card className="mt-12 bg-muted animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Continuous Adaptive Learning</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto font-poppins">
                Our AI algorithms learn your space's unique air quality patterns and automatically adjust the moss panel's 
                performance for optimal purification. The longer it runs, the smarter it gets.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
