import { motion } from 'framer-motion'

export default function PortfolioCard({ title, description, image, technologies }) {
  return (
    <motion.div
      className="card project-card border-0 shadow-sm"
      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} className="card-img-top project-image" alt={title} />
      <div className="card-body">
        <h3 className="card-title h6 fw-bold mb-2 text-light">{title}</h3>
        <p className="card-text text-light small">{description}</p>
        <div className="d-flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}