import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Imus Seal® | Premium American-Made Deck Products",
    template: "%s | Imus Seal®",
  },
  description:
    "Imus Seal creates premium American-made deck protection products for builders, homeowners, and DIYers.",
  metadataBase: new URL("https://www.imusseal.com"),
  icons: {
    icon: "/images/branding/imusseal_favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}