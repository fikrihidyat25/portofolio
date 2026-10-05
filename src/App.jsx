import React from 'react'
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
  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 selection:bg-brand/20 selection:text-zinc-900">
      <Navbar />
      <main id="main-content">
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
