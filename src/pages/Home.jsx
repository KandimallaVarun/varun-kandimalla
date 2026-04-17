import { motion } from "motion/react";
import { ArrowRight, LineChart } from "lucide-react";
import About from "./About";
import ProjectSection from "../components/ProjectSection";
import ExperienceSection from "../components/ExperienceSection";
import CertificationsSection from "../components/CertificationsSection";
import Projects from "./Projects";
import Contact from "./Contact";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="hero" className="max-w-7xl mx-auto px-8 py-24 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex-2 space-x-20 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm block editorial-spacing">
                Available for Hire
              </span>
              <h1 className="text-5xl md:text-5xl font-extrabold text-on-surface editorial-spacing leading-[1.1]">
                Hi, I'm
                <span className="text-primary block text-5xl md:text-6xl">
                  Varun Kandimalla
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-on-surface-variant font-medium">
                Full Stack Developer | Java Backend Enthusiast
              </p>
            </div>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
              I build scalable, high-performance applications with clean
              architecture and user-friendly interfaces, and I'm passionate
              about writing efficient code and growing as a software
              engineer.{" "}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="px-8 py-4 bg-primary text-on-primary rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 group"
              >
                View Projects
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="https://drive.google.com/file/d/1kI8g2NzHHmZydIYEYlccCYGj6tt6xKK9/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-surface-container-high text-on-surface rounded-lg font-semibold hover:bg-surface-container-highest transition-all"
              >
                Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform glow-primary"></div>
              <img
                src="/images/Profile.jpeg"
                alt="Alex Chen Portrait"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-3xl border-4 border-surface-container-high shadow-xl shadow-primary/10"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Sections */}

      <div id="experience">
        <ExperienceSection />
      </div>

      <div id="projects">
        <ProjectSection />
      </div>

      <div id="certifications">
        <CertificationsSection />
      </div>

      {/* <div id="about">
        <About />
      </div> */}

      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}