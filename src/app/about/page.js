import Link from "next/link";
import Image from "next/image";
import { SITE_URL, SITE_NAME, OG_IMAGES } from "@/lib/seo";

export const metadata = {
  title: `À propos — Notre histoire & équipe`,
  description:
    "Découvrez l'histoire de projet concept, fondée en 2012 en Île-de-France. Artisans qualifiés en aménagement extérieur, maçonnerie et terrassement. Garantie décennale.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: `À propos de ${SITE_NAME} — Notre histoire & équipe`,
    description:
      "Paysagiste qualifié RGE en Île-de-France depuis 2012. Découvrez notre équipe et nos valeurs.",
    url: `${SITE_URL}/about`,
    images: OG_IMAGES,
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${SITE_URL}/about/#webpage`,
      url: `${SITE_URL}/about`,
      name: `À propos de ${SITE_NAME}`,
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
          name: "À propos",
          item: `${SITE_URL}/about`,
        },
      ],
    },
    {
      "@type": "Person",
      name: "Marc Dumont",
      jobTitle: "Fondateur & Directeur",
      worksFor: { "@id": `${SITE_URL}/#organization` },
      description:
        "25 ans d'expérience en maçonnerie paysagère. Formé à l'École Nationale Supérieure du Paysage.",
    },
  ],
};

