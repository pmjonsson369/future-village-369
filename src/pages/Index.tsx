import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SystemSection from "@/components/SystemSection";
import ProjectsSection from "@/components/ProjectsSection";
import VisionSection from "@/components/VisionSection";
import DocsSection from "@/components/DocsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SystemSection />
      <ProjectsSection />
      <VisionSection />
      <DocsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
