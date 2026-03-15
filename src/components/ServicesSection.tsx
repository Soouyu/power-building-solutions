import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, HardHat } from "lucide-react";

export const services = [
	{
		title: "Flat Roofing",
		image: "https://images.unsplash.com/photo-1599707254554-027aeb4deacd?q=80&w=1200",
		short: "Installation, repair and maintenance of flat roofing systems.",
		full: "Installation, repair and maintenance of commercial and residential flat roofs using professional systems such as TPO, EPDM and modified bitumen."
	},
	{
		title: "Construction Cleaning",
		image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200",
		short: "Post-construction and job site cleaning.",
		full: "Professional post-construction and job site cleaning to keep projects safe, organized and ready for the next stage."
	},
	{
		title: "Demolition & Hand Excavation",
		image: "https://images.unsplash.com/photo-1597009382523-7d7a6b31f964?q=80&w=1200",
		short: "Interior and exterior demolition services.",
		full: "Interior and exterior demolition services including careful hand excavation for precise work in tight or sensitive areas."
	},
	{
		title: "Renovations",
		image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200",
		short: "Interior renovation and upgrades.",
		full: "Interior renovation services including drywall, framing, finishing and general improvements to upgrade and modernize your space."
	},
	{
		title: "Exterior & Landscaping",
		image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200",
		short: "Outdoor improvements and property preparation.",
		full: "Exterior property improvements including landscaping, grading, yard cleanup and outdoor project preparation."
	},
	{
		title: "Manpower",
		image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200",
		short: "Reliable construction workforce.",
		full: "Reliable construction manpower to support projects of any size including demolition, cleaning, material handling and general site assistance."
	}
];

export default function ServicesSection() {

	const [open, setOpen] = useState(null);

	return (

		<section id="services" className="svcNew">

			<div className="svcContainer">

				{/* HEADER */}

				<div className="svcHeader">

					<div className="svcHeaderText">

						<span className="svcEyebrow">
							OUR SERVICES
						</span>

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

				{/* GRID */}

				<div className="svcGrid">

					{services.map((service, i) => {

						const isOpen = open === i;

						return (

							<motion.div
								key={i}
								className={`svcCard ${isOpen ? "open" : ""}`}
								onClick={() => setOpen(isOpen ? null : i)}
								whileHover={{ y: -6 }}
								transition={{ type: "spring", stiffness: 300, damping: 24 }}
							>

								<div className="svcImage">
									<img src={service.image} alt={service.title} />
								</div>

								<div className="svcContent">

									<h3>{service.title}</h3>

									<p className="svcShort">
										{service.short}
									</p>

									{isOpen && (
										<motion.p
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											className="svcFull"
										>
											{service.full}
										</motion.p>
									)}

									<span className="svcMore">
										{isOpen ? "Show less" : "Learn more"}
										<ArrowRight size={16} />
									</span>

								</div>
							</motion.div>
						)
					})}
				</div>
			</div>
		</section>
	);
}
