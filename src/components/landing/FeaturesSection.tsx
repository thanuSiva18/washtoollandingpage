import { 
  CalendarCheck, 
  IndianRupee, 
  Users, 
  Smartphone,
  Clock,
  Bell
} from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    title: "Smart Booking",
    description: "Customers book online. You see it instantly."
  },
  {
    icon: IndianRupee,
    title: "Revenue Dashboard",
    description: "Today's earnings, pending payments — all at a glance."
  },
  {
    icon: Users,
    title: "Staff Management",
    description: "Know who's working on what, in real-time."
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Check everything from your phone, anywhere."
  },
  {
    icon: Clock,
    title: "Service Tracking",
    description: "Mark services done. Track timing. Stay organized."
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description: "Get notified for new bookings and completions."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything you need, nothing you don't
            </h2>
            <p className="text-muted-foreground text-lg">
              Simple tools that work. Built for busy car wash owners.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="group p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
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
