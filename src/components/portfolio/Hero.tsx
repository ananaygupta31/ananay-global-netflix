import { FileDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-start relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/5"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-0" />

      {/* Navigation arrows */}
      <button 
        onClick={() => scrollToSection("about")}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-foreground/20 hover:border-primary flex items-center justify-center transition-all hover:scale-110 bg-background/50 backdrop-blur-sm"
      >
        <ChevronLeft className="text-foreground/60 hover:text-primary" />
      </button>
      
      <button 
        onClick={() => scrollToSection("about")}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-foreground/20 hover:border-primary flex items-center justify-center transition-all hover:scale-110 bg-background/50 backdrop-blur-sm"
      >
        <ChevronRight className="text-foreground/60 hover:text-primary" />
      </button>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <p className="text-5xl md:text-7xl font-light mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-fade-in">
            Hello
          </p>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            I'm Ananay
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl leading-relaxed">
            Quality Control Associate at S&P Global with a passion for finance that began at 16. 
            I specialize in high-accuracy financial operations with proven expertise in syndicated loans and trade settlements.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-background transition-all hover:shadow-lg hover:shadow-primary/50"
            >
              Get in touch
            </Button>
            <a
              href="mailto:ananaygupta.work@gmail.com"
              className="text-foreground hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent transition-all text-lg underline underline-offset-4 flex items-center"
            >
              ananaygupta.work@gmail.com
            </a>
          </div>

          <Button
            variant="ghost"
            size="lg"
            className="text-foreground hover:text-primary"
            asChild
          >
            <a
              href="/Ananay_Gupta_Resume.pdf"
              download
              className="flex items-center gap-2"
            >
              <FileDown className="h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
