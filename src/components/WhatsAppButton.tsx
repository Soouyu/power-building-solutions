import { useEffect, useState } from "react";
import { BadgeCheck } from "lucide-react";

const WA_NUMBER = "16479179646";
const WA_MESSAGE =
  "Hi! I visited your website and I'd like to get more information about your construction services. Could you help me?";

interface Props { ready?: boolean }

const WhatsAppButton = ({ ready = false }: Props) => {
  const [btnVisible, setBtnVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

  useEffect(() => {
    if (!ready) return;

    // Botón aparece inmediatamente al terminar el intro
    setBtnVisible(true);

    // Contador del hero termina ~3200ms después del intro.
    // Burbuja: 4 s después de que termina el contador → 7200ms total, dura 4 s
    const show = window.setTimeout(() => setShowBubble(true),   7200);
    const hide = window.setTimeout(() => setShowBubble(false), 11200); // 7200 + 4000

    return () => { window.clearTimeout(show); window.clearTimeout(hide); };
  }, [ready]);

  return (
    <div className={`pws-wa-wrap${btnVisible ? " is-ready" : ""}`}>

      {/* Burbuja de mensaje */}
      <div className={`pws-wa-bubble${showBubble ? " is-visible" : ""}`} aria-hidden="true">
        <BadgeCheck size={15} className="pws-wa-bubble-icon" />
        <span>Best services at the best price! Call me!</span>
        <div className="pws-wa-bubble-tail" />
      </div>

      {/* Botón */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="pws-wa-btn"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="pws-wa-icon"
          aria-hidden="true"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.474 2.027 7.782L0 32l8.418-2.004A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0Zm0 29.25a13.21 13.21 0 0 1-6.738-1.843l-.482-.286-4.998 1.19 1.26-4.862-.315-.497A13.21 13.21 0 0 1 2.75 16C2.75 8.682 8.682 2.75 16 2.75S29.25 8.682 29.25 16 23.318 29.25 16 29.25ZM23.2 19.4c-.39-.196-2.31-1.14-2.67-1.27-.36-.13-.62-.195-.88.196-.26.39-1.01 1.27-1.24 1.53-.23.26-.455.293-.845.097-.39-.196-1.648-.607-3.138-1.934-1.16-1.033-1.944-2.31-2.172-2.7-.228-.39-.024-.6.172-.795.176-.175.39-.456.585-.683.195-.228.26-.39.39-.65.13-.26.065-.488-.033-.683-.098-.196-.88-2.114-1.205-2.896-.318-.76-.64-.657-.88-.668l-.748-.013c-.26 0-.683.098-.1041.488-.358.39-1.367 1.336-1.367 3.258 0 1.921 1.4 3.778 1.595 4.038.195.26 2.757 4.21 6.68 5.906.934.403 1.663.644 2.23.824.937.298 1.79.256 2.463.155.751-.112 2.31-.944 2.636-1.856.325-.911.325-1.693.228-1.856-.097-.163-.358-.26-.748-.456Z" />
        </svg>
        <span className="pws-wa-label">WhatsApp</span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
