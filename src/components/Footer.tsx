import { Heart, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, url: "#linkedin", label: "LinkedIn" },
    { icon: Github, url: "#github", label: "GitHub" },
    { icon: Mail, url: "mailto:alex.chen@email.com", label: "Email" }
  ];

  return (
    <footer className="bg-gradient-to-br from-card to-card-soft border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Bio */}
          <div className="mb-8">
            <h3 className="font-display text-xl font-bold text-gradient-primary mb-3">
              Alex Chen
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Passionate data analyst turning complex information into lovable insights 
              that drive meaningful change. Always learning, always growing.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target={link.url.startsWith('#') ? '_self' : '_blank'}
                  rel={link.url.startsWith('#') ? '' : 'noopener noreferrer'}
                  className="group"
                  aria-label={link.label}
                >
                  <div className="bg-gradient-primary p-3 rounded-xl shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-primary-foreground" />
                  </div>
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Alex Chen. All rights reserved.</span>
            <div className="hidden sm:block">•</div>
            <div className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-primary animate-bounce-gentle" />
              <span>and lots of coffee</span>
            </div>
          </div>

          {/* Privacy Note */}
          <div className="mt-4 text-xs text-muted-foreground">
            This site respects your privacy and doesn't track you. 
            <br className="sm:hidden" />
            Data is beautiful, but your privacy is sacred.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;