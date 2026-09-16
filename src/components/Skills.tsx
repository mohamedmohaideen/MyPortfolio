import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const icon = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}.svg`;

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java 17 / 21", icon: icon("java/java-original") },
      { name: "SQL", icon: icon("mysql/mysql-original") },
      { name: "Bash", icon: icon("bash/bash-original") },
      { name: "Linux Shell Scripting", icon: icon("linux/linux-original") }
    ]
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Spring Boot 3 / 4", icon: icon("spring/spring-original") },
      { name: "Spring Framework 6 / 7", icon: icon("spring/spring-original") },
      { name: "Spring Cloud", icon: icon("spring/spring-original") },
      { name: "Spring Security", icon: icon("spring/spring-original") }
    ]
  },
  {
    title: "Microservices & APIs",
    skills: [
      { name: "Microservices Architecture", icon: icon("spring/spring-original") },
      { name: "REST APIs", icon: icon("swagger/swagger-original") },
      { name: "OpenAPI / Swagger", icon: icon("swagger/swagger-original") },
      { name: "OpenFeign", icon: icon("spring/spring-original") },
      { name: "API Gateway", icon: icon("spring/spring-original") },
      { name: "Eureka", icon: icon("spring/spring-original") },
      { name: "Config Server", icon: icon("spring/spring-original") },
      { name: "Circuit Breaker", icon: icon("spring/spring-original") },
      { name: "Retry", icon: icon("spring/spring-original") },
      { name: "Rate Limiting", icon: icon("spring/spring-original") }
    ]
  },
  {
    title: "Messaging",
    skills: [
      { name: "Apache Kafka", icon: icon("apachekafka/apachekafka-original") },
      { name: "RabbitMQ", icon: icon("rabbitmq/rabbitmq-original") },
      { name: "Event-Driven Architecture", icon: icon("apachekafka/apachekafka-original") },
      { name: "Asynchronous Communication", icon: icon("apachekafka/apachekafka-original") }
    ]
  },
  {
    title: "Containers & Orchestration",
    skills: [
      { name: "Docker", icon: icon("docker/docker-original") },
      { name: "Kubernetes", icon: icon("kubernetes/kubernetes-plain") },
      { name: "Helm Charts", icon: icon("helm/helm-original") },
      { name: "Kubernetes Services", icon: icon("kubernetes/kubernetes-plain") },
      { name: "ConfigMaps & Secrets", icon: icon("kubernetes/kubernetes-plain") },
      { name: "Deployments", icon: icon("kubernetes/kubernetes-plain") },
      { name: "StatefulSets", icon: icon("kubernetes/kubernetes-plain") },
      { name: "EKS", icon: icon("amazonwebservices/amazonwebservices-original-wordmark") },
      { name: "ECS", icon: icon("amazonwebservices/amazonwebservices-original-wordmark") }
    ]
  },
  {
    title: "Cloud Platforms",
    skills: [
      { name: "AWS", icon: icon("amazonwebservices/amazonwebservices-original-wordmark") },
      { name: "Azure", icon: icon("azure/azure-original") },
      { name: "EC2", icon: icon("amazonwebservices/amazonwebservices-original-wordmark") },
      { name: "S3", icon: icon("amazonwebservices/amazonwebservices-original-wordmark") },
      { name: "RDS", icon: icon("amazonwebservices/amazonwebservices-original-wordmark") },
      { name: "DynamoDB", icon: icon("dynamodb/dynamodb-original") },
      { name: "VPC", icon: icon("amazonwebservices/amazonwebservices-original-wordmark") },
      { name: "IAM", icon: icon("amazonwebservices/amazonwebservices-original-wordmark") }
    ]
  },
  {
    title: "DevOps & CI/CD",
    skills: [
      { name: "Jenkins", icon: icon("jenkins/jenkins-original") },
      { name: "GitHub Actions", icon: icon("githubactions/githubactions-original") },
      { name: "GitLab CI", icon: icon("gitlab/gitlab-original") },
      { name: "Terraform", icon: icon("terraform/terraform-original") },
      { name: "Ansible", icon: icon("ansible/ansible-original") },
      { name: "GitOps", icon: icon("git/git-original") },
      { name: "ArgoCD", icon: icon("argocd/argocd-original") },
      { name: "AWS CodePipeline", icon: icon("amazonwebservices/amazonwebservices-original-wordmark") },
      { name: "AWS CodeBuild", icon: icon("amazonwebservices/amazonwebservices-original-wordmark") },
      { name: "AWS CodeDeploy", icon: icon("amazonwebservices/amazonwebservices-original-wordmark") }
    ]
  },
  {
    title: "Security",
    skills: [
      { name: "Keycloak", icon: icon("keycloak/keycloak-original") },
      { name: "Spring Security", icon: icon("spring/spring-original") },
      { name: "OAuth2", icon: icon("oauth/oauth-original") },
      { name: "OIDC", icon: icon("oauth/oauth-original") },
      { name: "JWT", icon: icon("jwt/jwt-original") },
      { name: "Authentication & Authorization", icon: icon("keycloak/keycloak-original") }
    ]
  },
  {
    title: "Observability",
    skills: [
      { name: "Distributed Tracing", icon: icon("opentelemetry/opentelemetry-original") },
      { name: "Prometheus", icon: icon("prometheus/prometheus-original") },
      { name: "Grafana", icon: icon("grafana/grafana-original") },
      { name: "Dynatrace", icon: icon("grafana/grafana-original") },
      { name: "Splunk", icon: icon("splunk/splunk-original") },
      { name: "Loki", icon: icon("grafana/grafana-original") },
      { name: "Tempo", icon: icon("grafana/grafana-original") },
      { name: "OpenTelemetry", icon: icon("opentelemetry/opentelemetry-original") }
    ]
  },
  {
    title: "Testing",
    skills: [
      { name: "JUnit", icon: icon("junit/junit-original") },
      { name: "Cucumber", icon: icon("cucumber/cucumber-plain") },
      { name: "Postman", icon: icon("postman/postman-original") },
      { name: "API Automation", icon: icon("swagger/swagger-original") },
      { name: "REST API Testing", icon: icon("postman/postman-original") },
      { name: "Integration Testing", icon: icon("junit/junit-original") },
      { name: "Functional Testing", icon: icon("cucumber/cucumber-plain") },
      { name: "Regression Testing", icon: icon("junit/junit-original") },
      { name: "Performance Testing", icon: icon("grafana/grafana-original") }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", icon: icon("mysql/mysql-original") },
      { name: "Oracle", icon: icon("oracle/oracle-original") },
      { name: "PostgreSQL", icon: icon("postgresql/postgresql-original") },
      { name: "Redis", icon: icon("redis/redis-original") },
      { name: "H2", icon: icon("mysql/mysql-original") },
      { name: "JPA", icon: icon("hibernate/hibernate-original") },
      { name: "Hibernate", icon: icon("hibernate/hibernate-original") }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: icon("git/git-original") },
      { name: "GitHub", icon: icon("github/github-original") },
      { name: "Maven", icon: icon("maven/maven-original") },
      { name: "IntelliJ IDEA", icon: icon("intellij/intellij-original") },
      { name: "Linux", icon: icon("linux/linux-original") }
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
              <span className="gradient-text">Core Technical Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I work with every day
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="glass-card hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
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
