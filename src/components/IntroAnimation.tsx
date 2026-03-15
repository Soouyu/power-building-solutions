import { useEffect, useRef, useState } from "react";
import { PLANO_SVG } from "@/assets/intro/plano-inline";

type Props = { onFinish?: () => void };

export default function IntroAnimation({ onFinish }: Props) {
  const [hide, setHide] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar móvil
    setIsMobile(window.innerWidth <= 768);

    // Prevenir scroll
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = "0";
    document.body.style.left = "0";

    // Tiempo más corto en móvil
    const duration = window.innerWidth <= 768 ? 3000 : 5000;

    const timer = setTimeout(() => {
      setHide(true);
      setTimeout(() => {
        // Restaurar scroll
        document.body.style.overflow = "";
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.top = "";
        document.body.style.left = "";
        onFinish?.();
      }, 800);
    }, duration);

    // Iniciar animación
    if (rootRef.current) {
      rootRef.current.classList.add("is-playing");
    }

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
      <div
        className="pws-introPlan"
        dangerouslySetInnerHTML={{ __html: PLANO_SVG }}
      />
    </div>
  );
}
