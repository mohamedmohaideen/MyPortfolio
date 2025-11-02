import { Code2, Database, Server, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  {
    icon: Code2,
    title: "Backend Development",
    description: "Strong expertise in Java, Spring Boot, and REST API development with microservices architecture"
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Proficient in MySQL, H2, and database integration with Spring Data"
  },
  {
    icon: Server,
    title: "Microservices & Kafka",
    description: "Experience with event-driven microservices and Kafka integration"
  },
  {
    icon: Award,
    title: "Cloud & DevOps",
    description: "Microsoft Azure certified with CI/CD automation using Jenkins"
  }
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
              Passionate Java developer with a strong foundation in backend technologies
            </p>
          </div>

          <div className="mb-16">
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  I&apos;m a motivated and detail-oriented Java Spring Boot Microservices Developer currently working at Tata Consultancy Services (TCS) on the American Express Digital Banking project. My expertise lies in building and testing scalable backend applications using Java, Spring Boot, and microservices architecture.
                </p>
                <p className="text-foreground/80 leading-relaxed text-lg mt-4">
                  I specialize in REST API development, Kafka-based event-driven microservices, and database integration. My experience includes writing comprehensive BDD test cases, performing API testing with Postman, and automating CI/CD pipelines with Jenkins. I&apos;m passionate about delivering secure, high-performance enterprise solutions while continuously learning and adapting to new technologies.
                </p>
              </CardContent>
            </Card>
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
