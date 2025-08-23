import { useState } from "react";
import { ExternalLink, Github, X, TrendingUp } from "lucide-react";
import analyticsProject from "/assets/project-analytics.jpg";
import mlProject from "/assets/project-ml.jpg";
import insightsProject from "/assets/project-insights.jpg";

interface Project {
  id: number;
  title: string;
  outcome: string;
  tools: string[];
  thumbnail: string;
  problem: string;
  approach: string;
  impact: string[];
  githubUrl: string;
  liveUrl: string;
  description: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Customer Churn Prediction Platform",
      outcome: "Reduced customer churn by 23% through predictive analytics",
      tools: ["Python", "Scikit-learn", "Tableau", "AWS"],
      thumbnail: analyticsProject,
      problem: "E-commerce company was losing 15% of customers monthly without understanding why or being able to proactively retain them.",
      approach: "Built an end-to-end ML pipeline analyzing customer behavior patterns, transaction history, and engagement metrics. Implemented gradient boosting models with feature importance ranking.",
      impact: ["↑ Customer retention by 23%", "↓ Churn prediction accuracy: 89%", "💰 $2.3M annual revenue saved"],
      githubUrl: "#",
      liveUrl: "#",
      description: "End-to-end machine learning solution for predicting and preventing customer churn"
    },
    {
      id: 2,
      title: "Real-time Analytics Dashboard",
      outcome: "Increased team productivity by 40% with automated reporting",
      tools: ["React", "D3.js", "Python", "PostgreSQL"],
      thumbnail: mlProject,
      problem: "Marketing team spent 20+ hours weekly creating manual reports, delaying campaign optimizations and strategic decisions.",
      approach: "Developed a real-time dashboard with automated data pipelines, interactive visualizations, and alert systems. Integrated multiple data sources with ETL processes.",
      impact: ["↑ Team productivity by 40%", "↓ Report generation time: 2 hours → 5 minutes", "⚡ Real-time decision making enabled"],
      githubUrl: "#",
      liveUrl: "#",
      description: "Interactive dashboard providing real-time business insights and automated reporting"
    },
    {
      id: 3,
      title: "AI-Powered Content Optimization",
      outcome: "Improved content engagement by 65% using NLP insights",
      tools: ["Python", "BERT", "Pandas", "Plotly"],
      thumbnail: insightsProject,
      problem: "Content team struggled to understand what resonated with audiences, leading to inconsistent engagement and wasted content investment.",
      approach: "Applied natural language processing to analyze top-performing content, sentiment patterns, and engagement drivers. Created content scoring and recommendation system.",
      impact: ["↑ Content engagement by 65%", "↑ CTR improved by 34%", "📈 Content ROI increased 2.1x"],
      githubUrl: "#",
      liveUrl: "#",
      description: "NLP-driven content analysis and optimization platform for improved audience engagement"
    },
    {
      id: 4,
      title: "Supply Chain Optimization Model",
      outcome: "Optimized logistics reducing costs by $1.8M annually",
      tools: ["R", "Shiny", "SQL Server", "Excel"],
      thumbnail: analyticsProject,
      problem: "Manufacturing company faced inefficient inventory management and high logistics costs due to poor demand forecasting and route optimization.",
      approach: "Built predictive models for demand forecasting, inventory optimization algorithms, and route efficiency analysis. Created interactive Shiny dashboard for operations team.",
      impact: ["💰 $1.8M annual cost reduction", "↓ Inventory costs by 28%", "↑ Delivery efficiency by 35%"],
      githubUrl: "#",
      liveUrl: "#",
      description: "Advanced analytics solution for supply chain optimization and demand forecasting"
    },
    {
      id: 5,
      title: "Healthcare Data Privacy Framework",
      outcome: "Enabled secure analytics while maintaining 100% HIPAA compliance",
      tools: ["Python", "Differential Privacy", "Docker", "Kubernetes"],
      thumbnail: mlProject,
      problem: "Healthcare client needed to perform analytics on sensitive patient data while ensuring complete privacy compliance and regulatory requirements.",
      approach: "Implemented differential privacy techniques, secure multi-party computation, and privacy-preserving machine learning. Built containerized solution with audit trails.",
      impact: ["🔒 100% HIPAA compliance maintained", "↑ Analytics capability unlocked", "✅ Zero privacy incidents"],
      githubUrl: "#",
      liveUrl: "#",
      description: "Privacy-first analytics framework enabling secure healthcare data analysis"
    },
    {
      id: 6,
      title: "Social Impact Measurement Tool",
      outcome: "Helped 50+ nonprofits quantify their impact with data",
      tools: ["Tableau", "Python", "Google Analytics", "Survey APIs"],
      thumbnail: insightsProject,
      problem: "Nonprofit organizations struggled to measure and communicate their social impact effectively, hindering fundraising and program improvement efforts.",
      approach: "Created comprehensive impact measurement framework combining quantitative metrics with qualitative storytelling. Built automated reporting system for stakeholders.",
      impact: ["📊 50+ nonprofits empowered", "↑ Funding success rate by 45%", "💡 Data-driven program improvements"],
      githubUrl: "#",
      liveUrl: "#",
      description: "Comprehensive platform for measuring and visualizing social impact in nonprofit organizations"
    }
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world case studies showcasing how data science drives meaningful business outcomes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card-warm cursor-pointer group hover:scale-105 transition-all duration-300"
              onClick={() => openModal(project)}
            >
              {/* Thumbnail */}
              <div className="mb-6 overflow-hidden rounded-xl">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {project.outcome}
              </p>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.slice(0, 3).map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                  >
                    {tool}
                  </span>
                ))}
                {project.tools.length > 3 && (
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                    +{project.tools.length - 3} more
                  </span>
                )}
              </div>

              {/* CTA */}
              <div className="flex items-center text-primary font-medium text-sm group-hover:text-primary-glow transition-colors">
                <span>View Case Study</span>
                <TrendingUp className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm">
          <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-background border-b border-border p-6 flex justify-between items-start">
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-muted-foreground">{selectedProject.description}</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-muted-foreground" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Hero Image */}
              <div className="mb-8 rounded-xl overflow-hidden">
                <img
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Content Sections */}
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-display text-lg font-semibold mb-3 text-primary">
                    The Problem
                  </h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {selectedProject.problem}
                  </p>

                  <h4 className="font-display text-lg font-semibold mb-3 text-secondary">
                    My Approach
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.approach}
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-lg font-semibold mb-3 text-accent-foreground">
                    Impact Metrics
                  </h4>
                  <div className="space-y-3 mb-6">
                    {selectedProject.impact.map((metric, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-card-soft rounded-lg">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                        <span className="text-foreground font-medium">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <h4 className="font-display text-lg font-semibold mb-3 text-foreground">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="skill-badge"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-6 border-t border-border">
                <a
                  href={selectedProject.githubUrl}
                  className="btn-secondary flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={selectedProject.liveUrl}
                  className="btn-hero flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;