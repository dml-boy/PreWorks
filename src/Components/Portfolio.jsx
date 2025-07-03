import PortfolioCard from './PortfolioCard'
import { motion } from 'framer-motion'

export default function Portfolio() {
  const projects = [
    {
      title: "SaaS Dashboard",
      description: "A user-friendly dashboard for a SaaS platform, designed for startups.",
      image: "Project1.png", // Reference public/ image
      technologies: ["React", "Node.js", "AWS"],
    },
    {
      title: "Mobile E-Commerce App",
      description: "A sleek mobile app with seamless UX for online shopping.",
      image: "/project2.jpg",
      technologies: ["Flutter", "Firebase", "GraphQL"],
    },
    {
      title: "Brand Identity",
      description: "A bold brand strategy for a tech enterprise.",
      image: "/project3.jpg",
      technologies: ["Figma", "Adobe XD"],
    },
  ]

  return (
    <section id="portfolio" 
    // className="py-5 bg-[--light]"
    >
      <div className=" py-5">
        <motion.h2
          className="text-center fw-bold mb-5 text-[--light]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Work
        </motion.h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6">
              <PortfolioCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}