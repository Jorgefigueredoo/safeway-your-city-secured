import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesSection from "@/components/FeaturesSection";
import ImpactSection from "@/components/ImpactSection";
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
      <div id="solucao">
        <SolutionSection />
      </div>
      <div id="funcionalidades">
        <FeaturesSection />
      </div>
      <div id="impacto">
        <ImpactSection />
      </div>
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
