import React, { useMemo } from "react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

import renewImage from "@/assets/renew.jpeg";
import idea1 from "@/assets/porfolio/idea1.jpeg";
import idea2 from "@/assets/porfolio/idea2.jpeg";
import idea3 from "@/assets/porfolio/idea3.jpeg";

type Project = {
  type: "image";
  image: string;
  title: string;
  category: string;
  description: string;
};

export default function ProjectsSection() {
  const { ref, inView } = useSectionReveal();
  const projects: Project[] = useMemo(
    () => [
      {
        type: "image",
        image: renewImage,
        title: "Hallway Renovation",
        category: "Renovation",
        description: "Drywall repair, alignment and modern finish transformation.",
      },
      {
        type: "image",
        image: idea1,
        title: "Modern Open-Concept Home",
        category: "Residential",
        description: "Custom-built contemporary interior with premium finishes and seamless indoor-outdoor integration."
      },
      {
        type: "image",
        image: idea2,
        title: "Full Interior Renovation (In Progress)",
        category: "Residential",
        description: "Complete strip-out and rebuild including flooring removal, electrical upgrades, and finish preparation."
      },
      {
        type: "image",
        image: idea3,
        title: "Luxury Interior Finish",
        category: "Residential",
        description: "Retail renovation and clean handoff delivery."
      },
    ],
    []
  );

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="projects"
      className={`section-padding bg-muted prjSec${inView ? " prj-in" : ""}`}
    >
      <div className="container-max">
        <div className="prjHdr text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Our Portfolio</span>
          <h2 className="heading-section mt-2 mb-4">Our Projects</h2>
          <p className="text-body">Real transformations from small renovation jobs to finished spaces.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article key={index} className="projectCard group">
              <div className="projectMedia">
                <img
                  src={project.image}
                  alt={project.title}
                  className="projectImage"
                  loading="lazy"
                />
                <div className="projectOverlay" />
                <span className="projectCategory">{project.category}</span>
              </div>
              <div className="projectContent">
                <h3 className="projectTitle">{project.title}</h3>
                <p className="projectDesc">{project.description}</p>
                <a href="#quote" className="projectBtn" aria-label={`Request a quote for ${project.title}`}>
                  <span>Request a Quote</span>
                  <svg className="projectBtnIcon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
