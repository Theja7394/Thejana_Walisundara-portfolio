import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = {
  technical: [
    'MySQL',
    'Git',
    'Spring Boot',
    'Next.js',
    'React',
    'JavaScript',
    'Tailwind CSS',
    'HTML/CSS',
  ],
  projectManagement: [
    'Agile Methodologies',
    'Scrum',
    'Sprint Planning',
    'Risk Management',
  ],
  softSkills: [
    'Communication',
    'Team Collaboration',
    'Problem Solving',
    'Time Management',
    'Leadership',
    'Adaptability',
  ],
  projectManagementTools: ['Jira', 'Trello', 'Asana'],
}

// Skill Card Component
const SkillCard = ({ title, items }: { title: string; items: string[] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-wrap gap-2"
      >
        {items.map((skill, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="section-padding bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <SkillCard title="Project Management" items={skills.projectManagement} />
          <SkillCard title="Project Management Tools" items={skills.projectManagementTools} />
          <SkillCard title="Technical" items={skills.technical} />
          <SkillCard title="Soft Skills" items={skills.softSkills} />
        </motion.div>
      </div>
    </motion.section>
  )
}
