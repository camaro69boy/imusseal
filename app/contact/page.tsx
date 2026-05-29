import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Styxe Inc. for Imus Seal product questions, supplier inquiries, and support.",
};

export default function ContactPage() {
  return (
    <main className="page">
      <section className="pageHero">
        <p className="eyebrow">Contact</p>
        <h1>Get in touch with us.</h1>
        <p>
          Product questions, supplier inquiries, and business opportunities are
          welcome.
        </p>
      </section>

      <section className="contentSection contactGrid">
        <div className="contentCard">
          <h2>Styxe Inc.</h2>

          <p>
            28241 Crown Valley Parkway, F271
            <br />
            Laguna Niguel, CA 92677
          </p>

          <p>
            <strong>Call</strong>
            <br />
            <a href="tel:18884061930">(888) 406-1930</a>
          </p>

          <p>
            <strong>Text</strong>
            <br />
            <a href="sms:18884061930">(888) 406-1930</a>
          </p>

          <p className="finePrint">
            By contacting Styxe Inc. by text message, you agree to receive text
            messages. Message and data rates may apply. Message frequency
            varies. Reply STOP to opt out.
          </p>

          <p>
            <strong>Email</strong>
            <br />
            <a href="mailto:hello@imusseal.com">hello@imusseal.com</a>
          </p>
        </div>

        <div className="contentCard accentCard">
          <h2>Support</h2>
          <p>
            For product questions or installation guidance, contact us directly.
          </p>

          <p>
            For Amazon order-specific issues, including shipping, returns, or delivery
            support, please contact Amazon directly through your Amazon account.
          </p>
        </div>
      </section>
    </main>
  );
}