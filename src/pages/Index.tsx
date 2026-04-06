import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatWeBuildSection from "@/components/WhatWeBuildSection";
import VisionSection from "@/components/VisionSection";
import SystemSection from "@/components/SystemSection";
import StartHereSection from "@/components/StartHereSection";
import ModulesSection from "@/components/ModulesSection";
import AboutSection from "@/components/AboutSection";
import CredibilitySection from "@/components/CredibilitySection";
import BottomCTASection from "@/components/BottomCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhatWeBuildSection />
      <VisionSection />
      <SystemSection />
      <StartHereSection />
      <ModulesSection />
      <AboutSection />
      <CredibilitySection />
      <BottomCTASection />
      <Footer />
    </div>
  );
};

export default Index;
