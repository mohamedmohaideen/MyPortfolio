import { GitBranch, Container, Cloud, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: GitBranch,
    title: "CI/CD & GitOps",
    description: "Jenkins, GitHub Actions, ArgoCD and SonarQube quality gates powering fully automated delivery pipelines"
  },
  {
    icon: Container,
    title: "Containers & Kubernetes",
    description: "Docker, Kubernetes and Helm library charts driving zero-downtime deployments across Dev/QA/Production"
  },
  {
    icon: Cloud,
    title: "Cloud & IaC",
    description: "AWS and Azure (AZ-204 certified) with Terraform, Ansible and CloudFormation provisioning"
  },
  {
    icon: Activity,
    title: "Observability",
    description: "Grafana, Prometheus, Loki, Tempo, Splunk, Dynatrace and Datadog for metrics, logs and tracing"
  }
];

const stats = [
  { value: "2.5+", label: "Years Experience" },
  { value: "10+", label: "Microservices Managed" },
  { value: "~60%", label: "Manual Effort Reduced" },
  { value: "0", label: "Unplanned Downtime" }
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
              DevOps Engineer and Java Developer building reliable delivery pipelines for regulated banking platforms
            </p>
          </div>

          <div className="mb-12">
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Professional Summary</h3>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  I&apos;m a results-driven DevOps Engineer with 2.5 years of experience delivering CI/CD automation,
                  Kubernetes orchestration, and cloud-native infrastructure for enterprise banking clients including
                  UniCredit and American Express. I reduce deployment cycles and manual intervention through Jenkins,
                  GitHub Actions, ArgoCD, and GitOps practices.
                </p>
                <p className="text-foreground/80 leading-relaxed text-lg mt-4">
                  I have a proven track record of improving release reliability, accelerating delivery pipelines, and
                  implementing end-to-end observability using Grafana, Prometheus, Loki, Tempo, Splunk, and Datadog.
                  With a strong Java 17 and Spring Boot foundation plus Terraform, Ansible, Docker, Kubernetes and Helm
                  expertise, I collaborate across development, QA, and business teams to drive operational efficiency and
                  zero-downtime deployments in regulated financial environments.
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
