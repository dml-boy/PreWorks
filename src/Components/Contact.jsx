import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <section id="contact" className="py-5 contact">
      <div className="container py-5">
        <motion.h2
          className="display-5 mb-4 text-light fw-bold text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Join the Community
        </motion.h2>
        <motion.div
          className="d-flex flex-column flex-md-row gap-4 justify-content-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to="/register"
            className="btn btn-lg rounded-pill px-5 py-3 fw-bold"
            style={{ backgroundColor: 'var(--primary)', color: 'var(--darker)' }}
          >
            Get Started 🚀
          </Link>
          <Link
            to="/login"
            className="btn btn-lg rounded-pill px-5 py-3 fw-bold border-2"
            style={{ borderColor: 'var(--primary)', color: 'var(--primary)' }}
          >
            Returning User 👋
          </Link>
        </motion.div>
        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-light">
            Prefer direct contact?{' '}
            <a href="mailto:hello@preworks.io" className="text-primary text-decoration-none">
              Email us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}