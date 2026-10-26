import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ContactBand, PageHero } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import pitstop from "@/assets/pitstop.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | CES Europe Ltd" },
      { name: "description", content: "CES Europe is the UK based official Paoli wheel gun agent for sales, servicing and upgrades." },
      { property: "og:title", content: "About CES Europe Ltd" },
      { property: "og:description", content: "The UK arm of Paoli wheel gun sales and servicing." },
    ],
  }),
  component: About,
});

const pillars = [
  { t: "New sales", d: "The full Paoli wheel gun range, supplied in the UK." },
  { t: "Servicing", d: "Maintenance and repair to keep guns at race pace." },
  { t: "Exchange", d: "Swap worn units and stay on track." },
  { t: "Upgrades", d: "Bring existing guns up to current specification." },
];

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" title="The UK arm of Paoli wheel gun engineering" image={pitstop} />
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Company</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Pit equipment, start to finish</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              CES Europe Ltd is a UK based pit equipment supplier of wheel gun and associated air driven equipment, from 2BAR to 300BAR, for use in all race series. We are the Paoli wheel gun official agent for new sales, servicing and upgrades in the UK and Europe.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Paoli brings more than 50 years of wheel gun engineering. We bring it to your garage.
            </p>
          </Reveal>
        </div>
        <div className="container-x mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 80} className="bg-background p-8">
              <p className="font-display text-sm text-primary">0{i + 1}</p>
              <h3 className="mt-4 text-xl font-semibold">{p.t}</h3>
              <p className="mt-2 text-muted-foreground">{p.d}</p>
            </Reveal>
          ))}
        </div>
        <div className="container-x mt-14"><Button asChild size="lg"><Link to="/products">Our Products</Link></Button></div>
      </section>
      <ContactBand />
    </>
  );
}
