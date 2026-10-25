import { FaBrain, FaCompass, FaGraduationCap } from 'react-icons/fa'

const facts = [
  {
    icon: FaGraduationCap,
    label: 'Currently studying',
    title: 'BSc.(Hons) in Data Science',
    detail: 'Sabaragamuwa University of Sri Lanka',
  },
  {
    icon: FaBrain,
    label: 'Areas I explore',
    title: 'AI, data & software',
    detail: 'Machine learning · Analytics · Engineering',
  },
  {
    icon: FaCompass,
    label: 'Looking ahead',
    title: 'Learning by building',
    detail: 'Open to internships and meaningful collaborations',
  },
]

const About = () => (
  <section id="about" className="section-container section" aria-labelledby="about-title">
    <div className="section-heading reveal">
      <p className="eyebrow">A little about me <span>01</span></p>
      <h2 id="about-title">Curiosity, meet <span>code.</span></h2>
    </div>
    <div className="about-layout">
      <div className="about-story reveal">
        <p className="lead-copy">
          I’m a Data Science undergraduate at <strong>Sabaragamuwa University of Sri Lanka</strong>, exploring how data and technology can make complex problems easier to understand.
        </p>
        <p>
          My studies in a BSc (Hons) in Data Science bring me into the worlds of machine learning, analytics and artificial intelligence. Alongside the models, I enjoy the craft of building software: turning an idea into a useful, considered experience.
        </p>
        <p>
          Away from my screen, I practise Karate, pick up my guitar, make time for fitness and stay curious about what I can learn next.
        </p>
        <a className="inline-link" href="#contact">A little more about working together <span aria-hidden="true">→</span></a>
        <figure className="about-portrait reveal">
          <img src="/portfolio/images/normal.png" alt="Dhaneera Dulvanya" loading="lazy" />
          <figcaption>
            <span className="fact-label">My mindset</span>
            <strong>It’s me.<br />Nothing is impossible.</strong>
          </figcaption>
        </figure>
      </div>
      <div className="about-facts">
        {facts.map(({ icon: Icon, label, title, detail }, index) => (
          <article className="fact-card reveal" key={title}>
            <span className="fact-icon"><Icon aria-hidden="true" /></span>
            <div><p className="fact-label">{label}</p><h3>{title}</h3><p>{detail}</p></div>
            <span className="fact-index">0{index + 1}</span>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default About
