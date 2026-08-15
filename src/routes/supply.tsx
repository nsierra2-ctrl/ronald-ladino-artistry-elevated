import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { site, waLink } from "@/content/site";
import { cop, productCategories, products, type Product } from "@/content/products";
import { Reveal } from "@/components/site/Reveal";
import { useCart } from "@/components/site/useCart";
import { LazyVideo } from "@/components/site/LazyVideo";

export const Route = createFileRoute("/supply")({
  head: () => ({
    meta: [
      { title: "Supply — Insumos profesionales | Ladino Tattoo Studio" },
      {
        name: "description",
        content:
          "Máquinas, cartuchos, tintas, sets y cremas de cuidado para tatuadores profesionales. Pedidos directos por WhatsApp desde Bucaramanga.",
      },
      { property: "og:title", content: "Supply — Ladino Tattoo Studio" },
      { property: "og:description", content: "Máquinas, cartuchos, tintas y cuidado profesional para tatuadores." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/supply" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/supply" }],
  }),
  component: SupplyPage,
});

function SupplyPage() {
  const [active, setActive] = useState<string>("Todo");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const cart = useCart();

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(
      (p) =>
        (active === "Todo" || p.category === active) &&
        (!q || p.name.toLowerCase().includes(q) || p.note.toLowerCase().includes(q)),
    );
  }, [active, query]);

  const checkout = () => {
    const body = cart.lines
      .map((l) => `• ${l.name} — ${l.variant} x${l.qty} — ${cop(l.price * l.qty)}`)
      .join("\n");
    return waLink(
      site.whatsappStudio,
      `Hola LADINO Supply, quiero pedir:\n\n${body}\n\nTotal: ${cop(cart.total)}`,
    );
  };

  return (
    <section className="mx-auto max-w-[1600px] px-5 pb-32 pt-32 md:px-10 md:pt-44">
      <Reveal>
        <p className="eyebrow">Ecosistema Ladino</p>
        <h1 className="display mt-4 text-6xl md:text-8xl">Supply</h1>
        <p className="mt-6 max-w-xl text-sm text-metal">
          Máquinas, cartuchos, tintas y cuidado seleccionados con el mismo criterio con el que
          trabajamos la piel. Arma tu pedido y lo cerramos por WhatsApp.
        </p>
      </Reveal>

      {/* Filtros */}
      <div className="sticky top-16 z-30 mt-14 -mx-5 border-b border-border bg-background/85 px-5 py-4 backdrop-blur md:-mx-10 md:px-10">
        <div className="flex flex-wrap items-center gap-2">
          {["Todo", ...productCategories].map((c) => (
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
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar producto…"
            aria-label="Buscar producto"
            className="ml-auto w-full max-w-[240px] border border-border bg-transparent px-4 py-2 text-xs text-foreground outline-none placeholder:text-metal focus:border-foreground"
          />
        </div>
      </div>

      <div className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((p, i) => (
          <Reveal key={p.slug + p.variants[0]!.label} delay={Math.min(i, 8) * 60}>
            <ProductCard product={p} onAdd={cart.add} />
          </Reveal>
        ))}
      </div>

      {items.length === 0 && (
        <p className="mt-20 text-center text-sm text-metal">No encontramos productos con ese criterio.</p>
      )}

      {/* Botón flotante del carrito */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-3 border border-foreground bg-foreground px-6 py-4 text-[0.65rem] uppercase tracking-[0.22em] text-background shadow-2xl transition-transform hover:scale-[1.03]"
      >
        Carrito
        <span className="inline-flex h-6 min-w-6 items-center justify-center border border-background/40 px-1 text-[0.7rem]">
          {cart.count}
        </span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Carrito">
          <div className="absolute inset-0 bg-black/80" onClick={() => setOpen(false)} />
          <aside className="relative flex h-full w-full max-w-md flex-col border-l border-border bg-background">
            <header className="flex items-center justify-between border-b border-border px-6 py-5">
              <p className="eyebrow">Tu pedido</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-[0.7rem] uppercase tracking-[0.22em] text-metal hover:text-foreground"
              >
                Cerrar
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {cart.lines.length === 0 && <p className="text-sm text-metal">Aún no has agregado productos.</p>}
              {cart.lines.map((l) => (
                <div key={l.key} className="border-b border-border py-5">
                  <div className="flex justify-between gap-4">
                    <div>
                      <p className="display text-lg leading-tight">{l.name}</p>
                      <p className="mt-1 text-[0.7rem] uppercase tracking-[0.18em] text-metal">{l.variant}</p>
                    </div>
                    <p className="display text-base">{cop(l.price * l.qty)}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <button
                      type="button"
                      aria-label="Quitar una unidad"
                      onClick={() => cart.setQty(l.key, l.qty - 1)}
                      className="h-8 w-8 border border-border hover:border-foreground"
                    >
                      –
                    </button>
                    <span className="w-6 text-center text-sm">{l.qty}</span>
                    <button
                      type="button"
                      aria-label="Agregar una unidad"
                      onClick={() => cart.setQty(l.key, l.qty + 1)}
                      className="h-8 w-8 border border-border hover:border-foreground"
                    >
                      +
                    </button>
                    <button
                      type="button"
                      onClick={() => cart.setQty(l.key, 0)}
                      className="ml-auto text-[0.65rem] uppercase tracking-[0.2em] text-metal hover:text-foreground"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <footer className="border-t border-border px-6 py-6">
              <div className="flex items-baseline justify-between">
                <p className="eyebrow">Total</p>
                <p className="display text-2xl">{cop(cart.total)}</p>
              </div>
              <a
                href={cart.lines.length ? checkout() : undefined}
                target="_blank"
                rel="noreferrer"
                aria-disabled={cart.lines.length === 0}
                className={`mt-5 flex justify-center border border-foreground px-6 py-4 text-[0.65rem] uppercase tracking-[0.22em] transition-colors ${
                  cart.lines.length
                    ? "bg-foreground text-background hover:bg-transparent hover:text-foreground"
                    : "pointer-events-none opacity-40"
                }`}
              >
                Finalizar por WhatsApp
              </a>
              {cart.lines.length > 0 && (
                <button
                  type="button"
                  onClick={cart.clear}
                  className="mt-3 w-full text-[0.65rem] uppercase tracking-[0.2em] text-metal hover:text-foreground"
                >
                  Vaciar carrito
                </button>
              )}
            </footer>
          </aside>
        </div>
      )}
    </section>
  );
}

function ProductCard({
  product,
  onAdd,
}: {
  product: Product;
  onAdd: (l: { slug: string; name: string; variant: string; price: number }) => void;
}) {
  const [variant, setVariant] = useState(product.variants[0]!);
  const [added, setAdded] = useState(false);
  const video = product.media.find((m) => m.type === "video");
  const extra = product.media.filter((m) => m.type === "image");
  const [shown, setShown] = useState<string>(product.image);

  return (
    <article className="group flex h-full flex-col border border-border transition-colors hover:border-foreground/60">
      <div className="relative aspect-square overflow-hidden bg-smoke">
        {video ? (
          <LazyVideo src={video.src} poster={product.image} label={video.alt} className="h-full w-full object-cover" />
        ) : (
          <img
            src={shown}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
      </div>

      {extra.length > 0 && (
        <div className="flex gap-2 border-b border-border p-3">
          {[product.image, ...extra.map((m) => m.src)].map((src) => (
            <button
              key={src}
              type="button"
              onClick={() => setShown(src)}
              className={`h-12 w-12 overflow-hidden border ${shown === src ? "border-foreground" : "border-border"}`}
              aria-label={`Ver imagen de ${product.name}`}
            >
              <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{product.category}</p>
        <h2 className="display mt-3 text-xl leading-tight">{product.name}</h2>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-metal">{product.note}</p>

        {product.variants.length > 1 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {product.variants.map((v) => (
              <button
                key={v.label}
                type="button"
                onClick={() => setVariant(v)}
                className={`border px-3 py-1.5 text-[0.6rem] uppercase tracking-[0.16em] transition-colors ${
                  variant.label === v.label
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-metal hover:border-foreground hover:text-foreground"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        )}

        <p className="display mt-5 text-2xl">{cop(variant.price)}</p>
        {product.variants.length === 1 && (
          <p className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-metal">{variant.label}</p>
        )}

        <button
          type="button"
          onClick={() => {
            onAdd({ slug: product.slug, name: product.name, variant: variant.label, price: variant.price });
            setAdded(true);
            setTimeout(() => setAdded(false), 1200);
          }}
          className="mt-6 border border-foreground px-6 py-3 text-[0.65rem] uppercase tracking-[0.22em] transition-colors hover:bg-foreground hover:text-background"
        >
          {added ? "Agregado ✓" : "Agregar al carrito"}
        </button>
      </div>
    </article>
  );
}
