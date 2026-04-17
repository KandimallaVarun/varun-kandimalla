import { motion } from "motion/react";
import { Award, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { CERTIFICATIONS } from "../pages/Certifications";

// Show only the first 3 on the home page
const FEATURED = CERTIFICATIONS.slice(0, 3);

export default function CertificationsSection() {
  return (
    <section className="py-24 md:py-32 bg-surface-container-low border-y border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">
              Credentials
            </span>
            <h2 className="text-3xl font-bold text-on-surface editorial-spacing">
              Certifications
            </h2>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {FEATURED.map((cert, index) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={cert.credentialId}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface-container-lowest rounded-xl p-6 flex flex-col items-center text-center gap-4 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group border border-outline-variant/10 cursor-pointer"
            >
              <div className="w-20 h-20 rounded-2xl bg-surface-container-high border border-outline-variant/10 flex items-center justify-center overflow-hidden">
                {cert.badge ? (
                  <img
                    src={cert.badge}
                    alt={`${cert.title} badge`}
                    className="w-full h-full object-contain p-2 group-hover:scale-110 transition-transform duration-300"
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
                  <Award className="w-8 h-8 text-primary" />
                </span>
              </div>

              <div>
                <h3 className="text-sm font-bold text-on-surface leading-snug mb-1 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs text-on-surface-variant">{cert.issuer}</p>
              </div>

              <span className="text-[10px] font-semibold text-on-surface-variant/60 uppercase tracking-widest">
                {cert.date}
              </span>
            </motion.a>
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