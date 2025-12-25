import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2 } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919360220928?text=Hi%2C%20I%20want%20to%20start%20my%20free%207-day%20trial%20for%20the%20car%20wash%20management%20app.";

const HeroSection = () => {
  const handleCtaClick = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <section className="relative bg-white pt-24 pb-16 md:pt-40 md:pb-24">
      <div className="container px-4 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">

          {/* Eyebrow / Trust Badge - Minimal */}
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 bg-transparent text-slate-500 text-[12px] font-bold tracking-[0.2em] uppercase">
            BUILT FOR CAR WASH OWNERS IN TAMIL NADU
          </div>

          {/* Main Typography - Chronicle Style (28-32px Mobile) */}
          <h1 className="text-[32px] md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.2] mb-6 max-w-2xl">
            Take full control of your <br className="hidden sm:block" />
            <span className="text-blue-600">car wash shop & revenue.</span>
          </h1>

          <p className="max-w-xl mx-auto text-[16px] md:text-lg text-slate-600 leading-[1.6] mb-10">
            Stop worrying about theft, unrecorded cash, or missed wash bookings.
            Track your entire car wash business from your phone — even when you’re not there.
          </p>

          {/* CTA Area */}
          <div className="w-full max-w-sm space-y-5">
            <Button
              size="lg"
              onClick={handleCtaClick}
              className="w-full h-14 bg-[#FFA500] hover:bg-orange-600 text-white text-[16px] font-bold rounded-xl shadow-lg shadow-orange-500/20 transition-all hover:-translate-y-0.5"
            >
              Start Free 7-Day Trial
            </Button>

            {/* Risk Reversal - One Line */}
            <div className="text-[13px] text-slate-400 font-medium tracking-wide">
              No credit card required • Setup in 2 minutes
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
