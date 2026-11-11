import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryTile, SectionHead } from "@/components/site/Blocks";
import { EnquiryBand } from "@/components/site/BoardBlocks";
import { Reveal } from "@/components/site/Reveal";
import { categories, company } from "@/lib/catalog";
import { proofPoints } from "@/lib/content";
import { Swoosh } from "@/components/site/Swoosh";
import servicingPhoto from "@/assets/ces/servicing.jpg.asset.json";
import hero from "@/assets/ces/alpine-pit-stop.jpeg.asset.json";
import pitstop from "@/assets/pitstop.jpg";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CES Europe Ltd",
  description: "UK pit equipment specialist and official Paoli wheel gun agent.",
  telephone: "+44 1295 279558",
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 4, Penhill Industrial Park, Beaumont Road",
    addressLocality: "Banbury",
    postalCode: "OX16 1RW",
    addressCountry: "GB",
  },
  sameAs: [company.socials.facebook, company.socials.x, company.socials.instagram],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CES Europe Ltd | Pit Lane Equipment & Official Paoli Agent" },
      {
        name: "description",
        content:
          "UK pit equipment specialist in Banbury. Official Paoli wheel gun agent: new guns, servicing, advice and air equipment from 2BAR to 300BAR for all race series.",
      },
      { property: "og:title", content: "CES Europe Ltd | Pit Lane Equipment" },
      {
        property: "og:description",
        content:
          "Official Paoli wheel gun agent: sales, servicing and advice for UK motorsport teams.",
      },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusiness) }],
  }),
  component: Index,
});

const services = [
  {
    to: "/services/servicing",
    eyebrow: "Servicing and repair",
    title: "Race-ready guns, torque tested and certified",
    text: "Full service, diagnosis and repair of Paoli wheel guns with OEM parts, and a performance graph against every serial number.",
    image: servicingPhoto.url,
  },
  {
    to: "/services/advice",
    eyebrow: "Advice and consultation",
    title: "The right kit for your series",
    text: "Talk to us about which gun suits your needs and how to spec air driven equipment for your race series.",
    image: pitstop,
  },
] as const;

function Index() {
  return (
    <>
      <section className="inverse relative flex min-h-[min(720px,82svh)] items-end overflow-hidden">
        <img
          src={hero.url}
          alt="Alpine endurance racing team changing tyres during a pit stop"
          width={1024}
          height={683}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay-side" />
        <div className="absolute inset-0 bg-overlay opacity-60" />
        <Swoosh className="absolute -right-40 bottom-0 h-[70%] text-primary opacity-[0.12]" />
        <div className="container-x relative pb-20 pt-32 md:pb-28">
          <p className="eyebrow revealed reveal">CES Europe, Official Paoli Agent</p>
          <h1
            className="reveal revealed mt-5 max-w-4xl text-5xl font-bold leading-[1.02] md:text-7xl"
            style={{ animationDelay: "120ms" }}
          >
            Pit lane equipment, support and advice.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Official Paoli wheel gun agent: new guns, servicing, advice and air equipment from 2BAR to 300BAR.</p>
          <div
            className="reveal revealed mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <Button asChild size="lg">
              <Link to="/products">Our Products</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-y"><div className="container-x grid gap-12 lg:grid-cols-2"><Reveal><SectionHead eyebrow="Who we are" title="UK based pit equipment specialists"/><p className="mt-6 text-lg leading-relaxed text-muted-foreground">CES Europe Ltd is a UK based pit equipment supplier of wheel gun and associated air driven equipment, from 2BAR to 300BAR, for use in all race series. We are the Paoli wheel gun official agent for new sales, servicing and upgrades.</p></Reveal><Reveal className="grid content-center gap-4" delay={120}>{["Official Paoli agent for new sales, servicing and upgrades", "Banbury — close to the teams", "Air driven equipment, from 2BAR to 300BAR"].map(t => <div key={t} className="border border-border p-6 font-display font-semibold">{t}</div>)}</Reveal></div></section>
      <section className="section-y border-t border-border"><div className="container-x"><div className="flex flex-wrap items-end justify-between gap-6"><SectionHead eyebrow="Products" title="Built for every stop"/><Button asChild variant="outline"><Link to="/products">Our Products <ArrowRight className="size-4"/></Link></Button></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{["paoli-wheel-guns", "compressors", "fittings", "hoses", "extraction-systems"].map(slug => { const c = categories.find(c => c.slug === slug); return c ? <CategoryTile key={c.slug} category={c}/> : null; })}</div></div></section>
      <section className="section-y border-y border-border bg-surface"><div className="container-x"><h2 className="text-center text-3xl font-bold md:text-5xl">Engineering you can trust in the pit lane</h2><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5"><div className="border border-border bg-card p-5"><h3 className="font-semibold">Official Paoli agent</h3><p className="mt-3 text-sm text-muted-foreground">New sales, servicing and upgrades.</p></div>{proofPoints.map(p => <div key={p.t} className="border border-border bg-card p-5"><h3 className="font-semibold">{p.t}</h3><p className="mt-3 text-sm text-muted-foreground">{p.d}</p></div>)}</div></div></section>
      <section className="section-y"><div className="container-x"><SectionHead eyebrow="Services" title="Support that goes beyond the box"/><div className="mt-10 grid gap-6 lg:grid-cols-2">{services.map(s => <article key={s.to} className="grid overflow-hidden border border-border bg-card sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"><img src={s.image} alt="" loading="lazy" className="h-full min-h-48 w-full object-cover"/><div className="p-6"><p className="eyebrow">{s.eyebrow}</p><h3 className="mt-3 text-2xl font-semibold">{s.title}</h3><p className="mt-3 text-muted-foreground">{s.text}</p><Button asChild variant="outline" className="mt-6"><Link to={s.to}>Find out more <ArrowRight className="size-4"/></Link></Button></div></article>)}</div></div></section>
      <section className="section-y border-t border-border"><div className="container-x grid items-center gap-12 lg:grid-cols-2"><img src={pitstop} alt="Pit crew changing a wheel on a single-seater race car in the pit lane" loading="lazy" className="aspect-[4/3] w-full object-cover"/><div><SectionHead eyebrow="Why CES Europe" title="Pit equipment, support and advice"/><p className="mt-6 text-lg text-muted-foreground">Our small team is based in Banbury, geographically close to many of the UK's top motorsport teams, which makes site visits easy.</p><Button asChild variant="outline" size="lg" className="mt-8"><Link to="/about">About CES Europe</Link></Button></div></div></section>
      <EnquiryBand call />

    </>
  );
}
