import { useState } from "react";
import { Mail, Linkedin, Github, Send, CheckCircle, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Message sent successfully! 🎉",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/nischal-basnet-37ba23261/",
      color: "hover:text-[#0077B5]",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Nischal-2056",
      color: "hover:text-foreground",
    },
    {
      name: "Email",
      icon: Mail,
      url: "nischal.bh23@gmail.com",
      color: "hover:text-primary",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to turn your data challenges into lovable insights? 
            I'd love to hear about your project and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <div className="card-glow">
              <h3 className="font-display text-2xl font-semibold mb-6 text-foreground">
                Send me a message
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="mb-6 flex justify-center">
                    <div className="bg-gradient-primary p-6 rounded-full animate-bounce-gentle">
                      <CheckCircle className="w-12 h-12 text-primary-foreground" />
                    </div>
                  </div>
                  <h4 className="font-display text-xl font-semibold text-foreground mb-4">
                    Message Sent! 🎉
                  </h4>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-xl bg-background text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, data challenges, or how I can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-hero flex items-center justify-center gap-3 ${
                      isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Heart className="w-4 h-4 text-primary" />
                    <span>Your info is never shared. Privacy-first, always.</span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-6 text-foreground">
                Other ways to reach me
              </h3>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.url}
                      target={link.url.startsWith('#') ? '_self' : '_blank'}
                      rel={link.url.startsWith('#') ? '' : 'noopener noreferrer'}
                      className={`flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group ${link.color}`}
                    >
                      <div className="bg-gradient-primary p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground group-hover:text-current">
                          {link.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {link.name === "Email" ? "nischal.bh23@gmail.com" : 
                           link.name === "LinkedIn" ? "Connect professionally" : 
                           "Check out my code"}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Info */}
            {/* <div className="card-warm">
              <h4 className="font-display text-lg font-semibold mb-4 text-foreground">
                Quick Info ⚡
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Response time:</span>
                  <span className="font-medium text-primary">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Timezone:</span>
                  <span className="font-medium text-foreground"> (UTC-6)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Availability:</span>
                  <span className="font-medium text-secondary">Open to new projects</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Preferred contact:</span>
                  <span className="font-medium text-foreground">Email or LinkedIn</span>
                </div>
              </div>
            </div> */}

            {/* CTA */}
            <div className="card-glow text-center">
              <h4 className="font-display text-lg font-semibold mb-3 text-foreground">
                Ready to collaborate? 🤝
              </h4>
              <p className="text-muted-foreground text-sm mb-4">
                Whether it's a quick consultation or a long-term partnership, 
                I'm excited to help turn your data into actionable insights.
              </p>
              {/* <div className="text-xs text-muted-foreground">
                💡 Free 30-minute consultation available for new projects
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;