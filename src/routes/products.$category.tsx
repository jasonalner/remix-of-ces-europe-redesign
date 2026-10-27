import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
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
        <div className="container-x">
          {items.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((p) => (
                <ProductCard key={p.id} product={p} image={category.image} />
              ))}
            </div>
          ) : (
            // TODO(client): product list for this category (datasheets, photos, specs).
            <div className="max-w-2xl border border-border p-8 md:p-10">
              <h2 className="text-2xl font-semibold">Tell us what you need</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Get in touch about {category.name.toLowerCase()} and we will recommend the right
                equipment for your team and series.
              </p>
              <Button asChild size="lg" className="mt-8">
                <Link to="/contact" search={{ product: category.name }}>
                  Enquire about {category.name.toLowerCase()}
                </Link>
              </Button>
            </div>
          )}
        </div>
      </section>
      <ContactBand />
    </>
  );
}
