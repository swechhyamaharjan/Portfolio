import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero"
import About from "../Components/About"
import Contact from "../Components/Contact"
import Projects from "../Components/Projects"
import Skills from "../Components/Skills"
import Services from "../Components/Services"

const HomePage = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Services/>
    <Skills />
    <Projects />
    <Contact />
    </>
  )
}

export default HomePage