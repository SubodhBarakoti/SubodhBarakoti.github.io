import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export function EducationSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Education</h2>
          <p className="text-lg text-muted-foreground">
            Academic background and qualifications
          </p>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:card-glow transition-all duration-300">
          <div className="flex items-start gap-6">
            <div className="p-4 rounded-full bg-primary/10 shrink-0">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Bachelor of Science in Computer Science and Information Technology
                  </h3>
                  <p className="text-lg text-muted-foreground mt-1">
                    Kathmandu Bernhardt College
                  </p>
                </div>
                <span className="text-sm font-medium text-secondary px-3 py-1 bg-secondary/10 rounded-full">
                  2018 - 2023
                </span>
              </div>

              <p className="text-foreground/80 leading-relaxed">
                Completed BSc CSIT with strong focus on software engineering, algorithms, 
                data structures, and web technologies. Gained comprehensive knowledge in 
                programming, database management, and system design.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
