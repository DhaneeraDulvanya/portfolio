import { FaBookmark, FaDumbbell, FaGuitar, FaLightbulb, FaGraduationCap, FaHandRock } from 'react-icons/fa'

const softSkills = ['Problem-solving', 'Team collaboration', 'Communication', 'Critical thinking', 'Adaptability', 'Time management']

const Experience = () => (
  <section id="experience" className="section-container section section-muted" aria-labelledby="education-title">
    <div className="section-heading reveal">
      <p className="eyebrow">The foundations <span>04</span></p>
      <h2 id="education-title">Learning with <span>purpose.</span></h2>
    </div>
    <div className="education-layout">
      <article className="education-card reveal">
        <div className="education-marker"><FaGraduationCap aria-hidden="true" /></div>
        <div className="education-details">
          <p className="fact-label">Undergraduate degree <span className="education-date">2024 — Present</span></p>
          <h3>BSc (Hons) in Data Science</h3>
          <p className="education-school">Sabaragamuwa University of Sri Lanka</p>
          <p>Developing a grounding in data science, with interests spanning machine learning, data analytics and intelligent software.</p>
          <div className="tag-list"><span>Machine learning</span><span>Data analytics</span><span>Artificial intelligence</span></div>
        </div>
      </article>
      <aside className="achievement-card reveal">
        <p className="fact-label">Beyond the classroom</p>
        <h3>Achievements &amp; certifications</h3>
        <p>This section is ready for verified certifications, competition results and sporting milestones.</p>
        <div className="achievement-placeholder"><FaBookmark aria-hidden="true" /><span>Add an achievement when it’s ready to share.</span></div>
      </aside>
    </div>
    <div className="soft-skills reveal">
      <p className="eyebrow">How I work</p>
      <div className="soft-skill-list">{softSkills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      <p className="eyebrow interest-label">Outside the dataset</p>
      <div className="interest-list">
        <span><FaHandRock aria-hidden="true" /> Karate</span>
        <span><FaGuitar aria-hidden="true" /> Guitar</span>
        <span><FaDumbbell aria-hidden="true" /> Fitness</span>
        <span><FaLightbulb aria-hidden="true" /> Technology</span>
      </div>
    </div>
  </section>
)

export default Experience
