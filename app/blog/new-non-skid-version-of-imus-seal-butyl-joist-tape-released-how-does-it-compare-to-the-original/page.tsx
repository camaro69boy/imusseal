import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "../../components/seo/StructuredData";

export const metadata: Metadata = {
  title:
    "New Non-Skid Version of Imus Seal® Butyl Joist Tape Released. How Does It Compare to the Original?",
  description:
    "Learn how the Non-Skid version of Imus Seal Butyl Joist Tape compares to the original, including facer, adhesive, weight, and installation temperature differences.",
};

const amazonLink = "https://amzn.to/47gQCho";

export default function BlogPostPage() {
  return (
    <main className="page">
      <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "New Non-Skid version of Imus Seal® Butyl Joist Tape released. How does it compare to the original?",
            datePublished: "2022-05-27",
            dateModified: "2022-05-27",
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
            image: "https://www.imusseal.com/images/blog/blog_2022_0527_non-skid_imusseal_deck_joist_tape_featured.png",
            mainEntityOfPage: "https://www.imusseal.com/blog/new-non-skid-version-of-imus-seal-butyl-joist-tape-released-how-does-it-compare-to-the-original",
          }}
        />

        <article className="blogArticle">
        <p className="eyebrow">Blog</p>

        <h1>
          New Non-Skid version of Imus Seal® Butyl Joist Tape released. How does
          it compare to the original?
        </h1>

        <p className="blogDate">May 27, 2022</p>

        <Image
          src="/images/blog/blog_2022_0527_non-skid_imusseal_deck_joist_tape_featured.png"
          alt='Non-Skid Imus Seal Butyl Joist Tape for flashing deck joists and beams in 1-5/8", 4", and 6" sizes'
          width={1400}
          height={800}
          className="blogFeaturedImage"
          priority
        />

        <div className="blogContent">
          <p>
            On February 12, 2018 we launched{" "}
            <Link href="/products/imus-seal-butyl-joist-tape">
              Imus Seal Butyl Joist Tape
            </Link>
            , a self-adhering deck flashing tape designed to protect the wood
            joists and beams on deck structures from water damage and rot. Usage
            of joist tape was less common at that time. There was another
            notable butyl joist tape on the market, but many had to use less
            favorable tapes such as asphalt adhesives, commonly used as roof
            flashing, or acrylic adhesives, commonly used as window flashing.{" "}
            <Link href="/products/imus-seal-butyl-joist-tape">
              Imus Seal Butyl Joist Tape
            </Link>{" "}
            had many advantages as noted in the blog post{" "}
            <Link href="/blog/creating-imus-seal-butyl-joist-tape-the-ultimate-deck-flashing-tape">
              Creating Imus Seal® Butyl Joist Tape, the ultimate deck flashing
              tape
            </Link>
            . Many sellers have jumped on the butyl joist tape bandwagon now,
            including many low quality, made in China imitations available
            online.
          </p>

          <p>
            Like many other businesses in the pandemic/post-pandemic era, we
            faced a number of challenges with availability and inflation of raw
            materials, manufacturing, and shipping. This gave us an opportunity
            to make some innovative changes based on our ideas and valuable
            customer feedback we received, including from our hundreds of
            product reviews on{" "}
            <a href={amazonLink} target="_blank" rel="noopener noreferrer sponsored">
              Amazon.com
            </a>
            . We are excited to introduce an updated <strong><em>Non-Skid</em></strong>{" "}
            version of{" "}
            <Link href="/products/imus-seal-butyl-joist-tape">
              Imus Seal Butyl Joist Tape
            </Link>{" "}
            with these key improvements:
          </p>

          <ul>
            <li>
              <strong>Non-Skid Backing to Divert Water from Joists and Beams</strong>
              <br />
              New high strength 8 mil polypropylene facer is thicker than the
              original version, has improved UV resistance, and has a non-slip
              surface that allows for sliding wood and decking over it with ease
              while keeping you sure footed when walking on the joists and
              beams.
            </li>
          </ul>

          <div className="blogImageComparison">
            <div>
              <h3>Non-Skid</h3>
              <Image
                src="/images/products/sisbjtns-1-625-50_open_roll.png"
                alt="Imus Seal Butyl Joist Tape Non-Skid 1-5/8 inch open roll"
                width={600}
                height={450}
              />
            </div>

            <div>
              <h3>Original</h3>
              <Image
                src="/images/products/sisbjt-1-625-50_open_roll.png"
                alt="Imus Seal Butyl Joist Tape 1-5/8 inch open roll"
                width={600}
                height={450}
              />
            </div>
          </div>

          <ul>
            <li>
              <strong>Advanced Adhesive for Sealing Decking Screws</strong>
              <br />
              New high performance 12 mil butyl adhesive is stickier, less gummy,
              significantly lighter weight, and has a wider temperature range
              than the 20 mil brown butyl adhesive on the original version,
              resulting in a more pleasant installation experience. Additionally,
              the butyl formulation is applied consistently throughout the roll,
              helping to create an even surface for a Level Decking™
              installation!
            </li>
          </ul>

          <div className="blogImageComparison">
            <div>
              <h3>Non-Skid</h3>
              <Image
                src="/images/products/sisbjtns-1-625-50_butyl_adhesive.png"
                alt="Imus Seal Butyl Joist Tape Non-Skid 1-5/8 inch adhesive"
                width={600}
                height={450}
              />
            </div>

            <div>
              <h3>Original</h3>
              <Image
                src="/images/products/sisbjt-1-625-50_butyl_adhesive.png"
                alt="Imus Seal Butyl Joist Tape 1-5/8 inch adhesive"
                width={600}
                height={450}
              />
            </div>
          </div>

          <ul>
            <li>
              <strong>Lighter Weight, Lower Price</strong>
              <br />
              New Non-Skid version is nearly half the weight of the original,
              resulting in a smaller environmental impact on transportation and
              shipping, as well as lower costs allowing us to offer this at a
              significantly lower price than the original version.
            </li>
            <li>
              <strong>Still Made in the U.S.A.</strong>
              <br />
              Like the original version, our Non-Skid butyl joist tape is still
              proudly manufactured in America.
            </li>
          </ul>

          <p>
            Whether your deck build or remodel is a small project, or a large
            lakefront deck elevated high above the ground like the image below,{" "}
            <strong><em>Non-Skid</em></strong>{" "}
            <Link href="/products/imus-seal-butyl-joist-tape">
              Imus Seal Butyl Joist Tape
            </Link>{" "}
            is premium, easy to install, safer to walk on joist tape to protect
            your deck structure™.
          </p>

          <Image
            src="/images/products/lakefront_deck_framing.jpg"
            alt="Lakefront deck framing in Lake Arrowhead, California"
            width={1200}
            height={800}
            className="blogInlineImage"
          />

          <hr />

          <h2>Imus Seal Butyl Joist Tape Specification Comparison</h2>

          <div className="tableScroll">
            <table className="blogComparisonTable">
              <thead>
                <tr>
                  <th>Version</th>
                  <th colSpan={3}>Non-Skid</th>
                  <th colSpan={3}>Original</th>
                </tr>
                <tr>
                  <th>Size</th>
                  <th>1-5/8” x 50’ Roll</th>
                  <th>4” x 50’ Roll</th>
                  <th>6” x 50’ Roll</th>
                  <th>1-5/8” x 50’ Roll</th>
                  <th>4” x 50’ Roll</th>
                  <th>6” x 50’ Roll</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>UPC</th>
                  <td>850014028046</td>
                  <td>850014028053</td>
                  <td>850014028060</td>
                  <td>850014028008</td>
                  <td>850014028015</td>
                  <td>850014028022</td>
                </tr>
                <tr>
                  <th>Thickness</th>
                  <td colSpan={6}>0.02 in.</td>
                </tr>
                <tr>
                  <th>Weight</th>
                  <td>0.9 lbs.</td>
                  <td>1.9 lbs.</td>
                  <td>2.7 lbs.</td>
                  <td>1.4 lbs.</td>
                  <td>3.4 lbs.</td>
                  <td>5.4 lbs.</td>
                </tr>
                <tr>
                  <th>Composition</th>
                  <td colSpan={3}>
                    High performance 12 mil butyl adhesive coated to a durable
                    non-slip black facer
                  </td>
                  <td colSpan={3}>
                    20 mil butyl adhesive coated to a synthetic black facer
                  </td>
                </tr>
                <tr>
                  <th>Installation Temperature</th>
                  <td colSpan={3}>20° F to 150° F</td>
                  <td colSpan={3}>30° F to 120° F</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </article>
    </main>
  );
}