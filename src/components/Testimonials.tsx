import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Karera",
      rating: 5,
      review: "Amazing app! Food delivery is super fast and the room booking is so convenient. The interface is user-friendly and the discounts are great.",
      avatar: "PS",
    },
    {
      name: "Rajesh Kumar",
      location: "Karera",
      rating: 5,
      review: "Best hotel app in the area! Within 30 minutes, my food was delivered hot and fresh. Room booking was instant and hassle-free.",
      avatar: "RK",
    },
    {
      name: "Anjali Patel",
      location: "Karera",
      rating: 5,
      review: "Kankane Hotel App has made my stay so much better. Great food options, quick delivery, and excellent customer service. Highly recommended!",
      avatar: "AP",
    },
    {
      name: "Vikram Singh",
      location: "Karera",
      rating: 5,
      review: "Loved the exclusive offers! Got 25% off on my first order and the room + food combo deal was fantastic. Will definitely use again.",
      avatar: "VS",
    },
    {
      name: "Meera Agarwal",
      location: "Karera",
      rating: 5,
      review: "Simple and elegant app design. Booking rooms and ordering food has never been easier. The 30-minute delivery promise is actually kept!",
      avatar: "MA",
    },
    {
      name: "Arun Gupta",
      location: "Karera",
      rating: 5,
      review: "Outstanding service! The app is intuitive, delivery is prompt, and the food quality is excellent. Kankane Hotel sets the standard high.",
      avatar: "AG",
    },
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Kankane Hotel App.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 border-0 bg-background/80 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.review}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;