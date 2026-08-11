import { createFileRoute, Link } from "@tanstack/react-router";
import { media, site, timeline, artistGallery, reels, waLink } from "@/content/site";
import { Reveal } from "@/components/site/Reveal";
import { LazyVideo } from "@/components/site/LazyVideo";


export const Route = createFileRoute("/artist")({
  head: () => ({
    meta: [
      { title: "El Artista — Ronald Ladino" },
      {
        name: "description",
        content:
          "Biografía, trayectoria, especialidades y reconocimientos de Ronald Ladino, tatuador de realismo y black & grey.",
      },
      { property: "og:title", content: "El Artista — Ronald Ladino" },
      { property: "og:description", content: "13 años de trayectoria en realismo y black & grey." },
      { property: "og:url", content: "/artist" },
    ],
    links: [{ rel: "canonical", href: "/artist" }],
  }),
  component: ArtistPage,
});

const specialties = [
  "Realismo y retrato",
  "Black & grey",
  "Piezas de gran escala",
  "Espalda completa y mangas",
  "Cover-ups",
  "Sesiones extendidas",
];

function ArtistPage() {
  return (
    <>
      <section className="mx-auto grid max-w-[1600px] gap-12 px-5 pt-32 md:grid-cols-[1.1fr_1fr] md:items-end md:px-10 md:pt-44">
        <Reveal>
          <p className="eyebrow">El artista</p>
          <h1 className="display mt-4 text-6xl leading-[0.85] md:text-8xl">
            Ronald
            <br />
            Ladino
          </h1>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-light-smoke">
            Tatuador colombiano radicado en Bucaramanga. Más de 13 años de trabajo continuo sobre
            piel lo han posicionado como un referente del realismo y el black & grey en la región,
            con proyectos y sesiones en Colombia y el exterior.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <img
            src={media.artistPortrait}
            alt="Retrato de Ronald Ladino trabajando"
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover"
          />
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <img
              src={media.artistWorking}
              alt="Ronald Ladino tatuando un hombro"
              loading="lazy"
              decoding="async"
              className="aspect-[3/4] w-full object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="eyebrow">Biografía</p>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-light-smoke md:text-base">
              <p>
                Su carrera empezó como la de casi todos: horas de práctica, error y corrección. Con
                el tiempo, esa disciplina se convirtió en un método propio para leer la piel antes
                de tocarla y planear cada pieza en función de la anatomía de quien la lleva.
              </p>
              <p>
                Hoy dirige LADINO Tattoo Studio (antes Merakiink), en el sector de Sotomayor. El
                espacio funciona como estudio de alta gama y como tattoo supply para otros artistas
                de la región.
              </p>
              <p>
                Es artista patrocinado por DKLab Official y Proton Stencil Latam, y ha sido invitado
                a la México Tattoo Convention y a ExpoTatuaje Medellín. Su comunidad supera los
                139.000 seguidores en Instagram, donde comparte procesos y cicatrizaciones reales.
              </p>
            </div>

            <div className="mt-12">
              <p className="eyebrow">Especialidades</p>
              <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                {specialties.map((s) => (
                  <li key={s} className="border-b border-border pb-3 text-sm text-light-smoke">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALERÍA EDITORIAL DEL ARTISTA */}
      <section className="border-y border-border bg-obsidian px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="eyebrow">Detrás de la máquina</p>
            <h2 className="display mt-4 text-4xl md:text-6xl">El oficio, día a día</h2>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {artistGallery.map((g, i) => (
              <Reveal key={g.src + i} delay={i * 90}>
                <figure className="group relative overflow-hidden bg-smoke">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/4] w-full object-cover grayscale transition-all duration-[1.4s] ease-out group-hover:scale-[1.05] group-hover:grayscale-0"
                  />
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian/90 to-transparent p-4 text-[0.65rem] uppercase tracking-[0.22em] text-light-smoke">
                    {g.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {reels.slice(0, 2).map((r, i) => (
              <Reveal key={r.src + i} delay={i * 120}>
                <div className="group relative aspect-video overflow-hidden bg-smoke">
                  <LazyVideo
                    src={r.src}
                    label={r.label}
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
                  <p className="pointer-events-none absolute bottom-4 left-4 eyebrow">{r.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      <section className="border-t border-border px-5 py-24 md:px-10">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="eyebrow">Timeline</p>
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
          <div className="mt-16 flex flex-wrap gap-3">
            <a
              href={waLink(site.whatsappArtist, "Hola Ronald, quiero cotizar un tatuaje.")}
              target="_blank"
              rel="noreferrer"
              className="btn-solid"
            >
              <span>Reservar con Ronald</span>
            </a>
            <Link to="/work" className="btn-ghost">
              <span>Ver su obra</span>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
