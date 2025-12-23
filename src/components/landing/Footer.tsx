import { MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 pb-8 border-b border-border">
            <p className="text-muted-foreground font-medium">
              Local Tamil support · Free setup · Cancel anytime
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="font-bold text-lg mb-2">WashFlow</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Simple car wash management for smart owners.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>

            {/* Contact */}
            <div className="md:text-right">
              <h4 className="font-semibold mb-3">Get in touch</h4>
              <div className="space-y-2">
                <a
                  href="https://wa.me/919385439607"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Support
                </a>
                <br />
                <a
                  href="mailto:hello@washflow.in"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  hello@washflow.in
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© 2024 WashFlow. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
