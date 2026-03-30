import Link from "next/link";
import Image from "next/image";
import { SITE_URL, SITE_NAME, OG_IMAGES } from "@/lib/seo";
import { SERVICES } from "@/lib/servicesData";

export const metadata = {
  title: `Services — Terrasses, Allées, Clôtures, Maçonnerie & Terrassement`,
  description:
    "Terrasses, allées & parkings, clôtures & portails, travaux de maçonnerie, terrassement à Caen et alentours. Devis gratuit sous 48h. Garantie décennale 10 ans.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: `Services d'aménagement extérieur — ${SITE_NAME}`,
    description:
      "Terrasses, allées, clôtures, maçonnerie et terrassement à Caen et alentours. Devis gratuit, garantie 10 ans.",
    url: `${SITE_URL}/services`,
    images: OG_IMAGES,
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/services/#webpage`,
      url: `${SITE_URL}/services`,
      name: `Services d'aménagement extérieur — ${SITE_NAME}`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "fr-FR",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/services/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE_URL}/services`,
        },
      ],
    },
    ...SERVICES.map((svc) => ({
      "@type": "Service",
      "@id": `${SITE_URL}/services/${svc.slug}/#service`,
      name: svc.title,
      description: svc.seo.description,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "City", name: "Caen" },
      url: `${SITE_URL}/services/${svc.slug}`,
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
        },
      },
    })),
  ],
};

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          background: "#0A0A0A",
          paddingTop: "160px",
          paddingBottom: "100px",
          overflow: "hidden",
        }}
        aria-labelledby="services-hero-heading"
      >
        <div
          className="about-hero-img hero-bg-photo"
          style={{
            backgroundImage: "url('/heroGB.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.45,
            height: "105%",
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
            Ce que nous faisons
          </p>
          <h1
            id="services-hero-heading"
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
            Nos
            <span style={{ color: "#C8A96E" }}> services</span>
            <br />
            d&apos;excellence
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "#6A6560",
              maxWidth: "460px",
              lineHeight: 1.8,
            }}
          >
            Cinq domaines d&apos;expertise, une seule promesse : des
            réalisations durables, esthétiques et parfaitement exécutées.
          </p>

          {/* Quick-nav chips — scroll to anchor on this page */}
          <nav
            aria-label="Sections des services"
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginTop: "40px",
              overflowX: "auto",
              paddingBottom: "4px",
            }}
          >
            {SERVICES.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="svc-chip"
                style={{
                  padding: "10px 20px",
                  border: "1px solid #242424",
                  background: "rgba(255,255,255,0.02)",
                  color: "#8A8680",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  minHeight: "44px",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                {s.num} {s.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ── Service rows ─────────────────────────────────────────────── */}
      {SERVICES.map((svc, i) => (
        <section
          key={svc.slug}
          id={svc.slug}
          aria-labelledby={`svc-heading-${svc.slug}`}
          style={{
            background: i % 2 === 0 ? "#0A0A0A" : "#0D0D0D",
            padding: "80px 0",
            borderTop: "1px solid #141414",
          }}
        >
          <div className="container">
            <div className={`svc-row ${i % 2 === 1 ? "svc-row-rtl" : ""}`}>
              <div className="svc-img-wrap" style={{ direction: "ltr" }}>
                <Image
                  src={svc.image}
                  alt={`${svc.title} — artisan à Caen et alentours`}
                  fill
                  loading={i === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 100vw, 520px"
                  style={{ objectFit: "cover" }}
                  className="svc-img-el"
                />
              </div>

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
                  id={`svc-heading-${svc.slug}`}
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
                  <Link
                    href={`/services/${svc.slug}`}
                    className="btn-outline"
                    style={{ fontSize: "0.8rem" }}
                  >
                    <span>En savoir plus</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Bottom CTA ───────────────────────────────────────────────── */}
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
