import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CategoryTile, ContactBand, SectionHead } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { getCategory } from "@/lib/catalog";
import { Swoosh } from "@/components/site/Swoosh";
import hero from "@/assets/hero.jpg";
import pitstop from "@/assets/pitstop.jpg";
import wheelgun from "@/assets/wheelgun.jpg";
import air from "@/assets/air.jpg";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CES Europe Ltd",
  description: "UK pit equipment specialist and official Paoli wheel gun agent.",
  address: { "@type": "PostalAddress", streetAddress: "Unit 4, Penhill Industrial Park, Beaumont Road", addressLocality: "Banbury", postalCode: "OX16 1RW", addressCountry: "GB" },
  sameAs: ["https://www.facebook.com/CESEuropeLTD/", "https://twitter.com/pitequipment", "https://www.instagram.com/pitequipment/"],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CES Europe Ltd | Pit Lane Equipment & Official Paoli Agent" },
      { name: "description", content: "UK pit equipment specialist. Paoli wheel guns, servicing and air equipment from 2BAR to 300BAR for all race series." },
      { property: "og:title", content: "CES Europe Ltd | Pit Lane Equipment" },
      { property: "og:description", content: "Official Paoli wheel gun agent for the UK and Europe." },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusiness) }],
  }),
  component: Index,
});

const tiles: { slug: string; label?: string }[] = [
  { slug: "paoli-wheel-guns" },
  { slug: "paoli-wheel-gun-servicing" },
  { slug: "paoli-accessories", label: "Wheel Gun Optionals" },
  { slug: "regulators" },
  { slug: "cylinders-assemblies" },
  { slug: "compressors" },
  { slug: "air-couplings-hoses-fittings-accessories", label: "Air Couplings, Hoses, Fittings & Stems" },
  { slug: "hose-assemblies-and-fittings", label: "Hose Assemblies & Fittings" },
];

function Index() {
  return (
    <>
      <section className="inverse relative flex min-h-[100svh] items-end overflow-hidden">
        <img src={hero} alt="Pit crew member using a wheel gun on a race car at night" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-overlay-side" />
        <div className="absolute inset-0 bg-overlay opacity-60" />
        <Swoosh className="absolute -right-40 bottom-0 h-[70%] text-primary opacity-[0.12]" />
        <div className="container-x relative pb-20 pt-32 md:pb-28">
          <p className="eyebrow revealed reveal">CES Europe, Official Paoli Agent</p>
          <h1 className="reveal revealed mt-5 max-w-4xl text-5xl font-bold leading-[1.02] md:text-7xl" style={{ animationDelay: "120ms" }}>
            Pit lane equipment, support and advice.
          </h1>
          <div className="reveal revealed mt-10 flex flex-wrap gap-4" style={{ animationDelay: "240ms" }}>
            <Button asChild size="lg"><Link to="/products">Our Products</Link></Button>
            <Button asChild size="lg" variant="outline"><Link to="/contact">Contact Us</Link></Button>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Vision</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">UK based pit equipment specialists</h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              CES Europe Ltd is a UK based pit equipment supplier of wheel gun and associated air driven equipment, from 2BAR to 300BAR, for use in all race series. We are the Paoli wheel gun official agent for new sales, servicing and upgrades in the UK and Europe.
            </p>
            <div className="mt-10 grid grid-cols-2 border-t border-border pt-8">
              <div><p className="font-display text-3xl font-bold">2–300</p><p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">BAR range</p></div>
              <div><p className="font-display text-3xl font-bold">UK & EU</p><p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">Official agent</p></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-t border-border pt-16 md:pt-24">
        <div className="container-x">
          <Reveal><SectionHead eyebrow="Sectors" title="Built for every stop" /></Reveal>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {tiles.map((t, i) => {
              const c = getCategory(t.slug);
              if (!c) return null;
              return <Reveal key={t.slug} delay={(i % 4) * 80}><CategoryTile category={c} label={t.label} /></Reveal>;
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2">
          <img src={wheelgun} alt="Paoli racing wheel gun" loading="lazy" width={1200} height={912} className="aspect-[4/3] h-full w-full object-cover" />
          <div className="inverse section-y relative flex items-center overflow-hidden bg-deep">
            <Swoosh className="absolute -right-20 top-1/2 h-[120%] -translate-y-1/2 text-primary opacity-10" />
            <Reveal className="container-x relative max-w-xl lg:mx-16">
              <p className="eyebrow">Company</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">An Italian story, served in the UK</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Paoli has engineered wheel guns for more than 50 years. CES Europe is your direct UK route to that engineering — new guns, servicing, exchange and upgrades, handled by the official agent.
              </p>
              <Button asChild size="lg" variant="outline" className="mt-10"><Link to="/about">About CES Europe</Link></Button>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <Reveal><SectionHead eyebrow="Partners" title="Stronger on the pit wall" /></Reveal>
          {/* PLACEHOLDER partner logos — confirm before launch */}
          <div className="mt-12 grid grid-cols-2 gap-px bg-border md:grid-cols-4">
            {["Paoli", "NASCAR Competition Partner", "Partner logo", "Partner logo"].map((p, i) => (
              <div key={i} className="flex h-32 items-center justify-center bg-background px-6 text-center font-display text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {p}
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">Placeholder — logos to be confirmed</p>
        </div>
      </section>

      <section aria-label="Gallery" className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
        {[pitstop, air, hero, wheelgun].map((src, i) => (
          <div key={i} className="aspect-square overflow-hidden">
            <img src={src} alt="Pit lane equipment in use" loading="lazy" className="h-full w-full object-cover grayscale-[30%] transition-transform duration-700 hover:scale-105" />
          </div>
        ))}
      </section>

      <ContactBand />
    </>
  );
}
