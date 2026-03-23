import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SITE_URL, SITE_NAME, OG_IMAGES } from "@/lib/seo";
import { LOCAL_CITIES, getCityBySlug } from "@/lib/localCities";
import { SERVICES } from "@/lib/servicesData";

// ─── Static generation ────────────────────────────────────────────────────────
export function generateStaticParams() {
  return LOCAL_CITIES.map((c) => ({ city: c.slug }));
}

// ─── Per-page SEO metadata ────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { city } = await params;
  const data = getCityBySlug(city);
  if (!data) return {};

  return {
    title: data.seo.title,
    description: data.seo.description,
    alternates: {
      canonical: `${SITE_URL}/amenagement-exterieur/${data.slug}`,
    },
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      url: `${SITE_URL}/amenagement-exterieur/${data.slug}`,
      images: OG_IMAGES,
    },
  };
}

// ─── Reusable icon paths ──────────────────────────────────────────────────────
const ARROW = "M5 12h14M12 5l7 7-7 7";
const PHONE_PATH =
  "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z";

// ─── Page component ───────────────────────────────────────────────────────────
export default async function LocalCityPage({ params }) {
  const { city } = await params;
  const data = getCityBySlug(city);
  if (!data) notFound();

  // Nearby cities for internal linking
  const nearby = data.nearbySlugs
    .map((s) => LOCAL_CITIES.find((c) => c.slug === s))
    .filter(Boolean);

  // JSON-LD for this local page
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        areaServed: { "@type": "City", name: data.name },
        telephone: "+33620783131",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Caen",
          addressCountry: "FR",
        },
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/amenagement-exterieur/${data.slug}/#webpage`,
        url: `${SITE_URL}/amenagement-exterieur/${data.slug}`,
        name: data.seo.title,
        description: data.seo.description,
        inLanguage: "fr-FR",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/amenagement-exterieur/${data.slug}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: `Aménagement extérieur ${data.name}`,
            item: `${SITE_URL}/amenagement-exterieur/${data.slug}`,
          },
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
        aria-labelledby="local-page-heading"
      >
        {/* Background image */}
        <div
          style={{ position: "absolute", inset: 0, zIndex: 0 }}
          aria-hidden="true"
        >
          <Image
            src="/heroGB.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", opacity: 0.22 }}
          />
        </div>

        {/* Gradient veils */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #0A0A0A 50%, rgba(10,10,10,0.5) 100%)",
            zIndex: 1,
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "120px",
            background: "linear-gradient(to top, #0A0A0A, transparent)",
            zIndex: 1,
          }}
          aria-hidden="true"
        />

        {/* Corner square */}
        <div
          className="hidden-mobile"
          style={{
            position: "absolute",
            top: "88px",
            right: "40px",
            width: "120px",
            height: "120px",
            border: "1px solid rgba(200,169,110,0.12)",
            zIndex: 2,
          }}
          aria-hidden="true"
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          {/* Breadcrumb */}
          <nav
            aria-label="Fil d'Ariane"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "32px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              style={{
                fontSize: "0.75rem",
                color: "#4A4540",
                textDecoration: "none",
                letterSpacing: "0.05em",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Accueil
            </Link>
            <span style={{ color: "#2A2520", fontSize: "0.75rem" }}>›</span>
            <span
              style={{
                fontSize: "0.75rem",
                color: "#C8A96E",
                letterSpacing: "0.05em",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {data.name}
            </span>
          </nav>

          <p className="section-label" style={{ marginBottom: "24px" }}>
            Aménagement extérieur · {data.name}
          </p>

          <h1
            id="local-page-heading"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem, 5vw, 5.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "#F0EBE3",
              maxWidth: "780px",
              marginBottom: "32px",
            }}
          >
            Aménagement extérieur
            <br />
            <span style={{ color: "#C8A96E" }}>à {data.name}</span>
          </h1>

          <p
            style={{
              fontSize: "1rem",
              color: "#6A6560",
              maxWidth: "520px",
              lineHeight: 1.8,
              marginBottom: "40px",
            }}
          >
            {data.heroIntro}
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-gold">
              <span>Demander un devis gratuit</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d={ARROW} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/services" className="btn-outline">
              <span>Nos services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Unique intro text ─────────────────────────────────────────── */}
      <section
        style={{
          background: "#0A0A0A",
          padding: "80px 0",
          borderTop: "1px solid #141414",
        }}
        aria-labelledby={`local-intro-${data.slug}`}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "start",
            }}
            className="zones-grid"
          >
            {/* Text */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    width: "1px",
                    height: "40px",
                    background: "rgba(200,169,110,0.3)",
                  }}
                />
                <p className="section-label">Notre intervention à {data.name}</p>
              </div>

              <h2
                id={`local-intro-${data.slug}`}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "#F0EBE3",
                  marginBottom: "28px",
                }}
              >
                {data.tagline}
              </h2>

              <p
                style={{
                  fontSize: "0.92rem",
                  color: "#6A6560",
                  lineHeight: 1.85,
                  marginBottom: "24px",
                }}
              >
                {data.intro}
              </p>
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "#5A5550",
                  lineHeight: 1.85,
                  marginBottom: "36px",
                }}
              >
                {data.body}
              </p>

              <Link href="/contact" className="btn-gold">
                <span>Obtenir un devis gratuit</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    d={ARROW}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* Trust items */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}
            >
              {[
                {
                  icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
                  title: "Garantie décennale",
                  desc: "Tous nos ouvrages sont couverts par une assurance décennale et responsabilité civile professionnelle.",
                },
                {
                  icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                  title: "Devis gratuit sous 48h",
                  desc: "Nous nous déplaçons à " + data.name + " pour évaluer votre projet et établir un devis clair, sans frais cachés.",
                },
                {
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
                  title: "Équipe locale",
                  desc: "Notre équipe intervient directement depuis Caen, sans sous-traitance, pour un suivi de chantier optimal.",
                },
                {
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                  title: "Délais respectés",
                  desc: "Nous nous engageons sur un planning précis dès la signature du devis. Votre projet avance sans mauvaise surprise.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    background: "#111111",
                    padding: "28px 28px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
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
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        color: "#F0EBE3",
                        marginBottom: "6px",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.82rem",
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
        </div>
      </section>

      {/* ── Services grid ─────────────────────────────────────────────── */}
      <section
        style={{
          background: "#0D0D0D",
          padding: "80px 0",
          borderTop: "1px solid #141414",
        }}
        aria-labelledby={`local-services-${data.slug}`}
      >
        <div className="container">
          <div style={{ marginBottom: "48px" }}>
            <p className="section-label" style={{ marginBottom: "16px" }}>
              Nos prestations à {data.name}
            </p>
            <h2
              id={`local-services-${data.slug}`}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#F0EBE3",
              }}
            >
              Tous nos services,
              <br />
              <span style={{ color: "#C8A96E" }}>à votre porte</span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2px",
            }}
            className="local-svc-grid"
            role="list"
          >
            {SERVICES.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                role="listitem"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                  padding: "32px 28px",
                  background: "#111111",
                  border: "1px solid #1A1A1A",
                  textDecoration: "none",
                  transition: "border-color 0.2s",
                }}
                className="local-svc-card"
              >
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    color: "rgba(200,169,110,0.5)",
                    letterSpacing: "0.2em",
                  }}
                >
                  {svc.num}
                </span>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "#F0EBE3",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {svc.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "#5A5550",
                    lineHeight: 1.7,
                    flex: 1,
                  }}
                >
                  {svc.shortDescription}
                </p>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "0.75rem",
                    color: "#C8A96E",
                    letterSpacing: "0.08em",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 500,
                  }}
                >
                  En savoir plus
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path
                      d={ARROW}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nearby cities ─────────────────────────────────────────────── */}
      {nearby.length > 0 && (
        <section
          style={{
            background: "#0A0A0A",
            padding: "60px 0",
            borderTop: "1px solid #141414",
          }}
          aria-labelledby={`local-nearby-${data.slug}`}
        >
          <div className="container">
            <p className="section-label" style={{ marginBottom: "16px" }}>
              Communes voisines
            </p>
            <h2
              id={`local-nearby-${data.slug}`}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
                letterSpacing: "-0.03em",
                color: "#F0EBE3",
                marginBottom: "32px",
              }}
            >
              Nous intervenons aussi dans les communes proches
            </h2>
            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              {nearby.map((c) => (
                <Link
                  key={c.slug}
                  href={`/amenagement-exterieur/${c.slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 20px",
                    border: "1px solid #1E1E1E",
                    background: "#111111",
                    color: "#8A8680",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.82rem",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s",
                    minHeight: "44px",
                  }}
                  className="zone-card"
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      borderRadius: "50%",
                      background: "#C8A96E",
                      flexShrink: 0,
                    }}
                    aria-hidden="true"
                  />
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#111111",
          borderTop: "1px solid #1A1A1A",
          padding: "80px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            right: "20px",
            bottom: "20px",
            border: "1px solid rgba(200,169,110,0.05)",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <p
            className="section-label"
            style={{ justifyContent: "center", marginBottom: "20px" }}
          >
            Prêt à démarrer votre projet à {data.name} ?
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              letterSpacing: "-0.04em",
              color: "#F0EBE3",
              marginBottom: "24px",
              lineHeight: 1.0,
            }}
          >
            Obtenez votre devis
            <br />
            <span style={{ color: "#C8A96E" }}>gratuit sous 48h</span>
          </h2>
          <p
            style={{
              fontSize: "0.92rem",
              color: "#5A5550",
              lineHeight: 1.8,
              marginBottom: "36px",
            }}
          >
            Visite sur site, devis détaillé, délais respectés. Artisan local à
            {" "}{data.name} et dans toutes les communes alentours.
          </p>
          <div className="cta-row-center">
            <Link href="/contact" className="btn-gold">
              <span>Demander un devis</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  d={ARROW}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <a href="tel:+33620783131" className="btn-outline">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path
                  d={PHONE_PATH}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>06 20 78 31 31</span>
            </a>
          </div>
        </div>
      </section>

      {/* Mobile sticky bar */}
      <div className="mobile-cta-bar" aria-label="Actions rapides">
        <Link href="/contact" className="btn-gold">
          <span>Devis gratuit</span>
        </Link>
        <a
          href="tel:+33620783131"
          className="btn-call"
          aria-label="Appeler GB Projet Concept"
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
            <path d={PHONE_PATH} />
          </svg>
        </a>
      </div>
    </>
  );
}
