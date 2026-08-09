import logo from "@/assets/logo.asset.json";
import workLions from "@/assets/work-lions.asset.json";
import studioPhoto from "@/assets/studio.asset.json";
import artistWorking from "@/assets/artist-1.asset.json";
import artistPortrait from "@/assets/artist-2.asset.json";
import videoHero from "@/assets/video-hero.asset.json";
import videoEspalda from "@/assets/video-espalda.asset.json";
import videoNatural from "@/assets/video-natural.asset.json";
import videoStudio from "@/assets/video-studio.asset.json";

export const media = {
  logo: logo.url,
  workLions: workLions.url,
  studioPhoto: studioPhoto.url,
  artistWorking: artistWorking.url,
  artistPortrait: artistPortrait.url,
  videoHero: videoHero.url,
  videoEspalda: videoEspalda.url,
  videoNatural: videoNatural.url,
  videoStudio: videoStudio.url,
};

export const site = {
  name: "Ronald Ladino",
  tagline: "Arte · Pasión · Perfección",
  studio: "LADINO Tattoo Studio",
  city: "Bucaramanga, Colombia",
  address: "Carrera 26A # 51-11, Edificio Quirón 1, Local 4 — Sotomayor",
  hours: "Lunes a sábado · 10:00 AM – 7:00 PM",
  whatsappArtist: "573154637845",
  whatsappStudio: "573232914158",
  instagram: "https://www.instagram.com/ronaldladino",
};

export const nav = [
  { label: "Obra", to: "/work" },
  { label: "Artista", to: "/artist" },
  { label: "Estilos", to: "/styles" },
  { label: "Supply", to: "/supply" },
  { label: "Estudio", to: "/studio" },
];

export type MediaItem = { type: "image" | "video"; src: string; alt: string };

export type Work = {
  slug: string;
  title: string;
  style: string;
  styleSlug: string;
  year: string;
  zone: string;
  sessions: string;
  excerpt: string;
  description: string;
  cover: MediaItem;
  scale: "full" | "half" | "tall";
  signature: boolean;
  gallery: MediaItem[];
};

export const works: Work[] = [
  {
    slug: "leones-espalda-completa",
    title: "Familia de Leones",
    style: "Realismo",
    styleSlug: "realismo",
    year: "2025",
    zone: "Espalda completa",
    sessions: "2 sesiones extendidas",
    excerpt: "Espalda completa en realismo black & grey, resuelta en dos días de trabajo continuo.",
    description:
      "Una composición de cuatro retratos animales construida sobre la anatomía de la espalda. El trabajo prioriza el contraste profundo, la textura del pelaje y la transición limpia entre luces y sombras. Cada mirada fue tratada de forma independiente para conservar su propia carga emocional dentro de un mismo relato.",
    cover: { type: "image", src: media.workLions, alt: "Tatuaje realista de familia de leones en espalda completa" },
    scale: "full",
    signature: true,
    gallery: [
      { type: "image", src: media.workLions, alt: "Vista completa de la espalda tatuada con leones" },
      { type: "video", src: media.videoEspalda, alt: "Proceso de la espalda realizada en dos días" },
    ],
  },
  {
    slug: "cicatrizacion-natural",
    title: "Resultado al Natural",
    style: "Sombras",
    styleSlug: "sombras",
    year: "2025",
    zone: "Brazo completo",
    sessions: "3 sesiones",
    excerpt: "Piel cicatrizada, sin filtros: la prueba real de una técnica de sombras estable en el tiempo.",
    description:
      "El registro de una pieza ya cicatrizada. Sin luz de estudio ni retoque: así se comporta el degradado cuando la saturación y la profundidad de aguja se controlan con precisión sesión tras sesión.",
    cover: { type: "video", src: media.videoNatural, alt: "Video de tatuaje cicatrizado al natural" },
    scale: "half",
    signature: true,
    gallery: [{ type: "video", src: media.videoNatural, alt: "Video del resultado natural" }],
  },
  {
    slug: "sesion-en-estudio",
    title: "Sesión en Estudio",
    style: "Realismo",
    styleSlug: "realismo",
    year: "2026",
    zone: "Hombro y pecho",
    sessions: "Sesión extendida",
    excerpt: "Registro audiovisual de una jornada de trabajo dentro de LADINO Tattoo Studio.",
    description:
      "Cada sesión extendida se planifica como una jornada completa: estencil, bloqueo de masas, construcción de sombra y cierre de detalle. El ritmo de trabajo permite avanzar grandes superficies sin comprometer la piel.",
    cover: { type: "video", src: media.videoHero, alt: "Video de sesión de tatuaje en el estudio" },
    scale: "half",
    signature: false,
    gallery: [
      { type: "video", src: media.videoHero, alt: "Sesión en estudio" },
      { type: "image", src: media.artistWorking, alt: "Ronald Ladino tatuando un hombro" },
    ],
  },
  {
    slug: "detalle-antebrazo",
    title: "Detalle en Antebrazo",
    style: "Sombras",
    styleSlug: "sombras",
    year: "2026",
    zone: "Antebrazo",
    sessions: "1 sesión",
    excerpt: "Trabajo de línea fina y sombra sobre una superficie reducida y de alta curvatura.",
    description:
      "En zonas pequeñas la escala del detalle cambia por completo. El objetivo es mantener legibilidad a distancia y textura al acercarse, con un rango tonal que no se cierre con los años.",
    cover: { type: "image", src: media.artistPortrait, alt: "Ronald Ladino trabajando un detalle en antebrazo" },
    scale: "tall",
    signature: false,
    gallery: [{ type: "image", src: media.artistPortrait, alt: "Detalle de antebrazo en proceso" }],
  },
];

