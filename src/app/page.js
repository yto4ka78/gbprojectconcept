// ── Server Component (SSG) — no "use client" needed ──────────────────────────
import Link from "next/link";
import Image from "next/image";
import { SITE_URL, SITE_NAME, OG_IMAGES } from "@/lib/seo";

// ── Per-page metadata ────────────────────────────────────────────────────────
export const metadata = {
  title: `${SITE_NAME} — Aménagement Extérieur & Travaux Paysagers Île-de-France`,
  description:
    "Clôtures, allées, terrasses, maçonnerie paysagère en Île-de-France. Devis gratuit, garantie 10 ans. 340+ chantiers réalisés depuis 2012.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title:       `${SITE_NAME} — Aménagement Extérieur & Travaux Paysagers`,
    description: "Clôtures, allées, terrasses, maçonnerie paysagère en Île-de-France. Devis gratuit, garantie 10 ans.",
    url:         SITE_URL,
    images:      OG_IMAGES,
  },
};

// ── Page JSON-LD (WebPage + BreadcrumbList) ──────────────────────────────────
const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type":    "WebPage",
      "@id":      `${SITE_URL}/#webpage`,
      url:        SITE_URL,
      name:       `${SITE_NAME} — Aménagement Extérieur & Travaux Paysagers`,
      isPartOf:   { "@id": `${SITE_URL}/#website` },
      about:      { "@id": `${SITE_URL}/#organization` },
      inLanguage: "fr-FR",
    },
    {
      "@type": "BreadcrumbList",
      "@id":   `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
      ],
    },
  ],
};

// ── Data ─────────────────────────────────────────────────────────────────────
const services = [
  { num: "01", title: "Travaux extérieurs",   desc: "Maçonnerie paysagère complète — murets, soutènements, escaliers en pierre.", img: "/gbprojectconcept_service1.webp", href: "/services#travaux" },
  { num: "02", title: "Allées & Chemins",      desc: "Revêtements béton, pavés ou gravier pour des accès élégants et durables.",   img: "/gbprojectconcept_service2.webp", href: "/services#allees" },
  { num: "03", title: "Clôtures & Portails",   desc: "Systèmes de clôture sur-mesure — acier, aluminium, bois ou mixte.",          img: "/gbprojectconcept_service3.webp", href: "/services#clotures" },
  { num: "04", title: "Terrasses",             desc: "Terrasses en bois composite, pierre naturelle ou béton architectonique.",     img: "/gbprojectconcept_service4.webp", href: "/services#terrasses" },
  { num: "05", title: "Aménagement paysager",  desc: "Conception et réalisation complète de jardins contemporains.",               img: "/gbprojectconcept_service5.webp", href: "/services#paysager" },
];

const projects = [
  { title: "Villa Moderne — Yvelines",        tag: "Terrasse & Allée",      img: "/gbprojectconcept_service6.webp", year: "2024" },
  { title: "Résidence Belvédère",             tag: "Clôture & Portail",     img: "/gbprojectconcept_service7.webp", year: "2023" },
  { title: "Jardin contemporain — Versailles", tag: "Aménagement complet",  img: "/gbprojectconcept_service8.webp", year: "2023" },
];

const stats = [
  { val: "12+",  label: "Années d'expérience" },
  { val: "340+", label: "Chantiers réalisés" },
  { val: "98%",  label: "Clients satisfaits" },
  { val: "10",   label: "Ans de garantie" },
];

const process = [
  { n: "01", title: "Consultation",   desc: "Visite sur site, échange sur votre projet et vos contraintes." },
  { n: "02", title: "Conception",     desc: "Plans et proposition visuelle adaptés à votre terrain." },
  { n: "03", title: "Devis détaillé", desc: "Chiffrage transparent, sans surprise, avec planning." },
  { n: "04", title: "Réalisation",    desc: "Exécution soignée par nos équipes, dans les délais convenus." },
  { n: "05", title: "Réception",      desc: "Contrôle qualité final et remise Garantie 10 ANS." },
];

const marqueeItems = [
  "CLÔTURES","TERRASSES","ALLÉES","MAÇONNERIE","PAYSAGISME","PORTAILS","DALLAGE","MURETS","ESPACES VERTS",
  "CLÔTURES","TERRASSES","ALLÉES","MAÇONNERIE","PAYSAGISME","PORTAILS","DALLAGE","MURETS","ESPACES VERTS",
];

const trustItems = [
  { icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z", title: "Qualité certifiée",  desc: "Artisans qualifiés RGE et assurance décennale" },
  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",                                                                                                                                                                                                                                                                                                                                                                                                                                            title: "Délais respectés",  desc: "Planning précis, livraison dans les temps convenus" },
  { icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",                                                                                                                                                                                                                                                                                                                                                                                              title: "Devis transparent", desc: "Chiffrage détaillé sans frais cachés" },
  { icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",                                                                                                                                                                                                                                                                                                                   title: "Support continu",   desc: "Suivi post-chantier et service après-vente réactif" },
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
          background: "#0A0A0A",
        }}
      >
        {/* Hero image — next/image with priority for LCP */}
        <Image
          src="/heroGB.webp"
          alt="Aménagement extérieur projet concept — allée en pierre naturelle"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="hero-bg-img"
          style={{ objectFit: "cover", objectPosition: "0% 100%", opacity: 0.92, filter: "brightness(0.78) contrast(1.06)" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.35) 60%, rgba(10,10,10,0.55) 100%)",
          }}
        />
        <div className="scroll-indicator" style={{ position: "absolute", left: "10%", top: "15%", width: "1px", height: "60%", background: "linear-gradient(to bottom, transparent, rgba(200,169,110,0.4), transparent)" }} />

        <div className="hero-wrap" style={{ paddingBottom: 0 }}>
          <p className="section-label" style={{ marginBottom: "28px" }}>
            Aménagement extérieur & Maçonnerie paysagère
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
            Façonnez<br />
            <span style={{ color: "#C8A96E" }}>l&apos;extérieur</span><br />
            qui dure.
          </h1>

          <p style={{ fontSize: "1rem", color: "#8A8680", maxWidth: "520px", lineHeight: 1.7, marginBottom: "36px" }}>
            Vous avez un projet d&apos;aménagement extérieur ? GB Projet Concept met en valeur votre maison, améliore votre extérieur, et s&apos;adapte à vos besoins.
          </p>

          <div className="cta-row">
            <Link href="/contact" className="btn-gold">
              <span>Demander un devis</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/services" className="btn-outline">
              <span>Découvrir nos services</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="hero-stats-grid" role="list" aria-label="Chiffres clés">
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
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#C8A96E", letterSpacing: "-0.03em" }}>
                  {s.val}
                </div>
                <div style={{ fontSize: "0.68rem", color: "#4A4540", marginTop: "4px", letterSpacing: "0.04em", lineHeight: 1.4 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <div style={{ width: "1px", height: "60px", background: "linear-gradient(to bottom, rgba(200,169,110,0.6), transparent)" }} />
          <span style={{ fontSize: "0.65rem", color: "#4A4540", letterSpacing: "0.2em", textTransform: "uppercase", writingMode: "vertical-lr" }}>
            Scroll
          </span>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div
        aria-hidden="true"
        style={{ background: "#111111", borderTop: "1px solid #1A1A1A", borderBottom: "1px solid #1A1A1A", padding: "18px 0", overflow: "hidden" }}
      >
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "0.7rem", letterSpacing: "0.25em", color: i % 2 === 0 ? "#3A3530" : "#C8A96E", padding: "0 36px", whiteSpace: "nowrap" }}
            >
              {item}
              {i % 2 === 0 && <span style={{ marginLeft: "36px", color: "#C8A96E", opacity: 0.3 }}>◆</span>}
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="section-xl" style={{ background: "#0A0A0A" }} aria-labelledby="services-heading">
        <div className="container">
          <div className="services-hdr">
            <div>
              <p className="section-label" style={{ marginBottom: "20px" }}>Ce que nous faisons</p>
              <h2
                id="services-heading"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "#F0EBE3" }}
              >
                Nos domaines<br />
                <span style={{ color: "#C8A96E" }}>d&apos;excellence</span>
              </h2>
            </div>
            <div style={{ paddingBottom: "4px" }}>
              <p style={{ fontSize: "0.9rem", color: "#6A6560", lineHeight: 1.8, maxWidth: "380px", marginLeft: "auto" }}>
                De la conception à la réalisation, chaque projet est traité avec le même niveau d&apos;exigence.
              </p>
              <Link
                href="/services"
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "24px", fontSize: "0.8rem", color: "#C8A96E", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, float: "right" }}
              >
                Tous les services
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
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
                  style={{ gridColumn: spans.col, height: spans.height, display: "block", position: "relative", textDecoration: "none", background: "#111111", overflow: "hidden" }}
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
                    style={{ position: "absolute", inset: 0, padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", zIndex: 2, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" }}
                  >
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.65rem", fontWeight: 700, color: "rgba(200,169,110,0.5)", letterSpacing: "0.2em" }}>{svc.num}</span>
                    <div>
                      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "1.1rem", color: "#F0EBE3", marginBottom: "6px", letterSpacing: "-0.02em" }}>{svc.title}</h3>
                      <p style={{ fontSize: "0.78rem", color: "#8A8680", lineHeight: 1.5 }}>{svc.desc}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="section-xl" style={{ background: "#0D0D0D" }} aria-labelledby="projects-heading">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "48px", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <p className="section-label" style={{ marginBottom: "16px" }}>Réalisations récentes</p>
              <h2 id="projects-heading" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.03em", color: "#F0EBE3" }}>
                Projets phares
              </h2>
            </div>
            <Link href="/services" className="btn-outline"><span>Voir tous les projets</span></Link>
          </div>

          <div className="projects-grid" role="list">
            {projects.map((p, i) => (
              <article key={i} role="listitem" className="card-hover" style={{ position: "relative", overflow: "hidden", background: "#111111" }}>
                <div style={{ height: "300px", position: "relative", overflow: "hidden" }}>
                  <Image
                    src={p.img}
                    alt={`${p.title} — ${p.tag}`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    style={{ objectFit: "cover", opacity: 1 }}
                    className="project-img"
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
                  <div style={{ position: "absolute", top: "16px", left: "16px", padding: "4px 10px", border: "1px solid rgba(200,169,110,0.4)", background: "rgba(0,0,0,0.5)" }}>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.62rem", color: "#C8A96E", letterSpacing: "0.12em", textTransform: "uppercase" }}>{p.tag}</span>
                  </div>
                </div>
                <div style={{ padding: "20px 24px 24px", background: "#111111" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#F0EBE3", letterSpacing: "-0.01em" }}>{p.title}</h3>
                    <time dateTime={p.year} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", color: "#4A4540" }}>{p.year}</time>
                  </div>
                  <div style={{ width: "40px", height: "1px", background: "#C8A96E", marginTop: "14px", opacity: 0.6 }} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST INDICATORS ── */}
      <section style={{ background: "#1A1A1A", borderTop: "1px solid #1A1A1A", borderBottom: "1px solid #1A1A1A", padding: "64px 0" }} aria-label="Nos engagements qualité">
        <div className="container">
          <div className="trust-grid" role="list">
            {trustItems.map((item, i) => (
              <div key={i} role="listitem" style={{ background: "#0A0A0A", padding: "40px 32px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ width: "44px", height: "44px", border: "1px solid rgba(200,169,110,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={item.icon} />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#F0EBE3" }}>{item.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "#5A5550", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section-xl" style={{ background: "#0A0A0A" }} aria-labelledby="process-heading">
        <div className="container">
          <div className="process-layout">
            <div className="process-sticky">
              <p className="section-label" style={{ marginBottom: "20px" }}>Comment nous travaillons</p>
              <h2 id="process-heading" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 2.8rem)", lineHeight: 1.1, letterSpacing: "-0.03em", color: "#F0EBE3", marginBottom: "24px" }}>
                Un processus<br /><span style={{ color: "#C8A96E" }}>éprouvé</span>
              </h2>
              <p style={{ fontSize: "0.88rem", color: "#5A5550", lineHeight: 1.8, marginBottom: "36px" }}>
                Chaque projet suit un processus rigoureux pour garantir les meilleurs résultats.
              </p>
              <Link href="/contact" className="btn-gold"><span>Démarrer un projet</span></Link>
            </div>

            <ol style={{ display: "flex", flexDirection: "column", listStyle: "none", padding: 0, margin: 0 }}>
              {process.map((step, i) => (
                <li
                  key={i}
                  style={{ display: "grid", gridTemplateColumns: "64px 1fr", gap: "28px", paddingBottom: "40px", borderBottom: i < process.length - 1 ? "1px solid #141414" : "none", paddingTop: i > 0 ? "40px" : "0" }}
                >
                  <div aria-hidden="true">
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "2.2rem", color: "#1A1A1A", letterSpacing: "-0.05em", lineHeight: 1 }}>{step.n}</span>
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "1.1rem", color: "#F0EBE3", marginBottom: "8px", letterSpacing: "-0.02em" }}>{step.title}</h3>
                    <p style={{ fontSize: "0.88rem", color: "#5A5550", lineHeight: 1.7 }}>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ position: "relative", overflow: "hidden", background: "#0D0D0D", padding: "100px 0", borderTop: "1px solid #1A1A1A" }} aria-label="Appel à l'action">
        <div className="hero-bg-photo hero-bg-photo-cta" style={{ position: "absolute", inset: 0, backgroundImage: "url('/heroGB.webp')", backgroundSize: "cover", opacity: 0.2 }} aria-hidden="true" />
        <div style={{ position: "absolute", top: "24px", left: "24px", right: "24px", bottom: "24px", border: "1px solid rgba(200,169,110,0.06)", pointerEvents: "none" }} aria-hidden="true" />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "800px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center", marginBottom: "24px" }}>Prêt à commencer ?</p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.0, letterSpacing: "-0.04em", color: "#F0EBE3", marginBottom: "24px" }}>
            Votre projet mérite<br /><span style={{ color: "#C8A96E" }}>les meilleurs artisans</span>
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#6A6560", lineHeight: 1.8, maxWidth: "440px", margin: "0 auto 40px" }}>
            Consultation gratuite et devis détaillé sous 48h.
          </p>
          <div className="cta-row-center">
            <Link href="/contact" className="btn-gold">
              <span>Obtenir un devis gratuit</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a href="tel:+33620783131" className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>06 20 78 31 31</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Mobile sticky CTA bar ── */}
      <div className="mobile-cta-bar" aria-label="Actions rapides">
        <Link href="/contact" className="btn-gold"><span>Devis gratuit</span></Link>
        <a href="tel:+33620783131" className="btn-call" aria-label="Appeler projet concept">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </>
  );
}
