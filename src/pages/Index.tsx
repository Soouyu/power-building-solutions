
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProjectsSection from "@/components/ProjectsSection";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import IntroAnimation from "@/components/IntroAnimation";
import TrustedBy from "@/components/TrustedBy";

import AOS from "aos";
import "aos/dist/aos.css";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // ⛔ mientras esté el intro, no inicializamos AOS
    if (showIntro) return;

    // ✅ AOS cuando ya se quitó el intro
    AOS.init({
      once: true,
      duration: 900,
      easing: "ease-out-cubic",
      offset: 140,
    });

    // ✅ refrescos (evita glitches)
    const t1 = window.setTimeout(() => AOS.refreshHard(), 120);
    const t2 = window.setTimeout(() => AOS.refreshHard(), 800);

    const onResize = () => AOS.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.removeEventListener("resize", onResize);
    };
  }, [showIntro]);

  return (
    <div className="min-h-screen">
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}

      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TrustedBy />
        <QuoteSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
