import Link from "next/link";

import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerBrand">
        <p className="footerTagline">
          Premium deck products trusted by building professionals, homeowners,
          and DIYers.
        </p>

        <p className="footerLegal">
          © 2026 Styxe Inc. All rights reserved. As an Amazon Associate I earn
          from qualifying purchases. Imus Seal® is a registered trademark.
        </p>
      </div>

      <div className="footerLinks">
        <nav className="footerNav">
          <Link href="/products">Products</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div className="socialLinks">
          <a href="https://www.facebook.com/imusseal" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/imusseal/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/@imusseal" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="https://www.pinterest.com/imusseal/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
            <FaPinterest />
          </a>
          <a href="https://twitter.com/imusseal" target="_blank" rel="noopener noreferrer" aria-label="X">
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}