import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Collections = () => {
  const collections = [
    {
      title: "Diamond Look",
      description: "Stunning diamond-style pieces that give you the sparkle you love.",
      price: "From ₹499",
      image: "💎"
    },
    {
      title: "Gold Plated",
      description: "Beautiful gold-plated jewelry that looks premium and feels special.",
      price: "From ₹399",
      image: "👑"
    },
    {
      title: "Pearl Style",
      description: "Elegant pearl-inspired designs perfect for any occasion.",
      price: "From ₹349",
      image: "🤍"
    },
    {
      title: "Trendy Sets",
      description: "Fashion-forward jewelry sets that complete your look.",
      price: "From ₹599",
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
            Each collection offers beautiful designs at affordable prices, 
            making style accessible for everyone who loves great jewelry.
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