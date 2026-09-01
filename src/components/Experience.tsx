import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "DevOps / Cloud-Native Engineer",
    company: "Tata Consultancy Services (TCS)",
    client: "Client: UniCredit — Enterprise Banking Platform",
    location: "Bangalore, India",
    period: "Oct 2025 – Present",
    current: true,
    points: [
      "Managed and maintained Kubernetes-based deployments across 3 environments (Dev/QA/Production) for 10+ banking microservices, achieving zero unplanned downtime across all production releases.",
      "Designed and owned Jenkins CI/CD pipelines for 10+ microservices, reducing manual build-and-deploy effort by ~60% and cutting average release cycle time from 2 days to under 4 hours.",
      "Implemented a GitOps delivery model using ArgoCD, enabling declarative automated deployments and reducing environment drift incidents by ~70%.",
      "Integrated SonarQube quality gates into all CI pipelines, enforcing static code analysis and security scanning on every build — blocking 100% of merges failing quality thresholds.",
      "Built centralised observability using Splunk and Dynatrace, reducing mean time to detect (MTTD) production issues by ~40% through proactive alerting and root-cause dashboards.",
      "Automated 5+ recurring operational workflows including scheduled email notifications and Excel-based reporting, eliminating ~8–10 hours of manual effort per week.",
      "Led post-incident reviews with development, QA, and business teams to resolve production defects — improving mean time to resolution (MTTR) by ~30%.",
      "Managed Helm chart library architecture with environment-specific values for 3-tier deployments, reducing environment-specific configuration errors by ~50%."
    ],
    tech: ["Kubernetes", "Jenkins", "ArgoCD", "Helm", "SonarQube", "Splunk", "Dynatrace", "GitOps", "Docker"]
  },
  {
    role: "DevOps / Automation Engineer",
    company: "Tata Consultancy Services (TCS)",
    client: "Client: American Express — Digital Banking Services",
    location: "Bangalore, India",
    period: "Apr 2024 – Oct 2025",
    current: false,
    points: [
      "Built and maintained Jenkins CI/CD pipelines for 6+ digital banking services (account opening, management, servicing, closure), reducing regression cycle time by ~50%.",
      "Managed Docker and Kubernetes environments for application and test-environment validation, supporting 3 parallel test environments with zero misconfiguration incidents.",
      "Designed a reusable Java + Cucumber API automation framework covering 200+ test scenarios, increasing test coverage by ~40% and eliminating 15+ hours of manual regression per sprint.",
      "Integrated automated regression suites into Jenkins CI pipelines, enabling continuous test execution on every build and reducing defect escape rate by ~35%.",
      "Mentored 2 junior automation engineers on framework design, Gherkin best practices, and Jenkins pipeline integration — full productivity within 6 weeks.",
      "Used Git branching strategies with 4 cross-functional teams to coordinate releases and reduce merge conflicts via structured PR review workflows.",
      "Investigated and resolved 50+ automation failures and API defects using Splunk log analysis, reducing flaky test rate from ~20% to under 5% within 2 sprints.",
      "Contributed to Agile sprint ceremonies, delivering automation tasks on schedule across 10+ sprints with zero carry-over items."
    ],
    tech: ["Jenkins", "Docker", "Kubernetes", "Java", "Cucumber", "Splunk", "Git", "Agile"]
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
              2.5 years across enterprise banking &amp; financial services
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
