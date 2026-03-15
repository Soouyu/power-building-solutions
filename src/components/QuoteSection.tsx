import { useState } from "react";
import { motion } from "framer-motion";
import { ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import fonder from "@/assets/fondo2.jpg";
import { services } from "@/components/ServicesSection";

const QuoteSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((r) => setTimeout(r, 1000));

    toast({
      title: "Quote Request Submitted",
      description: "We’ll contact you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
    <section
      id="quote"
      className="quoteFX"
      style={{ ["--quote-bg" as any]: `url(${fonder})` }}
    >
      <div className="quoteFX-container container-max">
        <div className="quoteFX-grid">
          {/* LEFT */}
          <div className="quoteFX-up quoteFX-left">
            <span className="quoteFX-kicker">Get Started</span>

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
                <ClipboardList size={40} strokeWidth={1.4} />
              </motion.div>
            </div>

            <h2 className="quoteFX-title">
              Request Your <span>Free Quote</span>
            </h2>

            <p className="quoteFX-lead">
              Tell us what you need and where. We’ll review the scope, confirm a
              realistic timeline, and send you a detailed quote — no obligation.
            </p>

            <ul className="quoteFX-steps">
              <li>
                <span>1</span> Submit your project details
              </li>
              <li>
                <span>2</span> We review scope & requirements
              </li>
              <li>
                <span>3</span> Receive your quote within 24h
              </li>
            </ul>
          </div>

          {/* FORM */}
          <div className="quoteFX-up quoteFX-card">
            <form onSubmit={handleSubmit} className="quoteFX-form">
              <div className="quoteFX-row">
                <Input
                  name="name"
                  placeholder="Full name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email address *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="quoteFX-row">
                <Input
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Input
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <select
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleChange}
                className="quoteFX-select"
              >
                <option value="">Service type *</option>
                {services.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>

              <Textarea
                name="message"
                rows={4}
                required
                placeholder="Project details, timeline, budget, notes…"
                value={formData.message}
                onChange={handleChange}
                className="resize-none"
              />

              <Button
                type="submit"
                size="lg"
                variant="cta"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? "Submitting…" : "Submit Quote Request"}
              </Button>

              <p className="quoteFX-legal">
                By submitting this form, you agree to be contacted regarding
                your project inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
