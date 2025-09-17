import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Server, Smartphone, Zap } from "lucide-react";

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"] },
    { category: "Tools", items: ["Docker", "AWS", "Git", "CI/CD", "Figma"] },
  ];

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Mobile Apps",
      description: "Cross-platform mobile applications with native performance"
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Backend Systems",
      description: "Scalable server architecture and database design"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Performance Optimization",
      description: "Speed optimization and technical SEO implementation"
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20 page-content">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="video-background"
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%23111111'/%3E%3C/svg%3E"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-network-connections-animation-4642-large.mp4" type="video/mp4" />
      </video>
      
      {/* Background Pattern */}
      <div className="fixed inset-0 tech-pattern pointer-events-none opacity-20" />
      
      <div className="container mx-auto px-6 py-16 relative">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Full Stack Developer with 5+ years of experience crafting 
            digital solutions that make a difference. I love turning complex problems 
            into simple, beautiful, and intuitive designs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="glass-card hover-lift border-border">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <Card key={index} className="glass-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Code className="w-6 h-6 text-primary mr-2" />
                    <h3 className="text-xl font-semibold">{skillSet.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillSet.items.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-smooth"
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

        {/* Personal Story */}
        <Card className="glass-card border-border max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              My <span className="gradient-text">Journey</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My journey into web development started during my computer science studies, 
                where I discovered the perfect blend of creativity and logic that programming offers. 
                What began as curiosity quickly became a passion for building digital experiences 
                that solve real-world problems.
              </p>
              <p>
                Over the years, I've had the privilege of working with startups and established 
                companies, helping them bring their visions to life through clean code and 
                intuitive design. I believe in continuous learning and staying updated with 
                the latest technologies to deliver cutting-edge solutions.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community. 
                I'm always excited about the next challenge and the opportunity to create 
                something amazing.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;