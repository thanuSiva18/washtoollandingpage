import { X, ArrowRight, Check } from "lucide-react";

const painPoints = [
    {
        problem: "Losing money on missed calls",
        solution: "Auto-capture every booking 24/7",
        detail: "Customers book themselves online, even while you sleep."
    },
    {
        problem: "Not knowing today's total cash",
        solution: "Live revenue tracking",
        detail: "Open the app and see exactly how much you made today."
    },
    {
        problem: "Writing everything in notebooks",
        solution: "100% Digital & Automated",
        detail: "No more lost pages. Customer history is saved forever."
    },
    {
        problem: "Anxious when leaving the shop",
        solution: "Monitor from anywhere",
        detail: "See what staff are doing from your home or car."
    }
];

const PainPointsSection = () => {
    return (
        <section className="py-20 md:py-32 bg-background">
            <div className="container px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-red-500 uppercase bg-red-50 rounded-full">
                            The Problem
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                            Running a car wash shouldn't feel like a guessing game.
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Stop relying on trust and notebooks. Get strict control over your business operations.
                        </p>
                    </div>

                    {/* Pain points grid */}
                    <div className="grid gap-6">
                        {painPoints.map((item, index) => (
                            <div
                                key={index}
                                className="group relative grid md:grid-cols-[1fr,auto,1fr] items-center gap-6 p-6 md:p-8 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-md hover:border-border transition-all duration-300"
                            >
                                {/* Problem side */}
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-100/50 flex items-center justify-center">
                                        <X className="h-5 w-5 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-foreground mb-1">
                                            {item.problem}
                                        </h3>
                                        <p className="text-sm text-red-500/80 font-medium">
                                            It hurts growth
                                        </p>
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="hidden md:flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                                    </div>
                                </div>

                                {/* Solution side */}
                                <div className="flex items-start gap-4 md:border-l md:border-dashed md:border-border md:pl-6">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Check className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg text-primary mb-1">
                                            {item.solution}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
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

