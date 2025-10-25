import { ArrowDown, Linkedin, Mail, FileDown } from "lucide-react";
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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,9,20,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-foreground bg-clip-text text-transparent">
            Ananay Gupta
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Quality Control Associate | Finance Professional
          </p>
          <p className="text-lg md:text-xl text-foreground mb-8 max-w-2xl mx-auto">
            Started investing at 15 • 1+ years at S&P Global • 99.9%+ accuracy rate
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="group"
            >
              <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Get in Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/ananay-gupta-61b601202/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
