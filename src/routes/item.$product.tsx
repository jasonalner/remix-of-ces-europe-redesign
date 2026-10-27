import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ContactForm } from "@/components/site/Blocks";
import { getCategory, getProduct } from "@/lib/catalog";

export const Route = createFileRoute("/item/$product")({
  loader: ({ params }) => {
    const product = getProduct(params.product);
    if (!product) throw notFound();
    return { product, category: getCategory(product.category)! };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} | ${loaderData.category.name} | CES Europe Ltd` },
          {
            name: "description",
            content: `${loaderData.product.name}: ${loaderData.product.summary} Enquire with CES Europe, the official UK Paoli agent.`,
          },
          { property: "og:title", content: `${loaderData.product.name} | CES Europe Ltd` },
          { property: "og:description", content: loaderData.product.summary },
        ]
      : [{ title: "Unavailable | CES Europe Ltd" }, { name: "robots", content: "noindex" }],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { product, category } = Route.useLoaderData();
  return (
    <section className="section-y pt-32 md:pt-40">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <img
          src={product.image ?? category.image}
          alt={product.image ? product.name : ""}
          className={`aspect-square w-full ${product.image ? "border border-border object-contain p-10" : "object-cover"}`}
        />
        <div>
          <Link
            to="/products/$category"
            params={{ category: category.slug }}
            className="eyebrow hover:underline"
          >
            {category.name}
          </Link>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">{product.name}</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{product.summary}</p>
          {product.specs.length > 0 && (
            <>
              <h2 className="mt-10 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Specification
              </h2>
              <ul className="mt-4 divide-y divide-border border-y border-border">
                {product.specs.map((s) => (
                  <li key={s} className="py-3">
                    {s}
                  </li>
                ))}
              </ul>
            </>
          )}
          {/* TODO(client/Paoli): datasheet and brochure downloads for each model. */}
          <h2 className="mt-12 text-2xl font-semibold">Enquire about the {product.name}</h2>
          <p className="mt-3 text-muted-foreground">
            Tell us your team or series and what you need, and we will come back to you.
          </p>
          <div className="mt-6">
            <ContactForm product={product.name} />
          </div>
        </div>
      </div>
    </section>
  );
}
