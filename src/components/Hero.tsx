import { Button } from "@/components/ui/button";
import { BookOpen, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-books.jpg";

const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-white space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium">
              <BookOpen className="w-4 h-4" />
              <span>Join 10,000+ students exchanging books</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Share Books,
              <br />
              <span className="text-white/90">Build Bridges</span> 📚
            </h1>

            <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
              Connect with students to exchange textbooks and academic resources. 
              Save money, reduce waste, and build your campus community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="xl" 
                variant="hero"
                className="bg-white text-primary hover:bg-white/90"
              >
                List a Book
              </Button>
              <Button 
                size="xl" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary"
              >
                Find Books
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold">5,000+</div>
                <div className="text-white/70">Books Listed</div>
              </div>
              <div className="h-12 w-px bg-white/30" />
              <div>
                <div className="text-3xl font-bold">10,000+</div>
                <div className="text-white/70">Exchanges Made</div>
              </div>
              <div className="h-12 w-px bg-white/30" />
              <div>
                <div className="text-3xl font-bold">4.9★</div>
                <div className="text-white/70">Avg Rating</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-in hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover-scale">
              <img 
                src={heroImage} 
                alt="Students sharing books" 
                className="w-full h-auto"
              />
            </div>
            {/* Floating decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/20 rounded-full blur-2xl animate-pulse-glow" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/30 rounded-full blur-2xl animate-pulse-glow" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToFeatures}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors scroll-indicator"
        aria-label="Scroll to features"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
