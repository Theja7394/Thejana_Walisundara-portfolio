"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const experiences = [
  {
    title: "INSURGEX 1.0 Hackathon",
    role: "Public Relations Team Leader",
    date: "2024",
    description:
      "Led the organization of a major hackathon event, managing teams and ensuring smooth execution.",
  },
  {
    title: "Road to INSURGEX Hackathon",
    role: "Public Relations Team Leader",
    date: "2023",
    description: "Coordinated pre-hackathon workshops and training sessions for participants.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Experience & Achievements
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => {
            const [ref, inView] = useInView({
              triggerOnce: false, 
              threshold: 0.2,
            })

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                className="mb-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <span className="text-gray-500 dark:text-gray-400">{exp.date}</span>
                </div>
                <p className="text-primary mb-2">{exp.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
