import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms | CES Europe Ltd" },
      { name: "description", content: "Terms of use for the CES Europe Ltd website." },
      { property: "og:title", content: "Terms | CES Europe Ltd" },
      { property: "og:description", content: "Website terms for CES Europe Ltd." },
    ],
  }),
  component: () => (
    <section className="container-x section-y max-w-3xl pt-32">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-4 text-4xl font-bold">Terms</h1>
      {/* TODO(client): terms text to be supplied or approved by CES Europe Ltd. */}
      <p className="mt-6 text-muted-foreground">Full terms to be supplied by CES Europe Ltd.</p>
    </section>
  ),
});
