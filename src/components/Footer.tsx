import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ayush Khanal. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/khanalayush"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-base"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:khanalau@mail.uc.edu"
              className="text-muted-foreground hover:text-primary transition-base"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
