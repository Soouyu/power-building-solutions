import { motion } from "framer-motion";
import { Building2, Award } from "lucide-react";

// Importa tus logos reales aquí
import logo1 from "@/assets/Trusted/40-dunpar.png";
import logo2 from "@/assets/Trusted/ari-build.png";
import logo3 from "@/assets/Trusted/empresa-fake.jpeg";

const TrustedBySection = () => {
  const companies = [
    { name: "40 Dunpar", logo: logo1 },
    { name: "Aria Build", logo: logo2 },
    { name: "Empresa Fake", logo: logo3 },
  ];

  return (
    <section id="trusted" className="trusted-section">
      {/* Background sutil */}
      <div className="trusted-bg" aria-hidden="true" />
      <div className="trusted-bgOverlay" aria-hidden="true" />
      <div className="trusted-bgGlow" aria-hidden="true" />

      <div className="trusted-container">
        {/* Header */}
        <motion.div
          className="trusted-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* animated icon */}
          <div className="trusted-iconWrap" aria-hidden="true">
            <motion.div
              className="trusted-iconRing trusted-iconRing--outer"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="trusted-iconRing trusted-iconRing--inner"
              animate={{ rotate: -360 }}
              transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="trusted-iconCenter"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Award size={40} strokeWidth={1.4} />
            </motion.div>
          </div>

          <span className="trusted-eyebrow">TRUSTED BY</span>
          <h2 className="trusted-title">
            Canadian companies <span>that trust us</span>
          </h2>
          <p className="trusted-subtitle">
            Building relationships across Toronto and the GTA since 2004
          </p>
        </motion.div>

        {/* Logos Grid */}
        <motion.div
          className="trusted-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              className="trusted-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              <div className="trusted-logo-wrapper">
                <div className="trusted-logo">
                  {company.logo ? (
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="trusted-logo-img"
                    />
                  ) : (
                    <Building2 size={48} className="trusted-logo-placeholder" />
                  )}
                </div>
              </div>
              <p className="trusted-company-name">{company.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="trusted-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="trusted-line" />
          <p className="trusted-note">Proudly serving Toronto and the GTA</p>
          <div className="trusted-line" />
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;
