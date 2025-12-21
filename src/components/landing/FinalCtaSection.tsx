import { Button } from "@/components/ui/button";
import { MessageCircle, Check } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20start%20my%20free%207-day%20trial%20for%20the%20car%20wash%20management%20app.";

const FinalCtaSection = () => {
  const handleCtaClick = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary-foreground/5 rounded-full blur-3xl" />

      <div className="container px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to take control of your car wash?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join 100+ owners who've simplified their business. 
            Start your free trial today — setup takes just 10 minutes.
          </p>

          <Button 
            variant="cta" 
            size="xl"
            onClick={handleCtaClick}
            className="mb-6"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Start Free 7-Day Trial
          </Button>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm opacity-80">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              <span>Free setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              <span>Local support</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
