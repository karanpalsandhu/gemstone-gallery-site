const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">
              Crafted with 
              <span className="text-primary block">Passion</span>
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                For over three decades, LUXE has been synonymous with exceptional jewelry craftsmanship. 
                Our master artisans combine traditional techniques with contemporary design to create 
                pieces that transcend time and trends.
              </p>
              
              <p>
                Each piece in our collection is meticulously handcrafted using only the finest materials—
                ethically sourced diamonds, precious metals, and rare gemstones. We believe that true 
                luxury lies not just in the materials, but in the story and craftsmanship behind each piece.
              </p>
              
              <p>
                From engagement rings that symbolize eternal love to statement pieces that define personal 
                style, our jewelry is designed to be treasured for generations.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-luxury rounded-lg p-8 shadow-glow">
              <div className="text-center space-y-8">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-secondary-foreground">30+</div>
                    <div className="text-secondary-foreground/80">Years of Excellence</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-secondary-foreground">10k+</div>
                    <div className="text-secondary-foreground/80">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-secondary-foreground">500+</div>
                    <div className="text-secondary-foreground/80">Unique Designs</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-secondary-foreground">100%</div>
                    <div className="text-secondary-foreground/80">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;