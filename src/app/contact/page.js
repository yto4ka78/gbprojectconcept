"use client";

import Link from "next/link";

export default function Contact() {

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="contact-hero"
        style={{
          background: "#0A0A0A",
          paddingTop: "160px",
          paddingBottom: "56px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "40%",
            backgroundImage: "url('/heroGB.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.07,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #0A0A0A 50%, transparent 100%)",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <p className="section-label" style={{ marginBottom: "24px" }}>
            Travaillons ensemble
          </p>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 5.5vw, 6rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "#F0EBE3",
              maxWidth: "680px",
              marginBottom: "28px",
            }}
          >
            Démarrez
            <br />
            votre <span style={{ color: "#C8A96E" }}>projet</span>
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "#6A6560",
              maxWidth: "460px",
              lineHeight: 1.8,
            }}
          >
            Appelez-nous directement ou écrivez-nous par email.
            Nous vous répondons sous 24h.
          </p>

          {/* Click-to-call — hidden on mobile (sticky bar handles it) */}
          <a
            href="tel:+33620783131"
            className="contact-hero-call"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "24px",
              padding: "12px 20px",
              border: "1px solid rgba(200,169,110,0.3)",
              color: "#C8A96E",
              textDecoration: "none",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "0.9rem",
              letterSpacing: "0.05em",
              minHeight: "48px",
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
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            06 20 78 31 31
          </a>
        </div>
      </section>

      {/* ── MAIN SECTION ── */}
      <section style={{ background: "#0A0A0A", padding: "48px 0 100px" }}>
        <div className="container">
          <div className="contact-layout">
            {/* ── LEFT: info + map + hours ── */}
            <div>
              {/* Contact cards */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  marginBottom: "32px",
                }}
              >
                {[
                  {
                    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                    label: "Téléphone",
                    value: "06 20 78 31 31",
                    sub: "Lun–Ven, 8h–18h",
                    href: "tel:+33620783131",
                  },
                  {
                    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                    label: "Email",
                    value: "gb.btp14@gmail.com",
                    sub: "Réponse sous 24h",
                    href: "mailto:gb.btp14@gmail.com",
                  },
                  {
                    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                    label: "Adresse",
                    value: "Caen",
                    sub: "",
                    href: null,
                  },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href || undefined}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      padding: "20px 24px",
                      background: "#111111",
                      border: "1px solid #1A1A1A",
                      transition: "border-color 0.2s ease",
                      cursor: item.href ? "pointer" : "default",
                      textDecoration: "none",
                      minHeight: "72px",
                    }}
                    onMouseEnter={(e) => {
                      if (item.href)
                        e.currentTarget.style.borderColor =
                          "rgba(200,169,110,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#1A1A1A";
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        border: "1px solid rgba(200,169,110,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C8A96E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "0.68rem",
                          fontWeight: 600,
                          color: "#4A4540",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          marginBottom: "3px",
                        }}
                      >
                        {item.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 500,
                          fontSize: "0.92rem",
                          color: "#F0EBE3",
                        }}
                      >
                        {item.value}
                      </p>
                      <p
                        style={{
                          fontSize: "0.73rem",
                          color: "#4A4540",
                          marginTop: "2px",
                        }}
                      >
                        {item.sub}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Map */}
              <div
                style={{
                  position: "relative",
                  height: "220px",
                  background: "#111111",
                  border: "1px solid #1A1A1A",
                  overflow: "hidden",
                }}
              >
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=2.29,48.85,2.38,48.88&layer=mapnik"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    opacity: 0.6,
                    filter:
                      "grayscale(100%) invert(90%) sepia(10%) saturate(0.5)",
                  }}
                  title="Carte"
                  loading="lazy"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    border: "1px solid rgba(200,169,110,0.1)",
                    pointerEvents: "none",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "12px",
                    height: "12px",
                    background: "#C8A96E",
                    borderRadius: "50%",
                    boxShadow: "0 0 0 4px rgba(200,169,110,0.2)",
                    pointerEvents: "none",
                    zIndex: 10,
                  }}
                />
              </div>

              {/* Hours */}
              <div
                style={{
                  marginTop: "2px",
                  padding: "20px 24px",
                  background: "#111111",
                  border: "1px solid #1A1A1A",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.68rem",
                    fontWeight: 600,
                    color: "#4A4540",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}
                >
                  Horaires
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {[
                    { j: "Lun – Ven", h: "8h00 – 18h00" },
                    { j: "Samedi", h: "9h00 – 13h00" },
                    { j: "Dimanche", h: "Fermé" },
                  ].map((r, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ fontSize: "0.82rem", color: "#6A6560" }}>
                        {r.j}
                      </span>
                      <span
                        style={{
                          fontSize: "0.82rem",
                          color: r.h === "Fermé" ? "#3A3530" : "#F0EBE3",
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 500,
                        }}
                      >
                        {r.h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT: why us + CTA ── */}
            <div
              className="contact-panel-right"
              style={{
                background: "#111111",
                border: "1px solid #1A1A1A",
                padding: "48px 40px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "40px",
              }}
            >
              {/* Corner accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "60px",
                  height: "60px",
                  borderRight: "2px solid rgba(200,169,110,0.2)",
                  borderTop: "2px solid rgba(200,169,110,0.2)",
                }}
              />

              {/* Title */}
              <div>
                <p className="section-label" style={{ marginBottom: "12px" }}>
                  Pourquoi nous choisir
                </p>
                <h2
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.5rem, 3vw, 1.8rem)",
                    letterSpacing: "-0.03em",
                    color: "#F0EBE3",
                    lineHeight: 1.15,
                  }}
                >
                  Un interlocuteur,{" "}
                  <span style={{ color: "#C8A96E" }}>un résultat.</span>
                </h2>
                <p
                  style={{
                    marginTop: "16px",
                    fontSize: "0.88rem",
                    color: "#6A6560",
                    lineHeight: 1.8,
                  }}
                >
                  Depuis 2012, nous accompagnons chaque client de la première
                  visite jusqu&apos;à la remise des clés — avec rigueur,
                  transparence et passion du travail bien fait.
                </p>
              </div>

              {/* Benefits list */}
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                {[
                  {
                    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                    title: "Devis gratuit & sans engagement",
                    desc: "Nous évaluons votre projet sur site, sans frais et sans obligation.",
                  },
                  {
                    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                    title: "Réponse sous 24h",
                    desc: "Un premier retour rapide pour ne pas vous faire attendre.",
                  },
                  {
                    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
                    title: "Garantie 10 ans sur nos réalisations",
                    desc: "Chaque chantier est couvert par une garantie décennale complète.",
                  },
                  {
                    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
                    title: "Équipe locale & disponible",
                    desc: "Basés en Île-de-France, nous intervenons rapidement sur tous vos chantiers.",
                  },
                  {
                    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                    title: "Tarif transparent, sans surprise",
                    desc: "Un devis détaillé avec planning : le prix convenu est le prix final.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                      padding: "18px 20px",
                      background: "#0D0D0D",
                      border: "1px solid #1A1A1A",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        border: "1px solid rgba(200,169,110,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C8A96E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 600,
                          fontSize: "0.85rem",
                          color: "#F0EBE3",
                          marginBottom: "4px",
                        }}
                      >
                        {item.title}
                      </p>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          color: "#5A5550",
                          lineHeight: 1.6,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a
                  href="tel:+33620783131"
                  className="btn-gold"
                  style={{ justifyContent: "center", textDecoration: "none" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Appeler le 06 20 78 31 31</span>
                </a>
                <a
                  href="mailto:gb.btp14@gmail.com"
                  className="btn-outline"
                  style={{ justifyContent: "center", textDecoration: "none" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>gb.btp14@gmail.com</span>
                </a>
                <p
                  style={{
                    fontSize: "0.72rem",
                    color: "#3A3530",
                    textAlign: "center",
                    marginTop: "4px",
                  }}
                >
                  Devis gratuit · Sans engagement · Réponse sous 24h
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section
        className="contact-trust-strip"
        style={{
          background: "#111111",
          borderTop: "1px solid #1A1A1A",
          padding: "48px 0",
        }}
      >
        <div className="container">
          <div className="trust-grid">
            {[
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "Réponse rapide",
                desc: "Accusé de réception sous 24h, devis complet sous 48h.",
              },
              {
                icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
                title: "Sans engagement",
                desc: "Nos devis sont gratuits et sans obligation de commande.",
              },
              {
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                title: "Déplacement gratuit",
                desc: "Nous visitons votre site en Île-de-France sans frais.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#0A0A0A",
                  padding: "32px 28px",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    border: "1px solid rgba(200,169,110,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C8A96E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={item.icon} />
                  </svg>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: "#F0EBE3",
                      marginBottom: "6px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "#5A5550",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mobile-cta-bar">
        <a href="tel:+33620783131" className="btn-gold" style={{ flex: 1, justifyContent: "center", textDecoration: "none" }}>
          <span>06 20 78 31 31</span>
        </a>
        <a href="tel:+33620783131" className="btn-call" aria-label="Appeler">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </>
  );
}
