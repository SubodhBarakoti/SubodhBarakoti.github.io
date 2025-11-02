import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  const skills = [
    { name: "C#", category: "Backend" },
    { name: ".NET Core", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "FastAPI", category: "Backend" },
    { name: "React", category: "Frontend" },
    { name: "Angular", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "SQL Server", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "Git", category: "DevOps" },
    { name: "Azure", category: "Cloud" },
    { name: "REST APIs", category: "Integration" },
    { name: "Microservices", category: "Architecture" },
  ];

  const categories = [...new Set(skills.map(s => s.category))];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-12 animate-fade-in-up">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground">
            Tools and technologies I work with
          </p>
        </div>

        <div className="grid gap-6">
          {categories.map((category) => (
            <Card
              key={category}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:card-glow transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-foreground/90">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <Badge
                      key={skill.name}
                      variant="secondary"
                      className="text-sm px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-colors duration-200 cursor-default"
                    >
                      {skill.name}
                    </Badge>
                  ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
