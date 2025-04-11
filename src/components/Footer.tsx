import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-cosmic text-cloud mt-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/10 rounded-full mix-blend-overlay filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Section */}
          <div className="relative">
            <div className="mb-6">
              <h3 className="text-3xl font-heading font-bold bg-gradient-to-r from-primary via-accent to-highlight bg-clip-text text-transparent">
                Bella Dresser
              </h3>
            </div>
            <p className="text-plum/80 font-body">
              Your destination for unique fashion in Pequot Lakes, Minnesota. Where European elegance meets lakeside charm.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Contact
            </h4>
            <div className="space-y-4 font-body">
              <p className="flex items-center group">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="h-4 w-4 text-primary" />
                </span>
                <span className="ml-3 text-plum/80">123 Main Street, Pequot Lakes, MN</span>
              </p>
              <p className="flex items-center group">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Phone className="h-4 w-4 text-accent" />
                </span>
                <span className="ml-3 text-plum/80">(218) 555-0123</span>
              </p>
              <p className="flex items-center group">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-highlight/10 group-hover:bg-highlight/20 transition-colors">
                  <Mail className="h-4 w-4 text-highlight" />
                </span>
                <span className="ml-3 text-plum/80">hello@belladresser.com</span>
              </p>
            </div>
          </div>

          {/* Social Section */}
          <div>
            <h4 className="text-xl font-heading font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="group relative"
                aria-label="Follow us on Instagram"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-lg opacity-0 group-hover:opacity-50 blur transition duration-500"></div>
                <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Instagram className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                </div>
              </a>
              <a 
                href="#" 
                className="group relative"
                aria-label="Follow us on Facebook"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-accent to-highlight rounded-lg opacity-0 group-hover:opacity-50 blur transition duration-500"></div>
                <div className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <Facebook className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-plum/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-plum/60 font-body">
              © 2024 Bella Dresser. All rights reserved.
            </p>
            <p className="text-sm text-plum/60 font-body flex items-center">
              Made with <Heart className="h-4 w-4 text-primary mx-1" /> in Pequot Lakes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
