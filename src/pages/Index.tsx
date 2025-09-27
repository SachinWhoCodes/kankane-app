import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Offers from "@/components/Offers";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Offers />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
