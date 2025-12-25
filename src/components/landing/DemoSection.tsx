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
      className="py-16 bg-white"
    >
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section header */}
          <div className="mb-10">
            <h2 className="text-[22px] md:text-3xl font-bold mb-3 tracking-tight text-slate-900">
              See how it works (In Tamil)
            </h2>
          </div>

          {/* Main Video Area */}
          <div
            className={`relative aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-xl border border-slate-200 transform transition-all duration-500 ease-out ${isVisible ? "scale-100 opacity-100" : "scale-[0.98] opacity-90"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />

            <div className="absolute inset-0 flex items-center justify-center">
              <button className="group flex items-center justify-center w-20 h-20 rounded-full bg-[#FFA500] text-white shadow-lg shadow-orange-500/30 hover:scale-105 transition-all duration-200">
                <Play className="h-8 w-8 ml-1" />
              </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-2">
                  <Volume2 className="h-4 w-4" />
                  <span className="text-sm font-medium">Explained in Tamil</span>
                </div>
                <span className="text-sm opacity-80">2 min walkthrough</span>
              </div>
            </div>
          </div>

          {/* Inline Outcome Text */}
          <div className="mt-8">
            <p className="text-[15px] font-medium text-slate-600 tracking-wide">
              SIMPLE TO LEARN · NO COMPUTER NEEDED · WORKS ON ANY PHONE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
