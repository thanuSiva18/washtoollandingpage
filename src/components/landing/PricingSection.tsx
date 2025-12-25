import { Button } from "@/components/ui/button";
import { Check, ShieldCheck } from "lucide-react";

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
    name: "Monthly",
    price: "₹999",
    period: "/mo",
    features: ["All core features", "Unlimited bookings"],
    ctaText: "Start Monthly",
    ctaUrl: WHATSAPP_MONTHLY_URL,
    isPrimary: false,
  },
  {
    name: "Yearly",
    price: "₹749",
    period: "/mo",
    features: ["Save ₹3,000/year", "Priority Support"],
    ctaText: "Go Yearly",
    ctaUrl: WHATSAPP_YEARLY_URL,
    isPrimary: false,
  },
  {
    name: "Owner Lifetime",
    price: "₹19,999",
    period: "one-time",
    features: [
      "No monthly fees ever",
      "Premium Setup Included",
      "Profit Forever",
      "Direct Owner Support"
    ],
    ctaText: "Get Lifetime License",
    ctaUrl: WHATSAPP_LIFETIME_URL,
    isPrimary: true,
    badge: "BEST VALUE"
  },
];

const PricingSection = () => {
  const handleCtaClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <section id="pricing" className="py-20 bg-slate-50">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-[24px] md:text-3xl font-bold mb-4 tracking-tight text-slate-900">
              Simple pricing. <span className="text-blue-600">No hidden fees.</span>
            </h2>
            <p className="text-slate-600 text-[16px]">
              Invest in your business. Stop paying rent on software.
            </p>
          </div>

          {/* Pricing Stack */}
          <div className="flex flex-col gap-6 md:grid md:grid-cols-3 md:items-start">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-6 ${plan.isPrimary
                    ? "bg-white border-2 border-[#FFA500] shadow-xl md:-mt-4 md:p-8 order-first md:order-none"
                    : "bg-white border border-slate-200 shadow-sm opacity-90 hover:opacity-100"
                  }`}
              >
                {plan.badge && (
                  <div className="absolute top-0 right-0 left-0 -mt-3 flex justify-center">
                    <span className="bg-[#FFA500] text-white text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase shadow-sm">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-3xl font-extrabold text-slate-900">{plan.price}</span>
                    <span className="text-sm text-slate-500 font-medium">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className={`w-4 h-4 mt-0.5 ${plan.isPrimary ? "text-[#FFA500]" : "text-blue-600"}`} />
                      <span className="text-left">{feature}</span>
                    </div>
                  ))}
                </ul>

                <Button
                  onClick={() => handleCtaClick(plan.ctaUrl)}
                  className={`w-full h-11 font-bold ${plan.isPrimary
                      ? "bg-[#FFA500] hover:bg-orange-600 text-white shadow-md shadow-orange-500/20"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                >
                  {plan.ctaText}
                </Button>

                {plan.isPrimary && (
                  <div className="mt-3 flex justify-center gap-1 text-[11px] text-slate-500 font-medium">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Pay Once. Own Forever.</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Trial Link */}
          <div className="mt-12 text-center">
            <button
              onClick={() => handleCtaClick(WHATSAPP_TRIAL_URL)}
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-4"
            >
              Not sure? Try completely free for 7 days
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;