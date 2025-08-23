import {
  BarChart3,
  Database,
  Brain,
  FileText,
  PieChart,
  GitBranch,
  Zap,
  TrendingUp,
  Code,
  Calculator,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Analysis",
      skills: [
        { name: "Python", icon: Code, tier: 5 },
        { name: "SQL", icon: Database, tier: 5 },
        { name: "R", icon: Calculator, tier: 4 },
        { name: "Excel", icon: FileText, tier: 5 },
      ],
    },
    {
      title: "Visualization & BI",
      skills: [
        { name: "Tableau", icon: BarChart3, tier: 5 },
        { name: "Power BI", icon: PieChart, tier: 4 },
        { name: "Plotly", icon: TrendingUp, tier: 4 },
        { name: "Matplotlib", icon: BarChart3, tier: 4 },
      ],
    },
    {
      title: "Data Science & ML",
      skills: [
        { name: "Machine Learning", icon: Brain, tier: 4 },
        { name: "Statistics", icon: Calculator, tier: 5 },
        { name: "A/B Testing", icon: Zap, tier: 4 },
        { name: "ETL", icon: Database, tier: 4 },
      ],
    },
    {
      title: "Tools & Workflow",
      skills: [
        { name: "Git", icon: GitBranch, tier: 4 },
        { name: "Docker", icon: Code, tier: 3 },
        { name: "AWS", icon: Database, tier: 3 },
        { name: "Jupyter", icon: FileText, tier: 5 },
      ],
    },
  ];

  // ✅ Proper tier indicator (just dots or bars etc.)
  const renderTierIndicator = (tier: number) => (
    <div className="flex gap-1 ml-auto">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`w-2 h-2 rounded-full ${
            i < tier ? "bg-primary" : "bg-muted"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-card-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for turning data into actionable insights
            and building AI-powered solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up">
          {skillCategories.map((category) => (
            <div key={category.title} className="card-warm">
              <h3 className="font-display text-lg font-semibold mb-6 text-foreground">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={`${category.title}-${skill.name}`} // ✅ unique key
                      className="flex items-center gap-3 p-3 rounded-xl bg-background/50 hover:bg-background transition-colors duration-300 group"
                    >
                      <div className="bg-gradient-primary p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <span className="font-medium text-foreground flex-1">
                        {skill.name}
                      </span>
                      {renderTierIndicator(skill.tier)}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Badges */}
        <div className="mt-16 animate-fade-in-up">
          <h3 className="font-display text-2xl font-semibold mb-8 text-center text-foreground">
            Lovable Skill Badges
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.flatMap((category) =>
              category.skills.map((skill) => (
                <span
                  key={`${category.title}-${skill.name}`} // ✅ unique key
                  className="skill-badge"
                >
                  {skill.name}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="card-glow max-w-2xl mx-auto">
            <h4 className="font-display text-lg font-semibold mb-4 text-foreground">
              Always Learning 📚
            </h4>
            <p className="text-muted-foreground">
              Currently exploring: Advanced NLP, Explainable AI, and Real-time
              Analytics. I believe in continuous learning and staying updated
              with the latest in data science and AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
