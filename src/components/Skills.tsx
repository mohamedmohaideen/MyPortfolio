import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const icon = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}.svg`;

const skillCategories = [
  {
    title: "CI/CD & GitOps",
    level: "Expert",
    skills: [
      { name: "Jenkins", icon: icon("jenkins/jenkins-original") },
      { name: "GitHub Actions", icon: icon("githubactions/githubactions-original") },
      { name: "ArgoCD", icon: icon("argocd/argocd-original") },
      { name: "GitOps", icon: icon("git/git-original") },
      { name: "SonarQube", icon: icon("sonarqube/sonarqube-original") },
      { name: "Pipeline Automation", icon: icon("jenkins/jenkins-original") }
    ]
  },
  {
    title: "Containers & Orchestration",
    level: "Expert",
    skills: [
      { name: "Docker", icon: icon("docker/docker-original") },
      { name: "Kubernetes", icon: icon("kubernetes/kubernetes-plain") },
      { name: "Helm", icon: icon("helm/helm-original") },
      { name: "StatefulSets", icon: icon("kubernetes/kubernetes-plain") },
      { name: "ConfigMaps & Secrets", icon: icon("kubernetes/kubernetes-plain") },
      { name: "Rollbacks", icon: icon("kubernetes/kubernetes-plain") }
    ]
  },
  {
    title: "Cloud Platforms",
    level: "Proficient",
    skills: [
      { name: "AWS EC2 / S3", icon: icon("amazonwebservices/amazonwebservices-original-wordmark") },
      { name: "AWS ECS / EKS", icon: icon("amazonwebservices/amazonwebservices-original-wordmark") },
      { name: "AWS Lambda", icon: icon("amazonwebservices/amazonwebservices-original-wordmark") },
      { name: "DynamoDB", icon: icon("dynamodb/dynamodb-original") },
      { name: "Azure (AZ-204)", icon: icon("azure/azure-original") }
    ]
  },
  {
    title: "IaC & Config Management",
    level: "Proficient",
    skills: [
      { name: "Terraform", icon: icon("terraform/terraform-original") },
      { name: "Ansible", icon: icon("ansible/ansible-original") },
      { name: "CloudFormation", icon: icon("amazonwebservices/amazonwebservices-original-wordmark") }
    ]
  },
  {
    title: "Observability",
    level: "Expert",
    skills: [
      { name: "Grafana", icon: icon("grafana/grafana-original") },
      { name: "Prometheus", icon: icon("prometheus/prometheus-original") },
      { name: "Loki", icon: icon("grafana/grafana-original") },
      { name: "Tempo", icon: icon("grafana/grafana-original") },
      { name: "Splunk", icon: icon("splunk/splunk-original") },
      { name: "Dynatrace", icon: icon("grafana/grafana-original") },
      { name: "Datadog", icon: icon("datadog/datadog-original") }
    ]
  },
  {
    title: "Security & Compliance",
    level: "Proficient",
    skills: [
      { name: "SonarQube", icon: icon("sonarqube/sonarqube-original") },
      { name: "Spring Security", icon: icon("spring/spring-original") },
      { name: "OAuth2 / OIDC", icon: icon("oauth/oauth-original") },
      { name: "JWT", icon: icon("jwt/jwt-original") },
      { name: "Keycloak", icon: icon("keycloak/keycloak-original") }
    ]
  },
  {
    title: "Messaging & Streaming",
    level: "Working",
    skills: [
      { name: "Apache Kafka", icon: icon("apachekafka/apachekafka-original") },
      { name: "RabbitMQ", icon: icon("rabbitmq/rabbitmq-original") },
      { name: "Event-Driven Architecture", icon: icon("apachekafka/apachekafka-original") }
    ]
  },
  {
    title: "Backend Integration",
    level: "Working",
    skills: [
      { name: "Java 17", icon: icon("java/java-original") },
      { name: "Spring Boot 3", icon: icon("spring/spring-original") },
      { name: "Spring Cloud", icon: icon("spring/spring-original") },
      { name: "Microservices", icon: icon("spring/spring-original") },
      { name: "REST APIs", icon: icon("swagger/swagger-original") }
    ]
  },
  {
    title: "Tools & Practices",
    level: "",
    skills: [
      { name: "Git", icon: icon("git/git-original") },
      { name: "GitHub", icon: icon("github/github-original") },
      { name: "Maven", icon: icon("maven/maven-original") },
      { name: "Postman", icon: icon("postman/postman-original") },
      { name: "Swagger", icon: icon("swagger/swagger-original") },
      { name: "Agile / Scrum", icon: icon("jira/jira-original") },
      { name: "IntelliJ IDEA", icon: icon("intellij/intellij-original") }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Technical Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I work with every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="glass-card hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
                    {category.level && (
                      <Badge variant="outline" className="border-primary/50 text-foreground">
                        {category.level}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-2 bg-primary/10 px-3 py-2 rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <img
                          src={skill.icon}
                          alt={`${skill.name} logo`}
                          loading="lazy"
                          className="w-5 h-5"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                        <span className="text-sm text-foreground">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
