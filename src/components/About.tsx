import { Coffee, Boxes, Container, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Coffee,
    title: "Java & Spring",
    description:
      "Java 17/21, Spring Boot 3/4, Spring Framework 6/7, Spring Cloud and Spring Security for enterprise banking backends"
  },
  {
    icon: Boxes,
    title: "Microservices & APIs",
    description:
      "REST APIs, OpenAPI/Swagger, OpenFeign, API Gateway, Eureka, Config Server, Circuit Breaker, Retry and Rate Limiting"
  },
  {
    icon: Container,
    title: "Cloud-Native & DevOps",
    description:
      "Docker, Kubernetes, Helm, AWS/Azure, Terraform, Ansible, Jenkins, GitHub Actions, GitOps with ArgoCD"
  },
  {
    icon: Activity,
    title: "Observability & Security",
    description:
      "Prometheus, Grafana, Loki, Tempo, Dynatrace, Splunk, OpenTelemetry with OAuth2, OIDC, JWT and Keycloak"
  }
];

const stats = [
  { value: "3", label: "Years Experience" },
  { value: "8-10", label: "Banking Microservices" },
  { value: "~40%", label: "Faster Root-Cause Analysis" },
  { value: "~30%", label: "Less Investigation Effort" }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Cloud-Native Java Developer building distributed banking microservices end to end
            </p>
          </div>

          <div className="mb-12">
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Professional Summary</h3>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  I&apos;m a Cloud-Native Java Developer with 3 years of experience at Tata Consultancy Services (TCS),
                  specialising in enterprise banking applications, microservices, REST APIs, cloud-native development
                  and DevOps practices. I work day to day with Java 17/21, Spring Boot 3/4, Spring Framework 6/7,
                  Spring Cloud, Apache Kafka, Docker, Kubernetes, Helm, AWS, Terraform, Jenkins, GitOps and ArgoCD.
                </p>
                <p className="text-foreground/80 leading-relaxed text-lg mt-4">
                  I have strong hands-on experience building and troubleshooting distributed microservices, securing
                  APIs with Spring Security, OAuth2, OIDC, JWT and Keycloak, and establishing observability with
                  Prometheus, Grafana, Dynatrace, Loki and Tempo. My experience spans the complete application
                  lifecycle — backend development and API integration through containerisation, CI/CD, deployment,
                  monitoring and production troubleshooting.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat) => (
              <Card key={stat.label} className="glass-card">
                <CardContent className="p-6 text-center">
                  <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="glass-card hover:border-primary/50 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
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

export default About;
