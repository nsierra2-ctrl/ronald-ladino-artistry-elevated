import { useState } from "react";

/** Zoom viewer: hover-zoom en desktop, fullscreen con click, pinch nativo en mobile. */
export function ZoomImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [origin, setOrigin] = useState("50% 50%");
  const [hover, setHover] = useState(false);
  const [full, setFull] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setFull(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setOrigin(`${((e.clientX - r.left) / r.width) * 100}% ${((e.clientY - r.top) / r.height) * 100}%`);
        }}
        className={`group block w-full cursor-zoom-in overflow-hidden bg-smoke ${className}`}
        aria-label={`Ampliar: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 ease-out"
          style={{ transformOrigin: origin, transform: hover ? "scale(1.28)" : "scale(1)" }}
        />
      </button>

      {full && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setFull(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-h-full max-w-full object-contain"
            style={{ touchAction: "pinch-zoom" }}
          />
          <button
            type="button"
            onClick={() => setFull(false)}
            className="absolute right-5 top-5 text-[0.7rem] uppercase tracking-[0.22em] text-light-smoke hover:text-foreground"
          >
            Cerrar
          </button>
        </div>
      )}
    </>
  );
}
