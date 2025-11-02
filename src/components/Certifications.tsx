import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Spring Boot and Microservices",
    issuer: "Udemy (Telusko)",
    description: "Comprehensive course covering the latest Spring framework technologies, including Spring Boot 3, microservices architecture, and Spring AI integration.",
    badge: "Development",
    certificateUrl: "https://github.com/mohamedmohaideen/SpringBoot_Certificate"
  },
  {
    title: "Microsoft Certified: Azure Developer Associate (AZ-204)",
    issuer: "Microsoft",
    description: "Professional certification demonstrating expertise in developing and deploying cloud applications and services on Microsoft Azure platform.",
    badge: "Cloud",
    certificateUrl: "https://github.com/mohamedmohaideen/Azure-Developer-Associate"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional certifications and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="glass-card hover:border-primary/50 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-start gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                      {cert.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-foreground leading-tight">
                    {cert.title}
                  </CardTitle>
                  <p className="text-sm text-primary font-medium mt-1">{cert.issuer}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full"
                    asChild
                  >
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Certificate
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
