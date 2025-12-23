import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Star } from "lucide-react";

const WHATSAPP_TRIAL_URL =
  "https://wa.me/919385439607?text=Hi%2C%20I%20want%20to%20start%20my%20free%207-day%20trial%20for%20the%20car%20wash%20management%20app.";
const WHATSAPP_MONTHLY_URL =
  "https://wa.me/919385439607?text=Hi%2C%20I%20want%20to%20start%20the%20Monthly%20Plan%20for%20the%20car%20wash%20management%20app.";
const WHATSAPP_YEARLY_URL =
  "https://wa.me/919385439607?text=Hi%2C%20I%20want%20to%20start%20the%20Yearly%20Plan%20for%20the%20car%20wash%20management%20app.";
const WHATSAPP_LIFETIME_URL =
  "https://wa.me/919385439607?text=Hi%2C%20I%27m%20interested%20in%20the%20Owner%20Lifetime%20Plan.%20Please%20share%20more%20details.";

const plans = [
  {
    name: "Monthly Plan",
    subtext: "Best for small shops or short-term use",
    price: "₹999",
    period: "/ month",
    highlightLine: "No priority support • No free onboarding",
    features: [
      "All core features",
      "Unlimited bookings",
      "Revenue dashboard",
      "Staff tracking"
    ],
    reassurance: "Upgrade anytime as your shop grows.",
    ctaText: "Start Monthly",
    ctaUrl: WHATSAPP_MONTHLY_URL,
    highlight: false as const,
    badge: undefined,
    size: "sm" as const,
  },
  {
    name: "Yearly Plan",
    subtext: "Save ₹3,000 per year",
    price: "₹749",
    period: "/ month (₹8,988 billed yearly)",
    highlightLine: "Includes free setup, training, and WhatsApp support",
    features: [
      "Everything in Monthly",
      "Free setup & training",
      "WhatsApp support"
    ],
    reassurance: undefined,
    ctaText: "Go Yearly",
    ctaUrl: WHATSAPP_YEARLY_URL,
    highlight: false as const,
    badge: "Most popular",
    size: "md" as const,
  },
  {
    name: "Owner Lifetime Plan",
    subtext: "Best for long-term owners who want total control",
    price: "₹19,999",
    period: "— One-time payment",
    highlightLine: "Cheaper than 2 years of subscription. No renewals.",
    features: [
      "Lifetime access to all features",
      "Unlimited bookings & staff",
      "Live revenue & reports",
      "Mobile access",
      "Free personal setup & training",
      "Priority WhatsApp support"
    ],
    reassurance: "No renewals. No price increases.",
    ctaText: "Get Lifetime Access",
    ctaUrl: WHATSAPP_LIFETIME_URL,
    highlight: true as const,
    badge: "Best for long-term owners",
    size: "lg" as const,
  },
];

const PricingSection = () => {
  const handleCtaClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-secondary/30 border-y border-border/40 relative">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Simple pricing. No confusion. No pressure.
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Choose what fits your business today — upgrade anytime.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden transition-all duration-200 flex flex-col h-full ${
                  plan.highlight
                    ? "bg-card border border-primary/60 shadow-elevated md:scale-105"
                    : "bg-card border border-border/60 shadow-soft hover:shadow-md"
                } ${
                  plan.size === "sm"
                    ? "md:translate-y-2"
                    : plan.size === "lg"
                      ? "md:-translate-y-2"
                      : ""
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wide">
                    <Star className="h-3 w-3" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div className={`p-6 flex flex-col h-full ${plan.badge ? "pt-14" : "pt-6"}`}>
                    {/* Plan name & Subtext */}
                    <div className="mb-4">
                      <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? "text-primary dark:text-white" : ""}`}>
                        {plan.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed min-h-[40px]">
                        {plan.subtext}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline flex-wrap gap-1">
                        <span
                          className={`font-bold leading-none ${
                            plan.highlight ? "text-4xl" : plan.size === "sm" ? "text-2xl" : "text-3xl"
                          }`}
                        >
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-muted-foreground text-sm font-medium">{plan.period}</span>
                        )}
                      </div>
                      {plan.highlightLine && (
                        <p
                          className={`text-sm font-semibold mt-2 ${
                            plan.highlight ? "text-accent" : "text-muted-foreground"
                          }`}
                        >
                          {plan.highlightLine}
                        </p>
                      )}
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${plan.highlight ? "bg-accent/20" : "bg-primary/10"
                            }`}>
                            <Check className={`h-3 w-3 ${plan.highlight ? "text-accent" : "text-primary"}`} />
                          </div>
                          <span className={`text-sm leading-tight ${plan.highlight ? "text-foreground font-medium" : "text-muted-foreground"}`}>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Reassurance text for Lifetime plan */}
                    {plan.reassurance && (
                      <div className="mb-6 text-xs text-center text-muted-foreground px-2">
                        {plan.reassurance}
                      </div>
                    )}

                    {/* CTA */}
                    <div className="mt-auto">
                      <Button
                        variant={plan.highlight ? "cta" : "outline"}
                        size="lg"
                        className="w-full"
                        onClick={() => handleCtaClick(plan.ctaUrl)}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        {plan.ctaText}
                      </Button>
                    </div>
                  </div>
              </div>
            ))}


          </div>

          {/* Trial note */}
          <div className="mt-10 space-y-3 text-center">
            <p className="text-sm text-muted-foreground">
              Not sure yet? Try everything free for 7 days — no credit card required.
            </p>
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => handleCtaClick(WHATSAPP_TRIAL_URL)}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;