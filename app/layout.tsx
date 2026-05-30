import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import StructuredData from "./components/seo/StructuredData";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Imus Seal®",
    template: "%s | Imus Seal®",
  },
  description:
    "Premium deck protection and deck installation products trusted by building professionals, homeowners, and DIYers.",
  metadataBase: new URL("https://www.imusseal.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Imus Seal",
            legalName: "Styxe Inc.",
            url: "https://www.imusseal.com",
            logo:
              "https://www.imusseal.com/images/branding/imusseal_logo.svg",
            sameAs: [
              "https://www.facebook.com/imusseal",
              "https://www.instagram.com/imusseal/",
              "https://www.youtube.com/@imusseal",
              "https://www.pinterest.com/imusseal/",
              "https://twitter.com/imusseal",
            ],
          }}
        />

        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}