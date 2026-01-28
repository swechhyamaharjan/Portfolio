import React from 'react'
import { FaCode, FaLaptopCode, FaPalette, FaGraduationCap } from 'react-icons/fa'

const About = () => {
  return (
    <section className='min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 pt-24 sm:pt-28 md:pt-32 pb-20 bg-gray-950'>
      <div className='w-full max-w-6xl mx-auto'>
        
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4'>About Me</h2>
          <div className='w-24 h-2 bg-purple-500 mx-auto rounded-full'></div>
        </div>

        {/* About Text */}
        <div className='max-w-4xl mx-auto mb-20'>
          <h3 className='text-2xl sm:text-3xl md:text-4xl font-black text-purple-300 mb-8 text-center'>I'm Swechhya Maharjan</h3>
          <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-6 leading-relaxed text-center'>
            A passionate Computer Science student with a love for creating beautiful and functional web applications. I specialize in the MERN stack and enjoy bringing creative ideas to life through code.
          </p>
          <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-6 leading-relaxed text-center'>
            When I'm not coding, you'll find me exploring new design trends, learning emerging technologies, or working on personal projects that challenge my skills and creativity.
          </p>
          <p className='text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-center'>
            I believe in writing clean, maintainable code and creating user experiences that make a difference. Let's build something amazing together!
          </p>
        </div>

        {/* Tech Stack */}
        <div className='text-center'>
          <h3 className='text-2xl sm:text-3xl md:text-4xl font-black text-white mb-10'>Tech Stack</h3>
          <div className='flex flex-wrap justify-center gap-3 sm:gap-4'>
            {['MongoDB', 'Express.js', 'React', 'Node.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'GitHub'].map((tech) => (
              <div key={tech} className='px-4 py-2 sm:px-6 sm:py-3 bg-purple-500 text-white rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-purple-600 transition-colors'>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About