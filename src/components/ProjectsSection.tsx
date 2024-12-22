import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with React and Node.js",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/placeholder.svg"
  },
  {
    title: "Project Two",
    description: "E-commerce platform with real-time updates",
    tags: ["Next.js", "TypeScript", "Stripe"],
    image: "/placeholder.svg"
  },
  {
    title: "Project Three",
    description: "Mobile-first social media dashboard",
    tags: ["React Native", "Firebase", "Redux"],
    image: "/placeholder.svg"
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Featured Projects
          </span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative backdrop-blur-xl bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C] to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-gray-100">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-white/5 rounded-full text-gray-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover effect glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 filter blur-xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute bottom-0 left-0">
        <div className="w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      </div>
    </section>
  );
};

export default ProjectsSection;