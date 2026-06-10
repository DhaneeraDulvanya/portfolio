import { FaReact, FaNodeJs, FaPython, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaAws, FaPalette } from 'react-icons/fa'
import { SiMongodb, SiMysql, SiTailwindcss, SiNextdotjs } from 'react-icons/si'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Craft',
      skills: [
        { name: 'React', icon: FaReact, level: 85 },
        { name: 'JavaScript', icon: FaJs, level: 80 },
        { name: 'HTML5', icon: FaHtml5, level: 90 },
        { name: 'CSS3', icon: FaCss3Alt, level: 88 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 80 },
      ],
    },
    {
      title: 'Backend & Data',
      skills: [
        { name: 'Python', icon: FaPython, level: 85 },
        { name: 'Node.js', icon: FaNodeJs, level: 70 },
        { name: 'MongoDB', icon: SiMongodb, level: 70 },
        { name: 'mySQL', icon: SiMysql, level: 68 },
        { name: 'Next.js', icon: SiNextdotjs, level: 65 },
      ],
    },
    {
      title: 'Tools & Workflow',
      skills: [
        { name: 'Git', icon: FaGitAlt, level: 80 },
        { name: 'Data Visualization', icon: FaPalette, level: 75 },
        { name: 'AWS / Cloud', icon: FaAws, level: 60 },
      ],
    },
  ]

  return (
    <section id="skills" className="snap-start section-container bg-slate-950/10 dark:bg-slate-900/70">
      <h2 className="section-title">Skills</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {skillCategories.map((category) => (
          <div key={category.title} className="glass-panel p-8">
            <h3 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-white">
              {category.title}
            </h3>
            <div className="space-y-5">
              {category.skills.map((skill) => {
                const Icon = skill.icon
                return (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between gap-4 text-slate-700 dark:text-slate-300">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/15 dark:text-cyan-300">
                          <Icon size={18} />
                        </span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm font-semibold text-slate-600 dark:text-slate-200">{skill.level}%</span>
                    </div>
                    <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills


