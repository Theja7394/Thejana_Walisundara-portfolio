import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-48 h-48 mt-5 mb-6 rounded-full border-4 border-primary shadow-lg ring-4 ring-blue-500/50"
          >
            <img src="/projects/thejana.jpg" 
            alt="Thejana" 
            className="w-full h-full object-cover rounded-full" />

          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">
              <Typewriter
                words={['Thejana Walisundara']} 
                loop={Infinity} 
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={75}
                delaySpeed={1000} 
              />
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
            Project Manager | Frontend Developer | Backend Developer
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Creating outstanding web experiences and leading teams to success with modern frontend, backend development, and agile project management.
          </p>

          <div className="flex gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/projects/cv/Thejana_Walisundara_CV.pdf" 
                download
                className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors"
              >
                Download CV
              </a>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="#contact"
                className="bg-white text-primary px-8 py-3 rounded-full font-medium border-2 border-primary hover:bg-gray-50 transition-colors dark:bg-transparent dark:hover:bg-gray-800"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
