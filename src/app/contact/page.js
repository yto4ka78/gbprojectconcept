import Link from "next/link";
import { SITE_URL, SITE_NAME, PHONE, EMAIL, OG_IMAGES } from "@/lib/seo";

export const metadata = {
  title: `Contact — Devis gratuit sous 48h`,
  description:
    "Contactez projet concept pour un devis gratuit. Artisan à Caen et alentours. Réponse sous 24h, déplacement gratuit sur site. Téléphone : 06 20 78 31 31.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: `Contact & Devis gratuit — ${SITE_NAME}`,
    description:
      "Appelez le 06 20 78 31 31 ou écrivez-nous. Devis gratuit, réponse sous 24h.",
    url: `${SITE_URL}/contact`,
    images: OG_IMAGES,
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${SITE_URL}/contact/#webpage`,
      url: `${SITE_URL}/contact`,
      name: `Contact & Devis gratuit — ${SITE_NAME}`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "fr-FR",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact",
          item: `${SITE_URL}/contact`,
        },
      ],
    },
  ],
};

const contactItems = [
  {
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    label: "Téléphone",
    value: "06 20 78 31 31",
    sub: "Lun–Ven, 8h–18h",
    href: `tel:${PHONE}`,
  },
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    label: "Email",
    value: EMAIL,
    sub: "Réponse sous 24h",
    href: `mailto:${EMAIL}`,
  },
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
    label: "Adresse",
    value: "Caen",
    sub: "",
    href: null,
  },
];

const benefits = [
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
    title: "Équipe calvados & disponible",
    desc: "Basés à Caen, nous intervenons rapidement sur tout le secteur de Caen.",
  },
  {
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Tarif transparent, sans surprise",
    desc: "Un devis détaillé avec planning : le prix convenu est le prix final.",
  },
];

const trustItems = [
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
    desc: "Nous visitons votre site à Caen sans frais.",
  },
];

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />

      <section
        className="contact-hero"
        style={{
          background: "#0A0A0A",
          paddingTop: "160px",
          paddingBottom: "56px",
          position: "relative",
          overflow: "hidden",
        }}
        aria-labelledby="contact-heading"
      >
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <p className="section-label" style={{ marginBottom: "24px" }}>
            Travaillons ensemble
          </p>
          <h1
            id="contact-heading"
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
            Appelez-nous directement ou écrivez-nous par email. Nous vous
            répondons sous 24h.
          </p>
          <a
            href={`tel:${PHONE}`}
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
              aria-hidden="true"
            >
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            06 20 78 31 31
          </a>
        </div>
      </section>

      <section style={{ background: "#0A0A0A", padding: "48px 0 100px" }}>
        <div className="container">
          <div className="contact-layout">
            <div>
              <address
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  marginBottom: "32px",
                  fontStyle: "normal",
                }}
              >
                {contactItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.href || undefined}
                    className="contact-card"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      padding: "20px 24px",
                      background: "#111111",
                      border: "1px solid #1A1A1A",
                      textDecoration: "none",
                      minHeight: "72px",
                      cursor: item.href ? "pointer" : "default",
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
                      aria-hidden="true"
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
                      {item.sub && (
                        <p
                          style={{
                            fontSize: "0.73rem",
                            color: "#4A4540",
                            marginTop: "2px",
                          }}
                        >
                          {item.sub}
                        </p>
                      )}
                    </div>
                  </a>
                ))}
              </address>

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
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-0.38,49.17,-0.36,49.20&layer=mapnik"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    opacity: 0.6,
                    filter:
                      "grayscale(100%) invert(90%) sepia(10%) saturate(0.5)",
                  }}
                  title="Localisation GB Projet Concept — Caen"
                  loading="lazy"
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    border: "1px solid rgba(200,169,110,0.1)",
                    pointerEvents: "none",
                  }}
                  aria-hidden="true"
                />
              </div>

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
                <dl
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
                      <dt style={{ fontSize: "0.82rem", color: "#6A6560" }}>
                        {r.j}
                      </dt>
                      <dd
                        style={{
                          fontSize: "0.82rem",
                          color: r.h === "Fermé" ? "#3A3530" : "#F0EBE3",
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 500,
                          margin: 0,
                        }}
                      >
                        {r.h}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

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
                aria-hidden="true"
              />
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

              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2px",
                  listStyle: "none",
                  padding: 0,
                }}
              >
                {benefits.map((item, i) => (
                  <li
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
                      aria-hidden="true"
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
                  </li>
                ))}
              </ul>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <a
                  href={`tel:${PHONE}`}
                  className="btn-gold"
                  style={{ justifyContent: "center", textDecoration: "none" }}
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
                    aria-hidden="true"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Appeler le 06 20 78 31 31</span>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="btn-outline"
                  style={{ justifyContent: "center", textDecoration: "none" }}
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
                    aria-hidden="true"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{EMAIL}</span>
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

      <section
        className="contact-trust-strip"
        style={{
          background: "#111111",
          borderTop: "1px solid #1A1A1A",
          padding: "48px 0",
        }}
        aria-label="Nos engagements"
      >
        <div className="container">
          <div className="trust-grid" role="list">
            {trustItems.map((item, i) => (
              <div
                key={i}
                role="listitem"
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
                  aria-hidden="true"
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

      <div className="mobile-cta-bar" aria-label="Actions rapides">
        <a
          href={`tel:${PHONE}`}
          className="btn-gold"
          style={{ flex: 1, justifyContent: "center", textDecoration: "none" }}
        >
          <span>06 20 78 31 31</span>
        </a>
        <a
          href={`tel:${PHONE}`}
          className="btn-call"
          aria-label="Appeler projet concept"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </>
  );
}
