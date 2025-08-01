import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Visit Our Store
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Browse our beautiful collections in person and find the perfect piece 
            that matches your style and budget.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-8 text-center border-border">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="font-serif text-xl font-semibold mb-4">Location</h3>
            <p className="text-muted-foreground">
              Shop No. 123<br />
              Commercial Street<br />
              Mumbai, India
            </p>
          </Card>
          
          <Card className="p-8 text-center border-border">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="font-serif text-xl font-semibold mb-4">Hours</h3>
            <p className="text-muted-foreground">
              Monday - Saturday<br />
              10:00 AM - 7:00 PM<br />
              Sunday: By Appointment
            </p>
          </Card>
          
          <Card className="p-8 text-center border-border">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="font-serif text-xl font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">
              +91 98765 43210<br />
              hello@thinktrink.com<br />
              Visit us anytime
            </p>
          </Card>
        </div>
        
        <div className="text-center mt-16">
          <Button variant="luxury" size="lg" className="text-lg px-12 py-4">
            Visit Our Store
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;