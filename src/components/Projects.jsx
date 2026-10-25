import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { FaExternalLinkAlt, FaGithub, FaLightbulb, FaTimes } from 'react-icons/fa'

const projects = [
  {
    category: 'Full-stack · E-commerce',
    title: 'BookRush',
    description: 'A full-stack online bookstore built for university students and nearby communities, featuring book browsing, search and filtering, a shopping cart, checkout, and admin order management.',
    detailedDescription: [
      'BookRush is an MVP online bookstore for Sabaragamuwa University of Sri Lanka students. It brings the core shopping journey into one place: visitors can browse the book catalogue, search and filter by category, open book details, and add books to their cart.',
      'Customers can adjust quantities and place orders through checkout. An admin dashboard supports the catalogue and fulfilment side of the store, including adding, editing, and removing books, managing stock, viewing orders, and updating order statuses.',
    ],
    technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    art: 'art-bookrush',
    status: 'View Source',
    href: 'https://github.com/DhaneeraDulvanya/bookRush',
    idea: false,
  },
  {
    category: 'Machine learning · Featured project',
    title: 'Real Estate AI',
    description: 'An XGBoost regression project concept for exploring property value, with a React interface, FastAPI service and SHAP-based model explanations.',
    detailedDescription: [
      'Real Estate AI is a web application for estimating property prices from details such as bedrooms, bathrooms, property size, property type, state, and locality. Its XGBoost regression model is connected to a FastAPI backend and a React interface, where users can submit property details and receive a prediction.',
      'The project also includes visualizations for exploring price patterns and distributions across property characteristics and locations. SHAP explanations show how individual input features contribute to a model prediction, while preprocessing and prediction are kept within a consistent machine-learning workflow.',
    ],
    technologies: ['XGBoost', 'SHAP', 'React', 'FastAPI', 'Python', 'Jupyter NoteBook', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    art: 'art-real-estate',
    status: 'View source',
    href: 'https://github.com/DhaneeraDulvanya/Sri-Lankan-Land-Price-Prediction-and-Real-Estate-Market-Analysis-System',
    idea: true,
  },
  /* {
    category: 'Concept · Natural language processing',
    title: 'AI-powered CV & Job Matching',
    description: 'A project idea for comparing resume content with job descriptions and surfacing relevant skills and potential matches.',
    technologies: ['NLP', 'Text analysis', 'Machine learning'],
    art: 'art-matching',
    status: 'Idea in exploration',
    idea: true,
  }, */
  {
    category: 'Exploration · Graph theory',
    title: 'KaratGraph',
    description: 'A graph theory application concept for modelling tournament relationships and exploring scheduling and competition analysis.',
    detailedDescription: [
      'KaratGraph is a graph-based karate tournament management system. It models each match as a graph node and connects matches that share one or more competitors, making participant conflicts explicit for a tournament.',
      'Tournament administrators can generate a schedule using a greedy, largest-first graph-colouring algorithm. The resulting slot assignments are checked so that conflicting matches are not placed in the same time slot. The API also supports tournament and match management, and exposes conflict-graph statistics alongside schedule data.',
    ],
    technologies: ['React.js', 'Tailwind CSS', 'Graph theory', 'Python', 'NetworkX', 'Matplotlib', 'FastAPI', 'MongoDB'],
    art: 'art-karate',
    status: 'View Source',
    href: "https://github.com/DhaneeraDulvanya/KaratGraph",
    idea: true,
  },
  {
    category: 'Personal project · Web development',
    title: 'Personal Portfolio Website',
    description: 'A responsive portfolio built to bring together my studies, technical interests and project work in one place.',
    detailedDescription: [
      'This responsive personal portfolio brings together a profile, background, skills, experience, and selected projects in one place. Its single-page layout uses in-page navigation to guide visitors through the different sections.',
      'The site also includes contact information and a contact form, providing a direct way to get in touch. The design and content are tailored to present the portfolio owner’s studies, technical interests, and work.',
    ],
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'EmailJS'],
    art: 'art-portfolio',
    status: 'You’re viewing it',
    idea: false,
  },
  /* {
    category: 'Built project · Full-stack application',
    title: 'Police Crime Crisis Management',
    description: 'A public-facing application for managing crime complaints, built as a capstone project with React, Node.js, Express and MongoDB.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    art: 'art-civic',
    status: 'View source',
    href: 'https://github.com/DhaneeraDulvanya/CAPCC',
    image: '/portfolio/images/comp.PNG',
  },*/
]

