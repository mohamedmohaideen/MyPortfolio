import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Boxes, Landmark, Github } from "lucide-react";

const projects = [
  {
    icon: Boxes,
    title: "AMDBank — Cloud-Native Banking Microservices & DevOps Platform",
    subtitle: "Production Project",
    description:
      "A cloud-native banking platform of independent Accounts, Cards, Loans and Messaging microservices with end-to-end security, observability, CI/CD and Kubernetes orchestration.",
    points: [
      "Architected a cloud-native banking platform comprising independent Accounts, Cards, Loans, and Messaging microservices, demonstrating scalable microservice decomposition and independent service delivery.",
      "Engineered Spring Boot and Spring Cloud REST APIs with OpenFeign, Eureka Service Discovery, API Gateway, and Config Server, enabling resilient communication and centralized configuration across distributed services.",
      "Decoupled banking workflows using Apache Kafka and Event-Driven Architecture, enabling asynchronous communication between independent microservices.",
      "Secured REST APIs using Spring Security, OAuth2, OIDC, JWT, and Keycloak, implementing authentication and authorization for protected backend resources.",
      "Containerized Java microservices using Docker and orchestrated deployments through Kubernetes and Helm Charts, enabling repeatable application deployment and lifecycle management.",
      "Implemented Kubernetes Services, ConfigMaps, Secrets, Deployments, StatefulSets, upgrades, and rollbacks through Helm, improving deployment consistency across environments.",
      "Provisioned cloud infrastructure using Terraform and AWS services, establishing Infrastructure as Code practices for repeatable environment provisioning.",
      "Automated application delivery using Jenkins and GitOps principles with ArgoCD, creating a repeatable CI/CD workflow from source control through Kubernetes deployment.",
      "Implemented Prometheus and Grafana observability, improving visibility into application and infrastructure metrics.",
      "Implemented Loki and Tempo with Grafana for centralized logging and distributed tracing, enabling end-to-end investigation of microservice communication and application failures.",
      "Integrated containerized services, messaging, security, observability, CI/CD, and Kubernetes orchestration into an end-to-end cloud-native banking architecture."
    ],
    technologies: [
      "Java 21",
      "Spring Boot 4",
      "Spring Framework 7",
      "Spring Cloud",
      "Apache Kafka",
      "Docker",
      "Kubernetes",
      "Helm",
      "Keycloak",
      "REST APIs",
      "Prometheus",
      "Grafana",
      "Loki",
      "Tempo",
      "Terraform",
      "Jenkins",
      "ArgoCD",
      "AWS"
    ],
    githubUrl:
      "https://github.com/mohamedmohaideen/AMDBank-Cloud-Native-Banking-Microservices-DevOps-Platform"
  },
  {
    icon: Landmark,
    title: "Spring Boot Banking Application",
    subtitle: "Personal Project",
    description:
      "A Spring Boot banking application covering core account and customer workflows with layered REST APIs, JPA persistence and API documentation.",
    points: [
      "Built REST APIs for core banking operations with Spring Boot, following a clean controller-service-repository layering.",
      "Persisted account and customer data with Spring Data JPA and Hibernate over a relational database.",
      "Documented and validated endpoints using Swagger/OpenAPI and Postman collections.",
      "Applied validation, exception handling, and unit testing with JUnit for reliable API behaviour."
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "MySQL",
      "Swagger",
      "JUnit",
      "Maven"
    ],
    githubUrl: "https://github.com/mohamedmohaideen/springboot-banking-app"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Production Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Cloud-native Java systems, built end to end
            </p>
          </div>

          <div className="space-y-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card key={index} className="glass-card hover:border-primary/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl md:text-2xl mb-2 text-foreground">{project.title}</CardTitle>
                        <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                          {project.subtitle}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-foreground/70 mb-6 text-base leading-relaxed">
                      {project.description}
                    </CardDescription>

                    <div className="space-y-3 mb-6">
                      {project.points.map((point, i) => (
                        <p key={i} className="text-foreground/80 flex items-start gap-2 text-sm md:text-base">
                          <span className="text-primary mt-1">•</span>
                          <span>{point}</span>
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-foreground hover:bg-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
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
