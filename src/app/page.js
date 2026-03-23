import Link from "next/link";
import Image from "next/image";
import { SITE_URL, SITE_NAME, OG_IMAGES } from "@/lib/seo";
import { SERVICES } from "@/lib/servicesData";
import { LOCAL_CITIES } from "@/lib/localCities";
import PartnersSection from "@/components/PartnersSection";

export const metadata = {
  title: `${SITE_NAME} — Aménagement Extérieur à Caen et alentours`,
  description:
    "Terrasses, allées, clôtures, maçonnerie et terrassement à Caen et alentours. Devis gratuit sous 48h, garantie décennale 10 ans. 100+ chantiers réalisés.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${SITE_NAME} — Aménagement Extérieur à Caen et alentours`,
    description:
      "Clôtures, allées, terrasses, maçonnerie paysagère à Caen et alentours. Devis gratuit, garantie 10 ans.",
    url: SITE_URL,
    images: OG_IMAGES,
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: `${SITE_NAME} — Aménagement Extérieur & Travaux Paysagers`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "fr-FR",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      ],
    },
  ],
};

const GOOGLE_REVIEWS_URL = "https://share.google/48MGU4p0cDixVoBSg";

const reviews = [
  {
    name: "Fabrice Peyrard",
    rating: 5,
    date: "Il y a 2 semaines",
    text: "Super maçon et super mec, ainsi que son équipe (je précise que je ne le connaissais pas avant les travaux). Il s'est occupé de la construction d'un garage et d'une terrasse, de la pose de l'enrobé, on est ravis.",
  },
  {
    name: "Mickael Legoupil",
    rating: 5,
    date: "Il y a 1 mois",
    text: "J'ai fait appel à Gaisa et son équipe par deux fois et à chaque fois un travail d'une grande qualité. D'abord pour ma terrasse et le pourtour de ma maison en lui demandant un béton lissé, ce qui a été réalisé parfaitement. Plus récemment, Gaisa et son équipe ont réalisé la préparation et le pavage de l'entrée de ma maison avec toujours autant de sérieux et minutie. C'est tellement agréable d'avoir à faire à des professionnels de confiance, qui travaillent vraiment pour la satisfaction du client..",
  },
  {
    name: "Besher Eid",
    rating: 5,
    date: "Il y a 2 mois",
    text: "Excellente prestation du début à la fin. L’enrobé est parfaitement réalisé et la clôture posée avec soin. Équipe sérieuse, ponctuelle et à l’écoute. Très satisfait du résultat final.",
  },
  {
    name: "Hichem KHEROUF",
    rating: 5,
    date: "Il y a 3 mois",
    text: "J'ai eu l'occasion de solliciter cette entreprise à deux reprises, l'année dernière et puis à nouveau cette année, et mon constat reste le même : une équipe d'un grand sérieux. Le travail est réalisé avec une précision de véritables professionnels. Un point particulièrement appréciable : la propreté exemplaire du chantier du début à la fin des travaux. C'est rare de trouver une telle rigueur. Je recommande les yeux fermés pour quiconque cherche de la qualité et de la tranquillité d'esprit.",
  },
  {
    name: "Rose Mickael",
    rating: 5,
    date: "Il y a 4 mois",
    text: "Artisan très sérieux avec des gens qui travaillent avec passion, très pro, très minutieux et en plus très sympathiques et respectueux. Je recommande les yeux fermés ! Nous sommes très satisfaits du résultat et encore merci pour tout 👌",
  },
  {
    name: "HELENE BEUVE",
    rating: 5,
    date: "Il y a 5 mois",
    text: "Je recommande Gaisa à 100%, j’ai fait appel à lui pour la pose d’une clôture rigide. Le résultat est impeccable, travail soigneux, rapide. Gaisa a su s’adapter et trouver une solution. Il est en plus très agréable et ponctuel. Je ferai appel à lui sans aucun doute pour mes prochains travaux.",
  },
];

