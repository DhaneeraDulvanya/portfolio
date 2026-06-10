import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="snap-start border-t border-slate-200/80 bg-transparent py-10 text-slate-600 dark:border-slate-800 dark:text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">
          Designed for modern storytelling, polished interaction, and thoughtful data-driven visual design.
        </p>
        <p className="flex items-center justify-center gap-2 text-sm">
          Made with <FaHeart className="text-rose-500" /> © {currentYear} Dhaneera. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer


