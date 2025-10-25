import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Award, Users, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: "1+ Years",
      description: "At S&P Global",
    },
    {
      icon: Award,
      title: "99.9%+",
      description: "Accuracy Rate",
    },
    {
      icon: Users,
      title: "15,000+",
      description: "Transactions Processed",
    },
    {
      icon: Target,
      title: "Age 16",
      description: "Started Investing",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Quality Control Associate at S&P Global with a passion for financial markets 
            that began at the age of 15. Specializing in syndicated loans and trade settlements, 
            I bring meticulous attention to detail and a proven track record of 99.9%+ accuracy 
            in high-volume transaction environments. Experienced in collaborating with top-tier 
            clients including Goldman Sachs, JP Morgan, and BCG.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-card border-border"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
