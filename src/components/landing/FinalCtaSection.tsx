import { Button } from "@/components/ui/button";
import { MessageCircle, Check, ShieldCheck } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919360220928?text=Hi%2C%20I%20want%20to%20start%20my%20free%207-day%20trial%20for%20the%20car%20wash%20management%20app.";

const FinalCtaSection = () => {
  const handleCtaClick = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-[#0F172A]">
            Get complete control of your shop by <span className="text-blue-600">tomorrow.</span>
          </h2>

          <p className="text-lg text-[#475569] mb-8 leading-relaxed">
            No complicated setup. We configure your staff, services, and prices for you personally over WhatsApp.
          </p>

          <div className="mb-6">
            <Button
              size="lg"
              onClick={handleCtaClick}
              className="w-full sm:w-auto px-10 py-6 text-lg font-bold bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-1"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Start Free 7-Day Trial
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium text-slate-500">
            <div className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Setup time: 24 Hours</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-green-500" />
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;

