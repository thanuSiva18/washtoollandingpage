import { Button } from "@/components/ui/button";
import { MessageCircle, Check, ShieldCheck } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919385439607?text=Hi%2C%20I%20want%20to%20start%20my%20free%207-day%20trial%20for%20the%20car%20wash%20management%20app.";

const FinalCtaSection = () => {
  const handleCtaClick = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <section className="py-16 md:py-20 bg-background relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-foreground">
            Ready to see your car wash in control?
          </h2>

          <p className="text-base text-muted-foreground mb-8 leading-relaxed">
            We'll set up your services, staff, and reports with you over WhatsApp so you can see real numbers from day one.
          </p>

          <div className="mb-6">
            <Button
              variant="cta"
              size="xl"
              onClick={handleCtaClick}
              className="w-full sm:w-auto px-8 py-4"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Start my free 7-day trial
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
            <div className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Free personal setup</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>No contracts. Cancel anytime.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;

