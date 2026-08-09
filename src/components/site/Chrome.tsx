import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { nav, site, waLink } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-[minmax(0,1fr)_auto] items-center gap-6 px-5 py-4 md:px-10">
        <Link to="/" className="display min-w-0 truncate text-lg tracking-[0.18em] md:text-xl">
          Ronald Ladino
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.7rem] uppercase tracking-[0.22em] text-light-smoke transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={waLink(site.whatsappArtist, "Hola Ronald, quiero cotizar un tatuaje.")}
            target="_blank"
            rel="noreferrer"
            className="border border-foreground px-5 py-2 text-[0.7rem] uppercase tracking-[0.22em] transition-colors hover:bg-foreground hover:text-background"
          >
            Reservar
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="text-[0.7rem] uppercase tracking-[0.22em] lg:hidden"
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 py-8 lg:hidden">
          <nav className="flex flex-col gap-6">
            {nav.map((item) => (
              <Link key={item.to} to={item.to} className="display text-3xl">
                {item.label}
              </Link>
            ))}
            <a
              href={waLink(site.whatsappArtist, "Hola Ronald, quiero cotizar un tatuaje.")}
              target="_blank"
              rel="noreferrer"
              className="display text-3xl text-metal"
            >
              Reservar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-obsidian px-5 py-16 md:px-10">
      <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="display text-3xl">Ronald Ladino</p>
          <p className="mt-3 max-w-xs text-sm text-metal">{site.tagline}</p>
        </div>
        <div className="space-y-2 text-sm text-light-smoke">
          <p className="eyebrow mb-4">Estudio</p>
          <p>{site.studio}</p>
          <p className="text-metal">{site.address}</p>
          <p className="text-metal">{site.hours}</p>
        </div>
        <div className="space-y-2 text-sm text-light-smoke">
          <p className="eyebrow mb-4">Contacto</p>
          <a className="block hover:text-foreground" href={waLink(site.whatsappArtist, "Hola Ronald, quiero cotizar un tatuaje.")} target="_blank" rel="noreferrer">
            WhatsApp citas · +57 315 4637845
          </a>
          <a className="block hover:text-foreground" href={waLink(site.whatsappStudio, "Hola, quiero información del estudio.")} target="_blank" rel="noreferrer">
            WhatsApp estudio · +57 323 2914158
          </a>
          <a className="block hover:text-foreground" href={site.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </div>
      <p className="mx-auto mt-16 max-w-[1600px] text-[0.65rem] uppercase tracking-[0.28em] text-metal">
        © {new Date().getFullYear()} Ronald Ladino — {site.city}
      </p>
    </footer>
  );
}
