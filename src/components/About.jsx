const About = () => {
  return (
    <section id="about" className="section-container bg-white dark:bg-gray-800">
      <h2 className="section-title dark:text-white">About Me</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              I'm an enthusiastic undergraduate student at <span className="font-semibold text-primary-600 dark:text-primary-400">Sabaragamuwa University of Sri Lanka</span>, 
              pursuing my degree with a passion for Data Science and Artificial Intelligence. I love creating
              innovative solutions and beautiful user experiences through modern AI technologies, Data Analysis and Visualization. I am developing 
              Web Applications in my free time for fun and learning.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Currently, I'm expanding my knowledge in Machine learning, Deep learning , Data Analysis and Visualization, exploring new technologies,
              and working on various projects to enhance my skills. I'm always eager to learn and 
              contribute to meaningful projects that make a difference.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-primary-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">SUSL</div>
                <div className="text-gray-600 dark:text-gray-300">University</div>
              </div>
              <div className="p-4 bg-primary-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">UG</div>
                <div className="text-gray-600 dark:text-gray-300">Undergraduate</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-primary-400 to-primary-600 p-1">
              <div className="w-full h-full rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-6xl text-gray-400 dark:text-gray-500">Photo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


