import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/BoardBlocks";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Cookies | CES Europe Ltd" },
      { name: "description", content: "How CES Europe Ltd uses cookies." },
      { property: "og:title", content: "Cookies | CES Europe Ltd" },
      { property: "og:description", content: "Cookie policy for CES Europe Ltd." },
    ],
  }),
  component: () => (
    <LegalPage title="Cookies">
      <p className="mt-6 text-muted-foreground">We use necessary cookies to run this site and, with consent, analytics cookies. You can change your choice by clearing site data. Full policy text to be supplied.</p>
    </LegalPage>
  ),
});
