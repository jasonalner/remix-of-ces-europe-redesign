import { createFileRoute } from "@tanstack/react-router";
import { ContactForm, ContactLines, PageHero } from "@/components/site/Blocks";
import { company } from "@/lib/catalog";
import pitstop from "@/assets/pitstop.jpg";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { product?: string | undefined } => ({
    product: typeof s["product"] === "string" ? s["product"] : undefined,
  }),
  head: () => ({
    meta: [
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
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to the pit lane specialists"
        image={pitstop}
        imageAlt="Pit crew changing a wheel on a single-seater race car in the pit lane"
      />
      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-3">
          <div>
            <p className="eyebrow">Find us</p>
            <address className="mt-5 not-italic leading-relaxed text-muted-foreground">
              <span className="text-foreground">{company.name}</span>
              <br />
              {company.street}
              <br />
              {company.town}, {company.postcode}
              <br />
              {company.country}
            </address>
            <ContactLines className="mt-6 text-muted-foreground" />
            {/* TODO(client): opening hours and a map embed. */}
          </div>
          <div className="lg:col-span-2">
            <ContactForm product={product} />
          </div>
        </div>
      </section>
    </>
  );
}
