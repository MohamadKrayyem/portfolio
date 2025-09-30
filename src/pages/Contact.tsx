import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll reply soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Contact details
  const contactInfo = [
    { icon: <Mail className="w-6 h-6 text-primary" />, title: "Email", value: "mohamad.devv@email.com" },
    { icon: <Phone className="w-6 h-6 text-primary" />, title: "Phone", value: "+961 70 123 456" },
    { icon: <MapPin className="w-6 h-6 text-primary" />, title: "Location", value: "Beirut, Lebanon" },
  ];

  // Social links
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: "#" },
    { icon: <Linkedin className="w-5 h-5" />, url: "#" },
    { icon: <Twitter className="w-5 h-5" />, url: "#" },
  ];

  return (
    <div className="min-h-screen bg-background pt-20 page-content">
      <div className="container mx-auto px-6 py-16">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Contact <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question or project in mind? Let’s talk!
          </p>
        </div>

        {/* Main layout: info + form */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Info */}
          <div className="space-y-6">
            {contactInfo.map((info, i) => (
              <Card key={i} className="glass-card border-border">
                <CardContent className="p-6 flex items-center space-x-4">
                  {info.icon}
                  <div>
                    <h3 className="font-semibold">{info.title}</h3>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Socials */}
            <div className="flex space-x-4">
              {socialLinks.map((social, i) => (
                <Button key={i} asChild variant="outline" size="icon">
                  <a href={social.url} target="_blank" rel="noreferrer">
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <Card className="glass-card border-border">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
                <Button type="submit" className="w-full bg-gradient-primary">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
