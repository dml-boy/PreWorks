import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 50)
  //   }
  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  return (
    <motion.nav
      className={`navbar navbar-expand-lg fixed-top shadow-sm transition-navbar 
          `}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container">
        <Link
          className={`navbar-brand fw-bold fs-4 ${
            scrolled ? 'text-dark' : 'text-warning'
          }`}
          to="/"
        >
          PreWorks
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto text-uppercase fw-semibold">
            {[
              { label: 'Home', path: '/' },
              { label: 'About', path: '/about' },
              { label: 'Services', path: '/services' },
              { label: 'Portfolio', path: '/portfolio' },
              { label: 'Connect', path: '/contact' },
            ].map(({ label, path }) => (
              <li className="nav-item" key={label}>
                <Link
                  className={`nav-link ${
                    pathname === path ? 'active-link' : ''
                  } ${scrolled ? 'text-dark' : 'text-white'}`}
                  to={path}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}
