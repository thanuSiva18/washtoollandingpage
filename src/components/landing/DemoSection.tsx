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
      className="py-16 md:py-20 bg-white"
    >
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight text-[#0F172A]">
              See how it works (In Tamil)
            </h2>
            <p className="text-[#475569] text-lg">
              Watch how a smart car wash owner manages his shop in 2 minutes.
            </p>
          </div>

          {/* Main Video Area */}
          <div
            className={`relative aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-xl border border-slate-200 transform transition-all duration-500 ease-out ${isVisible ? "scale-100 opacity-100 translate-y-0" : "scale-[0.98] opacity-90 translate-y-2"}`}
          >
            {/* Placeholder gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="group flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:scale-105 transition-all duration-200">
                <Play className="h-8 w-8 ml-1" />
              </button>
            </div>

            {/* Video info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <Volume2 className="h-4 w-4" />
                  <span className="text-sm font-medium">Explained in Tamil</span>
                </div>
                <span className="text-sm opacity-80">Simple Walkthrough</span>
              </div>
            </div>
          </div>

          {/* Inline Outcome Text */}
          <div className="mt-8 text-center">
            <p className="text-sm font-medium text-[#475569] tracking-wide">
              SIMPLE TO LEARN · NO COMPUTER NEEDED · WORKS ON ANY PHONE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
