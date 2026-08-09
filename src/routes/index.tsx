import { createFileRoute, Link } from "@tanstack/react-router";
import { media, site, works, styles, timeline, waLink } from "@/content/site";
import { Reveal } from "@/components/site/Reveal";
import { LazyVideo } from "@/components/site/LazyVideo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ronald Ladino — Realismo & Black and Grey | Bucaramanga" },
      {
        name: "description",
        content:
          "Ronald Ladino, tatuador colombiano con más de 13 años de experiencia en realismo y black & grey. Portfolio, estudio y reservas en Bucaramanga.",
      },
      { property: "og:title", content: "Ronald Ladino — Realismo & Black and Grey" },
      { property: "og:description", content: "Portfolio del artista y su universo visual." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const signature = works.filter((w) => w.signature);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <LazyVideo
          src={media.videoHero}
          poster={media.studioPhoto}
          priority
          label="Ronald Ladino tatuando en su estudio"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-obsidian/70" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-5 pb-16 md:px-10 md:pb-20">
          <p className="eyebrow">Est. 2018 · Bucaramanga, Colombia</p>
          <h1 className="display mt-5 text-[15vw] leading-[0.82] md:text-[9vw]">
            Ronald
            <br />
            Ladino
          </h1>
          <div className="mt-8 grid gap-8 border-t border-border pt-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-md text-sm leading-relaxed text-light-smoke">
              Realismo y black & grey sobre piel. Más de 13 años construyendo textura, contraste y
              detalle que resiste el paso del tiempo.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={waLink(site.whatsappArtist, "Hola Ronald, quiero cotizar un tatuaje.")}
                target="_blank"
                rel="noreferrer"
                className="border border-foreground bg-foreground px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-background transition-opacity hover:opacity-80"
              >
                Reservar sesión
              </a>
              <Link
                to="/work"
                className="border border-border px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-light-smoke transition-colors hover:border-foreground hover:text-foreground"
              >
                Ver obra
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE WORKS */}
      <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-6">
            <div>
              <p className="eyebrow">Signature Works</p>
              <h2 className="display mt-4 text-5xl md:text-7xl">Obras que definen</h2>
            </div>
            <Link to="/work" className="text-[0.7rem] uppercase tracking-[0.22em] text-metal hover:text-foreground">
              Portfolio completo
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {signature.map((w, i) => (
            <Reveal key={w.slug} delay={i * 120} className={i === 0 ? "md:col-span-2" : ""}>
              <Link to="/works/$slug" params={{ slug: w.slug }} className="group block">
                <div className={`overflow-hidden bg-smoke ${i === 0 ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
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
                  <h3 className="display text-2xl">{w.title}</h3>
                  <span className="text-[0.65rem] uppercase tracking-[0.22em] text-metal">
                    {w.style} · {w.year}
                  </span>
                </div>
                <p className="mt-2 max-w-lg text-sm text-metal">{w.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ARTIST STATEMENT */}
      <section className="border-y border-border bg-obsidian px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-[1fr_1.1fr] md:items-center">
          <Reveal>
            <img
              src={media.artistWorking}
              alt="Ronald Ladino tatuando un hombro en su estudio"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={140}>
            <p className="eyebrow">The Art of Ronald Ladino</p>
            <h2 className="display mt-5 text-4xl leading-[0.95] md:text-6xl">
              La piel no perdona la improvisación
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-light-smoke md:text-base">
              <p>
                Trabajo el realismo como quien construye volumen: primero la masa de sombra, después
                el rango medio, al final la luz. Nada se agrega al azar y nada se corrige después.
              </p>
              <p>
                Cada pieza tiene que verse igual de sólida el día uno y diez años más tarde. Por eso
                el black & grey exige control absoluto de saturación, profundidad y transición.
              </p>
              <p className="text-metal">
                Arte, pasión y perfección no son un eslogan: son el orden en que trabajo.
              </p>
            </div>
            <Link
              to="/artist"
              className="mt-10 inline-flex border border-border px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-light-smoke hover:border-foreground hover:text-foreground"
            >
              Conocer al artista
            </Link>
          </Reveal>
        </div>
      </section>

      {/* STYLES */}
      <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="eyebrow">Estilos</p>
          <h2 className="display mt-4 text-5xl md:text-7xl">Dos lenguajes</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {styles.map((s, i) => (
            <Reveal key={s.slug} delay={i * 120}>
              <Link to="/styles/$slug" params={{ slug: s.slug }} className="group block">
                <div className="aspect-[3/2] overflow-hidden bg-smoke">
                  <img
                    src={s.cover}
                    alt={`Estilo ${s.name}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover grayscale transition-all duration-[1.2s] group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                </div>
                <h3 className="display mt-5 text-3xl">{s.name}</h3>
                <p className="mt-2 max-w-md text-sm text-metal">{s.short}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-t border-border px-5 py-24 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="eyebrow">Trayectoria</p>
          </Reveal>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 60}>
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-6 py-6">
                  <span className="display text-2xl text-metal md:text-3xl">{t.year}</span>
                  <p className="text-sm text-light-smoke md:text-base">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO FILM */}
      <section className="relative h-[80svh] overflow-hidden">
        <LazyVideo
          src={media.videoStudio}
          poster={media.studioPhoto}
          label="Interior de LADINO Tattoo Studio"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/60" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-5 pb-16 md:px-10">
          <p className="eyebrow">The Studio</p>
          <h2 className="display mt-4 text-5xl md:text-7xl">LADINO Tattoo Studio</h2>
          <p className="mt-4 max-w-md text-sm text-light-smoke">
            Un espacio diseñado para sesiones largas: control de luz, higiene y equipo profesional.
            También casa del Supply para tatuadores de la región.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/studio" className="border border-foreground px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] hover:bg-foreground hover:text-background">
              Ver el estudio
            </Link>
            <Link to="/supply" className="border border-border px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-light-smoke hover:border-foreground hover:text-foreground">
              Supply
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
