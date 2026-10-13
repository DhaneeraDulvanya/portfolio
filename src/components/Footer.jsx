import { useEffect, useState } from 'react'
import { FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <footer className="site-footer">
        <div className="footer-inner">
          <a className="brand footer-brand" href="#home" aria-label="Dhaneera Dulvanya, back to top">
            <span className="brand-mark">D<span>.</span></span>
            <span className="brand-name">Dhaneera<span> Dulvanya</span></span>
          </a>
          <p>Thoughtfully built, one idea at a time. <span>© {new Date().getFullYear()} Dhaneera Dulvanya</span></p>
          <div className="footer-links">
            <a href="https://github.com/DhaneeraDulvanya" target="_blank" rel="noreferrer" aria-label="GitHub profile"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/dhaneera-dulvanya/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><FaLinkedin /></a>
            <a className="back-top" href="#home">Back to top <FaArrowUp aria-hidden="true" /></a>
          </div>
        </div>
      </footer>
      <a className={`back-to-top${showBackToTop ? ' is-visible' : ''}`} href="#home" aria-label="Back to top"><FaArrowUp aria-hidden="true" /></a>
    </>
  )
}

export default Footer
