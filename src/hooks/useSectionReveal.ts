import { useEffect, useRef, useState } from "react";

/**
 * Devuelve un ref y un booleano `inView`.
 * Cuando el elemento entra al viewport se activa una sola vez
 * y el observer se desconecta (once: true).
 */
export function useSectionReveal(rootMargin = "-72px 0px") {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback para SSR / browsers muy antiguos
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);

  return { ref, inView };
}
