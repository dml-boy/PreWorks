import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero.jsx'
import Services from './Components/Services'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import About from './Components/About'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
export default function App() {
  const { scrollY } = useScroll()
  const navbarOpacity = useTransform(scrollY, [0, 50], [0.95, 0.98])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('section').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor: '#121212' }}
    >
      <motion.div style={{ background: navbarOpacity, position: 'sticky', top: 0, zIndex: 1000 }}>
        <Navbar />
      </motion.div>
     
     
      <Hero /> 
      <About />    
      <Services />
      <Portfolio />
      <Contact />

      <Footer />
       <Routes>
       
        <Route path="/about" element={<About />} />
      
      </Routes>
    </motion.div>
  )
}