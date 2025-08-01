import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Visit Our Atelier
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience our collections in person and discover the perfect piece 
            for your most precious moments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="p-8 text-center border-border">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="font-serif text-xl font-semibold mb-4">Location</h3>
            <p className="text-muted-foreground">
              123 Fifth Avenue<br />
              New York, NY 10001<br />
              United States
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
              +1 (555) 123-4567<br />
              hello@luxejewelry.com<br />
              Book a private viewing
            </p>
          </Card>
        </div>
        
        <div className="text-center mt-16">
          <Button variant="luxury" size="lg" className="text-lg px-12 py-4">
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;