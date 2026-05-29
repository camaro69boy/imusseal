import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "../../components/seo/StructuredData";

export const metadata: Metadata = {
  title: "How to Prevent Deck Rot and Extend the Life of Joists and Beams",
  description:
    "Learn how moisture causes deck rot and how flashing deck joists and beams can help protect deck structures from water damage.",
};

export default function BlogPostPage() {
  return (
    <main className="page">
      <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "How to prevent deck rot and extend the life of joists and beams.",
            datePublished: "2019-10-21",
            dateModified: "2019-10-21",
            author: {
              "@type": "Organization",
              name: "Imus Seal",
            },
            publisher: {
              "@type": "Organization",
              name: "Imus Seal",
              logo: {
                "@type": "ImageObject",
                url: "https://www.imusseal.com/images/branding/imusseal_logo.svg",
              },
            },
            image: "https://www.imusseal.com/images/blog/blog_2019_1021_deck_rot_featured.png",
            mainEntityOfPage: "https://www.imusseal.com/blog/how-to-prevent-deck-rot-and-extend-the-life-of-joists-and-beams",
          }}
        />

        <article className="blogArticle">
        <p className="eyebrow">Blog</p>

        <h1>How to prevent deck rot and extend the life of joists and beams.</h1>

        <p className="blogDate">October 21, 2019</p>

        <Image
          src="/images/blog/blog_2019_1021_deck_rot_featured.png"
          alt="Rot on wooden deck joists and beams"
          width={1400}
          height={800}
          className="blogFeaturedImage"
          priority
        />

        <div className="blogContent">
          <p>
            Many homeowners are aware of deck rot and attempt to avoid the
            costly water damage to their deck by using composite decking or
            other wood alternatives. Unfortunately, the importance of
            protecting the deck structure, most notably the beams and joists,
            is often forgotten.
          </p>

          <p>
            Structural deck problems are often caused by moisture trapped
            between the decking and joists or beams, leading to wood rot and
            decay. Even pressure-treated lumber is known to rot where screws
            enter into the wood and create holes that collect water. Prolonged
            exposure to water from rain or melting snow and materials like
            leaves stuck between the decking can intensify the problem.
            Compromised structural integrity can lead to a risk of deck
            failure. Whether you are a contractor or DIYer, designing and
            constructing a waterproof deck structure is more important than
            aesthetics.
          </p>

          <Image
            src="/images/blog/deck_rot.jpg"
            alt="Deck over koi pond with dry rot"
            width={1200}
            height={800}
            className="blogInlineImage"
          />

          <p>
            Flashing deck joists and beams with joist tape can protect deck
            structures from water damage and rot.{" "}
            <Link href="/products/imus-seal-butyl-joist-tape">
              Imus Seal® Butyl Joist Tape
            </Link>{" "}
            diverts water, seals decking screws, provides a barrier between
            metal and wood, and is compatible with common decking materials
            like naturally durable wood, pressure-treated timber, exotic
            tropical hardwood, thermally modified wood, and wood plastic
            composite.
          </p>

          <Image
            src="/images/products/sisbjt_deck_W1980.jpg"
            alt="Deck framing with Imus Seal Butyl Joist Tape installed"
            width={1200}
            height={800}
            className="blogInlineImage"
          />

          <p>
            If you are a homeowner, you want your deck to last. Structural deck
            issues are dangerous and costly to repair. If you are a
            professional, you want your deck designs or builds to be
            long-lasting and a good representation of your high-quality work.
            Protect your deck structure™ with{" "}
            <Link href="/products/imus-seal-butyl-joist-tape">
              Imus Seal Butyl Joist Tape
            </Link>
            .
          </p>

          <Image
            src="/images/blog/colonial_house_deck.jpg"
            alt="Colonial house with deck"
            width={1200}
            height={800}
            className="blogInlineImage"
          />
        </div>
      </article>
    </main>
  );
}