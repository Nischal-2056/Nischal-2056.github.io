import { Calendar, MapPin, Award, Users, Target, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { number: "5", label: "Years Experience", icon: Calendar },
    { number: "5", label: "Projects Shipped", icon: Target },
    { number: "8", label: "Industries", icon: Users },
    { number: "15+", label: "Awards", icon: Award },
  ];

  const timeline = [
    {
      year: "2022",
      title: "Senior Data Analyst",
      company: "TechFlow Inc.",
      description: "Leading AI-driven analytics initiatives"
    },
    {
      year: "2022",
      title: "Data Scientist",
      company: "DataVision Labs",
      description: "Developed ML models for customer insights"
    },
    {
      year: "2020",
      title: "MS in Data Science",
      company: "Stanford University",
      description: "Specialized in Machine Learning & AI Ethics"
    },
    {
      year: "2019",
      title: "Data Analyst",
      company: "StartupX",
      description: "Built analytics infrastructure from scratch"
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Empathetic Design",
      description: "Creating human-centered data solutions that truly serve people"
    },
    {
      icon: Shield,
      title: "Privacy-First",
      description: "Ensuring ethical data practices and user privacy protection"
    },
    {
      icon: Target,
      title: "Explainable AI",
      description: "Making complex algorithms transparent and understandable"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm passionate about transforming complex data into actionable insights that drive meaningful change. 
            With a background in both technical analysis and storytelling, I bridge the gap between data and decisions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-fade-in-up">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="card-warm text-center hover:scale-105 transition-transform duration-300">
                <div className="mb-4 flex justify-center">
                  <div className="bg-gradient-primary p-3 rounded-xl">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="font-display text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Bio */}
          <div className="animate-slide-in-left">
            <h3 className="font-display text-2xl font-bold mb-6 text-foreground">
              My Journey in Data & AI
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Started as a curious analyst who believed data could tell better stories. Over the years, 
              I've specialized in making AI accessible and ethical, working across healthcare, fintech, 
              and e-commerce industries.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              My approach combines rigorous statistical analysis with human-centered design thinking. 
              I believe the best insights come from understanding both the data and the people it represents.
            </p>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="w-5 h-5 mr-2 text-primary" />
              San Francisco, CA · Remote-friendly
            </div>
          </div>

          {/* Timeline */}
          <div className="animate-fade-in-up">
            <h3 className="font-display text-2xl font-bold mb-6 text-foreground">
              Career Timeline
            </h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {item.year.slice(-2)}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-px h-16 bg-border mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="font-semibold text-foreground">{item.title}</div>
                    <div className="text-primary font-medium">{item.company}</div>
                    <div className="text-sm text-muted-foreground mt-1">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="animate-fade-in-up">
          <h3 className="font-display text-2xl font-bold mb-8 text-center text-foreground">
            Core Values
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="card-glow text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="bg-gradient-secondary p-4 rounded-xl">
                      <IconComponent className="w-8 h-8 text-secondary-foreground" />
                    </div>
                  </div>
                  <h4 className="font-display text-lg font-semibold mb-3 text-foreground">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;