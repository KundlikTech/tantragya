import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  MessageSquare, 
  BarChart3, 
  Palette, 
  Code2, 
  TestTube2, 
  Rocket, 
  HeartHandshake 
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Requirement Meeting",
    description: "Understanding your vision, goals, and project requirements.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: BarChart3,
    title: "Planning & Analysis",
    description: "Strategic planning and technical analysis for optimal solutions.",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating intuitive and visually appealing user interfaces.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Building robust applications using cutting-edge technologies.",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    icon: TestTube2,
    title: "Testing",
    description: "Rigorous quality assurance to ensure flawless performance.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Seamless deployment and launch of your application.",
    color: "from-secondary/20 to-secondary/5",
  },
  {
    icon: HeartHandshake,
    title: "Maintenance",
    description: "Ongoing support and updates to keep your solution optimal.",
    color: "from-primary/20 to-primary/5",
  },
];

export function WorkflowSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="workflow" className="py-24 relative overflow-hidden">
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
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-6">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our streamlined workflow ensures efficient project delivery and exceptional results.
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 hidden lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className={`glass-card p-6 inline-block ${index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"}`}>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 ${index % 2 === 0 ? "lg:ml-auto" : ""}`}>
                      <step.icon className={index % 2 === 0 ? "text-primary" : "text-secondary"} size={24} />
                    </div>
                    <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm max-w-sm">{step.description}</p>
                  </div>
                </div>

                {/* Step Number */}
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-full bg-card border-4 border-background flex items-center justify-center shadow-lg">
                    <span className="text-lg font-bold gradient-text">{index + 1}</span>
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
