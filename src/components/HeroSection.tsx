import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroImage from "@/assets/hero-construction.jpg";
import heroVideo from "@/assets/hero-fonder.mp4";

const IMAGE_HOLD_MS = 2500; // 2.5s de imagen antes de reproducir video

const HeroSection = () => {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [showVideo, setShowVideo] = useState(false);

	useEffect(() => {
		let timer: number | undefined;

		const startCycle = () => {
			// 1) mostrar imagen
			setShowVideo(false);

			// 2) esperar y arrancar video
			timer = window.setTimeout(() => {
				setShowVideo(true);

				// arrancar video
				const v = videoRef.current;
				if (v) {
					v.currentTime = 0;
					const p = v.play();
					// en algunos navegadores puede fallar si no está muted, pero lo tenemos muted
					if (p) p.catch(() => { });
				}
			}, IMAGE_HOLD_MS);
		};

		startCycle();

		return () => {
			if (timer) window.clearTimeout(timer);
		};
	}, []);

	const handleEnded = () => {
		setShowVideo(false);
		window.setTimeout(() => {
			setShowVideo(true);
			const v = videoRef.current;
			if (v) {
				v.currentTime = 0;
				const p = v.play();
				if (p) p.catch(() => { });
			}
		}, IMAGE_HOLD_MS);
	};

	return (
		<section className="pws-hero">
			{/* BACKGROUND STACK */}
			<div className="pws-heroBg">
				{/* Imagen (base/final) */}
				<img
					src={heroImage}
					alt="Professional construction site"
					className={`pws-heroMedia ${showVideo ? "is-hidden" : "is-visible"}`}
					loading="eager"
					decoding="async"
				/>

				{/* Video */}
				<video
					ref={videoRef}
					className={`pws-heroMedia ${showVideo ? "is-visible" : "is-hidden"}`}
					src={heroVideo}
					muted
					playsInline
					preload="metadata"
					onEnded={handleEnded}
				/>

				{/* Overlay */}
				<div className="pws-heroOverlay" />
			</div>

			{/* CONTENT */}
			<div className="pws-container pws-heroContent">

				{/* decorative animated icon — right side */}
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
						<Building2 size={52} strokeWidth={1.4} />
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
							<a href="#projects">View Our Work</a>
						</Button>
					</div>

					<div className="pws-in grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-card/20">
						<div>
							<div className="text-3xl md:text-4xl font-bold text-card">8+</div>

							<div className="text-card/70 text-sm md:text-base">Years Experience</div>
						</div>
						<div>
							<div className="text-3xl md:text-4xl font-bold text-card">300+</div>
							<div className="text-card/70 text-sm md:text-base">Projects Completed</div>
						</div>
						<div>
							<div className="text-3xl md:text-4xl font-bold text-card">100%</div>
							<div className="text-card/70 text-sm md:text-base">Client Satisfaction</div>
						</div>
					</div>
				</div>
			</div>


		</section>
	);
};

export default HeroSection;
