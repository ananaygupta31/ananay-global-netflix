import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "S&P Global",
      role: "Quality Control Associate",
      period: "July 2024 - Present",
      location: "Gurugram, Haryana",
      achievements: [
        "Maintained 99.9%+ accuracy across 15,000+ trade transactions involving syndicated loans and settlement processing",
        "Reduced error rates by 40% through implementation of systematic quality control checks",
        "Collaborated with Goldman Sachs, JP Morgan, and BCG on transaction validations",
        "Expertise in SOFR, LIBOR, SONIA, and EURIBOR interest calculations",
        "Managed complex reconciliation processes and operational accounting tasks",
      ],
    },
    {
      company: "Vidyuttech",
      role: "Founder's Office Intern",
      period: "June 2023 - July 2023",
      location: "Gurugram, Haryana",
      achievements: [
        "Analyzed 700+ CIBIL reports to optimize credit evaluation processes",
        "Improved lead quality by 53% through enhanced verification protocols",
        "Conducted market research identifying three new lending opportunities",
        "Designed performance metrics tracking system for lending operations",
      ],
    },
    {
      company: "Sleepwell",
      role: "Sales and Supply Chain Intern",
      period: "June 2022 - July 2022",
      location: "New Delhi, India",
      achievements: [
        "Analyzed sales data across 15 retail outlets to identify growth opportunities",
        "Optimized inventory levels reducing stockouts by 25%",
        "Coordinated with suppliers to improve delivery timelines by 20%",
        "Created comprehensive sales reports for senior management decision-making",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Professional <span className="text-primary">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 bg-card border-border"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2 mb-2">
                      <Building2 className="h-6 w-6 text-primary" />
                      {exp.company}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-foreground">
                      {exp.role}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      {exp.period}
                    </div>
                    <div>{exp.location}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1 flex-shrink-0">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
