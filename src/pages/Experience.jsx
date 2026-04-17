import { motion } from "motion/react";
import { FileText, Briefcase, Code, Search, Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { EXPERIENCE } from "../constants/portfolio";

const CAPABILITIES = [
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Systems Architecture",
    description: "Developing robust systems that scale across platforms while maintaining absolute visual consistency and developer empathy."
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Behavioral Research",
    description: "Utilizing quantitative and qualitative research methodologies to uncover hidden user needs and validate product assumptions through data."
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Frontend Strategy",
    description: "Bridging the gap between creative vision and technical execution with a deep understanding of modern CSS, React frameworks, and motion design."
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-surface pt-10 pb-20">
      {/* Header */}
      <section className="container mx-auto px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h5 className="text-2xl md:text-3xl font-bold tracking-tight text-on-surface mb-8">
            Professional Experience
          </h5>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="bg-surface-container-low py-24 border-y border-outline-variant/15">
        <div className="container mx-auto px-8 max-w-5xl">
          <div className="space-y-32">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="grid md:grid-cols-12 gap-12"
              >
                <div className="md:col-span-3">
                  <div className="sticky top-32">
                    <p className="text-sm font-bold text-on-surface mb-1">{exp.period}</p>
                    <p className="text-xs text-on-surface-variant uppercase tracking-widest">{exp.location}</p>
                  </div>
                </div>
                <div className="md:col-span-9">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center text-primary">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-on-surface mb-1">{exp.role}</h3>
                      <p className="text-lg text-on-surface-variant">{exp.company}</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <p className="text-lg text-on-surface-variant leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Redesigned the primary user dashboard, resulting in a 24% increase in daily active users within the first quarter.",
                        "Established a comprehensive UI library using Figma and Tailwind tokens, reducing development hand-off time by 40%.",
                        "Mentored three junior designers through successful promotion cycles and professional development tracks."
                      ].map((bullet, i) => (
                        <li key={i} className="flex gap-4 text-on-surface-variant leading-relaxed">
                          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-8 mt-20">
        <div className="bg-gradient-to-br from-surface-container-high to-surface-container-lowest rounded-[2rem] p-16 md:p-24 text-center relative overflow-hidden border border-outline-variant/15">
          <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[60%] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[60%] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-on-surface mb-6">
              Let's build something remarkable together.
            </h2>
            <p className="text-on-surface-variant text-lg mb-12 max-w-2xl mx-auto">
              Currently open to new opportunities and interesting collaborations. Download my full CV for a deeper dive into my work history.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center gap-2 px-8 py-4 bg-primary text-on-primary font-bold rounded-lg hover:bg-primary-dim transition-all shadow-lg shadow-primary/20">
                <Download className="w-5 h-5" />
                DOWNLOAD RESUME
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 bg-surface-container-highest/50 text-on-surface font-bold rounded-lg hover:bg-surface-container-highest transition-all border border-outline-variant/30"
              >
                GET IN TOUCH
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
