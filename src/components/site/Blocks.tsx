import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { useId, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Category, Product } from "@/lib/catalog";
import { company } from "@/lib/catalog";
import { cn } from "@/lib/utils";
import { Swoosh } from "./Swoosh";

export function PageHero({
  eyebrow,
  title,
  image,
  imageAlt = "",
  children,
}: {
  eyebrow: string;
  title: string;
  image: string;
  imageAlt?: string;
  children?: ReactNode;
}) {
  return (
    <section className="inverse relative flex min-h-[60vh] items-end overflow-hidden pt-20">
      <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
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

export function SectionHead({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
      {children && (
        <div className="mt-6 text-lg leading-relaxed text-muted-foreground">{children}</div>
      )}
    </div>
  );
}

/** Flags content the client still has to supply, so it cannot be missed in review. */
export function PlaceholderNote({ children }: { children: ReactNode }) {
  return (
    <p className="inline-block border border-dashed border-primary/60 px-3 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
      Placeholder: {children}
    </p>
  );
}

export function CategoryTile({
  category,
  label,
}: {
  category: Category;
  label?: string | undefined;
}) {
  return (
    <Link
      to="/products/$category"
      params={{ category: category.slug }}
      className="inverse group relative block aspect-[4/3] overflow-hidden bg-surface"
    >
      <img
        src={category.image}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
      />
      <div className="absolute inset-0 bg-overlay" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="text-xl font-semibold md:text-2xl">{label ?? category.name}</h3>
        <span className="mt-3 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors group-hover:text-primary">
          View more{" "}
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function ProductCard({ product, image }: { product: Product; image: string }) {
  return (
    <article className="group flex flex-col border border-border bg-card">
      <Link
        to="/item/$product"
        params={{ product: product.id }}
        className="block aspect-square overflow-hidden bg-background"
        aria-label={product.name}
      >
        <img
          src={product.image ?? image}
          alt={product.name}
          loading="lazy"
          className={`h-full w-full ${product.image ? "object-contain p-8" : "object-cover"} transition-transform duration-700 group-hover:scale-105`}
        />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{product.summary}</p>
        <div className="mt-6 flex gap-3">
          <Button asChild size="sm">
            <Link to="/contact" search={{ product: product.name }}>
              Enquire
            </Link>
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link to="/item/$product" params={{ product: product.id }}>
              Details
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

export type EnquiryField = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "select" | "textarea";
  required?: boolean;
  options?: string[];
  wide?: boolean;
  defaultValue?: string;
};

const selectClass =
  "flex h-12 w-full rounded-md border border-input bg-background px-3 text-base text-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm";

/**
 * Configurable enquiry form used for general, product, servicing and advice enquiries.
 * PROTOTYPE: submitting only shows the thank-you message. In the WordPress build this
 * is replaced by a form handler that emails sales@ceseuropeltd.co.uk and keeps a copy.
 */
export function EnquiryForm({
  fields,
  submitLabel = "Send enquiry",
  successMessage = "Thank you. Your enquiry has been received and we will be in touch.",
}: {
  fields: EnquiryField[];
  submitLabel?: string;
  successMessage?: string;
}) {
  const uid = useId();
  const [sent, setSent] = useState(false);
  if (sent)
    return (
      <p role="status" className="border border-border p-8 text-lg">
        {successMessage}
      </p>
    );
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
      {fields.map((f) => {
        const id = `${uid}-${f.name}`;
        const wrap = cn(f.wide || f.type === "textarea" ? "sm:col-span-2" : "");
        const label = (
          <label className="sr-only" htmlFor={id}>
            {f.label}
            {f.required ? "" : " (optional)"}
          </label>
        );
        const placeholder = f.required ? f.label : `${f.label} (optional)`;
        if (f.type === "select") {
          return (
            <div key={f.name} className={wrap}>
              {label}
              <select
                id={id}
                name={f.name}
                required={f.required}
                defaultValue=""
                className={selectClass}
              >
                <option value="" disabled>
                  {placeholder}
                </option>
                {f.options?.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </div>
          );
        }
        if (f.type === "textarea") {
          return (
            <div key={f.name} className={wrap}>
              {label}
              <Textarea
                id={id}
                name={f.name}
                required={f.required}
                rows={5}
                placeholder={placeholder}
                defaultValue={f.defaultValue ?? ""}
              />
            </div>
          );
        }
        return (
          <div key={f.name} className={wrap}>
            {label}
            <Input
              id={id}
              name={f.name}
              type={f.type ?? "text"}
              required={f.required}
              placeholder={placeholder}
              defaultValue={f.defaultValue ?? ""}
              className="h-12"
            />
          </div>
        );
      })}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
      <div className="sm:col-span-2">
        <Button type="submit" size="lg">
          {submitLabel}
        </Button>
      </div>
    </form>
  );
}

export function ContactForm({ product }: { product?: string | undefined }) {
  return (
    <EnquiryForm
      submitLabel="Send enquiry"
      fields={[
        { name: "name", label: "Name", required: true },
        { name: "phone", label: "Phone", type: "tel" },
        { name: "email", label: "Email", type: "email", required: true, wide: true },
        { name: "team", label: "Team or series", wide: true },
        {
          name: "message",
          label: "Message",
          type: "textarea",
          required: true,
          defaultValue: product ? `Enquiry: ${product}\n` : "",
        },
      ]}
    />
  );
}

export function ContactLines({ className }: { className?: string }) {
  return (
    <ul className={cn("space-y-2", className)}>
      <li>
        <a
          href={company.phoneHref}
          className="inline-flex items-center gap-3 hover:text-foreground"
        >
          <Phone className="size-4 text-primary" aria-hidden /> {company.phone}
        </a>
      </li>
      <li>
        <a
          href={`mailto:${company.email}`}
          className="inline-flex items-center gap-3 hover:text-foreground"
        >
          <Mail className="size-4 text-primary" aria-hidden /> {company.email}
        </a>
      </li>
    </ul>
  );
}

/** Slim call-to-action for pages that already carry their own enquiry form. */
export function CallBand() {
  return (
    <section className="inverse relative overflow-hidden border-t border-border bg-deep py-14">
      <div className="container-x relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-2xl font-semibold md:text-3xl">
          Prefer to talk it through?
        </p>
        <ContactLines className="text-lg text-muted-foreground" />
      </div>
    </section>
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
            <span className="text-foreground">{company.name}</span>
            <br />
            {company.street}
            <br />
            {company.town}, {company.postcode}, {company.country}
          </address>
          <ContactLines className="mt-6 text-muted-foreground" />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
