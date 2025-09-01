import { ChevronDown, Heart, Sparkles } from "lucide-react";
import heroAvatar from "../assets/hero-avatar.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
    >
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-500 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-black rounded-full animate-bounce-gentle"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-indigo-500 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-blue-400 rounded-full animate-bounce-gentle"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Avatar */}
          <div className="mb-8  flex justify-center">
            <div className="relative border ">
              {/* <img
                src={heroAvatar}
                alt="Alex Chen - Data Analyst Avatar"
                className="h-80px  shadow-glow border-4 border-primary/20 animate-bounce-gentle"
              /> */}
              <div className="absolute -top-2 -right-2 bg-accent p-2 rounded-full animate-bounce-gentle">
                <Sparkles className="w-4 h-4  border-10   text-accent-foreground" />
              </div>
            </div>
          </div>

          {/* Main content */}
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-gradient-primary">
            Nischal Basnet
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Data Analyst · AI Enthusiast
          </p>

          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-foreground/80 flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-primary animate-bounce-gentle" />
            "Turning messy data into impactful insights."
            <Heart className="w-5 h-5 text-primary animate-bounce-gentle" />
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            {/* <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero"
            >
              View My Work
            </button> */}
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-ghost"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        {/* <div className="absolute bottom-8  right-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;