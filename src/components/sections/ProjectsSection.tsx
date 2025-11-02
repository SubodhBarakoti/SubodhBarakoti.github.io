import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Inmate Tracking System",
      description: "Comprehensive system for managing inmate records and facility operations",
      tech: [".NET Core", "React", "PostgreSQL", "Docker"],
      details: "Developed a full-featured inmate management system with real-time tracking, biometric integration, and detailed reporting capabilities. Implemented role-based access control and audit logging.",
    },
    {
      title: "Social Media Manager",
      description: "Multi-platform social media management and analytics dashboard",
      tech: ["React", "Python", "FastAPI", "PostgreSQL"],
      details: "Built a comprehensive social media management platform supporting multiple social networks. Features include post scheduling, analytics dashboard, and automated reporting.",
    },
    {
      title: "Learning Management System (LMS)",
      description: "Educational platform for course delivery and student management",
      tech: [".NET Core", "Angular", "SQL Server"],
      details: "Created an LMS with course creation tools, student enrollment, progress tracking, and assessment features. Integrated video streaming and interactive learning modules.",
    },
    {
      title: "Dating Application",
      description: "Modern dating app with advanced matching algorithms",
      tech: ["React", "Python", "FastAPI", "PostgreSQL"],
      details: "Developed a dating application with AI-powered matching, real-time chat, user verification, and location-based discovery features.",
    },
    {
      title: "Activity Management System (ActivityMIS)",
      description: "Enterprise activity tracking and resource management",
      tech: [".NET Core", "React", "MySQL"],
      details: "Built an activity management system for tracking projects, tasks, and resources across multiple departments. Includes reporting and analytics dashboards.",
    },
    {
      title: "HRMIS",
      description: "Human Resource Management Information System",
      tech: [".NET Core", "Angular", "SQL Server", "Azure"],
      details: "Comprehensive HRMS with employee management, payroll processing, leave management, and performance evaluation modules.",
    },
    {
      title: "Fintech Application",
      description: "Financial technology platform for digital payments",
      tech: [".NET Core", "React", "PostgreSQL", "Docker"],
      details: "Developed a secure fintech application with payment processing, wallet management, transaction history, and KYC verification. Integrated with multiple payment gateways.",
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto space-y-12 animate-fade-in-up">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Projects</h2>
          <p className="text-lg text-muted-foreground">
            Notable projects and applications I've built
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:card-glow transition-all duration-300 cursor-pointer group"
              onClick={() => setExpandedProject(expandedProject === index ? null : index)}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                {expandedProject === index ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                )}
              </div>

              <p className="text-foreground/80 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-xs bg-secondary/10 text-secondary border-secondary/20"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {expandedProject === index && (
                <div className="pt-4 border-t border-border animate-fade-in-up">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.details}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
