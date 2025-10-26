import { Upload, Search, MessageSquare, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "List Your Book",
    description: "Upload photos, add details, and publish your listing in under a minute.",
    color: "bg-primary",
  },
  {
    icon: Search,
    title: "Browse & Search",
    description: "Find the books you need using smart filters and search.",
    color: "bg-secondary",
  },
  {
    icon: MessageSquare,
    title: "Connect & Chat",
    description: "Message book owners directly to arrange exchange details.",
    color: "bg-accent",
  },
  {
    icon: CheckCircle,
    title: "Exchange & Rate",
    description: "Meet up, swap books, and rate your experience.",
    color: "bg-primary",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exchange books in four simple steps
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 md:gap-4 relative">
            {/* Connection line - hidden on mobile */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent -z-10" />

            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon circle */}
                <div className={`relative w-32 h-32 ${step.color} rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-14 h-14 text-white" />
                  
                  {/* Step number */}
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-background border-4 border-primary rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to start sharing?
          </p>
          <button className="gradient-cta text-white font-bold px-10 py-4 rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-xl">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
