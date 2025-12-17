import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import velora from "@/assets/images/velora.png";
import metriciq from '@/assets/images/metriciq.png';
import neuralrec from '@/assets/images/neuralrec.png'
import flavoria from '@/assets/images/flavoria.png'
import nexatech from '@/assets/images/nexatech.png'
import { url } from "inspector";
const projects = [
  {
  title: "Velora",
  description:
    "A premium e-commerce platform featuring secure payments, product management, and a modern shopping experience optimized for performance.",
  image: velora,
  tech: ["React", "Node.js", "MongoDB", "Stripe"],
  category: "Web Development",
  url:"https://velora-official.netlify.app/"
}
,
  {
  title: "NeuralRec",
  description:
    "A web-based AI recommendation system showcasing how neural networks can be used to generate personalized recommendations through an interactive and user-friendly interface.",
  image: neuralrec,
  tech: ["React", "Python", "TensorFlow"],
  category: "AI / ML",
  url:"https://neuralrec.netlify.app/"
}
,
  {
    title: "MetricIQ – AI-Powered Analytics Dashboard",
    description: "Business intelligence platform that transforms raw data into actionable insights using predictive analytics and interactive visualizations.",
    image: metriciq,
    tech: ["Python", "TensorFlow", "React", "D3.js"],
    category: "AI/ML",
    url:"https://metriciq.netlify.app/"
  },
  {
  title: "Flavoria",
  description:
    "A modern food delivery website featuring restaurant listings, menu browsing, and an intuitive ordering interface with a responsive design.",
  image: flavoria,
  tech: ["React", "Tailwind CSS", "JavaScript"],
  category: "Web Development",
  url:"https://flavoria-official.netlify.app"
}
,
  {
  title: "NexaTech",
  description:
    "A modern digital solutions website showcasing services in web development, mobile applications, AI/ML, and cloud technologies with a clean and responsive user interface.",
  image: nexatech,
  tech: ["React", "Tailwind CSS", "TypeScript"],
  category: "Web Development",
  url:"https://nexatech-solutions.netlify.app/"
},
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our portfolio of successful projects delivered across various industries.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group glass-card overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <a href={project.url}><ExternalLink size={20}  /></a>
                  </button>
                </div>
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}