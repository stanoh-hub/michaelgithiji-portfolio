import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Data Analysis Dashboard",
      description: "Interactive web dashboard for visualizing and analyzing large datasets using Python, R, and modern web technologies. Features real-time data updates and customizable visualization options.",
      technologies: ["Python", "R", "React", "D3.js", "PostgreSQL"],
      category: "Data Science",
      status: "Completed",
      date: "2024",
      featured: true,
    },
    {
      title: "Machine Learning Classifier",
      description: "Developed a multi-class classification model to predict student performance based on various academic and demographic factors. Achieved 92% accuracy using ensemble methods.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
      category: "Machine Learning",
      status: "Completed",
      date: "2024",
      featured: true,
    },
    {
      title: "Algorithm Optimization Research",
      description: "Research project investigating computational complexity and optimization techniques for sorting algorithms. Published findings in university research journal.",
      technologies: ["Java", "Python", "LaTeX", "Research"],
      category: "Research",
      status: "Published",
      date: "2023",
      featured: false,
    },
    {
      title: "Statistical Analysis Tool",
      description: "Command-line tool for performing statistical analysis on datasets. Includes hypothesis testing, correlation analysis, and regression modeling capabilities.",
      technologies: ["R", "Python", "Statistics"],
      category: "Statistics",
      status: "In Progress",
      date: "2024",
      featured: false,
    },
    {
      title: "Database Management System",
      description: "Designed and implemented a relational database system for a hypothetical library management system with advanced querying capabilities.",
      technologies: ["SQL", "PostgreSQL", "Python", "Flask"],
      category: "Database",
      status: "Completed",
      date: "2023",
      featured: false,
    },
    {
      title: "Mathematical Modeling Project",
      description: "Applied mathematical modeling techniques to solve real-world optimization problems in supply chain management. Used linear programming and simulation methods.",
      technologies: ["MATLAB", "Python", "Optimization", "Modeling"],
      category: "Mathematics",
      status: "Completed",
      date: "2023",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800";
      case "In Progress": return "bg-yellow-100 text-yellow-800";
      case "Published": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const ProjectCard = ({ project, featured = false }: { project: any; featured?: boolean }) => (
    <Card className={`bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 group ${featured ? 'lg:col-span-2' : ''}`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl text-navy group-hover:text-primary transition-colors duration-300">
              {project.title}
            </CardTitle>
            <div className="flex items-center mt-2 space-x-4">
              <Badge variant="outline" className="text-primary border-primary">
                {project.category}
              </Badge>
              <Badge className={getStatusColor(project.status)}>
                {project.status}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                {project.date}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {project.description}
        </p>
        
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <Tag className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-navy">Technologies</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex space-x-3">
          <Button size="sm" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group/btn">
            <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
            View Code
          </Button>
          <Button size="sm" variant="outline" className="hover:bg-primary/10 hover:border-primary transition-all duration-300 group/btn">
            <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
            Live Demo
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A showcase of academic, personal, and collaborative projects that demonstrate my skills and passion for technology
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-navy mb-8">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} featured={true} />
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="animate-fade-in-up">
          <h2 className="text-3xl font-bold text-navy mb-8">Additional Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center animate-fade-in">
          <Card className="bg-gradient-primary border-0 shadow-glow">
            <CardContent className="p-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Interested in Collaboration?
              </h3>
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                I'm always excited to work on new projects and explore innovative solutions. 
                Let's discuss how we can work together!
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300">
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
