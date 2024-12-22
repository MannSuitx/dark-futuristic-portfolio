import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Glassmorphism card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 z-10"
      >
        <div className="max-w-4xl mx-auto backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-xl font-light"
            >
              Hello, I'm
            </motion.h2>
            
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-7xl font-bold"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500">
                Mannat Suthar
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-xl max-w-2xl leading-relaxed"
            >
              A passionate creator dedicated to refining content and building dynamic digital experiences through expert editing and development.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 pt-4"
            >
              <a 
                href="https://github.com/mannsuitx" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors duration-300 border border-white/10"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mannatsuthar/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors duration-300 border border-white/10"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="mailto:mannatsuthar150@gmail.com" 
                className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors duration-300 border border-white/10"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute -bottom-32 left-1/2 transform -translate-x-1/2">
        <div className="w-96 h-96 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      </div>
    </div>
  );
};

export default HeroSection;
