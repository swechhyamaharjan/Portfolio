import React from 'react'
import { FaCode, FaMobileAlt, FaPalette, FaServer, FaRocket, FaTools } from 'react-icons/fa'
import { Link } from 'react-router'

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Building responsive and dynamic websites using modern technologies like React, Node.js, and MongoDB",
      color: "text-blue-400"
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      description: "Creating mobile-friendly websites that look great on all devices and screen sizes",
      color: "text-green-400"
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Design",
      description: "Designing beautiful and intuitive user interfaces with focus on user experience",
      color: "text-purple-400"
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Developing robust server-side applications with APIs, databases, and authentication",
      color: "text-orange-400"
    },
    {
      icon: <FaRocket />,
      title: "Full Stack Solutions",
      description: "End-to-end development from frontend to backend, delivering complete web applications",
      color: "text-pink-400"
    },
    {
      icon: <FaTools />,
      title: "Website Maintenance",
      description: "Ongoing support, updates, and optimization to keep your website running smoothly",
      color: "text-cyan-400"
    }
  ]

  return (
    <section className='min-h-screen px-6 sm:px-8 md:px-16 lg:px-24 pt-24 sm:pt-28 md:pt-32 pb-20 bg-gray-950'>
      <div className='w-full max-w-6xl mx-auto'>
        
        {/* Section Header */}
        <div className='text-center mb-16 sm:mb-20'>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4'>Services</h2>
          <div className='w-24 h-2 bg-purple-500 mx-auto rounded-full mb-6'></div>
          <p className='text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4'>
            What I can do for you
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
          {services.map((service, index) => (
            <div 
              key={index}
              className='bg-gray-900 p-6 sm:p-8 rounded-3xl border-2 border-gray-800 hover:border-purple-500 transition-all hover:transform hover:scale-105'
            >
              <div className={`text-4xl sm:text-5xl md:text-6xl ${service.color} mb-4 sm:mb-6`}>
                {service.icon}
              </div>
              <h3 className='text-xl sm:text-2xl font-black text-white mb-3 sm:mb-4'>{service.title}</h3>
              <p className='text-sm sm:text-base text-gray-400 leading-relaxed'>{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className='mt-16 sm:mt-20 text-center'>
          <div className='bg-purple-500 rounded-3xl p-8 sm:p-10 md:p-12'>
            <h3 className='text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 sm:mb-4'>Ready to Start a Project?</h3>
            <p className='text-sm sm:text-base md:text-lg text-black/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4'>
              Let's work together to bring your ideas to life
            </p>
            <Link to={"/contact"} 
              className='inline-block px-8 py-4 sm:px-10 sm:py-5 bg-white text-purple-600 rounded-2xl font-black text-base sm:text-lg hover:bg-gray-100 transition-colors'
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services