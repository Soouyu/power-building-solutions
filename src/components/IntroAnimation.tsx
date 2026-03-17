import { useEffect, useRef, useState } from "react";
import { PLANO_SVG } from "@/assets/intro/plano-inline";
import logoSvg from "@/assets/intro/logo.svg";

type Props = { onFinish?: () => void };

export default function IntroAnimation({ onFinish }: Props) {
  const [hide, setHide] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = window.innerWidth <= 768;
    setIsMobile(mobile);

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = "0";
    document.body.style.left = "0";

    const duration = mobile ? 3600 : 5200;

    // Iniciar animación en el siguiente frame para garantizar montaje
    requestAnimationFrame(() => {
      if (rootRef.current) rootRef.current.classList.add("is-playing");
    });

    const timer = setTimeout(() => {
      setHide(true);
      setTimeout(() => {
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.top = "";
        document.body.style.left = "";
        onFinish?.();
      }, 900);
    }, duration);

    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      document.body.style.left = "";
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div ref={rootRef} className={`pws-intro ${hide ? "is-hide" : ""}`}>
      {/* Fondos compartidos */}
      <div className="pws-grid" aria-hidden="true" />
      <div className="pws-glow" aria-hidden="true" />

      {/* Brackets esquina (compartidos) */}
      <div className="pws-corner pws-corner--tl" aria-hidden="true" />
      <div className="pws-corner pws-corner--tr" aria-hidden="true" />
      <div className="pws-corner pws-corner--bl" aria-hidden="true" />
      <div className="pws-corner pws-corner--br" aria-hidden="true" />

      {isMobile ? (
        /* ── MOBILE / ANDROID ── */
        <>
          {/* plano de fondo (toda la pantalla, baja opacidad) */}
          <div
            className="pws-mPlan"
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: PLANO_SVG }}
          />

          {/* vignette para oscurecer bordes y destacar el centro */}
          <div className="pws-mVignette" aria-hidden="true" />

          {/* scanline igual que desktop */}
          <div className="pws-scan" aria-hidden="true" />

          {/* UI principal encima del plano */}
          <div className="pws-mobile">
            {/* anillos pulsantes detrás del logo */}
            <div className="pws-rings" aria-hidden="true">
              <div className="pws-ring pws-ring--1" />
              <div className="pws-ring pws-ring--2" />
              <div className="pws-ring pws-ring--3" />
            </div>

            {/* logo centrado */}
            <div className="pws-mLogo">
              <img src={logoSvg} alt="Power Building Solutions" className="pws-mLogo-img" />
            </div>

            {/* nombre */}
            <p className="pws-mBrand">GENERAL CONTRACTING SERVICES</p>

            {/* barra de carga */}
            <div className="pws-mBar" aria-hidden="true">
              <div className="pws-mBar-fill" />
            </div>

            {/* puntos de estado */}
            <div className="pws-mDots" aria-hidden="true">
              <div className="pws-mDot" />
              <div className="pws-mDot" />
              <div className="pws-mDot" />
            </div>
          </div>
        </>
      ) : (
        /* ── DESKTOP ── */
        <>
          {/* scanline de escaneo */}
          <div className="pws-scan" aria-hidden="true" />

          {/* plano blueprint */}
          <div
            className="pws-introPlan"
            dangerouslySetInnerHTML={{ __html: PLANO_SVG }}
          />

          {/* barra de progreso inferior */}
          <div className="pws-dBar" aria-hidden="true">
            <div className="pws-dBar-fill" />
          </div>

          {/* label HUD */}
          <div className="pws-hud" aria-hidden="true">
            <span className="pws-hud-dot" />
            <span className="pws-hud-text">GENERAL CONTRACTING SERVICES</span>
            <span className="pws-hud-dot" />
          </div>
        </>
      )}
    </div>
  );
}
