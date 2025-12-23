import { Button } from "@/components/ui/button";
import { BarChart3, Calendar, MessageCircle, Users } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/919385439607?text=Hi%2C%20I%20want%20to%20start%20my%20free%207-day%20trial%20for%20the%20car%20wash%20management%20app.";

const HeroSection = () => {
  const handleCtaClick = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />

      <div className="container relative z-10 px-4">
        <div className="flex items-center justify-center">
          <div className="max-w-2xl text-center">
            {/* Pre-headline */}
            <p className="text-xs tracking-wider uppercase text-primary font-semibold mb-4">
              For car wash owners losing money on missed bookings
            </p>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.1rem] font-black leading-tight tracking-tight text-foreground mb-4">
              <span className="block">Take full control of your car wash</span>
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-foreground mb-4">
              Take full control of your car wash
              <span className="block text-primary mt-1">
                even when you're not at the shop

            {/* Subheadline */}
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              A simple app to manage bookings, track daily revenue, and monitor staff in real time — without any tech skills.
            </p>

            {/* CTA */}
            <div className="mb-6">
              <Button
                variant="cta"
                size="xl"
                onClick={handleCtaClick}
                className="px-8 py-4 text-base"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Free 7-Day Trial
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Free setup • No credit card • Cancel anytime
            </p>

            {/* Proof strip */}
            <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground pt-4 border-t border-border/40">
                <div className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span>Bookings</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                  <span>Revenue</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <span>Staff tracking</span>
                </div>
              </div>
            </div>
            </div>
        </v>
      </div>
    </section>
  );
};

export default HeroSection;
