import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { site, styles, waLink, works, type Work } from "@/content/site";
import { Reveal } from "@/components/site/Reveal";
import { LazyVideo } from "@/components/site/LazyVideo";

export const Route = createFileRoute("/styles/$slug")({
  loader: ({ params }) => {
    const style = styles.find((s) => s.slug === params.slug);
    if (!style) throw notFound();
    return { style, pieces: works.filter((w) => w.styleSlug === style.slug) };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Estilo no encontrado" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.style;
    return {
      meta: [
        { title: `${s.name} — Ronald Ladino` },
        { name: "description", content: s.short },
        { property: "og:title", content: `${s.name} — Ronald Ladino` },
        { property: "og:description", content: s.short },
        { property: "og:url", content: `/styles/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/styles/${params.slug}` }],
    };
  },
  component: StylePage,
});

function StylePage() {
  const { style, pieces } = Route.useLoaderData() as {
    style: (typeof styles)[number];
    pieces: Work[];
  };

  return (
    <>
      <section className="relative h-[70svh] overflow-hidden">
        <img
          src={style.cover}
          alt={`Estilo ${style.name}`}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-obsidian/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-5 pb-14 md:px-10">
          <Link to="/styles" className="eyebrow hover:text-foreground">
            ← Estilos
          </Link>
          <h1 className="display mt-5 text-6xl md:text-8xl">{style.name}</h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-20 md:px-10">
        <Reveal>
          <p className="max-w-2xl text-base leading-relaxed text-light-smoke md:text-lg">
            {style.description}
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {pieces.map((w, i) => (
            <Reveal key={w.slug} delay={i * 100}>
              <Link to="/works/$slug" params={{ slug: w.slug }} className="group block">
                <div className="aspect-[4/5] overflow-hidden bg-smoke">
                  {w.cover.type === "image" ? (
                    <img
                      src={w.cover.src}
                      alt={w.cover.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-[1.04]"
                    />
                  ) : (
                    <LazyVideo src={w.cover.src} label={w.cover.alt} className="h-full w-full object-cover" />
                  )}
                </div>
                <h2 className="display mt-4 text-2xl">{w.title}</h2>
                <p className="mt-1 text-sm text-metal">{w.zone}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-10">
          <a
            href={waLink(site.whatsappArtist, `Hola Ronald, me interesa un tatuaje en estilo ${style.name}.`)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex bg-foreground px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-background hover:opacity-80"
          >
            Reservar en este estilo
          </a>
        </div>
      </section>
    </>
  );
}
