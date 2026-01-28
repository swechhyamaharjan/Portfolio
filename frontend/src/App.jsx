import { Route, Routes } from "react-router"
import HomePage from "./Pages/HomePage" 
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Services from "./Components/Services"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"
import Contact from "./Components/Contact"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Education from "./Components/Education"

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/hero" element={<Hero/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/projects" element={<Projects/>}></Route>
      <Route path="/education" element={<Education />}></Route>
      <Route path="/skills" element={<Skills/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>   
    </Routes>
     <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
