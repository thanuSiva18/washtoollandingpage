import { X, ArrowRight, Check } from "lucide-react";

const painPoints = [
    {
        problem: "Unrecorded cash & missing slots",
        solution: "100% Digital Records",
        detail: "Stop wondering if staff pocketed cash. Every wash and payment is tracked instantly."
    },
    {
        problem: "Calling the shop 10x a day",
        solution: "Check from your phone",
        detail: "No more phone tag. Open the app and see exactly who is working and how much you made."
    },
    {
        problem: "Software is too clicking confused",
        solution: "WhatsApp-style Simple",
        detail: "If you can use WhatsApp, you can use Z-Wash. No training needed for you or staff."
    }
];

const PainPointsSection = () => {
    return (
        <section className="py-16 md:py-20 bg-background">
            <div className="container px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight text-[#0F172A]">
                            Is your shop running <span className="text-red-600">you</span>?
                        </h2>
                        <p className="text-[#475569] text-lg max-w-2xl mx-auto leading-relaxed">
                            Most owners lose 20% of revenue to unrecorded sales and wasted time. Stop the leaks.
                        </p>
                    </div>

                    {/* Pain points grid */}
                    <div className="grid gap-6 md:gap-8">
                        {painPoints.map((item, index) => (
                            <div
                                key={index}
                                className="group relative grid md:grid-cols-[1fr,auto,1fr] items-center gap-5 md:gap-6 p-5 md:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
                            >
                                {/* Problem side */}
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center mt-1">
                                        <X className="h-5 w-5 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-[#0F172A] mb-1">
                                            {item.problem}
                                        </h3>
                                        <p className="text-sm text-red-500 font-medium">
                                            High Stress
                                        </p>
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="hidden md:flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity">
                                    <ArrowRight className="h-5 w-5 text-slate-400" />
                                </div>

                                {/* Solution side */}
                                <div className="flex items-start gap-4 pt-6 border-t border-slate-100 md:border-t-0 md:border-l md:border-dashed md:border-slate-200 md:pt-0 md:pl-8">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mt-1">
                                        <Check className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-blue-600 mb-1">
                                            {item.solution}
                                        </h3>
                                        <p className="text-sm text-[#475569] leading-relaxed">
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

