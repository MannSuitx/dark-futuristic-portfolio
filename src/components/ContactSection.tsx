import { motion } from "framer-motion";
import { Mail, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Let's Connect
          </h2>
          
          <p className="text-gray-400 text-lg">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
          
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              className="flex items-center gap-2 hover:bg-gray-800"
              onClick={() => window.location.href = 'mailto:contact@example.com'}
            >
              <Mail className="w-4 h-4" />
              Email Me
            </Button>
            
            <Button
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
              onClick={() => window.location.href = '#'}
            >
              <MessageSquare className="w-4 h-4" />
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;