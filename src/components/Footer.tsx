import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary-foreground">
              Power Build Solutions
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Building excellence since 2005. Your trusted partner for commercial and residential construction projects.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </a>
              <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Our Services
              </a>
              <a href="#quote" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Request Quote
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-foreground">Services</h4>
            <nav className="flex flex-col space-y-2">
              <span className="text-primary-foreground/80">Flat Roofing</span>
              <span className="text-primary-foreground/80">Construction Cleaning</span>
              <span className="text-primary-foreground/80">Demolition & Hand Excavation</span>
              <span className="text-primary-foreground/80">Renovations</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-primary-foreground">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+1 (647) 917-9646</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>powerconstructiongc@gmail.com</span>
              </div>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>61 Jessie Street.<br />Canada Brampton</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span>Mon-Sun: 7AM - 6PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Power Build Solutions. All rights reserved.

          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
