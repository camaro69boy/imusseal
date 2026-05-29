import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Deck building insights, product updates, and educational articles from Imus Seal.",
};

const posts = [
  {
    title: "The next evolution of Imus Seal® Butyl Joist Tape, new for 2026",
    date: "January 04, 2026",
    href: "/blog/the-next-evolution-of-imus-seal-butyl-joist-tape-new-for-2026",
    image: "/images/blog/blog_2026_0104_imusseal_butyl_joist_tape_featured.jpg",
    alt: '4" Imus Seal Butyl Joist Tape used to protect a new large deck structure under construction',
    excerpt:
      "Learn about the refined butyl adhesive update and the continued evolution of Imus Seal Butyl Joist Tape.",
  },
  {
    title:
      "Deck spacing made easy with Imus Seal® SealSpacer™, the best deck board spacer for DIYers or pros.",
    date: "March 04, 2025",
    href: "/blog/deck-spacing-made-easy-with-imus-seal-sealspacer-the-best-deck-board-spacer-for-diyers-or-pros",
    image:
      "/images/blog/blog_2025_0304_imusseal_sealspacer_deck_board_spacer_featured.png",
    alt: "Simply deck board spacing with Imus Seal SealSpacer",
    excerpt:
      "Learn why proper deck spacing matters and how SealSpacer helps create consistent deck board gaps.",
  },
  {
    title:
      "New Non-Skid version of Imus Seal® Butyl Joist Tape released. How does it compare to the original?",
    date: "May 27, 2022",
    href: "/blog/new-non-skid-version-of-imus-seal-butyl-joist-tape-released-how-does-it-compare-to-the-original",
    image:
      "/images/blog/blog_2022_0527_non-skid_imusseal_deck_joist_tape_featured.png",
    alt: 'Non-Skid Imus Seal Butyl Joist Tape for flashing deck joists and beams in 1-5/8", 4", and 6" sizes',
    excerpt:
      "Compare the Non-Skid version of Imus Seal Butyl Joist Tape with the original version.",
  },
  {
    title: "Should pressure-treated wood deck structures be flashed to prevent rot?",
    date: "November 11, 2019",
    href: "/blog/should-pressure-treated-wood-deck-structures-be-flashed-to-prevent-rot",
    image:
      "/images/blog/blog_2019_1111_pressure_treated_deck_featured.png",
    alt: "Patio deck with stairs",
    excerpt:
      "Learn why pressure-treated wood can still experience rot and how joist tape can help protect deck framing.",
  },
  {
    title: "How to prevent deck rot and extend the life of joists and beams.",
    date: "October 21, 2019",
    href: "/blog/how-to-prevent-deck-rot-and-extend-the-life-of-joists-and-beams",
    image: "/images/blog/blog_2019_1021_deck_rot_featured.png",
    alt: "Rot on wooden deck joists and beams",
    excerpt:
      "Learn how moisture causes deck rot and how flashing joists and beams can help protect deck structures.",
  },
  {
    title:
      "Creating Imus Seal® Butyl Joist Tape, the ultimate deck flashing tape.",
    date: "April 04, 2018",
    href: "/blog/creating-imus-seal-butyl-joist-tape-the-ultimate-deck-flashing-tape",
    image: "/images/blog/blog_2018_0404_imusseal_bjt_featured.png",
    alt: "Joist and beam tapes for deck flashing including Imus Seal Butyl Joist Tape, Trex Protect, Nichigo G-Tape 3040BK, DeckWise WiseWrap JoistTape, Cofair Products Deck Flash Barrier, and Grace Vycor Deck Protector",
    excerpt:
      "The story behind creating Imus Seal Butyl Joist Tape and how it compares with other deck flashing tapes.",
  },
];

export default function BlogPage() {
  return (
    <main className="page">
      <section className="pageHero">
        <p className="eyebrow">Blog</p>
        <h1>Deck building insights, product updates, and education.</h1>
        <p>
          Articles about deck protection, joist tape, deck spacing, and product
          updates from Imus Seal.
        </p>
      </section>

      <section className="contentSection blogGrid">
        {posts.map((post) => (
          <article className="blogCard" key={post.href}>
            <Link href={post.href} className="blogCardImage">
              <Image
                src={post.image}
                alt={post.alt}
                width={900}
                height={600}
              />
            </Link>

            <div className="blogCardContent">
              <p className="blogDate">{post.date}</p>
              <h2>
                <Link href={post.href}>{post.title}</Link>
              </h2>
              <p>{post.excerpt}</p>

              <Link className="blogReadMore" href={post.href}>
                Continue reading
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}