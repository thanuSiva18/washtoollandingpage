import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Star } from "lucide-react";

const WHATSAPP_TRIAL_URL = "https://wa.me/919385439607?text=Hi%2C%20I%20want%20to%20start%20my%20free%207-day%20trial%20for%20the%20car%20wash%20management%20app.";
const WHATSAPP_TALK_URL = "https://wa.me/919385439607?text=Hi%2C%20I%27m%20interested%20in%20the%20Owner%20Lifetime%20Plan.%20Please%20share%20more%20details.";

const plans = [
  {
    name: "Owner Lifetime Plan",
    subtext: "For long-term owners who don’t want monthly bills",
    price: "₹20,000",
    period: " — Pay once",
    highlightLine: "No monthly fees. No renewal tension.",
    features: [
      "Lifetime access to all current core features",
      "Unlimited bookings forever",
      "Revenue & staff management",
      "Mobile access",
      "Free setup & training",
      "Local WhatsApp support"
    ],
    reassurance: "Built for owners who plan to run their car wash for years.",
    ctaText: "Get Lifetime Access",
    ctaUrl: WHATSAPP_TALK_URL,
    highlight: true,
    badge: "OWNER LIFETIME PLAN"
  },
  {
    name: "Yearly Plan",
    subtext: "Best for owners running daily operations seriously",
    price: "₹749",
    period: "/ month",
    billingNote: "Billed yearly",
    highlightLine: "Save ₹3,000 per year",
    features: [
      "Everything in Monthly",
      "Free setup & training",
      "Priority WhatsApp support"
    ],
    ctaText: "Start Free Trial",
    ctaUrl: WHATSAPP_TRIAL_URL,
    highlight: false,
    badge: null
  },
  {
    name: "Monthly Plan",
    subtext: "For small shops trying software for the first time",
    price: "₹999",
    period: "/ month",
    features: [
      "All core features included",
      "Unlimited bookings",
      "Revenue dashboard",
      "Staff & service tracking",
      "Mobile access",
      "WhatsApp support"
    ],
    ctaText: "Start Free Trial",
    ctaUrl: WHATSAPP_TRIAL_URL,
    highlight: false,
    badge: null
  }
];

