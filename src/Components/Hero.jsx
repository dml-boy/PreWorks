import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId

    function resizeCanvas() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 1
        this.speed = Math.random() * 0.5 + 0.5
      }
      update() {
        this.y += this.speed
        if (this.y > canvas.height) this.reset()
      }
      draw() {
        ctx.fillStyle = `rgba(0, 153, 153, 1)
, ${this.size / 3})` // --primary: #009999
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const particles = Array.from({ length: 120 }, () => new Particle())

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => { p.update(); p.draw() })
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()
    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section
      className="relative w-full h-screen overflow-hidden hero-section"
      style={{
        background: 'var(--light)', // --light: #F5F5F5
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <canvas
        ref={canvasRef}
        className="hero-canvas"
      />
      <div className="container hero-content">
        <div className="text-center hero-title max-w-3xl">
          <motion.h1
            className="hero-title " 
            style={{color: 'var(--primary)'}}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Creative Tech Solutions
          </motion.h1>
          <motion.p
            className="hero-subtitle " // --light: #F5F5F5 with opacity
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ color: 'var(--secondary)' }} // --secondary: #666666
          >
            Transforming ideas into impactful digital products
          </motion.p>
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to="/contact"
              className="btn  px-6 py-3 rounded-full shadow-lg "
              style={{ color: 'var(--light)', backgroundColor: 'var(--primary)', hover: { backgroundColor: 'var(--primary-hover)' } }}
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}