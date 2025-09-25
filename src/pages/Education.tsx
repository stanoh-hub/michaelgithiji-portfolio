import { GraduationCap, Award, Code2, Database, Brain, Calculator, Users, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  const technicalSkills = [
    { name: "Python", level: 90, icon: Code2 },
    { name: "Java", level: 85, icon: Code2 },
    { name: "R", level: 80, icon: Database },
    { name: "SQL", level: 85, icon: Database },
    { name: "Machine Learning", level: 75, icon: Brain },
    { name: "Statistics", level: 88, icon: Calculator },
  ];

  const coursework = [
    "Advanced Calculus & Linear Algebra",
    "Data Structures & Algorithms",
    "Statistical Analysis & Modeling",
    "Machine Learning Fundamentals",
    "Database Management Systems",
    "Software Engineering Principles",
    "Discrete Mathematics",
    "Research Methodology",
  ];

  const softSkills = [
    { name: "Problem Solving", icon: Lightbulb },
    { name: "Team Collaboration", icon: Users },
    { name: "Critical Thinking", icon: Brain },
    { name: "Research & Analysis", icon: Award },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-6">
            Education & <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            My academic journey and the technical expertise I've developed along the way
          </p>
        </div>

        {/* Education Section */}
        <Card className="mb-16 bg-gradient-card border-0 shadow-card animate-fade-in-up">
          <CardHeader className="pb-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl text-navy">Bachelor of Mathematics and Computer Science</CardTitle>
                <p className="text-muted-foreground">BMCS Program - Currently Enrolled</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-navy mb-4">Program Highlights</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Interdisciplinary approach combining mathematics and computer science
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Strong foundation in analytical and computational thinking
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Emphasis on research methodology and problem-solving
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy mb-4">Key Coursework</h3>
                <div className="grid grid-cols-1 gap-2">
                  {coursework.map((course, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="text-sm justify-start p-2 hover:bg-primary/10 transition-colors"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technical Skills */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {technicalSkills.map((skill, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                      <skill.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-navy">{skill.name}</h3>
                      <div className="flex items-center mt-2">
                        <div className="flex-1 bg-secondary rounded-full h-2 mr-3">
                          <div 
                            className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-primary">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="animate-fade-in-up">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">Core Competencies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-0 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-navy">{skill.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;