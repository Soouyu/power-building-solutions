import {
  CheckCircle,
  Shield,
  Award,
  Clock,
  Users,
  HeadphonesIcon,
  Quote,
  Sparkles,
} from "lucide-react";

import bgWhy from "@/assets/icons/fondo-whyus.png";
import icoHelmet from "@/assets/icons/caso-png-icono.png";
import icoShield from "@/assets/icons/escudo-png-icono.png";
import icoLike from "@/assets/icons/like-png-icono.png";
import workerIcon from "@/assets/icons/worker-icon.png";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Proven Quality",
      description:
        "Every project meets rigorous quality standards with inspections at every phase.",
      tag: "Quality Control",
    },
    {
      icon: Shield,
      title: "Safety Excellence",
      description:
        "Industry-leading safety protocols protecting workers and your investment.",
      tag: "Zero Compromise",
    },
    {
      icon: Award,
      title: "20+ Years Experience",
      description:
        "Two decades delivering complex projects on time, on budget, and done right.",
      tag: "Legacy & Trust",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description:
        "Milestones, schedules, and transparent management to respect your timeline.",
      tag: "Reliable Schedules",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description:
        "Skilled professionals assigned to your project from start to finish.",
      tag: "Hands-On",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description:
        "Round-the-clock availability for urgent project needs and inquiries.",
      tag: "Always Ready",
    },
  ];

  const stats = [
    { value: "20+", label: "Years Building", img: icoHelmet },
    { value: "300+", label: "Projects Delivered", img: icoShield },
    { value: "98%", label: "Client Satisfaction", img: icoLike },
  ];

  return (
    <section
      id="why-us"
      className="wcu"
      style={
        {
          "--wcu-bg": `url(${bgWhy})`,
          "--wcu-worker": `url(${workerIcon})`,
        } as React.CSSProperties
      }
    >
      {/* ================= BACKGROUND ================= */}
      <div className="wcu-bg" aria-hidden="true">
        <div className="wcu-bgPhoto" />

        {/* PERSONAJE */}
        <div className="wcu-workerDecor" />

        {/* CAJA GLASS DEL WORKER */}
        <div className="wcu-workerCard">
          <div className="wcu-workerCardTop">
            <span className="wcu-workerBadge">Site Lead</span>
            <span className="wcu-workerStatus">
              <span className="dot" />
              Available today
            </span>
          </div>

          <h4 className="wcu-workerCardTitle">On-site supervision</h4>

          <p className="wcu-workerCardSub">
            Clean work habits • Clear updates • Safety-first
          </p>

          <div className="wcu-workerMiniStats">
            <div>
              <strong>15–30m</strong>
              <span>Response</span>
            </div>
            <div>
              <strong>Toronto</strong>
              <span>GTA</span>
            </div>
            <div>
              <strong>Insured</strong>
              <span>Work</span>
            </div>
          </div>

          <div className="wcu-workerCardCta">
            <a href="#contact" className="wcu-workerBtn">
              Get a Quote
            </a>
            <a href="tel:+10000000000" className="wcu-workerBtn ghost">
              Call
            </a>
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="wcu-container">
        {/* HEADER */}
        <header className="wcu-head">
          <div className="wcu-pill">
            <Sparkles className="wcu-pill-ico" />
            Why Choose Us
          </div>

          <h2 className="wcu-title">
            The <span>Power Building</span> Difference
          </h2>

          <p className="wcu-sub">
            Choosing the right construction partner defines the outcome. We
            combine experience, disciplined processes, and clear communication to
            deliver results you can trust.
          </p>

          <div className="wcu-stats">
            {stats.map((s) => (
              <div key={s.label} className="wcu-stat">
                <div className="wcu-stat-ico">
                  <img src={s.img} alt={s.label} />
                </div>
                <div>
                  <div className="wcu-stat-value">{s.value}</div>
                  <div className="wcu-stat-label">{s.label}</div>
                </div>
                <span className="wcu-stat-shine" />
              </div>
            ))}
          </div>
        </header>

        {/* BODY */}
        <div className="wcu-body">
          {/* LEFT */}
          <div className="wcu-stage">
            <div className="wcu-cards">
              {reasons.map((r, i) => {
                const Icon = r.icon;
                return (
                  <article
                    key={r.title}
                    className="wcu-card"
                    style={{ animationDelay: `${i * 70}ms` }}
                  >
                    <div className="wcu-card-top">
                      <div className="wcu-icon">
                        <Icon />
                      </div>
                      <div>
                        <h3 className="wcu-card-title">{r.title}</h3>
                        <span className="wcu-tag">{r.tag}</span>
                      </div>
                    </div>

                    <p className="wcu-card-desc">{r.description}</p>
                    <span className="wcu-card-line" />
                  </article>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <aside className="wcu-side">
            <div className="wcu-quoteCard">
              <div className="wcu-quoteIcon">
                <Quote />
              </div>

              <p className="wcu-quoteText">
                Power Building Solutions delivered our office complex ahead of
                schedule and under budget. Their professionalism and attention to
                detail are unmatched.
              </p>

              <div className="wcu-person">
                <div className="wcu-avatar">JM</div>
                <div>
                  <div className="wcu-name">James Mitchell</div>
                  <div className="wcu-role">
                    CEO, Mitchell Enterprises
                  </div>
                </div>
              </div>

              <span className="wcu-quoteGlow" />
            </div>

            <div className="wcu-proof">
              <h4 className="wcu-proofTitle">
                Built for clarity, speed, and confidence
              </h4>
              <p className="wcu-proofSub">
                What you’ll feel working with us:
              </p>

              <ul className="wcu-list">
                <li>
                  <span className="wcu-bullet">
                    <CheckCircle />
                  </span>
                  Clear milestones and weekly updates
                </li>
                <li>
                  <span className="wcu-bullet">
                    <Shield />
                  </span>
                  Safety-first culture on every site
                </li>
                <li>
                  <span className="wcu-bullet">
                    <Award />
                  </span>
                  Quality checks before handover
                </li>
                <li>
                  <span className="wcu-bullet">
                    <Clock />
                  </span>
                  On-time delivery with less stress
                </li>
              </ul>

              <div className="wcu-ctaRow">
                <a href="#contact" className="wcu-cta">
                  Get a Quote
                </a>
                <a href="#projects" className="wcu-cta ghost">
                  View Projects
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
