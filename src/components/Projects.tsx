"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const BASE_PATH = "/Thejana_Walisundara-portfolio"

const projects = [
  {
    title: "Ruhuna Internship Portal",
    description: "Developing a web application for third-year undergraduates to manage internship selections...",
    image: `${BASE_PATH}/projects/ruhunaportal.png`,
    tech: ["Next.js", "React", "Node.js", "Spring Boot", "MySQL", "Figma"],
    role: "Project Manager, Programmer & Database Designer",
    link: "#",
    github: "https://github.com/Theja7394/ruh-internship-portal-backend",
  },
  {
    title: "ECO360X",
    description: "Designed and developed a system for biology students to follow courses and earn certificates...",
    image: `${BASE_PATH}/projects/eco360x.png`,
    tech: ["MySQL", "Java", "JavaFX", "Figma"],
    role: "Project Manager",
    link: "#",
    github: "https://github.com/Theja7394/ECO360X",
  },
  {
    title: "Hakmana EDM Project",
    description: "A standalone desktop application for managing inventories and employee details...",
    image: `${BASE_PATH}/projects/hakmana.jpeg`,
    tech: ["MySQL", "Java", "JavaFX", "Figma"],
    role: "Project Manager & Database Operator",
    link: "#",
    github: "https://github.com/Theja7394/Hackmana_Project",
  },
]

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      {/* Image Section */}
      <div className="relative w-full h-100"> 
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-t-lg" 
        />
      </div>

      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Role: {project.role}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span key={index} className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
