import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer — Cloud-Native Java Developer",
    company: "Tata Consultancy Services (TCS)",
    client: "Client: UniCredit — Enterprise Banking Platform",
    location: "Bangalore, India",
    period: "Nov 2025 – Present",
    current: true,
    points: [
      "Architected Java 21 and Spring Boot 4 microservices across 8–10 active banking services, strengthening scalable backend service delivery for enterprise banking workflows.",
      "Engineered Spring Cloud, REST APIs, OpenFeign, API Gateway, Eureka, and centralized configuration components, improving service-to-service communication across distributed applications.",
      "Orchestrated Docker and Kubernetes deployments with Helm Charts, ConfigMaps, Services, and application configuration, enabling repeatable cloud-native deployment and troubleshooting.",
      "Streamlined Jenkins CI/CD pipelines and GitOps deployment practices with ArgoCD, improving application build, release, and deployment consistency across environments.",
      "Optimized production troubleshooting using Dynatrace, Splunk, Prometheus, and Grafana, reducing root-cause-analysis resolution time by approximately 40%.",
      "Engineered Apache Kafka-based event-driven integrations, improving asynchronous communication and decoupling between distributed banking services.",
      "Strengthened application security using Spring Security, OAuth2, JWT, OIDC, and Keycloak concepts, supporting secure authentication and authorization across backend services.",
      "Resolved distributed application issues involving Kubernetes Services, configuration, service discovery, API Gateway, Kafka, and centralized logging, improving application reliability during production support.",
      "Collaborated with development, business, DevOps, and support teams in Agile/Scrum environments, accelerating incident analysis, defect resolution, and production validation."
    ],
    tech: [
      "Java 21",
      "Spring Boot 4",
      "Spring Cloud",
      "Apache Kafka",
      "Docker",
      "Kubernetes",
      "Helm",
      "Jenkins",
      "ArgoCD",
      "Dynatrace",
      "Splunk",
      "Prometheus",
      "Grafana",
      "Keycloak"
    ]
  },
  {
    role: "Assistant Systems Engineer — Cloud-Native Automation & Integration Engineer",
    company: "Tata Consultancy Services (TCS)",
    client: "Client: American Express — Global Financial Services",
    location: "Bangalore, India",
    period: "Mar 2024 – Oct 2025",
    current: false,
    points: [
      "Engineered Java and Spring Boot API automation frameworks using Cucumber, JUnit, Postman, and Swagger/OpenAPI, strengthening functional and regression validation for banking microservices.",
      "Developed REST API validation and integration-testing components, improving repeatability of request, response, business-rule, and service-integration verification.",
      "Containerized API automation components using Docker and Kubernetes, enabling consistent execution and validation across containerized application environments.",
      "Automated CI/CD execution through Jenkins and AWS delivery services, improving repeatability of build, test, and deployment workflows.",
      "Provisioned AWS environments using VPC, Security Groups, EC2, EBS, and IAM configurations, creating isolated infrastructure for automated application testing.",
      "Integrated Splunk-based application logging and troubleshooting workflows, reducing recurring service-integration investigation effort by approximately 30%.",
      "Optimized regression validation through automated API test execution, reducing repetitive manual verification across banking application workflows.",
      "Collaborated with development, QA, business, and support teams in Agile environments, accelerating defect investigation, fix validation, and release readiness."
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Cucumber",
      "JUnit",
      "Postman",
      "Swagger / OpenAPI",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "AWS",
      "Splunk",
      "Agile"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Professional Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              3 years at TCS across enterprise banking &amp; financial services
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="glass-card border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-2 text-foreground">{exp.role}</CardTitle>
                      <div className="flex items-center gap-2 text-primary mb-2">
                        <Briefcase className="w-5 h-5" />
                        <span className="text-lg font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-4 text-muted-foreground flex-wrap">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    {exp.current && (
                      <Badge className="bg-primary/20 text-primary hover:bg-primary/30">Current Role</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h4 className="font-semibold text-lg text-secondary">{exp.client}</h4>

                  <div className="space-y-3">
                    {exp.points.map((point, i) => (
                      <p key={i} className="text-foreground/80 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{point}</span>
                      </p>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border/50">
                    <h4 className="font-semibold mb-3 text-foreground">Key Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-primary/50 text-foreground">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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

export default Experience;
