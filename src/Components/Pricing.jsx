import PricingCard from './PricingCard'
import { motion } from 'framer-motion'

export default function Pricing() {
  const plans = [
    { plan: "Basic", price: "$19", features: ["1 User", "Basic Analytics", "Email Support"], isPopular: false },
    { plan: "Pro", price: "$49", features: ["5 Users", "Advanced Analytics", "Priority Support"], isPopular: true },
    { plan: "Enterprise", price: "Custom", features: ["Unlimited Users", "Custom Analytics", "Dedicated Support"], isPopular: false },
  ]

  return (
    <section id="pricing" className="py-5 bg-white">
      <div className="container py-5">
        <motion.h2
          className="text-center fw-bold mb-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Pricing Plans
        </motion.h2>
        <div className="row g-4">
          {plans.map((plan, index) => (
            <div key={index} className="col-md-4">
              <PricingCard plan={plan.plan} price={plan.price} features={plan.features} isPopular={plan.isPopular} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}