import { createFileRoute, Link } from "@tanstack/react-router";
import { media, site, waLink } from "@/content/site";
import { Reveal } from "@/components/site/Reveal";
import { LazyVideo } from "@/components/site/LazyVideo";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "El Estudio — LADINO Tattoo Studio, Bucaramanga" },
      {
        name: "description",
        content:
          "LADINO Tattoo Studio en Sotomayor, Bucaramanga: estudio de alta gama y tattoo supply. Lunes a sábado 10:00 a 19:00.",
      },
      { property: "og:title", content: "El Estudio — LADINO Tattoo Studio" },
      { property: "og:description", content: "Un espacio diseñado para sesiones largas de alta precisión." },
      { property: "og:url", content: "/studio" },
    ],
    links: [{ rel: "canonical", href: "/studio" }],
  }),
  component: StudioPage,
});

function StudioPage() {
  return (
    <>
      <section className="relative h-[85svh] overflow-hidden">
        <LazyVideo
          src={media.videoStudio}
          poster={media.studioPhoto}
          priority
          label="Interior de LADINO Tattoo Studio"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-obsidian/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-5 pb-16 md:px-10">
          <p className="eyebrow">The Studio</p>
          <h1 className="display mt-4 text-6xl md:text-8xl">LADINO Tattoo Studio</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-12 px-5 py-24 md:grid-cols-[1.2fr_1fr] md:px-10">
        <Reveal>
          <img
            src={media.studioPhoto}
            alt="Sala de trabajo del estudio con camillas profesionales"
            loading="lazy"
            decoding="async"
            className="aspect-[3/2] w-full object-cover"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">El espacio</p>
          <p className="mt-6 text-sm leading-relaxed text-light-smoke md:text-base">
            Antes conocido como Merakiink, el estudio funciona con estándares de higiene clínicos,
            iluminación controlada y equipos profesionales pensados para jornadas extendidas. Además
            del trabajo de tatuaje, distribuye insumos, joyería fina y productos para tatuadores de
            toda la región.
          </p>
          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="eyebrow">Dirección</dt>
              <dd className="mt-2 text-light-smoke">{site.address}</dd>
            </div>
            <div>
              <dt className="eyebrow">Horario</dt>
              <dd className="mt-2 text-light-smoke">{site.hours} · Domingos cerrado</dd>
            </div>
            <div>
              <dt className="eyebrow">Modalidad</dt>
              <dd className="mt-2 text-light-smoke">Cita previa obligatoria para procedimientos.</dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={waLink(site.whatsappStudio, "Hola, quiero información del estudio.")}
              target="_blank"
              rel="noreferrer"
              className="border border-foreground px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] hover:bg-foreground hover:text-background"
            >
              Escribir al estudio
            </a>
            <Link
              to="/supply"
              className="border border-border px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-light-smoke hover:border-foreground hover:text-foreground"
            >
              Ver Supply
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
