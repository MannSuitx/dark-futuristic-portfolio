import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { motion, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion";

const Index = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#1A1F2C";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  // Add scroll progress indicator with optimized spring settings
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 50, // Reduced from 100
    damping: 20, // Reduced from 30
    restDelta: 0.001
  });

  // Optimized smooth scroll value for parallax effects
  const smoothScroll = useSpring(useMotionValue(0), {
    damping: 20,
    stiffness: 40,
    mass: 0.5 // Added mass for smoother motion
  });

  // Optimized scroll event handler with requestAnimationFrame
  useEffect(() => {
    let rafId: number;
    const updateSmoothScroll = () => {
      rafId = requestAnimationFrame(() => {
        smoothScroll.set(window.scrollY);
      });
    };
    
    window.addEventListener("scroll", updateSmoothScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateSmoothScroll);
      cancelAnimationFrame(rafId);
    };
  }, [smoothScroll]);

  // Optimized transform values with reduced range
  const y1 = useTransform(smoothScroll, [0, 1000], [0, 200]);
  const y2 = useTransform(smoothScroll, [0, 1000], [0, -200]);
  const y3 = useTransform(smoothScroll, [0, 1000], [0, 300]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#1A1F2C]">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Optimized animated background elements with reduced blur and opacity */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-lg"
          style={{ 
            y: y1,
            x: useTransform(smoothScroll, [0, 1000], [0, 100]),
            willChange: 'transform'
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-lg"
          style={{ 
            y: y2,
            x: useTransform(smoothScroll, [0, 1000], [0, -100]),
            willChange: 'transform'
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-lg"
          style={{ 
            y: y3,
            x: useTransform(smoothScroll, [0, 1000], [0, 150]),
            willChange: 'transform'
          }}
        />
      </div>

      {/* Optimized grid background with reduced opacity */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.02] pointer-events-none" 
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
        <div 
          className="snap-y snap-mandatory h-screen overflow-y-scroll"
          style={{
            scrollBehavior: 'smooth',
            scrollSnapType: 'y mandatory',
            perspective: '1000px',
            WebkitFontSmoothing: 'antialiased',
            backfaceVisibility: 'hidden'
          }}
        >
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