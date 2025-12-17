import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Cloud, 
  Brain, 
  Wrench,
  ArrowUpRight 
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom web applications built with modern technologies for optimal performance and scalability.",
    features: ["React & Next.js", "Node.js Backend", "API Integration"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: ["iOS & Android", "React Native", "Flutter"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design solutions that combine aesthetics with functionality.",
    features: ["User Research", "Wireframing", "Prototyping"],
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern enterprises.",
    features: ["AWS & Azure", "DevOps", "Containerization"],
  },
  {
    icon: Brain,
    title: "AI / ML Solutions",
    description: "Intelligent solutions powered by machine learning and artificial intelligence.",
    features: ["Data Analytics", "Predictive Models", "NLP Solutions"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Comprehensive maintenance and support services to keep your systems running smoothly.",
    features: ["24/7 Support", "Bug Fixes", "Performance Optimization"],
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive technology solutions tailored to meet your business needs and drive digital transformation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card-hover p-8 group cursor-pointer"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="text-primary" size={28} />
              </div>

              {/* Content */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-xl">{service.title}</h3>
                <ArrowUpRight className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
              </div>
              
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
