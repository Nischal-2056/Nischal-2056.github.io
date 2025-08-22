import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Resume
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download my complete professional resume with detailed experience, skills, and achievements.
          </p>
        </div>

        {/* Download Card */}
        <div className="animate-fade-in-up">
          <div className="card-glow text-center max-w-2xl mx-auto">
            <div className="mb-8 flex justify-center">
              <div className="bg-primary p-6 rounded-2xl">
                <FileText className="w-16 h-16 text-primary-foreground" />
              </div>
            </div>
            
            <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
              Professional Resume
            </h3>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Comprehensive overview of my professional journey including detailed project descriptions, 
              technical skills, educational background, and key achievements in data analysis and AI.
            </p>

            <div className="space-y-4 mb-8">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-left">
                  <span className="text-muted-foreground">Format:</span>
                  <span className="ml-2 font-medium">PDF</span>
                </div>
                <div className="text-right">
                  <span className="text-muted-foreground">Size:</span>
                  <span className="ml-2 font-medium">2 pages</span>
                </div>
                <div className="text-left">
                  <span className="text-muted-foreground">Last updated:</span>
                  <span className="ml-2 font-medium">Dec 2024</span>
                </div>
                <div className="text-right">
                  <span className="text-muted-foreground">Language:</span>
                  <span className="ml-2 font-medium">English</span>
                </div>
              </div>
            </div>

            <a
              href="#resume-download"
              download="Alex-Chen-Data-Analyst-Resume.pdf"
              className="btn-hero inline-flex items-center gap-3 text-lg px-8 py-4"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>

            <div className="mt-6 text-sm text-muted-foreground">
              Need a specific format or have questions? <br />
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-primary hover:text-primary/80 font-medium underline"
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;