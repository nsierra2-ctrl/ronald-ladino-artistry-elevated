import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { LazyVideo } from "@/components/site/LazyVideo";
import type { Work } from "@/content/site";

/** Carrusel editorial horizontal con scroll-snap, flechas y drag. */
export function WorkCarousel({ items }: { items: Work[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [edges, setEdges] = useState({ start: true, end: false });

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    children.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
    setEdges({
      start: el.scrollLeft <= 8,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8,
    });
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      el.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const goTo = (i: number) => {
    const el = trackRef.current;
    const child = el?.children[i] as HTMLElement | undefined;
    if (!el || !child) return;
    el.scrollTo({ left: child.offsetLeft - 8, behavior: "smooth" });
  };

  const step = (dir: 1 | -1) => goTo(Math.min(items.length - 1, Math.max(0, active + dir)));

  return (
    <div className="relative">
      <div
        ref={trackRef}
        role="region"
        aria-label="Carrusel de obras"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
          if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
        }}
        className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 md:gap-6"
      >
        {items.map((w, i) => (
          <article
            key={w.slug}
            className="group w-[82vw] shrink-0 snap-start sm:w-[52vw] lg:w-[38vw] xl:w-[31vw]"
          >
            <Link to="/works/$slug" params={{ slug: w.slug }} className="block">
              <div className="relative aspect-[4/5] overflow-hidden bg-smoke">
                {w.cover.type === "image" ? (
                  <img
                    src={w.cover.src}
                    alt={w.cover.alt}
                    loading={i < 2 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
                  />
                ) : (
                  <LazyVideo
                    src={w.cover.src}
                    label={w.cover.alt}
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
                  />
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/85 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
                  <span className="eyebrow">{String(i + 1).padStart(2, "0")} · {w.zone}</span>
                  <h3 className="display mt-2 text-3xl">{w.title}</h3>
                  <span className="mt-3 inline-block translate-y-2 text-[0.65rem] uppercase tracking-[0.22em] text-light-smoke opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Ver pieza →
                  </span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between gap-6">
        <div className="flex flex-1 gap-1.5">
          {items.map((w, i) => (
            <button
              key={w.slug}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir a ${w.title}`}
              aria-current={i === active}
              className={`h-[2px] flex-1 transition-all duration-500 ${i === active ? "bg-foreground" : "bg-graphite hover:bg-metal"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => step(-1)}
            disabled={edges.start}
            aria-label="Anterior"
            className="flex h-11 w-11 items-center justify-center border border-border text-light-smoke transition-colors hover:border-foreground hover:bg-foreground hover:text-background disabled:opacity-25 disabled:hover:border-border disabled:hover:bg-transparent disabled:hover:text-light-smoke"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => step(1)}
            disabled={edges.end}
            aria-label="Siguiente"
            className="flex h-11 w-11 items-center justify-center border border-border text-light-smoke transition-colors hover:border-foreground hover:bg-foreground hover:text-background disabled:opacity-25 disabled:hover:border-border disabled:hover:bg-transparent disabled:hover:text-light-smoke"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
