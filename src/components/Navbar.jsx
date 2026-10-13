import { useEffect, useState } from 'react'
import { FaArrowDown, FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#experience' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  const closeMenu = () => setIsOpen(false)

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Dhaneera Dulvanya, home">
          <span className="brand-mark">D<span>.</span></span>
          <span className="brand-name">Dhaneera<span> Dulvanya</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-content${isOpen ? ' is-open' : ''}`} id="primary-navigation">
          <ul className="nav-links">
            {navLinks.map(({ name, href }) => (
              <li key={href}>
                <a
                  className={`nav-link${activeSection === href ? ' is-active' : ''}`}
                  href={href}
                  aria-current={activeSection === href ? 'location' : undefined}
                  onClick={closeMenu}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
          <a className="button button-small button-outline nav-cv" href="/portfolio/assets/Dhaneera_Resume.pdf" download>
            <FaArrowDown aria-hidden="true" /> Download CV
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
