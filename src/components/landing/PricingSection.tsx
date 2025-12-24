import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Star, ShieldCheck } from "lucide-react";

const WHATSAPP_TRIAL_URL =
  "https://wa.me/919360220928?text=Hi%2C%20I%20want%20to%20start%20my%20free%207-day%20trial%20for%20the%20car%20wash%20management%20app.";
const WHATSAPP_MONTHLY_URL =
  "https://wa.me/919360220928?text=Hi%2C%20I%20want%20to%20start%20the%20Monthly%20Plan%20for%20the%20car%20wash%20management%20app.";
const WHATSAPP_YEARLY_URL =
  "https://wa.me/919360220928?text=Hi%2C%20I%20want%20to%20start%20the%20Yearly%20Plan%20for%20the%20car%20wash%20management%20app.";
const WHATSAPP_LIFETIME_URL =
  "https://wa.me/919360220928?text=Hi%2C%20I%27m%20interested%20in%20the%20Owner%20Lifetime%20Plan.%20Please%20share%20more%20details.";

const plans = [
  {
    name: "Starter Monthly",
    subtext: "Good for testing usage",
    price: "₹999",
    period: "/ month",
    highlightLine: "Billed monthly. Cancel anytime.",
    features: [
      "All core features",
      "Unlimited bookings",
      "Revenue tracking",
      "Staff management"
    ],
    ctaText: "Start Monthly",
    ctaUrl: WHATSAPP_MONTHLY_URL,
    highlight: false,
    size: "sm",
  },
  {
    name: "Smart Yearly",
    subtext: "Save ₹3,000 / year",
    price: "₹749",
    period: "/ month",
    highlightLine: "₹8,988 billed yearly",
    features: [
      "All core features",
      "Free personal setup",
      "Priority WhatsApp support",
      "Staff training included"
    ],
    ctaText: "Go Yearly",
    ctaUrl: WHATSAPP_YEARLY_URL,
    highlight: false,
    badge: "Popular",
    size: "md",
  },
  {
    name: "Owner Lifetime",
    subtext: "Pay Once. Profit Forever.",
    price: "₹19,999",
    period: "One-time",
    highlightLine: "Cheaper than 2 years of rent.",
    features: [
      "Life-time access (No monthly fees)",
      "Premium 'Done-For-You' Setup",
      "Direct Owner Support Line",
      "Future Feature Updates Included",
      "Multiple Branch Support"
    ],
    reassurance: "Complete Ownership Asset",
    ctaText: "Get Lifetime License",
    ctaUrl: WHATSAPP_LIFETIME_URL,
    highlight: true,
    badge: "Best Value",
    size: "lg",
  },
];

const PricingSection = () => {
  const handleCtaClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-50 border-y border-slate-200 relative">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-[#0F172A]">
              Simple pricing. <span className="text-blue-600">No hidden fees.</span>
            </h2>
            <p className="text-[#475569] text-xl max-w-2xl mx-auto">
              Invest in your business today. Stop paying rent on software.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-center max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl overflow-hidden transition-all duration-200 flex flex-col ${plan.highlight
                  ? "bg-white border-2 border-blue-600 shadow-2xl scale-100 md:scale-110 z-10"
                  : "bg-white border border-slate-200 shadow-sm hover:shadow-md"
                  } ${plan.size === "sm" ? "md:scale-95 md:translate-y-2" : ""
                  } ${plan.size === "md" ? "md:scale-100" : ""
                  }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className={`absolute top-0 inset-x-0 h-8 flex items-center justify-center text-xs font-bold tracking-widest uppercase ${plan.highlight ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                    {plan.badge}
                  </div>
                )}

                <div className={`p-6 flex flex-col h-full ${plan.badge ? "pt-10" : "pt-8"}`}>
                  {/* Plan name & Subtext */}
                  <div className="mb-4 text-center">
                    <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? "text-[#0F172A]" : "text-slate-700"}`}>
                      {plan.name}
                    </h3>
                    <p className="text-sm font-medium text-blue-600">
                      {plan.subtext}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <span
                        className={`font-black tracking-tight ${plan.highlight ? "text-4xl text-[#0F172A]" : "text-3xl text-slate-800"
                          }`}
                      >
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-slate-500 text-sm font-medium self-end mb-1">{plan.period}</span>
                      )}
                    </div>
                    {plan.highlightLine && (
                      <p className="text-xs font-medium text-slate-400 mt-2">
                        {plan.highlightLine}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className={`h-5 w-5 flex-shrink-0 ${plan.highlight ? "text-blue-600" : "text-slate-400"}`} />
                        <span className={`text-sm ${plan.highlight ? "font-medium text-slate-700" : "text-slate-600"}`}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Button
                      variant={plan.highlight ? "default" : "outline"}
                      size="lg"
                      className={`w-full font-bold ${plan.highlight ? "bg-blue-600 hover:bg-blue-700 h-12 text-base shadow-lg shadow-blue-600/20" : "border-slate-300 text-slate-700 hover:bg-slate-50"}`}
                      onClick={() => handleCtaClick(plan.ctaUrl)}
                    >
                      {plan.ctaText}
                    </Button>

                    {plan.reassurance && (
                      <div className="mt-3 flex items-center justify-center gap-1 text-[10px] text-slate-500 font-medium">
                        <ShieldCheck className="h-3 w-3" />
                        {plan.reassurance}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trial note */}
          <div className="mt-16 text-center opacity-80">
            <p className="text-sm text-slate-500 mb-4">
              Still deciding? Start small.
            </p>
            <button
              onClick={() => handleCtaClick(WHATSAPP_TRIAL_URL)}
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 border-b border-blue-600/30 hover:border-blue-600"
            >
              Try completely free for 7 days &rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;