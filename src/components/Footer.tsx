const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="font-serif text-3xl font-bold text-primary mb-4">
              LUXE
            </div>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              Creating timeless jewelry pieces that celebrate life's most precious moments. 
              Where craftsmanship meets artistry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Facebook
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Pinterest
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Collections</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">Engagement Rings</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Wedding Bands</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Necklaces</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Earrings</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">Custom Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Repairs</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Appraisals</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Consultation</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 mt-12 pt-8 text-center text-secondary-foreground/60">
          <p>&copy; 2024 LUXE Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;