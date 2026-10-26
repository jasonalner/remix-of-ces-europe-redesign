import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookies | CES Europe Ltd" },
      { name: "description", content: "How CES Europe Ltd uses cookies." },
      { property: "og:title", content: "Cookies | CES Europe Ltd" },
      { property: "og:description", content: "Cookie policy for CES Europe Ltd." },
    ],
  }),
  component: () => (
    <section className="container-x section-y max-w-3xl pt-32">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-4 text-4xl font-bold">Cookies</h1>
      <p className="mt-6 text-muted-foreground">We use necessary cookies to run this site and, with consent, analytics cookies. You can change your choice by clearing site data. Full policy text to be supplied.</p>
    </section>
  ),
});
