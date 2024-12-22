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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-gray-100">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;