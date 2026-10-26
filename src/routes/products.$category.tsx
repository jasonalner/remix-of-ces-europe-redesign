import { createFileRoute, notFound } from "@tanstack/react-router";
import { ContactBand, PageHero, ProductCard } from "@/components/site/Blocks";
import { getCategory, products } from "@/lib/catalog";

export const Route = createFileRoute("/products/$category")({
  loader: ({ params }) => {
    const category = getCategory(params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
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
  const items = products.filter((p) => p.category === category.slug);
  return (
    <>
      <PageHero eyebrow="Our Products" title={category.name} image={category.image}>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{category.intro}</p>
      </PageHero>
      <section className="section-y">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => <ProductCard key={p.id} product={p} image={category.image} />)}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
