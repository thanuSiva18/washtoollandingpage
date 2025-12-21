import { X, ArrowRight, Check } from "lucide-react";

const painPoints = [
  {
    problem: "Missed bookings",
    solution: "Auto-capture every booking",
    detail: "Customers book via link, you never miss one"
  },
  {
    problem: "No idea of daily revenue",
    solution: "Real-time revenue dashboard",
    detail: "See today's earnings on your phone anytime"
  },
  {
    problem: "Tracking in notebook/WhatsApp",
    solution: "One organized app",
    detail: "All bookings, payments, services in one place"
  },
  {
    problem: "Can't monitor when away",
    solution: "Full visibility remotely",
    detail: "Know what's happening without being there"
  }
];

const PainPointsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Running a car wash shouldn't be this hard
            </h2>
            <p className="text-muted-foreground text-lg">
              We solve the daily headaches every car wash owner faces
            </p>
          </div>

          {/* Pain points grid */}
          <div className="grid gap-4 md:gap-6">
            {painPoints.map((item, index) => (
              <div 
                key={index}
                className="group relative grid md:grid-cols-[1fr,auto,1fr] items-center gap-4 p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elevated transition-all duration-300"
              >
                {/* Problem side */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                    <X className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.problem}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      The old way
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center">
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>

                {/* Solution side */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      {item.solution}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
