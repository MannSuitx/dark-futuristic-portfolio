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
          className="max-w-4xl mx-auto space-y-8"
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            About Me
          </h2>
          
          <p className="text-gray-400 text-lg">
            I'm a full-stack developer with a passion for building beautiful, functional, 
            and user-friendly applications. With a strong foundation in modern web technologies,
            I create solutions that make a difference.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-200">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;