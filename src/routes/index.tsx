import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EnquiryBand } from "@/components/site/BoardBlocks";
import { Parallax } from "@/components/site/Parallax";
import { ProductIndex } from "@/components/site/ProductIndex";
import { Reveal } from "@/components/site/Reveal";
import { categories, company } from "@/lib/catalog";
import { proofPoints } from "@/lib/content";
import { Swoosh } from "@/components/site/Swoosh";
import servicingPhoto from "@/assets/ces/servicing.jpg.asset.json";
import hero from "@/assets/ces/alpine-pit-stop.jpeg.asset.json";
import pitstop from "@/assets/pitstop.jpg";
import pitLane from "@/assets/hero.jpg";

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
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
    alt: "A Paoli wheel gun being serviced on the bench",
  },
  {
    to: "/services/advice",
    eyebrow: "Advice and consultation",
    title: "The right kit for your series",
    text: "Talk to us about which gun suits your needs and how to spec air driven equipment for your race series.",
    image: pitLane,
    alt: "Pit crew at work in the pit lane at dusk",
  },
] as const;

const featured = ["paoli-wheel-guns", "compressors", "fittings", "hoses", "extraction-systems"]
  .map((slug) => categories.find((c) => c.slug === slug))
  .filter((c): c is (typeof categories)[number] => Boolean(c));

