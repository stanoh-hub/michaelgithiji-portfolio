import { BookOpen, Target, Coffee, Music, Camera, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const interests = [
    { icon: Code, name: "Programming", color: "text-primary" },
    { icon: BookOpen, name: "Research", color: "text-accent" },
    { icon: Coffee, name: "Coffee", color: "text-yellow-600" },
    { icon: Music, name: "Music", color: "text-green-600" },
    { icon: Camera, name: "Photography", color: "text-purple-600" },
    { icon: Target, name: "Problem Solving", color: "text-red-600" },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Learn more about my background, interests, and what drives my passion for technology
          </p>
        </div>

        {/* Biography */}
        <Card className="mb-16 bg-gradient-card border-0 shadow-card animate-fade-in-up">
          <CardContent className="p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-navy mb-6">My Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="leading-relaxed">
                I'm Michael Githiji, a dedicated Bachelor of Mathematics and Computer Science (BMCS) 
                student with a deep passion for the intersection of mathematical theory and computational 
                application. My academic journey has been driven by curiosity and a desire to solve 
                complex problems through innovative thinking.
              </p>
              <p className="leading-relaxed">
                What excites me most about my field is the endless potential for discovery and impact. 
                Whether it's analyzing large datasets to uncover hidden patterns, developing algorithms 
                to solve real-world problems, or conducting research that pushes the boundaries of 
                current knowledge, I find fulfillment in work that combines analytical rigor with 
                creative problem-solving.
              </p>
              <p className="leading-relaxed">
                Beyond academics, I believe in the power of collaboration and continuous learning. 
                I'm always eager to connect with fellow researchers, industry professionals, and 
                anyone who shares a passion for using technology to make a positive impact on the world.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Career Goals */}
        <Card className="mb-16 bg-gradient-card border-0 shadow-card animate-fade-in-up">
          <CardContent className="p-8 lg:p-12">
            <h2 className="text-2xl font-bold text-navy mb-6">Career Aspirations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">Short-term Goals</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Complete my BMCS degree with excellence
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Gain hands-on experience through internships
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Contribute to open-source projects
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-accent mb-4">Long-term Vision</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Lead data science initiatives in industry
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Pursue advanced research opportunities
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Mentor the next generation of technologists
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Interests */}
        <div className="animate-fade-in-up">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">Personal Interests</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <interest.icon className={`h-8 w-8 mx-auto mb-3 ${interest.color} group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="font-semibold text-navy">{interest.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;