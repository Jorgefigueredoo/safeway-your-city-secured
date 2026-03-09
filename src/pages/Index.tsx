import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import VisionSection from "@/components/VisionSection";
import FeaturesSection from "@/components/FeaturesSection";
import DevelopmentSection from "@/components/DevelopmentSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div id="problema">
        <ProblemSection />
      </div>
      <div id="visao">
        <VisionSection />
      </div>
      <div id="como-funciona">
        <FeaturesSection />
      </div>
      <div id="desenvolvimento">
        <DevelopmentSection />
      </div>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
