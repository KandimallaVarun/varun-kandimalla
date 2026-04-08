import { motion } from 'motion/react';

export default function About() {
  const skills = ["Java", "Spring Boot", "PostgreSQL", "React", "TypeScript", "AWS", "Docker"];

  return (
    <section className="bg-surface-container-low py-24 md:py-32 min-h-[calc(100vh-80px)] flex items-center">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-12 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-4"
        >
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">Background</span>
          <h2 className="text-3xl font-bold text-on-surface editorial-spacing">The Journey & Craft</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-8 space-y-6"
        >
          <p className="text-lg text-on-surface-variant leading-relaxed">
            With over five years of experience in engineering resilient systems, I've transitioned from heavy enterprise Java environments to the dynamic world of full-stack product development. I believe that good software isn't just about code that runs—it's about building solutions that solve real human problems efficiently.
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            My expertise lies in the Spring ecosystem, where I leverage Spring Boot and Microservices to create robust backends. On the frontend, I prefer React and Tailwind CSS for their ability to deliver high-fidelity, performant interfaces that don't sacrifice accessibility.
          </p>
          
          <div className="pt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-surface-container-lowest rounded-full text-sm font-medium border border-outline-variant/15"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
