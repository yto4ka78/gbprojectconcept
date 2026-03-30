"use client";

import Link from "next/link";
import Image from "next/image";
import { LOCAL_CITIES } from "@/lib/localCities";

const services = [
  { label: "Terrasses",             href: "/services/terrasses" },
  { label: "Allées & Parkings",     href: "/services/allees" },
  { label: "Clôtures & Portails",   href: "/services/clotures" },
  { label: "Travaux de maçonnerie", href: "/services/travaux-de-maconnerie" },
  { label: "Terrassement",          href: "/services/terrassement" },
];

const links = [
  { label: "Accueil",   href: "/" },
  { label: "À propos",  href: "/about" },
  { label: "Services",  href: "/services" },
  { label: "FAQ",       href: "/faq" },
  { label: "Contact",   href: "/contact" },
];

// Zones — keep in sync with LOCAL_CITIES
const zones = LOCAL_CITIES.map((city) => ({
  label: city.name,
  href: `/amenagement-exterieur/${city.slug}`,
}));

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#0A0A0A",
        borderTop: "1px solid #1E1E1E",
        paddingTop: "64px",
        paddingBottom: "40px",
      }}
    >
      <div className="footer-inner">
        {/* ── Brand ── */}
        <div style={{ gridColumn: "span 1" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "18px",
            }}
          >
            <Image
              src="/logo.svg"
              alt="GB Projet Concept — aménagement extérieur à Caen"
              width={48}
              height={48}
              style={{ display: "block", objectFit: "contain" }}
            />
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                lineHeight: 1,
                letterSpacing: "0.12em",
                color: "#F0EBE3",
                textTransform: "uppercase",
              }}
            >
              projet concept
            </span>
          </div>
          <p
            style={{
              fontSize: "0.82rem",
              lineHeight: 1.7,
              color: "#6A6560",
              maxWidth: "240px",
            }}
          >
            Artisan en aménagement extérieur à Caen et alentours. Terrasses,
            allées, clôtures, maçonnerie et terrassement.
          </p>
          <div style={{ marginTop: "24px", display: "flex", gap: "10px" }}>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/gb_projet_concept/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram GB Projet Concept"
              style={{
                width: "40px",
                height: "40px",
                border: "1px solid #242424",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#6A6560",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#C8A96E";
                e.currentTarget.style.borderColor = "rgba(200,169,110,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#6A6560";
                e.currentTarget.style.borderColor = "#242424";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            {/* Google Reviews */}
            <a
              href="https://share.google/48MGU4p0cDixVoBSg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Avis Google"
              style={{
                width: "40px",
                height: "40px",
                border: "1px solid #242424",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(200,169,110,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#242424";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Services ── */}
        <div>
          <p className="section-label" style={{ marginBottom: "20px" }}>
            Services
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {services.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  style={{
                    fontSize: "0.82rem",
                    color: "#6A6560",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    lineHeight: 1.5,
                  }}
                  onMouseEnter={(e) => { e.target.style.color = "#C8A96E"; }}
                  onMouseLeave={(e) => { e.target.style.color = "#6A6560"; }}
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Navigation ── */}
        <div>
          <p className="section-label" style={{ marginBottom: "20px" }}>
            Navigation
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {links.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  style={{
                    fontSize: "0.82rem",
                    color: "#6A6560",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => { e.target.style.color = "#C8A96E"; }}
                  onMouseLeave={(e) => { e.target.style.color = "#6A6560"; }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Contact + Zones ── */}
        <div>
          <p className="section-label" style={{ marginBottom: "20px" }}>
            Contact
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {[
              {
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                text: "Caen et alentours",
                href: null,
              },
              {
                icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                text: "06 20 78 31 31",
                href: "tel:+33620783131",
              },
              {
                icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                text: "contact@gbprojetconcept.fr",
                href: "mailto:contact@gbprojetconcept.fr",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href || undefined}
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "flex-start",
                  textDecoration: "none",
                  cursor: item.href ? "pointer" : "default",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C8A96E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0, marginTop: "2px" }}
                >
                  <path d={item.icon} />
                </svg>
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "#6A6560",
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.text}
                </span>
              </a>
            ))}
          </div>

          {/* Zones strip */}
          <div style={{ marginTop: "28px" }}>
            <p
              className="section-label"
              style={{ marginBottom: "14px", fontSize: "0.62rem" }}
            >
              Zones desservies
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "8px 16px",
              }}
            >
              {zones.map((z) => (
                <li key={z.label}>
                  <Link
                    href={z.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "0.78rem",
                      color: "#4A4540",
                      textDecoration: "none",
                      transition: "color 0.2s",
                      lineHeight: 1.45,
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#C8A96E"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#4A4540"; }}
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: "rgba(200,169,110,0.65)",
                        flexShrink: 0,
                      }}
                    />
                    {z.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p
          style={{
            fontSize: "0.72rem",
            color: "#3A3530",
            letterSpacing: "0.05em",
          }}
        >
          © {year} projet concept — Tous droits réservés
        </p>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
          {["Mentions légales", "Politique de confidentialité"].map((t) => (
            <Link
              key={t}
              href="#"
              style={{
                fontSize: "0.72rem",
                color: "#3A3530",
                textDecoration: "none",
                letterSpacing: "0.05em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { e.target.style.color = "#8A8680"; }}
              onMouseLeave={(e) => { e.target.style.color = "#3A3530"; }}
            >
              {t}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
