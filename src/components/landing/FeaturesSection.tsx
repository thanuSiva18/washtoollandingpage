import { Calendar, CreditCard, LayoutDashboard } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "100% Booking Control",
      text: "Every customer booking is captured automatically. No more missing slots while you're busy or sleeping.",
      icon: Calendar
    },
    {
      title: "Live Revenue Tracking",
      text: "Know your exact daily earnings and collection status instantly. No manual math, no notebook errors.",
      icon: CreditCard
    },
    {
      title: "Real-Time Staff Monitor",
      text: "See exactly which cars are being washed and who's working — without having to call or visit the shop.",
      icon: LayoutDashboard
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-secondary/30 border-y border-border/40">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
              Built to run your car wash, end to end
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Everything you need to manage bookings, revenue, and daily operations — without complexity.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-card border border-border/60 shadow-soft hover:shadow-md transition-shadow duration-200 flex flex-col items-start text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

