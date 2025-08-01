const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">
              Made with 
              <span className="text-primary block">Care</span>
            </h2>
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                ThinkTrink has been making beautiful imitation jewelry accessible to everyone. 
                We believe that great style shouldn't break the bank, which is why we offer 
                stunning pieces that look amazing without the premium price tag.
              </p>
              
              <p>
                Each piece in our collection is carefully designed to give you the look and feel 
                of expensive jewelry at a fraction of the cost. From everyday wear to special occasions, 
                our jewelry lets you express your style with confidence.
              </p>
              
              <p>
                Whether you're looking for earrings, necklaces, or complete sets, our affordable 
                range of ₹300-₹1000 makes it easy to build a collection you'll love.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-luxury rounded-lg p-8 shadow-glow">
              <div className="text-center space-y-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-4xl font-bold text-secondary-foreground">5+</div>
                      <div className="text-secondary-foreground/80">Years Serving</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-secondary-foreground">5k+</div>
                      <div className="text-secondary-foreground/80">Happy Customers</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-secondary-foreground">200+</div>
                      <div className="text-secondary-foreground/80">Beautiful Designs</div>
                    </div>
                    <div>
                      <div className="text-4xl font-bold text-secondary-foreground">₹300</div>
                      <div className="text-secondary-foreground/80">Starting Price</div>
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