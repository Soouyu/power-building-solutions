import { lazy, Suspense, useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroAnimation from "@/components/IntroAnimation";

import AOS from "aos";
import "aos/dist/aos.css";

// Secciones below-fold: cargadas en chunks paralelos independientes
const AboutSection    = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const TrustedBy       = lazy(() => import("@/components/TrustedBy"));
const QuoteSection    = lazy(() => import("@/components/QuoteSection"));
const Footer          = lazy(() => import("@/components/Footer"));

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (showIntro) return;

    AOS.init({
      once: true,
      duration: 750,          // reducido de 900 → animaciones más ágiles
      easing: "ease-out-cubic",
      offset: 100,
    });

    // Un solo refresh diferido es suficiente
    const t = window.setTimeout(() => AOS.refreshHard(), 200);
    const onResize = () => AOS.refresh();
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", onResize);
    };
  }, [showIntro]);

  return (
    <div className="min-h-screen">
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}

      <Header />

      <main>
        {/* HeroSection es above-fold → eager; ready dispara el fondo al terminar intro */}
        <HeroSection ready={!showIntro} />

        {/* Below-fold → lazy chunks, fallback null para evitar layout shift */}
        <Suspense fallback={null}>
          <AboutSection />
          <ServicesSection />
          <TrustedBy />
          <QuoteSection />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
