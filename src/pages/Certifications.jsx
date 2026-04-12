import { motion } from "motion/react";
import { Award, ExternalLink, ArrowLeft, Shield, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export const CERTIFICATIONS = [
  {
    title: "Python Libraries",
    issuer: "upGrad",
    date: "Jul 2024",
    credentialId: "2d578776-8684-40e7-bcaf-be54b56ec74f",
    category: "Libraries",
    badge: "https://images.credly.com/size/340x340/images/fd6bb2af-2f05-4d9b-a23e-39f8e309a82d/image.png",
    link: "https://upgrad.certificate.givemycertificate.com/c/2d578776-8684-40e7-bcaf-be54b56ec74f",
    skills: ["Spring Boot", "Spring MVC", "Spring Data", "Spring Security", "REST"],
  },
    {
    title: "Machine Learning Algorithms",
    issuer: "Great Learning",
    date: "Nov 2023",
    credentialId: "SJXUPOEK",
    category: "Machine Learning",
    badge: "https://www.mygreatlearning.com/certificate/SJXUPOEK?referrer_code=GLWBR5NE5J7HK",
    link: "https://www.mygreatlearning.com/certificate/SJXUPOEK?referrer_code=GLWBR5NE5J7HK",
    skills: ["SQL", "BigQuery", "Tableau", "R", "Spreadsheets"],
  },
  {
    title: "Problem Solving",
    issuer: "HackerRank",
    date: "Dec 2022",
    credentialId: "ac693d38b1ee",
    category: "Problem Solving",
    badge: "src/images/ProblemSolving_Hackerrank.png",
    link: "https://www.hackerrank.com/certificates/ac693d38b1ee",
    skills: ["Supervised Learning", "Neural Networks", "NumPy", "TensorFlow", "Python"],
  },
];

export const CATEGORY_COLORS = {
  Cloud: "bg-sky-100 text-sky-700",
  Programming: "bg-orange-100 text-orange-700",
  Frontend: "bg-violet-100 text-violet-700",
  Data: "bg-emerald-100 text-emerald-700",
  Backend: "bg-rose-100 text-rose-700",
  "AI/ML": "bg-amber-100 text-amber-700",
};

export default function Certifications() {
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
          {/* <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">
            Credentials
          </span> */}
          <h3 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Certifications
          </h3>
          {/* <p className="text-lg text-gray-500 leading-relaxed">
            Industry-recognized certifications validating expertise across cloud,
            backend, frontend, data, and AI/ML domains.
          </p> */}
        </motion.div>
      </section>
      

      {/* Stats Bar */}
      {/* <section className="bg-white border-y border-gray-100 py-8 mb-16">
        <div className="container mx-auto px-8 max-w-5xl flex flex-wrap gap-12 justify-center md:justify-start">
          {[
            { label: "Total Certifications", value: CERTIFICATIONS.length },
            { label: "Cloud & Infra", value: CERTIFICATIONS.filter(c => c.category === "Cloud").length },
            { label: "Programming", value: CERTIFICATIONS.filter(c => ["Programming","Backend","Frontend"].includes(c.category)).length },
            { label: "Data & AI/ML", value: CERTIFICATIONS.filter(c => ["Data","AI/ML"].includes(c.category)).length },
          ].map(stat => (
            <div key={stat.label}>
              <p className="text-4xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Certifications Grid */}
      <section className="container mx-auto px-8 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col gap-6 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Top row: badge + category */}
              <div className="flex items-start justify-between">
                <div className="w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden shrink-0">
                  {cert.badge ? (
                    <img
                      src={cert.badge}
                      alt={`${cert.title} badge`}
                      className="w-full h-full object-contain p-1.5 group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextSibling.style.display = "flex";
                      }}
                    />
                  ) : null}
                  <span
                    className="w-full h-full items-center justify-center"
                    style={{ display: cert.badge ? "none" : "flex" }}
                  >
                    <Award className="w-7 h-7 text-gray-400 group-hover:text-black transition-colors" />
                  </span>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${CATEGORY_COLORS[cert.category] ?? "bg-gray-100 text-gray-600"}`}>
                  {cert.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium">{cert.issuer}</p>
              </div>

              {/* Skills */}
              {/* <div className="flex flex-wrap gap-1.5">
                {cert.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 border border-gray-100 px-2 py-0.5 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div> */}

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-bold uppercase tracking-widest">{cert.date}</span>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-black transition-colors"
                >
                  Verify <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      {/* <section className="container mx-auto px-8 mt-24">
        <div className="bg-[#E9F1F7] rounded-[2rem] p-16 md:p-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Shield className="w-10 h-10 text-gray-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Always learning, always growing.
            </h2>
            <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
              Continuous learning is core to how I work. I'm always pursuing new
              certifications and deepening expertise across the stack.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/experience"
                className="flex items-center gap-2 px-8 py-4 bg-[#4A5568] text-white font-bold rounded-lg hover:bg-[#2D3748] transition-all"
              >
                View Experience
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/50 text-gray-900 font-bold rounded-lg hover:bg-white transition-all border border-gray-200"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
}