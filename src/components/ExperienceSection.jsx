import { motion } from 'motion/react';
import { FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { EXPERIENCE } from '../constants/portfolio';

export default function ExperienceSection() {
  return (
    <section className="bg-surface-container-low py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">Career Path</span>
          <h2 className="text-4xl font-bold text-on-surface editorial-spacing">Selected Experience</h2>
        </div>

        <div className="space-y-12">
          {EXPERIENCE.map((exp, index) => (
            <motion.div 
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid md:grid-cols-12 gap-6 items-start"
            >
              <div className="md:col-span-3 text-on-surface-variant font-medium text-sm editorial-spacing pt-1">
                {exp.period}
              </div>
              <div className="md:col-span-9">
                <h3 className="text-2xl font-bold text-on-surface mb-1">{exp.role}</h3>
                <p className="text-primary font-semibold mb-4">{exp.company}</p>
                <p className="text-on-surface-variant leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-outline-variant/20 flex justify-start">
          <Link to="/experience" className="px-8 py-4 bg-surface-container-lowest text-on-surface border border-outline-variant/30 rounded-lg font-bold hover:shadow-md transition-all flex items-center gap-2 group">
            View Full Career Journey
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
