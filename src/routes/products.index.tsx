import { createFileRoute } from "@tanstack/react-router";
import { CategoryTile, PageHero } from "@/components/site/Blocks";
import { Reveal } from "@/components/site/Reveal";
import { categories } from "@/lib/catalog";
import air from "@/assets/air.jpg";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Our Products | CES Europe Ltd" },
      { name: "description", content: "Paoli wheel guns, servicing, compressors, regulators, cylinders, hoses and fittings." },
      { property: "og:title", content: "Our Products | CES Europe Ltd" },
      { property: "og:description", content: "Wheel guns and air driven pit equipment from 2BAR to 300BAR." },
    ],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      <PageHero eyebrow="Our Products" title="Wheel guns and air equipment, 2BAR to 300BAR" image={air} />
      <section className="section-y">
        <div className="container-x grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 80}><CategoryTile category={c} /></Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
