import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "../../components/seo/StructuredData";

export const metadata: Metadata = {
  title: "The Next Evolution of Imus Seal® Butyl Joist Tape, New for 2026",
  description:
    "Learn about the 2026 Imus Seal Butyl Joist Tape update, including the refined butyl adhesive and continued Non-Skid facer benefits.",
};

export default function BlogPostPage() {
  return (
    <main className="page">
      <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "The next evolution of Imus Seal® Butyl Joist Tape, new for 2026",
            datePublished: "2026-01-04",
            dateModified: "2026-01-04",
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
            image: "https://www.imusseal.com/images/blog/blog_2026_0104_imusseal_butyl_joist_tape_featured.jpg",
            mainEntityOfPage: "https://www.imusseal.com/blog/the-next-evolution-of-imus-seal-butyl-joist-tape-new-for-2026",
          }}
        />

        <article className="blogArticle">
        <p className="eyebrow">Blog</p>

        <h1>The next evolution of Imus Seal® Butyl Joist Tape, new for 2026</h1>

        <p className="blogDate">January 04, 2026</p>

        <Image
          src="/images/blog/blog_2026_0104_imusseal_butyl_joist_tape_featured.jpg"
          alt='4" Imus Seal Butyl Joist Tape used to protect a new large deck structure under construction'
          width={1400}
          height={800}
          className="blogFeaturedImage"
          priority
        />

        <div className="blogContent">
          <p>
            Since launching{" "}
            <Link href="/products/imus-seal-butyl-joist-tape">
              Imus Seal Butyl Joist Tape
            </Link>{" "}
            in 2018, our goal has remained the same, to create a premium deck
            flashing tape that helps protect your deck structure™. Over the
            years, the product has evolved as materials, jobsite expectations,
            and construction practices have changed; each update building on
            what came before.
          </p>

          <p>
            In 2022, we introduced the <strong><em>Non-Skid</em></strong>{" "}
            version of our butyl joist tape. That update brought meaningful
            improvements, including a durable non-slip surface, improved UV
            resistance, lighter rolls, and a cleaner installation experience,
            all while continuing to deliver excellent sealing performance.
          </p>

          <h2>What’s new for 2026</h2>

          <p>
            We’ve introduced a refined butyl adhesive layer that brings together
            the best characteristics of our previous versions into one balanced
            solution. This latest update retains everything customers value
            about the Non-Skid design, while improving the look and feel of the
            adhesive itself.
          </p>

          <ul>
            <li>
              <strong>Refined butyl adhesive</strong>
              <br />
              The new adhesive features a tan/brown color, lighter than our
              original 2018 version and more traditional in appearance than the
              clear adhesive used previously.
            </li>

            <li>
              <strong>Balanced sealing performance</strong>
              <br />
              The adhesive formulation strikes a middle ground between the
              thicker, more aggressive feel of the original version and the
              cleaner, lighter profile of the previous Non-Skid tape. The result
              is a butyl layer that seals fasteners effectively while remaining
              easy to work with on the jobsite.
            </li>

            <li>
              <strong>Same benefits of the Non-Skid facer</strong>
              <br />
              The high-strength polypropylene facer still offers UV resistance
              and a non-slip surface that improves safety and handling during
              deck construction.
            </li>

            <li>
              <strong>Made in the U.S.A.</strong>
              <br />
              Like the versions before it, the new{" "}
              <Link href="/products/imus-seal-butyl-joist-tape">
                Imus Seal Butyl Joist Tape
              </Link>{" "}
              is proudly manufactured in the United States.
            </li>
          </ul>

          <div className="blogImageComparison">
            <div>
              <h3>New Non-Skid</h3>
              <Image
                src="/images/products/sisbjtns-1-625-50_butyl_adhesive_v3.png"
                alt="Imus Seal Butyl Joist Tape New Non-Skid 1-5/8 inch adhesive"
                width={600}
                height={450}
              />
            </div>

            <div>
              <h3>Non-Skid prior to 2026</h3>
              <Image
                src="/images/products/sisbjtns-1-625-50_butyl_adhesive_v2.png"
                alt="Imus Seal Butyl Joist Tape Non-Skid prior to 2026 1-5/8 inch adhesive"
                width={600}
                height={450}
              />
            </div>
          </div>

          <h2>A natural evolution</h2>

          <p>
            This update represents a refinement, not a reinvention. Each
            generation of our deck joist tape has informed the next, and the
            2026 version reflects years of real-world use, material
            advancements, and installer expectations. The result is the most
            complete and balanced version to date.
          </p>

          <p>
            If you’ve used{" "}
            <Link href="/products/imus-seal-butyl-joist-tape">
              Imus Seal Butyl Joist Tape
            </Link>{" "}
            in the past, the 2026 update will feel familiar, but better. If
            you’re discovering it for the first time, you can be confident
            you’re choosing a product designed to deliver long-term protection
            where decks are vulnerable to water damage and rot.
          </p>
        </div>
      </article>
    </main>
  );
}