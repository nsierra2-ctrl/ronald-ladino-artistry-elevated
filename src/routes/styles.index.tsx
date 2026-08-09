import { createFileRoute, Link } from "@tanstack/react-router";
import { styles, works } from "@/content/site";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/styles/")({
  head: () => ({
    meta: [
      { title: "Estilos — Realismo y Black & Grey | Ronald Ladino" },
      { name: "description", content: "Los estilos de Ronald Ladino: realismo fotográfico y sombras en escala de grises." },
      { property: "og:title", content: "Estilos — Ronald Ladino" },
      { property: "og:description", content: "Realismo y black & grey." },
      { property: "og:url", content: "/styles" },
    ],
    links: [{ rel: "canonical", href: "/styles" }],
  }),
  component: StylesIndex,
});

function StylesIndex() {
  return (
    <section className="mx-auto max-w-[1600px] px-5 pb-28 pt-32 md:px-10 md:pt-44">
      <Reveal>
        <p className="eyebrow">Estilos</p>
        <h1 className="display mt-4 text-6xl md:text-8xl">Lenguaje visual</h1>
      </Reveal>
      <div className="mt-16 space-y-20">
        {styles.map((s, i) => {
          const count = works.filter((w) => w.styleSlug === s.slug).length;
          return (
            <Reveal key={s.slug} delay={i * 100}>
              <Link to="/styles/$slug" params={{ slug: s.slug }} className="group grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
                <div className="aspect-[16/10] overflow-hidden bg-smoke">
                  <img
                    src={s.cover}
                    alt={`Estilo ${s.name}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]"
                  />
                </div>
                <div>
                  <h2 className="display text-4xl md:text-6xl">{s.name}</h2>
                  <p className="mt-4 max-w-md text-sm text-light-smoke">{s.short}</p>
                  <p className="mt-6 text-[0.65rem] uppercase tracking-[0.22em] text-metal">
                    {count} {count === 1 ? "pieza" : "piezas"} · Ver estilo
                  </p>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
