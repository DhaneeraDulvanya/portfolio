import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:your.email@example.com', label: 'Email' },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-6">
            <div className="inline-block rounded-full bg-primary-100 dark:bg-primary-900 p-4 mb-4">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 mx-auto flex items-center justify-center text-white text-5xl font-bold">
                YN
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-800 dark:text-white">
            Hi, I'm <span className="text-primary-600 dark:text-primary-400">Your Name</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-gray-600 dark:text-gray-300">
            Full Stack Developer
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            I create beautiful, functional, and user-centered digital experiences.
            Welcome to my portfolio!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="#contact"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl border-2 border-primary-600 dark:border-primary-400 flex items-center gap-2"
            >
              <FaDownload /> Download Resume
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


