import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Target, Medal, Heart, Sparkles } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Target,
      title: "Early Investor",
      description: "Started investing journey at age 16, developing deep market understanding",
    },
    {
      icon: Users,
      title: "Placement Coordinator",
      description: "Led placement activities at Christ University, facilitating student-recruiter connections",
    },
    {
      icon: Sparkles,
      title: "Finance Club Leader",
      description: "Founded and led finance club, organizing events and workshops for 200+ students",
    },
    {
      icon: Medal,
      title: "National Level Skating",
      description: "Competed at national level in skating, demonstrating discipline and dedication",
    },
    {
      icon: Heart,
      title: "Kiran Foundation",
      description: "Served as Field Manager, coordinating community outreach and social initiatives",
    },
    {
      icon: Trophy,
      title: "99.9%+ Accuracy",
      description: "Maintained exceptional accuracy rate across 15,000+ transactions at S&P Global",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Key <span className="text-primary">Achievements</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 bg-card border-border"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
