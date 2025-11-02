import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MouseWaveEffect } from "@/components/MouseWaveEffect";
import { ScrollToTop } from "@/components/ScrollToTop";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  const handleContactClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // Preload Inter font
    document.head.insertAdjacentHTML(
      "beforeend",
      '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">'
    );
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="relative">
        <MouseWaveEffect />
        <ThemeToggle />
        <ScrollToTop />
        
        <main>
          <HeroSection onContactClick={handleContactClick} />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection revealed={true} />
        </main>

        <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
          <p>© {new Date().getFullYear()} Subodh Barakoti. Built with React & Tailwind CSS.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
