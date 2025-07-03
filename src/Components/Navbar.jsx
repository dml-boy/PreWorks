import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: '100%', opacity: 0 }
  }

  return (
    <>
      <motion.nav
        className={`navbar custom-navbar fixed-top shadow-sm transition-all duration-300 bg-[--secondary] text-[--primary]`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container">
          <Link
            className="navbar-brand fw-bold fs-4"
            to="/"
            onClick={() => setIsOpen(false)}
          >
            PreWorks
          </Link>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={toggleSidebar}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="d-none d-lg-block">
            <ul className="navbar-nav d-flex flex-row gap-4 ms-auto text-uppercase fw-semibold">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Portfolio', path: '/portfolio' },
                { label: 'Connect', path: '/contact' },
              ].map(({ label, path }) => (
                <li className="nav-item" key={label}>
                  <Link
                    className={`nav-link ${pathname === path ? 'text-[--primary]' : ''} text-[--dark]`}
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="d-lg-none position-fixed top-0 end-0 h-100 bg-[--primary] shadow-lg"
            style={{ width: '250px', zIndex: 1000, background: 'var(--primary)' }}
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="p-4">
              <button
                className="btn-close btn-close-white mb-4"
                onClick={toggleSidebar}
                aria-label="Close sidebar"
              />
              <ul className="navbar-nav text-uppercase fw-semibold">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'About', path: '/about' },
                  { label: 'Services', path: '/services' },
                  { label: 'Portfolio', path: '/portfolio' },
                  { label: 'Connect', path: '/contact' },
                ].map(({ label, path }) => (
                  <li className="nav-item py-2" key={label}>
                    <Link
                      className={`nav-link ${pathname === path ? 'text-[--primary]' : ''} text-[--dark]`}
                      to={path}
                      onClick={toggleSidebar}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}