import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Shopify pages
      {
        source: "/pages/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/pages/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/pages/deck-size-and-protection-calculator",
        destination: "/products/imus-seal-butyl-joist-tape",
        permanent: true,
      },
      {
        source: "/pages/promotions",
        destination: "/products",
        permanent: true,
      },

      // Shopify collections / apparel
      {
        source: "/collections",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/collections/all",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/collections/apparel",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/imus-seal-five-panel-trucker-hat",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/imus-seal-short-sleeve-t-shirt",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/imus-seal-camouflage-short-sleeve-t-shirt",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/products/imus-seal-american-flag-short-sleeve-t-shirt",
        destination: "/products",
        permanent: true,
      },

      // Shopify blog index
      {
        source: "/blogs/blog",
        destination: "/blog",
        permanent: true,
      },

      // Shopify blog articles
      {
        source:
          "/blogs/blog/creating-imus-seal-butyl-joist-tape-the-ultimate-deck-flashing-tape",
        destination:
          "/blog/creating-imus-seal-butyl-joist-tape-the-ultimate-deck-flashing-tape",
        permanent: true,
      },
      {
        source:
          "/blogs/blog/how-to-prevent-deck-rot-and-extend-the-life-of-joists-and-beams",
        destination:
          "/blog/how-to-prevent-deck-rot-and-extend-the-life-of-joists-and-beams",
        permanent: true,
      },
      {
        source:
          "/blogs/blog/should-pressure-treated-wood-deck-structures-be-flashed-to-prevent-rot",
        destination:
          "/blog/should-pressure-treated-wood-deck-structures-be-flashed-to-prevent-rot",
        permanent: true,
      },
      {
        source:
          "/blogs/blog/new-non-skid-version-of-imus-seal%C2%AE-butyl-joist-tape-released-how-does-it-compare-to-the-original",
        destination:
          "/blog/new-non-skid-version-of-imus-seal-butyl-joist-tape-released-how-does-it-compare-to-the-original",
        permanent: true,
      },
      {
        source:
          "/blogs/blog/new-non-skid-version-of-imus-seal-butyl-joist-tape-released-how-does-it-compare-to-the-original",
        destination:
          "/blog/new-non-skid-version-of-imus-seal-butyl-joist-tape-released-how-does-it-compare-to-the-original",
        permanent: true,
      },
      {
        source:
          "/blogs/blog/deck-spacing-made-easy-with-imus-seal%C2%AE-sealspacer%E2%84%A2-the-best-deck-board-spacer-for-diyers-or-pros",
        destination:
          "/blog/deck-spacing-made-easy-with-imus-seal-sealspacer-the-best-deck-board-spacer-for-diyers-or-pros",
        permanent: true,
      },
      {
        source:
          "/blogs/blog/deck-spacing-made-easy-with-imus-seal-sealspacer-the-best-deck-board-spacer-for-diyers-or-pros",
        destination:
          "/blog/deck-spacing-made-easy-with-imus-seal-sealspacer-the-best-deck-board-spacer-for-diyers-or-pros",
        permanent: true,
      },
      {
        source:
          "/blogs/blog/the-next-evolution-of-imus-seal%C2%AE-butyl-joist-tape-new-for-2026",
        destination:
          "/blog/the-next-evolution-of-imus-seal-butyl-joist-tape-new-for-2026",
        permanent: true,
      },
      {
        source:
          "/blogs/blog/the-next-evolution-of-imus-seal-butyl-joist-tape-new-for-2026",
        destination:
          "/blog/the-next-evolution-of-imus-seal-butyl-joist-tape-new-for-2026",
        permanent: true,
      },

      // Shopify policy pages no longer needed on this informational site
      {
        source: "/policies/terms-of-service",
        destination: "/",
        permanent: true,
      },
      {
        source: "/policies/privacy-policy",
        destination: "/",
        permanent: true,
      },
      {
        source: "/policies/shipping-policy",
        destination: "/",
        permanent: true,
      },
      {
        source: "/policies/refund-policy",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;