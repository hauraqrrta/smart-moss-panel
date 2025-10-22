import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ImpactSection } from "@/components/ImpactSection";
import { FAQSection } from "@/components/FAQSection";
import { SubscriptionSection } from "@/components/SubscriptionSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen font-['Inter']">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <ImpactSection />
      <FAQSection />
      <SubscriptionSection />
      <Footer />
    </main>
  );
};

export default Index;
