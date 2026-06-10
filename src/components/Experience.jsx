import { FaGraduationCap, FaLightbulb, FaChartLine } from 'react-icons/fa'

const Experience = () => {
  const timeline = [
    {
      title: 'Data Science Undergraduate',
      subtitle: 'Sabaragamuwa University of Sri Lanka',
      period: '2024 — Present',
      icon: FaGraduationCap,
      highlights: [
        'Studying BSc(hons) in Data Science degree with a focus on machine learning, statistics, and data visualization.',
        'Building strong analytics foundations with statistics and machine learning.',
        'Developing data-driven applications and storytelling dashboards.',
      ],
    },
  ]

  return (
    <section id="experience" className="snap-start section-container">
      <h2 className="section-title">Experience</h2>
      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-cyan-500 to-transparent" />
        <div className="space-y-10">
          {timeline.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="relative pl-16">
                <div className="absolute left-0 top-2 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-600 text-white shadow-xl shadow-cyan-500/20">
                  <Icon size={20} />
                </div>
                <div className="glass-panel p-8">
                  <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                      <p className="mt-2 text-sm font-medium uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-300">
                        {item.subtitle}
                      </p>
                    </div>
                    <span className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                      {item.period}
                    </span>
                  </div>
                  <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300 list-disc list-inside">
                    {item.highlights.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Experience


