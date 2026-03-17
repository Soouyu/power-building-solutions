import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/hero-construction.jpg";
import heroVideo from "@/assets/hero-fonder.mp4";

const IMAGE_HOLD_MS = 5500;

const STATS = [
  { end: 8,   suffix: "+", label: "Years Experience" },
  { end: 300, suffix: "+", label: "Projects Completed" },
  { end: 100, suffix: "%", label: "Client Satisfaction" },
];

// Ease-out cubic
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

interface HeroProps { ready?: boolean }

const HeroSection = ({ ready = false }: HeroProps): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showVideo, setShowVideo]   = useState(false);
  const [counts, setCounts]         = useState([0, 0, 0]);
  const [doneMask, setDoneMask]     = useState([false, false, false]);

  /* ── video cycle ─────────────────────────────────────── */
  useEffect(() => {
    if (!ready) return;
    const timer = window.setTimeout(() => {
      setShowVideo(true);
      const v = videoRef.current;
      if (v) { v.currentTime = 0; v.play()?.catch(() => {}); }
    }, IMAGE_HOLD_MS);
    return () => window.clearTimeout(timer);
  }, [ready]);

  const handleEnded = () => {
    setShowVideo(false);
    window.setTimeout(() => {
      setShowVideo(true);
      const v = videoRef.current;
      if (v) { v.currentTime = 0; v.play()?.catch(() => {}); }
    }, IMAGE_HOLD_MS);
  };

  /* ── count-up: arranca 1 s después de que el intro termina ── */
  useEffect(() => {
    if (!ready) return;

    const DELAY    = 1000;   // ms tras 'ready' para iniciar
    const DURATION = 2200;   // ms que tarda el conteo completo

    const start = window.setTimeout(() => {
      const t0 = performance.now();

      const tick = (now: number) => {
        const progress = Math.min((now - t0) / DURATION, 1);
        const eased    = easeOut(progress);

        setCounts(STATS.map(s => Math.round(eased * s.end)));

        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          // pop cada número con un pequeño escalonado
          STATS.forEach((_, i) => {
            window.setTimeout(() => {
              setDoneMask(prev => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 80);
          });
        }
      };

      requestAnimationFrame(tick);
    }, DELAY);

    return () => window.clearTimeout(start);
  }, [ready]);

  return (
    <section className={`pws-hero${ready ? " is-ready" : ""}`}>

      {/* BACKGROUND */}
      <div className="pws-heroBg">
        <img
          src={heroImage}
          alt="Professional construction site"
          className={`pws-heroMedia ${ready && !showVideo ? "is-visible" : "is-hidden"}`}
          loading="eager"
          decoding="async"
        />
        <video
          ref={videoRef}
          className={`pws-heroMedia ${showVideo ? "is-visible" : "is-hidden"}`}
          src={heroVideo}
          muted
          playsInline
          preload="none"
          onEnded={handleEnded}
        />
        <div className="pws-heroOverlay" />
      </div>

      {/* CONTENT */}
      <div className="pws-container pws-heroContent">

        {/* animated icon */}
        <div className="pws-heroIconWrap" aria-hidden="true">
          <motion.div
            className="pws-heroIconRing pws-heroIconRing--outer"
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="pws-heroIconRing pws-heroIconRing--inner"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="pws-heroIconCenter"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Building2 size={44} strokeWidth={1.4} />
          </motion.div>
        </div>

        <div className="pws-max">
          <h1 className="pws-in heading-display text-card mb-6 pws-heroTitle">
            Driven by Power<br />
            <span className="pws-heroAccent">Defined By Quality</span>
          </h1>

          <p className="pws-in text-lg md:text-xl text-card/90 mb-8 max-w-2xl leading-relaxed">
            Power Building Solutions delivers exceptional construction services
            with unwavering commitment to quality, safety, and professional excellence.
            Every project, built to last.
          </p>

          <div className="pws-in flex flex-col sm:flex-row gap-4">
            <Button variant="hero" asChild>
              <a href="#quote">Request a Quote</a>
            </Button>
            <Button variant="heroOutline" asChild>
              <a href="#services">Our Services</a>
            </Button>
          </div>

          {/* ── STATS CON CONTADOR ── */}
          <div className="pws-statsGrid">
            {STATS.map((s, i) => (
              <div key={s.label} className={`pws-statItem pws-statItem--${i}`}>
                <div className={`pws-statNum${doneMask[i] ? " is-done" : ""}`}>
                  {counts[i]}{s.suffix}
                </div>
                <div className="pws-statLabel">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
