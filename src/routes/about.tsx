import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ContactBand,
  ContactLines,
  PageHero,
  PlaceholderNote,
  SectionHead,
} from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { company } from "@/lib/catalog";
import { proofPoints } from "@/lib/content";
import pitstop from "@/assets/pitstop.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | CES Europe Ltd" },
      {
        name: "description",
        content:
          "CES Europe is the UK based official Paoli wheel gun agent for sales, servicing and upgrades, based in Banbury close to many of the UK's top motorsport teams.",
      },
      { property: "og:title", content: "About CES Europe Ltd" },
      {
        property: "og:description",
        content:
          "Official Paoli wheel gun agent: sales, servicing and advice for UK motorsport teams.",
      },
    ],
  }),
  component: About,
});

const pillars = [
  { t: "New sales", d: "The Paoli wheel gun range, supplied by the official agent." },
  { t: "Servicing", d: "Maintenance and repair to keep guns at race pace." },
  { t: "Exchange", d: "Swap worn units and stay on track." },
  { t: "Upgrades", d: "Bring existing guns up to current specification." },
];

// TODO(client): supply names, roles, photos and short bios for the team (four people).
const team = [1, 2, 3, 4];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Specialists in pit lane equipment, support and advice"
        image={pitstop}
        imageAlt="Pit crew changing a wheel on a single-seater race car in the pit lane"
      />

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">Pit equipment, start to finish</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              CES Europe Ltd is a UK based pit equipment supplier of wheel gun and associated air
              driven equipment, from 2BAR to 300BAR, for use in all race series. We are the Paoli
              wheel gun official agent for new sales, servicing and upgrades.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We hold a complete range of Paoli wheel gun spares, new and remanufactured wheel guns,
              and an extensive range of cylinders, trolleys, air couplings and gantry assemblies. We
              can also spec air driven applications for any of the race series around the world.
            </p>
          </Reveal>
        </div>
        <div className="container-x mt-16">
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.t} delay={i * 80} className="bg-background p-8">
                <p className="font-display text-sm text-primary">0{i + 1}</p>
                <h3 className="mt-4 text-xl font-semibold">{p.t}</h3>
                <p className="mt-2 text-muted-foreground">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y border-t border-border">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHead eyebrow="Our history" title="How CES Europe started" />
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
            {/* TODO(client): founding story, milestones and how the Paoli agency came about. */}
            <PlaceholderNote>
              history to be supplied by CES Europe: founding year, how the business began, the Paoli
              agency and key milestones.
            </PlaceholderNote>
          </Reveal>
        </div>
      </section>

      <section className="section-y border-t border-border">
        <div className="container-x">
          <Reveal>
            <SectionHead eyebrow="Meet the team" title="The people behind the pit lane kit" />
          </Reveal>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {team.map((n, i) => (
              <Reveal key={n} delay={i * 80} className="bg-background p-8">
                <div
                  className="aspect-[4/5] w-full bg-surface"
                  role="img"
                  aria-label="Team photo to be supplied"
                />
                <p className="mt-5 font-display text-lg font-semibold">Team member {n}</p>
                <p className="mt-1 text-sm uppercase tracking-widest text-muted-foreground">Role</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-6">
            <PlaceholderNote>
              names, roles, photos and short bios to be supplied by CES Europe.
            </PlaceholderNote>
          </div>
        </div>
      </section>

      <section className="inverse section-y border-t border-border bg-deep">
        <div className="container-x">
          <Reveal>
            <SectionHead eyebrow="Why CES Europe" title="What you get when you work with us" />
          </Reveal>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((p, i) => (
              <Reveal key={p.t} delay={i * 80} className="bg-background p-8">
                <h3 className="text-xl font-semibold">{p.t}</h3>
                <p className="mt-3 text-muted-foreground">{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHead eyebrow="Where we are" title="Close to the teams" />
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={120}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Our small team is based in Banbury, geographically close to many of the UK's top
              motorsport teams, which makes site visits easy.
            </p>
            <address className="mt-6 not-italic leading-relaxed text-muted-foreground">
              <span className="text-foreground">{company.name}</span>
              <br />
              {company.street}
              <br />
              {company.town}, {company.postcode}
              <br />
              {company.country}
            </address>
            <ContactLines className="mt-5 text-muted-foreground" />
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/products">Our Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
