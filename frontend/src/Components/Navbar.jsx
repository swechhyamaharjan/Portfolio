import React, { useState } from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className='fixed top-0 left-0 w-full bg-gray-950 border-b border-purple-200/30 z-50 shadow-lg shadow-purple-200/10'>
      <div className='max-w-7xl mx-auto px-6 py-6 flex items-center justify-between'>

        {/* Logo */}
        <Link to={"/"} className='flex items-center gap-3 group cursor-pointer'>
          <div className='bg-purple-200 p-2.5 rounded-lg transform group-hover:rotate-12 transition-transform duration-300'>
            <i className='fas fa-code text-gray-950 text-xl'></i>
          </div>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight'>
            Port<span className='text-purple-400'>folio</span>
          </h1>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center focus:outline-none'
          aria-label='Toggle menu'
        >
          <span className={`block h-0.5 w-full bg-purple-200 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-purple-200 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-purple-200 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Links - Desktop */}
        <ul className='hidden md:flex gap-8 text-gray-300 font-medium text-lg'>
          <li>
            <Link to="/" className='relative hover:text-purple-200 transition-colors duration-300 group'>
              Home
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-purple-200 group-hover:w-full transition-all duration-300'></span>
            </Link>
          </li>
          <li>
            <Link to="/about" className='relative hover:text-purple-200 transition-colors duration-300 group'>
              About
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-purple-200 group-hover:w-full transition-all duration-300'></span>
            </Link>
          </li>
          <li>
            <Link to="/services" className='relative hover:text-purple-200 transition-colors duration-300 group'>
              Services
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-purple-200 group-hover:w-full transition-all duration-300'></span>
            </Link>
          </li>
          <li>
            <Link to="/projects" className='relative hover:text-purple-200 transition-colors duration-300 group'>
              Projects
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-purple-200 group-hover:w-full transition-all duration-300'></span>
            </Link>
          </li>
          <li>
            <Link to="/skills" className='relative hover:text-purple-200 transition-colors duration-300 group'>
              Skills
              <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-purple-200 group-hover:w-full transition-all duration-300'></span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className='px-5 py-2 bg-purple-400 text-gray-950 font-semibold rounded-lg hover:bg-purple-200 hover:shadow-lg hover:shadow-purple-200/50 transition-all duration-300'>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <ul className='flex flex-col gap-4 px-6 pb-6 text-gray-300 font-medium text-lg'>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)} className='block hover:text-purple-200 transition-colors duration-300'>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className='block hover:text-purple-200 transition-colors duration-300'>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setIsMenuOpen(false)} className='block hover:text-purple-200 transition-colors duration-300'>
              Services
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsMenuOpen(false)} className='block hover:text-purple-200 transition-colors duration-300'>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={() => setIsMenuOpen(false)} className='block hover:text-purple-200 transition-colors duration-300'>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className='inline-block px-5 py-2 bg-purple-400 text-gray-950 font-semibold rounded-lg hover:bg-purple-200 hover:shadow-lg hover:shadow-purple-200/50 transition-all duration-300'>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar