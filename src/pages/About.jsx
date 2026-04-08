import { motion } from "motion/react";

export default function About() {
  const skills = [
    "Java",
    "Python",
    "Spring Boot",
    "React",
    "SQL",
    "AWS",
    "Machine Learning",
    "Data Structures",
    "Algorithms",
  ];

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
          <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">
            Background
          </span>
          <h2 className="text-3xl font-bold text-on-surface editorial-spacing">
            The Journey & Craft
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-8 space-y-6"
        >
          <p className="text-lg text-on-surface-variant leading-relaxed">
            I am a Full Stack Developer with a strong interest in building
            scalable and efficient web applications. My skills include Java,
            Spring Boot, MySQL, NoSQL, and React, and I enjoy working across
            both backend and frontend development.{" "}
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            I focus on writing clean, maintainable code and creating
            user-friendly applications that solve real-world problems.{" "}
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed">
            I am continuously learning new technologies and aim to grow into a
            skilled software engineer, contributing to impactful and
            high-quality projects.{" "}
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
