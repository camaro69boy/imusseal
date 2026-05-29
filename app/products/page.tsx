import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Imus Seal deck protection products, including butyl joist tape and SealSpacer deck board spacers.",
};

export default function ProductsPage() {
  return (
    <main className="page">
      <section className="pageHero">
        <p className="eyebrow">Products</p>
        <h1>Deck products built for long-term performance.</h1>
        <p>
          Practical, premium products designed to help protect deck structures
          and make installation easier.
        </p>
      </section>

      <section className="contentSection productGrid">
        <article className="productCard">
          <div className="productImageWrap">
            <Image
              src="/images/products/sisbjtns_deck_joist_tape_sizes.png"
              alt="Non-Skid Imus Seal Butyl Joist Tape for flashing deck joists and beams in 1-5/8 inch, 4 inch and 6 inch sizes"
              width={700}
              height={500}
              className="productImage"
            />
          </div>

          <div className="productCardContent">
            <p className="eyebrow">Deck Joist Protection</p>
            <h2>Butyl Joist Tape</h2>
            <p>
              Premium butyl flashing tape designed to help seal deck joists and
              beams from moisture intrusion and premature rot.
            </p>

            <Link
              className="button primary"
              href="/products/imus-seal-butyl-joist-tape"
            >
              Learn More
            </Link>
          </div>
        </article>

        <article className="productCard">
          <div className="productImageWrap">
            <Image
              src="/images/products/sisdbs-3pk.png"
              alt="Imus Seal SealSpacer Deck Board Spacer Classic 3 pack"
              width={700}
              height={500}
              className="productImage"
            />
          </div>

          <div className="productCardContent">
            <p className="eyebrow">Deck Board Spacing</p>
            <h2>SealSpacer Deck Board Spacer</h2>
            <p>
              A reusable deck board spacing tool designed to help create
              consistent, professional-looking deck board gaps.
            </p>

            <Link
              className="button primary"
              href="/products/imus-seal-sealspacer-deck-board-spacer"
            >
              Learn More
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}