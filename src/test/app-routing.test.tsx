import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { categories, company, products, wheelGunModels } from "@/lib/catalog";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
function matchedRouteId(path: string) {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
  return router.matchRoutes(path).at(-1)?.routeId;
}

describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    expect(matchedRouteId("/")).not.toBe(rootRouteId);
  });

  it.each([
    "/about",
    "/contact",
    "/products",
    "/products/paoli-wheel-guns",
    "/products/extraction-systems",
    "/item/hurricane",
    "/services",
    "/services/servicing",
    "/services/advice",
    "/privacy",
    "/cookies",
    "/terms",
  ])("matches a page for %s", (path) => {
    expect(matchedRouteId(path)).not.toBe(rootRouteId);
  });
});

describe("Catalogue", () => {
  it("never shows prices", () => {
    const text = JSON.stringify(products);
    expect(text).not.toMatch(/£|\bprice\b|\bVAT\b/i);
  });

  it("has no placeholder products", () => {
    for (const p of products) expect(p.name).not.toMatch(/item \d/i);
  });

  it("only uses categories that exist, with unique ids and slugs", () => {
    const slugs = new Set(categories.map((c) => c.slug));
    expect(slugs.size).toBe(categories.length);
    expect(new Set(products.map((p) => p.id)).size).toBe(products.length);
    for (const p of products) expect(slugs.has(p.category)).toBe(true);
  });

  it("covers the agreed product categories", () => {
    const names = categories.map((c) => c.name);
    for (const expected of [
      "Paoli Wheel Guns",
      "Compressors",
      "Fittings",
      "Hoses",
      "Extraction Systems",
    ]) {
      expect(names).toContain(expected);
    }
  });

  it("offers every wheel gun model in the servicing form", () => {
    expect(wheelGunModels).toContain("Hurricane");
    expect(wheelGunModels.length).toBeGreaterThanOrEqual(12);
  });

  it("carries the client's contact details", () => {
    expect(company.phone).toBe("01295 279558");
    expect(company.email).toBe("sales@ceseuropeltd.co.uk");
  });
});
