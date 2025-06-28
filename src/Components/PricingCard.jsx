import { motion } from 'framer-motion'

export default function PricingCard({ plan, price, features, isPopular }) {
  return (
    <motion.div
      className={`card h-100 border-0 shadow-sm ${isPopular ? 'border-primary border-2' : ''}`}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {isPopular && (
        <span className="position-absolute top-0 start-50 translate-middle badge bg-primary text-white">
          Most Popular
        </span>
      )}
      <div className="card-body text-center pt-5">
        <h3 className="card-title h5 fw-bold mb-3">{plan}</h3>
        <p className="display-6 fw-bold text-primary mb-4">{price}<small className="fs-6 text-light">/mo</small></p>
        <ul className="list-unstyled mb-4">
          {features.map((feature, index) => (
            <li key={index} className="text-light mb-2">{feature}</li>
          ))}
        </ul>
        <a href="#contact" className="btn btn-primary fw-semibold">Get Started</a>
      </div>
    </motion.div>
  )
}