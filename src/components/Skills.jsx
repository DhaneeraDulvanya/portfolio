import { FaReact, FaNodeJs, FaPython, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaAws } from 'react-icons/fa'
import { SiMongodb, SiMysql, SiTailwindcss} from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, level: 65 },
        { name: 'JavaScript', icon: FaJs, level: 60 },
        { name: 'HTML5', icon: FaHtml5, level: 80 },
        { name: 'CSS3', icon: FaCss3Alt, level: 80 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 60 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 50 },
        { name: 'Python', icon: FaPython, level: 85 },
        { name: 'MongoDB', icon: SiMongodb, level: 55},
        { name: 'mySQL', icon: SiMysql, level: 65 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 70 },
      ],
    },
  ]

  return (
    <section id="skills" className="section-container bg-gray-50 dark:bg-gray-900">
      <h2 className="section-title dark:text-white">Skills</h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="card dark:bg-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <Icon className="text-primary-600 dark:text-primary-400" size={20} />
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-primary-600 dark:bg-primary-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills


