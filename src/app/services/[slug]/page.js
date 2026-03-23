import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { SITE_URL, SITE_NAME, OG_IMAGES } from "@/lib/seo";
import { SERVICES, getServiceBySlug } from "@/lib/servicesData";

// ─── Static generation ────────────────────────────────────────────────────────
export function generateStaticParams() {
  return SERVICES.map((svc) => ({ slug: svc.slug }));
}

// ─── Per-page SEO metadata ────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) return {};

  return {
    title: svc.seo.title,
    description: svc.seo.description,
    alternates: {
      canonical: `${SITE_URL}/services/${svc.slug}`,
    },
    openGraph: {
      title: svc.seo.title,
      description: svc.seo.description,
      url: `${SITE_URL}/services/${svc.slug}`,
      images: [
        {
          url: `${SITE_URL}${svc.image}`,
          width: 1200,
          height: 800,
          alt: `${svc.title} — ${SITE_NAME}`,
        },
      ],
    },
  };
}

// ─── Page component ───────────────────────────────────────────────────────────
export default async function ServicePage({ params }) {
  const { slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) notFound();

  // Index of this service (for alternating layout)
  const idx = SERVICES.findIndex((s) => s.slug === slug);

  // Other services (for the "related" strip at the bottom)
  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  // JSON-LD schema for this individual service page
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}/services/${svc.slug}/#service`,
        name: svc.title,
        description: svc.seo.description,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "City", name: "Caen" },
        url: `${SITE_URL}/services/${svc.slug}`,
        image: `${SITE_URL}${svc.image}`,
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "EUR",
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/services/${svc.slug}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${SITE_URL}/services`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: svc.title,
            item: `${SITE_URL}/services/${svc.slug}`,
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
        aria-labelledby="svc-page-heading"
      >
        {/* Background photo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
          aria-hidden="true"
        >
          <Image
            src={svc.image}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", opacity: 0.3 }}
          />
        </div>

        {/* Left-to-right gradient veil */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, #0A0A0A 55%, rgba(10,10,10,0.6) 100%)",
            zIndex: 1,
          }}
          aria-hidden="true"
        />

        {/* Bottom gradient */}
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

        {/* Decorative corner square */}
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

        <div
          className="container"
          style={{ position: "relative", zIndex: 2 }}
        >
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
            <Link
              href="/services"
              style={{
                fontSize: "0.75rem",
                color: "#4A4540",
                textDecoration: "none",
                letterSpacing: "0.05em",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Services
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
              {svc.title}
            </span>
          </nav>

          <p className="section-label" style={{ marginBottom: "24px" }}>
            {svc.subtitle}
          </p>

          <h1
            id="svc-page-heading"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 5.5vw, 6rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "#F0EBE3",
              maxWidth: "720px",
              marginBottom: "32px",
            }}
          >
            {svc.title
              .split(" ")
              .map((word, wi, arr) =>
                wi === arr.length - 1 ? (
                  <span key={wi} style={{ color: "#C8A96E" }}>
                    {word}
                  </span>
                ) : (
                  <span key={wi}>{word} </span>
                )
              )}
          </h1>

          <p
            style={{
              fontSize: "1rem",
              color: "#6A6560",
              maxWidth: "500px",
              lineHeight: 1.8,
              marginBottom: "40px",
            }}
          >
            {svc.shortDescription}
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-gold">
              <span>{svc.ctaText}</span>
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
                  d="M5 12h14M12 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link href="/services" className="btn-outline">
              <span>Tous les services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Service detail row ───────────────────────────────────────── */}
      <section
        style={{
          background: "#0A0A0A",
          padding: "80px 0",
          borderTop: "1px solid #141414",
        }}
        aria-labelledby={`svc-detail-${svc.slug}`}
      >
        <div className="container">
          <div className="svc-row">
            {/* Image */}
            <div className="svc-img-wrap" style={{ direction: "ltr" }}>
              <Image
                src={svc.image}
                alt={`${svc.title} — artisan à Caen et alentours`}
                fill
                loading="lazy"
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 520px"
                style={{ objectFit: "cover" }}
                className="svc-img-el"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: "20px",
                  padding: "7px 14px",
                  background: "rgba(10,10,10,0.85)",
                  border: "1px solid rgba(200,169,110,0.3)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.7rem",
                    color: "#C8A96E",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  ◆ {svc.highlight}
                </span>
              </div>
            </div>

            {/* Content */}
            <div style={{ direction: "ltr" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "2.8rem",
                    fontWeight: 700,
                    color: "#1A1A1A",
                    letterSpacing: "-0.05em",
                    lineHeight: 1,
                  }}
                  aria-hidden="true"
                >
                  {svc.num}
                </span>
                <div
                  style={{
                    width: "1px",
                    height: "40px",
                    background: "rgba(200,169,110,0.2)",
                  }}
                />
                <p className="section-label">{svc.subtitle}</p>
              </div>

              <h2
                id={`svc-detail-${svc.slug}`}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "#F0EBE3",
                  marginBottom: "20px",
                }}
              >
                {svc.title}
              </h2>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#6A6560",
                  lineHeight: 1.8,
                  marginBottom: "32px",
                }}
              >
                {svc.fullDescription}
              </p>

              {/* Features list */}
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "36px",
                  listStyle: "none",
                  padding: 0,
                }}
              >
                {svc.features.map((f, fi) => (
                  <li
                    key={fi}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "1px",
                        background: "#C8A96E",
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    />
                    <span style={{ fontSize: "0.85rem", color: "#8A8680" }}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="btn-gold">
                <span>{svc.ctaText}</span>
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
                    d="M5 12h14M12 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other services strip ─────────────────────────────────────── */}
      {others.length > 0 && (
        <section
          style={{
            background: "#0D0D0D",
            borderTop: "1px solid #141414",
            padding: "80px 0",
          }}
          aria-labelledby="other-services-heading"
        >
          <div className="container">
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                marginBottom: "48px",
                gap: "24px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <p className="section-label" style={{ marginBottom: "16px" }}>
                  Nos autres services
                </p>
                <h2
                  id="other-services-heading"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    letterSpacing: "-0.03em",
                    color: "#F0EBE3",
                    lineHeight: 1.05,
                  }}
                >
                  Explorez nos
                  <br />
                  <span style={{ color: "#C8A96E" }}>autres expertises</span>
                </h2>
              </div>
              <Link
                href="/services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "0.8rem",
                  color: "#C8A96E",
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                }}
              >
                Voir tous les services
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

            <div
              className="projects-grid"
              role="list"
              aria-label="Autres services"
            >
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  role="listitem"
                  className="card-hover"
                  style={{
                    display: "block",
                    position: "relative",
                    height: "320px",
                    overflow: "hidden",
                    textDecoration: "none",
                    background: "#111111",
                    border: "1px solid #1E1E1E",
                  }}
                >
                  <Image
                    src={other.image}
                    alt={other.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    style={{
                      objectFit: "cover",
                      filter: "brightness(0.7)",
                      transition: "transform 0.55s cubic-bezier(0.22,1,0.36,1)",
                    }}
                    className="mosaic-img"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.2) 60%)",
                    }}
                    aria-hidden="true"
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: "24px",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        color: "rgba(200,169,110,0.6)",
                        letterSpacing: "0.2em",
                        marginBottom: "8px",
                      }}
                    >
                      {other.num}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        color: "#F0EBE3",
                        marginBottom: "6px",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {other.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.78rem",
                        color: "#8A8680",
                        lineHeight: 1.5,
                      }}
                    >
                      {other.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA section ──────────────────────────────────────────────── */}
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
            Vous avez un projet ?
          </p>
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
            Parlons de votre
            <br />
            <span style={{ color: "#C8A96E" }}>projet extérieur</span>
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#5A5550",
              lineHeight: 1.8,
              marginBottom: "36px",
            }}
          >
            Consultation gratuite, devis détaillé sous 48h. Nos experts se
            déplacent sur site.
          </p>
          <div className="cta-row-center">
            <Link href="/contact" className="btn-gold">
              <span>Obtenir un devis gratuit</span>
            </Link>
            <Link href="/faq" className="btn-outline">
              <span>Questions fréquentes</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Mobile sticky bar ────────────────────────────────────────── */}
      <div className="mobile-cta-bar" aria-label="Actions rapides">
        <Link href="/contact" className="btn-gold">
          <span>Devis gratuit</span>
        </Link>
        <a
          href="tel:+33620783131"
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
