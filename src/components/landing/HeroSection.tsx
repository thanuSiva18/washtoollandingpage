import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2 } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919360220928?text=Hi%2C%20I%20want%20to%20start%20my%20free%207-day%20trial%20for%20the%20car%20wash%20management%20app.";

const HeroSection = () => {
  const handleCtaClick = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <section className="relative bg-white pt-32 pb-16 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 flex flex-col items-center">

          {/* Eyebrow / Trust Badge */}
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2.5 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wide uppercase text-slate-600">Trusted by smart owners in Tamil Nadu</span>
          </div>

          {/* Main Typography */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#0F172A] leading-[1.1]">
              Take full control of your <br className="hidden sm:block" />
              <span className="text-blue-600">shop & revenue.</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#475569] leading-relaxed">
              Stop worrying about theft, unrecorded cash, or missed bookings.
              Track your entire business from your phone — even when you aren't there.
            </p>
          </div>

          {/* CTA Area */}
          <div className="flex flex-col items-center gap-6 pt-4 w-full">
            <Button
              size="lg"
              onClick={handleCtaClick}
              className="bg-blue-600 hover:bg-blue-700 text-white h-14 px-10 text-lg font-bold shadow-xl shadow-blue-600/20 transition-all hover:shadow-blue-600/30 hover:-translate-y-1 w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Start Free 7-Day Trial
            </Button>

            {/* Trust Signals */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-slate-400" />
                <span>Used by 50+ shops</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-slate-400" />
                <span>Setup in 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-slate-400" />
                <span>No Credit Card</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
