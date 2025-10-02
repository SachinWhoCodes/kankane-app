import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Download,
  Play
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-primary-light/20">
        <div className="container mx-auto px-6 py-16">
          <Card className="bg-gradient-secondary border-0 shadow-gold">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-secondary-foreground mb-4">
                Ready to Experience Kankane?
              </h3>
              <p className="text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
                Download our app now and enjoy fast food delivery and instant room booking at your fingertips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://github.com/SachinWhoCodes/kankane-app-download/releases/download/v1.0/application-808b4028-c60e-4232-89b2-964055f80cea.apk" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto bg-primary hover:bg-primary-dark"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download for Android
                </Button>
                </a>
                <a href="https://github.com/SachinWhoCodes/kankane-app-download/releases/download/v1.0/application-808b4028-c60e-4232-89b2-964055f80cea.apk" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-4 h-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Download for iOS
                </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h4 className="text-3xl font-bold text-secondary mb-4">Kankane Hotel App</h4>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Your gateway to exceptional hospitality in Karera. Experience the perfect blend of comfort, convenience, and culinary excellence.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary hover:bg-primary-light/20">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary hover:bg-primary-light/20">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary hover:bg-primary-light/20">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h5 className="text-xl font-bold text-secondary mb-6">Contact Us</h5>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/90">Kankane Hotel</p>
                  <p className="text-primary-foreground/80 text-sm">Main Road, Karera</p>
                  <p className="text-primary-foreground/80 text-sm">Madhya Pradesh, India</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary" />
                <div>
                  <p className="text-primary-foreground/90">+91 98765 43210</p>
                  <p className="text-primary-foreground/80 text-sm">24/7 Support</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary" />
                <div>
                  <p className="text-primary-foreground/90">info@kankanehotel.com</p>
                  <p className="text-primary-foreground/80 text-sm">General Inquiries</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h5 className="text-xl font-bold text-secondary mb-6">Quick Links</h5>
            <div className="space-y-3">
              {[
                "Food Delivery",
                "Room Booking", 
                "Special Offers",
                "About Us",
                "Privacy Policy",
                "Terms of Service",
                "Support"
              ].map((link, index) => (
                <Button 
                  key={index}
                  variant="ghost" 
                  className="p-0 h-auto text-left justify-start text-primary-foreground/80 hover:text-secondary hover:bg-transparent"
                >
                  {link}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-primary-light/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © 2024 Kankane Hotel App. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Made with ❤️ in Karera
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;