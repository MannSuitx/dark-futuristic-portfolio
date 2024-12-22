import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-gray-400 text-xl">Hello, I'm</h2>
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Mannat Suthar
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl">
            A passionate developer crafting digital experiences through code and creativity
          </p>
          
          <div className="flex gap-4 pt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:contact@example.com" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;