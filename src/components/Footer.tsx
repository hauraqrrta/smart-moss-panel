import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Leaf className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold font-['Playfair_Display']">Smart Moss Panel</span>
            </div>
            <p className="text-background/80 mb-6 max-w-md leading-relaxed font-poppins">
              World's first IoT-powered living air purifier. Bringing nature and technology together 
              to create healthier indoor environments.
            </p>
            <p className="text-sm text-background/60 italic font-poppins">
              Where Nature Meets Technology
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "How It Works", "Features", "Pricing", "FAQ", "Blog"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className="text-background/80 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@smartmosspanel.com" className="text-background/80 hover:text-primary transition-colors">
                  hello@smartmosspanel.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+6221123456" className="text-background/80 hover:text-primary transition-colors">
                  +62 895 1716 4854
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/80">
                  Bandung, Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-background/20 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-background/60 text-sm font-poppins">
            © {currentYear} Smart Moss Panel. All rights reserved.
          </p>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Facebook, label: "Facebook" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Twitter, label: "Twitter" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="text-background/60 hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-background/60 hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
