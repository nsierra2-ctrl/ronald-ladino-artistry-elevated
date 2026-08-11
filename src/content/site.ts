import logo from "@/assets/logo.asset.json";
import workLions from "@/assets/work-lions.asset.json";
import studioPhoto from "@/assets/studio.asset.json";
import artistWorking from "@/assets/artist-1.asset.json";
import artistPortrait from "@/assets/artist-2.asset.json";
import ronaldPortrait from "@/assets/ronald-portrait.asset.json";
import workPecho from "@/assets/IMG_0858.jpg.asset.json";
import workCuello from "@/assets/IMG_3503.jpg.asset.json";
import workEspaldaA from "@/assets/IMG_4490.jpg.asset.json";
import workEspaldaB from "@/assets/IMG_4509.jpg.asset.json";
import workJaguar from "@/assets/IMG_4728.jpg.asset.json";
import workMangaA from "@/assets/IMG_4739.jpg.asset.json";
import workMangaB from "@/assets/IMG_4743.jpg.asset.json";
import videoHero from "@/assets/video-hero.asset.json";
import videoEspalda from "@/assets/video-espalda.asset.json";
import videoNatural from "@/assets/video-natural.asset.json";
import videoStudio from "@/assets/video-studio.asset.json";
import videoPulpo from "@/assets/video-pulpo.asset.json";

