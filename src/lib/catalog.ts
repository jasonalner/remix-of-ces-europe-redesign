import air from "@/assets/air.jpg";
import hero from "@/assets/hero.jpg";
import wheelGunsPhoto from "@/assets/ces/wheel-gun.jpg.asset.json";
import servicingPhoto from "@/assets/ces/servicing.jpg.asset.json";
import accessoriesPhoto from "@/assets/ces/accessories.jpg.asset.json";
import blueDevil from "@/assets/ces/blue-devil-blh.png.asset.json";
import dp177 from "@/assets/ces/dp-177-sfe.png.asset.json";
import dp197 from "@/assets/ces/dp-197sfe-blue.png.asset.json";
import dp2000 from "@/assets/ces/dp-2000-se.png.asset.json";
import dp4000 from "@/assets/ces/dp-4000-bias.png.asset.json";
import dp5000 from "@/assets/ces/dp-5000-ti.png.asset.json";

export type Category = { slug: string; name: string; image: string; intro: string };

// Category names and slugs mirror the current site so old URLs can be redirected.
export const categories: Category[] = [
  { slug: "paoli-wheel-guns", name: "Paoli Wheel Guns", image: wheelGunsPhoto.url, intro: "New Paoli wheel guns for every race series, supplied by the official UK agent." },
  { slug: "paoli-wheel-gun-servicing", name: "Paoli Wheel Gun Servicing", image: servicingPhoto.url, intro: "Servicing, exchange and upgrades for Paoli wheel guns, handled in the UK." },
  { slug: "paoli-accessories", name: "Paoli Accessories", image: accessoriesPhoto.url, intro: "Genuine Paoli optionals and accessories to set your guns up for the job." },
  { slug: "regulators", name: "Regulators", image: air, intro: "Pressure regulation for air driven pit equipment." },
  { slug: "cylinders-assemblies", name: "Cylinders & Assemblies", image: air, intro: "Air cylinders and assemblies from 2BAR to 300BAR." },
  { slug: "compressors", name: "Compressors", image: hero, intro: "Compressors to fill and support your pit air system." },
  { slug: "air-couplings-hoses-fittings-accessories", name: "Air Couplings, Hoses, Fittings and Accessories", image: air, intro: "Couplings, hoses, fittings and stems for a reliable air supply." },
  { slug: "hose-assemblies-and-fittings", name: "Hose Assemblies and Fittings", image: air, intro: "Made-up hose assemblies and fittings for pit lane use." },
];

export type Product = { id: string; category: string; name: string; spec: string; image?: string };

// Real Paoli wheel gun models from the current CES site.
const wheelGuns: Product[] = [
  ["blue-devil", "Blue Devil", blueDevil.url],
  ["dp-177sfe", "DP 177SFE", dp177.url],
  ["dp-197sfe", "DP 197SFE", dp197.url],
  ["dp-2000se", "DP 2000SE", dp2000.url],
  ["dp-4000-bias", "DP 4000 BIAS", dp4000.url],
  ["dp-5000-ti", "DP 5000 TI", dp5000.url],
].map(([id, name, image]) => ({ id: id!, category: "paoli-wheel-guns", name: name!, spec: "Specification on request", image: image! }));

// PLACEHOLDER products for other categories: replace with the real catalogue.
export const products: Product[] = [...wheelGuns, ...categories.filter((c) => c.slug !== "paoli-wheel-guns").flatMap((c) =>
  [1, 2, 3].map((n) => ({
    id: `${c.slug}-${n}`,
    category: c.slug,
    name: `${c.name.replace(/s$/, "")} — item ${n}`,
    spec: "Specification on request",
  })),
)];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getProduct = (id: string) => products.find((p) => p.id === id);

export const company = {
  name: "CES Europe Ltd",
  street: "Unit 4, Penhill Industrial Park, Beaumont Road",
  town: "Banbury",
  postcode: "OX16 1RW",
  country: "England",
  socials: {
    facebook: "https://www.facebook.com/CESEuropeLTD/",
    x: "https://twitter.com/pitequipment",
    instagram: "https://www.instagram.com/pitequipment/",
  },
};
