import { FaGraduationCap } from 'react-icons/fa'

const Experience = () => {
  const education = [
    {
      title: 'Bachelor\'s Degree',
      institution: 'Sabaragamuwa University of Sri Lanka',
      period: 'Present',
      description: [
        'Currently pursuing undergraduate studies in Computer Science/Information Technology',
        'Actively learning software development, web technologies, and programming languages',
        'Participating in university projects and assignments',
        'Engaging in extracurricular activities and tech communities',
      ],
    },
  ]

  return (
    <section id="experience" className="section-container bg-white dark:bg-gray-800">
      <h2 className="section-title dark:text-white">Education</h2>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-gray-700"></div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-gray-800"></div>
                
                <div className="card dark:bg-gray-700">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <FaGraduationCap className="text-primary-600 dark:text-primary-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {edu.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold">
                        {edu.institution}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.period}</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 ml-12">
                    {edu.description.map((item, i) => (
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


