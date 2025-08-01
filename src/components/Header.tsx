import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="font-serif text-2xl font-bold text-primary">
            LUXE
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#collections" className="text-foreground hover:text-primary transition-colors font-medium">
              Collections
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>
          
          {/* CTA Button */}
          <Button variant="elegant" size="sm">
            Book Appointment
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;