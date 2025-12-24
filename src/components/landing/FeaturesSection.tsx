import { Calendar, CreditCard, LayoutDashboard } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Fill Every Booking Slot",
      text: "Never miss a customer. Accept appointments 24/7 and keep your wash bay full.",
      icon: Calendar
    },
    {
      title: "Track Every Rupee",
      text: "See daily collection, expenses, and profit in real-time. No more manual math.",
      icon: CreditCard
    },
    {
      title: "Monitor Staff remotely",
      text: "Know exactly who is working and how many cars they washed today.",
      icon: LayoutDashboard
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight text-[#0F172A]">
              Everything you need. Nothing you don't.
            </h2>
            <p className="text-[#475569] text-base max-w-2xl mx-auto">
              Built specially for Indian car wash operations. Simple, fast, and strict.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-start text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed">
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

