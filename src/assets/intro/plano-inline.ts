import { PLANO_BACKGROUND } from "./plano-background";
import { PLANO_LOGO } from "./plano-logo";

function inner(svg: string) {
  return svg
    .replace(/^[\s\S]*?<svg[^>]*>/i, "")
    .replace(/<\/svg>\s*$/i, "");
}

function getViewBox(svg: string) {
  const m = svg.match(/viewBox="([^"]+)"/i);
  return m?.[1] ?? "0 0 1536 1024";
}

const VB = getViewBox(PLANO_BACKGROUND);

export const PLANO_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="${VB}" preserveAspectRatio="xMidYMid meet">
  <g class="pws-bg">
    ${inner(PLANO_BACKGROUND)}
  </g>

  <g class="pws-logo">
    ${inner(PLANO_LOGO)}
  </g>
</svg>
`;
