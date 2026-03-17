import React, { useState } from "react";
import { motion } from "framer-motion";
import { ClipboardList, Phone, Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import fonder from "@/assets/fondo2.jpg";
import { services } from "@/components/ServicesSection";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const STEPS = [
  { n: "01", label: "Submit your project details" },
  { n: "02", label: "We review scope & requirements" },
  { n: "03", label: "Receive your quote within 24 h" },
];

const QuoteSection = () => {
  const { ref, inView } = useSectionReveal();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", projectType: "", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast({ title: "Quote Request Submitted", description: "We'll contact you within 24 hours." });
    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", company: "", projectType: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="quote"
      className={`quoteFX${inView ? " in-view" : ""}`}
      style={{ ["--quote-bg" as any]: `url(${fonder})` }}
    >
      {/* overlay */}
      <div className="quoteFX-overlay" aria-hidden="true" />

      <div className="quoteFX-container container-max">

        {/* ── SECTION HEADER ── */}
        <div className="quoteFX-topHeader">
          <span className="quoteFX-eyebrow">Get Started</span>
          <h2 className="quoteFX-mainTitle">
            Let's Build <span>Together</span>
          </h2>
          <p className="quoteFX-mainSub">
            Tell us what you need. We review the scope and send a detailed,
            no-obligation quote within 24 hours.
          </p>
        </div>

        {/* ── TWO-COLUMN GRID ── */}
        <div className="quoteFX-grid">

          {/* LEFT — info panel */}
          <div className="quoteFX-left">

            {/* animated icon */}
            <div className="quoteFX-iconWrap" aria-hidden="true">
              <motion.div
                className="quoteFX-iconRing quoteFX-iconRing--outer"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="quoteFX-iconRing quoteFX-iconRing--inner"
                animate={{ rotate: -360 }}
                transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="quoteFX-iconCenter"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ClipboardList size={36} strokeWidth={1.4} />
              </motion.div>
            </div>

            {/* steps */}
            <div className="quoteFX-steps">
              {STEPS.map((s) => (
                <div key={s.n} className="quoteFX-step">
                  <div className="quoteFX-stepNum">{s.n}</div>
                  <p className="quoteFX-stepLabel">{s.label}</p>
                </div>
              ))}
            </div>

            {/* divider */}
            <div className="quoteFX-divider" aria-hidden="true" />

            {/* contact */}
            <div className="quoteFX-contact">
              <a href="tel:+16479179646" className="quoteFX-contactItem">
                <span className="quoteFX-contactIcon"><Phone size={15} /></span>
                +1 (647) 917-9646
              </a>
              <a href="mailto:powerconstructiongc@gmail.com" className="quoteFX-contactItem">
                <span className="quoteFX-contactIcon"><Mail size={15} /></span>
                powerconstructiongc@gmail.com
              </a>
            </div>

            {/* trust badge */}
            <div className="quoteFX-badge">
              <CheckCircle2 size={15} />
              Response guaranteed within 24 hours
            </div>
          </div>

          {/* RIGHT — form card */}
          <div className="quoteFX-card">
            {submitted ? (
              <div className="quoteFX-success">
                <div className="quoteFX-successIcon">
                  <CheckCircle2 size={48} strokeWidth={1.5} />
                </div>
                <h3>Request Submitted!</h3>
                <p>We'll review your project and reach out within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="quoteFX-form">
                <div className="quoteFX-formHeader">
                  <h3>Request a Free Quote</h3>
                  <p>Fill in the details below and we'll get back to you.</p>
                </div>

                <div className="quoteFX-row">
                  <div className="quoteFX-field">
                    <label>Full name *</label>
                    <Input name="name" placeholder="John Smith" required value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="quoteFX-field">
                    <label>Email *</label>
                    <Input name="email" type="email" placeholder="john@company.com" required value={formData.email} onChange={handleChange} />
                  </div>
                </div>

                <div className="quoteFX-row">
                  <div className="quoteFX-field">
                    <label>Phone</label>
                    <Input name="phone" placeholder="+1 (647) 000-0000" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="quoteFX-field">
                    <label>Company</label>
                    <Input name="company" placeholder="Company name" value={formData.company} onChange={handleChange} />
                  </div>
                </div>

                <div className="quoteFX-field">
                  <label>Service type *</label>
                  <select name="projectType" required value={formData.projectType} onChange={handleChange} className="quoteFX-select">
                    <option value="">Select a service…</option>
                    {services.map((s) => (
                      <option key={s.title} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="quoteFX-field">
                  <label>Project details *</label>
                  <Textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Describe your project — location, timeline, scope, budget…"
                    value={formData.message}
                    onChange={handleChange}
                    className="resize-none"
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="quoteFX-submit">
                  {isSubmitting ? (
                    <span className="quoteFX-spinner" />
                  ) : (
                    <>Submit Quote Request <ArrowRight size={16} /></>
                  )}
                </button>

                <p className="quoteFX-legal">
                  By submitting, you agree to be contacted about your project inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
