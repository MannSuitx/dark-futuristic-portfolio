import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 relative"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10 space-y-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-center"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Let's Connect
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-lg text-center"
          >
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-4"
          >
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20"
              onClick={() => window.location.href = 'mailto:contact@example.com'}
            >
              <Mail className="w-4 h-4" />
              Email Me
            </Button>
            
            <Button
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90"
              onClick={() => window.location.href = '#'}
            >
              <MessageSquare className="w-4 h-4" />
              Send Message
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Background decorative element */}
      <div className="absolute bottom-0 right-0">
        <div className="w-96 h-96 bg-gradient-to-l from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      </div>
    </motion.section>
  );
};

export default ContactSection;