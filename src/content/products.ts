/** Catálogo Supply — productos, variantes y precios. */
import img_flux_max_replica from "@/assets/products/flux-max-replica.jpg.asset.json";
import img_inferno_ez from "@/assets/products/inferno-ez.jpg.asset.json";
import img_ozer_x_oq from "@/assets/products/ozer-x-oq.jpg.asset.json";
import img_dklab_dk_w1 from "@/assets/products/dklab-dk-w1.jpg.asset.json";
import img_flux_max_original from "@/assets/products/flux-max-original.jpg.asset.json";
import img_art_driver from "@/assets/products/art-driver.jpg.asset.json";
import img_cartuchos_hi_wjx_ixoye_vselect from "@/assets/products/cartuchos-hi-wjx-ixoye-vselect.jpg.asset.json";
import img_vice from "@/assets/products/vice.jpg.asset.json";
import img_dynamic_black from "@/assets/products/dynamic-black.jpg.asset.json";
import img_dynamic_triple_black from "@/assets/products/dynamic-triple-black.jpg.asset.json";
import img_dynamic_white from "@/assets/products/dynamic-white.jpg.asset.json";
import img_radiant_black from "@/assets/products/radiant-black.jpg.asset.json";
import img_radiant_white from "@/assets/products/radiant-white.jpg.asset.json";
import img_radiant_colors from "@/assets/products/radiant-colors.jpg.asset.json";
import img_allegory_blak from "@/assets/products/allegory-blak.jpg.asset.json";
import img_allegory_ultra from "@/assets/products/allegory-ultra.jpg.asset.json";
import img_star_brite_white from "@/assets/products/star-brite-white.jpg.asset.json";
import img_star_brite_colors from "@/assets/products/star-brite-colors.jpg.asset.json";
import img_hugo_feist_4oz from "@/assets/products/hugo-feist-4oz.jpg.asset.json";
import img_hugo_feist_2oz from "@/assets/products/hugo-feist-2oz.jpg.asset.json";
import img_angelo_nicolella from "@/assets/products/angelo-nicolella.jpg.asset.json";
import img_proton from "@/assets/products/proton.jpg.asset.json";
import img_ay_d from "@/assets/products/ay-d.jpg.asset.json";
import img_reeborn from "@/assets/products/reeborn.jpg.asset.json";
import img_rck_butter from "@/assets/products/rck-butter.jpg.asset.json";
import img_royal_three from "@/assets/products/royal-three.jpg.asset.json";
import img_happy_ink from "@/assets/products/happy-ink.jpg.asset.json";
import img_dragon_balm from "@/assets/products/dragon-balm.jpg.asset.json";
import img_tropical_cream from "@/assets/products/tropical-cream.jpg.asset.json";
import img_acid_mantle from "@/assets/products/acid-mantle.jpg.asset.json";
import img_mamacure from "@/assets/products/mamacure.jpg.asset.json";
import img_ultra_ink from "@/assets/products/ultra-ink.jpg.asset.json";
import img_ayd_caja_50 from "@/assets/products/ayd-caja-50.jpg.asset.json";

export type ProductMedia = { type: "image" | "video"; src: string; alt: string };

export type ProductVariant = { label: string; price: number };

export type Product = {
  slug: string;
  name: string;
  category: string;
  note: string;
  /** Foto principal del producto. */
  image: string;
  /** Galería opcional: imágenes o video en alta calidad por producto. */
  media: ProductMedia[];
  variants: ProductVariant[];
};

export const productCategories = ["Máquinas", "Cartuchos", "Tintas", "Sets", "Cremas", "Cuidado"] as const;

export const cop = (n: number) => "$" + n.toLocaleString("es-CO");

