import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router'

const Hero = () => {
  return (
    <section className='min-h-screen flex items-center px-6 pt-30 pb-12 md:pt-20 md:pb-0 bg-gray-950'>
      <div className='max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center'>
        
        {/* Left Side */}
        <div className='text-center lg:text-left'>
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-purple-500 rounded-full mb-6'>
            <span className='w-2 h-2 bg-white rounded-full animate-pulse'></span>
            <span className='text-sm text-white font-bold'>AVAILABLE FOR WORK</span>
          </div>

          <h1 className='text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4'>Hi! I am</h1>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-black text-purple-300 mb-8'>Swechhya Maharjan</h1>

          <ul className='text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 font-medium list-none space-y-2'>
            <li className='flex items-center justify-center lg:justify-start gap-3'>
              <span className='w-2 h-2 bg-purple-400 rounded-full flex-shrink-0'></span>
              <span>Computer Science Student</span>
            </li>
            <li className='flex items-center justify-center lg:justify-start gap-3'>
              <span className='w-2 h-2 bg-purple-400 rounded-full flex-shrink-0'></span>
              <span>MERN Stack Developer</span>
            </li>
            <li className='flex items-center justify-center lg:justify-start gap-3'>
              <span className='w-2 h-2 bg-purple-400 rounded-full flex-shrink-0'></span>
              <span>Web Designer</span>
            </li>
          </ul>
          

          <div className='flex flex-row gap-4 mb-12 justify-center lg:justify-start'>
            <Link to={"/projects"} className='text-center px-6 h-12 flex items-center justify-center sm:px-10 sm:h-auto sm:py-5 bg-purple-500 text-white rounded-2xl font-black text-sm sm:text-lg hover:scale-105 hover:bg-purple-200 transition-transform shadow-2xl shadow-purple-200/50'>
              VIEW PROJECTS
            </Link>
            <Link to={"/contact"} className='text-center px-6 h-12 flex items-center justify-center sm:px-10 sm:h-auto sm:py-5 border-4 border-purple-500 text-white rounded-2xl font-black text-sm sm:text-lg hover:bg-purple-400 transition-all'>
              CONTACT
            </Link>
          </div>

          <div className='flex gap-7 justify-center lg:justify-start'>
            <a href="https://github.com/swechhyamaharjan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
             className='w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-purple-300 rounded-2xl text-white hover:scale-110 transition-transform shadow-xl'>
              <FaGithub className='text-xl sm:text-2xl' />
            </a>
            <a href="https://www.linkedin.com/in/swechhya-maharjan-62b60525a/"
            target="_blank"
            rel="noopener noreferrer"
             className='w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-purple-300 rounded-2xl text-white hover:scale-110 transition-transform shadow-xl'>
              <FaLinkedin className='text-xl sm:text-2xl' />
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className='relative order-first lg:order-last'>
          <div className='relative w-full max-w-sm sm:max-w-md lg:max-w-xl mx-auto'>
            <div className='rounded-2xl overflow-hidden border-2 shadow-2xl'>
              <img 
                src="/photo.jpeg" 
                alt="Swechhya" 
                className='w-full h-full object-cover aspect-square'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero