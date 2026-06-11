import { useState } from 'react'
import { FaUniversity, FaBrain, FaPalette } from 'react-icons/fa'

const About = () => {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="about" className="snap-start section-container">
      <h2 className="section-title">About Me</h2>

      <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-center">
        <div className="space-y-8">
          <p className="max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I’m a Data Science undergraduate at <span className="font-semibold text-cyan-600 dark:text-cyan-400">Sabaragamuwa University of Sri Lanka</span> who loves turning complex data into elegant stories and intelligent interfaces. My work sits at the intersection of machine learning, modern front-end design, and meaningful product experiences.
          </p>
          <p className="max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            When I'm not building dashboards or exploring AI models, I’m crafting responsive UI systems with Tailwind, experimenting with immersive motion, and refining the details that make digital experiences feel delightful.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="glass-panel flex flex-col gap-3 p-6">
              <div className="inline-flex items-center gap-3 text-cyan-600">
                <FaUniversity size={20} />
                <span className="font-semibold text-slate-900 dark:text-white">Academic Growth</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Building strong foundations in statistics, algorithms, and real-world analytics through my university studies.
              </p>
            </div>
            <div className="glass-panel flex flex-col gap-3 p-6">
              <div className="inline-flex items-center gap-3 text-fuchsia-500">
                <FaBrain size={20} />
                <span className="font-semibold text-slate-900 dark:text-white">AI & Data</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Creating predictive models, data pipelines, and visual stories to help teams make smarter decisions.
              </p>
            </div>
            <div className="glass-panel flex flex-col gap-3 p-6">
              <div className="inline-flex items-center gap-3 text-amber-500">
                <FaPalette size={20} />
                <span className="font-semibold text-slate-900 dark:text-white">UI Craft</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Designing interface systems that feel modern, accessible, and polished across every screen.
              </p>
            </div>
            <div className="glass-panel flex flex-col gap-3 p-6">
              <div className="inline-flex items-center gap-3 text-emerald-500">
                <span className="text-xl font-bold">+4</span>
                <span className="font-semibold text-slate-900 dark:text-white">Hands-on Projects</span>
              </div>
              <p className="text-slate-600 dark:text-slate-300">
                Delivering practical applications with a focus on analytics, AI workflows, and portfolio-ready web apps.
              </p>
            </div>
          </div>
        </div>

        <div className="relative rounded-[2rem] border border-slate-200/70 bg-slate-50/90 p-2 shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/70">
          <div className="aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-slate-200 dark:bg-slate-800">
            {!imageError ? (
              <img
                src="./images/pic.png"
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
      </div>
    </section>
  )
}

export default About


