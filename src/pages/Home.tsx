import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import profileImage from "@/assets/profile-ayush.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="flex-1 animate-slide-in-left">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Hi, I'm <span className="text-primary">Ayush Khanal</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-2">Business Analytics Student</p>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              Passionate about leveraging data-driven insights to solve complex business challenges in finance and marketing.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/about">
                <Button size="lg" className="gradient-primary border-0">
                  About Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl rounded-full"></div>
              <img
                src={profileImage}
                alt="Ayush Khanal"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-primary/20 shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-lg animate-fade-in">
            <h2 className="text-3xl font-heading font-bold mb-6">Welcome to My Portfolio</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I'm a second-year Business Analytics student at the University of Cincinnati, driven by a passion for 
              transforming data into actionable insights. My background spans marketing, sales, and sustainability 
              initiatives, where I've consistently delivered measurable results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through my academic journey and professional experiences, I've developed strong analytical skills 
              combined with practical business acumen. I'm actively seeking internship opportunities where I can 
              contribute to data-driven decision-making and business growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