// Derived from the shared central data source — do not duplicate content here.
const services = SERVICES.map((svc) => ({
  num: svc.num,
  title: svc.title,
  desc: svc.shortDescription,
  img: svc.image,
  href: `/services/${svc.slug}`,
}));

const projects = [
  {
    title: "Parking enrobé",
    tag: "Cour & parking",
    img: "/gbprojectconcept_service4.webp",
    year: "2024",
  },
  {
    title: "Installation clôture",
    tag: "Clôture & Portail",
    img: "/gbprojectconcept_service11.webp",
    year: "2023",
  },
  {
    title: "Pavage extérieur",
    tag: "Pavage",
    img: "/gbprojectconcept_service19.webp",
    year: "2023",
  },
];

const stats = [
  { val: "7+", label: "Années d'expérience" },
  { val: "100+", label: "Chantiers réalisés" },
  { val: "98%", label: "Clients satisfaits" },
  { val: "10", label: "Ans de garantie" },
];

const process = [
  {
    n: "01",
    title: "Consultation",
    desc: "Visite sur site, échange sur votre projet et vos contraintes.",
  },
  {
    n: "02",
    title: "Conception",
    desc: "Plans et proposition visuelle adaptés à votre terrain.",
  },
  {
    n: "03",
    title: "Devis détaillé",
    desc: "Chiffrage transparent, sans surprise, avec planning.",
  },
  {
    n: "04",
    title: "Réalisation",
    desc: "Exécution soignée par nos équipes, dans les délais convenus.",
  },
  {
    n: "05",
    title: "Réception",
    desc: "Contrôle qualité final et remise Garantie 10 ANS.",
  },
];

const marqueeItems = [
  "TERRASE",
  "ALLÉE",
  "COUR",
  "CLÔTURE",
  "PORTAIL",
  "MAÇONNERIE",
  "TERRASSEMENT",
  "TERRASE",
  "ALLÉE",
  "COUR",
  "CLÔTURE",
  "PORTAIL",
  "MAÇONNERIE",
  "TERRASSEMENT",
];

const mosaicSpans = [
  { col: "span 5", height: "380px" },
  { col: "span 7", height: "380px" },
  { col: "span 4", height: "320px" },
  { col: "span 4", height: "320px" },
  { col: "span 4", height: "320px" },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <section
        aria-label="Présentation de projet concept"
        style={{
          position: "relative",
          minHeight: "100svh",
          display: "flex",
          alignItems: "flex-end",
          paddingTop: "96px",
          paddingBottom: "100px",
          overflow: "hidden",
          background: "#000000",
        }}
      >
        <picture className="hero-bg-picture">
          {/* мобильная версия ≤ 640px */}
          <source
            media="(max-width: 640px)"
            srcSet="/photo_logo_backgroundblack_mobile_2.webp"
            type="image/webp"
          />
          {/* планшетная версия 641px – 1024px */}
          <source
            media="(max-width: 1024px)"
            srcSet="/photo_logo_backgroundblack_tablet_2.webp"
            type="image/webp"
          />
          {/* десктоп ≥ 1025px */}
          <img
            src="/photo_logo_backgroundblack_2.webp"
            alt="Aménagement extérieur projet concept — allée en pierre naturelle"
            fetchPriority="high"
            decoding="async"
            className="hero-bg-img hero-anim-img"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "65% center",
              opacity: 0.92,
              filter: "brightness(0.5) contrast(1.06)",
            }}
          />
        </picture>
        <div
          className="scroll-indicator"
          style={{
            position: "absolute",
            left: "10%",
            top: "15%",
            width: "1px",
            height: "60%",
            background:
              "linear-gradient(to bottom, transparent, rgba(200,169,110,0.4), transparent)",
          }}
        />

        <div className="hero-wrap" style={{ paddingBottom: 0 }}>
          <p
            className="section-label hero-anim-label"
            style={{ marginBottom: "28px" }}
          >
            Aménagement extérieur & Maçonnerie
          </p>

          <h1
            className="hero-anim-h1"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.8rem, 7vw, 7.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "#F0EBE3",
              maxWidth: "900px",
              marginBottom: "32px",
            }}
          >
            Investissez dans un extérieur
            <br />
            <span style={{ color: "#C8A96E" }}>
              qui valorise votre patrimoine.
            </span>
          </h1>

          <p
            className="hero-anim-desc"
            style={{
              fontSize: "1rem",
              color: "#8A8680",
              maxWidth: "520px",
              lineHeight: 1.7,
              marginBottom: "36px",
            }}
          >
            Vous avez un projet d&apos;aménagement extérieur ? GB Projet Concept
            met en valeur votre maison, améliore votre extérieur, et
            s&apos;adapte à vos besoins.
          </p>

          <div className="cta-row hero-anim-cta">
            <Link href="/contact" className="btn-gold">
              <span>Demander un devis</span>
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
            <Link href="/services" className="btn-outline">
              <span>Découvrir nos services</span>
            </Link>
          </div>

          <div
            className="hero-stats-grid hero-anim-stats"
            role="list"
            aria-label="Chiffres clés"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                role="listitem"
                style={{
                  paddingRight: "20px",
                  borderRight: i < 3 ? "1px solid #1E1E1E" : "none",
                  paddingLeft: i > 0 ? "20px" : "0",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    color: "#C8A96E",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {s.val}
                </div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    color: "#4A4540",
                    marginTop: "4px",
                    letterSpacing: "0.04em",
                    lineHeight: 1.4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <div
            style={{
              width: "1px",
              height: "60px",
              background:
                "linear-gradient(to bottom, rgba(200,169,110,0.6), transparent)",
            }}
          />
          <span
            style={{
              fontSize: "0.65rem",
              color: "#4A4540",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              writingMode: "vertical-lr",
            }}
          >
            Scroll
          </span>
        </div>
      </section>

      <div
        aria-hidden="true"
        style={{
          background: "#111111",
          borderTop: "1px solid #1A1A1A",
          borderBottom: "1px solid #1A1A1A",
          padding: "18px 0",
          overflow: "hidden",
        }}
      >
        <div className="marquee-track">
          <div className="marquee-group" aria-hidden="true">
            {marqueeItems.map((item, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.7rem",
                  letterSpacing: "0.25em",
                  color: i % 2 === 0 ? "#3A3530" : "#C8A96E",
                  padding: "0 36px",
                  whiteSpace: "nowrap",
                }}
              >
                {item}
                <span
                  style={{ marginLeft: "36px", color: "#C8A96E", opacity: 0.3 }}
                >
                  ◆
                </span>
              </span>
            ))}
          </div>
          <div className="marquee-group" aria-hidden="true">
            {marqueeItems.map((item, i) => (
              <span
                key={`dup-${i}`}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: "0.7rem",
                  letterSpacing: "0.25em",
                  color: i % 2 === 0 ? "#3A3530" : "#C8A96E",
                  padding: "0 36px",
                  whiteSpace: "nowrap",
                }}
              >
                {item}
                <span
                  style={{ marginLeft: "36px", color: "#C8A96E", opacity: 0.3 }}
                >
                  ◆
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <section
        className="section-xl"
        style={{ background: "#0A0A0A" }}
        aria-labelledby="services-heading"
      >
        <div className="container">
          <div className="services-hdr">
            <div>
              <p className="section-label" style={{ marginBottom: "20px" }}>
                Ce que nous faisons
              </p>
              <h2
                id="services-heading"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "#F0EBE3",
                }}
              >
                Nos domaines
                <br />
                <span style={{ color: "#C8A96E" }}>d&apos;excellence</span>
              </h2>
            </div>
            <div style={{ paddingBottom: "4px" }}>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#6A6560",
                  lineHeight: 1.8,
                  maxWidth: "380px",
                  marginLeft: "auto",
                }}
              >
                De la conception à la réalisation, chaque projet est traité avec
                le même niveau d&apos;exigence.
              </p>
              <Link
                href="/services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "24px",
                  fontSize: "0.8rem",
                  color: "#C8A96E",
                  textDecoration: "none",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  float: "right",
                }}
              >
                Tous les services
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

          <div className="mosaic-grid" role="list">
            {services.map((svc, i) => {
              const spans = mosaicSpans[i];
              return (
                <Link
                  key={i}
                  href={svc.href}
                  role="listitem"
                  className="card-hover mosaic-card"
                  style={{
                    gridColumn: spans.col,
                    height: spans.height,
                    display: "block",
                    position: "relative",
                    textDecoration: "none",
                  }}
                >
                  {/* overflow:hidden clip — никогда не трансформируется */}
                  <div className="mosaic-inner">
                    {/* единственный трансформируемый слой — картинка + оверлей вместе */}
                    <div className="mosaic-zoom-layer">
                      <Image
                        src={svc.img}
                        alt={svc.title}
                        fill
                        loading={i < 2 ? "eager" : "lazy"}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 40vw, 520px"
                        style={{ objectFit: "cover" }}
                        className="mosaic-img"
                      />
                      <div className="mosaic-overlay">
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
                        <div>
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
                            {svc.title}
                          </h3>
                          <p
                            style={{
                              fontSize: "0.78rem",
                              color: "#8A8680",
                              lineHeight: 1.5,
                            }}
                          >
                            {svc.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="section-xl"
        style={{ background: "#111111", borderTop: "1px solid #1A1A1A" }}
        aria-labelledby="reviews-heading"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "GB Projet Concept",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "86",
                bestRating: "5",
              },
              review: reviews.map((r) => ({
                "@type": "Review",
                author: { "@type": "Person", name: r.name },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: r.rating,
                  bestRating: 5,
                },
                reviewBody: r.text,
              })),
            }),
          }}
        />

        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: "56px",
              flexWrap: "wrap",
              gap: "32px",
            }}
          >
            <div>
              <p className="section-label" style={{ marginBottom: "20px" }}>
                Avis clients
              </p>
              <h2
                id="reviews-heading"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "#F0EBE3",
                  marginBottom: "20px",
                }}
              >
                Ce que disent
                <br />
                <span style={{ color: "#C8A96E" }}>nos clients</span>
              </h2>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 14px",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "8px",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    aria-label="Google"
                    role="img"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.8rem",
                      color: "#8A8680",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Google
                  </span>
                </div>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <div style={{ display: "flex", gap: "3px" }}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg
                        key={s}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="#C8A96E"
                        aria-hidden="true"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.3rem",
                      color: "#F0EBE3",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    5
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.82rem",
                      color: "#5A5550",
                    }}
                  >
                    / 5 · Basé sur 18 avis
                  </span>
                </div>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                flexShrink: 0,
              }}
            >
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ whiteSpace: "nowrap" }}
              >
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Voir tous les avis</span>
              </a>
              <a
                href="https://www.instagram.com/gb_projet_concept/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 20px",
                  border: "1px solid rgba(200,169,110,0.3)",
                  background: "transparent",
                  color: "#C8A96E",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  transition: "background 0.2s, color 0.2s",
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
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
                <span>Nous suivre sur Instagram</span>
              </a>
            </div>
          </div>

          <div className="reviews-grid" role="list">
            {reviews.map((review, i) => (
              <article
                key={i}
                role="listitem"
                className="review-card"
                style={{
                  background: "#0A0A0A",
                  border: "1px solid #1E1E1E",
                  padding: "28px 28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  transition: "border-color 0.2s ease",
                }}
              >
                <div
                  style={{ display: "flex", gap: "3px" }}
                  aria-label={`${review.rating} étoiles sur 5`}
                >
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg
                      key={s}
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill={s <= review.rating ? "#C8A96E" : "#2A2A2A"}
                      aria-hidden="true"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#8A8680",
                    lineHeight: 1.75,
                    flex: 1,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderTop: "1px solid #1A1A1A",
                    paddingTop: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "50%",
                        background:
                          "linear-gradient(135deg, #C8A96E 0%, #8A6F3E 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                      aria-hidden="true"
                    >
                      <span
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.8rem",
                          color: "#0A0A0A",
                        }}
                      >
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 600,
                          fontSize: "0.82rem",
                          color: "#F0EBE3",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {review.name}
                      </p>
                      <p
                        style={{
                          fontSize: "0.7rem",
                          color: "#3A3530",
                          marginTop: "2px",
                        }}
                      >
                        {review.date}
                      </p>
                    </div>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    aria-label="Avis Google"
                    role="img"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PartnersSection />

      <section
        className="section-xl"
        style={{ background: "#0D0D0D" }}
        aria-labelledby="projects-heading"
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "48px",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div>
              <p className="section-label" style={{ marginBottom: "16px" }}>
                Réalisations récentes
              </p>
              <h2
                id="projects-heading"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                  letterSpacing: "-0.03em",
                  color: "#F0EBE3",
                }}
              >
                Projets phares
              </h2>
            </div>
            <Link href="/services" className="btn-outline">
              <span>Voir tous les projets</span>
            </Link>
          </div>

          <div className="projects-grid" role="list">
            {projects.map((p, i) => (
              <article
                key={i}
                role="listitem"
                className="card-hover project-card"
              >
                {/* clip-контейнер — только обрезает, не трансформируется */}
                <div className="project-img-wrap">
                  {/* единственный трансформируемый слой */}
                  <div className="project-zoom-layer">
                    <Image
                      src={p.img}
                      alt={`${p.title} — ${p.tag}`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                      style={{ objectFit: "cover" }}
                      className="project-img"
                    />
                    <div className="project-gradient" />
                    <div className="project-tag">
                      <span
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: "0.62rem",
                          color: "#C8A96E",
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                        }}
                      >
                        {p.tag}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  style={{ padding: "20px 24px 24px", background: "#111111" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        color: "#F0EBE3",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {p.title}
                    </h3>
                    <time
                      dateTime={p.year}
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.7rem",
                        color: "#4A4540",
                      }}
                    >
                      {p.year}
                    </time>
                  </div>
                  <div
                    style={{
                      width: "40px",
                      height: "1px",
                      background: "#C8A96E",
                      marginTop: "14px",
                      opacity: 0.6,
                    }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-xl"
        style={{ background: "#0A0A0A" }}
        aria-labelledby="why-heading"
      >
        <div className="container">
          <div style={{ maxWidth: "800px", marginBottom: "56px" }}>
            <p className="section-label" style={{ marginBottom: "20px" }}>
              Pourquoi nous choisir ?
            </p>
            <h2
              id="why-heading"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#F0EBE3",
                marginBottom: "24px",
              }}
            >
              Votre projet entre{" "}
              <span style={{ color: "#C8A96E" }}>de bonnes mains</span>
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#5A5550",
                lineHeight: 1.85,
                maxWidth: "640px",
              }}
            >
              Chez GB Projet Concept, nous vous accompagnons dans tous vos
              travaux d&apos;aménagement extérieur avec sérieux, transparence et
              exigence de qualité. Notre objectif est simple : valoriser votre
              espace extérieur et vous garantir un résultat durable et soigné.
            </p>
          </div>

          <div
            className="why-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "2px",
            }}
          >
            {[
              {
                title: "Forte expérience",
                desc: "Grâce à notre expérience dans les travaux d'aménagement extérieur et de maçonnerie, nous réalisons chaque projet avec méthode et savoir-faire.",
              },
              {
                title: "Assurance décennale et responsabilité civile",
                desc: "Tous nos travaux sont couverts par une assurance décennale et responsabilité civile professionnelle, pour vous garantir une totale tranquillité.",
              },
              {
                title: "Devis transparent",
                desc: "Nous proposons des devis clairs et détaillés, sans frais cachés, afin que vous sachiez exactement ce qui est prévu dans votre projet.",
              },
              {
                title: "Respect de l'environnement et du chantier",
                desc: "Nous veillons à protéger votre terrain et votre habitation pendant les travaux, à travailler proprement et à nettoyer le chantier à la fin.",
              },
              {
                title: "La satisfaction client avant tout",
                desc: "La réputation de notre entreprise repose sur la satisfaction de nos clients. Chaque projet est réalisé avec sérieux, respect et engagement.",
              },
              {
                title: "Matériaux de qualité",
                desc: "Nous sélectionnons des matériaux fiables et durables afin de garantir la solidité, l'esthétique et la longévité de vos aménagements extérieurs.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#111111",
                  padding: "36px 32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <span
                    style={{
                      color: "#C8A96E",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "1.1rem",
                      lineHeight: 1,
                    }}
                    aria-hidden="true"
                  >
                    ✔
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      color: "#F0EBE3",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#5A5550",
                    lineHeight: 1.75,
                    paddingLeft: "26px",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Zones d'intervention ──────────────────────────────────── */}
      <section
        className="section-xl"
        style={{ background: "#111111", borderTop: "1px solid #1A1A1A" }}
        aria-labelledby="zones-heading"
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
            {/* Left — text block */}
            <div>
              <p className="section-label" style={{ marginBottom: "20px" }}>
                Zones d&apos;intervention
              </p>
              <h2
                id="zones-heading"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: "#F0EBE3",
                  marginBottom: "24px",
                }}
              >
                Nous intervenons à{" "}
                <span style={{ color: "#C8A96E" }}>Caen</span>
                <br />
                et dans les communes voisines
              </h2>
              <p
                style={{
                  fontSize: "0.92rem",
                  color: "#5A5550",
                  lineHeight: 1.85,
                  maxWidth: "460px",
                  marginBottom: "32px",
                }}
              >
                Basée à Caen, notre équipe se déplace directement sur votre
                chantier dans tout le secteur du Calvados. Terrasses,
                clôtures, allées, maçonnerie et terrassement — nous réalisons
                vos projets extérieurs avec le même niveau d&apos;exigence,
                quelle que soit la commune.
              </p>
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
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* Right — city links grid */}
            <div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "2px",
                }}
                aria-label="Villes desservies"
              >
                {LOCAL_CITIES.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/amenagement-exterieur/${city.slug}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "20px 24px",
                        background: "#0A0A0A",
                        border: "1px solid #1A1A1A",
                        textDecoration: "none",
                        transition: "border-color 0.2s, background 0.2s",
                      }}
                      className="zone-card"
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#C8A96E",
                          flexShrink: 0,
                        }}
                        aria-hidden="true"
                      />
                      <span
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 500,
                          fontSize: "0.88rem",
                          color: "#8A8680",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {city.name}
                      </span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C8A96E"
                        strokeWidth="2"
                        style={{ marginLeft: "auto", opacity: 0.5 }}
                        aria-hidden="true"
                      >
                        <path
                          d="M5 12h14M12 5l7 7-7 7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#3A3530",
                  marginTop: "16px",
                  letterSpacing: "0.04em",
                }}
              >
                Et dans toutes les communes du Calvados sur demande.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#0D0D0D",
          padding: "100px 0",
          borderTop: "1px solid #1A1A1A",
        }}
        aria-label="Appel à l'action"
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(200,169,110,0.04) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "24px",
            left: "24px",
            right: "24px",
            bottom: "24px",
            border: "1px solid rgba(200,169,110,0.06)",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "800px",
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
          }}
        >
          <p
            className="section-label"
            style={{ justifyContent: "center", marginBottom: "24px" }}
          >
            Prêt à commencer ?
          </p>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.04em",
              color: "#F0EBE3",
              marginBottom: "24px",
            }}
          >
            Votre projet mérite
            <br />
            <span style={{ color: "#C8A96E" }}>les meilleurs artisans</span>
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#6A6560",
              lineHeight: 1.8,
              maxWidth: "440px",
              margin: "0 auto 40px",
            }}
          >
            Consultation gratuite et devis détaillé sous 48h.
          </p>
          <div className="cta-row-center">
            <Link href="/contact" className="btn-gold">
              <span>Obtenir un devis gratuit</span>
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>06 20 78 31 31</span>
            </a>
          </div>
        </div>
      </section>

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