const PricingSection = () => {
  const handleCtaClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section id="pricing" className="py-20 md:py-32 relative">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Simple pricing. No confusion. No pressure.
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Choose what fits your business today — upgrade anytime.
            </p>
          </div>

          {/* Pricing cards */}
          {/* Mobile: Horizontal Scroll Snap | Desktop: Grid */}
          <div className="flex md:grid md:grid-cols-3 gap-6 items-start overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 px-1 md:px-0 -mx-4 md:mx-0 scrollbar-hide">
            {/* Added spacer for mobile left scroll padding */}
            <div className="w-1 md:hidden shrink-0 snap-center" />

            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 flex flex-col shrink-0 w-[85vw] md:w-auto h-full snap-center ${plan.highlight
                  ? "bg-card border-4 border-accent shadow-[0_20px_50px_hsl(var(--accent)/0.3)] md:scale-110 z-10"
                  : "bg-background/50 border border-border/50 hover:border-border hover:bg-card hover:shadow-lg opacity-90 hover:opacity-100"
                  } ${plan.highlight ? "order-1 md:order-none" : index === 1 ? "order-2 md:order-none" : "order-3 md:order-none"}`}
              // Note: The flex order above is redundant since array is already reordered, but kept for clarity if array structure changes.
              // Since we physically reordered the array 'plans' to have Lifetime first, we don't strictly need 'order' classes if we want that order everywhere.
              // BUT, user asked for "Mobile: One-Time visible first", and "Desktop: Keep existing".
              // The existing desktop was [Monthly, Yearly, Lifetime]. The new array is [Lifetime, Yearly, Monthly].
              // To keep Desktop looking like [Monthly, Yearly, Lifetime] we need to use 'order-last' or similar on grid.
              // Actually, better approach: Use the reordered array for Mobile flow, but visually reorder using 'md:order-...' for desktop grid.
              // Let's fix the array order to be: [Lifetime, Yearly, Monthly] as requested for mobile default.
              // And for desktop Grid: Lifetime should probably be in the middle or last?
              // Original request: "Desktop Rule: Keep existing 3-column pricing layout". Original was [Monthly, Yearly, Lifetime]. 
              // Let's adjust classes below to force visual order on desktop: Monthly(1), Yearly(2), Lifetime(3).
              >
                {/* 
                    Mobile Swipe Logic:
                    - Container: flex, overflow-x-auto, snap-x.
                    - Items: shrink-0, w-[85vw], snap-center.
                    
                    Visual Order Logic:
                    - Array is [Lifetime (highlight), Yearly, Monthly].
                    - Mobile displays in array order: Lifetime -> Yearly -> Monthly.
                    - Desktop (md:grid) needs to display: Monthly -> Yearly -> Lifetime.
                    
                    We can use `md:order-` classes. 
                    - Lifetime (index 0): md:order-3
                    - Yearly (index 1): md:order-2
                    - Monthly (index 2): md:order-1
                 */}
                <style>
                  {`
                      @media (min-width: 768px) {
                        .desktop-order-1 { order: 1; }
                        .desktop-order-2 { order: 2; }
                        .desktop-order-3 { order: 3; }
                      }
                      /* Hide scrollbar for Chrome, Safari and Opera */
                      .scrollbar-hide::-webkit-scrollbar {
                          display: none;
                      }
                      /* Hide scrollbar for IE, Edge and Firefox */
                      .scrollbar-hide {
                          -ms-overflow-style: none;  /* IE and Edge */
                          scrollbar-width: none;  /* Firefox */
                      }
                    `}
                </style>

                <div className={`${index === 0 ? "md:order-3" : index === 1 ? "md:order-2" : "md:order-1"} contents`}>

                  {/* Badge */}
                  {plan.badge && (
                    <div className="absolute top-0 left-0 right-0 bg-accent text-accent-foreground py-2 text-center z-10">
                      <div className="flex items-center justify-center gap-1 text-sm font-bold tracking-wide">
                        <Star className="h-4 w-4 fill-current" />
                        {plan.badge}
                      </div>
                    </div>
                  )}

                  <div className={`p-6 flex flex-col h-full ${plan.badge ? "pt-12" : ""}`}>
                    {/* Plan name & Subtext */}
                    <div className="mb-4">
                      <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? "text-primary dark:text-white" : ""}`}>{plan.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed min-h-[40px]">
                        {plan.subtext}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline flex-wrap gap-1">
                        <span className={`font-bold ${plan.highlight ? "text-4xl" : "text-3xl"}`}>
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-muted-foreground text-sm font-medium">{plan.period}</span>
                        )}
                      </div>
                      {plan.billingNote && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {plan.billingNote}
                        </p>
                      )}
                      {plan.highlightLine && (
                        <p className={`text-sm font-semibold mt-2 ${plan.highlight ? "text-accent" : "text-green-600"}`}>
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
                      <div className="mb-6 text-xs text-center text-muted-foreground italic px-2">
                        “{plan.reassurance}”
                      </div>
                    )}

                    {/* CTA */}
                    <div className="mt-auto">
                      <Button
                        variant={plan.highlight ? "cta" : "outline"}
                        size="lg"
                        className={`w-full ${plan.highlight ? "shadow-lg hover:shadow-xl" : "bg-transparent border-primary/20 hover:bg-primary/5 hover:text-primary"}`}
                        onClick={() => handleCtaClick(plan.ctaUrl)}
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        {plan.ctaText}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Added spacer for mobile right scroll padding */}
            <div className="w-1 md:hidden shrink-0 snap-center" />
          </div>

          {/* Pricing note */}
          <p className="text-center text-sm text-muted-foreground mt-12 opacity-70">
            All plans include free setup and 7-day free trial • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;