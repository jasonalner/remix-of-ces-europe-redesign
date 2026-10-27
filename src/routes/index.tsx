import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CategoryTile, ContactBand, SectionHead } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { categories, company } from "@/lib/catalog";
import { proofPoints } from "@/lib/content";
import { Swoosh } from "@/components/site/Swoosh";
import servicingPhoto from "@/assets/ces/servicing.jpg.asset.json";
import hero from "@/assets/hero.jpg";
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
      <section className="inverse relative flex min-h-[100svh] items-end overflow-hidden">
        {/* TODO(client): replace with Ollie's original pit stop photography (full resolution). */}
        <img
          src={hero}
          alt="Pit lane at dusk with crews servicing single-seater race cars"
          width={1920}
          height={1088}
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

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              UK based pit equipment specialists
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              CES Europe Ltd is a UK based pit equipment supplier of wheel gun and associated air
              driven equipment, from 2BAR to 300BAR, for use in all race series. We are the Paoli
              wheel gun official agent for new sales, servicing and upgrades.
            </p>
            <div className="mt-10 grid grid-cols-2 border-t border-border pt-8">
              <div>
                <p className="font-display text-3xl font-bold">2–300</p>
                <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">
                  BAR range
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold">Banbury</p>
                <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">
                  Close to the teams
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-t border-border pt-16 md:pt-24">
        <div className="container-x">
          <Reveal>
            <SectionHead eyebrow="Services" title="Support that goes beyond the box" />
          </Reveal>
          <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.to} delay={i * 100}>
                <Link
                  to={s.to}
                  className="inverse group relative flex min-h-[26rem] flex-col justify-end overflow-hidden bg-surface p-8 md:aspect-[4/3] md:min-h-0 md:p-10"
                >
                  <img
                    src={s.image}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-overlay" />
                  <div className="relative max-w-md">
                    <p className="eyebrow">{s.eyebrow}</p>
                    <h3 className="mt-3 text-2xl font-semibold md:text-3xl">{s.title}</h3>
                    <p className="mt-3 text-muted-foreground">{s.text}</p>
                    <span className="mt-5 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.18em] transition-colors group-hover:text-primary">
                      Find out more{" "}
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-t border-border pt-16 md:pt-24">
        <div className="container-x">
          <Reveal>
            <SectionHead eyebrow="Products" title="Built for every stop" />
          </Reveal>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 4) * 80}>
                <CategoryTile category={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <img
            src={pitstop}
            alt="Pit crew changing a wheel on a single-seater race car in the pit lane"
            loading="lazy"
            width={1920}
            height={1088}
            className="aspect-[4/3] h-full w-full object-cover"
          />
          <div className="inverse section-y relative flex items-center overflow-hidden bg-deep">
            <Swoosh className="absolute -right-20 top-1/2 h-[120%] -translate-y-1/2 text-primary opacity-10" />
            <Reveal className="container-x relative max-w-xl lg:mx-16">
              <p className="eyebrow">Why CES Europe</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Engineering you can trust in the pit lane
              </h2>
              <ul className="mt-8 space-y-5">
                {proofPoints.map((p) => (
                  <li key={p.t}>
                    <p className="font-display text-lg font-semibold">{p.t}</p>
                    <p className="mt-1 text-muted-foreground">{p.d}</p>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" variant="outline" className="mt-10">
                <Link to="/about">About CES Europe</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
