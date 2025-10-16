import { GraduationCap, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 animate-fade-in">
            About Me
          </h1>

          {/* Education Section */}
          <section className="mb-12 animate-fade-in">
            <div className="glass-card p-8 rounded-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-heading font-semibold mb-4">Education</h2>
                  
                  <div className="space-y-6">
                    <div className="border-l-2 border-primary pl-4">
                      <h3 className="text-xl font-semibold mb-1">University of Cincinnati</h3>
                      <p className="text-muted-foreground mb-2">
                        BBA in Business Analytics
                      </p>
                      <p className="text-sm text-muted-foreground">Expected April 2029</p>
                      <p className="mt-2 text-foreground">
                        Focusing on data-driven decision-making, financial analytics, and marketing strategies.
                      </p>
                    </div>

                    <div className="border-l-2 border-accent pl-4">
                      <h3 className="text-xl font-semibold mb-1">Global College of Management</h3>
                      <p className="text-muted-foreground mb-2">High School</p>
                      <p className="text-sm text-muted-foreground">2021 – 2023</p>
                      <p className="mt-2 text-foreground">Passed with A Grade</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Career Focus Section */}
          <section className="mb-12 animate-fade-in">
            <div className="glass-card p-8 rounded-lg">
              <h2 className="text-2xl font-heading font-semibold mb-6">Career Focus</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                As a Business Analytics student, I'm driven by the power of data to transform business outcomes. 
                My passion lies at the intersection of finance, marketing, and analytics, where I can leverage 
                quantitative insights to drive strategic decisions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Through my academic journey and professional experiences, I've developed a strong foundation in 
                analytical thinking, marketing strategy, and customer engagement. I thrive in collaborative 
                environments where I can apply my skills to solve real-world business challenges.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm actively seeking internship opportunities where I can contribute to data-driven decision-making, 
                develop my technical skills, and make a meaningful impact on business growth.
              </p>
            </div>
          </section>

          {/* Community Involvement Section */}
          <section className="animate-fade-in">
            <div className="glass-card p-8 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-heading font-semibold mb-4">Community Involvement</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Beyond my academic and professional pursuits, I'm committed to giving back to the community. 
                    Through my work with the Office of Sustainability, I've been able to combine my passion for 
                    environmental stewardship with practical service, helping students and promoting sustainable 
                    practices on campus.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
