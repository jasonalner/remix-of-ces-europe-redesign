import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Category, Product } from "@/lib/catalog";
import { company } from "@/lib/catalog";
import { Swoosh } from "./Swoosh";

export function PageHero({ eyebrow, title, image, children }: { eyebrow: string; title: string; image: string; children?: ReactNode }) {
  return (
    <section className="inverse relative flex min-h-[60vh] items-end overflow-hidden pt-20">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-overlay" />
      <Swoosh className="absolute -right-24 top-1/2 h-[130%] -translate-y-1/2 text-primary opacity-15" />
      <div className="container-x relative pb-16 md:pb-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[1.05] md:text-6xl">{title}</h1>
        {children}
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
      {children && <div className="mt-6 text-lg leading-relaxed text-muted-foreground">{children}</div>}
    </div>
  );
}

export function CategoryTile({ category, label }: { category: Category; label?: string | undefined }) {
  return (
    <Link to="/products/$category" params={{ category: category.slug }} className="inverse group relative block aspect-[4/3] overflow-hidden bg-surface">
      <img src={category.image} alt={category.name} loading="lazy" className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60" />
      <div className="absolute inset-0 bg-overlay" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="text-xl font-semibold md:text-2xl">{label ?? category.name}</h3>
        <span className="mt-3 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-primary">
          View more <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function ProductCard({ product, image }: { product: Product; image: string }) {
  return (
    <article className="group flex flex-col border border-border bg-card">
      <Link to="/item/$product" params={{ product: product.id }} className="block aspect-square overflow-hidden bg-background">
        <img src={product.image ?? image} alt={product.name} loading="lazy" className={`h-full w-full ${product.image ? "object-contain p-8" : "object-cover"} transition-transform duration-700 group-hover:scale-105`} />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{product.spec}</p>
        <div className="mt-6 flex gap-3">
          <Button asChild size="sm"><Link to="/contact" search={{ product: product.name }}>Enquire</Link></Button>
          <Button asChild size="sm" variant="outline"><Link to="/item/$product" params={{ product: product.id }}>Details</Link></Button>
        </div>
      </div>
    </article>
  );
}

export function ContactForm({ product }: { product?: string | undefined }) {
  const [sent, setSent] = useState(false);
  if (sent) return <p className="border border-border p-8 text-lg">Thanks. Your message is noted — we will be in touch.</p>;
  return (
    <form
      className="grid gap-4 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        if (fd.get("website")) return; // honeypot
        setSent(true);
      }}
    >
      <label className="sr-only" htmlFor="name">Name</label>
      <Input id="name" name="name" required placeholder="Name" className="h-12" />
      <label className="sr-only" htmlFor="phone">Phone</label>
      <Input id="phone" name="phone" type="tel" placeholder="Phone" className="h-12" />
      <label className="sr-only" htmlFor="email">Email</label>
      <Input id="email" name="email" type="email" required placeholder="Email" className="h-12 sm:col-span-2" />
      <label className="sr-only" htmlFor="message">Message</label>
      <Textarea id="message" name="message" required rows={5} placeholder="Message" defaultValue={product ? `Enquiry: ${product}\n` : ""} className="sm:col-span-2" />
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <div className="sm:col-span-2"><Button type="submit" size="lg">Send message</Button></div>
    </form>
  );
}

export function ContactBand() {
  return (
    <section className="inverse section-y relative overflow-hidden border-t border-border bg-deep">
      <Swoosh className="absolute -left-40 -top-20 h-[140%] text-primary opacity-10" />
      <div className="container-x relative grid gap-14 lg:grid-cols-2">
        <div>
          <SectionHead eyebrow="Contact" title="Looking for pit lane performance?">
            <p>Tell us what you run and what you need. We will come back with the right kit.</p>
          </SectionHead>
          <address className="mt-10 not-italic leading-relaxed text-muted-foreground">
            <span className="text-foreground">{company.name}</span><br />{company.street}<br />{company.town}, {company.postcode}, {company.country}
          </address>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
