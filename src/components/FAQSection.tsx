import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "How does Smart Moss Panel purify air?",
      answer: "Living moss naturally absorbs airborne pollutants including PM2.5, CO2, and VOCs through its cellular structure. Our IoT sensors monitor air quality in real-time and optimize the panel's microclimate for maximum purification efficiency.",
    },
    {
      question: "What maintenance does the moss require?",
      answer: "Smart Moss Panel is designed for minimal maintenance. The moss is self-sustaining and only requires occasional misting, which our app will remind you about. The IoT system monitors moss health and alerts you if any attention is needed.",
    },
    {
      question: "Is it safe for children and pets?",
      answer: "Absolutely! Unlike conventional air purifiers with filters and chemicals, Smart Moss Panel uses 100% natural living moss. It's completely safe for children, pets, and everyone in your home. The moss species we use are non-toxic and hypoallergenic.",
    },
    {
      question: "How much does it cost?",
      answer: "Smart Moss Panel starts at competitive pricing with various sizes available for different room dimensions. Early access members receive special discounts. Contact us for detailed pricing and installation options.",
    },
    {
      question: "Can I monitor air quality remotely?",
      answer: "Yes! Our mobile app provides 24/7 access to real-time air quality data from anywhere. You'll receive notifications about air quality changes, maintenance needs, and can view historical data trends.",
    },
    {
      question: "How long does installation take?",
      answer: "Professional installation typically takes 2-3 hours depending on the panel size and location. Our team handles everything including IoT setup and app configuration, ensuring your system is ready to use immediately.",
    },
    {
      question: "What's the coverage area?",
      answer: "A standard Smart Moss Panel effectively purifies spaces up to 40-60 square meters. We offer different sizes and can recommend the ideal configuration for your specific room dimensions.",
    },
    {
      question: "Does it work in low-light conditions?",
      answer: "Yes! The moss species we use are adapted for indoor conditions and thrive in low to moderate light. The panel includes subtle integrated LED lighting to maintain optimal growing conditions even in darker spaces.",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Playfair_Display']">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" style={{ font:'Poppins' }}>
            Everything you need to know about Smart Moss Panel
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-card border border-border rounded-lg px-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  <span className="font-semibold text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
