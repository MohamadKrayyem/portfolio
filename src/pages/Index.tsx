import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Database, Globe, Zap } from "lucide-react";

const Index = () => {
  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "30+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" },
  ];

  const services = [
    {
      icon: <Globe className="w-12 h-12 text-primary" />,
      title: "Web Development",
      description: "Modern, responsive websites built with the latest technologies"
    },
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Frontend Development",
      description: "Beautiful, interactive user interfaces that engage your audience"
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: "Backend Development",
      description: "Scalable server architecture and robust database solutions"
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Performance Optimization",
      description: "Lightning-fast applications optimized for the best user experience"
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden page-content">
      {/* Hero Section with Background Video */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          className="video-background"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%23111111'/%3E%3C/svg%3E"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-network-background-4638-large.mp4" type="video/mp4" />
        </video>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 tech-pattern opacity-40" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Mohamad</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-light mb-8 text-muted-foreground">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              I craft exceptional digital experiences through innovative web solutions. 
              Transforming ideas into powerful, scalable applications that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-primary hover:glow-effect text-lg px-8 py-4"
              >
                <Link to="/projects">
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-border hover:bg-secondary text-lg px-8 py-4"
              >
                <Link to="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What I <span className="gradient-text">Do</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I specialize in creating end-to-end digital solutions that drive business growth 
              and deliver exceptional user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass-card hover-lift border-border text-center">
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-glow opacity-10" />
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Something{" "}
            <span className="gradient-text">Amazing?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's turn your vision into reality. I'm here to help you create 
            digital solutions that make an impact.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-gradient-primary hover:glow-effect text-lg px-12 py-6"
          >
            <Link to="/contact">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