export type Style = {
  slug: string;
  name: string;
  short: string;
  description: string;
  cover: string;
};

export const styles: Style[] = [
  {
    slug: "realismo",
    name: "Realismo",
    short: "Retrato, textura y anatomía llevados a la piel con fidelidad fotográfica.",
    description:
      "El realismo exige leer la piel antes que el diseño. Cada pieza se construye desde el volumen: primero las masas de sombra, después el rango medio y finalmente la luz. El resultado busca sostener el detalle a lo largo del tiempo, no solo el día de la sesión.",
    cover: media.workLions,
  },
  {
    slug: "sombras",
    name: "Sombras · Black & Grey",
    short: "Escala de grises, contraste profundo y degradados que envejecen bien.",
    description:
      "Black & grey es un ejercicio de control. Sin color no hay dónde esconderse: la pieza vive o muere en la transición entre tonos. Trabajamos con saturaciones medidas y profundidades constantes para que el degradado se mantenga limpio después de cicatrizar.",
    cover: media.artistPortrait,
  },
];

export const timeline = [
  { year: "2012", text: "Primeros años de formación técnica y trabajo diario sobre piel." },
  { year: "2018", text: "Fundación del estudio propio, hoy LADINO Tattoo Studio, en Bucaramanga." },
  { year: "2022", text: "Invitación a la México Tattoo Convention y a ExpoTatuaje Medellín." },
  { year: "2024", text: "Artista patrocinado por DKLab Official y Proton Stencil Latam." },
  { year: "2025", text: "Sesiones de formato extendido en Boston, Estados Unidos." },
];

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: string;
  note: string;
};

export const supply = {
  categories: ["Máquinas", "Cartuchos", "Tintas", "Cuidado", "Joyería"],
  products: [
    { slug: "maquina-rotativa", name: "Máquina Rotativa Pro", category: "Máquinas", price: "$1.450.000", note: "Motor silencioso, golpe estable para sesiones largas." },
    { slug: "cartuchos-rl", name: "Cartuchos RL / RS", category: "Cartuchos", price: "$95.000", note: "Caja x20. Membrana de precisión." },
    { slug: "tinta-black", name: "Tinta Black & Grey Set", category: "Tintas", price: "$320.000", note: "Set de 5 diluciones para degradado controlado." },
    { slug: "aftercare", name: "Kit de Cuidado Post-Tatuaje", category: "Cuidado", price: "$78.000", note: "Film, jabón neutro y crema regeneradora." },
    { slug: "joyeria-titanio", name: "Joyería Titanio Implant Grade", category: "Joyería", price: "$120.000", note: "Piezas certificadas para perforación segura." },
    { slug: "proton-stencil", name: "Proton Stencil", category: "Cuidado", price: "$110.000", note: "Fijación de estencil de alta duración." },
  ] as Product[],
};

export const waLink = (number: string, text: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
