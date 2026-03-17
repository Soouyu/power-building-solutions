import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { ArrowRight, HardHat, Layers, Sparkles, Hammer, Wrench, Leaf, Users } from "lucide-react";

import FlatRoofing   from "@/assets/services/flat-roofing.jpeg";
import Cleaning      from "@/assets/services/Construction-Cleaning.jpeg";
import Demolition    from "@/assets/services/Demolition.jpeg";
import Renovations   from "@/assets/services/Renovations.jpeg";
import Exterior      from "@/assets/services/Exterior.jpeg";
import ManPower      from "@/assets/services/man-power.jpeg";

export const services = [
  {
    title: "Flat Roofing",
    image: FlatRoofing,
    icon: Layers,
    tag: "Roofing",
    short: "Installation, repair and maintenance of flat roofing systems.",
    full: "Installation, repair and maintenance of commercial and residential flat roofs using professional systems such as TPO, EPDM and modified bitumen.",
  },
  {
    title: "Construction Cleaning",
    image: Cleaning,
    icon: Sparkles,
    tag: "Cleaning",
    short: "Post-construction and job site cleaning.",
    full: "Professional post-construction and job site cleaning to keep projects safe, organized and ready for the next stage.",
  },
  {
    title: "Demolition & Hand Excavation",
    image: Demolition,
    icon: Hammer,
    tag: "Demolition",
    short: "Interior and exterior demolition services.",
    full: "Interior and exterior demolition services including careful hand excavation for precise work in tight or sensitive areas.",
  },
  {
    title: "Renovations",
    image: Renovations,
    icon: Wrench,
    tag: "Renovation",
    short: "Interior renovation and upgrades.",
    full: "Interior renovation services including drywall, framing, finishing and general improvements to upgrade and modernize your space.",
  },
  {
    title: "Exterior & Landscaping",
    image: Exterior,
    icon: Leaf,
    tag: "Exterior",
    short: "Outdoor improvements and property preparation.",
    full: "Exterior property improvements including landscaping, grading, yard cleanup and outdoor project preparation.",
  },
  {
    title: "Manpower",
    image: ManPower,
    icon: Users,
    tag: "Workforce",
    short: "Reliable construction workforce.",
    full: "Reliable construction manpower to support projects of any size including demolition, cleaning, material handling and general site assistance.",
  },
];

export default function ServicesSection() {
  const [open, setOpen] = useState<number | null>(null);
  const { ref, inView } = useSectionReveal();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} id="services" className={`svcNew${inView ? " in-view" : ""}`}>
      <div className="svcContainer">

        {/* ── HEADER ── */}
        <div className="svcHeader">
          <div className="svcHeaderText">
            <span className="svcEyebrow">OUR SERVICES</span>
            <h2>
              Professional construction services
              <span> across Toronto & GTA</span>
            </h2>
            <p>
              Reliable crews, clear scope and professional execution
              for residential and commercial projects.
            </p>
          </div>

          {/* animated icon */}
          <div className="svcIconWrap" aria-hidden="true">
            <motion.div
              className="svcIconRing svcIconRing--outer"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="svcIconRing svcIconRing--inner"
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="svcIconCenter"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <HardHat size={48} strokeWidth={1.5} />
            </motion.div>
          </div>
        </div>

        {/* ── GRID ── */}
        <div className="svcGrid">
          {services.map((service, i) => {
            const isOpen = open === i;
            const Icon = service.icon;
            const num = String(i + 1).padStart(2, "0");

            return (
              <motion.div
                key={i}
                className={`svcCard ${isOpen ? "open" : ""}`}
                onClick={() => setOpen(isOpen ? null : i)}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                {/* image — full bleed */}
                <div className="svcImage">
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>

                {/* gradient overlay */}
                <div className="svcOverlay" aria-hidden="true" />

                {/* top row: tag + number */}
                <div className="svcCardTop">
                  <span className="svcCardTag">
                    <Icon size={13} />
                    {service.tag}
                  </span>
                  <span className="svcCardNum">{num}</span>
                </div>

                {/* bottom content */}
                <div className="svcContent">
                  <h3>{service.title}</h3>
                  <p className="svcShort">{service.short}</p>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        key="expanded"
                        className="svcExpanded"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                      >
                        <p className="svcFull">{service.full}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <span className="svcMore">
                    {isOpen ? "Show less" : "Learn more"}
                    <ArrowRight size={14} />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
