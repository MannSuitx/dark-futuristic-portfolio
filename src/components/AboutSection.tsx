import { motion } from "framer-motion";

const skills = [
  "React", "TypeScript", "Node.js", "Next.js",
  "Tailwind CSS", "GraphQL", "MongoDB", "AWS"
];

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 relative"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-8 backdrop-blur-xl bg-white/5 p-8 rounded-2xl border border-white/10"
        >
          <motion.h2 
            className="text-4xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              About Me
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            I'm a full-stack developer with a passion for building beautiful, functional, 
            and user-friendly applications. With a strong foundation in modern web technologies,
            I create solutions that make a difference.
          </motion.p>

          <div className="space-y-4">
            <motion.h3 
              className="text-2xl font-semibold text-gray-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Skills
            </motion.h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-colors duration-300 border border-white/10"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <div className="w-96 h-96 bg-gradient-to-l from-blue-500/20 to-purple-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      </div>
    </motion.section>
  );
};

export default AboutSection;