import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Christ University",
      degree: "Bachelor of Business Administration (BBA)",
      period: "2021 - 2024",
      score: "8.62/10 CGPA",
      highlights: ["Placement Coordinator", "Finance Club Leader"],
    },
    {
      institution: "St. Francis School",
      degree: "High School",
      period: "2019 - 2021",
      score: "89.6%",
      highlights: ["Academic Excellence", "Extra-curricular Activities"],
    },
  ];

  const certifications = [
    "JP Morgan - Investment Banking Job Simulation",
    "NPTEL - Leadership and Team Effectiveness",
    "Diploma in Finance (Distinction)",
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Education & <span className="text-primary">Certifications</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 bg-card border-border"
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.institution}</CardTitle>
                    <CardDescription className="text-foreground font-medium">
                      {edu.degree}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <p className="text-muted-foreground mb-2">{edu.period}</p>
                        <p className="text-primary font-semibold">{edu.score}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-secondary text-foreground rounded-full text-sm"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="group hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 bg-card border-border"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-foreground font-medium flex-1">{cert}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
