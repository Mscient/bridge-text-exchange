import { Search, MessageSquare, Shield, Zap, Users, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Search,
    title: "Smart Search",
    description: "Find exactly what you need with advanced filters by semester, subject, and condition.",
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: MessageSquare,
    title: "Real-Time Chat",
    description: "Connect instantly with book owners. Arrange meetups and negotiate exchanges seamlessly.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Shield,
    title: "Verified Users",
    description: "Trust the community with our reputation system and verified student profiles.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Quick Exchange",
    description: "List your book in 60 seconds. Complete exchanges in just a few taps.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Users,
    title: "Community Built",
    description: "Join study groups, share resources, and build lasting connections with peers.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Heart,
    title: "Eco-Friendly",
    description: "Reduce waste and save money by giving textbooks a second life.",
    color: "from-green-500 to-emerald-500",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            BookBridge makes book sharing effortless with powerful features designed for students
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative p-8 hover-lift overflow-hidden group cursor-pointer border-2"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative element */}
                <div className={`h-1 w-0 group-hover:w-16 bg-gradient-to-r ${feature.color} transition-all duration-300 rounded-full`} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
