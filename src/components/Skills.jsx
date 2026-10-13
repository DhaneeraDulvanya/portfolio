import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaGitAlt,
  FaJava,
  FaJs,
  FaPython,
  FaReact,
  FaChartBar,
  FaChartArea,
  FaTools,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
} from 'react-icons/fa'
import { SiExpress, SiMongodb, SiMysql, SiNumpy, SiPandas, SiScikitlearn, SiJupyter, SiPowerbi } from 'react-icons/si'

const categories = [
  { title: 'Programming', icon: FaCode, skills: [['Python', FaPython]] },
  { title: 'Web development', icon: FaReact, skills: [['HTML', FaHtml5], ['CSS', FaCss3Alt], ['React.js', FaReact], ['Node.js', FaNodeJs], ['Express.js', SiExpress]] },
  { title: 'Databases', icon: FaDatabase, skills: [['MySQL', SiMysql], ['MongoDB', SiMongodb]] },
  { title: 'Data science', icon: FaChartBar, skills: [['Pandas', SiPandas], ['NumPy', SiNumpy], ['Scikit-learn', SiScikitlearn], ['Matplotlib', FaChartBar], ['Seaborn', FaChartArea]] },
  { title: 'Machine learning', icon: FaBrain, skills: [['Regression', null], ['Classification', null], ['Model evaluation', null], ['Feature engineering', null], ['NLP', null], ['Time-Series Analysis', null]] },
  { title: 'Tools & workflow', icon: FaTools, skills: [['Git', FaGitAlt], ['GitHub', FaGithub], ['Jupyter Notebook', SiJupyter], ['VS Code', FaCode], ['Power BI Desktop', SiPowerbi]] },
]

const Skills = () => (
  <section id="skills" className="section-container section section-muted" aria-labelledby="skills-title">
    <div className="section-heading reveal">
      <p className="eyebrow">Tools of the trade <span>02</span></p>
      <h2 id="skills-title">A growing <span>toolkit.</span></h2>
      <p className="section-intro">Technologies I use to explore ideas, work with data and build useful things.</p>
    </div>
    <div className="skills-grid">
      {categories.map(({ title, icon: CategoryIcon, skills }) => (
        <article className="skill-card reveal" key={title}>
          <div className="skill-card-heading"><span className="skill-icon"><CategoryIcon aria-hidden="true" /></span><h3>{title}</h3></div>
          <div className="skill-list">
            {skills.map(([name, Icon]) => (
              <span key={name}>{Icon && <Icon aria-hidden="true" />}{name}</span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
)

export default Skills
