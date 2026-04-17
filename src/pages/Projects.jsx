import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, ArrowLeft, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../constants/portfolio";

const CATEGORIES = ["All", "Frontend", "Backend", "Full Stack", "UI Design"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(PROJECTS);
    } else {
      setFilteredProjects(PROJECTS.filter(p => p.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-surface pt-10 pb-20">
      {/* Header */}
      {/* <section className="container mx-auto px-6 mb-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-4xl font-bold tracking-tight text-on-surface mb-6">
            All Projects
          </h1>
        </motion.div>
      </section> */}

      {/* Filter Bar */}
      <section className="max-w-5xl mx-auto px-8 mb-8">
        <div className="flex flex-wrap items-center gap-2.5 border-b border-outline-variant/20 pb-4">
          <div className="flex items-center text-on-surface-variant mr-1">
            <Filter className="w-3.5 h-3.5 mr-1.5" />
            <span className="text-xs font-medium uppercase tracking-wider">Filter:</span>
          </div>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${activeFilter === category
                ? "bg-primary text-on-primary shadow-md shadow-primary/20"
                : "bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-5xl mx-auto px-8">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-surface-container-low border border-outline-variant/15 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-surface/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-3">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-primary rounded-full text-on-primary hover:scale-110 transition-transform shadow-lg shadow-primary/30">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-surface-container-highest rounded-full text-on-surface hover:scale-110 transition-transform">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 bg-surface/80 backdrop-blur-sm text-[9px] font-bold uppercase tracking-widest text-primary rounded-full shadow-sm border border-outline-variant/20">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-sm font-bold text-on-surface mb-1.5 group-hover:text-primary transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-on-surface-variant text-xs leading-relaxed mb-3 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-semibold uppercase tracking-wider text-primary/80 border border-primary/20 bg-primary/5 px-1.5 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-on-surface-variant italic">No projects found in this category.</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 mt-32">
        <div className="bg-gradient-to-br from-surface-container-high to-surface-container-low rounded-3xl p-12 md:p-10 text-center relative overflow-hidden border border-outline-variant/20">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent rounded-full blur-[120px]" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-on-surface mb-8">
              Have a project in mind?
            </h2>
            <p className="text-on-surface-variant text-lg mb-12 max-w-2xl mx-auto">
              I'm always looking for new challenges and interesting projects to work on. Let's build something amazing together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-on-primary font-bold rounded-full hover:bg-primary-dim transition-all hover:scale-105 shadow-lg shadow-primary/20"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
