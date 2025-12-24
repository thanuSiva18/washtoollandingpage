import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919360220928?text=Hi%2C%20I%20want%20to%20start%20my%20free%207-day%20trial%20for%20the%20car%20wash%20management%20app.";

const Header = () => {
  const handleCtaClick = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">Z</span>
            </div>
            <span className="font-bold text-lg">Z-Wash</span>
          </a>

          {/* Nav links - hidden on mobile */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#demo"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Demo
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </a>
          </nav>

          {/* CTA */}
          <Button
            variant="default"
            size="sm"
            onClick={handleCtaClick}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Start Free Trial</span>
            <span className="sm:hidden">Try Free</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