export const media = {
  logo: logo.url,
  workLions: workLions.url,
  studioPhoto: studioPhoto.url,
  artistWorking: artistWorking.url,
  artistPortrait: artistPortrait.url,
  ronaldPortrait: ronaldPortrait.url,
  workPecho: workPecho.url,
  workCuello: workCuello.url,
  workEspaldaA: workEspaldaA.url,
  workEspaldaB: workEspaldaB.url,
  workJaguar: workJaguar.url,
  workMangaA: workMangaA.url,
  workMangaB: workMangaB.url,
  videoHero: videoHero.url,
  videoEspalda: videoEspalda.url,
  videoNatural: videoNatural.url,
  videoStudio: videoStudio.url,
  videoPulpo: videoPulpo.url,
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
      { type: "video", src: media.videoEspalda, alt: "Proceso de la espalda realizada en dos días" },
    ],
  },
  {
    slug: "guerrera-espalda",
    title: "Guerrera",
    style: "Realismo",
    styleSlug: "realismo",
    year: "2026",
    zone: "Espalda completa",
    sessions: "3 sesiones",
    excerpt: "Retrato femenino de gran escala envuelto en formas orgánicas que siguen la musculatura.",
    description:
      "La figura se construyó respetando el recorrido natural de la espalda: las formas orgánicas nacen del omóplato y cierran sobre la cintura, de modo que la pieza se mueve con el cuerpo. El retrato mantiene un rango tonal amplio para que el rostro conserve presencia incluso a distancia.",
    cover: { type: "image", src: media.workEspaldaB, alt: "Tatuaje realista de figura femenina en espalda completa" },
    scale: "half",
    signature: true,
    gallery: [
      { type: "image", src: media.workEspaldaA, alt: "Otro ángulo de la espalda con retrato femenino" },
    ],
  },
  {
    slug: "sagrado-pecho",
    title: "Sagrado",
    style: "Realismo",
    styleSlug: "realismo",
    year: "2026",
    zone: "Pecho completo",
    sessions: "3 sesiones",
    excerpt: "Doble retrato religioso sobre pecho, con simetría trabajada desde la anatomía real.",
    description:
      "Dos rostros enfrentados sobre el pecho, unidos por una fuente de luz central. El reto fue sostener la simetría sin forzarla: cada retrato se ajustó a su lado del cuerpo para que el conjunto se lea equilibrado en movimiento y no solo en la foto.",
    cover: { type: "image", src: media.workPecho, alt: "Tatuaje realista religioso en pecho completo" },
    scale: "half",
    signature: true,
    gallery: [],
  },
  {
    slug: "jaguar-manga",
    title: "Jaguar",
    style: "Realismo",
    styleSlug: "realismo",
    year: "2026",
    zone: "Manga completa",
    sessions: "4 sesiones",
    excerpt: "Realismo animal fundido con ornamento geométrico en una manga de brazo completo.",
    description:
      "El retrato del jaguar ocupa el hombro y desciende hacia un tramo ornamental de grecas y patrones. La mezcla de lenguajes exige coherencia de contraste: el ornamento nunca compite con la mirada del animal, la enmarca.",
    cover: { type: "image", src: media.workJaguar, alt: "Manga completa con jaguar realista y ornamento geométrico" },
    scale: "tall",
    signature: true,
    gallery: [],
  },
  {
    slug: "dama-botanica",
    title: "Dama Botánica",
    style: "Sombras",
    styleSlug: "sombras",
    year: "2026",
    zone: "Antebrazo y brazo",
    sessions: "2 sesiones",
    excerpt: "Retrato en black & grey rodeado de hojas, rosas y grecas sobre una superficie curva.",
    description:
      "Una manga construida alrededor de un rostro sereno. La vegetación funciona como estructura: las hojas conducen la mirada hacia el retrato y resuelven las zonas de curvatura donde el detalle fino se pierde con el tiempo.",
    cover: { type: "image", src: media.workMangaB, alt: "Manga en black and grey con retrato femenino y botánica" },
    scale: "tall",
    signature: false,
    gallery: [
      { type: "image", src: media.workMangaA, alt: "Vista lateral de la manga con retrato y hojas" },
    ],
  },
  {
    slug: "felino-cuello",
    title: "Felino en Cuello",
    style: "Realismo",
    styleSlug: "realismo",
    year: "2026",
    zone: "Cuello",
    sessions: "2 sesiones",
    excerpt: "Retrato animal a color contenido sobre una de las zonas más exigentes del cuerpo.",
    description:
      "El cuello no perdona: piel delgada, movimiento constante y poco margen de corrección. La pieza se planificó en bloques cortos para controlar la respuesta de la piel y conservar la nitidez de los ojos, que son el centro de toda la composición.",
    cover: { type: "image", src: media.workCuello, alt: "Tatuaje realista de felino en el cuello" },
    scale: "half",
    signature: false,
    gallery: [],
  },
  {
    slug: "pulpo-pierna",
    title: "Pulpo y Caballito de Mar",
    style: "Sombras",
    styleSlug: "sombras",
    year: "2026",
    zone: "Cadera y pierna",
    sessions: "3 sesiones",
    excerpt: "Composición marina de gran formato con texturas de ventosa y burbujas en negativo.",
    description:
      "Una pieza que envuelve cadera y muslo. El pulpo aporta la masa oscura y el caballito de mar la luz: el contraste entre ambos sostiene la lectura de la composición desde cualquier ángulo.",
    cover: { type: "video", src: media.videoPulpo, alt: "Video de tatuaje de pulpo y caballito de mar en pierna" },
    scale: "half",
    signature: false,
    gallery: [],
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
    signature: false,
    gallery: [],
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
      { type: "image", src: media.artistWorking, alt: "Ronald Ladino tatuando un hombro" },
    ],
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
    cover: media.workMangaB,
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

/** Galería editorial de la biografía del artista. */
export const artistGallery: { src: string; alt: string; caption: string }[] = [
  { src: media.ronaldPortrait, alt: "Ronald Ladino tatuando con máquina rotativa dorada", caption: "El oficio, de cerca" },
  { src: media.artistWorking, alt: "Ronald Ladino tatuando un hombro en su estudio", caption: "Sesión extendida" },
  { src: media.artistPortrait, alt: "Ronald Ladino concentrado trabajando un antebrazo", caption: "Detalle y precisión" },
  { src: media.studioPhoto, alt: "Interior de LADINO Tattoo Studio", caption: "La casa" },
];

/** Piezas audiovisuales destacadas — el film del estudio. */
export const reels: { src: string; label: string; title: string; note: string }[] = [
  { src: media.videoEspalda, label: "Espalda en 2 días", title: "Espalda completa", note: "Proceso · Realismo" },
  { src: media.videoPulpo, label: "Pulpo y caballito de mar", title: "Marino", note: "Black & grey · Pierna" },
  { src: media.videoNatural, label: "Resultado cicatrizado al natural", title: "Al natural", note: "Cicatrización real" },
  { src: media.videoHero, label: "Sesión dentro del estudio", title: "En estudio", note: "Jornada completa" },
];
