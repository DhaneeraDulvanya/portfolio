import { FaCertificate, FaDumbbell, FaGuitar, FaLightbulb, FaGraduationCap, FaHandRock } from 'react-icons/fa'

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
        <p className="fact-label">Professional development</p>
        <h3>Professional certificates</h3>
        <ul className="certificate-list">
          <li><FaCertificate aria-hidden="true" /><span>Google AI Essentials <small>Google</small></span></li>
          <li><FaCertificate aria-hidden="true" /><span>Python for Beginners <small>University of Moratuwa</small></span></li>
          <li><FaCertificate aria-hidden="true" /><span>Introduction to Data Analytics <small>Simplilearn</small></span></li>
          <li><FaCertificate aria-hidden="true" /><span>Introduction to Cyber Security <small>Simplilearn</small></span></li>
        </ul>
      </aside>
      <aside className="achievement-card achievements-card reveal">
        <p className="fact-label">Milestones</p>
        <h3>Achievements</h3>
        <p className="achievements-empty">Achieved 1st Dan Black Belt in Karate – Japan Karate Association – 2019</p>
        <p className="achievements-empty">Visharad Part I (Guitar) – Passed – Bhatkhande Sangith Vidyapith, Lucknow – 2021</p>
        <p className="achievements-empty">Visharad Part II (Guitar) – Passed with 1st Division – Bhatkhande Sangith Vidyapith, Lucknow – 2022</p>
        <p className="achievements-empty">Western Province School Games – Colours Award – Aerobic Gymnastics (Team) – 2022</p>
        <p className="achievements-empty">All Island School Games – Aerobic Gymnastics (Team) – 2nd Place – 2022</p>
        <p className="achievements-empty">School Vice Games Captain – Cenral College Piliyandala – 2023</p>
        <p className="achievements-empty">Best Performance of Diploma in Information Technology Programme – Esoft Metro College, Piliyandala – 2024</p>
        <p className="achievements-empty">15th Sri Lanka University Games – Karate - Team Kata Men - 3rd Place – 2025</p>
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
