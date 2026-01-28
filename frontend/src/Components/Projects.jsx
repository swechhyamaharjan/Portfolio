import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'NepaEvents - Event Management System',
      description: 'A comprehensive full-stack MERN application that allows users to create, manage, and book events online. Features group discounts, QR code generation, promo codes, and a recommendation system for personalized event suggestions.',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'Stripe API'],
      github: 'https://github.com/swechhyamaharjan/NepaEvents',
      image: 'Event.png',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Gadget E-commerce Website',
      description: 'A full-stack e-commerce web application for gadgets featuring product listings, cart management, and checkout functionality. Includes user authentication, order management, and secure global state management using Redux. Checkout functionality is managed vai e-sewa gateway.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Redux', 'eSewa API', 'Bootstrap'],
      github: 'https://github.com/swechhyamaharjan/Gadget-E-commerse-Website',
      image: 'gadget.png',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Recipe Sharing Web App',
      description: 'Building a full-stack web application for sharing, browsing, creating, liking, and bookmarking recipes. Features user-generated content, social interactions, and personalized recipe collections.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
      github: 'https://github.com/swechhyamaharjan/RecipeSharingWebApp',
      image: 'recipe.png',
      status: 'In Progress'
    }
  ]

  return (
    <section className='min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 pt-24 sm:pt-28 md:pt-32 pb-20 bg-gray-950'>
      <div className='w-full max-w-7xl mx-auto'>
        
        {/* Section Header */}
        <div className='text-center mb-12 sm:mb-16'>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4'>My Projects</h2>
          <div className='w-24 h-2 bg-purple-500 mx-auto rounded-full'></div>
          <p className='text-base sm:text-lg md:text-xl text-gray-300 mt-6 max-w-2xl mx-auto px-4'>
            Here are some of my recent projects that showcase my skills and passion for web development
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className='bg-gray-900 rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group flex flex-col h-full'
            >
              {/* Project Image */}
              <div className='relative h-40 sm:h-48 overflow-hidden flex-shrink-0'>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent'></div>
              </div>

              {/* Project Content */}
              <div className='p-5 sm:p-6 flex flex-col flex-grow'>
                <div className='flex items-start justify-between mb-3 gap-2'>
                  <h3 className='text-lg sm:text-xl md:text-2xl font-black text-white leading-tight'>{project.title}</h3>
                  {project.status === 'In Progress' && (
                    <span className='px-2 sm:px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-xs font-bold whitespace-nowrap flex-shrink-0'>
                      In Progress
                    </span>
                  )}
                </div>
                <p className='text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed flex-grow'>{project.description}</p>

                {/* Technologies */}
                <div className='flex flex-wrap gap-2 mb-4 sm:mb-6'>
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className='px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs sm:text-sm font-medium'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className='flex gap-4'>
                  <a 
                    href={project.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-purple-500 transition-colors duration-300 font-semibold text-sm sm:text-base'
                  >
                    <FaGithub className='text-lg sm:text-xl' />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className='text-center mt-12 sm:mt-16'>
          <a 
            href='https://github.com/swechhyamaharjan?tab=repositories'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-purple-500 text-white font-bold text-base sm:text-lg rounded-lg hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300'
          >
            <FaGithub className='text-xl sm:text-2xl' />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects