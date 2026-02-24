"use client";

import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Travaux extérieurs",
    desc: "Maçonnerie paysagère complète — murets, soutènements, escaliers en pierre.",
    img: "/6d7dc44d-43de-4089-8e27-1bbf79b160b7.jpg",
    href: "/services#travaux",
  },
  {
    num: "02",
    title: "Allées & Chemins",
    desc: "Revêtements béton, pavés ou gravier pour des accès élégants et durables.",
    img: "/bebb33c0-e255-489c-985e-9a0de8d23bbb.jpg",
    href: "/services#allees",
  },
  {
    num: "03",
    title: "Clôtures & Portails",
    desc: "Systèmes de clôture sur-mesure — acier, aluminium, bois ou mixte.",
    img: "/f69080ac-8ea3-4fda-a652-93f3758fddb9.jpg",
    href: "/services#clotures",
  },
  {
    num: "04",
    title: "Terrasses",
    desc: "Terrasses en bois composite, pierre naturelle ou béton architectonique.",
    img: "/850fa79a-2e5a-429a-86ed-5d0054f7d14e.jpg",
    href: "/services#terrasses",
  },
  {
    num: "05",
    title: "Aménagement paysager",
    desc: "Conception et réalisation complète de jardins contemporains.",
    img: "/e7cd452c-4ba6-4481-8e34-a3de33ba155a.jpg",
    href: "/services#paysager",
  },
];

const projects = [
  {
    title: "Villa Moderne — Yvelines",
    tag: "Terrasse & Allée",
    img: "/1f470773-f8d5-4504-b7af-adb80dd98c36.jpg",
    year: "2024",
  },
  {
    title: "Résidence Belvédère",
    tag: "Clôture & Portail",
    img: "/878b89c1-384a-4e44-a88f-0251c29537f9.jpg",
    year: "2023",
  },
  {
    title: "Jardin contemporain — Versailles",
    tag: "Aménagement complet",
    img: "/c17268db-f3c0-4779-8b47-189e73d884a8.jpg",
    year: "2023",
  },
];

const stats = [
  { val: "12+", label: "Années d'expérience" },
  { val: "340+", label: "Chantiers réalisés" },
  { val: "98%", label: "Clients satisfaits" },
  { val: "5 ans", label: "Garantie travaux" },
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
    desc: "Contrôle qualité final et remise des garanties.",
  },
];

const marqueeItems = [
  "CLÔTURES",
  "TERRASSES",
  "ALLÉES",
  "MAÇONNERIE",
  "PAYSAGISME",
  "PORTAILS",
  "DALLAGE",
  "MURETS",
  "ESPACES VERTS",
  "CLÔTURES",
  "TERRASSES",
  "ALLÉES",
  "MAÇONNERIE",
  "PAYSAGISME",
  "PORTAILS",
  "DALLAGE",
  "MURETS",
  "ESPACES VERTS",
];

export default function Home() {
  return (
    <>
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "flex-end",
          paddingTop: "96px",
          paddingBottom: "100px",
          overflow: "hidden",
          background: "#0A0A0A",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/heroGB.webp')",
            backgroundSize: "cover",
            backgroundPosition: "0% 100%",
            opacity: 0.55,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.35) 60%, rgba(10,10,10,0.55) 100%)",
          }}
        />
        <div
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

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "40px 40px 0",
            width: "100%",
          }}
        >
          <p className="section-label" style={{ marginBottom: "32px" }}>
            Aménagement extérieur & Maçonnerie paysagère
          </p>

          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(3rem, 7vw, 7.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "#F0EBE3",
              maxWidth: "900px",
              marginBottom: "40px",
            }}
          >
            Façonnez
            <br />
            <span style={{ color: "#C8A96E" }}>l&apos;extérieur</span>
            <br />
            qui dure.
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#8A8680",
              maxWidth: "460px",
              lineHeight: 1.7,
              marginBottom: "48px",
            }}
          >
            Depuis 2012, projet concept conçoit et réalise des espaces
            extérieurs d&apos;exception pour particuliers et professionnels.
            Précision. Durabilité. Élégance.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-gold">
              <span>Demander un devis</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
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
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0",
              maxWidth: "640px",
              marginTop: "80px",
              borderTop: "1px solid #1E1E1E",
              paddingTop: "32px",
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  paddingRight: "24px",
                  borderRight: i < 3 ? "1px solid #1E1E1E" : "none",
                  paddingLeft: i > 0 ? "24px" : "0",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.6rem",
                    color: "#C8A96E",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {s.val}
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "#4A4540",
                    marginTop: "4px",
                    letterSpacing: "0.05em",
                    lineHeight: 1.4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
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
        style={{
          background: "#111111",
          borderTop: "1px solid #1A1A1A",
          borderBottom: "1px solid #1A1A1A",
          padding: "20px 0",
          overflow: "hidden",
        }}
      >
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span
              key={i}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "0.7rem",
                letterSpacing: "0.25em",
                color: i % 2 === 0 ? "#3A3530" : "#C8A96E",
                padding: "0 40px",
                whiteSpace: "nowrap",
              }}
            >
              {item}
              {i % 2 === 0 && (
                <span
                  style={{ marginLeft: "40px", color: "#C8A96E", opacity: 0.3 }}
                >
                  ◆
                </span>
              )}
            </span>
          ))}
        </div>
      </div>

      <section style={{ background: "#0A0A0A", padding: "120px 0" }}>
        <div
          style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "40px",
              alignItems: "end",
              marginBottom: "64px",
            }}
          >
            <div>
              <p className="section-label" style={{ marginBottom: "20px" }}>
                Ce que nous faisons
              </p>
              <h2
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
                le même niveau d&apos;exigence et de savoir-faire.
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
                  marginLeft: "auto",
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

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gridTemplateRows: "auto",
              gap: "2px",
            }}
          >
            {services.map((svc, i) => {
              const spans = [
                { col: "span 5", row: "span 1", height: "380px" },
                { col: "span 7", row: "span 1", height: "380px" },
                { col: "span 4", row: "span 1", height: "320px" },
                { col: "span 4", row: "span 1", height: "320px" },
                { col: "span 4", row: "span 1", height: "320px" },
              ][i];
              return (
                <Link
                  key={i}
                  href={svc.href}
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
                  <img
                    src={svc.img}
                    alt={svc.title}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: 0.45,
                      transition: "transform 0.6s ease, opacity 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = "0.6";
                      e.target.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = "0.45";
                      e.target.style.transform = "scale(1)";
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      padding: "32px",
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
                        fontSize: "0.7rem",
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
                          fontSize: "1.25rem",
                          color: "#F0EBE3",
                          marginBottom: "8px",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {svc.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.82rem",
                          color: "#8A8680",
                          lineHeight: 1.6,
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

      <section style={{ background: "#0D0D0D", padding: "120px 0" }}>
        <div
          style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "64px",
              flexWrap: "wrap",
              gap: "24px",
            }}
          >
            <div>
              <p className="section-label" style={{ marginBottom: "16px" }}>
                Réalisations récentes
              </p>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
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

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {projects.map((p, i) => (
              <div
                key={i}
                className="card-hover"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  background: "#111111",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    height: i === 0 ? "480px" : "360px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: 0.6,
                      transition: "transform 0.6s ease, opacity 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.opacity = "0.75";
                      e.target.style.transform = "scale(1.04)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.opacity = "0.6";
                      e.target.style.transform = "scale(1)";
                    }}
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
                      top: "20px",
                      left: "20px",
                      padding: "5px 12px",
                      border: "1px solid rgba(200,169,110,0.4)",
                      background: "rgba(0,0,0,0.5)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.65rem",
                        color: "#C8A96E",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                      }}
                    >
                      {p.tag}
                    </span>
                  </div>
                </div>
                <div
                  style={{ padding: "24px 24px 28px", background: "#111111" }}
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
                        fontSize: "1rem",
                        color: "#F0EBE3",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {p.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "0.7rem",
                        color: "#4A4540",
                      }}
                    >
                      {p.year}
                    </span>
                  </div>
                  <div
                    style={{
                      width: "0",
                      height: "1px",
                      background: "#C8A96E",
                      marginTop: "16px",
                      transition: "width 0.4s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.width = "100%";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.width = "0";
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#1A1A1A",
          borderTop: "1px solid #1A1A1A",
          borderBottom: "1px solid #1A1A1A",
          padding: "80px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 40px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
          }}
        >
          {[
            {
              icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
              title: "Qualité certifiée",
              desc: "Artisans qualifiés RGE et assurance décennale",
            },
            {
              icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              title: "Délais respectés",
              desc: "Planning précis, livraison dans les temps convenus",
            },
            {
              icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
              title: "Devis transparent",
              desc: "Chiffrage détaillé sans frais cachés",
            },
            {
              icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
              title: "Support continu",
              desc: "Suivi post-chantier et service après-vente réactif",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "#0A0A0A",
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  border: "1px solid rgba(200,169,110,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
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
                  <path d={item.icon} />
                </svg>
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "#F0EBE3",
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
          ))}
        </div>
      </section>

      <section style={{ background: "#0A0A0A", padding: "120px 0" }}>
        <div
          style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "80px",
              alignItems: "start",
            }}
          >
            <div style={{ position: "sticky", top: "100px" }}>
              <p className="section-label" style={{ marginBottom: "20px" }}>
                Comment nous travaillons
              </p>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 3vw, 2.8rem)",
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
                meilleurs résultats, de la première rencontre à la livraison
                finale.
              </p>
              <Link href="/contact" className="btn-gold">
                <span>Démarrer un projet</span>
              </Link>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {process.map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "80px 1fr",
                    gap: "32px",
                    paddingBottom: "48px",
                    borderBottom:
                      i < process.length - 1 ? "1px solid #141414" : "none",
                    paddingTop: i > 0 ? "48px" : "0",
                    transition: "padding 0.2s",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: "2.5rem",
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
                        fontSize: "1.15rem",
                        color: "#F0EBE3",
                        marginBottom: "10px",
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#0D0D0D",
          padding: "120px 0",
          borderTop: "1px solid #1A1A1A",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('/heroGB.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.08,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "32px",
            left: "32px",
            right: "32px",
            bottom: "32px",
            border: "1px solid rgba(200,169,110,0.08)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "900px",
            margin: "0 auto",
            padding: "0 40px",
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
              fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
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
              fontSize: "1rem",
              color: "#6A6560",
              lineHeight: 1.8,
              maxWidth: "480px",
              margin: "0 auto 48px",
            }}
          >
            Contactez-nous pour un rendez-vous de consultation gratuit et
            recevez un devis détaillé sous 48h.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/contact" className="btn-gold">
              <span>Obtenir un devis gratuit</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <a href="tel:+33123456789" className="btn-outline">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>+33 1 23 45 67 89</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
