import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <div className="text-6xl font-display font-bold text-gradient-primary mb-4">404</div>
          <h1 className="font-display text-2xl font-bold mb-4 text-foreground">Oops! Page not found</h1>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist. Let's get you back home!
          </p>
        </div>
        
        <a 
          href="/" 
          className="btn-hero inline-flex items-center gap-3"
        >
          <Home className="w-5 h-5" />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
