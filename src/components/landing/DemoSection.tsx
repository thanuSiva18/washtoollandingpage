import { useState, useEffect, useRef } from "react";
import { Play, Volume2 } from "lucide-react";

const DemoSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="demo"
      ref={sectionRef}
      className="py-20 md:py-32 bg-secondary/30"
    >
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              How it works in real life
            </h2>
            <p className="text-muted-foreground text-lg">
              From booking to completion — even when you're not there.
            </p>
          </div>

          {/* Main Video Area */}
          <div
            className={`relative aspect-video rounded-3xl overflow-hidden bg-card shadow-xl border border-border/50 transform transition-all duration-1000 ease-out ${isVisible ? "scale-100 opacity-100 translate-y-0" : "scale-[0.97] opacity-90 translate-y-4"
              }`}
          >
            {/* Placeholder gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10" />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="group relative flex items-center justify-center w-20 h-20 rounded-full bg-primary text-primary-foreground shadow-elevated hover:scale-110 transition-transform duration-300">
                <Play className="h-8 w-8 ml-1" />
                <div className="absolute inset-0 rounded-full bg-primary/50 animate-ping opacity-30" />
              </button>
            </div>

            {/* Video info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <Volume2 className="h-4 w-4" />
                  <span className="text-sm font-medium">Demo in Tamil with captions</span>
                </div>
                <span className="text-sm opacity-90">0:45</span>
              </div>
            </div>

            {/* Placeholder content preview */}
            <div className="absolute top-4 left-4 right-4 flex gap-3">
              <div className="flex-1 h-8 rounded-lg bg-card/20 backdrop-blur-sm" />
              <div className="w-24 h-8 rounded-lg bg-accent/30 backdrop-blur-sm" />
            </div>
          </div>

          {/* Inline Outcome Text */}
          <div className="mt-8 text-center">
            <p className="text-sm md:text-base font-medium text-muted-foreground">
              Never miss a booking · Know today’s earnings · Track work completion · Monitor remotely
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
