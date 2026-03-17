
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Shield, ClipboardCheck, Users } from "lucide-react";
import bgWhy from "@/assets/icons/fondo-whyus.png";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const AboutSection = () => {
  const { ref, inView } = useSectionReveal();
  const pills = [
    "Residential",
    "Commercial",
    "Renovations",
    "Project Management",
    "Safety & Compliance",
  ];

  const bullets = [
    {
      icon: ClipboardCheck,
      title: "Disciplined planning",
      text: "Clear scope, realistic timelines, and predictable delivery—no surprises.",
    },
    {
      icon: Shield,
      title: "Safety-first execution",
      text: "Protected site workflow, compliant practices, and consistent quality checks.",
    },
    {
      icon: Users,
      title: "Single point of contact",
      text: "One team, one process, weekly updates—so decisions stay simple.",
    },
  ];

  const proof = [
    { num: "8+", label: "Years experience" },
    { num: "300+", label: "Projects delivered" },
    { num: "100%", label: "Client satisfaction" },
  ];

  const steps = [
    {
      n: "1",
      t: "Quick Call",
      d: "You tell us what you need, location, timeline, and budget range.",
    },
    {
      n: "2",
      t: "Site Visit",
      d: "We assess measurements, constraints, access, and safety requirements.",
    },
    {
      n: "3",
      t: "Clear Proposal",
      d: "You receive scope, materials, schedule, and pricing—line by line.",
    },
    {
      n: "4",
      t: "Build + Handoff",
      d: "We execute safely, send updates, and deliver a clean final walkthrough.",
    },
  ];
  useEffect(() => {
    const bg = document.querySelector(".aboutx-bg") as HTMLElement | null;
    if (!bg) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const onScroll = () => {
      const y = window.scrollY;

      bg.style.transform = `scale(1.08) translateY(${y * 0.02}px)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="about"
      className={`aboutx${inView ? " in-view" : ""}`}
      style={{ "--aboutx-bg": `url(${bgWhy})` } as React.CSSProperties}
    >
      {/* Fondo + scrim */}
      <div className="aboutx-bg" aria-hidden="true" />
      <div className="aboutx-scrim" aria-hidden="true" />

      <div className="aboutx-wrap">
        {/* LEFT */}
        <div className="aboutx-left">

          {/* animated icon */}
          <div className="aboutx-iconWrap" aria-hidden="true">
            <motion.div
              className="aboutx-iconRing aboutx-iconRing--outer"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="aboutx-iconRing aboutx-iconRing--inner"
              animate={{ rotate: -360 }}
              transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="aboutx-iconCenter"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Users size={40} strokeWidth={1.4} />
            </motion.div>
          </div>

          <div className="aboutx-kicker" data-aos="fade-up">
            ABOUT US
          </div>

          <h2 className="aboutx-title" data-aos="fade-up" data-aos-delay="80">
            Built on process. <br />
            Trusted for results.
          </h2>

          <p className="aboutx-sub" data-aos="fade-up" data-aos-delay="140">
            We deliver construction and renovation work with clear scope,
            transparent planning, and disciplined project control. Safety and
            quality checks are built into every step—so you get results without
            surprises.
          </p>

          <div className="aboutx-pills" data-aos="fade-up" data-aos-delay="190">
            {pills.map((p) => (
              <span key={p} className="aboutx-pill">
                {p}
              </span>
            ))}
          </div>

          <div className="aboutx-bullets">
            {bullets.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="aboutx-bullet"
                  data-aos="fade-up"
                  data-aos-delay={240 + idx * 90}
                >
                  <span className="aboutx-ico">
                    <Icon />
                  </span>

                  <div className="aboutx-btxt">
                    <div className="aboutx-btitle">{b.title}</div>
                    <div className="aboutx-bdesc">{b.text}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="aboutx-actions" data-aos="fade-up" data-aos-delay="520">
            <a href="#quote" className="aboutx-cta">
              Get a Quote
            </a>
            <a href="#projects" className="aboutx-cta ghost">
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="aboutx-right">
          <div className="aboutx-card" data-aos="zoom-in" data-aos-delay="140">
            <div className="aboutx-cardHead">
              <div className="aboutx-cardTitle">
                <CheckCircle />
                Why clients choose us
              </div>
              <div className="aboutx-cardSub">
                Clear quotes • Safe execution • Clean handoff
              </div>
            </div>

            <div className="aboutx-proofGrid">
              {proof.map((p) => (
                <div key={p.label} className="aboutx-proofItem">
                  <div className="aboutx-proofNum">{p.num}</div>
                  <div className="aboutx-proofLbl">{p.label}</div>
                </div>
              ))}
            </div>

            <div className="aboutx-note">
              We keep work organized and predictable—so you can build with
              confidence.
            </div>
          </div>

          {/* PROCESS / TIMELINE */}
          <div className="aboutx-process" data-aos="fade-up" data-aos-delay="200">
            <div className="aboutx-processHead">
              <span className="aboutx-processKicker">OUR PROCESS</span>
              <h3 className="aboutx-processTitle">
                Simple, Transparent and on Schedule.
              </h3>
              <p className="aboutx-processSub">
                From the first call to final handoff. We keep it clear,
                predictable, and documented—no surprises.
              </p>
            </div>

            <div className="aboutx-steps aboutx-steps--line">
              {steps.map((s) => (
                <div key={s.n} className="aboutx-step2">
                  <div className="aboutx-stepTop">
                    <div className="aboutx-stepDot">
                      <span>{s.n}</span>
                    </div>
                  </div>

                  <div className="aboutx-stepCard">
                    <div className="aboutx-stepTitle">{s.t}</div>
                    <div className="aboutx-stepDesc">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* /PROCESS */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

