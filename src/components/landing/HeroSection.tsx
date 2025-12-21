import { Button } from "@/components/ui/button";
import { MessageCircle, Check } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919385439607?text=Hi%2C%20I%20want%20to%20start%20my%20free%207-day%20trial%20for%20the%20car%20wash%20management%20app.";

const HeroSection = () => {
  const handleCtaClick = () => {
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-50 md:opacity-100" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-50 md:opacity-100" />

      <div className="container relative z-10 px-4 py-12 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left mx-auto lg:mx-0 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6 md:mb-8 animate-fade-up opacity-0 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-foreground/80">
                Trusted by 50+ owners in Tamil Nadu
              </span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-up opacity-0 animation-delay-100 tracking-tight text-foreground">
              Stop losing money on <br className="hidden md:block" />
              <span className="text-primary relative">
                missed bookings.
                <span className="absolute bottom-1 left-0 w-full h-3 bg-primary/10 -z-10 rounded-lg"></span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-10 animate-fade-up opacity-0 animation-delay-200 leading-relaxed max-w-lg mx-auto lg:mx-0">
              The all-in-one app to manage bookings, track staff, and see your daily earnings — <strong>even when you're not at the shop.</strong>
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 mb-8 md:mb-10 animate-fade-up opacity-0 animation-delay-300">
              <Button
                variant="cta"
                size="xl"
                onClick={handleCtaClick}
                className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start My Free Trial
              </Button>
              <button
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 text-muted-foreground hover:text-foreground transition-colors font-medium border border-transparent hover:bg-secondary/50 rounded-lg w-full sm:w-auto"
              >
                Watch 45s Demo
              </button>
            </div>

            {/* Trust elements */}
            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-3 sm:gap-8 text-sm text-muted-foreground animate-fade-up opacity-0 animation-delay-400">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>No credit card needed</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Free personal setup</span>
              </div>
            </div>
          </div>

          {/* Product Visual */}
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none animate-fade-up opacity-0 animation-delay-500 transform lg:translate-x-4">
            {/* Background Gradient Effect */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full transform scale-75 opacity-70" />

            {/* Dashboard Card Mockup - Keeping exact structure with improved shadows */}
            <div className="relative bg-card border border-border/80 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">
              {/* Header */}
              <div className="px-6 py-4 border-b border-border flex items-center justify-between bg-muted/30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Owner Dashboard</div>
              </div>

              {/* Body Content */}
              <div className="p-6 space-y-6 bg-card">
                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                    <p className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">Today's Revenue</p>
                    <p className="text-2xl font-bold text-primary">₹12,500</p>
                  </div>
                  <div className="bg-secondary/50 p-4 rounded-xl border border-border">
                    <p className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">Active Bookings</p>
                    <p className="text-2xl font-bold text-foreground">8</p>
                  </div>
                </div>

                {/* Booking List Mock */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Recent Activity</div>
                  {[
                    { id: 1, type: "Full Service", time: "10:30 AM", status: "Completed" },
                    { id: 2, type: "Express Wash", time: "11:15 AM", status: "In Progress" },
                    { id: 3, type: "Interior Clean", time: "11:45 AM", status: "Pending" }
                  ].map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 rounded-lg bg-background border border-border/60 hover:border-primary/20 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                          {item.id}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">{item.type}</div>
                          <div className="text-xs text-muted-foreground">{item.time}</div>
                        </div>
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full ${item.status === "Completed" ? "bg-green-100 text-green-700" :
                        item.status === "In Progress" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"
                        }`}>
                        {item.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating 'Live' Badge */}
            <div className="absolute -top-4 -right-4 bg-white dark:bg-zinc-900 border border-border shadow-lg rounded-lg p-3 animate-bounce-slow hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium">Shop Online</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
