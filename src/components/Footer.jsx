import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="flex items-center justify-center gap-2">
          Made with <FaHeart className="text-red-500" /> © {currentYear} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer


