import { Briefcase, MapPin, Calendar } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  index: number;
}

const ExperienceCard = ({ title, company, location, period, description, index }: ExperienceCardProps) => {
  return (
    <div 
      className="glass-card p-6 rounded-lg hover:shadow-lg transition-base animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Briefcase className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-heading font-semibold mb-1">{title}</h3>
          <p className="text-lg text-primary mb-2">{company}</p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{period}</span>
            </div>
          </div>
        </div>
      </div>
      
      <ul className="space-y-2 ml-4">
        {description.map((item, i) => (
          <li key={i} className="text-muted-foreground flex items-start gap-2">
            <span className="text-accent mt-1.5">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Marketing",
      company: "Office of Sustainability, University of Cincinnati",
      location: "Cincinnati, Ohio",
      period: "Aug 2025 – Present",
      description: [
        "Promoted office initiatives through strategic marketing campaigns across campus",
        "Collaborated with student organizations to increase engagement by 25%",
        "Developed content for social media and promotional materials",
        "Organized sustainability-focused events to raise awareness"
      ]
    },
    {
      title: "Bike Mechanic",
      company: "Office of Sustainability, University of Cincinnati",
      location: "Cincinnati, Ohio",
      period: "May 2025 – Present",
      description: [
        "Assisted students with bike repairs and maintenance",
        "Improved service efficiency through organized workflow systems",
        "Maintained inventory of parts and tools",
        "Provided excellent customer service to campus community"
      ]
    },
    {
      title: "Marketing Coordinator",
      company: "Everest Link Pvt. Ltd",
      location: "Kathmandu, Nepal",
      period: "May 2023 – Apr 2024",
      description: [
        "Improved engagement and brand awareness through targeted marketing campaigns",
        "Increased social media engagement by 30% through strategic content planning",
        "Coordinated with cross-functional teams to execute marketing initiatives",
        "Analyzed campaign performance metrics to optimize future strategies"
      ]
    },
    {
      title: "Sales Executive Intern",
      company: "Royal Enfield",
      location: "Kathmandu, Nepal",
      period: "Dec 2023 – May 2024",
      description: [
        "Engaged with customers to understand needs and provide product recommendations",
        "Delivered compelling presentations and product demonstrations",
        "Organized promotional events that contributed to 15% sales increase",
        "Built strong customer relationships to drive repeat business"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 animate-fade-in">
            Work Experience
          </h1>
          <p className="text-lg text-muted-foreground mb-12 animate-fade-in">
            A journey through marketing, sales, and sustainability initiatives
          </p>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
