import React from "react";
import { Building2, Phone, Mail, MapPin, Clock, ArrowUp } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="15" height="15" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const QUICK_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Trusted By", href: "#trusted" },
  { label: "Request Quote", href: "#quote" },
];

const SERVICES = [
  "Flat Roofing",
  "Construction Cleaning",
  "Demolition & Hand Excavation",
  "Renovations",
  "General Contracting",
];

const CONTACT = [
  { Icon: Phone, label: "Phone", value: "+1 (647) 917-9646", href: "tel:+16479179646" },
  { Icon: Mail, label: "Email", value: "powerconstructiongc@gmail.com", href: "mailto:powerconstructiongc@gmail.com" },
  { Icon: MapPin, label: "Address", value: "61 Jessie St, Brampton, Canada", href: null },
  { Icon: Clock, label: "Hours", value: "Mon – Sun: 7 AM – 6 PM", href: null },
];

const SOCIALS = [
  { href: "https://www.instagram.com/power.build.solutions?igsh=NHl1NXhueTN1aDN3", label: "Instagram" },
];

const Footer = () => {
  const { ref, inView } = useSectionReveal("-40px 0px");
  return (
    <footer ref={ref as React.RefObject<HTMLElement>} className={`ft${inView ? " ft-in" : ""}`}>
      {/* decorative glow orbes */}
      <div className="ft-glow ft-glow--a" aria-hidden="true" />
      <div className="ft-glow ft-glow--b" aria-hidden="true" />

      {/* ── MAIN GRID ── */}
      <div className="ft-body">

        {/* Brand */}
        <div className="ft-brand">
          <a href="#" className="ft-logo" aria-label="Power Building Solutions — home">
            <span className="ft-logoIcon" aria-hidden="true">
              <Building2 size={22} strokeWidth={1.6} />
            </span>
            <span className="ft-logoText">
              <span className="ft-logoName">Power Build Solutions</span>
              <span className="ft-logoTagline">Built to Last</span>
            </span>
          </a>

          <p className="ft-desc">
            Building excellence since 2018. Your trusted partner for commercial and
            residential construction — quality craftsmanship on every project.
          </p>

          <div className="ft-socials">
            {SOCIALS.map(({ href, label }) => (
              <a key={label} href={href} className="ft-social" aria-label={label} target="_blank" rel="noopener noreferrer">
                <InstagramIcon />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="ft-col">
          <span className="ft-colTitle">Quick Links</span>
          <nav className="ft-nav">
            {QUICK_LINKS.map(({ label, href }) => (
              <a key={label} href={href} className="ft-link">{label}</a>
            ))}
          </nav>
        </div>

        {/* Services */}
        <div className="ft-col">
          <span className="ft-colTitle">Services</span>
          <div className="ft-nav">
            {SERVICES.map((s) => (
              <span key={s} className="ft-service">
                <span className="ft-serviceDot" aria-hidden="true" />
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="ft-col">
          <span className="ft-colTitle">Contact Us</span>
          <div className="ft-contacts">
            {CONTACT.map(({ Icon, label, value, href }) =>
              href ? (
                <a key={label} href={href} className="ft-contactItem">
                  <span className="ft-contactIcon" aria-hidden="true">
                    <Icon size={15} strokeWidth={1.8} />
                  </span>
                  <span className="ft-contactText">
                    <span className="ft-contactLabel">{label}</span>
                    <span className="ft-contactValue">{value}</span>
                  </span>
                </a>
              ) : (
                <div key={label} className="ft-contactItem">
                  <span className="ft-contactIcon" aria-hidden="true">
                    <Icon size={15} strokeWidth={1.8} />
                  </span>
                  <span className="ft-contactText">
                    <span className="ft-contactLabel">{label}</span>
                    <span className="ft-contactValue">{value}</span>
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="ft-bottom">
        <p className="ft-copyright">
          © {new Date().getFullYear()} <strong>Power Build Solutions</strong>. All rights reserved.
        </p>

        <div className="ft-legal">
          <a href="#" className="ft-legalLink">Privacy Policy</a>
          <span className="ft-legalSep" aria-hidden="true" />
          <a href="#" className="ft-legalLink">Terms of Service</a>
        </div>

        <a href="#" className="ft-top" aria-label="Back to top">
          <ArrowUp size={15} strokeWidth={2} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
