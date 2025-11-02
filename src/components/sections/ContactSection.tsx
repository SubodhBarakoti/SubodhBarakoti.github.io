import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ContactSectionProps {
  revealed: boolean;
}

export function ContactSection({ revealed }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  if (!revealed) {
    return null;
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 animate-fade-in-up" id="contact">
      <div className="max-w-4xl mx-auto space-y-12 w-full">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient glow-effect">
            Contact Me
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's work together on something amazing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border card-glow">
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            
            <div className="space-y-4">
              <a
                href="mailto:subodhbarakoti17@gmail.com"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">subodhbarakoti17@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/subodhbarakoti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
              >
                <div className="p-2 rounded-full bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                  <Linkedin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium">linkedin.com/in/subodhbarakoti</p>
                </div>
              </a>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border card-glow">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="min-h-[120px] bg-background/50"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
