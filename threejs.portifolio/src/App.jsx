import About from "./sections/About"
import Clients from "./sections/Clients"
import Contact from "./sections/Contact"
import WorkExperience from "./sections/Experience"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Navbar from "./sections/navbar"
import Projects from "./sections/Projects"

function App() {
  return(
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
