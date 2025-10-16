import { Code, Briefcase, Users } from "lucide-react";

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
  index: number;
}

const SkillCategory = ({ title, icon, skills, index }: SkillCategoryProps) => {
  return (
    <div 
      className="glass-card p-8 rounded-lg animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-primary/10 rounded-lg">
          {icon}
        </div>
        <h3 className="text-2xl font-heading font-semibold">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, i) => (
          <div key={i} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-foreground font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full gradient-primary transition-all duration-1000 ease-out"
                style={{ 
                  width: `${skill.level}%`,
                  animationDelay: `${index * 0.1 + i * 0.05}s`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical & Analytical Skills",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Microsoft Excel", level: 90 },
        { name: "SQL", level: 80 },
        { name: "Python", level: 75 },
        { name: "Data Visualization", level: 85 },
        { name: "SEO & Email Marketing", level: 80 }
      ]
    },
    {
      title: "Business & Marketing",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Marketing Strategy", level: 90 },
        { name: "Customer Engagement", level: 85 },
        { name: "Market Research", level: 80 },
        { name: "Campaign Management", level: 85 },
        { name: "Brand Development", level: 80 }
      ]
    },
    {
      title: "Professional & Soft Skills",
      icon: <Users className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Project Collaboration", level: 90 },
        { name: "Communication", level: 95 },
        { name: "Problem Solving", level: 85 },
        { name: "Time Management", level: 90 },
        { name: "Adaptability", level: 90 }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in">
            Skills & Expertise
          </h1>
          <p className="text-lg text-muted-foreground mb-12 animate-fade-in">
            A comprehensive toolkit for data-driven business success
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCategory key={index} {...category} index={index} />
            ))}
          </div>

          <div className="mt-12 glass-card p-8 rounded-lg animate-fade-in">
            <h3 className="text-xl font-heading font-semibold mb-4">Additional Skills</h3>
            <div className="flex flex-wrap gap-3">
              {["Basic Bicycle Maintenance", "Event Organization", "Content Creation", "Social Media Management", 
                "Customer Service", "Team Leadership"].map((skill, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
