import type { Metadata } from "next";
import Image from "next/image";
import StructuredData from "../../components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Imus Seal Butyl Joist Tape",
  description:
    "Premium American-made butyl joist tape for flashing deck joists and beams, helping protect deck structures from water damage and premature rot.",
};

const amazonLink = "https://amzn.to/47gQCho";

export default function JoistTapePage() {
  return (
    <main className="page">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Imus Seal Butyl Joist Tape",
          brand: {
            "@type": "Brand",
            name: "Imus Seal",
          },
          description:
            "Self-adhering flashing tape for joists and beams designed to protect wooden deck structures from water damage and rot.",
          image:
            "https://www.imusseal.com/images/products/sisbjtns_deck_joist_tape_sizes.png",
          url: "https://www.imusseal.com/products/imus-seal-butyl-joist-tape",
          offers: {
            "@type": "Offer",
            url: amazonLink,
            availability: "https://schema.org/InStock",
          },
        }}
      />
      <section className="productHero">
        <div>
          <p className="eyebrow">Deck Joist Protection</p>
          <h1>Imus Seal Butyl Joist Tape</h1>
          <p>
            Self-adhering flashing tape for joists and beams designed to protect
            wooden deck structures from water damage and rot.
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
            src="/images/products/sisbjtns_deck_joist_tape_sizes.png"
            alt='Non-Skid Imus Seal Butyl Joist Tape for flashing deck joists and beams in 1-5/8", 4", and 6" sizes'
            width={700}
            height={700}
            priority
          />
        </div>
      </section>

      <section className="imageBanner">
        <Image
          src="/images/products/deck_rot_featured.png"
          alt="Structural deck rot"
          width={1600}
          height={700}
        />
        <div className="imageBannerOverlay">
          <h2>Want to prevent deck rot?</h2>
        </div>
      </section>

      <section className="imageBanner">
        <Image
          src="/images/products/deck_imus_seal_featured.png"
          alt="Modern deck in the woods with Imus Seal Butyl Joist Tape"
          width={1600}
          height={700}
        />
        <div className="imageBannerOverlay">
          <h2>Protect your deck structure™ with Imus Seal® Butyl Joist Tape.</h2>
        </div>
      </section>

      <section className="contentSection">
        <div className="sectionIntro">
          <p className="eyebrow">Premium Deck Protection</p>

          <h2>
            Imus Seal Butyl Joist Tape is the premium joist tape trusted by
            building professionals, homeowners, and DIYers to help extend the
            life of deck structures.
          </h2>

          <p>
            Updated for 2026 with a refined butyl adhesive, Imus Seal Butyl
            Joist Tape provides the unique benefits of a Non-Skid surface, UV
            resistance, and a foundation for Level Decking™.
          </p>
        </div>

        <div className="featureGrid">
          <article className="featureCard imageCard">
            <Image
              src="/images/products/joist_tape_nonskid_snow.jpg"
              alt="Imus Seal Butyl Joist Tape Non-Skid cold weather installation"
              width={700}
              height={500}
            />
            <h3>Non-Skid Surface</h3>
            <p>
              Unique non-skid facer provides added grip when walking on the deck
              structure, helping create a safer installation in any weather.
            </p>
          </article>

          <article className="featureCard imageCard">
            <Image
              src="/images/products/joist_tape_nonskid_uv.jpg"
              alt="Imus Seal Butyl Joist Tape Non-Skid on sunny and shaded deck structure"
              width={700}
              height={500}
            />
            <h3>UV Resistance</h3>
            <p>
              Designed to withstand jobsite exposure when decking installation
              does not happen immediately.
            </p>
          </article>

          <article className="featureCard imageCard">
            <Image
              src="/images/products/joist_tape_nonskid_level_decking.jpg"
              alt="Deck in the woods"
              width={700}
              height={500}
            />
            <h3>Foundation for Level Decking™</h3>
            <p>
              Exclusive butyl formulation is applied consistently throughout the
              roll, helping create an even surface for a clean decking
              installation.
            </p>
          </article>
        </div>
      </section>

      <section className="contentSection">
        <div className="sectionIntro">
          <p className="eyebrow">Protection Benefits</p>

          <h2>Designed to help protect deck framing where it matters most.</h2>

          <p>
            Imus Seal Butyl Joist Tape helps protect deck structures by
            shielding vulnerable framing surfaces from moisture exposure while
            creating a durable barrier between wood, fasteners, and metal
            hardware.
          </p>
        </div>

        <div className="featureGrid twoColumn">
          <article className="featureCard imageCard">
            <Image
              src="/images/products/joist_tape_water.jpg"
              alt="Water on deck joist tape"
              width={700}
              height={500}
            />
            <h3>Diverts Water from Joists and Beams</h3>
            <p>
              Helps divert water away from horizontal framing surfaces where
              moisture and debris can collect, reducing prolonged exposure to
              the wood below.
            </p>
          </article>

          <article className="featureCard imageCard">
            <Image
              src="/images/products/sisbjt_deck_W1980.jpg"
              alt="Deck substructure framing with Imus Seal Butyl Joist Tape"
              width={700}
              height={500}
            />
            <h3>Seals Decking Screws</h3>
            <p>
              Pressure-sensitive butyl adhesive helps self-seal around nail and
              fastener penetrations to help prevent water intrusion.
            </p>
          </article>

          <article className="featureCard imageCard">
            <Image
              src="/images/products/sisbjt_deck_W2121.jpg"
              alt="Imus Seal Butyl Joist Tape used as barrier between metal joist hangers and pressure treated wood"
              width={700}
              height={500}
            />
            <h3>Provides a Barrier Between Metal and Wood</h3>
            <p>
              Helps separate steel joist hangers and metal hardware from treated
              lumber that may contain ACQ, copper azole, or other corrosive
              treatment chemicals.
            </p>
          </article>

          <article className="featureCard imageCard">
            <Image
              src="/images/products/sisbjt_deck_1547.jpg"
              alt="Deck construction with Imus Seal Butyl Joist Tape on the deck substructure"
              width={700}
              height={500}
            />
            <h3>Protects Treated and Non-Treated Lumber</h3>
            <p>
              Compatible with pressure-treated wood, non-treated lumber, and
              composite decking products where added framing protection is
              desired.
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
                  <th colSpan={3}>Non-Skid</th>
                </tr>
                <tr>
                  <th>Size</th>
                  <th>1-5/8&quot; x 50&apos; Roll</th>
                  <th>4&quot; x 50&apos; Roll</th>
                  <th>6&quot; x 50&apos; Roll</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th aria-label="Product image"></th>

                  <td>
                    <Image
                      src="/images/products/sisbjtns-1-625-50.png"
                      alt="Imus Seal Butyl Joist Tape Non-Skid 1-5/8 inch"
                      width={120}
                      height={120}
                    />
                  </td>

                  <td>
                    <Image
                      src="/images/products/sisbjtns-4-50.png"
                      alt="Imus Seal Butyl Joist Tape Non-Skid 4 inch"
                      width={120}
                      height={120}
                    />
                  </td>

                  <td>
                    <Image
                      src="/images/products/sisbjtns-6-50.png"
                      alt="Imus Seal Butyl Joist Tape Non-Skid 6 inch"
                      width={120}
                      height={120}
                    />
                  </td>
                </tr>
                <tr>
                  <th>UPC</th>
                  <td>
                    850014028046
                    <br />
                    850014028077 (2 Rolls)
                    <br />
                    850014028084 (6 Rolls)
                  </td>
                  <td>850014028053</td>
                  <td>850014028060</td>
                </tr>
                <tr>
                  <th>Width</th>
                  <td>1-5/8 in.</td>
                  <td>4 in.</td>
                  <td>6 in.</td>
                </tr>
                <tr>
                  <th>Length</th>
                  <td colSpan={3}>50 ft.</td>
                </tr>
                <tr>
                  <th>Thickness</th>
                  <td colSpan={3}>0.02 in.</td>
                </tr>
                <tr>
                  <th>Weight</th>
                  <td>0.9 lbs.</td>
                  <td>1.9 lbs.</td>
                  <td>2.7 lbs.</td>
                </tr>
                <tr>
                  <th>Composition</th>
                  <td colSpan={3}>
                    High-performance butyl adhesive, containing no asphalt or
                    VOCs, coated to a tear-resistant, durable non-skid black
                    facer.
                  </td>
                </tr>
                <tr>
                  <th>Manufacturing</th>
                  <td colSpan={3}>Made in the U.S.A.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="contentSection">
        <div className="installationCard">
          <Image
            src="/images/products/sisbjt_deck_W1152.jpg"
            alt="Imus Seal Butyl Joist Tape installation on deck structure"
            width={700}
            height={500}
            loading="eager"
          />

          <div>
            <h2>Installation</h2>
            <p>
              Apply Imus Seal Butyl Joist Tape to clean, dry framing surfaces
              before decking installation. Installation is simple: peel, stick,
              and cut to length.
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
              <h3>
                Is Imus Seal Butyl Joist Tape compatible with my decking
                material?
              </h3>
              <p>
                Yes. Imus Seal Butyl Joist Tape can be used with many deck
                surface materials, including naturally durable wood,
                pressure-treated lumber, exotic hardwoods, thermally modified
                wood, wood-plastic composite, PVC, and other plastic decking
                products.
              </p>
            </div>

            <div>
              <h3>How does it seal around decking screws?</h3>
              <p>
                The pressure-sensitive butyl adhesive helps self-seal around
                nail and fastener penetrations to help prevent water intrusion
                into the framing below.
              </p>
            </div>

            <div>
              <h3>Can it be used on more than joists and beams?</h3>
              <p>
                Yes. In addition to deck joists and beams, it can be used on
                ledger boards, stair stringers, posts, boat docks, blocking, and
                other framing areas where added moisture protection is desired.
              </p>
            </div>

            <div>
              <h3>Have there been different versions?</h3>
              <p>
                Yes. Imus Seal Butyl Joist Tape has evolved through multiple
                updates, including the original 2018 launch, the 2022 Non-Skid
                version, and the refined adhesive update for 2026.
              </p>
              <p>
                Learn more in our related articles:{" "}
                <a href="/blog/creating-imus-seal-butyl-joist-tape-the-ultimate-deck-flashing-tape">
                  original launch
                </a>
                ,{" "}
                <a href="/blog/new-non-skid-version-of-imus-seal-butyl-joist-tape-released-how-does-it-compare-to-the-original">
                  Non-Skid version
                </a>
                , and{" "}
                <a href="/blog/the-next-evolution-of-imus-seal-butyl-joist-tape-new-for-2026">
                  2026 update
                </a>
                .
              </p>
            </div>

            <div>
              <h3>Where is Imus Seal Butyl Joist Tape available?</h3>
              <p>
                Imus Seal Butyl Joist Tape is currently available through Amazon
                in the United States.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}