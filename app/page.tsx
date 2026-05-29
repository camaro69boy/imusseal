import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Premium American-Made Deck Products",
  description:
    "Imus Seal creates premium deck products for deck protection, joist flashing, and consistent deck board spacing.",
};

export default function HomePage() {
  return (
    <main className="page">
      <section className="homeHero">
        <div>
          <p className="eyebrow">Premium Deck Products</p>
          <h1>Build better decks from the structure up.</h1>
          <p>
            Imus Seal creates practical, American-made deck products designed to
            help protect deck structures and make installation easier.
          </p>

          <div className="heroActions">
            <Link className="button primary" href="/products">
              View Products
            </Link>
            <Link className="button secondary" href="/blog">
              Read Articles
            </Link>
          </div>
        </div>

        <div className="homeHeroImage">
          <Image
            src="/images/products/deck_imus_seal_featured.png"
            alt="Modern deck in the woods with Imus Seal Butyl Joist Tape"
            width={1000}
            height={700}
            priority
          />
        </div>
      </section>

      <section className="contentSection">
        <div className="sectionIntro">
          <p className="eyebrow">Products</p>
          <h2>Purpose-built products for longer-lasting decks.</h2>
          <p>
            Explore premium products for deck joist protection and consistent
            deck board spacing.
          </p>
        </div>

        <div className="productGrid">
          <article className="productCard">
            <div className="productImageWrap">
              <Image
                src="/images/products/sisbjtns_deck_joist_tape_sizes.png"
                alt='Non-Skid Imus Seal Butyl Joist Tape for flashing deck joists and beams in 1-5/8", 4", and 6" sizes'
                width={700}
                height={500}
                className="productImage"
              />
            </div>

            <div className="productCardContent">
              <p className="eyebrow">Deck Joist Protection</p>
              <h2>Butyl Joist Tape</h2>
              <p>
                Self-adhering flashing tape for joists and beams designed to
                protect wooden deck structures from water damage and rot.
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
                Patent-pending, multi-thickness tool designed to accurately
                space gaps between decking during installation.
              </p>

              <Link
                className="button primary"
                href="/products/imus-seal-sealspacer-deck-board-spacer"
              >
                Learn More
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="homeSplit">
        <Image
          src="/images/products/deck_rot_featured.png"
          alt="Structural deck rot"
          width={900}
          height={600}
        />

        <div>
          <p className="eyebrow">Deck Protection</p>
          <h2>Want to prevent deck rot?</h2>
          <p>
            Deck structures are vulnerable to trapped moisture, debris, and
            fastener penetrations. Imus Seal Butyl Joist Tape helps protect
            joists and beams before decking is installed.
          </p>

          <Link
            className="button primary"
            href="/products/imus-seal-butyl-joist-tape"
          >
            Explore Joist Tape
          </Link>
        </div>
      </section>

      <section className="homeSplit reverse">
        <Image
          src="/images/products/deck_spacer_featured.png"
          alt="Imus Seal SealSpacer Deck Board Spacers in between decking boards"
          width={900}
          height={600}
        />

        <div>
          <p className="eyebrow">Deck Spacing</p>
          <h2>Consistent spacing, cleaner installations.</h2>
          <p>
            SealSpacer helps builders, homeowners, and DIYers create consistent
            deck board gaps using four common color-coded spacing sizes.
          </p>

          <Link
            className="button primary"
            href="/products/imus-seal-sealspacer-deck-board-spacer"
          >
            Explore SealSpacer
          </Link>
        </div>
      </section>

      <section className="contentSection">
        <div className="sectionIntro">
          <p className="eyebrow">Articles</p>
          <h2>Deck building insights and product updates.</h2>
        </div>

        <div className="blogGrid homeBlogGrid">
          <article className="blogCard">
            <Link
              href="/blog/the-next-evolution-of-imus-seal-butyl-joist-tape-new-for-2026"
              className="blogCardImage"
            >
              <Image
                src="/images/blog/blog_2026_0104_imusseal_butyl_joist_tape_featured.jpg"
                alt='4" Imus Seal Butyl Joist Tape used to protect a new large deck structure under construction'
                width={900}
                height={600}
              />
            </Link>

            <div className="blogCardContent">
              <p className="blogDate">January 04, 2026</p>
              <h2>
                <Link href="/blog/the-next-evolution-of-imus-seal-butyl-joist-tape-new-for-2026">
                  The next evolution of Imus Seal® Butyl Joist Tape
                </Link>
              </h2>
              <p>
                Learn about the refined butyl adhesive update for the 2026
                version.
              </p>
            </div>
          </article>

          <article className="blogCard">
            <Link
              href="/blog/deck-spacing-made-easy-with-imus-seal-sealspacer-the-best-deck-board-spacer-for-diyers-or-pros"
              className="blogCardImage"
            >
              <Image
                src="/images/blog/blog_2025_0304_imusseal_sealspacer_deck_board_spacer_featured.png"
                alt="Simply deck board spacing with Imus Seal SealSpacer"
                width={900}
                height={600}
              />
            </Link>

            <div className="blogCardContent">
              <p className="blogDate">March 04, 2025</p>
              <h2>
                <Link href="/blog/deck-spacing-made-easy-with-imus-seal-sealspacer-the-best-deck-board-spacer-for-diyers-or-pros">
                  Deck spacing made easy with SealSpacer™
                </Link>
              </h2>
              <p>
                Learn why proper deck spacing matters for DIYers, homeowners,
                and pros.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}