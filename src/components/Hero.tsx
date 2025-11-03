import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpeg";

const roles = [
  "Java Spring Boot Developer",
  "Microservices Expert",
  "Backend Developer",
  "API Specialist"
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <img 
              src={profileImage} 
              alt="Mohamed Mohaideen A" 
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/30 shadow-2xl"
            />
          </div>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 animate-fade-in">
            Hello! I&apos;m
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="gradient-text">Mohamed Mohaideen A</span>
          </h1>

          <div className="text-2xl md:text-3xl text-foreground/90 mb-8 h-12 flex items-center justify-center">
            <span className="mr-3">I am a</span>
            <span className="gradient-text font-semibold transition-all duration-500">
              {roles[currentRole]}
            </span>
          </div>

          <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Motivated and detail-oriented Java Spring Boot Microservices Developer with experience in building and testing scalable backend applications. Skilled in REST API development, Kafka-based microservices, database integration, and CI/CD automation.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8"
              asChild
            >
              <a href="/MohamedMohaideen_Resume.pdf" download>Download Resume</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
