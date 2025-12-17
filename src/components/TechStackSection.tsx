import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const techCategories = [
  {
    title: "Frontend",
    techs: [
      { name: "React", icon: "⚛️" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "JavaScript", icon: "📜" },
      { name: "TypeScript", icon: "💎" },
      { name: "Next.js", icon: "▲" },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "⚡" },
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "GraphQL", icon: "◈" },
      { name: "REST API", icon: "🔗" },
    ],
  },
  {
    title: "Database",
    techs: [
      { name: "MySQL", icon: "🐬" },
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Redis", icon: "🔴" },
      { name: "Firebase", icon: "🔥" },
      { name: "Supabase", icon: "⚡" },
    ],
  },
  {
    title: "Cloud & Tools",
    techs: [
      { name: "AWS", icon: "☁️" },
      { name: "Docker", icon: "🐳" },
      { name: "Git", icon: "🌿" },
      { name: "GitHub", icon: "🐙" },
      { name: "Kubernetes", icon: "⎈" },
      { name: "CI/CD", icon: "🔄" },
    ],
  },
];

export function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tech" className="py-24 relative">
      <div className="section-container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Technologies</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Our Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We leverage the latest technologies to build powerful, scalable solutions.
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category.title}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {category.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.1 * categoryIndex + 0.05 * techIndex }}
                    className="flex flex-col items-center p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors group cursor-pointer"
                  >
                    <span className="text-2xl mb-2 group-hover:scale-125 transition-transform">{tech.icon}</span>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
