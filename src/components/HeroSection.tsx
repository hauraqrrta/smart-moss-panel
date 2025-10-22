import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-moss-panel.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Glossy overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,0.18) 10%, rgba(255,255,255,0.08) 40%, rgba(255,255,255,0.22) 70%, rgba(255,255,255,0.05) 100%)",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground font-['Playfair_Display'] leading-tight">
              Breathe Nature,
              <br />
              <span className="text-secondary">Live Smarter</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto lg:mx-0 font-poppins">
              World's first <strong>IoT-powered living air purifier</strong> using real moss to naturally clean indoor air.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-strong text-lg px-8 py-6"
              >
                Get Early Access
              </Button>

            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-primary-foreground">65%</div>
                <div className="text-primary-foreground/80">PM2.5 Reduction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-primary-foreground">24/7</div>
                <div className="text-primary-foreground/80">IoT Monitoring</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold text-primary-foreground">100%</div>
                <div className="text-primary-foreground/80">Natural & Safe</div>
              </div>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative animate-float">
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Smart Moss Panel - IoT Living Air Purifier"
                className="w-full h-auto object-cover"
              />
              {/* Pulsing effect overlay */}
              <div className="absolute inset-0 bg-primary/20 animate-pulse-slow" />
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};
