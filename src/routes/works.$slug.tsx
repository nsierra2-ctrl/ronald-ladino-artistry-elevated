import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { site, waLink, works } from "@/content/site";
import { Reveal } from "@/components/site/Reveal";
import { LazyVideo } from "@/components/site/LazyVideo";
import { ZoomImage } from "@/components/site/ZoomImage";

export const Route = createFileRoute("/works/$slug")({
  loader: ({ params }) => {
    const work = works.find((w) => w.slug === params.slug);
    if (!work) throw notFound();
    return { work };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Obra no encontrada" }, { name: "robots", content: "noindex" }] };
    }
    const w = loaderData.work;
    return {
      meta: [
        { title: `${w.title} — ${w.style} | Ronald Ladino` },
        { name: "description", content: w.excerpt },
        { property: "og:title", content: `${w.title} — Ronald Ladino` },
        { property: "og:description", content: w.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/works/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/works/${params.slug}` }],
    };
  },
  component: WorkDetail,
});

function WorkDetail() {
  const { work } = Route.useLoaderData();

  return (
    <article className="mx-auto max-w-[1600px] px-5 pb-28 pt-32 md:px-10 md:pt-40">
      <Link to="/work" className="text-[0.7rem] uppercase tracking-[0.22em] text-metal hover:text-foreground">
        ← Obra
      </Link>

      <header className="mt-8 grid gap-8 border-b border-border pb-10 md:grid-cols-[1.3fr_1fr] md:items-end">
        <div>
          <p className="eyebrow">{work.style}</p>
          <h1 className="display mt-4 text-6xl md:text-8xl">{work.title}</h1>
        </div>
        <dl className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <dt className="eyebrow">Zona</dt>
            <dd className="mt-2 text-light-smoke">{work.zone}</dd>
          </div>
          <div>
            <dt className="eyebrow">Sesiones</dt>
            <dd className="mt-2 text-light-smoke">{work.sessions}</dd>
          </div>
          <div>
            <dt className="eyebrow">Año</dt>
            <dd className="mt-2 text-light-smoke">{work.year}</dd>
          </div>
          <div>
            <dt className="eyebrow">Estilo</dt>
            <dd className="mt-2">
              <Link to="/styles/$slug" params={{ slug: work.styleSlug }} className="text-light-smoke underline-offset-4 hover:underline">
                {work.style}
              </Link>
            </dd>
          </div>
        </dl>
      </header>

      <Reveal className="mt-12">
        {work.cover.type === "image" ? (
          <ZoomImage src={work.cover.src} alt={work.cover.alt} className="aspect-[4/5] md:aspect-[16/9]" />
        ) : (
          <LazyVideo
            src={work.cover.src}
            priority
            label={work.cover.alt}
            className="aspect-[9/16] w-full bg-smoke object-cover md:aspect-[16/9]"
          />
        )}
      </Reveal>

      <div className="mt-16 grid gap-12 md:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <p className="text-base leading-relaxed text-light-smoke md:text-lg">{work.description}</p>
        </Reveal>
        <Reveal delay={120}>
          <div className="border border-border p-8">
            <p className="eyebrow">Reserva</p>
            <h2 className="display mt-4 text-3xl">Book a tattoo</h2>
            <p className="mt-3 text-sm text-metal">
              Escríbenos mencionando esta pieza y recibirás valoración y disponibilidad.
            </p>
            <a
              href={waLink(site.whatsappArtist, `Hola Ronald, me interesa una pieza como "${work.title}". Quiero cotizar.`)}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex bg-foreground px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-background transition-opacity hover:opacity-80"
            >
              Reservar esta pieza
            </a>
          </div>
        </Reveal>
      </div>

      {work.gallery.length > 0 && (
        <section className="mt-20">
          <p className="eyebrow border-b border-border pb-4">Galería · proceso y close-ups</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {work.gallery.map((m, i) => (
              <Reveal key={`${m.src}-${i}`} delay={i * 100}>
                {m.type === "image" ? (
                  <ZoomImage src={m.src} alt={m.alt} className="aspect-[4/5]" />
                ) : (
                  <LazyVideo src={m.src} label={m.alt} className="aspect-[9/16] w-full bg-smoke object-cover" />
                )}
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
