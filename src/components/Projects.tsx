import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Bell, ExternalLink } from "lucide-react";

const projects = [
  {
    icon: Building2,
    title: "Spring Boot Banking Application",
    description: "Developed a full-fledged banking system supporting deposit, withdrawal, and account management using Spring Boot, JPA, and MySQL with JWT-based authentication.",
    technologies: ["Spring Boot", "MySQL", "JPA", "JWT", "REST API"],
    githubUrl: "https://github.com/mohamedmohaideen/springboot-banking-app"
  },
  {
    icon: Bell,
    title: "Real-Time Notification System",
    description: "Built a WebSocket and RabbitMQ-based microservice enabling instant push notifications across multiple client applications.",
    technologies: ["Spring Boot", "WebSocket", "RabbitMQ", "Microservices"],
    githubUrl: "https://github.com/mohamedmohaideen/Realtime-Notification-service"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Showcasing my technical expertise through real-world applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card
                  key={index}
                  className="glass-card hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2 text-foreground">{project.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/70 mb-4 text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-primary/10 text-foreground hover:bg-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View on GitHub
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
