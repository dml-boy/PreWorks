import ServiceCard from './ServiceCard'
import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      title: "Web & Mobile App Development",
      description: "Build scalable, high-performance apps with cutting-edge tech for web and mobile platforms.",
      icon: "💻",
    },
    {
      title: "SaaS Solutions",
      description: "Develop cloud-based platforms that streamline operations and scale with your business.",
      icon: "☁️",
    },
    {
      title: "UX/UI Design",
      description: "Craft intuitive, visually stunning interfaces through user research and bold design.",
      icon: "🎨",
    },
    {
      title: "IT Consulting",
      description: "Optimize your tech strategy with expert guidance on infrastructure and transformation.",
      icon: "🛠️",
    },
    {
      title: "Brand Strategy",
      description: "Create a cohesive brand identity that resonates and drives engagement across channels.",
      icon: "🌟",
    },
  ]

  return (
    <section id="services" className="py-5 bg-dark">
      <div className="container py-5">
        <motion.h2
          className="text-center fw-bold mb-5 text-light"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Expertise
        </motion.h2>
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-4">
              <ServiceCard title={service.title} description={service.description} icon={service.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}