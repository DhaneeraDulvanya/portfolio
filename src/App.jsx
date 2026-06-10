import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-colors duration-500 ${
        darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-16 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl animate-float" />
        <div className="absolute right-0 top-1/4 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl animate-floatSlow" />
        <div className="absolute left-1/2 bottom-0 h-96 w-96 -translate-x-1/2 rounded-full bg-slate-900/10 dark:bg-sky-500/15 blur-3xl" />
      </div>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="relative z-10 snap-y snap-mandatory scroll-smooth">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App


