import { createFileRoute } from "@tanstack/react-router";
import { CategoryTile, SectionHead } from "@/components/site/Blocks";
import { TitleBand } from "@/components/site/BoardBlocks";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { categories } from "@/lib/catalog";
import air from "@/assets/air.jpg";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Our Products | CES Europe Ltd" },
      {
        name: "description",
        content:
          "Paoli wheel guns and accessories, compressors, regulators, cylinders, fittings, hoses and extraction systems from CES Europe, the official UK Paoli agent.",
      },
      { property: "og:title", content: "Our Products | CES Europe Ltd" },
      {
        property: "og:description",
        content: "Wheel guns and air driven pit equipment from 2BAR to 300BAR.",
      },
    ],
  }),
  component: Products,
});

function Products() {
 return <><TitleBand eyebrow="Our Products" title="Wheel guns and air equipment, 2BAR to 300BAR"/>
 <section className="section-y"><div className="container-x"><div className="grid items-center gap-10 lg:grid-cols-2"><SectionHead eyebrow="Our Products" title="Pit equipment, start to finish"><p>CES Europe Ltd is a UK based pit equipment supplier of wheel gun and associated air driven equipment, from 2BAR to 300BAR, for use in all race series.</p></SectionHead><img src={air} alt="Air driven pit equipment" className="aspect-[16/9] w-full object-cover"/></div></div></section>
 <section className="section-y border-t border-border"><div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{categories.map((c,i)=><Reveal key={c.slug} delay={(i%3)*80}><CategoryTile category={c} description/></Reveal>)}</div></section>
 <section className="section-y border-t border-border bg-surface"><div className="container-x flex flex-col gap-8 md:flex-row md:items-center md:justify-between"><div><h2 className="text-3xl font-bold">The right kit for your series</h2><p className="mt-3 text-muted-foreground">Talk to us about which gun suits your needs and how to spec air driven equipment for your race series.</p></div><div className="flex shrink-0 flex-wrap gap-3"><Button asChild size="lg"><Link to="/services/advice">Request advice</Link></Button><Button asChild size="lg" variant="outline"><Link to="/contact">Enquire</Link></Button></div></div></section></>;
}
