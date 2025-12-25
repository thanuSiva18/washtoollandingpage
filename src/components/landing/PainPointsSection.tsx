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
        <section className="py-20 bg-slate-50">
            <div className="container px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <h2 className="text-[24px] md:text-3xl font-bold mb-4 tracking-tight text-slate-900">
                            Is your shop running <span className="text-red-600">you</span>?
                        </h2>
                        <p className="text-slate-600 text-[16px] leading-relaxed max-w-xl mx-auto">
                            Most owners lose 20% of revenue to unrecorded sales and wasted time. Stop the leaks.
                        </p>
                    </div>

                    {/* Pain points List - Clean, No Cards */}
                    <div className="space-y-12">
                        {painPoints.map((item, index) => (
                            <div key={index} className="relative pl-4 border-l-2 border-slate-200 md:border-none md:pl-0 md:text-center md:flex md:flex-col md:items-center">
                                {/* Problem */}
                                <div className="mb-2">
                                    <div className="inline-flex items-center gap-2 text-red-600 font-semibold text-[14px] uppercase tracking-wide mb-1">
                                        <X className="w-4 h-4" />
                                        <span>Problem</span>
                                    </div>
                                    <h3 className="text-[18px] md:text-xl font-bold text-slate-900 leading-snug">
                                        {item.problem}
                                    </h3>
                                </div>

                                {/* Connector (Mobile specific styling handled by layout) */}
                                <div className="hidden md:block my-2 text-slate-300">
                                    <ArrowRight className="w-5 h-5 rotate-90" />
                                </div>

                                {/* Solution */}
                                <div className="mt-3 md:mt-0">
                                    <div className="inline-flex items-center gap-2 text-blue-600 font-semibold text-[14px] uppercase tracking-wide mb-1">
                                        <Check className="w-4 h-4" />
                                        <span>Solution</span>
                                    </div>
                                    <h3 className="text-[18px] md:text-xl font-bold text-blue-700 leading-snug mb-2">
                                        {item.solution}
                                    </h3>
                                    <p className="text-[15px] text-slate-600 leading-relaxed md:max-w-md md:mx-auto">
                                        {item.detail}
                                    </p>
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