const values = [
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Travail soigné",
    desc: "Chaque chantier est réalisé avec attention aux détails et des finitions propres.",
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Respect des délais",
    desc: "Les travaux sont organisés pour respecter les engagements pris avec le client.",
  },
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "Conseils adaptés",
    desc: "Chaque projet est différent. Je prends le temps de proposer des solutions adaptées à votre extérieur.",
  },
  {
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
    title: "Matériaux durables",
    desc: "Choix de matériaux fiables pour garantir des aménagements solides et durables.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "Début dans le bâtiment",
    desc: "Premières expériences sur différents chantiers de construction et de rénovation. Apprentissage du métier directement sur le terrain aux côtés d'artisans expérimentés, avec une attention particulière portée au travail bien fait et aux finitions.",
  },
  {
    year: "2020 – 2021",
    title: "Développement de l'expérience",
    desc: "Participation à plusieurs chantiers dans le domaine du bâtiment, ce qui m'a permis d'acquérir de solides bases techniques et une bonne organisation du travail sur chantier.",
  },
  {
    year: "2022",
    title: "Orientation vers l'aménagement extérieur",
    desc: "Avec l'expérience acquise sur le terrain, je me suis progressivement orienté vers les travaux d'aménagement extérieur : terrasses, allée, cour, clôture, divers travaux de maçonnerie. Ces réalisations permettent de transformer un terrain en un espace extérieur agréable, fonctionnel et durable.",
  },
  {
    year: "2024",
    title: "Création de l'entreprise",
    desc: "Création de GB Projet Concept, afin de proposer aux particuliers des travaux d'aménagement extérieur réalisés avec sérieux, précision et des matériaux de qualité.",
  },
  {
    year: "Aujourd'hui",
    title: "Un artisan à l'écoute de ses clients",
    desc: "Aujourd'hui, j'accompagne mes clients dans leurs projets d'aménagement extérieur en proposant des solutions adaptées à chaque terrain, chaque besoin et chaque budget. Mon objectif est simple : réaliser un travail propre, durable et à la hauteur des attentes de mes clients.",
  },
];

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <section
        style={{
          position: "relative",
          background: "#0A0A0A",
          paddingTop: "160px",
          paddingBottom: "100px",
          overflow: "hidden",
        }}
        aria-labelledby="about-heading"
      >
        <div
          className="about-hero-img hero-bg-photo"
          style={{
            backgroundImage: "url('/heroGB.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.45,
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "55%",
            background:
              "linear-gradient(to right, #0A0A0A 20%, transparent 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="hidden-mobile"
          style={{
            position: "absolute",
            top: "88px",
            right: "40px",
            width: "120px",
            height: "120px",
            border: "1px solid rgba(200,169,110,0.12)",
          }}
          aria-hidden="true"
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <p className="section-label" style={{ marginBottom: "24px" }}>
            MON PARCOURS
          </p>
          <h1
            id="about-heading"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 5.5vw, 6rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "#F0EBE3",
              maxWidth: "680px",
              marginBottom: "32px",
            }}
          >
            Un artisan au service de vos{" "}
            <span style={{ color: "#C8A96E" }}>extérieurs</span>
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "#6A6560",
              maxWidth: "460px",
              lineHeight: 1.8,
            }}
          >
            Aménagements extérieurs. Mon objectif est simple — vous offrir un
            extérieur dont vous serez fier pendant de nombreuses années.
          </p>
        </div>
      </section>

      <section
        className="section-xl"
        style={{ background: "#0D0D0D" }}
        aria-labelledby="story-heading"
      >
        <div className="container">
          <div className="grid-2col">
            <div className="about-collage" aria-hidden="true">
              <div
                className="hero-bg-photo"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: "18%",
                  bottom: "18%",
                  backgroundImage: "url('/gbprojectconcept_service20.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div
                className="hero-bg-photo"
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "52%",
                  height: "44%",
                  backgroundImage: "url('/gbprojectconcept_service7.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  border: "4px solid #0D0D0D",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "44%",
                  right: 0,
                  width: "52%",
                  height: "3px",
                  background: "linear-gradient(to right, transparent, #C8A96E)",
                }}
              />
            </div>

            <div>
              <p className="section-label" style={{ marginBottom: "24px" }}>
                Mon histoire
              </p>
              <h2
                id="story-heading"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "#F0EBE3",
                  marginBottom: "28px",
                }}
              >
                Une passion née
                <br />
                <span style={{ color: "#C8A96E" }}>sur les chantiers</span>
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#6A6560",
                    lineHeight: 1.8,
                  }}
                >
                  Depuis plusieurs années, je travaille dans le bâtiment avec une conviction simple : le travail bien fait et la satisfaction des clients passent avant tout.
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#6A6560",
                    lineHeight: 1.8,
                  }}
                >
                  J&apos;ai commencé sur des chantiers de construction de maisons individuelles, où j&apos;ai appris le métier directement sur le terrain aux côtés d&apos;artisans expérimentés. Cette expérience m&apos;a permis de développer un savoir-faire solide et une vraie exigence pour les finitions et la qualité du travail.
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#6A6560",
                    lineHeight: 1.8,
                  }}
                >
                  Avec le temps, je me suis naturellement orienté vers l&apos;aménagement extérieur, un domaine qui me passionne car il permet de transformer un simple terrain en un véritable espace de vie.
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#6A6560",
                    lineHeight: 1.8,
                  }}
                >
                  Terrasses, pavages, clôtures ou maçonnerie extérieure : chaque projet est pensé pour être esthétique, durable et adapté aux besoins de mes clients.
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#6A6560",
                    lineHeight: 1.8,
                  }}
                >
                  Après plusieurs années d&apos;expérience sur différents chantiers, j&apos;ai décidé de créer GB Projet Concept afin d&apos;accompagner les particuliers dans leurs projets avec une approche claire : un travail sérieux, des matériaux de qualité et des finitions soignées.
                </p>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#6A6560",
                    lineHeight: 1.8,
                  }}
                >
                  Aujourd&apos;hui, je mets mon expérience et mon savoir-faire au service de vos projets afin de vous proposer des aménagements extérieurs durables et à la hauteur de vos attentes.
                </p>
              </div>
              <blockquote
                style={{
                  marginTop: "36px",
                  padding: "24px 28px",
                  border: "1px solid rgba(200,169,110,0.15)",
                  background: "rgba(200,169,110,0.03)",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1rem",
                    color: "#C8A96E",
                    fontStyle: "italic",
                    lineHeight: 1.7,
                  }}
                >
                  « Chaque projet est unique. Mon objectif est simple : réaliser
                  un travail propre, durable et à la hauteur des attentes de mes
                  clients »
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#111111",
          borderTop: "1px solid #1A1A1A",
          padding: "64px 0",
        }}
        aria-label="Chiffres clés"
      >
        <div className="container">
          <div className="stats-bar" role="list">
            {[
              { val: "7+", label: "Années d'expérience", sub: "Depuis 2019" },
              {
                val: "100+",
                label: "Chantiers réalisés",
                sub: "En Calvados",
              },
              {
                val: "100%",
                label: "Satisfaction client",
                sub: "Mesurée en 2024",
              },
              {
                val: "0",
                label: "Surcoûts cachés",
                sub: "Devis clair et détaillé",
              },
            ].map((s, i) => (
              <div
                key={i}
                role="listitem"
                style={{ background: "#0A0A0A", padding: "44px 32px" }}
              >
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                    color: "#C8A96E",
                    letterSpacing: "-0.05em",
                    lineHeight: 1,
                  }}
                >
                  {s.val}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    color: "#F0EBE3",
                    marginTop: "8px",
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    color: "#3A3530",
                    letterSpacing: "0.05em",
                    marginTop: "4px",
                  }}
                >
                  {s.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-xl"
        style={{ background: "#0A0A0A" }}
        aria-labelledby="values-heading"
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p
              className="section-label"
              style={{ justifyContent: "center", marginBottom: "20px" }}
            >
              Ce en quoi nous croyons
            </p>
            <h2
              id="values-heading"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                letterSpacing: "-0.03em",
                color: "#F0EBE3",
              }}
            >
              Nos valeurs fondamentales
            </h2>
          </div>
          <div className="values-grid" role="list">
            {values.map((v, i) => (
              <div
                key={i}
                role="listitem"
                className="card-hover"
                style={{
                  background: "#111111",
                  padding: "48px 40px",
                  display: "flex",
                  gap: "28px",
                  alignItems: "flex-start",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    border: "1px solid rgba(200,169,110,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#C8A96E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={v.icon} />
                  </svg>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: "#F0EBE3",
                      marginBottom: "10px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "#5A5550",
                      lineHeight: 1.8,
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-xl"
        style={{ background: "#0D0D0D" }}
        aria-labelledby="timeline-heading"
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <p
              className="section-label"
              style={{ justifyContent: "center", marginBottom: "20px" }}
            >
              Notre parcours
            </p>
            <h2
              id="timeline-heading"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                letterSpacing: "-0.03em",
                color: "#F0EBE3",
              }}
            >
              Une croissance <span style={{ color: "#C8A96E" }}>maîtrisée</span>
            </h2>
          </div>
          <div
            style={{
              position: "relative",
              maxWidth: "720px",
              margin: "0 auto",
              paddingLeft: "56px",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "23px",
                top: "24px",
                bottom: "24px",
                width: "1px",
                background:
                  "linear-gradient(to bottom, transparent, rgba(200,169,110,0.25) 8%, rgba(200,169,110,0.25) 92%, transparent)",
              }}
              aria-hidden="true"
            />
            <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {timeline.map((item, i) => (
                <li
                  key={i}
                  className="timeline-item"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "24px",
                    marginBottom: i < timeline.length - 1 ? "40px" : 0,
                  }}
                >
                  <div
                    className="tl-dot"
                    style={{
                      flexShrink: 0,
                      width: "48px",
                      marginLeft: "-56px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "6px",
                      zIndex: 2,
                      order: 1,
                    }}
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        background: "#0D0D0D",
                        border: "1px solid rgba(200,169,110,0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "6px",
                          height: "6px",
                          background: "#C8A96E",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                    <time
                      dateTime={item.year}
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.7rem",
                        color: "#C8A96E",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {item.year}
                    </time>
                  </div>
                  <div
                    className="tl-content"
                    style={{ flex: 1, minWidth: 0, order: 2 }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: "1rem",
                        color: "#F0EBE3",
                        marginBottom: "8px",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "#5A5550",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#111111",
          borderTop: "1px solid #1A1A1A",
          padding: "80px 0",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              letterSpacing: "-0.04em",
              color: "#F0EBE3",
              marginBottom: "24px",
              lineHeight: 1.0,
            }}
          >
            Travaillons ensemble
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#5A5550",
              lineHeight: 1.8,
              marginBottom: "36px",
            }}
          >
            Discutons de votre projet lors d&apos;une consultation gratuite. Nos
            experts sont à votre écoute.
          </p>
          <div className="cta-row-center">
            <Link href="/contact" className="btn-gold">
              <span>Prendre contact</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
