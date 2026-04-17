import { motion } from "motion/react";
import {
  FaJava, FaPython, FaReact, FaAws, FaDocker, FaGitAlt, FaHtml5, FaCss3Alt, FaNodeJs
} from "react-icons/fa";
import {
  SiSpringboot, SiMysql, SiMongodb, SiPostgresql, SiTailwindcss,
  SiJavascript, SiTypescript, SiRedis, SiApachekafka, SiKubernetes,
  SiNextdotjs, SiPostman, SiLinux
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const SKILL_CATEGORIES = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Java", icon: <FaJava />, color: "#f89820" },
      { name: "Python", icon: <FaPython />, color: "#3776ab" },
      { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
      // { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
      // { name: "C++", icon: <TbBrandCpp />, color: "#00599c" },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: <FaReact />, color: "#61dafb" },
      // { name: "Next.js", icon: <SiNextdotjs />, color: "#e0e0e0" },
      { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "#1572b6" },
      // { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06b6d4" },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f" },
      // { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
      // { name: "Kafka", icon: <SiApachekafka />, color: "#e0e0e0" },
      // { name: "Redis", icon: <SiRedis />, color: "#dc382d" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MySQL", icon: <SiMysql />, color: "#4479a1" },
      // { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169e1" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#47a248" },
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: <FaAws />, color: "#ff9900" },
      // { name: "Docker", icon: <FaDocker />, color: "#2496ed" },
      // { name: "Kubernetes", icon: <SiKubernetes />, color: "#326ce5" },
      // { name: "Linux", icon: <SiLinux />, color: "#e0e0e0" },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "#f05032" },
      { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
    ],
  },
];

export default function About() {
  return (
    <div className="bg-surface min-h-screen">
      {/* Bio Section */}
      <section className="bg-surface-container-low py-14 md:py-14">
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
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 md:py-20">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">
              Expertise
            </span>
            <h2 className="text-3xl font-bold text-on-surface editorial-spacing">
              Technical Skills
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILL_CATEGORIES.map((category, catIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.08 }}
                className="bg-surface-container-low rounded-xl border border-outline-variant/10 p-6"
              >
                <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-5">
                  {category.name}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/8 hover:border-outline-variant/25 hover:shadow-md hover:shadow-primary/5 transition-all duration-200 group"
                    >
                      <span
                        className="text-xl shrink-0 group-hover:scale-110 transition-transform duration-200"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </span>
                      <span className="text-sm font-medium text-on-surface truncate">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
