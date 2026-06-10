import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaRocket, FaStar } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/DhaneeraDulvanya', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/dhaneera-dulvanya/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:22cds0407@ms.sab.ac.lk', label: 'Email' },
  ]

  const highlights = [
    'Machine Learning',
    'Data Visualization',
    'Power BI visualization',
    'Modern Web Interfaces',
    'Data Analytics'
  ]

  return (
    <section id="home" className="snap-start min-h-screen relative overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),transparent_20%)]" />
      <div className="section-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200/70 bg-white/90 px-5 py-2 text-sm font-semibold text-slate-700 shadow-lg shadow-slate-900/5 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100">
              <FaStar className="text-cyan-500" />
              Building insightful data science solutions for smarter decision-making.
            </div>

            <div className={`space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-5xl font-bold tracking-tight text-slate-900 dark:text-white md:text-6xl">
                I turn data into clear analytics stories for smarter business decisions.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                I’m Dhaneera, a Data Science undergraduate who blends AI, analytics, and polished front-end design to build intuitive digital products.
              </p>

              <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200/80 bg-slate-100/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-700"
                >
                  Get in Touch
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:border-cyan-600 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100 dark:hover:text-cyan-400"
                >
                  <FaDownload className="mr-2" /> Resume
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-panel p-6 shadow-2xl shadow-slate-900/10">
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-1 shadow-xl shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-950/80">
                <div className="aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-slate-200 dark:bg-slate-800">
                  {!imageError ? (
                    <img
                      src="/images/pic.png"
                      alt="Dhaneera Dulvanya"
                      className="h-full w-full object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-5xl font-bold text-slate-500 dark:text-slate-400">
                      D
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-900/95 px-5 py-6 text-center text-white shadow-xl shadow-slate-900/10">
                  <p className="text-3xl font-bold">4+</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-400">Projects Built</p>
                </div>
                <div className="rounded-3xl bg-cyan-600/95 px-5 py-6 text-center text-white shadow-xl shadow-cyan-500/20">
                  <p className="text-3xl font-bold">Analytics</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-cyan-100">Data Science Focus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


