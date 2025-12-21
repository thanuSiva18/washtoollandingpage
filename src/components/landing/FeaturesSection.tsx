import { Calendar, CreditCard, LayoutDashboard } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Bookings & Customers",
      text: "Automatically capture every booking. No missed slots or double bookings.",
      icon: Calendar
    },
    {
      title: "Revenue & Payments",
      text: "See today’s earnings, pending payments, and totals — anytime.",
      icon: CreditCard
    },
    {
      title: "Staff & Operations",
      text: "Track service progress, mark work complete, and stay in control.",
      icon: LayoutDashboard
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary/30 border-y border-border/40">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Built to run your car wash, end to end
            </h2>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Everything you need to manage bookings, revenue, and daily operations — without complexity.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 md:p-8 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start text-left group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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

