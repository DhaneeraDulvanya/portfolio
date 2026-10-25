import { FaArrowDown, FaArrowRight, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => (
  <section id="home" className="hero section-container" aria-labelledby="hero-title">
    <div className="hero-grid">
      <div className="hero-copy reveal reveal-visible">
        <p className="availability"><span className="availability-dot" />Data Science Undergraduate <span className="availability-divider">/</span> Open to Internships</p>
        <p className="hero-greeting">Hello, I’m</p>
        <h1 id="hero-title">Dhaneera<br /><span>Dulvanya.</span></h1>
        <p className="hero-role">Aspiring Data Scientist <span>&amp;</span> AI Developer</p>
        <p className="hero-description">
          I turn curious questions into thoughtful data insights and intelligent applications, bringing machine learning and software development together to solve meaningful problems.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my projects <FaArrowRight aria-hidden="true" /></a>
          <a className="button button-text" href="/portfolio/assets/DhaneeraMalawaraArachchi.pdf" download><FaDownload aria-hidden="true" /> Download CV</a>
        </div>
        <div className="hero-socials" aria-label="Social profiles">
          <span className="social-caption">Find me on</span>
          <a className="icon-link" href="https://github.com/DhaneeraDulvanya" target="_blank" rel="noreferrer" aria-label="GitHub profile"><FaGithub /></a>
          <a className="icon-link" href="https://www.linkedin.com/in/dhaneeradulvanya/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><FaLinkedin /></a>
        </div>
      </div>
      <div className="hero-visual" aria-label="Portrait of Dhaneera Dulvanya">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="portrait-frame"><img src="/portfolio/images/Dhaneera-professional.png" alt="Dhaneera Dulvanya" /></div>
        <div className="visual-coordinate coordinate-top">06° 54' N <span>80° 46' E</span></div>
        <div className="visual-coordinate coordinate-bottom"><span className="coordinate-line" />DS / AI / BUILD</div>
        <div className="visual-node node-one" />
        <div className="visual-node node-two" />
      </div>
    </div>
    <a className="scroll-cue" href="#about"><span>Scroll to explore</span><FaArrowDown aria-hidden="true" /></a>
  </section>
)

export default Hero
