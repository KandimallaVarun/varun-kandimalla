import { motion } from "motion/react";
import { Award, ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { CERTIFICATIONS, CATEGORY_COLORS } from "../pages/Certifications";

// Show only the first 3 on the home page
const FEATURED = CERTIFICATIONS.slice(0, 3);

export default function CertificationsSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4"
          >
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">
              Credentials
            </span>
            <h2 className="text-3xl font-bold text-on-surface editorial-spacing">
              Certifications
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-8 flex items-center"
          >
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Industry-recognized credentials across cloud infrastructure,
              backend development, frontend engineering, and machine learning.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {FEATURED.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-container-low rounded-2xl p-7 flex flex-col gap-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border border-outline-variant/10"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-surface-container-lowest flex items-center justify-center">
                  <Award className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                    CATEGORY_COLORS[cert.category] ?? "bg-gray-100 text-gray-600"
                  }`}
                >
                  {cert.category}
                </span>
              </div>

              <div className="flex-grow">
                <h3 className="text-base font-bold text-on-surface leading-snug mb-1">
                  {cert.title}
                </h3>
                <p className="text-sm text-on-surface-variant">{cert.issuer}</p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {cert.skills.slice(0, 4).map((skill) => (
                  <span
                    key={skill}
                    className="text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant border border-outline-variant/15 px-2 py-0.5 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-bold uppercase tracking-widest">{cert.date}</span>
                </div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors"
                >
                  Verify <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <Link
            to="/certifications"
            className="inline-flex items-center gap-2 px-8 py-4 bg-surface-container-high text-on-surface rounded-lg font-semibold hover:bg-surface-container-highest transition-all group"
          >
            View All {CERTIFICATIONS.length} Certifications
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}