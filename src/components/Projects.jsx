import { FaExternalLinkAlt, FaGithub, FaLightbulb } from 'react-icons/fa'

const projects = [
  {
    category: 'Machine learning · Featured project',
    title: 'Real Estate AI',
    description: 'An XGBoost regression project concept for exploring property value, with a React interface, FastAPI service and SHAP-based model explanations.',
    technologies: ['XGBoost', 'SHAP', 'React', 'FastAPI'],
    art: 'art-real-estate',
    status: 'View source',
    href: 'https://github.com/DhaneeraDulvanya/Sri-Lankan-Land-Price-Prediction-and-Real-Estate-Market-Analysis-System',
    idea: true,
  },
  {
    category: 'Concept · Natural language processing',
    title: 'AI-powered CV & Job Matching',
    description: 'A project idea for comparing resume content with job descriptions and surfacing relevant skills and potential matches.',
    technologies: ['NLP', 'Text analysis', 'Machine learning'],
    art: 'art-matching',
    status: 'Idea in exploration',
    idea: true,
  },
  {
    category: 'Exploration · Graph theory',
    title: 'KaratGraph',
    description: 'A graph theory application concept for modelling tournament relationships and exploring scheduling and competition analysis.',
    technologies: ['Graph theory', 'Algorithms', 'Data analysis'],
    art: 'art-karate',
    status: 'View Source',
    href: "https://github.com/DhaneeraDulvanya/KaratGraph",
    idea: true,
  },
  {
    category: 'Personal project · Web development',
    title: 'Personal Portfolio Website',
    description: 'A responsive portfolio built to bring together my studies, technical interests and project work in one place.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    art: 'art-portfolio',
    status: 'You’re viewing it',
    idea: false,
  },
  {
    category: 'Built project · Full-stack application',
    title: 'Police Crime Crisis Management',
    description: 'A public-facing application for managing crime complaints, built as a capstone project with React, Node.js, Express and MongoDB.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    art: 'art-civic',
    status: 'View source',
    href: 'https://github.com/DhaneeraDulvanya/CAPCC',
    image: '/portfolio/images/comp.PNG',
  },
]

const Projects = () => (
  <section id="projects" className="section-container section" aria-labelledby="projects-title">
    <div className="section-heading section-heading-row reveal">
      <div><p className="eyebrow">Selected work <span>03</span></p><h2 id="projects-title">Ideas in <span>progress.</span></h2></div>
      <p className="section-intro">A mix of hands-on work and concepts I’m excited to explore. Source links appear only where a repository is available.</p>
    </div>
    <div className="projects-grid">
      {projects.map((project) => (
        <article className={`project-card reveal${project.image ? ' project-real' : ''}`} key={project.title}>
          <div className={`project-art ${project.art}`} aria-label={project.image ? `Screenshot of ${project.title}` : undefined}>
            {project.image ? (
              <img src={project.image} alt={`${project.title} application interface`} loading="lazy" />
            ) : (
              <div className="project-art-placeholder" aria-hidden="true">
                {project.art === 'art-real-estate' && <><span className="art-label">PRICE INDEX / MARKET SIGNALS</span><span className="art-chart"><i /><i /><i /><i /><i /><i /><i /><i /></span></>}
                {project.art === 'art-matching' && <><span className="art-document">CV</span><span className="art-match">84%<small>MATCH</small></span><span className="art-document">ROLE</span></>}
                {project.art === 'art-karate' && <span className="art-graph">A ─── B ─── C<br /> ╲ &nbsp; ╳ &nbsp; ╱<br /> D ─── E ─── F</span>}
                {project.art === 'art-portfolio' && <span className="art-window"><i /><i /><i /><b>Curiosity,<br />meet code.</b></span>}
              </div>
            )}
            <span className="art-corner">{project.art === 'art-real-estate' ? '01 / DATA' : project.art === 'art-matching' ? '02 / NLP' : project.art === 'art-karate' ? '03 / GRAPH THEORY' : project.art === 'art-portfolio' ? '04 / WEB' : '05 / FULL STACK'}</span>
          </div>
          <div className="project-content">
            <p className="project-type">{project.category}</p>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            <div className="project-links">
              {project.href ? (
                <a className="project-source" href={project.href} target="_blank" rel="noreferrer"><FaGithub aria-hidden="true" /> View source <FaExternalLinkAlt aria-hidden="true" /></a>
              ) : (
                <span className="project-status">{project.idea ? <FaLightbulb aria-hidden="true" /> : <span className="status-dot" />}{project.status}</span>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
)

export default Projects
