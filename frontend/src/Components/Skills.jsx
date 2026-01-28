import React from 'react'
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaJs, FaFigma } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman } from 'react-icons/si'

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact />, color: "text-blue-400" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
    { name: "Git & GitHub", icon: <FaGitAlt />, color: "text-orange-600" },
    { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
    { name: "Figma", icon: <FaFigma />, color: "text-purple-400" },
    { name: "REST APIs", icon: <FaDatabase />, color: "text-indigo-400" }
  ]

  return (
    <section className='min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 pt-24 sm:pt-28 md:pt-32 pb-20 bg-gray-950'>
      <div className='w-full max-w-6xl mx-auto'>
        
        {/* Section Header */}
        <div className='text-center mb-16 sm:mb-20'>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4'>Skills</h2>
          <div className='w-24 h-2 bg-purple-500 mx-auto rounded-full'></div>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8'>
          {skills.map((skill, index) => (
            <div key={index} 
              className='bg-gray-800 p-6 sm:p-8 rounded-3xl flex flex-col items-center justify-center gap-3 sm:gap-4 hover:bg-gray-750 transition-colors border-2 border-transparent hover:border-purple-500'>
              <div className={`text-4xl sm:text-5xl md:text-6xl ${skill.color}`}>
                {skill.icon}
              </div>
              <h3 className='text-base sm:text-lg md:text-xl font-bold text-white text-center'>{skill.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills