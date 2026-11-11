import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/catalog";
import { SectionHead } from "./Blocks";

export function TitleBand({ title, eyebrow, parent, children }: { title: string; eyebrow: string; parent?: "Products" | "Services"; children?: ReactNode }) {
  return <section className="border-b border-border bg-surface pb-12 pt-32 md:pb-16 md:pt-36"><div className="container-x">
    <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap gap-2 text-sm text-muted-foreground"><Link to="/" className="hover:text-primary">Home</Link><span>/</span>{parent && <><Link to={parent === "Products" ? "/products" : "/services"} className="hover:text-primary">{parent}</Link><span>/</span></>}<span aria-current="page">{eyebrow}</span></nav>
    <p className="eyebrow">{eyebrow}</p><h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">{title}</h1>{children}
  </div></section>;
}

export function EnquiryBand({ title = "Looking for pit lane performance?", call = false }: { title?: string; call?: boolean }) {
  return <section className="inverse relative overflow-hidden border-t border-border bg-deep py-14"><div className="container-x flex flex-col gap-8 md:flex-row md:items-center md:justify-between"><div className="max-w-2xl"><h2 className="text-2xl font-semibold md:text-3xl">{title}</h2><p className="mt-3 text-muted-foreground">Tell us what you run and what you need. We will come back with the right kit.</p></div><div className="flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/contact">Contact Us</Link></Button>{call && <Button asChild variant="outline" size="lg"><a href={company.phoneHref}>Call {company.phone}</a></Button>}</div></div></section>;
}

export function StepBand({ eyebrow, title, steps }: { eyebrow: string; title: string; steps: { t: string; d: string }[] }) {
  return <section className="section-y border-y border-border bg-surface"><div className="container-x"><SectionHead eyebrow={eyebrow} title={title}/><ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{steps.map((s,i) => <li key={s.t}><p className="font-display text-sm text-primary">0{i+1}</p><h3 className="mt-4 text-xl font-semibold">{s.t}</h3><p className="mt-3 text-muted-foreground">{s.d}</p></li>)}</ol></div></section>;
}

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return <><TitleBand title={title} eyebrow="Legal"/><section className="section-y"><div className="container-x grid items-start gap-10 md:grid-cols-[220px_minmax(0,1fr)]"><aside className="border border-border p-5"><h2 className="font-display font-semibold">On this page</h2><a href="#policy" className="mt-4 block text-sm text-muted-foreground hover:text-primary">{title}</a><nav aria-label="Legal policies" className="mt-6 space-y-3 border-t border-border pt-5 text-sm"><Link to="/privacy" className="block hover:text-primary">Privacy Policy</Link><Link to="/cookies" className="block hover:text-primary">Cookies</Link><Link to="/terms" className="block hover:text-primary">Terms</Link></nav></aside><article id="policy" className="min-w-0 scroll-mt-28"><h2 className="text-2xl font-semibold">{title}</h2><div className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">{children}</div></article></div></section></>;
}