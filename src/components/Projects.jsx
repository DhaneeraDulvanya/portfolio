import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce platform with user authentication, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://via.placeholder.com/600x400?text=E-Commerce+Platform',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      image: 'https://via.placeholder.com/600x400?text=Task+Management',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Weather Dashboard',
      description:
        'A beautiful weather dashboard that displays current weather and forecasts for multiple locations.',
      technologies: ['React', 'OpenWeather API', 'Chart.js'],
      image: 'https://via.placeholder.com/600x400?text=Weather+Dashboard',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Social Media Analytics',
      description:
        'Analytics dashboard for social media metrics with data visualization and reporting features.',
      technologies: ['Next.js', 'Python', 'PostgreSQL', 'D3.js'],
      image: 'https://via.placeholder.com/600x400?text=Analytics+Dashboard',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ]

  return (
    <section id="projects" className="section-container bg-gray-50 dark:bg-gray-900">
      <h2 className="section-title dark:text-white">Projects</h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card dark:bg-gray-800 overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary-600 dark:bg-primary-700 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:scale-125 transition-transform"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl hover:scale-125 transition-transform"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects


