import air from "@/assets/air.jpg";
import hero from "@/assets/hero.jpg";
import wheelGunsPhoto from "@/assets/ces/wheel-gun.jpg.asset.json";
import accessoriesPhoto from "@/assets/ces/accessories.jpg.asset.json";
import blueDevil from "@/assets/ces/blue-devil-blh.png.asset.json";
import dp177 from "@/assets/ces/dp-177-sfe.png.asset.json";
import dp197 from "@/assets/ces/dp-197sfe-blue.png.asset.json";
import dp2000 from "@/assets/ces/dp-2000-se.png.asset.json";
import dp4000 from "@/assets/ces/dp-4000-bias.png.asset.json";
import dp5000 from "@/assets/ces/dp-5000-ti.png.asset.json";

// `legacySlug` is the category slug on the current WordPress site, kept so the
// old /product-category/<slug>/ URLs can be 301-redirected after launch.
export type Category = {
  slug: string;
  legacySlug?: string;
  name: string;
  image: string;
  intro: string;
};

// Product categories agreed with the client. Prices are deliberately never shown:
// the site generates enquiries, it is not a shop.
// TODO(client): confirm the final category list ("potentially some more") and what
// the extraction systems range covers.
export const categories: Category[] = [
  {
    slug: "paoli-wheel-guns",
    legacySlug: "paoli-wheel-guns",
    name: "Paoli Wheel Guns",
    image: wheelGunsPhoto.url,
    intro: "Paoli wheel guns for every level of motorsport, supplied by the official UK agent.",
  },
  {
    slug: "paoli-accessories",
    legacySlug: "paoli-accessories",
    name: "Paoli Accessories",
    image: accessoriesPhoto.url,
    intro: "Optionals and accessories to set your Paoli guns up for the job.",
  },
  {
    slug: "compressors",
    legacySlug: "compressors",
    name: "Compressors",
    image: hero,
    intro: "Compressors to fill and support your pit air system.",
  },
  {
    slug: "regulators",
    legacySlug: "regulators",
    name: "Regulators",
    image: air,
    intro: "Pressure regulation for air driven pit equipment.",
  },
  {
    slug: "cylinders-assemblies",
    legacySlug: "cylinder-trolley-setups",
    name: "Cylinders & Assemblies",
    image: air,
    intro: "Air cylinders, trolleys and assemblies, from 2BAR to 300BAR.",
  },
  {
    slug: "fittings",
    legacySlug: "air-couplings-hoses-fittings-and-stems",
    name: "Fittings",
    image: air,
    intro: "Air couplings, fittings and stems for a reliable air supply.",
  },
  {
    slug: "hoses",
    legacySlug: "hose",
    name: "Hoses",
    image: air,
    intro: "Hoses and made-up hose assemblies for pit lane use.",
  },
  {
    slug: "extraction-systems",
    name: "Extraction Systems",
    image: air,
    intro: "Extraction systems from CES Europe. Get in touch to talk through what you need.",
  },
];

export type Product = {
  id: string;
  category: string;
  name: string;
  summary: string;
  specs: string[];
  image?: string;
};

