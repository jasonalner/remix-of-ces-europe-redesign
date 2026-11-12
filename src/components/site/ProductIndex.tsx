import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Item = { slug: string; name: string; image: string; intro: string };

/** Ruled product index. Heading sits left; hovering a row reveals its photo in the left column. */
export function ProductIndex({ items }: { items: Item[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-32">
          <p className="label-num">02 — Products</p>
          <h2 className="display-xl mt-5 text-3xl md:text-4xl">
            Built for <span className="text-primary">every</span> stop
          </h2>
          <Button asChild variant="outline" className="mt-8">
            <Link to="/products">
              Our Products <ArrowRight />
            </Link>
          </Button>
          <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden bg-surface lg:block" aria-hidden="true">
            {items.map((c, i) => (
              <img
                key={c.slug}
                src={c.image}
                alt=""
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${active === i ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
              />
            ))}
          </div>
        </div>
      </div>

      <ul className="border-t border-border lg:col-span-8" onMouseLeave={() => setActive(null)}>
        {items.map((c, i) => (
          <li key={c.slug} className="border-b border-border">
            <Link
              to="/products/$category"
              params={{ category: c.slug }}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 py-6 md:grid-cols-[3rem_1fr_auto] md:py-7"
            >
              <span className="label-num">0{i + 1}</span>
              <span>
                <span className="block font-display text-xl font-semibold uppercase tracking-tight text-deep transition-colors duration-300 group-hover:text-primary md:text-2xl">
                  {c.name}
                </span>
                <span className="mt-1 block max-w-md text-sm text-muted-foreground">{c.intro}</span>
              </span>
              <ArrowRight className="size-5 text-primary transition-transform duration-500 group-hover:-rotate-45" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
