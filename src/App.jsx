import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Skills from './components/Skills'
import ResumeCTA from './components/ResumeCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    })
  }, [])
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-brand/20 selection:text-zinc-900 w-full max-w-full relative">
      <Navbar />
      <main id="main-content" className="w-full max-w-full overflow-x-clip">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certificates />
        <Skills />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
