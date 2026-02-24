"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/",         label: "Accueil" },
  { href: "/about",    label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/faq",      label: "FAQ" },
  { href: "/contact",  label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        background: scrolled
          ? "rgba(10,10,10,0.94)"
          : "transparent",
        borderBottom: scrolled
          ? "1px solid rgba(200,169,110,0.12)"
          : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 40px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            textDecoration: "none",
          }}
        >
          <Image
            src="/logo.svg"
            alt="projet concept"
            width={72}
            height={72}
            style={{ display: "block", objectFit: "contain" }}
          />
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "1.2rem",
              lineHeight: 1,
              letterSpacing: "0.12em",
              color: "#F0EBE3",
              textTransform: "uppercase",
            }}
          >
            projet concept
          </span>
        </Link>

        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "40px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="animated-link"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: active ? "#C8A96E" : "#A09890",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={e => { if (!active) e.target.style.color = "#F0EBE3"; }}
                  onMouseLeave={e => { if (!active) e.target.style.color = "#A09890"; }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <Link
            href="/contact"
            className="btn-gold hidden-mobile"
            style={{ padding: "10px 24px" }}
          >
            <span>Devis gratuit</span>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            className="show-mobile"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "24px",
                  height: "1.5px",
                  background: "#C8A96E",
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  transform: menuOpen
                    ? i === 0 ? "rotate(45deg) translate(4.5px, 4.5px)"
                    : i === 2 ? "rotate(-45deg) translate(4.5px, -4.5px)"
                    : "none"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      <div
        style={{
          background: "rgba(10,10,10,0.98)",
          borderTop: "1px solid rgba(200,169,110,0.12)",
          maxHeight: menuOpen ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: menuOpen ? "24px 40px 32px" : "0 40px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 500,
                  color: pathname === link.href ? "#C8A96E" : "#F0EBE3",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li style={{ paddingTop: "8px" }}>
            <Link href="/contact" className="btn-gold" style={{ padding: "12px 28px" }}>
              <span>Devis gratuit</span>
            </Link>
          </li>
        </ul>
      </div>

      <style>{`
        @media (min-width: 768px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
      `}</style>
    </header>
  );
}
