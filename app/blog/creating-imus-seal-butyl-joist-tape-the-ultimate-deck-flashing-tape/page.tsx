import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Creating Imus Seal® Butyl Joist Tape, the Ultimate Deck Flashing Tape",
  description:
    "The story behind creating Imus Seal Butyl Joist Tape and how it compares with other deck flashing tape products.",
};

export default function BlogPostPage() {
  return (
    <main className="page">
      <article className="blogArticle">
        <p className="eyebrow">Blog</p>

        <h1>
          Creating Imus Seal® Butyl Joist Tape, the ultimate deck flashing tape.
        </h1>

        <p className="blogDate">April 04, 2018</p>

        <Image
          src="/images/blog/blog_2018_0404_imusseal_bjt_featured.png"
          alt="Joist and beam tapes for deck flashing including Imus Seal Butyl Joist Tape, Trex Protect, Nichigo G-Tape 3040BK, DeckWise WiseWrap JoistTape, Cofair Products Deck Flash Barrier, and Grace Vycor Deck Protector"
          width={1400}
          height={800}
          className="blogFeaturedImage"
          priority
        />

        <div className="blogContent">
          <p>
            It is becoming increasingly common for contractors and DIYers to use
            a peel-and-stick flashing membrane to protect the top of joists and
            beams along with the ledger, posts, and stair stringers when framing
            a deck. Flashing tape products help extend the life of the deck
            structure by diverting water and sealing areas where decking
            fasteners are installed, helping keep the wood dry and decreasing
            the risk of water damage and rot.
          </p>

          <Image
            src="/images/products/sisbjt_deck_W2087.jpg"
            alt="Deck construction with Imus Seal Butyl Joist Tape flashing"
            width={1200}
            height={800}
            className="blogInlineImage"
          />

          <p>
            In a Professional Deck Builder article, Scott Gibson wrote,
            &quot;The ideal flashing should not only resist corrosion, but also
            hold up in sunlight, install easily, and cost a reasonable
            amount&quot;.<sup>1</sup> When developing our joist tape product, we
            challenged ourselves to create the ultimate deck flashing tape.
          </p>

          <ul>
            <li>
              <strong>Composition</strong>
              <br />
              Butyl rubber has many advantages over other adhesives like
              rubberized asphalt (bitumen), including longer-lasting stickiness,
              less staining, less high-temperature oozing, and a wider
              temperature range.<sup>2</sup> Butyl also lacks the harmful
              volatile organic compounds (VOCs) found in other products.
            </li>
            <li>
              <strong>Tear Resistance and Thickness</strong>
              <br />
              Thin, easy to tear flashing tapes have questionable long-term
              durability. Thick and heavy flashing tapes are often difficult to
              form.
            </li>
            <li>
              <strong>Size</strong>
              <br />A joist tape should be easy to install on common sizes of
              framing boards with little overlap or trimming need.
            </li>
            <li>
              <strong>Price</strong>
              <br />
              It should not cost a fortune to protect your deck structure™.
            </li>
          </ul>

          <p>
            The product we came up with,{" "}
            <Link href="/products/imus-seal-butyl-joist-tape">
              Imus Seal Butyl Joist Tape
            </Link>
            , has a high-performance butyl adhesive, the ideal thickness for
            strength and durability, and is available in several sizes. The
            comparison table below shows why{" "}
            <Link href="/products/imus-seal-butyl-joist-tape">
              Imus Seal Butyl Joist Tape
            </Link>{" "}
            stands out among deck flashing tapes.
          </p>

          <div className="tableScroll">
            <table className="blogComparisonTable">
              <thead>
                <tr>
                  <th></th>
                  <th>Imus Seal Butyl Joist Tape</th>
                  <th>Trex Protect</th>
                  <th>Nichigo G-Tape 3040BK</th>
                  <th>DeckWise WiseWrap JoistTape</th>
                  <th>Cofair Deck Flash Barrier</th>
                  <th>Grace Vycor Deck Protector</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>Composition</th>
                  <td>Butyl</td>
                  <td>Butyl</td>
                  <td>Acrylic</td>
                  <td>Asphalt</td>
                  <td>Asphalt</td>
                  <td>Asphalt</td>
                </tr>
                <tr>
                  <th>Zero VOCs</th>
                  <td>✅</td>
                  <td>✅</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th>Tear Resistant</th>
                  <td>✅</td>
                  <td>✅</td>
                  <td></td>
                  <td>✅</td>
                  <td>✅</td>
                  <td>✅</td>
                </tr>
                <tr>
                  <th>Thickness</th>
                  <td>20 mil</td>
                  <td>20 mil</td>
                  <td>8.7 mil</td>
                  <td>35-40 mil</td>
                  <td></td>
                  <td>25 mil</td>
                </tr>
                <tr>
                  <th>Size</th>
                  <td>
                    1-5/8” x 50’
                    <br />
                    4” x 50’
                    <br />
                    6” x 50’
                  </td>
                  <td>
                    1-5/8” x 50’
                    <br />
                    3-1/8” x 50’
                  </td>
                  <td>
                    2” x 65’
                    <br />
                    4” x 65’
                    <br />
                    6” x 65’
                  </td>
                  <td>
                    3&quot; x 75&apos;
                    <br />
                    12” x 25’
                  </td>
                  <td>
                    3&quot; x 75&apos;
                    <br />
                    12” x 25’
                  </td>
                  <td>
                    4&quot; x 75&apos;
                    <br />
                    6&quot; x 75&apos;
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <Image
            src="/images/products/sisbjt_deck_W1152.jpg"
            alt="Imus Seal Butyl Joist Tape installed on deck joists"
            width={1200}
            height={800}
            className="blogInlineImage"
          />

          <hr />

          <p className="blogFootnotes">
            <sup>1</sup>{" "}
            <a
              href="http://www.deckmagazine.com/products/materials-hardware/beyond-aluminum-flashing_o"
              target="_blank"
              rel="noopener noreferrer"
            >
              Beyond Aluminum Flashing | Professional Deck Builder
            </a>
            <br />
            <sup>2</sup>{" "}
            <a
              href="https://pro.homeadvisor.com/article.show.Flexible-Flashings.13630.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flexible Flashing | HomeAdvisor Pro
            </a>
          </p>
        </div>
      </article>
    </main>
  );
}