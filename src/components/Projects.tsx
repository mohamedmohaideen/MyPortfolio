import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Film, ShoppingCart, Code } from "lucide-react";

const projects = [
  {
    icon: Cloud,
    title: "Weather Service Application",
    description: "RESTful API built with Spring Boot that fetches live weather data from external APIs. Features include location-based weather information, caching for performance optimization, and comprehensive error handling.",
    technologies: ["Spring Boot", "REST API", "External APIs", "Java"]
  },
  {
    icon: Film,
    title: "Movie Application",
    description: "Full-stack CRUD application for managing movie databases. Implements Create, Read, Update, and Delete operations with Spring Boot backend and MySQL database integration for persistent storage.",
    technologies: ["Spring Boot", "MySQL", "CRUD Operations", "JPA"]
  },
  {
    icon: ShoppingCart,
    title: "Product Order Delivery Microservice",
    description: "Event-driven microservice architecture implementing product ordering and delivery system. Utilizes Apache Kafka for asynchronous messaging between services, ensuring scalability and reliability.",
    technologies: ["Microservices", "Kafka", "Spring Boot", "Event-Driven"]
  },
  {
    icon: Code,
    title: "Spring Boot + React Integration",
    description: "Full-stack application demonstrating seamless integration between Spring Boot backend and React frontend. Features RESTful API connectivity, state management, and responsive UI components.",
    technologies: ["Spring Boot", "React.js", "REST API", "Full-Stack"]
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
                    <div className="flex flex-wrap gap-2">
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