// Real Paoli wheel gun models and specifications, taken from the current CES site.
// Models without a description there (DP 5000 TI, DP 6000 45°) are enquiry-only for now.
// TODO(client/Paoli): add datasheets and official product photography for every model.
export const products: Product[] = [
  {
    id: "hurricane",
    category: "paoli-wheel-guns",
    name: "Hurricane",
    summary:
      "The first Paoli model developed through CFD technology, with a design focused on the operator and on controlling torque.",
    specs: [
      "15,500 rpm at 400 psi",
      "Max pressure 450 psi",
      "Max torque 3,172 ft-lbs",
      "Weight 8.2 lbs",
      "Titanium motor design",
      "Carbon PEEK vanes",
      "Steel long throw trigger",
      "Built-in oiler",
      "Carbon or aluminium clutch cover",
      "Cover and handle options: LH, RH and UH",
    ],
  },
  {
    id: "blue-devil",
    category: "paoli-wheel-guns",
    name: "Blue Devil",
    summary: "Lightweight but very fast and powerful. Available as 60/40 or 70/30.",
    specs: [
      "Operating pressure 20 bar / 290 psi",
      "New carbon vanes",
      "Optimised, efficient exhaust (patented system)",
      "90° handle",
    ],
    image: blueDevil.url,
  },
  {
    id: "dp-177sfe",
    category: "paoli-wheel-guns",
    name: "DP 177SFE",
    summary: "Fast, powerful and reliable.",
    specs: [
      "New carbon vanes",
      "Aerospace aluminium 7075 front cover",
      "Increased max pressure of 20 bar / 290 psi",
    ],
    image: dp177.url,
  },
  {
    id: "dp-197sfe",
    category: "paoli-wheel-guns",
    name: "DP 197SFE",
    summary: "Very reliable and lightweight.",
    specs: ["Weight 4.6 kg", "Aerospace aluminium 7075 front cover", "New carbon vanes"],
    image: dp197.url,
  },
  {
    id: "dp-2000se",
    category: "paoli-wheel-guns",
    name: "DP 2000SE",
    summary: "Aerospace 7075 aluminium cover with reduced weight.",
    specs: [
      "Aerospace aluminium 7075 cover",
      "Weight reduced with new aerospace aluminium",
      "New carbon vanes",
    ],
    image: dp2000.url,
  },
  {
    id: "dp-4000-bias",
    category: "paoli-wheel-guns",
    name: "DP 4000 BIAS",
    summary: "Two wheel guns in one body: the BIAS system.",
    specs: [
      "Front needle roller bearings",
      "Aerospace aluminium 7075 front cover",
      "Instructions engraved on the back of the gun",
    ],
    image: dp4000.url,
  },
  {
    id: "dp-4000-mg",
    category: "paoli-wheel-guns",
    name: "DP 4000 MG",
    summary: "Strong, fast and reliable, with a magnesium alloy body.",
    specs: [
      "13,500 RPM",
      "Weight 3.71 kg / 8.18 lbs with aluminium cover",
      "Aerospace aluminium 7075 cover",
      "New carbon PEEK vanes",
      "TSA ready",
    ],
  },
  {
    id: "dp-5000-ti",
    category: "paoli-wheel-guns",
    name: "DP 5000 TI",
    summary: "Get in touch for the full specification.",
    specs: [],
    image: dp5000.url,
  },
  {
    id: "dp-6000-45-degree-handle",
    category: "paoli-wheel-guns",
    name: "DP 6000 45° Handle",
    summary: "Get in touch for the full specification.",
    specs: [],
  },
  {
    id: "dp-6000-90-degree-handle",
    category: "paoli-wheel-guns",
    name: "DP 6000 90° Handle",
    summary: "Developed for increased performance and improved ergonomics.",
    specs: [
      "More power and more gap",
      "90° ergonomic handle",
      "Carbon cover as standard, aluminium cover available",
      "Built-in oiler available in the handle",
      "Ergonomic trigger",
    ],
  },
  {
    id: "supersport",
    category: "paoli-wheel-guns",
    name: "Supersport",
    summary: "The ultimate solution for V8 touring car pit stops.",
    specs: [
      "Operating pressure 20 bar / 290 psi",
      "New carbon vanes",
      "Optimised, efficient exhaust (patented system)",
    ],
  },
  {
    id: "torpedo",
    category: "paoli-wheel-guns",
    name: "Torpedo",
    summary: "Fast and powerful cordless gun, supplied in a hard case.",
    specs: [
      "Lithium ion battery, 18.0 V DC",
      "Two batteries included: one in use, one spare",
      "Width 80 mm / 3.1 in",
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getProduct = (id: string) => products.find((p) => p.id === id);

export const wheelGunModels = products
  .filter((p) => p.category === "paoli-wheel-guns")
  .map((p) => p.name);

export const company = {
  name: "CES Europe Ltd",
  street: "Unit 4, Penhill Industrial Park, Beaumont Road",
  town: "Banbury",
  postcode: "OX16 1RW",
  country: "England",
  phone: "01295 279558",
  phoneHref: "tel:+441295279558",
  email: "sales@ceseuropeltd.co.uk",
  socials: {
    facebook: "https://www.facebook.com/CESEuropeLTD/",
    x: "https://twitter.com/pitequipment",
    instagram: "https://www.instagram.com/pitequipment/",
  },
};
