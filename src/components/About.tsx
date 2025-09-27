import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Users } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "5+", label: "Years of Service" },
    { icon: MapPin, value: "1", label: "Premium Location" },
    { icon: Clock, value: "24/7", label: "Customer Support" },
    { icon: Phone, value: "1000+", label: "Happy Guests" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Kankane Hotel</span>
              <span className="text-secondary block">Karera</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Located in the heart of Karera, Kankane Hotel has been serving guests with exceptional hospitality for over 5 years. We combine traditional warmth with modern convenience to create unforgettable experiences.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Premium Accommodations</h4>
                  <p className="text-muted-foreground">Comfortable rooms with modern amenities and personalized service.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Delicious Cuisine</h4>
                  <p className="text-muted-foreground">Wide variety of local and international dishes prepared by expert chefs.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-secondary rounded-full flex-shrink-0 mt-1"></div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Strategic Location</h4>
                  <p className="text-muted-foreground">Conveniently located in Karera with easy access to local attractions.</p>
                </div>
              </div>
            </div>
            
            <Button variant="cta" size="lg" className="text-lg px-8 py-4 h-auto">
              Learn More About Us
            </Button>
          </div>
          
          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-gold transition-all duration-300 hover:-translate-y-2 border-0 bg-background/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
            
            {/* Contact Info Card */}
            <Card className="col-span-2 bg-gradient-primary text-primary-foreground border-0 shadow-luxury">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 mx-auto mb-4 opacity-90" />
                <h4 className="font-bold mb-2">Visit Us</h4>
                <p className="text-primary-foreground/90 text-sm mb-4">
                  Kankane Hotel, Main Road, Karera<br />
                  Madhya Pradesh, India
                </p>
                <Button variant="outline" size="sm" className="text-primary bg-primary-foreground hover:bg-primary-foreground/90">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;