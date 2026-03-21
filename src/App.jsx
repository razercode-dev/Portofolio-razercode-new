import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Tech from "./components/Tech"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Gallery from "./components/Gallery"

export default function App() {
  return (
    <>
     <div className="fixed inset-0 overflow-hidden -z-20">
  <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-center blur-md scale-110"></div>
</div>
      <div className="fixed inset-0 bg-black/50 -z-10"></div>

      <main className="relative z-10 flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar/>
        <Hero/>
        <Tech/>
           

        <Projects/>
        <Contact/>
      </main>
    </>
  )
}