import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, BarChart3, Users, TrendingUp } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: DollarSign,
      title: "Financial Operations",
      skills: [
        "Syndicated Loans",
        "Trade Settlements",
        "Reconciliation",
        "Interest Calculations (SOFR, LIBOR, SONIA, EURIBOR)",
        "Operational Accounting",
      ],
    },
    {
      icon: BarChart3,
      title: "Technical Skills",
      skills: [
        "Data Analysis",
        "Process Improvement",
        "Quality Control",
        "Transaction Processing",
        "Performance Metrics",
      ],
    },
    {
      icon: Users,
      title: "Professional Skills",
      skills: [
        "Client Collaboration",
        "SLA Management",
        "Team Leadership",
        "Stakeholder Communication",
        "Problem Solving",
      ],
    },
    {
      icon: TrendingUp,
      title: "Market Expertise",
      skills: [
        "Intraday Trading",
        "Long-term Investing",
        "Options Trading",
        "Market Research",
        "Credit Analysis",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Skills & <span className="text-primary">Expertise</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="group hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 bg-card border-border"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;
