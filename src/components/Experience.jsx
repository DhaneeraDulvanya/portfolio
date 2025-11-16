import { FaBriefcase } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: [
        'Led development of multiple web applications using React and Node.js',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40% through optimization',
        'Collaborated with cross-functional teams to deliver high-quality products',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup XYZ',
      period: '2020 - 2022',
      description: [
        'Developed and maintained web applications using modern JavaScript frameworks',
        'Implemented RESTful APIs and database solutions',
        'Participated in agile development processes',
        'Contributed to open-source projects',
      ],
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: '2019 - 2020',
      description: [
        'Built responsive websites using HTML, CSS, and JavaScript',
        'Learned modern frameworks and best practices',
        'Worked on client projects and gained real-world experience',
      ],
    },
  ]

  return (
    <section id="experience" className="section-container bg-white dark:bg-gray-800">
      <h2 className="section-title dark:text-white">Experience</h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-gray-700"></div>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-800"></div>
                
                <div className="card dark:bg-gray-700">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <FaBriefcase className="text-primary-600 dark:text-primary-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{exp.period}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-12">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience


