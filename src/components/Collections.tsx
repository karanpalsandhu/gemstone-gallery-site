import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Collections = () => {
  const collections = [
    {
      title: "Diamond Classics",
      description: "Timeless diamond pieces that capture eternal beauty and elegance.",
      price: "From $2,500",
      image: "💎"
    },
    {
      title: "Gold Heritage",
      description: "Handcrafted gold jewelry inspired by ancient artisan techniques.",
      price: "From $1,200",
      image: "👑"
    },
    {
      title: "Pearl Sophistication",
      description: "Lustrous pearls set in contemporary designs for modern elegance.",
      price: "From $800",
      image: "🤍"
    },
    {
      title: "Custom Creations",
      description: "Bespoke jewelry designed exclusively for your unique vision.",
      price: "From $3,000",
      image: "✨"
    }
  ];

  return (
    <section id="collections" className="py-20 bg-gradient-elegant">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Collections
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each collection represents our commitment to exceptional craftsmanship 
            and timeless design, created for those who appreciate the finest things in life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection, index) => (
            <Card 
              key={index} 
              className="group cursor-pointer transition-all duration-300 hover:shadow-luxury hover:scale-105 bg-card border-border"
            >
              <div className="p-8 text-center">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {collection.image}
                </div>
                
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  {collection.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {collection.description}
                </p>
                
                <div className="text-primary font-semibold text-lg mb-6">
                  {collection.price}
                </div>
                
                <Button variant="elegant" className="w-full">
                  View Collection
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;