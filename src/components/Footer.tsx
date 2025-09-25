import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-accent fill-current animate-pulse" />
            <span>by Michael Githinji</span>
          </div>
          <div className="text-sm opacity-80">
            © {currentYear} Michael Githinji. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;