import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["Java", "Spring Boot", "Microservices", "Kafka", "BDD Cucumber", "TestNG", "JUnit 5", "Mockito"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "H2", "Spring Data JPA", "Database Testing"]
  },
  {
    title: "API & Testing",
    skills: ["REST API", "Postman", "API Testing", "Backend Testing", "BDD Gherkin"]
  },
  {
    title: "DevOps & Tools",
    skills: ["Jenkins", "Git", "CI/CD", "Agile", "JIRA"]
  },
  {
    title: "Frontend (Basic)",
    skills: ["React.js", "API Integration"]
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
              Technologies and tools I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="glass-card hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/10 text-foreground hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
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
