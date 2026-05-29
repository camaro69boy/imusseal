import type { MetadataRoute } from "next";

const baseUrl = "https://www.imusseal.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/products",
    "/products/imus-seal-butyl-joist-tape",
    "/products/imus-seal-sealspacer-deck-board-spacer",
    "/blog",
    "/blog/the-next-evolution-of-imus-seal-butyl-joist-tape-new-for-2026",
    "/blog/deck-spacing-made-easy-with-imus-seal-sealspacer-the-best-deck-board-spacer-for-diyers-or-pros",
    "/blog/new-non-skid-version-of-imus-seal-butyl-joist-tape-released-how-does-it-compare-to-the-original",
    "/blog/should-pressure-treated-wood-deck-structures-be-flashed-to-prevent-rot",
    "/blog/how-to-prevent-deck-rot-and-extend-the-life-of-joists-and-beams",
    "/blog/creating-imus-seal-butyl-joist-tape-the-ultimate-deck-flashing-tape",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : route.startsWith("/products") ? 0.9 : 0.7,
  }));
}