import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "../../components/seo/StructuredData";

export const metadata: Metadata = {
  title:
    "Should Pressure-Treated Wood Deck Structures Be Flashed to Prevent Rot?",
  description:
    "Learn why pressure-treated wood can still experience rot and decay, and how joist tape can help protect deck framing from moisture damage.",
};

export default function BlogPostPage() {
  return (
    <main className="page">
      <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "Should pressure-treated wood deck structures be flashed to prevent rot?",
            datePublished: "2019-11-11",
            dateModified: "2019-11-11",
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
            image: "https://www.imusseal.com/images/blog/blog_2019_1111_pressure_treated_deck_featured.png",
            mainEntityOfPage: "https://www.imusseal.com/blog/should-pressure-treated-wood-deck-structures-be-flashed-to-prevent-rot",
          }}
        />

        <article className="blogArticle">
        <p className="eyebrow">Blog</p>

        <h1>
          Should pressure-treated wood deck structures be flashed to prevent
          rot?
        </h1>

        <p className="blogDate">November 11, 2019</p>

        <Image
          src="/images/blog/blog_2019_1111_pressure_treated_deck_featured.png"
          alt="Patio deck with stairs"
          width={1400}
          height={800}
          className="blogFeaturedImage"
          priority
        />

        <div className="blogContent">
          <p>
            Pressure treated wood continues to be a popular material for deck
            building in the United States, primarily due to its perceived cost
            and availability. A recent study of professional users of decking
            products (made up mostly of repair and remodeling professionals and
            deck specialists) was done to survey the perception of decking
            materials including naturally durable softwood, wood-plastic
            composite (WPC), pressure treated lumber, tropical hardwood, and
            thermally-modified wood (TMW).
          </p>

          <p>
            The survey data revealed that pressure treated wood was the top
            choice for budget-friendly decking projects costing less than
            $5,000, wood-plastic composites was the top choice for decking
            projects between $5,000 and $15,000, and tropical hardwood was the
            top choice for decking projects over $15,000. Durability and
            aesthetics were the most important perceived attributes among
            respondents when designing, constructing, or remodeling a deck.
          </p>

          <Image
            src="/images/products/pressure_treated_deck_W1039_01.jpg"
            alt="Pressure-treated wood deck framing"
            width={1200}
            height={800}
            className="blogInlineImage"
          />

          <p>
            Is pressure treated lumber susceptible to wood rot and decay? As
            shown in the following photo, the answer is yes. Pressure treated
            wood can soak and lose moisture, resulting in the wood moving,
            cracking, twisting, bending, and virtually tearing itself apart.
          </p>

          <p>
            The knife-markings where the treating takes place and the holes
            created by decking screws create an entry point for water to
            penetrate into the timber. A compromised structural integrity from
            rotted pressure treated wood can lead to the risk of a deck
            collapse.
          </p>

          <Image
            src="/images/blog/pressure_treated_wood_rot.jpg"
            alt="Pressure-treated wood rot"
            width={900}
            height={900}
            className="blogInlineImage"
          />

          <p>
            The lifespan of pressure treated deck structures can be extended by
            flashing the joists and beams with joist tape.{" "}
            <Link href="/products/imus-seal-butyl-joist-tape">
              Imus Seal® Butyl Joist Tape
            </Link>{" "}
            diverts water away from joists and beams, seals decking screws and
            fasteners, is compatible with common decking materials, and can be
            used to help prevent corrosion of metal deck hardware by providing a
            barrier between the metal and treated wood.
          </p>

          <Image
            src="/images/products/pressure_treated_deck_W1039_02.jpg"
            alt="Deck with pressure-treated wood structure"
            width={1200}
            height={800}
            className="blogInlineImage"
          />
        </div>
      </article>
    </main>
  );
}