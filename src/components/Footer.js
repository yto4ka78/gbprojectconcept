"use client";

import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "Travaux extérieurs", href: "/services#travaux" },
  { label: "Allées & Chemins", href: "/services#allees" },
  { label: "Clôtures & Portails", href: "/services#clotures" },
  { label: "Terrasses", href: "/services#terrasses" },
  { label: "Aménagement paysager", href: "/services#paysager" },
];

const links = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

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
              alt="projet concept"
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
            Allée, cour, parking Clôture, portail Maçonnerie Terrassement
            Terrasse.
          </p>
          <div style={{ marginTop: "24px", display: "flex", gap: "10px" }}>
            {[
              {
                label: "Facebook",
                path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
              },
              {
                label: "Instagram",
                path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z",
              },
              {
                label: "LinkedIn",
                path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
              },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
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
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

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
                  onMouseEnter={(e) => {
                    e.target.style.color = "#C8A96E";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#6A6560";
                  }}
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

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
                  onMouseEnter={(e) => {
                    e.target.style.color = "#C8A96E";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#6A6560";
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

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
                text: "Caen",
                href: null,
              },
              {
                icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                text: "06 20 78 31 31",
                href: "tel:+33620783131",
              },
              {
                icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                text: "contact@gbprojectconcept.fr",
                href: "mailto:contact@gbprojectconcept.fr",
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
              onMouseEnter={(e) => {
                e.target.style.color = "#8A8680";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#3A3530";
              }}
            >
              {t}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