function ProjectModal({ project, onClose, triggerRef }) {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      triggerRef.current?.focus()
    }
  }, [triggerRef])

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose()
      return
    }

    if (event.key !== 'Tab') return

    const focusableElements = dialogRef.current?.querySelectorAll(
      'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
    )
    if (!focusableElements?.length) return

    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]
    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault()
      lastElement.focus()
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault()
      firstElement.focus()
    }
  }

  return createPortal(
    <div
      className="project-modal-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        ref={dialogRef}
        onKeyDown={handleKeyDown}
      >
        <button
          className="project-modal-close"
          type="button"
          aria-label="Close project details"
          onClick={onClose}
          ref={closeButtonRef}
        >
          <FaTimes aria-hidden="true" />
        </button>
        <section className="project-modal-header">
          <p className="project-modal-category">{project.category}</p>
          <h2 id="project-modal-title">{project.title}</h2>
          {project.status && (
            <p className="project-modal-status">
              {project.idea ? <FaLightbulb aria-hidden="true" /> : <span className="status-dot" />}
              {project.status}
            </p>
          )}
        </section>
        <section className="project-modal-description" aria-labelledby="project-modal-description-title">
          <h3 id="project-modal-description-title">About this project</h3>
          {project.detailedDescription.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>
        <section className="project-modal-technologies" aria-labelledby="project-modal-technologies-title">
          <h3 id="project-modal-technologies-title">Technologies used</h3>
          <div className="project-modal-tags">
            {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </section>
      </div>
    </div>,
    document.body,
  )
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)
  const triggerRef = useRef(null)

  const openProject = (project, event) => {
    triggerRef.current = event.currentTarget
    event.currentTarget.focus()
    setActiveProject(project)
  }

  return (
    <section id="projects" className="section-container section" aria-labelledby="projects-title">
      <div className="section-heading section-heading-row reveal">
        <div><p className="eyebrow">Selected work <span>03</span></p><h2 id="projects-title">Ideas in <span>progress.</span></h2></div>
        <p className="section-intro">A mix of hands-on work and concepts I’m excited to explore. Source links appear only where a repository is available.</p>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className={`project-card reveal${project.image ? ' project-real' : ''}`} key={project.title}>
            <button
              className="project-card-trigger"
              type="button"
              aria-label={`Open ${project.title} project details`}
              aria-haspopup="dialog"
              onClick={(event) => openProject(project, event)}
            />
            <div className={`project-art ${project.art}`} aria-label={project.image ? `Screenshot of ${project.title}` : undefined}>
              {project.image ? (
                <img src={project.image} alt={`${project.title} application interface`} loading="lazy" />
              ) : (
                <div className="project-art-placeholder" aria-hidden="true">
                  {project.art === 'art-real-estate' && <><span className="art-label">PRICE INDEX / MARKET SIGNALS</span><span className="art-chart"><i /><i /><i /><i /><i /><i /><i /><i /></span></>}
                  {project.art === 'art-matching' && <><span className="art-document">CV</span><span className="art-match">84%<small>MATCH</small></span><span className="art-document">ROLE</span></>}
                  {project.art === 'art-bookrush' && (
                    <div className="art-bookrush-preview">
                      <div className="art-bookrush-header">
                        <span className="art-bookrush-logo"><i>BR</i> BOOKRUSH</span>
                        <span className="art-bookrush-cart">CART <b>3</b></span>
                      </div>
                      <div className="art-bookrush-main">
                        <div className="art-bookrush-copy">
                          <span className="art-bookrush-tagline">FUEL YOUR MIND</span>
                          <strong>Find your next<br />great read.</strong>
                          <span className="art-bookrush-search">⌕ &nbsp; Search books...</span>
                        </div>
                        <div className="art-bookrush-covers">
                          <span className="art-bookrush-cover art-bookrush-cover-one"><b>THE<br />ATLAS<br />OF<br />DREAMS</b></span>
                          <span className="art-bookrush-cover art-bookrush-cover-two"><b>DESIGN<br />BETTER</b></span>
                          <span className="art-bookrush-cover art-bookrush-cover-three"><b>WILD<br />PLACES</b></span>
                        </div>
                      </div>
                    </div>
                  )}
                  {project.art === 'art-karate' && <span className="art-graph">A ─── B ─── C<br /> ╲ &nbsp; ╳ &nbsp; ╱<br /> D ─── E ─── F</span>}
                  {project.art === 'art-portfolio' && <span className="art-window"><i /><i /><i /><b>Curiosity,<br />meet code.</b></span>}
                </div>
              )}
              <span className="art-corner">{project.art === 'art-bookrush' ? '01 / Book' : project.art === 'art-real-estate' ? '02 / DATA' : project.art === 'art-karate' ? '03 / GRAPH THEORY' : project.art === 'art-portfolio' ? '04 / WEB' : '05 / FULL STACK'}</span>
            </div>
            <div className="project-content">
              <p className="project-type">{project.category}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
              <div className="project-links">
                {project.href ? (
                  <a
                    className="project-source"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <FaGithub aria-hidden="true" /> View source <FaExternalLinkAlt aria-hidden="true" />
                  </a>
                ) : (
                  <span className="project-status">{project.idea ? <FaLightbulb aria-hidden="true" /> : <span className="status-dot" />}{project.status}</span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          triggerRef={triggerRef}
        />
      )}
    </section>
  )
}

export default Projects
