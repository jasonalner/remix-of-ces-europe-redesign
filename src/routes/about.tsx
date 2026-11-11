import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  ContactLines,
  PlaceholderNote,
  SectionHead,
} from "@/components/site/Blocks";
import { TitleBand, EnquiryBand } from "@/components/site/BoardBlocks";
import servicingPhoto from "@/assets/ces/servicing.jpg.asset.json";
import { Reveal } from "@/components/site/Reveal";
import { company } from "@/lib/catalog";
import { proofPoints } from "@/lib/content";
import pitstop from "@/assets/pitstop.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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

function About() {
  return <>
    <TitleBand eyebrow="About Us" title="Specialists in pit lane equipment, support and advice"><p className="mt-6 max-w-3xl text-lg text-muted-foreground">Official Paoli wheel gun agent for sales, servicing and upgrades, based in Banbury close to many of the UK's top motorsport teams.</p></TitleBand>
    <section className="section-y"><div className="container-x grid gap-12 lg:grid-cols-2"><Reveal><SectionHead eyebrow="Our history" title="Pit equipment, start to finish"/><p className="mt-6 text-lg leading-relaxed text-muted-foreground">CES Europe Ltd is a UK based pit equipment supplier of wheel gun and associated air driven equipment, from 2BAR to 300BAR, for use in all race series. We are the Paoli wheel gun official agent for new sales, servicing and upgrades.</p><p className="mt-6 text-lg leading-relaxed text-muted-foreground">We hold a complete range of Paoli wheel gun spares, new and remanufactured wheel guns, and an extensive range of cylinders, trolleys, air couplings and gantry assemblies. We can also spec air driven applications for any of the race series around the world.</p><div className="mt-6"><PlaceholderNote>history to be supplied by CES Europe: founding year, how the business began, the Paoli agency and key milestones.</PlaceholderNote></div><div className="mt-8 grid gap-4 sm:grid-cols-2">{[{t:"New sales",d:"The Paoli wheel gun range, supplied by the official agent."},{t:"Servicing",d:"Maintenance and repair to keep guns at race pace."},{t:"Exchange",d:"Swap worn units and stay on track."},{t:"Upgrades",d:"Bring existing guns up to current specification."}].map(p=><div key={p.t}><h3 className="font-semibold">{p.t}</h3><p className="mt-2 text-muted-foreground">{p.d}</p></div>)}</div></Reveal><div><img src={servicingPhoto.url} alt="Paoli wheel gun servicing at CES Europe" className="aspect-[4/3] w-full object-cover"/><img src={pitstop} alt="Pit crew changing a wheel on a single-seater race car" loading="lazy" className="mt-6 aspect-[16/9] w-full object-cover"/><address className="mt-6 not-italic text-muted-foreground">{company.name}<br/>{company.street}<br/>{company.town}, {company.postcode}<br/>{company.country}</address><ContactLines className="mt-5 text-muted-foreground"/></div></div></section>
    <section className="section-y border-y border-border bg-surface"><div className="container-x"><SectionHead eyebrow="Meet the team" title="The people behind the pit lane kit"/><div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{[1,2,3,4].map(n=><article key={n} className="border border-border bg-card p-6"><h3 className="font-display text-lg font-semibold">Team member {n}</h3><p className="mt-2 text-muted-foreground">Name, role, portrait and biography to be supplied by CES Europe.</p></article>)}</div></div></section>
    <section className="section-y"><div className="container-x"><SectionHead eyebrow="Why CES Europe" title="What you get when you work with us"/><div className="mt-10 grid gap-6 lg:grid-cols-3"><article className="border border-border p-8"><h3 className="text-xl font-semibold">Official Paoli agent</h3><p className="mt-3 text-muted-foreground">New sales, servicing and upgrades.</p></article><article className="border border-border p-8"><h3 className="text-xl font-semibold">Close to the teams</h3><p className="mt-3 text-muted-foreground">Our small team is based in Banbury, geographically close to many of the UK's top motorsport teams, which makes site visits easy.</p><div className="mt-6 flex flex-wrap gap-3"><Button asChild><Link to="/products">Our Products</Link></Button><Button asChild variant="outline"><Link to="/services">Our Services</Link></Button></div></article><article className="border border-border p-8"><h3 className="text-xl font-semibold">Servicing and advice</h3><ul className="mt-4 space-y-4">{proofPoints.map(p=><li key={p.t}><h4 className="font-semibold">{p.t}</h4><p className="mt-1 text-sm text-muted-foreground">{p.d}</p></li>)}</ul></article></div></div></section>
    <EnquiryBand/>
  </>;
}
