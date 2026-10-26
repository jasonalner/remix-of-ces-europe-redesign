import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | CES Europe Ltd" },
      { name: "description", content: "Privacy policy for CES Europe Ltd." },
      { property: "og:title", content: "Privacy Policy | CES Europe Ltd" },
      { property: "og:description", content: "How CES Europe Ltd handles your data." },
    ],
  }),
  component: () => (
    <section className="container-x section-y max-w-3xl pt-32">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-4 text-4xl font-bold">Privacy Policy</h1>
      <p className="mt-6 text-muted-foreground">Full policy text to be supplied by CES Europe Ltd.</p>
    </section>
  ),
});
