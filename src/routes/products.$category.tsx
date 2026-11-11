import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ContactForm, ProductCard, SectionHead } from "@/components/site/Blocks";
import { categories, getCategory, products } from "@/lib/catalog";

import { TitleBand } from "@/components/site/BoardBlocks";

export const Route = createFileRoute("/products/$category")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
           { property: "og:type", content: "website" },
           { name: "twitter:card", content: "summary_large_image" },
          { title: `${loaderData.category.name} | CES Europe Ltd` },
          { name: "description", content: loaderData.category.intro },
          { property: "og:title", content: `${loaderData.category.name} | CES Europe Ltd` },
          { property: "og:description", content: loaderData.category.intro },
        ]
      : [{ title: "Unavailable | CES Europe Ltd" }, { name: "robots", content: "noindex" }],
  }),
  component: CategoryPage,
});

function CategoryPage() {
 const { category } = Route.useLoaderData();
 const items = products.filter(p=>p.category===category.slug);
 const related = categories.filter(c=>c.slug!==category.slug);
 return <><TitleBand eyebrow={category.name} parent="Products" title={category.name}><nav aria-label="Product categories" className="mt-7 flex flex-wrap gap-2">{categories.map(c=><Button key={c.slug} asChild variant={c.slug===category.slug?"default":"outline"} size="sm"><Link to="/products/$category" params={{category:c.slug}}>{c.name}</Link></Button>)}</nav></TitleBand>
 <section className="section-y"><div className="container-x grid items-center gap-12 lg:grid-cols-2"><SectionHead eyebrow="Our Products" title={category.name}><p>{category.intro}</p></SectionHead><img src={category.image} alt={category.name} className="aspect-[16/9] w-full object-cover"/></div></section>
 <section className="section-y border-t border-border"><div className="container-x">{items.length>0?<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{items.map(p=><ProductCard key={p.id} product={p} image={category.image}/>)}</div>:<div className="max-w-2xl"><h2 className="text-2xl font-semibold">Tell us what you need</h2><p className="mt-4 text-lg text-muted-foreground">Get in touch about {category.name.toLowerCase()} and we will recommend the right equipment for your team and series.</p><Button asChild size="lg" className="mt-8"><Link to="/contact" search={{product:category.name}}>Enquire about {category.name.toLowerCase()}</Link></Button></div>}</div></section>
 <section className="section-y border-y border-border bg-surface"><div className="container-x"><SectionHead eyebrow="Specifications" title="Specifications and downloads"/><div className="mt-10 grid gap-6 md:grid-cols-2"><div className="border border-border bg-card p-8"><h3 className="text-xl font-semibold">Specification</h3>{items.some(p=>p.specs.length>0)?<ul className="mt-5 divide-y divide-border">{items.filter(p=>p.specs.length>0).map(p=><li key={p.id} className="py-3"><Link to="/item/$product" params={{product:p.id}} className="font-semibold hover:text-primary">{p.name}</Link><p className="mt-2 text-sm text-muted-foreground">{p.specs[0]}</p></li>)}</ul>:<p className="mt-4 text-muted-foreground">Get in touch for the full specification.</p>}</div><div className="border border-border bg-card p-8"><h3 className="text-xl font-semibold">Datasheets and brochures</h3><p className="mt-4 text-muted-foreground">Datasheets and brochures to be supplied by CES Europe.</p><Button asChild variant="outline" className="mt-6"><Link to="/contact" search={{product:category.name}}>Enquire</Link></Button></div></div></div></section>
 <section className="section-y"><div className="container-x"><SectionHead eyebrow="Product enquiry" title="Enquire about this range"/><div className="mt-10 max-w-4xl"><ContactForm product={category.name}/></div></div></section>
 <section className="section-y border-t border-border bg-surface"><div className="container-x"><h2 className="text-3xl font-bold">Other ranges</h2><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{related.map(c=><Link key={c.slug} to="/products/$category" params={{category:c.slug}} className="border border-border bg-card p-6"><h3 className="text-lg font-semibold">{c.name}</h3><p className="mt-3 text-sm text-brand-link">View more →</p></Link>)}</div></div></section></>;
}
