"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="siteHeaderInner">
        <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
          <Image
            className="brandLogo"
            src="/images/branding/imusseal_logo.svg"
            alt="Imus Seal logo"
            width={180}
            height={36}
            priority
          />
        </Link>

        <button
          className="menuButton"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`siteNav ${menuOpen ? "open" : ""}`}>
          <Link href="/products" onClick={() => setMenuOpen(false)}>
            Products
          </Link>

          <Link href="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>

          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}