import { Calendar, BarChart3, CalendarDays, ClipboardList, Smartphone } from "lucide-react";

const screenshots = [
  {
    icon: ClipboardList,
    title: "Bookings List",
    description: "All your bookings in one organized view"
  },
  {
    icon: BarChart3,
    title: "Revenue Dashboard",
    description: "Today's earnings at a glance"
  },
  {
    icon: CalendarDays,
    title: "Calendar View",
    description: "Visual booking calendar"
  },
  {
    icon: Calendar,
    title: "Service Cards",
    description: "Track each service status"
  },
  {
    icon: Smartphone,
    title: "Mobile Admin",
    description: "Full control from your phone"
  }
];

const ProductScreenshotsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              See your entire shop at a glance
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Clean, simple screens for bookings, revenue, and daily operations — designed for busy owners.
            </p>
          </div>

          {/* Screens overview */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {screenshots.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-start rounded-2xl bg-card border border-border/60 shadow-soft hover:shadow-md transition-shadow duration-200 p-5 md:p-6 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base md:text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
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

export default ProductScreenshotsSection;