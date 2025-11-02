import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";

interface HeroSectionProps {
  onContactClick: () => void;
}

export function HeroSection({ onContactClick }: HeroSectionProps) {
  const handleDownloadCV = () => {
    window.open("/cv.pdf", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="text-gradient">Subodh Barakoti</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Software Engineer specializing in scalable web applications and integrations
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center items-center pt-4">
          <Button
            size="lg"
            onClick={handleDownloadCV}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onContactClick}
            className="border-2 hover:bg-card/50 transition-all duration-300 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
