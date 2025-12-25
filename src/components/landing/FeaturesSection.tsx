import { Calendar, CreditCard, LayoutDashboard } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      title: "Fill Every Booking Slot",
      text: "Never miss a customer. Accept appointments 24/7.",
      icon: Calendar
    },
    {
      title: "Track Every Rupee",
      text: "See daily collection and profit in real-time.",
      icon: CreditCard
    },
    {
      title: "Monitor Staff Remotely",
      text: "Know exactly who is working and how many cars washed.",
      icon: LayoutDashboard
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-[24px] md:text-3xl font-bold mb-3 tracking-tight text-slate-900">
              Everything you need. Nothing you don't.
            </h2>
            <p className="text-slate-600 text-[16px]">
              Built specially for Indian car wash operations. Simple, fast, and strict.
            </p>
          </div>

          {/* Features - Clean List (No Cards) */}
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-2"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-blue-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-[18px] font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] text-slate-600 leading-relaxed">
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

