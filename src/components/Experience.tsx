import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

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
              My journey in the tech industry
            </p>
          </div>

          <Card className="glass-card border-l-4 border-l-primary">
            <CardHeader>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <CardTitle className="text-2xl mb-2 text-foreground">Backend Java Developer</CardTitle>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Briefcase className="w-5 h-5" />
                    <span className="text-lg font-semibold">Tata Consultancy Services (TCS)</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>March 2024 – Present</span>
                  </div>
                </div>
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30">
                  Current Role
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-secondary">
                  Client: American Express - Digital Banking Regression Automation
                </h4>
              </div>
              
              <div className="space-y-3">
                <p className="text-foreground/80 flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Developed and maintained BDD test cases in Gherkin language for banking APIs, ensuring comprehensive test coverage</span>
                </p>
                <p className="text-foreground/80 flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Built robust automation frameworks using Spring Boot, TestNG, and Cucumber for efficient testing workflows</span>
                </p>
                <p className="text-foreground/80 flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Performed API validation with Postman, ensuring accuracy, stability, and compliance with specifications</span>
                </p>
                <p className="text-foreground/80 flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Integrated automation scripts into Jenkins CI/CD pipeline, significantly reducing release time and improving deployment efficiency</span>
                </p>
                <p className="text-foreground/80 flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Collaborated in Agile teams using JIRA for sprint planning, task tracking, and delivering features on time</span>
                </p>
              </div>

              <div className="pt-4 border-t border-border/50">
                <h4 className="font-semibold mb-3 text-foreground">Key Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Spring Boot", "BDD Cucumber", "TestNG", "Postman", "Jenkins", "JIRA", "API Testing"].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-primary/50 text-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
