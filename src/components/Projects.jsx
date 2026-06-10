import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'AI Portfolio Studio',
      description: 'A polished portfolio experience with dynamic AI insights and modern motion design.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Smart Task Planner',
      description: 'A team productivity app with real-time collaboration, analytics, and adaptive workflows.',
      technologies: ['React', 'Firebase', 'TypeScript', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Weather Insight Dashboard',
      description: 'A responsive weather visualizer using live API data, charts, and location intelligence.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Analytics Command Center',
      description: 'A data-rich dashboard for insights, metrics, and AI-powered performance reporting.',
      technologies: ['Next.js', 'Python', 'PostgreSQL', 'D3.js'],
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ]

  return (
    <section id="projects" className="snap-start section-container bg-slate-50 dark:bg-slate-950">
      <h2 className="section-title">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group relative overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-2xl shadow-slate-900/5 transition duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800/70 dark:bg-slate-950/80"
          >
            <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-200 shadow-inner shadow-slate-900/5">
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
            <div className="mt-6">
              <p className="mb-3 text-sm uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-400">
                Featured Project
              </p>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-300/70 bg-slate-100/70 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-700 transition hover:text-cyan-600 dark:text-slate-200 dark:hover:text-cyan-400"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-700 transition hover:text-cyan-600 dark:text-slate-200 dark:hover:text-cyan-400"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects


