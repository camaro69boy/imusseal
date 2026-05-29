import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Imus Seal and our mission to create premium American-made deck protection products built for long-term performance.",
};

export default function AboutPage() {
  return (
    <main className="page">
      <section className="pageHero">
        <p className="eyebrow">About</p>

        <h1>Built to help decks last longer.</h1>

        <p>
          Imus Seal develops premium deck protection products designed to help
          builders and homeowners create stronger, longer-lasting outdoor
          structures.
        </p>
      </section>

      <section className="contentSection contactGrid">
        <div className="contentCard">
          <h2>The Meaning Behind the Name</h2>

          <p>
            The name Imus comes from our family name and reflects a long-term
            commitment to practical product innovation and customer trust.
          </p>

          <p>
            Seal represents both a core product benefit and the broader mission
            behind the brand: helping protect deck structures from moisture
            damage and premature rot.
          </p>
        </div>

        <div className="contentCard accentCard">
          <h2>What SEAL Represents</h2>

          <p>
            <strong>Safe.</strong> <strong>Effective.</strong>{" "}
            <strong>American-made.</strong> <strong>Long-lasting.</strong>
          </p>

          <p>
            We believe premium building products should deliver long-term
            performance, dependable quality, and responsible manufacturing.
          </p>
        </div>
      </section>

      <section className="contentSection">
        <div className="contentCard">
          <h2>American Manufacturing</h2>

          <p>
            Imus Seal products are proudly manufactured in the United States of
            America using premium materials and thoughtful product design.
          </p>
        </div>
      </section>
    </main>
  );
}