export const products: Product[] = [
  {
    slug: "flux-max-replica",
    name: "Flux Max R\u00e9plica",
    category: "M\u00e1quinas",
    note: "Stroke 3.5 / 4.0 mm \u00b7 2 bater\u00edas \u00b7 Entrada RCA",
    image: img_flux_max_replica.url,
    media: [],
    variants: [{ label: "Unidad", price: 800000 }],
  },
  {
    slug: "inferno-ez",
    name: "Inferno EZ",
    category: "M\u00e1quinas",
    note: "Stroke ajustable \u00b7 2 bater\u00edas \u00b7 Entrada RCA",
    image: img_inferno_ez.url,
    media: [],
    variants: [{ label: "Unidad", price: 1250000 }],
  },
  {
    slug: "ozer-x-oq",
    name: "Ozer x oQ",
    category: "M\u00e1quinas",
    note: "Stroke 4.2 mm \u00b7 2 bater\u00edas \u00b7 RCA \u00b7 3 grips de cambio",
    image: img_ozer_x_oq.url,
    media: [],
    variants: [{ label: "Unidad", price: 1400000 }],
  },
  {
    slug: "dklab-dk-w1",
    name: "DKLab DK-W1",
    category: "M\u00e1quinas",
    note: "Stroke 4.0 mm \u00b7 2 bater\u00edas",
    image: img_dklab_dk_w1.url,
    media: [],
    variants: [{ label: "Unidad", price: 1500000 }],
  },
  {
    slug: "flux-max-original",
    name: "Flux Max Original",
    category: "M\u00e1quinas",
    note: "Stroke 4.0 mm \u00b7 2 bater\u00edas \u00b7 FK Irons",
    image: img_flux_max_original.url,
    media: [],
    variants: [{ label: "Unidad", price: 4200000 }],
  },
  {
    slug: "art-driver",
    name: "Art Driver",
    category: "M\u00e1quinas",
    note: "Stroke ajustable interno \u00b7 2 bater\u00edas (pilas)",
    image: img_art_driver.url,
    media: [],
    variants: [{ label: "Unidad", price: 2500000 }],
  },
  {
    slug: "cartuchos-hi-wjx-ixoye-vselect",
    name: "Cartuchos Hi \u00b7 WJX \u00b7 Ixoye \u00b7 V Select",
    category: "Cartuchos",
    note: "Cajas x20 und. 4 cajas por $300.000 (no aplica para cajas surtidas)",
    image: img_cartuchos_hi_wjx_ixoye_vselect.url,
    media: [],
    variants: [{ label: "RL x20", price: 85000 }, { label: "RM x20", price: 90000 }, { label: "RS x20", price: 85000 }, { label: "Caja surtida x20", price: 90000 }],
  },
  {
    slug: "vice",
    name: "Vice",
    category: "Tintas",
    note: "Negro de alta pigmentaci\u00f3n",
    image: img_vice.url,
    media: [],
    variants: [{ label: "17 onz", price: 300000 }, { label: "8 onz", price: 180000 }, { label: "1 onz", price: 65000 }],
  },
  {
    slug: "dynamic-black",
    name: "Dynamic Black",
    category: "Tintas",
    note: "BLK \u00b7 Premium tattoo ink",
    image: img_dynamic_black.url,
    media: [],
    variants: [{ label: "8 onz", price: 150000 }, { label: "1 onz", price: 55000 }],
  },
  {
    slug: "dynamic-triple-black",
    name: "Dynamic Triple Black",
    category: "Tintas",
    note: "TBK \u00b7 Negro m\u00e1ximo",
    image: img_dynamic_triple_black.url,
    media: [],
    variants: [{ label: "8 onz", price: 180000 }, { label: "1 onz", price: 65000 }],
  },
  {
    slug: "dynamic-white",
    name: "Dynamic White",
    category: "Tintas",
    note: "WD1 \u00b7 Blanco de luces",
    image: img_dynamic_white.url,
    media: [],
    variants: [{ label: "8 onz", price: 160000 }, { label: "1 onz", price: 60000 }],
  },
  {
    slug: "radiant-black",
    name: "Radiant Black",
    category: "Tintas",
    note: "Real Black \u00b7 Bright & strong",
    image: img_radiant_black.url,
    media: [],
    variants: [{ label: "8 onz", price: 130000 }, { label: "1 onz", price: 60000 }],
  },
  {
    slug: "radiant-white",
    name: "Radiant White",
    category: "Tintas",
    note: "Super White",
    image: img_radiant_white.url,
    media: [],
    variants: [{ label: "8 onz", price: 150000 }, { label: "1 onz", price: 60000 }],
  },
  {
    slug: "radiant-colors",
    name: "Radiant Colors",
    category: "Tintas",
    note: "L\u00ednea de color completa",
    image: img_radiant_colors.url,
    media: [],
    variants: [{ label: "1 onz", price: 60000 }, { label: "1/2 onz", price: 40000 }],
  },
  {
    slug: "allegory-blak",
    name: "Allegory Blak",
    category: "Tintas",
    note: "Crafted in the USA \u00b7 Professional use",
    image: img_allegory_blak.url,
    media: [],
    variants: [{ label: "8 onz", price: 100000 }, { label: "1 onz", price: 50000 }],
  },
  {
    slug: "allegory-ultra",
    name: "Allegory Ultra Blak",
    category: "Tintas",
    note: "Negro ultra concentrado",
    image: img_allegory_ultra.url,
    media: [],
    variants: [{ label: "8 onz", price: 140000 }, { label: "2 onz", price: 90000 }, { label: "1 onz", price: 55000 }],
  },
  {
    slug: "star-brite-white",
    name: "Star Brite White",
    category: "Tintas",
    note: "Blanco de alta opacidad",
    image: img_star_brite_white.url,
    media: [],
    variants: [{ label: "4 onz", price: 170000 }, { label: "1 onz", price: 65000 }],
  },
  {
    slug: "star-brite-colors",
    name: "Star Brite Colors",
    category: "Tintas",
    note: "Gama de color",
    image: img_star_brite_colors.url,
    media: [],
    variants: [{ label: "1 onz", price: 65000 }],
  },
  {
    slug: "hugo-feist-4oz",
    name: "Set Hugo Feist",
    category: "Sets",
    note: "Allegory \u00b7 Set de grises firmado",
    image: img_hugo_feist_4oz.url,
    media: [],
    variants: [{ label: "4 onz", price: 522000 }],
  },
  {
    slug: "hugo-feist-2oz",
    name: "Set Hugo Feist",
    category: "Sets",
    note: "Allegory \u00b7 Set de grises firmado",
    image: img_hugo_feist_2oz.url,
    media: [],
    variants: [{ label: "2 onz", price: 288000 }],
  },
  {
    slug: "angelo-nicolella",
    name: "Set Angelo Nicolella",
    category: "Sets",
    note: "x12 unidades",
    image: img_angelo_nicolella.url,
    media: [],
    variants: [{ label: "1 onz x12", price: 600000 }],
  },
  {
    slug: "proton",
    name: "Prot\u00f3n",
    category: "Cremas",
    note: "Crema hidratante coco + Blue Obsession",
    image: img_proton.url,
    media: [],
    variants: [{ label: "200 ml coco + 200 ml obsession", price: 33000 }],
  },
  {
    slug: "ay-d",
    name: "AY D",
    category: "Cremas",
    note: "Manteca para el proceso",
    image: img_ay_d.url,
    media: [],
    variants: [{ label: "300 gr", price: 40000 }],
  },
  {
    slug: "reeborn",
    name: "Reeborn",
    category: "Cremas",
    note: "Tattoo butter",
    image: img_reeborn.url,
    media: [],
    variants: [{ label: "250 gr", price: 50000 }],
  },
  {
    slug: "rck-butter",
    name: "RCK Butter",
    category: "Cremas",
    note: "Mantequilla para el tatuaje",
    image: img_rck_butter.url,
    media: [],
    variants: [{ label: "450 gr", price: 48000 }, { label: "125 gr", price: 24000 }],
  },
  {
    slug: "royal-three",
    name: "Royal Three Cocoa Cream",
    category: "Cremas",
    note: "Con vitamina A y E",
    image: img_royal_three.url,
    media: [],
    variants: [{ label: "300 gr", price: 50000 }],
  },
  {
    slug: "happy-ink",
    name: "Happy Ink Cool",
    category: "Cremas",
    note: "Efecto fr\u00edo durante la sesi\u00f3n",
    image: img_happy_ink.url,
    media: [],
    variants: [{ label: "475 ml", price: 70000 }],
  },
  {
    slug: "dragon-balm",
    name: "Dragon Balm",
    category: "Cremas",
    note: "Mamacur\u00e9 \u00b7 Regenerador con sangre de drago",
    image: img_dragon_balm.url,
    media: [],
    variants: [{ label: "200 gr", price: 90000 }, { label: "45 gr", price: 38000 }],
  },
  {
    slug: "tropical-cream",
    name: "Tropical Cream",
    category: "Cremas",
    note: "Manteca profesional con vitaminas",
    image: img_tropical_cream.url,
    media: [],
    variants: [{ label: "200 gr", price: 35000 }],
  },
  {
    slug: "acid-mantle",
    name: "Acid Mantle Tattoo",
    category: "Cuidado",
    note: "Crema de cuidado intensivo",
    image: img_acid_mantle.url,
    media: [],
    variants: [{ label: "10 gr", price: 32000 }, { label: "3.5 gr", price: 12000 }],
  },
  {
    slug: "mamacure",
    name: "Mamacur\u00e9 Tattoo Cream",
    category: "Cuidado",
    note: "Crema para tatuajes",
    image: img_mamacure.url,
    media: [],
    variants: [{ label: "20 gr", price: 20000 }],
  },
  {
    slug: "ultra-ink",
    name: "Ultra Ink Tattoo Care",
    category: "Cuidado",
    note: "Crema hidratante protectora",
    image: img_ultra_ink.url,
    media: [],
    variants: [{ label: "120 ml", price: 55000 }, { label: "30 ml", price: 30000 }],
  },
  {
    slug: "ayd-caja-50",
    name: "AyD Caja x50 sobres",
    category: "Cuidado",
    note: "Sobres individuales de 8 gr",
    image: img_ayd_caja_50.url,
    media: [],
    variants: [{ label: "Caja x50", price: 78000 }],
  },
];
