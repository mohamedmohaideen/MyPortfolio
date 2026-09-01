import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Boxes, ExternalLink } from "lucide-react";

const project = {
  icon: Boxes,
  title: "AMDBank — Cloud-Native Banking Microservices & DevOps Platform",
  subtitle: "Personal Project",
  description:
    "An end-to-end cloud-native banking platform showcasing a complete GitOps delivery pipeline, containerised microservices, full observability, and infrastructure automation.",
  points: [
    "Architected an end-to-end GitOps delivery pipeline using ArgoCD, achieving fully automated Kubernetes deployments across Dev/QA/Production with zero manual kubectl intervention.",
    "Containerized 4 independent microservices (Accounts, Cards, Loans, Messaging) using Docker and deployed the complete stack including Kafka and Keycloak to Kubernetes in under 10 minutes via Helm.",
    "Built reusable Helm library charts with environment-specific values, reducing per-environment configuration effort by ~65% and enabling one-command environment provisioning.",
    "Implemented a full observability stack — Prometheus (metrics), Grafana (dashboards), Loki (logs), Tempo (tracing) — providing 100% visibility across all services.",
    "Secured CI/CD pipelines end-to-end with SonarQube quality gates, OAuth2/Keycloak authentication, and Spring Security API authorization, achieving zero critical vulnerabilities in final builds.",
    "Reduced infrastructure provisioning time from hours to minutes using Terraform-managed Kubernetes clusters and Ansible-based configuration automation.",
    "Designed an event-driven Kafka messaging architecture handling asynchronous notifications across 4 microservices, decoupling services and improving fault isolation."
  ],
  technologies: [
    "Kubernetes",
    "ArgoCD",
    "Helm",
    "Docker",
    "Terraform",
    "Ansible",
    "Kafka",
    "Keycloak",
    "Prometheus",
    "Grafana",
    "Loki",
    "Tempo",
    "SonarQube",
    "Spring Boot 3"
  ],
  githubUrl: "https://github.com/mohamedmohaideen"
};

const Projects = () => {
  const Icon = project.icon;

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured DevOps Project</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Production-grade automation, built end to end
            </p>
          </div>

          <Card className="glass-card hover:border-primary/50 transition-all duration-300">
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
                  <Badge key={tech} variant="secondary" className="bg-primary/10 text-foreground hover:bg-primary/20">
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
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
