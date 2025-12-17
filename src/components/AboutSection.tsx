import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Award, Users } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To empower businesses with cutting-edge technology solutions that drive growth and innovation.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description: "To be the leading technology partner for enterprises worldwide, shaping the digital future.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We deliver excellence in every project, ensuring quality and client satisfaction.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our team of skilled professionals brings decades of combined experience.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
              We are <span className="gradient-text">Tantragya</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Founded with a vision to transform businesses through technology, Tantragya has grown into a 
              trusted partner for enterprises seeking digital excellence. Our team of passionate developers, 
              designers, and strategists work together to create solutions that matter.
            </p>
            <p className="text-muted-foreground mb-8">
              We believe in building long-term relationships with our clients, understanding their unique 
              challenges, and delivering solutions that exceed expectations. Our commitment to quality and 
              innovation has made us the go-to technology partner for businesses across industries.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-xs font-bold text-primary-foreground">{i}</span>
                  </div>
                ))}
              </div>
              <span className="text-muted-foreground">Join 50+ satisfied clients</span>
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card-hover p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
