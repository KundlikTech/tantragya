import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "CEO, TechStart India",
    content: "Tantragya transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations.",
    rating: 5,
    avatar: "RS",
  },
  {
    name: "Priya Patel",
    role: "Founder, EduLearn",
    content: "Working with Tantragya was a game-changer for our startup. They delivered a stunning platform that our users love.",
    rating: 5,
    avatar: "PP",
  },
  {
    name: "Amit Kumar",
    role: "CTO, FinanceHub",
    content: "The team's technical expertise and commitment to quality made our complex project feel effortless. Highly recommended!",
    rating: 5,
    avatar: "AK",
  },
  {
    name: "Sneha Reddy",
    role: "Marketing Director, GrowthCo",
    content: "Exceptional work! They understood our vision and brought it to life with a beautiful, functional website.",
    rating: 4,
    avatar: "SR",
  },
  {
    name: "Vikram Singh",
    role: "Founder, HealthTech",
    content: "Professional, responsive, and incredibly talented. Tantragya is our go-to partner for all digital projects.",
    rating: 5,
    avatar: "VS",
  },
];

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" ref={ref} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary/10 text-primary rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our <span className="text-primary">Clients</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full p-6 rounded-2xl bg-card border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300">
                    <Quote className="w-8 h-8 text-primary/30 mb-4" />
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-muted-foreground/30"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
