import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import About from "../Components/About"
import Contact from "../Components/Contact"
import Projects from "../Components/Projects"
import Skills from "../Components/Skills"
import Services from "../Components/Services"
import Education from "../Components/Education"

const HomePage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Education />
    <Services/>
    <Skills />
    <Projects />
    <Contact />
    </>
  )
}

export default HomePage