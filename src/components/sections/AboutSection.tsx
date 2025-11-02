import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-12 animate-fade-in-up">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about building efficient, scalable solutions
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border hover:card-glow transition-all duration-300">
          <p className="text-lg leading-relaxed text-foreground/90 mb-8">
            I'm a dedicated Software Engineer with expertise in full-stack development, 
            specializing in .NET Core, React, Angular and Python. With a proven track record of 
            delivering enterprise-level applications, I focus on creating robust, scalable 
            solutions that drive business value.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="p-3 rounded-full bg-primary/10">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg">Clean Code</h3>
              <p className="text-sm text-muted-foreground">
                Writing maintainable, testable code following best practices
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="p-3 rounded-full bg-secondary/10">
                <Rocket className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Agile approach to deliver features quickly and iteratively
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="p-3 rounded-full bg-accent/10">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-lg">Team Player</h3>
              <p className="text-sm text-muted-foreground">
                Collaborative mindset with excellent communication skills
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
