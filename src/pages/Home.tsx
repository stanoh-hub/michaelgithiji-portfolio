import { ArrowRight, Download, Code, Brain, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import michaelHeadshot from "@/assets/michael-headshot.jpg";

const Home = () => {
  const highlights = [
    {
      icon: Code,
      title: "Technical Skills",
      description: "Proficient in programming, mathematics, and research methodologies",
    },
    {
      icon: Brain,
      title: "Data Science",
      description: "Passionate about extracting insights from complex datasets",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player with excellent communication skills",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            {/* Text Content */}
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-navy mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Michael Githiji
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-navy-light mb-8 leading-relaxed">
                BMCS Student passionate about{" "}
                <span className="text-primary font-semibold">data science</span>,{" "}
                <span className="text-accent font-semibold">research</span>, and{" "}
                <span className="text-primary font-semibold">innovative problem-solving</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects">
                  <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group">
                    View My Work
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="hover:bg-primary/10 hover:border-primary transition-all duration-300">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-glow border-4 border-primary/20 animate-float">
                  <img
                    src={michaelHeadshot}
                    alt="Michael Githiji - BMCS Student"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center animate-pulse">
                  <Code className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-section-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
              What I Bring to the Table
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              As a BMCS student, I combine mathematical rigor with computational thinking
              to solve complex problems and drive innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4">{highlight.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            I'm always excited to collaborate on innovative projects and explore new opportunities
            in data science, research, and technology.
          </p>
          <Link to="/contact">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;