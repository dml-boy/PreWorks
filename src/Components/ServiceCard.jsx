import { motion } from 'framer-motion'

export default function ServiceCard({ title, description, icon }) {
  return (
    <motion.div
      className="card h-100 border-0 shadow-sm project-card"
      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
      transition={{ duration: 0.3 }}
    >
      <div className="card-body">
        <div className="fs-2 text-primary mb-3">{icon}</div>
        <h3 className="card-title h5 fw-bold mb-3">{title}</h3>
        <p className="card-text text-light">{description}</p>
      </div>
    </motion.div>
  )
}