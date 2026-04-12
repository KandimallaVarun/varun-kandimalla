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
    <div className="min-h-screen bg-[#F8F9FA] pt-10 pb-20">
      {/* Header */}
      <section className="container mx-auto px-8 mb-10">
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
          className="max-w-3xl"
        >
          <h3 className="text-5xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8">
            Professional Experience
          </h3>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24 border-y border-gray-100">
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
                    <p className="text-sm font-bold text-gray-900 mb-1">{exp.period}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">{exp.location}</p>
                  </div>
                </div>
                <div className="md:col-span-9">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-gray-900">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                      <p className="text-lg text-gray-500">{exp.company}</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Redesigned the primary user dashboard, resulting in a 24% increase in daily active users within the first quarter.",
                        "Established a comprehensive UI library using Figma and Tailwind tokens, reducing development hand-off time by 40%.",
                        "Mentored three junior designers through successful promotion cycles and professional development tracks."
                      ].map((bullet, i) => (
                        <li key={i} className="flex gap-4 text-gray-600 leading-relaxed">
                          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
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

      {/* Capabilities */}
      {/* <section className="py-32 bg-[#F8F9FA]">
        <div className="container mx-auto px-8">
          <div className="mb-20">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Methodology</span>
            <h2 className="text-4xl font-bold text-gray-900">Specialized Capabilities</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {CAPABILITIES.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-gray-900 mb-8">{cap.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{cap.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="container mx-auto px-8 mt-20">
        <div className="bg-[#E9F1F7] rounded-[2rem] p-16 md:p-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's build something remarkable together.
            </h2>
            <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              Currently open to new opportunities and interesting collaborations. Download my full CV for a deeper dive into my work history.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="flex items-center gap-2 px-8 py-4 bg-[#4A5568] text-white font-bold rounded-lg hover:bg-[#2D3748] transition-all">
                <Download className="w-5 h-5" />
                DOWNLOAD RESUME
              </button>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/50 text-gray-900 font-bold rounded-lg hover:bg-white transition-all border border-gray-200"
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
