import { Clock, Hotel, Gift, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Instant Food Delivery",
      description: "Order delicious food from our restaurant and get it delivered within 30 minutes to your room or anywhere in Karera.",
      highlight: "30 Minutes",
    },
    {
      icon: Hotel,
      title: "Easy Hotel Room Booking",
      description: "Book comfortable rooms instantly with our seamless booking system. Check availability and reserve in just a few taps.",
      highlight: "Instant Booking",
    },
    {
      icon: Gift,
      title: "Exclusive Offers & Discounts",
      description: "Enjoy special deals, seasonal offers, and loyalty rewards. Save more with every order and booking through our app.",
      highlight: "Save More",
    },
    {
      icon: Smartphone,
      title: "User-Friendly Mobile Experience",
      description: "Our app is designed for simplicity and speed. Intuitive interface that makes ordering food and booking rooms effortless.",
      highlight: "Easy to Use",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">Kankane App</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the perfect blend of hospitality and technology with features designed to make your stay and dining experience exceptional.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 border-0 bg-background/80 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <div className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {feature.highlight}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;