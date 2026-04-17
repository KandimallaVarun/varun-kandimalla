import { motion } from "motion/react";
import { Award, ExternalLink } from "lucide-react";
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
  Cloud: "bg-sky-500/15 text-sky-400",
  Programming: "bg-orange-500/15 text-orange-400",
  Frontend: "bg-violet-500/15 text-violet-400",
  Data: "bg-emerald-500/15 text-emerald-400",
  Backend: "bg-rose-500/15 text-rose-400",
  "AI/ML": "bg-amber-500/15 text-amber-400",
};

export default function Certifications() {
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
          <h3 className="text-3xl font-bold tracking-tight text-on-surface mb-4">
            Certifications
          </h3>
        </motion.div>
      </section>

      {/* Certifications Grid */}
      <section className="container mx-auto px-8 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={cert.credentialId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-surface-container-low rounded-xl border border-outline-variant/15 p-6 flex flex-col items-center text-center gap-5 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              {/* Badge Image */}
              <div className="w-24 h-24 rounded-2xl bg-surface-container-high border border-outline-variant/10 flex items-center justify-center overflow-hidden">
                {cert.badge ? (
                  <img
                    src={cert.badge}
                    alt={`${cert.title} badge`}
                    className="w-full h-full object-contain p-2.5 group-hover:scale-110 transition-transform duration-300"
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
                  <Award className="w-10 h-10 text-primary" />
                </span>
              </div>

              {/* Name & Organization */}
              <div>
                <h3 className="text-base font-bold text-on-surface leading-snug mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-on-surface-variant font-medium">{cert.issuer}</p>
              </div>

              {/* Date & Verify */}
              <div className="flex items-center gap-3 text-on-surface-variant/60">
                <span className="text-[10px] font-semibold uppercase tracking-widest">
                  {cert.date}
                </span>
                <span className="w-1 h-1 rounded-full bg-outline-variant/40" />
                <span className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest group-hover:text-primary transition-colors">
                  Verify <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}