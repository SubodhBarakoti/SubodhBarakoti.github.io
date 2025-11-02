import { useEffect, useState } from "react";

interface JourneyLineProps {
  onEasterEggClick: () => void;
}

export function JourneyLine({ onEasterEggClick }: JourneyLineProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lineStyle, setLineStyle] = useState({ height: "0%", left: "50%" });

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / documentHeight) * 100;
      
      setScrollProgress(progress);

      // Create snake-like movement
      const sections = 5; // Number of sections in portfolio
      const sectionProgress = (progress / 100) * sections;
      const currentSection = Math.floor(sectionProgress);
      const sectionOffset = sectionProgress - currentSection;

      // Alternate between left and right for snake effect
      let leftPosition = 50;
      if (currentSection % 2 === 0) {
        leftPosition = 50 - (sectionOffset * 15);
      } else {
        leftPosition = 35 + (sectionOffset * 15);
      }

      setLineStyle({
        height: `${progress}%`,
        left: `${leftPosition}%`,
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="journey-line"
        style={{
          ...lineStyle,
          top: 0,
          transition: "left 0.3s ease-out",
        }}
      />
      {scrollProgress > 15 && scrollProgress < 85 && (
        <button
          onClick={onEasterEggClick}
          className="fixed z-50 w-6 h-6 rounded-full bg-neon shadow-lg shadow-neon/50 animate-pulse cursor-pointer border-2 border-background hover:scale-125 transition-transform duration-300"
          style={{
            top: `${30 + (scrollProgress / 2)}%`,
            left: lineStyle.left,
            transform: "translate(-50%, -50%)",
          }}
          aria-label="Easter egg"
        >
          <span className="absolute inset-0 rounded-full bg-neon animate-ping opacity-75"></span>
        </button>
      )}
    </>
  );
}