function Index() {
  return (
    <>
      {/* 01 Hero — navy, slow zoom, serif emphasis */}
      <section className="inverse relative flex min-h-[100svh] items-end overflow-hidden bg-background">
        <img src={hero.url} alt="Alpine endurance racing team changing tyres during a pit stop" width={1024} height={683} className="hero-zoom absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-overlay-side" />
        <div className="absolute inset-0 bg-overlay opacity-70" />
        <Swoosh className="absolute -right-[18vw] -top-[10vh] h-[120%] text-primary opacity-[0.18]" />
        <div className="container-x relative pb-16 pt-40 md:pb-24">
          <p className="label-num reveal revealed">CES Europe, Official Paoli Agent</p>
          <h1 className="display-xl reveal revealed mt-6 max-w-5xl text-[9.5vw] md:text-[4.75rem]" style={{ animationDelay: "120ms" }}>
            Pit lane <span className="text-brand-link">equipment,</span> support and advice.
          </h1>
          <div className="reveal revealed mt-10 grid gap-8 border-t border-border pt-8 md:grid-cols-[1fr_auto] md:items-end" style={{ animationDelay: "240ms" }}>
            <p className="max-w-xl text-lg text-muted-foreground">Official Paoli wheel gun agent: new guns, servicing, advice and air equipment from 2BAR to 300BAR.</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg"><Link to="/products">Our Products</Link></Button>
              <Button asChild size="lg" variant="outline"><Link to="/contact">Contact Us</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* 02 Who we are — serif opening statement + offset collage */}
      <section className="inverse section-y overflow-hidden bg-background">
        <div className="container-x grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="label-num">01 — Who we are</p>
            <h2 className="display-xl mt-6 text-5xl text-foreground md:text-6xl">UK based pit equipment <span className="text-brand-link">specialists</span></h2>
            <p className="mt-10 text-2xl font-normal leading-[1.35] text-foreground md:text-3xl">CES Europe Ltd is a UK based pit equipment supplier of wheel gun and associated air driven equipment, from 2BAR to 300BAR, for use in all race series.</p>
            <p className="mt-6 max-w-lg text-muted-foreground">We are the Paoli wheel gun official agent for new sales, servicing and upgrades.</p>
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {["Official Paoli agent for new sales, servicing and upgrades", "Banbury — close to the teams", "Air driven equipment, from 2BAR to 300BAR"].map((t, i) => (
                <li key={t} className="flex items-baseline gap-6 py-5 font-display font-medium text-foreground"><span className="label-num">0{i + 1}</span>{t}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150} className="relative grid h-[560px] grid-cols-6 grid-rows-6 gap-2 lg:col-span-6 lg:mt-24">
            <Parallax src={pitstop} alt="Pit crew changing a wheel in the pit lane" className="col-span-4 row-span-4" />
            <Parallax src={servicingPhoto.url} alt="Paoli wheel gun on the servicing bench" className="col-span-2 col-start-5 row-span-3 row-start-2" strength={0.08} />
            <Parallax src={categories[0]!.image} alt="Paoli wheel guns" className="col-span-3 col-start-3 row-span-2 row-start-5" strength={0.06} />
            <Swoosh className="absolute -bottom-6 left-0 h-24 text-primary" />
          </Reveal>
        </div>
      </section>

      {/* Typographic band running off the edge */}
      <section aria-hidden="true" className="inverse overflow-hidden border-y border-border bg-surface py-6 md:py-8">
        <div className="band-run flex w-max whitespace-nowrap">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0">
              {Array.from({ length: 4 }).map((_, j) => (
                <span key={j} className="px-10 font-display text-3xl font-semibold uppercase tracking-[0.1em] text-foreground md:text-5xl">
                  CES Europe, <span className="text-brand-link">Official</span> Paoli Agent —
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* 03 Products — single ruled typographic list with image reveal */}
      <section className="section-y">
        <ProductIndex items={featured} />
      </section>

      {/* 04 Statement over full-bleed cinematic image */}
      <section className="inverse relative overflow-hidden">
        <Parallax src={servicingPhoto.url} alt="" className="absolute inset-0" strength={0.15} />
        <div className="absolute inset-0 bg-deep/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-overlay" />
        <div className="container-x relative py-32 md:py-48">
          <Reveal>
            <p className="label-num">03 — Engineering</p>
            <h2 className="mt-8 max-w-5xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-7xl">Engineering you can trust in the pit lane.</h2>
          </Reveal>
          <div className="mt-20 grid border-t border-border sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-border">
            {[{ t: "Official Paoli agent", d: "New sales, servicing and upgrades." }, ...proofPoints].map((p, i) => (
              <Reveal key={p.t} delay={i * 90} className="border-b border-border py-8 lg:border-b-0 lg:px-6 lg:first:pl-0">
                <h3 className="font-display text-lg font-semibold">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 Services — overlapping image and box rows */}
      <section className="section-y bg-surface">
        <div className="container-x">
          <p className="label-num">04 — Services</p>
          <h2 className="display-xl mt-6 max-w-3xl text-5xl md:text-7xl">Support that goes <span className="text-primary">beyond</span> the box</h2>
          <div className="mt-16 space-y-16 md:mt-24 md:space-y-28">
            {services.map((s, i) => {
              const flip = i === 1;
              return (
                <div key={s.to} className="grid items-center gap-8 lg:grid-cols-12 lg:gap-0">
                  <Parallax src={s.image} alt={s.alt} className={`aspect-[4/3] lg:col-span-7 ${flip ? "lg:order-2" : ""}`} />
                  <Reveal className={`relative z-10 lg:col-span-5 lg:bg-background lg:p-12 ${flip ? "lg:order-1 lg:-mr-24" : "lg:-ml-24"}`}>
                    <p className="label-num">{`0${i + 1}`} — {s.eyebrow}</p>
                    <h3 className="display-xl mt-6 text-3xl md:text-4xl">{s.title}</h3>
                    <p className="mt-6 text-lg text-muted-foreground">{s.text}</p>
                    <Button asChild variant="outline" size="lg" className="mt-8"><Link to={s.to}>Find out more</Link></Button>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 Why CES — full-bleed image, gradient, content on top */}
      <section className="inverse relative isolate flex min-h-[85svh] items-center overflow-hidden bg-background">
        <Parallax src={pitstop} alt="Pit crew changing a wheel on a single-seater race car in the pit lane" className="absolute inset-0 -z-10" strength={0.1} />
        <div className="absolute inset-0 -z-10 bg-overlay-side" />
        <div className="absolute inset-0 -z-10 bg-overlay opacity-25" />
        <div className="container-x py-24 md:py-32">
          <Reveal className="max-w-2xl">
            <p className="label-num">05 — Why CES Europe</p>
            <h2 className="display-xl mt-6 text-4xl text-foreground md:text-6xl">Pit equipment, support and <span className="text-brand-link">advice</span></h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">Our small team is based in Banbury, geographically close to many of the UK's top motorsport teams, which makes site visits easy.</p>
            <Button asChild variant="outline" size="lg" className="mt-10"><Link to="/about">About CES Europe</Link></Button>
          </Reveal>
        </div>
      </section>

      <EnquiryBand call />
    </>
  );
}
