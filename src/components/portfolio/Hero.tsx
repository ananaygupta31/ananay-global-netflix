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
      className="min-h-screen flex items-center justify-start relative overflow-hidden bg-background"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-0" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,138,128,0.3),transparent_70%)]" />
      </div>

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
          <p className="text-primary text-5xl md:text-7xl font-light mb-4">
            Hello
          </p>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 text-primary">
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
              className="border-2 border-primary text-primary hover:bg-primary hover:text-background transition-all"
            >
              Get in touch
            </Button>
            <a
              href="mailto:ananaygupta.work@gmail.com"
              className="text-foreground hover:text-primary transition-colors text-lg underline underline-offset-4 flex items-center"
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
