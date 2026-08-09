import { createFileRoute, Link } from "@tanstack/react-router";
import { works } from "@/content/site";
import { Reveal } from "@/components/site/Reveal";
import { LazyVideo } from "@/components/site/LazyVideo";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Obra — Portfolio de Ronald Ladino" },
      { name: "description", content: "Galería editorial de tatuajes en realismo y black & grey de Ronald Ladino." },
      { property: "og:title", content: "Obra — Portfolio de Ronald Ladino" },
      { property: "og:description", content: "Piezas de realismo, sombras y trabajos de gran escala." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

const span: Record<string, string> = {
  full: "md:col-span-8 aspect-[16/10]",
  half: "md:col-span-4 aspect-[3/4]",
  tall: "md:col-span-5 aspect-[4/5]",
};

function WorkPage() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 pb-28 pt-32 md:px-10 md:pt-44">
      <Reveal>
        <p className="eyebrow">Portfolio</p>
        <h1 className="display mt-4 text-6xl md:text-8xl">Obra</h1>
        <p className="mt-6 max-w-lg text-sm text-metal">
          Cada pieza tiene su propia página, su proceso y su historia. Haz click para verla en detalle.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 md:grid-cols-8">
        {works.map((w, i) => (
          <Reveal key={w.slug} delay={i * 100} className={span[w.scale] ?? "md:col-span-4"}>
            <Link to="/works/$slug" params={{ slug: w.slug }} className="group flex h-full flex-col">
              <div className="flex-1 overflow-hidden bg-smoke">
                {w.cover.type === "image" ? (
                  <img
                    src={w.cover.src}
                    alt={w.cover.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                ) : (
                  <LazyVideo
                    src={w.cover.src}
                    label={w.cover.alt}
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                )}
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h2 className="display text-2xl">{w.title}</h2>
                <span className="text-[0.65rem] uppercase tracking-[0.22em] text-metal">{w.style}</span>
              </div>
              <p className="mt-2 text-sm text-metal">{w.zone} · {w.sessions}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
