import { useState, useEffect } from 'react'
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300 ${
        darkMode ? 'bg-slate-950/90' : 'bg-white/85'
      } ${scrolled ? 'shadow-2xl shadow-slate-950/10' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="text-xl font-bold uppercase tracking-[0.12em] text-slate-900 dark:text-white">
            Dhaneera
          </a>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  darkMode
                    ? 'text-slate-300 hover:bg-slate-900/70 hover:text-white'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`rounded-full p-2 transition ${
                darkMode ? 'text-amber-300 hover:bg-slate-900/70' : 'text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            <button
              className={`md:hidden rounded-full p-2 transition ${
                darkMode ? 'text-slate-300 hover:bg-slate-900/70' : 'text-slate-700 hover:bg-slate-100'
              }`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden border-t ${darkMode ? 'border-slate-800 bg-slate-950/95' : 'border-slate-200 bg-white/95'}`}>
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  darkMode
                    ? 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar


