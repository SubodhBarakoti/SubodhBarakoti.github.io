import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Acme Software",
      period: "2025 - Present",
      location: "Kathmandu, Nepal",
      description: "Leading development of enterprise applications using .NET Core and React. Implementing microservices architecture and managing cloud deployments.",
      highlights: [
        "Architected scalable microservices solutions",
        "Mentored junior developers",
        "Improved application performance by 40%",
      ],
    },
    {
      title: "Software Engineer",
      company: "Codeology Tech",
      period: "2023 - 2024",
      location: "Kathmandu, Nepal",
      description: "Developed full-stack web applications using .NET Core, React, and Angular. Integrated third-party APIs and payment gateways.",
      highlights: [
        "Built responsive web applications",
        "Integrated Stripe and other payment systems",
        "Collaborated with cross-functional teams",
      ],
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Experience</h2>
          <p className="text-lg text-muted-foreground">
            Professional journey and achievements
          </p>
        </div>

        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-20">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/50"></div>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:card-glow transition-all duration-300">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mt-1">
                      <Briefcase className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-secondary px-3 py-1 bg-secondary/10 rounded-full">
                    {exp.period}
                  </span>
                </div>

                <p className="text-foreground/80 mb-4">{exp.description}</p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
