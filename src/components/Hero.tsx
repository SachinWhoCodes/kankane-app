import { Button } from "@/components/ui/button";
import { Download, Play, Star } from "lucide-react";
import heroPhone from "@/assets/hero-phone.png";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="flex text-secondary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-white/90 font-medium">4.8/5 Rating</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Kankane
              <span className="text-secondary block">Hotel App</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
              Order delicious food delivered within 30 minutes and book rooms instantly at Kankane Hotel, Karera. Your comfort, our priority.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="cta" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto"
              >
                <Download className="w-5 h-5 mr-2" />
                Download for Android
              </Button>
              <Button 
                variant="gold" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto"
              >
                <Play className="w-5 h-5 mr-2" />
                Download for iOS
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">30min</div>
                <div className="text-white/80">Delivery Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                <div className="text-white/80">Room Booking</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">1000+</div>
                <div className="text-white/80">Happy Customers</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-3xl blur-2xl animate-float"></div>
              <img 
                src={heroPhone} 
                alt="Kankane Hotel App Interface" 
                className="relative w-80 lg:w-96 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;