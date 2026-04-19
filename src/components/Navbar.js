"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/",                label: "Accueil" },
  { href: "/about",           label: "À propos" },
  { href: "/services",        label: "Services" },
  { href: "/nos-partenaires", label: "Partenaires" },
  { href: "/faq",             label: "FAQ" },
  { href: "/contact",         label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
          background: scrolled ? "rgba(10,10,10,0.94)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(200,169,110,0.12)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
        }}
      >
        <nav className="nav-inner">
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}
          >
            <Image
              src="/logo.svg"
              alt="GB Projet Concept"
              width={56}
              height={56}
              style={{ display: "block", objectFit: "contain" }}
            />
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                lineHeight: 1,
                letterSpacing: "0.12em",
                color: "#F0EBE3",
                textTransform: "uppercase",
              }}
            >
              gb projet concept
            </span>
          </Link>

          <ul
            className="hidden-mobile"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "40px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
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

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Link
              href="/contact"
              className="btn-gold hidden-mobile"
              style={{ padding: "10px 24px" }}
            >
              <span>Devis gratuit</span>
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={menuOpen}
              className="show-mobile"
              style={{
                background: "none",
                border: "1px solid rgba(200,169,110,0.25)",
                cursor: "pointer",
                width: "44px",
                height: "44px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                padding: 0,
                flexShrink: 0,
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: "20px",
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
      </header>

      <div
        className="show-mobile"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99,
          background: "rgba(8,8,8,0.98)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
          display: "flex",
          flexDirection: "column",
          paddingTop: "80px",
          overflowY: "auto",
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
      >
        <div
          style={{
            position: "absolute",
            top: "64px",
            left: "20px",
            right: "20px",
            height: "1px",
            background: "rgba(200,169,110,0.12)",
          }}
        />

        <nav style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 28px" }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column" }}>
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "18px 0",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(1.3rem, 6vw, 1.6rem)",
                    fontWeight: 700,
                    color: pathname === link.href ? "#C8A96E" : "#F0EBE3",
                    textDecoration: "none",
                    letterSpacing: "-0.02em",
                    borderBottom: "1px solid #141414",
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 0.35s ease ${0.08 + i * 0.055}s, transform 0.35s ease ${0.08 + i * 0.055}s`,
                  }}
                >
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div
            style={{
              marginTop: "36px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 0.35s ease 0.38s, transform 0.35s ease 0.38s`,
            }}
          >
            <Link
              href="/contact"
              className="btn-gold"
              style={{ justifyContent: "center" }}
            >
              <span>Demander un devis gratuit</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <a
              href="tel:+33620783131"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                padding: "14px",
                border: "1px solid rgba(200,169,110,0.2)",
                color: "#C8A96E",
                textDecoration: "none",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.9rem",
                letterSpacing: "0.05em",
                minHeight: "48px",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              06 20 78 31 31
            </a>
          </div>
        </nav>

        <div
          style={{
            padding: "20px 28px calc(20px + env(safe-area-inset-bottom))",
            borderTop: "1px solid #141414",
          }}
        >
          <p style={{ fontSize: "0.72rem", color: "#3A3530", letterSpacing: "0.06em" }}>
            Caen · Lun–Ven 8h–18h · Sam 9h–13h
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) { .hidden-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
      `}</style>
    </>
  );
}
