import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.1, 
  });

  return (
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="p-6 rounded-lg shadow-md"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              About Me
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300">
              <p>
                I am an aspiring project manager and a Computer Science undergraduate at the University of Ruhuna with a keen passion in team leading, workflow efficiency, and project success. Having knowledge in software development project management, I excel in task coordination, on-time execution, and stakeholder collaboration.
              </p>
              <p>
                My skill set includes project planning, risk management, and communication skills that I have gained while managing projects such as the Ruhuna Internship Portal and the Hakmana EDM Project. In addition, my experience in hackathons such as INSURGEX 1.0 has cemented my ability to work in dynamic environments and deliver outcomes.
              </p>
              <p>
                I look forward to developing as a project manager, always enhancing my skills in Agile methodologies, stakeholder management, and technology-based project execution. My aim is to close the gap between technical teams and business goals, ensuring efficiency, innovation, and effective solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
