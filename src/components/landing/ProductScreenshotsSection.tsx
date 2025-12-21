import { 
  Calendar, 
  BarChart3, 
  CalendarDays, 
  ClipboardList, 
  Smartphone 
} from "lucide-react";

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
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See what you get
            </h2>
            <p className="text-muted-foreground text-lg">
              Clean, simple screens built for busy car wash owners
            </p>
          </div>

          {/* Screenshots grid - placeholder cards that match product UI style */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {screenshots.map((screen, index) => {
              const Icon = screen.icon;
              return (
                <div 
                  key={index}
                  className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-secondary border border-border shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Placeholder content mimicking product UI */}
                  <div className="absolute inset-0 p-4 flex flex-col">
                    {/* Top bar */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 w-16 bg-primary/20 rounded" />
                      </div>
                    </div>

                    {/* Content lines */}
                    <div className="flex-1 space-y-2">
                      <div className="h-8 bg-card rounded-lg border border-border" />
                      <div className="h-8 bg-card rounded-lg border border-border" />
                      <div className="h-8 bg-card rounded-lg border border-border opacity-70" />
                      <div className="h-8 bg-card rounded-lg border border-border opacity-50" />
                    </div>

                    {/* Bottom action */}
                    <div className="mt-4">
                      <div className="h-8 bg-primary/20 rounded-lg" />
                    </div>
                  </div>

                  {/* Hover overlay with title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-card">
                      <h3 className="font-semibold text-sm">{screen.title}</h3>
                      <p className="text-xs opacity-80">{screen.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Note about real screenshots */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            These represent actual product screens • Real screenshots coming soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductScreenshotsSection;