// ── Server Component (SSG) — no "use client" needed ──────────────────────────
import Link from "next/link";
import Image from "next/image";
import { SITE_URL, SITE_NAME, OG_IMAGES } from "@/lib/seo";
import PartnersSection from "@/components/PartnersSection";

// ── Per-page metadata ────────────────────────────────────────────────────────
export const metadata = {
  title: `${SITE_NAME} — Aménagement Extérieur & Travaux Paysagers Île-de-France`,
  description:
    "Clôtures, allées, terrasses, maçonnerie paysagère en Île-de-France. Devis gratuit, garantie 10 ans. 340+ chantiers réalisés depuis 2012.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${SITE_NAME} — Aménagement Extérieur & Travaux Paysagers`,
    description:
      "Clôtures, allées, terrasses, maçonnerie paysagère en Île-de-France. Devis gratuit, garantie 10 ans.",
    url: SITE_URL,
    images: OG_IMAGES,
  },
};

// ── Page JSON-LD (WebPage + BreadcrumbList) ──────────────────────────────────
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

// ── Google Reviews data ───────────────────────────────────────────────────────
const GOOGLE_REVIEWS_URL = "https://share.google/48MGU4p0cDixVoBSg";

const reviews = [
  {
    name: "Mickael Legoupil",
    rating: 5,
    date: "Il y a 2 semaines",
    text: "J'ai fait appel à Gaisa et son équipe par deux fois et à chaque fois un travail d'une grande qualité.D'abord pour ma terrasse et le pourtour de ma maison en lui demandant un béton lissé, ce qui a été réalisé parfaitement.Plus récemment, Gaisa et son équipe ont réalisé la préparation et le pavage de l'entrée de ma maison avec toujours autant de sérieux et minutie. C'est tellement agréable d'avoir à faire à des professionnels de confiance, qui travaillent vraiment pour la satisfaction du client",
  },
  {
    name: "Cedric Zephcontrol",
    rating: 5,
    date: "Il y a 1 mois",
    text: "Nous avons fait appel à Gaisa sur recommandation d'un proche et il a réalisé plusieurs travaux chez nous : terrasse extérieure, pose du carrelage intérieur et peinture. Délais respectés et chantiers toujours parfaitement nettoyés à la fin. Nous sommes super contents du résultat et n’hésiterons pas à refaire appel à lui. Nous recommandons Gaisa les yeux fermés, merci encore pour ton professionnalisme !",
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
    name: "Sabrina",
    rating: 5,
    date: "Il y a 4 mois",
    text: "Gaisa et son équipe ont réalisé des travaux de rénovation dans notre maison (peinture et pose de parquet). Nous sommes très satisfaits du résultat et nous les recommandons les yeux fermés. Le travail est soigné, de qualité et pour un prix correct. La satisfaction du client est leur objectif principal.",
  },
  {
    name: "HELENE BEUVE",
    rating: 5,
    date: "Il y a 5 mois",
    text: "Je recommande Gaisa à 100%, j’ai fait appel à lui pour la pose d’une clôture rigide. Le résultat est impeccable, travail soigneux, rapide. Gaisa a su s’adapter et trouver une solution. Il est en plus très agréable et ponctuel. Je ferai appel à lui sans aucun doute pour mes prochains travaux.",
  },
];

// ── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    num: "01",
    title: "Terrasses",
    desc: "Terrasses en bois composite, pierre naturelle ou béton architectonique.",
    img: "/gbprojectconcept_service14.webp",
    href: "/services#terrasses",
  },
  {
    num: "02",
    title: "Allée & Cour & Parking",
    desc: "Pavés, enrobé à chaud ou gravier pour des accès élégants et durables.",
    img: "/gbprojectconcept_service15.webp",
    href: "/services#allees",
  },
  {
    num: "03",
    title: "Clôtures & Portails",
    desc: "Systèmes de clôture sur-mesure — acier, aluminium, bois ou composite.",
    img: "/gbprojectconcept_service16.webp",
    href: "/services#clotures",
  },
  {
    num: "04",
    title: "Travaux de maçonnerie",
    desc: "Ouvertures, dallage béton armé, murs en parpaings, façades et finitions.",
    img: "/gbprojectconcept_service17.webp",
    href: "/services#travaux",
  },
  {
    num: "05",
    title: "Terrassement",
    desc: "Déblai, remblai, nivellement et drainage pour préparer votre terrain.",
    img: "/gbprojectconcept_service18.webp",
    href: "/services#terrassement",
  },
];

const projects = [
  {
    title: "Villa Moderne — Yvelines",
    tag: "Cour & parking",
    img: "/gbprojectconcept_service6.webp",
    year: "2024",
  },
  {
    title: "Résidence Belvédère",
    tag: "Clôture & Portail",
    img: "/gbprojectconcept_service13.webp",
    year: "2023",
  },
  {
    title: "Jardin contemporain — Versailles",
    tag: "Carrelage",
    img: "/gbprojectconcept_service8.webp",
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

// ── Mosaic column config ──────────────────────────────────────────────────────
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

      {/* ── HERO ── */}
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
        {/* Hero image — в обёртке, чтобы не было чёрных полос от scale */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "70%",
            top: "45%",
            transform: "translate(-50%, -50%)",
            width: "min(90vw, 90vh)",
            height: "min(90vw, 90vh)",
            zIndex: 0,
            overflow: "hidden",
          }}
          className="hero-bg-img-wrap"
        >
          <Image
            src="/photo_logo_backgroundblack.webp"
            alt="Aménagement extérieur projet concept — allée en pierre naturelle"
            fill
            priority
            quality={85}
            sizes="85vw"
            className="hero-bg-img"
            style={{
              objectFit: "contain",
              objectPosition: "center center",
              opacity: 0.92,
              filter: "brightness(0.78) contrast(1.06)",
            }}
          />
        </div>
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
          <p className="section-label" style={{ marginBottom: "28px" }}>
            Aménagement extérieur & Maçonnerie
          </p>

          <h1
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

          <div className="cta-row">
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

          {/* Stats */}
          <div
            className="hero-stats-grid"
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

      {/* ── MARQUEE ── */}
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

      {/* ── SERVICES ── */}
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

          {/* Mosaic grid — uses next/image fill for all cards */}
          <div className="mosaic-grid" role="list">
            {services.map((svc, i) => {
              const spans = mosaicSpans[i];
              return (
                <Link
                  key={i}
                  href={svc.href}
                  role="listitem"
                  className="img-overlay card-hover"
                  style={{
                    gridColumn: spans.col,
                    height: spans.height,
                    display: "block",
                    position: "relative",
                    textDecoration: "none",
                    background: "#111111",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={svc.img}
                    alt={svc.title}
                    fill
                    loading={i < 2 ? "eager" : "lazy"}
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    className="mosaic-img"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      padding: "24px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      zIndex: 2,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
                    }}
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
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS ── */}
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
          {/* Header */}
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

              {/* Rating summary */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                {/* Google icon badge */}
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
                  {/* Google G icon */}
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
                  {/* Stars */}
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

            {/* CTA button */}
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ whiteSpace: "nowrap", flexShrink: 0 }}
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
          </div>

          {/* Review cards grid */}
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
                {/* Stars */}
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

                {/* Text */}
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

                {/* Author + date */}
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
                  {/* Google G small badge */}
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

      {/* ── PARTNERS & BRANDS ── */}
      <PartnersSection />

      {/* ── PROJECTS ── */}
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
                className="card-hover"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  background: "#111111",
                }}
              >
                <div
                  style={{
                    height: "300px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={p.img}
                    alt={`${p.title} — ${p.tag}`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    style={{ objectFit: "cover", opacity: 1 }}
                    className="project-img"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      left: "16px",
                      padding: "4px 10px",
                      border: "1px solid rgba(200,169,110,0.4)",
                      background: "rgba(0,0,0,0.5)",
                    }}
                  >
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

      {/* ── PROCESS ── */}
      <section
        className="section-xl"
        style={{ background: "#0A0A0A" }}
        aria-labelledby="process-heading"
      >
        <div className="container">
          <div className="process-layout">
            <div className="process-sticky">
              <p className="section-label" style={{ marginBottom: "20px" }}>
                Comment nous travaillons
              </p>
              <h2
                id="process-heading"
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
                Un processus
                <br />
                <span style={{ color: "#C8A96E" }}>éprouvé</span>
              </h2>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "#5A5550",
                  lineHeight: 1.8,
                  marginBottom: "36px",
                }}
              >
                Chaque projet suit un processus rigoureux pour garantir les
                meilleurs résultats.
              </p>
              <Link href="/contact" className="btn-gold">
                <span>Démarrer un projet</span>
              </Link>
            </div>

            <ol
              style={{
                display: "flex",
                flexDirection: "column",
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              {process.map((step, i) => (
                <li
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "64px 1fr",
                    gap: "28px",
                    paddingBottom: "40px",
                    borderBottom:
                      i < process.length - 1 ? "1px solid #141414" : "none",
                    paddingTop: i > 0 ? "40px" : "0",
                  }}
                >
                  <div aria-hidden="true">
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "2.2rem",
                        color: "#1A1A1A",
                        letterSpacing: "-0.05em",
                        lineHeight: 1,
                      }}
                    >
                      {step.n}
                    </span>
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        color: "#F0EBE3",
                        marginBottom: "8px",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "#5A5550",
                        lineHeight: 1.7,
                      }}
                    >
                      {step.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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

      {/* ── Mobile sticky CTA bar ── */}
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
