import { Button } from "@/components/ui/button";
import { MessageCircle, Check, ShieldCheck } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919385439607?text=Hi%2C%20I%20want%20to%20start%20my%20free%207-day%20trial%20for%20the%20car%20wash%20management%20app.";

const FinalCtaSection = () => {
  const handleCtaClick = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <section className="py-16 md:py-32 bg-background relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <ShieldCheck className="h-4 w-4" />
            <span>100% Risk-Free Trial</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-foreground">
            Ready to take control of your car wash?
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Start your free 7-day trial today — setup takes less than 10 minutes.
            <br className="hidden md:block" />
            <span className="text-foreground font-medium">We will personally help you set everything up on WhatsApp.</span>
          </p>

          <div className="flex flex-col items-center gap-6">
            <Button
              variant="cta"
              size="xl"
              onClick={handleCtaClick}
              className="w-full sm:w-auto shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Start Free 7-Day Trial
            </Button>

            <p className="text-sm text-muted-foreground">
              Directly chats with our founder on WhatsApp
            </p>
          </div>

          {/* Reassurance Grid */}
          {/* Reassurance Grid */}
          <div className="mt-16 bg-secondary/30 rounded-3xl p-8 border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 text-left md:text-center">
              <div>
                <Check className="h-5 w-5 text-primary mb-3 md:mx-auto" />
                <h4 className="font-semibold text-foreground mb-1">Free Setup</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">We set up your services and staff for you.</p>
              </div>
              <div>
                <Check className="h-5 w-5 text-primary mb-3 md:mx-auto" />
                <h4 className="font-semibold text-foreground mb-1">No Credit Card Needed</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Sign up with just your name and phone number.</p>
              </div>
              <div>
                <Check className="h-5 w-5 text-primary mb-3 md:mx-auto" />
                <h4 className="font-semibold text-foreground mb-1">Easy to Use</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">If you can use WhatsApp, you can use WashFlow.</p>
              </div>
              <div>
                <Check className="h-5 w-5 text-primary mb-3 md:mx-auto" />
                <h4 className="font-semibold text-foreground mb-1">Cancel Anytime</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">No contracts. No hidden fees.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;

