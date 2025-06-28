import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function About() {
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "Creative Director",
      image: "/team1.jpg",
    },
    {
      name: "John Smith",
      role: "Lead Developer",
      image: "/team2.jpg",
    },
    {
      name: "Emma Wilson",
      role: "UX Designer",
      image: "/team3.jpg",
    },
  ]

  const processSteps = [
    {
      title: "Research",
      description: "We dive deep into user needs and market trends to inform our strategy.",
      icon: "🔍",
    },
    {
      title: "Design",
      description: "We craft bold, intuitive interfaces that prioritize user experience.",
      icon: "🎨",
    },
    {
      title: "Develop",
      description: "We build scalable, high-performance solutions using cutting-edge tech.",
      icon: "💻",
    },
    {
      title: "Launch",
      description: "We deliver and optimize your product for maximum impact.",
      icon: "🚀",
    },
  ]

  return (
    <section id="about" className="py-5 bg-dark">
      <div className="container py-5">
        {/* Mission Section */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-5 fw-bold text-light mb-4">Who We Are</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
            PreWorks is a creative tech agency dedicated to transforming ideas into impactful digital products through user-first solutions, bold design, and scalable development.
          </p>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-center fw-bold text-light mb-4">Our Team</h3>
          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-4">
                <motion.div
                  className="card project-card border-0 shadow-sm"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={member.image}
                    className="card-img-top"
                    alt={member.name}
                    style={{ height: '250px', objectFit: 'cover' }}
                    onError={(e) => { e.target.src = '/fallback.jpg' }}
                  />
                  <div className="card-body text-center">
                    <h4 className="card-title h6 fw-bold text-light">{member.name}</h4>
                    <p className="card-text text-muted small">{member.role}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-center fw-bold text-light mb-4">Our Process</h3>
          <div className="row g-4">
            {processSteps.map((step, index) => (
              <div key={index} className="col-md-3">
                <motion.div
                  className="card h-100 border-0 shadow-sm project-card"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card-body text-center">
                    <div className="fs-2 text-primary mb-3">{step.icon}</div>
                    <h4 className="card-title h6 fw-bold text-light mb-3">{step.title}</h4>
                    <p className="card-text text-muted small">{step.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link to="/contact" className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold">
            Let’s Work Together
          </Link>
        </motion.div>
      </div>
    </section>
  )
}