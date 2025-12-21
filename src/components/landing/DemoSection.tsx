import { Play, Volume2 } from "lucide-react";

const DemoSection = () => {
  return (
    <section id="demo" className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              See how simple it is
            </h2>
            <p className="text-muted-foreground text-lg">
              45-second demo in Tamil • No music, just real walkthrough
            </p>
          </div>

          {/* Video placeholder */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-card shadow-elevated border border-border">
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
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
              <div className="flex items-center justify-between text-primary-foreground">
                <div className="flex items-center gap-3">
                  <Volume2 className="h-4 w-4" />
                  <span className="text-sm font-medium">Demo in Tamil with captions</span>
                </div>
                <span className="text-sm opacity-80">0:45</span>
              </div>
            </div>

            {/* Placeholder content preview */}
            <div className="absolute top-4 left-4 right-4 flex gap-3">
              <div className="flex-1 h-8 rounded-lg bg-card/20 backdrop-blur-sm" />
              <div className="w-24 h-8 rounded-lg bg-accent/30 backdrop-blur-sm" />
            </div>
          </div>

          {/* Video highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              "New booking appears",
              "Today's revenue dashboard",
              "Mark service complete",
              "Check from mobile"
            ].map((step, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border"
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  {index + 1}
                </span>
                <span className="text-sm font-medium">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
