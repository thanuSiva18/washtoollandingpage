import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Star } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20start%20my%20free%207-day%20trial%20for%20the%20car%20wash%20management%20app.";

const features = [
  "All core features included",
  "Unlimited bookings",
  "Revenue dashboard",
  "Staff management",
  "Mobile app access",
  "Free setup & training",
  "Local WhatsApp support",
  "7-day free trial included"
];

const PricingSection = () => {
  const handleCtaClick = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="max-w-xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, honest pricing
            </h2>
            <p className="text-muted-foreground text-lg">
              One plan. Everything included. Start with 7 days free.
            </p>
          </div>

          {/* Pricing card */}
          <div className="relative rounded-3xl bg-card border-2 border-primary shadow-elevated overflow-hidden">
            {/* Popular badge */}
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl-xl">
              <div className="flex items-center gap-1 text-sm font-semibold">
                <Star className="h-4 w-4 fill-current" />
                Most Chosen
              </div>
            </div>

            <div className="p-8">
              {/* Plan name */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Yearly Plan</h3>
                <p className="text-muted-foreground text-sm">
                  Best value for serious business owners
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-bold">₹749</span>
                  <span className="text-muted-foreground text-lg">/ month</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Billed yearly • Save ₹3,000/year
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button 
                variant="cta" 
                size="xl" 
                className="w-full"
                onClick={handleCtaClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Free 7-Day Trial
              </Button>

              <p className="text-center text-xs text-muted-foreground mt-4">
                No credit card required • Trial auto-expires • No obligations
              </p>
            </div>

            {/* Monthly option - de-emphasized */}
            <div className="border-t border-border bg-muted/50 px-8 py-4">
              <p className="text-center text-sm text-muted-foreground">
                Prefer monthly? <span className="font-medium">₹999/month</span> also available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
