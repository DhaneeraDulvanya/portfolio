const About = () => {
  return (
    <section id="about" className="section-container bg-white dark:bg-gray-800">
      <h2 className="section-title dark:text-white">About Me</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              I'm a passionate full-stack developer with a love for creating
              innovative solutions and beautiful user experiences. With expertise
              in modern web technologies, I bring ideas to life through clean,
              efficient code.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="p-4 bg-primary-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">5+</div>
                <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="p-4 bg-primary-50 dark:bg-gray-700 rounded-lg">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">50+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
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


