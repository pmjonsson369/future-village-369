import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import SystemSection from "@/components/SystemSection";
import ModulesSection from "@/components/ModulesSection";
import AboutSection from "@/components/AboutSection";
import CredibilitySection from "@/components/CredibilitySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VisionSection />
      <SystemSection />
      <ModulesSection />
      <AboutSection />
      <ProjectsSection />
      <CredibilitySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
