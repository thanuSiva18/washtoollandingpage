import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Star } from "lucide-react";

const WHATSAPP_TRIAL_URL = "https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20start%20my%20free%207-day%20trial%20for%20the%20car%20wash%20management%20app.";
const WHATSAPP_TALK_URL = "https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20the%20One-Time%20Owner%20Plan.%20Please%20share%20more%20details.";

const features = [
  "All core features included",
  "Unlimited bookings",
  "Revenue dashboard",
  "Staff management",
  "Mobile app access",
  "Free setup & training",
  "Local WhatsApp support"
];

const plans = [
  {
    name: "Monthly Plan",
    price: "₹999",
    period: "/ month",
    description: "Best for getting started",
    highlight: false,
    badge: null,
    ctaText: "Start Free Trial",
    ctaUrl: WHATSAPP_TRIAL_URL
  },
  {
    name: "Yearly Plan",
    price: "₹749",
    period: "/ month",
    billingNote: "Billed yearly",
    description: "Best value for growing car wash owners",
    highlight: false,
    badge: null,
    ctaText: "Start Free Trial",
    ctaUrl: WHATSAPP_TRIAL_URL
  },
  {
    name: "One-Time Owner Plan",
    price: "₹20,000",
    period: "",
    description: "Pay once. Use forever. No monthly tension.",
    highlight: true,
    badge: "BEST VALUE",
    ctaText: "Talk to Us",
    ctaUrl: WHATSAPP_TALK_URL
  }
];

const PricingSection = () => {
  const handleCtaClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, honest pricing
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose the plan that works for your business
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                  plan.highlight 
                    ? "bg-card border-4 border-accent shadow-[0_0_30px_hsl(var(--accent)/0.3)] scale-105 md:scale-110 z-10" 
                    : "bg-card border border-border shadow-soft hover:shadow-elevated"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute top-0 left-0 right-0 bg-accent text-accent-foreground py-2 text-center">
                    <div className="flex items-center justify-center gap-1 text-sm font-bold">
                      <Star className="h-4 w-4 fill-current" />
                      {plan.badge}
                    </div>
                  </div>
                )}

                <div className={`p-6 ${plan.badge ? "pt-12" : ""}`}>
                  {/* Plan name */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className={`font-bold ${plan.highlight ? "text-4xl" : "text-3xl"}`}>
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-muted-foreground">{plan.period}</span>
                      )}
                    </div>
                    {plan.billingNote && (
                      <p className="text-sm text-muted-foreground mt-1">
                        {plan.billingNote}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className={`flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center ${
                          plan.highlight ? "bg-accent/20" : "bg-primary/10"
                        }`}>
                          <Check className={`h-2.5 w-2.5 ${plan.highlight ? "text-accent" : "text-primary"}`} />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    variant={plan.highlight ? "cta" : "default"} 
                    size="lg" 
                    className="w-full"
                    onClick={() => handleCtaClick(plan.ctaUrl)}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    {plan.ctaText}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Pricing note */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            All plans include free setup and 7-day free trial • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;