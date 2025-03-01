export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center text-gray-600 dark:text-gray-300">
          <p>© {new Date().getFullYear()} Thejana Walisundara. All rights reserved.</p>
          <p className="mt-2">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}