import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/BoardBlocks";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Privacy Policy | CES Europe Ltd" },
      { name: "description", content: "Privacy policy for CES Europe Ltd." },
      { property: "og:title", content: "Privacy Policy | CES Europe Ltd" },
      { property: "og:description", content: "How CES Europe Ltd handles your data." },
    ],
  }),
  component: () => (
    <LegalPage title="Privacy Policy">
      <p className="mt-6 text-muted-foreground">Full policy text to be supplied by CES Europe Ltd.</p>
    </LegalPage>
  ),
});
