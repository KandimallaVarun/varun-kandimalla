import { motion } from 'motion/react';
import { ExternalLink, Github, Code, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants/portfolio';

export default function ProjectSection() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24 md:py-32">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">Portfolio</span>
          <h2 className="text-4xl font-bold text-on-surface editorial-spacing">Featured Projects</h2>
        </div>
        <Link to="/projects" className="text-primary font-semibold flex items-center gap-2 group hover:underline underline-offset-8">
          See All Projects
          <ExternalLink size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-surface-container-lowest p-6 rounded-xl transition-all hover:translate-y-[-8px] border border-outline-variant/10 group"
          >
            <div className="overflow-hidden rounded-lg mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-xl font-bold text-on-surface mb-2">{project.title}</h3>
            {/* <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
              {project.description}
            </p> */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                className="flex-1 py-2 text-sm font-semibold border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2"
              >
                <Code size={16} /> GitHub
              </a>
              <a
                href={project.demo}
                className="flex-1 py-2 text-sm font-semibold bg-primary text-on-primary rounded-lg hover:bg-primary-dim transition-colors flex items-center justify-center gap-2"
              >
                <Eye size={16} /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
