import type { Metadata } from "next";
import Image from "next/image";
import StructuredData from "../../components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Imus Seal SealSpacer Deck Board Spacer",
  description:
    "Patent-pending American-made deck board spacer for consistent 1/16 inch, 1/8 inch, 3/16 inch, and 1/4 inch deck spacing.",
};

const amazonLink = "https://amzn.to/3HqmyZC";

export default function SealSpacerPage() {
  return (
    <main className="page">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Imus Seal SealSpacer Deck Board Spacer",
          brand: {
            "@type": "Brand",
            name: "Imus Seal",
          },
          description:
            "Patent-pending, multi-thickness tool designed to accurately space gaps between decking during installation.",
          image: "https://www.imusseal.com/images/products/sisdbs-3pk.png",
          url: "https://www.imusseal.com/products/imus-seal-sealspacer-deck-board-spacer",
          offers: {
            "@type": "Offer",
            url: amazonLink,
            availability: "https://schema.org/InStock",
          },
        }}
      />
      <section className="productHero">
        <div>
          <p className="eyebrow">Deck Board Spacing</p>
          <h1>Imus Seal SealSpacer Deck Board Spacer</h1>
          <p>
            Patent-pending, multi-thickness tool designed to accurately space
            gaps between decking during installation.
          </p>

          <div className="heroActions">
            <a
              className="button primary"
              href={amazonLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
            >
              Shop on Amazon
            </a>
          </div>
        </div>

        <div className="productHeroImage">
          <Image
            src="/images/products/sisdbs-3pk.png"
            alt="Imus Seal SealSpacer Deck Board Spacer Classic 3 pack"
            width={700}
            height={700}
            priority
          />
        </div>
      </section>

      <section className="imageBanner">
        <Image
          src="/images/products/deck_spacer_featured.png"
          alt="Imus Seal SealSpacer Deck Board Spacers in between decking boards"
          width={1600}
          height={700}
        />
        <div className="imageBannerOverlay">
          <h2>Achieve flawless deck spacing with SealSpacer™.</h2>
        </div>
      </section>

      <section className="contentSection">
        <div className="sectionIntro">
          <p className="eyebrow">Premium Deck Spacing</p>

          <h2>
            Imus Seal SealSpacer Deck Board Spacer is the premium, go-to spacing
            tool for building professionals, homeowners, and DIYers.
          </h2>

          <p>
            Designed to transform your deck installation process, SealSpacer
            helps create consistent, professional-looking gaps between deck
            boards with four common spacing sizes.
          </p>
        </div>

        <div className="featureGrid twoColumn">
          <article className="featureCard imageCard">
            <Image
              src="/images/products/sealspacer_sizes.jpg"
              alt='Imus Seal SealSpacer Deck Board Spacer showing 1/16", 1/8”, 3/16”, and 1/4” sizes'
              width={700}
              height={500}
            />
            <h3>1/16&quot;, 1/8&quot;, 3/16&quot;, and 1/4&quot; Spacing</h3>
            <p>
              SealSpacer includes four of the most common deck spacing sizes:
              orange 1/4&quot;, yellow 3/16&quot;, green 1/8&quot;, and blue
              1/16&quot;.
            </p>
          </article>

          <article className="featureCard imageCard">
            <Image
              src="/images/products/sealspacer_color_uniformity.jpg"
              alt="Imus Seal SealSpacer Deck Board Spacer with colors matching to ensure uniformity"
              width={700}
              height={500}
            />
            <h3>Ensure Uniformity by Matching Spacer Colors</h3>
            <p>
              The color-coded system makes it easy to maintain consistent
              spacing across your project, with each spacer size clearly visible
              during use.
            </p>
          </article>

          <article className="featureCard imageCard">
            <Image
              src="/images/products/sealspacer_comparison.jpg"
              alt="Imus Seal SealSpacer Deck Board Spacer with other spacers"
              width={700}
              height={500}
            />
            <h3>Durable and Easy To Use</h3>
            <p>
              The Classic version features an all-in-one swivel design, while
              the Lite version offers durable individual spacers in a
              lightweight format.
            </p>
          </article>

          <article className="featureCard imageCard">
            <Image
              src="/images/products/sealspacer_compatibility.jpg"
              alt="Imus Seal SealSpacer Deck Board Spacer is compatible with treated wood and composite decking"
              width={700}
              height={500}
            />
            <h3>Ideal for Treated Wood and Composite Decking</h3>
            <p>
              Compatible with many decking materials, including composite
              decking, wet lumber, and dry lumber.
            </p>
          </article>
        </div>
      </section>

      <section className="contentSection">
        <div className="contentCard">
          <h2>Specifications</h2>

          <div className="tableScroll">
            <table className="specTable detailedSpecTable">
              <thead>
                <tr>
                  <th>Version</th>
                  <th>Classic</th>
                  <th>Lite</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th aria-label="Product image"></th>

                  <td>
                    <Image
                      src="/images/products/sisdbs-3pk.png"
                      alt="Imus Seal SealSpacer Deck Board Spacer Classic 3 pack"
                      width={120}
                      height={120}
                    />
                  </td>

                  <td>
                    <Image
                      src="/images/products/sisdbsl-4pk.png"
                      alt="Imus Seal SealSpacer Deck Board Spacer Lite 4 pack"
                      width={120}
                      height={120}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Pack Size</th>
                  <td>3 Pack</td>
                  <td>4 Pack</td>
                </tr>
                <tr>
                  <th>UPC</th>
                  <td>850014028091 (3 Pack)</td>
                  <td>850014028107 (4 Pack)</td>
                </tr>
                <tr>
                  <th>Length</th>
                  <td>3 in.</td>
                  <td>2.25 in.</td>
                </tr>
                <tr>
                  <th>Width</th>
                  <td>1.925 in.</td>
                  <td>0.625 in.</td>
                </tr>
                <tr>
                  <th>Height</th>
                  <td>1.25 in.</td>
                  <td>0.125 in.</td>
                </tr>
                <tr>
                  <th>Weight</th>
                  <td>1.5 oz.</td>
                  <td>0.625 oz.</td>
                </tr>
                <tr>
                  <th>Spacer Thicknesses</th>
                  <td colSpan={2}>
                    1/4 in. (6.35 mm) - Orange
                    <br />
                    3/16 in. (4.76 mm) - Yellow
                    <br />
                    1/8 in. (3.18 mm) - Green
                    <br />
                    1/16 in. (1.59 mm) - Blue
                  </td>
                </tr>
                <tr>
                  <th>Design</th>
                  <td>Swivel design with size markings</td>
                  <td>Sliding pieces with ruler markings</td>
                </tr>
                <tr>
                  <th>Manufacturing</th>
                  <td colSpan={2}>Made in the U.S.A.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="contentSection">
        <div className="installationCard">
          <Image
            src="/images/products/sealspacer_how.jpg"
            alt="How to use Imus Seal SealSpacer Deck Board Spacer"
            width={700}
            height={500}
            loading="eager"
          />

          <div>
            <h2>How it Works</h2>
            <p>
              Align your decking with Imus Seal SealSpacer Deck Board Spacer in
              three simple steps: choose your thickness, set between deck
              boards, and install screws or fasteners.
            </p>

            <a
              className="button primary"
              href={amazonLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
            >
              Shop on Amazon
            </a>
          </div>
        </div>
      </section>

      <section className="contentSection">
        <div className="contentCard">
          <h2>FAQs</h2>

          <div className="faqList">
            <div>
              <h3>Where is Imus Seal SealSpacer Deck Board Spacer available?</h3>
              <p>
                Imus Seal SealSpacer Deck Board Spacer is currently available
                through Amazon in the United States.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}