import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaHackerrank, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const formRef = useRef<HTMLFormElement>(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState({
    type: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending message...' })

    try {
      const serviceId = 'service_tqnqkss'
      const templateId = 'template_d2tbu7v'
      const publicKey = '80O2S-5RPr9gDwhxs'

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_name: 'Thejana Walisundara',
        to_email: 'thejanawalisundara86@gmail.com',
        message: formData.message,
      }

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      if (result.text === 'OK') {
        setStatus({ type: 'success', message: 'Message sent successfully!' })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
      }
    } catch (error) {
      console.error('Email error:', error)
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm always open to new opportunities and collaborations.
                Feel free to reach out!
              </p>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <span className="font-medium">Email:</span>
                  <a href="mailto:thejanawalisundara86@gmail.com" className="text-primary">
                    thejanawalisundara86@gmail.com
                  </a>
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Theja7394"
                    className="text-gray-600 hover:text-primary dark:text-gray-300 transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/thejana-walisundara-65343425a/"
                    className="text-gray-600 hover:text-primary dark:text-gray-300 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="https://www.hackerrank.com/profile/Thejana86"
                    className="text-gray-600 hover:text-primary dark:text-gray-300 transition-colors"
                    aria-label="Hackerrank"
                  >
                    <FaHackerrank size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
                  ></textarea>
                </div>
                {status.message && (
                  <div className={`text-sm ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                    {status.message}
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
                >
                  {status.type === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}