import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Sparkles } from "lucide-react";
import { toast } from "sonner";

export const SubscriptionSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Welcome to the Green Revolution!", {
        description: "Check your email for exclusive early access benefits.",
      });
      setEmail("");
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Glassmorphism Background Elements */}
      <div className="absolute inset-0 bg-gradient-glass backdrop-blur-sm" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 font-['Playfair_Display'] animate-fade-in-up">
            Join the Green Revolution
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto animate-fade-in-up font-poppins" style={{ animationDelay: '0.1s' }}>
            Be among the first to experience the future of indoor air quality. 
            Get exclusive discounts and updates.
          </p>

          {/* Subscription Form */}
          <form 
            onSubmit={handleSubmit} 
            className="max-w-md mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-primary-foreground/10 backdrop-blur-md rounded-2xl border border-primary-foreground/20 shadow-strong">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-foreground/60" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-12 bg-primary-foreground/90 border-0 text-foreground placeholder:text-muted-foreground h-12 rounded-xl"
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                disabled={loading}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-medium h-12 px-8 rounded-xl font-semibold"
              >
                {loading ? "Joining..." : "Get Early Access"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
