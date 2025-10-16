import { Lightbulb, TrendingUp } from "lucide-react";

interface ProjectCardProps {
  title: string;
  course: string;
  description: string;
  impact: string;
  icon: React.ReactNode;
  index: number;
}

const ProjectCard = ({ title, course, description, impact, icon, index }: ProjectCardProps) => {
  return (
    <div 
      className="glass-card p-8 rounded-lg hover:shadow-lg transition-base group animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-base">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-heading font-semibold mb-1">{title}</h3>
          <p className="text-sm text-primary mb-3">{course}</p>
        </div>
      </div>
      
      <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>
      
      <div className="flex items-start gap-2 p-4 bg-accent/10 rounded-lg">
        <TrendingUp className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm font-semibold text-accent mb-1">Projected Impact</p>
          <p className="text-foreground">{impact}</p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "NovatraX",
      course: "MGMT Course Project",
      description: "Developed a comprehensive business plan for an innovative startup concept. Conducted extensive market research, competitive analysis, and financial projections. Created strategic marketing plans and operational frameworks to ensure business viability and growth potential.",
      impact: "Projected revenue increase of 15-20% in first year through strategic market positioning and targeted customer acquisition strategies.",
      icon: <Lightbulb className="h-6 w-6 text-primary" />
    },
    {
      title: "Demystified",
      course: "Essentials of Business",
      description: "Performed in-depth SWOT analysis for a local business to identify strategic opportunities and threats. Developed actionable recommendations for operational improvements, process optimization, and competitive positioning. Presented findings and implementation roadmap to stakeholders.",
      impact: "Recommendations projected to improve operational efficiency by 10-12% and enhance competitive positioning in the local market.",
      icon: <Lightbulb className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in">
            Academic Projects
          </h1>
          <p className="text-lg text-muted-foreground mb-12 animate-fade-in">
            Applying analytical thinking to solve real-world business challenges
          </p>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>

          <div className="mt-12 glass-card p-6 rounded-lg animate-fade-in">
            <p className="text-center text-muted-foreground">
              More projects coming soon as I continue my academic journey and professional development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
