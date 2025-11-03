import { useState, useEffect } from "react";
import { Github, Linkedin } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold gradient-text">Mohamed Mohaideen</h1>
        
        <div className="hidden md:flex gap-8">
          {["about", "skills", "experience", "projects", "certifications", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-foreground/80 hover:text-primary transition-colors capitalize"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <a
            href="https://www.linkedin.com/in/mohamedmohaideen/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/mohamedmohaideen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
