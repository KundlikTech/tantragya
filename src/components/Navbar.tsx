import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import logo from '/favicon.png'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((window.scrollY / scrollHeight) * 100);

      const sections = [
  "home",
  "services",
  "projects",
  "about",
  "workflow",
  "contact",
];

const scrollPosition = window.innerHeight / 3;

for (const id of sections) {
  const section = document.getElementById(id);
  if (!section) continue;

  const rect = section.getBoundingClientRect();

  if (rect.top <= scrollPosition && rect.bottom >= scrollPosition) {
    setActiveSection(id);
    break;
  }
}

    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({
    href,
    label,
    showOn,
  }: {
    href: string;
    label: string;
    showOn?: string;
  }) => {
    const isActive = activeSection === href.replace("#", "");
    return (
      <a
        href={href}
        className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
          showOn ?? ""
        } ${
          isActive
            ? "text-primary"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {label}
        {isActive && (
          <motion.div
            layoutId="activeUnderline"
            className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
          />
        )}
      </a>
    );
  };

  return (
    <>
      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-muted/30">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-primary-glow to-secondary"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-1 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center">
  <img
    src={logo}
    alt="Tantragya logo"
    className="w-8 h-8 object-contain"
  />
</div>


              <span className="text-2xl font-bold gradient-text">
                Tantragya
              </span>
            </a>

            {/* Navigation (priority-based) */}
            <div className="flex items-center gap-1 overflow-hidden">
              {/* High priority */}
              <NavLink href="#services" label="Services" />
              <NavLink href="#projects" label="Projects" />

              {/* Medium priority */}
              <NavLink
                href="#about"
                label="About"
                showOn="hidden md:inline-block"
              />
              <NavLink
                href="#workflow"
                label="Workflow"
                showOn="hidden lg:inline-block"
              />

              {/* Lowest priority (only if space allows) */}
              <NavLink
                href="#home"
                label="Home"
                showOn="hidden xl:inline-block"
              />
            </div>

            {/* CTA & Theme */}
            <div className="flex items-center gap-3 shrink-0">
              <ThemeToggle />
              <a href="#contact" className="btn-primary text-sm">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
