// src/lib/aos.ts
type AosOpts = {
  delay?: number;
  duration?: number;
  once?: boolean;
  anchor?: string; // selector, ej: "#abxStage"
  offset?: number;
  easing?: string;
  anchorPlacement?: string;
};

export const aosIn = (name: string, opts: AosOpts = {}) => {
  const {
    delay,
    duration,
    once,
    anchor,
    offset,
    easing,
    anchorPlacement,
  } = opts;

  return {
    "data-aos": name,
    ...(delay != null ? { "data-aos-delay": String(delay) } : {}),
    ...(duration != null ? { "data-aos-duration": String(duration) } : {}),
    ...(once != null ? { "data-aos-once": String(once) } : {}),
    ...(offset != null ? { "data-aos-offset": String(offset) } : {}),
    ...(easing != null ? { "data-aos-easing": easing } : {}),
    ...(anchor != null ? { "data-aos-anchor": anchor } : {}),
    ...(anchorPlacement != null
      ? { "data-aos-anchor-placement": anchorPlacement }
      : {}),
  } as const;
};

// Stagger: te genera props para items con delay escalonado
export const aosStagger = (
  name: string,
  index: number,
  opts: AosOpts & { start?: number; step?: number } = {}
) => {
  const start = opts.start ?? 0;
  const step = opts.step ?? 90;
  return aosIn(name, { ...opts, delay: start + index * step });
};
