import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import profileImage from "@/assets/profile.jpeg";

const roles = [
  "DevOps Engineer",
  "Java Developer",
  "Cloud-Native Engineer",
  "CI/CD & Kubernetes Specialist"
];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen gradient-bg flex items-center justify-center relative overflow-hidden pt-32 pb-20">
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
              alt="Mohamed Mohaideen A - DevOps Engineer and Java Developer"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/30 shadow-2xl"
            />
          </div>

          <p className="text-xl md:text-2xl text-foreground/80 mb-4 animate-fade-in">
            Hello! I&apos;m
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            <span className="gradient-text">Mohamed Mohaideen A</span>
          </h1>

          <div className="text-2xl md:text-3xl text-foreground/90 mb-4 min-h-12 flex items-center justify-center flex-wrap">
            <span className="mr-3">I am a</span>
            <span className="gradient-text font-semibold transition-all duration-500">
              {roles[currentRole]}
            </span>
          </div>

          <p className="text-base md:text-lg text-primary font-medium mb-8">
            2.5 Years Experience • Banking &amp; Financial Services
          </p>

          <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed">
            Results-driven DevOps Engineer delivering CI/CD automation, Kubernetes orchestration, and cloud-native
            infrastructure for enterprise banking clients including UniCredit and American Express. Skilled in Jenkins,
            ArgoCD, Terraform, Docker, Helm, and end-to-end observability.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
              asChild
            >
              <a href="/MohamedMohaideen_Resume.pdf" download>
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8"
              asChild
            >
              <a href="mailto:mohamedmohaideena01@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
