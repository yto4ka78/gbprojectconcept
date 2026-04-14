import Link from "next/link";
import { SITE_URL, SITE_NAME, OG_IMAGES } from "@/lib/seo";

// ─── SEO metadata ─────────────────────────────────────────────────────────────
export const metadata = {
  title: "Nos partenaires — Pisciniste, Électricien & Nettoyage à Caen",
  description:
    "Découvrez les partenaires de confiance de GB Projet Concept à Caen : Desjoyaux Mondeville (piscines), B Connect France (électricité & solaire), SA Clean (nettoyage professionnel).",
  alternates: { canonical: `${SITE_URL}/nos-partenaires` },
  openGraph: {
    title: `Nos partenaires | ${SITE_NAME}`,
    description:
      "Des artisans et professionnels locaux, sélectionnés pour leur sérieux et leur complémentarité avec nos services d'aménagement extérieur à Caen.",
    url: `${SITE_URL}/nos-partenaires`,
    images: OG_IMAGES,
  },
};

// ─── Partner data ─────────────────────────────────────────────────────────────
const partners = [
  {
    id: "desjoyaux",
    num: "01",
    name: "Desjoyaux Mondeville",
    category: "Pisciniste",
    tagline: "L'excellence de la piscine depuis 50 ans",
    description:
      "Construction, rénovation et entretien de piscines sur mesure. L'expertise Desjoyaux au cœur de l'agglomération caennaise : fabrication française, garantie totale 10 ans, conseil et suivi personnalisé du projet à la maintenance.",
    tags: ["Construction piscine", "Entretien & maintenance", "Accessoires & sécurité"],
    url: "https://www.desjoyaux.fr/boutiques-desjoyaux/14120-mondeville/",
    // Minimal SVG icon — water wave
    icon: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 32c4-6 8-6 12 0s8 6 12 0 8-6 12 0" opacity="0.4" />
        <path d="M4 24c4-6 8-6 12 0s8 6 12 0 8-6 12 0" />
        <path d="M4 16c4-6 8-6 12 0s8 6 12 0 8-6 12 0" opacity="0.6" />
        <circle cx="38" cy="10" r="3" fill="currentColor" stroke="none" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: "bconnect",
    num: "02",
    name: "B Connect France",
    category: "Électricité & Solaire",
    tagline: "Votre énergie, notre expertise",
    description:
      "Électricien certifié RGE QualiPV, spécialisé dans l'installation de panneaux photovoltaïques, bornes de recharge pour véhicules électriques (IRVE) et rénovations électriques complètes dans le Calvados et la Manche.",
    tags: ["Panneaux solaires", "Bornes IRVE", "Électricité générale"],
    url: "https://bconnectfrance.fr/",
    // Minimal SVG icon — lightning
    icon: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M28 4L10 28h14l-4 16L42 20H28L32 4z" />
      </svg>
    ),
  },
  {
    id: "saclean",
    num: "03",
    name: "SA Clean",
    category: "Nettoyage professionnel",
    tagline: "La propreté, un savoir-faire artisanal",
    description:
      "Nettoyage professionnel à Caen et alentours : rénovation de moquettes, remise en état de mobilier rembourré, nettoyage de fin de chantier, entretien de surfaces. Une équipe réactive pour particuliers, professionnels et collectivités.",
    tags: ["Fin de chantier", "Mobilier & moquettes", "Vitrerie & façades"],
    url: "https://sa-clean.fr/",
    // Minimal SVG icon — droplet + sparkle
    icon: (
      <svg width="28" height="28" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 6C24 6 10 22 10 30a14 14 0 0028 0C38 22 24 6 24 6z" />
        <path d="M17 32a8 8 0 008 5" opacity="0.5" />
        <path d="M36 10l2-2M38 14h3M36 18l2 2" opacity="0.4" strokeWidth="1" />
      </svg>
    ),
  },
];

// ─── Page component ───────────────────────────────────────────────────────────
export default function NosPartenaires() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/nos-partenaires/#webpage`,
        url: `${SITE_URL}/nos-partenaires`,
        name: `Nos partenaires | ${SITE_NAME}`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        inLanguage: "fr-FR",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/nos-partenaires/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Nos partenaires", item: `${SITE_URL}/nos-partenaires` },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          background: "#0A0A0A",
          paddingTop: "160px",
          paddingBottom: "100px",
          overflow: "hidden",
        }}
        aria-labelledby="partners-heading"
      >
        {/* Decorative corner squares */}
        <div
          className="hidden-mobile"
          style={{
            position: "absolute",
            top: "88px",
            right: "40px",
            width: "120px",
            height: "120px",
            border: "1px solid rgba(200,169,110,0.1)",
          }}
          aria-hidden="true"
        />
        <div
          className="hidden-mobile"
          style={{
            position: "absolute",
            bottom: "40px",
            left: "40px",
            width: "60px",
            height: "60px",
            border: "1px solid rgba(200,169,110,0.06)",
          }}
          aria-hidden="true"
        />

        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "20%",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(200,169,110,0.04) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          {/* Breadcrumb */}
          <nav
            aria-label="Fil d'Ariane"
            style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px", flexWrap: "wrap" }}
          >
            <Link
              href="/"
              style={{ fontSize: "0.75rem", color: "#4A4540", textDecoration: "none", letterSpacing: "0.05em", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Accueil
            </Link>
            <span style={{ color: "#2A2520", fontSize: "0.75rem" }}>›</span>
            <span style={{ fontSize: "0.75rem", color: "#C8A96E", letterSpacing: "0.05em", fontFamily: "'Space Grotesk', sans-serif" }}>
              Nos partenaires
            </span>
          </nav>

          {/* Two-column hero layout */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "end" }}
            className="zones-grid"
          >
            <div>
              <p className="section-label" style={{ marginBottom: "24px" }}>
                Partenaires de confiance
              </p>
              <h1
                id="partners-heading"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2.5rem, 5.5vw, 6rem)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.04em",
                  color: "#F0EBE3",
                  marginBottom: "32px",
                }}
              >
                Nos
                <br />
                <span style={{ color: "#C8A96E" }}>partenaires</span>
                <br />
                locaux
              </h1>
              <Link href="/contact" className="btn-gold">
                <span>Nous contacter</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div style={{ paddingBottom: "8px" }}>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#6A6560",
                  lineHeight: 1.8,
                  maxWidth: "420px",
                  marginLeft: "auto",
                  marginBottom: "32px",
                }}
              >
                Nous collaborons avec des artisans et professionnels locaux
                sélectionnés pour leur sérieux, leur expertise et leur
                complémentarité avec nos services d&apos;aménagement extérieur.
              </p>
              {/* Partner count badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "16px 24px",
                  border: "1px solid #1E1E1E",
                  background: "#111111",
                  marginLeft: "auto",
                  float: "right",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "2rem",
                    color: "#C8A96E",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}
                >
                  {partners.length}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "#5A5550",
                    lineHeight: 1.4,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  Partenaires
                  <br />
                  sélectionnés
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partners — asymmetric layout ─────────────────────────────── */}
      <section
        style={{ background: "#0A0A0A", borderTop: "1px solid #141414" }}
        aria-label="Liste de nos partenaires"
      >
        {/* ── Partner 01 — Desjoyaux — full-width hero card ── */}
        <article
          aria-labelledby="partner-desjoyaux"
          style={{
            borderBottom: "1px solid #141414",
            padding: "0",
          }}
        >
          <div className="container" style={{ padding: "80px 40px" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "80px",
                alignItems: "center",
              }}
              className="zones-grid"
            >
              {/* Left — content */}
              <div>
                {/* Category row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "32px",
                  }}
                >
                  <p className="section-label">Pisciniste</p>
                </div>

                <h2
                  id="partner-desjoyaux"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.8rem, 3vw, 3rem)",
                    lineHeight: 1.0,
                    letterSpacing: "-0.04em",
                    color: "#F0EBE3",
                    marginBottom: "12px",
                  }}
                >
                  Desjoyaux
                  <br />
                  <span style={{ color: "#C8A96E" }}>Mondeville</span>
                </h2>

                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "#5A5550",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "28px",
                  }}
                >
                  {partners[0].tagline}
                </p>

                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "#6A6560",
                    lineHeight: 1.85,
                    maxWidth: "460px",
                    marginBottom: "32px",
                  }}
                >
                  {partners[0].description}
                </p>

                {/* Tags */}
                <ul
                  style={{ listStyle: "none", padding: 0, margin: "0 0 36px", display: "flex", flexWrap: "wrap", gap: "8px" }}
                  aria-label="Services proposés"
                >
                  {partners[0].tags.map((tag) => (
                    <li
                      key={tag}
                      style={{
                        padding: "6px 14px",
                        border: "1px solid #1E1E1E",
                        background: "rgba(200,169,110,0.04)",
                        fontSize: "0.72rem",
                        color: "#8A8680",
                        letterSpacing: "0.06em",
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <a
                  href={partners[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  <span>Visiter le site</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              {/* Right — visual block */}
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    position: "relative",
                    background: "#111111",
                    border: "1px solid #1E1E1E",
                    padding: "48px",
                    overflow: "hidden",
                  }}
                >
                  {/* Background decoration */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-60px",
                      right: "-60px",
                      width: "280px",
                      height: "280px",
                      border: "1px solid rgba(200,169,110,0.06)",
                      borderRadius: "50%",
                    }}
                    aria-hidden="true"
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-40px",
                      left: "-40px",
                      width: "180px",
                      height: "180px",
                      border: "1px solid rgba(200,169,110,0.04)",
                      borderRadius: "50%",
                    }}
                    aria-hidden="true"
                  />

                  {/* Icon */}
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      border: "1px solid rgba(200,169,110,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#C8A96E",
                      marginBottom: "36px",
                      position: "relative",
                      zIndex: 1,
                    }}
                    aria-hidden="true"
                  >
                    {partners[0].icon}
                  </div>

                  {/* Stats */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "2px",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {[
                      { val: "50+", label: "Ans d'expertise" },
                      { val: "10", label: "Ans de garantie" },
                      { val: "🇫🇷", label: "Fabrication française" },
                      { val: "1", label: "Interlocuteur unique" },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        style={{
                          background: "#0A0A0A",
                          padding: "24px 20px",
                          borderTop: "2px solid transparent",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 700,
                            fontSize: "1.6rem",
                            color: "#C8A96E",
                            letterSpacing: "-0.04em",
                            marginBottom: "4px",
                          }}
                        >
                          {stat.val}
                        </div>
                        <div
                          style={{ fontSize: "0.72rem", color: "#4A4540", letterSpacing: "0.04em", lineHeight: 1.4 }}
                        >
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating accent line */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "-24px",
                    width: "48px",
                    height: "1px",
                    background: "linear-gradient(to right, rgba(200,169,110,0.4), transparent)",
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </article>

        {/* ── Partners 02 + 03 — side-by-side, offset ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderBottom: "1px solid #141414",
          }}
          className="partner-duo"
        >
          {partners.slice(1).map((partner, i) => (
            <article
              key={partner.id}
              aria-labelledby={`partner-${partner.id}`}
              style={{
                borderRight: i === 0 ? "1px solid #141414" : "none",
                padding: "72px 48px",
                background: i === 0 ? "#0A0A0A" : "#0D0D0D",
                position: "relative",
                overflow: "hidden",
                // Vertical offset: card 2 pushed down
                marginTop: i === 1 ? "60px" : "0",
              }}
            >
              {/* Corner decoration unique per card */}
              {i === 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "24px",
                    right: "24px",
                    width: "80px",
                    height: "80px",
                    border: "1px solid rgba(200,169,110,0.07)",
                  }}
                  aria-hidden="true"
                />
              )}
              {i === 1 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "24px",
                    right: "24px",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    border: "1px solid rgba(200,169,110,0.07)",
                  }}
                  aria-hidden="true"
                />
              )}


              {/* Icon */}
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  border: "1px solid rgba(200,169,110,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#C8A96E",
                  marginBottom: "28px",
                }}
                aria-hidden="true"
              >
                {partner.icon}
              </div>

              {/* Category label */}
              <p className="section-label" style={{ marginBottom: "16px" }}>
                {partner.category}
              </p>

              {/* Name */}
              <h2
                id={`partner-${partner.id}`}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "#F0EBE3",
                  marginBottom: "8px",
                }}
              >
                {partner.name}
              </h2>

              {/* Tagline */}
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "#5A5550",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                }}
              >
                {partner.tagline}
              </p>

              {/* Gold separator line */}
              <div
                style={{
                  width: "40px",
                  height: "1px",
                  background: "#C8A96E",
                  opacity: 0.5,
                  marginBottom: "24px",
                }}
                aria-hidden="true"
              />

              {/* Description */}
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "#5A5550",
                  lineHeight: 1.85,
                  marginBottom: "28px",
                }}
              >
                {partner.description}
              </p>

              {/* Tags */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 36px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                }}
                aria-label="Services proposés"
              >
                {partner.tags.map((tag) => (
                  <li
                    key={tag}
                    style={{
                      padding: "5px 12px",
                      border: "1px solid #1E1E1E",
                      fontSize: "0.7rem",
                      color: "#6A6560",
                      letterSpacing: "0.05em",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ display: "inline-flex", alignItems: "center", gap: "10px", fontSize: "0.78rem" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Visiter le site</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ── Partnership strip ─────────────────────────────────────────── */}
      <section
        style={{
          background: "#111111",
          borderTop: "1px solid #1A1A1A",
          padding: "clamp(40px, 8vw, 64px) 0",
          position: "relative",
          overflow: "hidden",
        }}
        aria-label="Devenir partenaire"
      >
        <div
          style={{
            position: "absolute",
            top: "20px", left: "20px", right: "20px", bottom: "20px",
            border: "1px solid rgba(200,169,110,0.05)",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />

        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
            flexWrap: "wrap",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div style={{ flex: "1 1 280px" }}>
            <p className="section-label" style={{ marginBottom: "16px" }}>
              Travailler ensemble
            </p>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.3rem, 3vw, 2.4rem)",
                letterSpacing: "-0.03em",
                color: "#F0EBE3",
                lineHeight: 1.1,
              }}
            >
              Vous êtes un professionnel complémentaire à notre activité ?
            </h2>
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              flex: "1 1 100%",
            }}
            className="partner-cta-row"
          >
            <Link href="/contact" className="btn-gold" style={{ flex: "1 1 auto", justifyContent: "center" }}>
              <span>Nous contacter</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/services" className="btn-outline" style={{ flex: "1 1 auto", justifyContent: "center" }}>
              <span>Nos services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Partner-specific styles */}
      <style>{`
        @media (max-width: 767px) {
          .partner-duo {
            grid-template-columns: 1fr !important;
          }
          .partner-duo article {
            margin-top: 0 !important;
            border-right: none !important;
            border-bottom: 1px solid #141414;
          }
          .partner-duo article:last-child {
            border-bottom: none;
          }
          .partner-cta-row {
            flex-direction: column !important;
          }
          .partner-cta-row a {
            width: 100% !important;
            justify-content: center !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .partner-duo {
            grid-template-columns: 1fr !important;
          }
          .partner-duo article {
            margin-top: 0 !important;
            border-right: none !important;
            border-bottom: 1px solid #141414;
          }
          .partner-cta-row {
            flex-direction: row !important;
          }
        }
      `}</style>
    </>
  );
}
