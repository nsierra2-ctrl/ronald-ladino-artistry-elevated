import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header, Footer } from "@/components/site/Chrome";
import { site } from "@/content/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display text-7xl">404</h1>
        <p className="mt-4 text-sm text-metal">Esta página no existe o fue movida.</p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex border border-foreground px-6 py-3 text-[0.7rem] uppercase tracking-[0.22em] hover:bg-foreground hover:text-background"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display text-3xl">Algo salió mal</h1>
        <p className="mt-3 text-sm text-metal">Intenta recargar la página.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-foreground px-6 py-3 text-[0.7rem] uppercase tracking-[0.22em] hover:bg-foreground hover:text-background"
          >
            Reintentar
          </button>
          <a href="/" className="border border-border px-6 py-3 text-[0.7rem] uppercase tracking-[0.22em] text-light-smoke">
            Inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ronald Ladino — Tatuador de Realismo y Black & Grey" },
      {
        name: "description",
        content:
          "Portfolio de Ronald Ladino, tatuador colombiano especializado en realismo y black & grey en Bucaramanga.",
      },
      { name: "author", content: "Ronald Ladino" },
      { property: "og:site_name", content: "Ronald Ladino" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Archivo:wght@300;400;500;600&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TattooParlor",
          name: site.studio,
          founder: { "@type": "Person", name: "Ronald Ladino" },
          address: {
            "@type": "PostalAddress",
            streetAddress: site.address,
            addressLocality: "Bucaramanga",
            addressCountry: "CO",
          },
          telephone: "+573154637845",
          openingHours: "Mo-Sa 10:00-19:00",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="min-h-screen">
        {/* Required: nested routes render here. */}
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
