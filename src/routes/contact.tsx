import { createFileRoute } from "@tanstack/react-router";
import { ContactForm, ContactLines } from "@/components/site/Blocks";
import { company } from "@/lib/catalog";
import { TitleBand } from "@/components/site/BoardBlocks";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { product?: string | undefined } => ({
    product: typeof s["product"] === "string" ? s["product"] : undefined,
  }),
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Contact Us | CES Europe Ltd, Banbury" },
      {
        name: "description",
        content:
          "Contact CES Europe Ltd in Banbury on 01295 279558 or sales@ceseuropeltd.co.uk for Paoli wheel guns, servicing, advice and pit equipment.",
      },
      { property: "og:title", content: "Contact CES Europe Ltd" },
      { property: "og:description", content: "Talk to the UK Paoli wheel gun agent." },
    ],
  }),
  component: Contact,
});

function Contact() {
 const { product } = Route.useSearch();
 return <><TitleBand eyebrow="Contact Us" title="Talk to the pit lane specialists"/>
 <section className="section-y"><div className="container-x grid gap-12 lg:grid-cols-2"><div><h2 className="text-3xl font-bold">Send enquiry</h2><div className="mt-8"><ContactForm product={product} singleColumn/></div></div><div><h2 className="text-3xl font-bold">Find us</h2><div className="mt-8 space-y-4"><div className="border border-border p-6"><ContactLines className="text-muted-foreground"/></div><div className="border border-border p-6"><h3 className="font-semibold">Address</h3><address className="mt-3 not-italic leading-relaxed text-muted-foreground"><span className="text-foreground">{company.name}</span><br/>{company.street}<br/>{company.town}, {company.postcode}<br/>{company.country}</address></div><div className="border border-border p-6"><h3 className="font-semibold">Opening hours</h3><p className="mt-3 text-muted-foreground">Opening hours to be confirmed by CES Europe.</p></div></div></div></div></section>
 <section className="border-t border-border bg-surface py-12"><div className="container-x"><iframe title="CES Europe, Penhill Industrial Park, Banbury" src="https://maps.google.com/maps?q=Unit%204%2C%20Penhill%20Industrial%20Park%2C%20Beaumont%20Road%2C%20Banbury%2C%20OX16%201RW&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-80 w-full border border-border md:h-96"/><a href="https://www.google.com/maps/search/?api=1&query=Penhill+Industrial+Park+Banbury+OX16+1RW" target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-primary hover:underline">{company.street}, {company.town}, {company.postcode}</a></div></section></>;
}
