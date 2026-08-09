import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { site, supply, waLink } from "@/content/site";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/supply")({
  head: () => ({
    meta: [
      { title: "Supply — Insumos profesionales | Ladino Tattoo Studio" },
      {
        name: "description",
        content:
          "Máquinas, cartuchos, tintas, cuidado post-tatuaje y joyería de titanio para tatuadores profesionales en Bucaramanga.",
      },
      { property: "og:title", content: "Supply — Ladino Tattoo Studio" },
      { property: "og:description", content: "Insumos profesionales para tatuadores." },
      { property: "og:url", content: "/supply" },
    ],
    links: [{ rel: "canonical", href: "/supply" }],
  }),
  component: SupplyPage,
});

function SupplyPage() {
  const [active, setActive] = useState<string>("Todo");
  const cats = ["Todo", ...supply.categories];
  const items = active === "Todo" ? supply.products : supply.products.filter((p) => p.category === active);

  return (
    <section className="mx-auto max-w-[1600px] px-5 pb-28 pt-32 md:px-10 md:pt-44">
      <Reveal>
        <p className="eyebrow">Ecosistema Ladino</p>
        <h1 className="display mt-4 text-6xl md:text-8xl">Supply</h1>
        <p className="mt-6 max-w-lg text-sm text-metal">
          Insumos, joyería y productos profesionales seleccionados por el mismo criterio con el que
          trabajamos la piel.
        </p>
      </Reveal>

      <div className="mt-14 flex flex-wrap gap-2 border-b border-border pb-6">
        {cats.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`border px-5 py-2 text-[0.65rem] uppercase tracking-[0.22em] transition-colors ${
              active === c
                ? "border-foreground bg-foreground text-background"
                : "border-border text-metal hover:border-foreground hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p, i) => (
          <Reveal key={p.slug} delay={i * 80}>
            <article className="flex h-full flex-col border border-border p-8">
              <p className="eyebrow">{p.category}</p>
              <h2 className="display mt-4 text-2xl">{p.name}</h2>
              <p className="mt-3 flex-1 text-sm text-metal">{p.note}</p>
              <p className="mt-6 display text-xl">{p.price}</p>
              <a
                href={waLink(site.whatsappStudio, `Hola, quiero pedir: ${p.name}.`)}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex justify-center border border-foreground px-6 py-3 text-[0.65rem] uppercase tracking-[0.22em] hover:bg-foreground hover:text-background"
              >
                Pedir por WhatsApp
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
