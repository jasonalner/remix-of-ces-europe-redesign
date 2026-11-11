import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/BoardBlocks";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Terms | CES Europe Ltd" },
      { name: "description", content: "Terms of use for the CES Europe Ltd website." },
      { property: "og:title", content: "Terms | CES Europe Ltd" },
      { property: "og:description", content: "Website terms for CES Europe Ltd." },
    ],
  }),
  component: () => (
    <LegalPage title="Terms">
      <p className="mt-6 text-muted-foreground">Full terms to be supplied by CES Europe Ltd.</p>
    </LegalPage>
  ),
});
