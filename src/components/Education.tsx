import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Education</span>
            </h2>
            <p className="text-xl text-muted-foreground">My academic background</p>
          </div>

          <Card className="glass-card border-l-4 border-l-secondary">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <GraduationCap className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <CardTitle className="text-xl md:text-2xl mb-2 text-foreground">
                    Bachelor of Engineering — Electronics and Communication Engineering
                  </CardTitle>
                  <p className="text-lg text-primary font-semibold">Bannari Amman Institute of Technology</p>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2">
                    <Calendar className="w-4 h-4" />
                    <span>2019 – 2023</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed">
                Built a strong engineering foundation in systems, networks, and programming, which I now apply to
                cloud-native infrastructure, automation, and backend engineering in the banking domain.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
