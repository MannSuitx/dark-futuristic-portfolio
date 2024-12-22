import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { motion, useScroll, useSpring } from "framer-motion";

const Index = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#1A1F2C";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  // Add scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#1A1F2C]">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Animated background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid background */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.02]" 
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <motion.main 
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
          <div className="snap-start h-screen">
            <HeroSection />
          </div>
          <div className="snap-start h-screen">
            <AboutSection />
          </div>
          <div className="snap-start min-h-screen">
            <ProjectsSection />
          </div>
          <div className="snap-start h-screen">
            <ContactSection />
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default Index;