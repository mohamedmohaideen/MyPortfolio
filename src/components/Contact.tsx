import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Linkedin, Github } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, India",
    link: null
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9080111793",
    link: "tel:+919080111793"
  },
  {
    icon: Mail,
    label: "Email",
    value: "mohamedmohaideena01@gmail.com",
    link: "mailto:mohamedmohaideena01@gmail.com"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mohamedmohaideen001",
    link: "https://linkedin.com/in/mohamedmohaideen001"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/mohamedmohaideen",
    link: "https://github.com/mohamedmohaideen"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Let&apos;s connect and discuss opportunities
            </p>
          </div>

          <Card className="glass-card">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition-colors break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-center pt-6 border-t border-border/50">
                <p className="text-foreground/70 mb-6">
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <a href="mailto:mohamedmohaideena01@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a
                      href="https://linkedin.com/in/mohamedmohaideen001"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a
                      href="https://github.com/mohamedmohaideen"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
