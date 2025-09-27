import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Percent, Clock, Gift } from "lucide-react";

const Offers = () => {
  const offers = [
    {
      title: "First Order Discount",
      description: "Get 25% off on your first food order through the app",
      discount: "25% OFF",
      code: "FIRST25",
      icon: Gift,
      gradient: "bg-gradient-primary",
    },
    {
      title: "Quick Delivery Bonus",
      description: "Free delivery for orders above ₹500 within 30 minutes",
      discount: "FREE DELIVERY",
      code: "QUICK30",
      icon: Clock,
      gradient: "bg-gradient-secondary",
    },
    {
      title: "Room + Food Combo",
      description: "Book a room and get 15% off on all food orders during your stay",
      discount: "15% OFF",
      code: "COMBO15",
      icon: Percent,
      gradient: "bg-gradient-primary",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Exclusive <span className="text-secondary">Offers</span> & Discounts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't miss out on these amazing deals! Download the app now and start saving on every order and booking.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {offers.map((offer, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-gold transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden animate-scale-in bg-background/90 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 ${offer.gradient}`}></div>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 ${offer.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <offer.icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="secondary" className="text-secondary-foreground font-bold">
                    {offer.discount}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {offer.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {offer.description}
                </p>
                
                <div className="bg-muted/50 rounded-lg p-4 mb-6">
                  <div className="text-sm text-muted-foreground mb-1">Promo Code</div>
                  <div className="text-lg font-bold text-primary">{offer.code}</div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Use This Offer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="cta" size="lg" className="text-lg px-12 py-4 h-auto">
            Download App for More Offers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Offers;