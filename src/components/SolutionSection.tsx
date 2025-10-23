
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Wifi, BarChart3 } from "lucide-react";
import iotImage from "@/assets/iot-system.png";
import { ChartContainer } from "@/components/ui/chart";
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar, Cell } from "recharts";

export const SolutionSection = () => {
  // Data untuk bar chart perbandingan PM2.5
  const pm25Data = [
    { name: "WHO Safe Level", value: 10, fill: "#22c55e" },
    { name: "Jakarta Avg", value: 65, fill: "#ef4444" },
    { name: "Indoor (No Filter)", value: 82, fill: "#ef4444" },
    { name: "Moss Panel", value: 18, fill: "#22c55e" },
  ];
  return (
  <section className="py-20 bg-white relative overflow-hidden">


      <div className="container mx-auto px-4 relative z-10">
        
        {/* Transition Text */}
        <div className="text-center mb-16 animate-fade-in">
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-['Playfair_Display']">
            Meet Smart Moss Panel
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-poppins">
            An IoT-based adaptive air cleaning system that brings the power of nature into your home
          </p>
        </div>

        {/* Main Visual */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative flex justify-center items-center animate-fade-in-up">
            <img 
              src={iotImage} 
              alt="Smart Moss Panel IoT System"
              className="max-w-xs w-full h-auto"
            />
            {/* Floating Tech Card */}
            <Card className="absolute -top-4 -right-4 bg-card shadow-medium animate-float">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <Wifi className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Real-time Monitoring</div>
                  <div className="text-sm text-muted-foreground">24/7 Connected</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-3xl font-bold text-foreground">
              Nature Meets Technology
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed font-poppins">
              Smart Moss Panel combines centuries-old natural air purification with cutting-edge IoT sensors 
              to create the world's most intelligent living air filter.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-poppins">
              Living moss naturally absorbs harmful pollutants like PM2.5, CO2, and VOCs, while our smart 
              sensors continuously monitor air quality and adjust the panel's performance in real-time.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                <Leaf className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">Living Moss</div>
                <div className="text-sm text-muted-foreground">Natural Filter</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                <Wifi className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">IoT Sensors</div>
                <div className="text-sm text-muted-foreground">Smart Monitoring</div>
              </div>
              <div className="text-center p-4 bg-card rounded-xl shadow-soft">
                <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="font-semibold">AI Analytics</div>
                <div className="text-sm text-muted-foreground">Predictive Care</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in-up">
          <Card className="bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-3">Air Purification</h4>
              <p className="text-muted-foreground font-poppins">
                Reduces indoor PM2.5 levels by up to 65% within 2 hours, naturally filtering harmful pollutants
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-2" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Humidity Balance</h4>
              <p className="text-muted-foreground font-poppins">
                Maintains optimal humidity levels (40-60%) for comfortable breathing and healthier indoor climate
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-2" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Environmental Comfort</h4>
              <p className="text-muted-foreground font-poppins">
                Creates a calming biophilic environment while actively improving your indoor air quality
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
