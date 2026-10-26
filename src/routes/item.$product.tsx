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
          { title: `${loaderData.product.name} | CES Europe Ltd` },
          { name: "description", content: `${loaderData.product.name} from CES Europe. Request a quote.` },
          { property: "og:title", content: loaderData.product.name },
          { property: "og:description", content: `Request a quote from CES Europe.` },
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
        <img src={product.image ?? category.image} alt={product.name} className={`aspect-square w-full ${product.image ? "border border-border object-contain p-10" : "object-cover"}`} />
        <div>
          <Link to="/products/$category" params={{ category: category.slug }} className="eyebrow hover:underline">{category.name}</Link>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">{product.name}</h1>
          <dl className="mt-8 divide-y divide-border border-y border-border">
            <div className="flex justify-between py-4"><dt className="text-muted-foreground">Category</dt><dd>{category.name}</dd></div>
            <div className="flex justify-between py-4"><dt className="text-muted-foreground">Specification</dt><dd>{product.spec}</dd></div>
          </dl>
          <h2 className="mt-12 text-2xl font-semibold">Request a quote</h2>
          <div className="mt-6"><ContactForm product={product.name} /></div>
        </div>
      </div>
    </section>
  );
}
