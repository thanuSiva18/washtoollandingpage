import { Button } from "@/components/ui/button";
import { MessageCircle, Check } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20start%20my%20free%207-day%20trial%20for%20the%20car%20wash%20management%20app.";

const HeroSection = () => {
  const handleCtaClick = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up opacity-0">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-muted-foreground">
              Trusted by 100+ car wash owners in Tamil Nadu
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up opacity-0 animation-delay-100">
            Stop losing car wash{" "}
            <span className="text-primary">bookings.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 animation-delay-200">
            Manage bookings, services, and today's revenue in one simple app. 
            Know what's happening even when you're not there.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-up opacity-0 animation-delay-300">
            <Button 
              variant="cta" 
              size="xl" 
              onClick={handleCtaClick}
              className="w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start Free 7-Day Trial
            </Button>
            <Button 
              variant="heroOutline" 
              size="lg"
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto"
            >
              Watch Demo
            </Button>
          </div>

          {/* Trust elements */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground animate-fade-up opacity-0 animation-delay-400">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Free setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
