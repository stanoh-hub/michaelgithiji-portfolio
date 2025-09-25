import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-hero-bg">
      <div className="text-center animate-fade-in">
        <h1 className="mb-4 text-6xl font-bold text-navy">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">Oops! Page not found</p>
        <Link to="/">
          <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
