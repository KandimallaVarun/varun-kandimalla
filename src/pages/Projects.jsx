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
    <div className="min-h-screen bg-white pt-10 pb-20">
      {/* Header */}
      <section className="container mx-auto px-6 mb-5">
        {/* <Link 
          to="/" 
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link> */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
            All Projects
          </h1>
        </motion.div>
      </section>

      {/* Filter Bar */}
      <section className="container mx-auto px-6 mb-12">
        <div className="flex flex-wrap items-center gap-4 border-b border-gray-100 pb-6">
          <div className="flex items-center text-gray-400 mr-2">
            <Filter className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium uppercase tracking-wider">Filter:</span>
          </div>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? "bg-black text-white shadow-lg shadow-black/10"
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-6">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 flex flex-col h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-black hover:scale-110 transition-transform">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-black hover:scale-110 transition-transform">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-black rounded-full shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 border border-gray-100 px-2 py-1 rounded"
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
            <p className="text-gray-400 italic">No projects found in this category.</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 mt-32">
        <div className="bg-black rounded-3xl p-12 md:p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[120px]" />
             <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[120px]" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Have a project in mind?
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              I'm always looking for new challenges and interesting projects to work on. Let's build something amazing together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all hover:scale-105"
            >
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
