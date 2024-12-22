import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#1A1F2C";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <main className="bg-[#1A1F2C] text-white min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default Index;