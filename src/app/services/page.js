"use client";

import Link from "next/link";

const services = [
  {
    id: "travaux",
    num: "01",
    title: "Travaux extérieurs",
    subtitle: "Maçonnerie paysagère",
    desc: "Nos équipes réalisent l'ensemble des travaux de gros œuvre paysager : murets en pierre, soutènements, escaliers extérieurs, fondations et drainage. Chaque ouvrage est conçu pour résister au temps tout en s'intégrant harmonieusement à votre environnement.",
    features: ["Murets & soutènements", "Escaliers pierre & béton", "Drainage & fondations", "Pavage & dallage", "Bordures & caniveaux"],
    img: "/gbprojectconcept_service1.webp",
    highlight: "Matériaux premium",
  },
  {
    id: "allees",
    num: "02",
    title: "Allées & Chemins",
    subtitle: "Revêtements extérieurs",
    desc: "De l'allée d'accès principale au chemin de jardin, nous créons des circulations extérieures esthétiques et durables. Béton désactivé, pavés autobloquants, gravier stabilisé ou pierre naturelle — chaque solution est adaptée à votre usage et votre style.",
    features: ["Béton désactivé & imprimé", "Pavés autobloquants", "Gravier stabilisé", "Pierre naturelle", "Revêtements résine"],
    img: "/gbprojectconcept_service2.webp",
    highlight: "20+ matériaux disponibles",
  },
  {
    id: "clotures",
    num: "03",
    title: "Clôtures & Portails",
    subtitle: "Sécurisation & délimitation",
    desc: "Nous concevons et installons des systèmes de clôture sur-mesure qui allient sécurité, esthétique et durabilité. Panneaux rigides, lisses aluminium, bois composite, grillage galvanisé — nous disposons de toute une gamme adaptée à chaque projet et budget.",
    features: ["Panneaux rigides acier", "Clôtures aluminium laqué", "Portails motorisés", "Clôtures bois composite", "Interphonie & accès"],
    img: "/gbprojectconcept_service3.webp",
    highlight: "Installation sous 2 semaines",
  },
  {
    id: "terrasses",
    num: "04",
    title: "Terrasses",
    subtitle: "Espaces de vie extérieurs",
    desc: "Votre terrasse est le prolongement naturel de votre intérieur. Nous la concevons comme un véritable espace de vie : terrasses sur-élevées, dalles posées sur plots, terrasses en bois composite faiblement entretenu ou en pierre naturelle de caractère.",
    features: ["Terrasses bois composite", "Dalles sur plots réglables", "Pierre naturelle", "Béton architectonique", "Terrasses sur-élevées"],
    img: "/gbprojectconcept_service4.webp",
    highlight: "Garantie 10 ANS",
  },
  {
    id: "paysager",
    num: "05",
    title: "Aménagement paysager",
    subtitle: "Conception de jardins",
    desc: "Au-delà de la maçonnerie, nous créons des jardins complets. Conception végétale, systèmes d'arrosage automatique, éclairage paysager, massifs de plantation et pelouses — tout est pensé pour créer un écosystème cohérent et beau en toutes saisons.",
    features: ["Conception jardin 3D", "Arrosage automatique", "Éclairage paysager LED", "Massifs & plantations", "Gazon naturel & synthétique"],
    img: "/gbprojectconcept_service5.webp",
    highlight: "Suivi post-aménagement",
  },
];

export default function Services() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          background: "#0A0A0A",
          paddingTop: "160px",
          paddingBottom: "80px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/heroGB.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #0A0A0A 0%, transparent 50%, #0A0A0A 100%)" }} />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <p className="section-label" style={{ marginBottom: "24px" }}>Ce que nous faisons</p>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 5.5vw, 6rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "#F0EBE3",
              maxWidth: "700px",
              marginBottom: "32px",
            }}
          >
            Nos <span style={{ color: "#C8A96E" }}>services</span><br />
            d&apos;excellence
          </h1>
          <p style={{ fontSize: "1rem", color: "#6A6560", maxWidth: "520px", lineHeight: 1.8 }}>
            Cinq domaines d&apos;expertise, une seule promesse : des réalisations durables, esthétiques et parfaitement exécutées.
          </p>

          {/* Quick-jump chips — horizontal scroll on mobile */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              marginTop: "40px",
              overflowX: "auto",
              paddingBottom: "4px",
            }}
          >
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
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
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap",
                  minHeight: "44px",
                  display: "inline-flex",
                  alignItems: "center",
                }}
                onMouseEnter={e => { e.target.style.borderColor = "rgba(200,169,110,0.4)"; e.target.style.color = "#C8A96E"; }}
                onMouseLeave={e => { e.target.style.borderColor = "#242424"; e.target.style.color = "#8A8680"; }}
              >
                {s.num} {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ── */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          style={{
            background: i % 2 === 0 ? "#0A0A0A" : "#0D0D0D",
            padding: "80px 0",
            borderTop: "1px solid #141414",
          }}
        >
          <div className="container">
            <div
              className={`svc-row ${i % 2 === 1 ? "svc-row-rtl" : ""}`}
            >
              {/* Image */}
              <div className="svc-img-wrap" style={{ direction: "ltr" }}>
                <img
                  src={svc.img}
                  alt={svc.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.65,
                    transition: "transform 0.6s ease",
                    filter: "saturate(0.8)",
                  }}
                  onMouseEnter={e => { e.target.style.transform = "scale(1.04)"; e.target.style.opacity = "0.75"; }}
                  onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.opacity = "0.65"; }}
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
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", color: "#C8A96E", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    ◆ {svc.highlight}
                  </span>
                </div>
              </div>

              {/* Text */}
              <div style={{ direction: "ltr" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "2.8rem",
                      fontWeight: 700,
                      color: "#1A1A1A",
                      letterSpacing: "-0.05em",
                      lineHeight: 1,
                    }}
                  >
                    {svc.num}
                  </span>
                  <div style={{ width: "1px", height: "40px", background: "rgba(200,169,110,0.2)" }} />
                  <p className="section-label">{svc.subtitle}</p>
                </div>
                <h2
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
                <p style={{ fontSize: "0.9rem", color: "#6A6560", lineHeight: 1.8, marginBottom: "32px" }}>
                  {svc.desc}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
                  {svc.features.map((f, fi) => (
                    <div key={fi} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ width: "20px", height: "1px", background: "#C8A96E", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.85rem", color: "#8A8680" }}>{f}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="btn-gold">
                  <span>Demander un devis</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section
        style={{
          background: "#111111",
          borderTop: "1px solid #1A1A1A",
          padding: "80px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "20px", left: "20px", right: "20px", bottom: "20px", border: "1px solid rgba(200,169,110,0.05)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 2 }}>
          <p className="section-label" style={{ justifyContent: "center", marginBottom: "20px" }}>Vous avez un projet ?</p>
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
            Parlons de votre<br />
            <span style={{ color: "#C8A96E" }}>projet extérieur</span>
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#5A5550", lineHeight: 1.8, marginBottom: "36px" }}>
            Consultation gratuite, devis détaillé sous 48h. Nos experts se déplacent sur site.
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

      {/* ── Mobile sticky CTA bar ── */}
      <div className="mobile-cta-bar">
        <Link href="/contact" className="btn-gold">
          <span>Devis gratuit</span>
        </Link>
        <a href="tel:+33620783131" className="btn-call" aria-label="Appeler">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
      </div>
    </>
  );
}
