import Link from "next/link";

const values = [
  {
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    title: "Intégrité",
    desc: "Transparence totale dans nos prix, nos méthodes et nos engagements. Pas de surprises, pas de compromis.",
  },
  {
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    title: "Précision",
    desc: "Chaque détail compte. Nos équipes travaillent avec un niveau d'exigence qui distingue notre travail.",
  },
  {
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    title: "Innovation",
    desc: "Intégration des matériaux et techniques modernes pour des résultats durables et esthétiquement remarquables.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Partenariat",
    desc: "Nous construisons des relations durables avec nos clients, fondées sur la confiance et le respect mutuel.",
  },
];

const timeline = [
  { year: "2012", title: "Fondation",     desc: "Création de projet concept par Marc Dumont, artisan paysagiste depuis 15 ans." },
  { year: "2015", title: "Expansion",     desc: "Ouverture d'une seconde équipe pour couvrir toute l'Île-de-France." },
  { year: "2018", title: "Certification", desc: "Obtention des labels RGE et Qualipaysage, référence du secteur." },
  { year: "2020", title: "200 projets",   desc: "Franchissement du cap symbolique des 200 chantiers réalisés." },
  { year: "2022", title: "Innovation",    desc: "Lancement de notre bureau d'études et de conception 3D." },
  { year: "2024", title: "Aujourd'hui",   desc: "340+ projets, 3 équipes spécialisées, 98% de satisfaction client." },
];

const team = [
  {
    name: "Marc Dumont",
    role: "Fondateur & Directeur",
    img: "/gbprojectconcept_service9.webp",
    desc: "25 ans d'expérience en maçonnerie paysagère. Formé à l'École Nationale Supérieure du Paysage.",
  },
  {
    name: "Sophie Renard",
    role: "Chef de projet",
    img: "/gbprojectconcept_service10.webp",
    desc: "Architecte paysagiste, spécialisée dans les jardins contemporains et espaces de prestige.",
  },
  {
    name: "Thomas Merle",
    role: "Responsable technique",
    img: "/gbprojectconcept_service11.webp",
    desc: "Expert en structures béton et maçonnerie. 15 ans sur le terrain avec une rigueur exemplaire.",
  },
];

export default function About() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          background: "#0A0A0A",
          paddingTop: "160px",
          paddingBottom: "100px",
          overflow: "hidden",
        }}
      >
        <div
          className="about-hero-img"
          style={{
            backgroundImage: "url('/heroGB.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0, top: 0, bottom: 0, width: "55%",
            background: "linear-gradient(to right, #0A0A0A 20%, transparent 100%)",
          }}
        />
        <div className="hidden-mobile" style={{ position: "absolute", top: "88px", right: "40px", width: "120px", height: "120px", border: "1px solid rgba(200,169,110,0.12)" }} />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <p className="section-label" style={{ marginBottom: "24px" }}>Notre identité</p>
          <h1
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
            Bâtisseurs<br />
            <span style={{ color: "#C8A96E" }}>d&apos;extérieurs</span><br />
            d&apos;exception
          </h1>
          <p style={{ fontSize: "1rem", color: "#6A6560", maxWidth: "460px", lineHeight: 1.8 }}>
            Depuis 2012, nous façonnons les espaces extérieurs avec une passion inaltérable pour la qualité, la durabilité et l&apos;esthétique architecturale.
          </p>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="section-xl" style={{ background: "#0D0D0D" }}>
        <div className="container">
          <div className="grid-2col">
            {/* Collage */}
            <div className="about-collage">
              <div
                style={{
                  position: "absolute", top: 0, left: 0, right: "18%", bottom: "18%",
                  backgroundImage: "url('/gbprojectconcept_service2.webp')",
                  backgroundSize: "cover", backgroundPosition: "center",
                }}
              />
              <div
                style={{
                  position: "absolute", bottom: 0, right: 0, width: "52%", height: "44%",
                  backgroundImage: "url('/gbprojectconcept_service3.webp')",
                  backgroundSize: "cover", backgroundPosition: "center",
                  border: "4px solid #0D0D0D",
                }}
              />
              <div style={{
                position: "absolute", bottom: "44%", right: 0, width: "52%", height: "3px",
                background: "linear-gradient(to right, transparent, #C8A96E)",
              }} />
            </div>

            {/* Text */}
            <div>
              <p className="section-label" style={{ marginBottom: "24px" }}>Notre histoire</p>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.1,
                  letterSpacing: "-0.03em", color: "#F0EBE3", marginBottom: "28px",
                }}
              >
                Une passion née<br />
                <span style={{ color: "#C8A96E" }}>du terrain</span>
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                <p style={{ fontSize: "0.9rem", color: "#6A6560", lineHeight: 1.8 }}>
                  Projet concept est né de la conviction que les espaces extérieurs méritent autant d&apos;attention que l&apos;intérieur. Trop souvent négligés, ils représentent pourtant le premier contact visuel avec un lieu de vie.
                </p>
                <p style={{ fontSize: "0.9rem", color: "#6A6560", lineHeight: 1.8 }}>
                  Fondée en 2012 par Marc Dumont, artisan paysagiste de formation, notre entreprise s&apos;est bâtie sur des valeurs simples : excellence technique, respect des délais et transparence absolue.
                </p>
              </div>
              <div
                style={{
                  marginTop: "36px", padding: "24px 28px",
                  border: "1px solid rgba(200,169,110,0.15)",
                  background: "rgba(200,169,110,0.03)",
                }}
              >
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1rem", color: "#C8A96E", fontStyle: "italic", lineHeight: 1.7 }}>
                  « L&apos;extérieur d&apos;une propriété est son âme visible. Nous lui donnons la forme qu&apos;elle mérite. »
                </p>
                <p style={{ marginTop: "12px", fontSize: "0.75rem", color: "#4A4540", letterSpacing: "0.1em" }}>— Marc Dumont, Fondateur</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: "#111111", borderTop: "1px solid #1A1A1A", padding: "64px 0" }}>
        <div className="container">
          <div className="stats-bar">
            {[
              { val: "12+",  label: "Années d'expérience",   sub: "Depuis 2012" },
              { val: "340+", label: "Chantiers réalisés",     sub: "En Île-de-France" },
              { val: "98%",  label: "Satisfaction client",    sub: "Mesurée en 2024" },
              { val: "10",   label: "Ans de garantie",      sub: "Sur nos réalisations" },
            ].map((s, i) => (
              <div key={i} style={{ background: "#0A0A0A", padding: "44px 32px" }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(2.2rem, 4vw, 3.5rem)", color: "#C8A96E", letterSpacing: "-0.05em", lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#F0EBE3", marginTop: "8px" }}>{s.label}</div>
                <div style={{ fontSize: "0.72rem", color: "#3A3530", letterSpacing: "0.05em", marginTop: "4px" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section-xl" style={{ background: "#0A0A0A" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <p className="section-label" style={{ justifyContent: "center", marginBottom: "20px" }}>Ce en quoi nous croyons</p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 3.5vw, 3.2rem)", letterSpacing: "-0.03em", color: "#F0EBE3" }}>
              Nos valeurs fondamentales
            </h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div
                key={i}
                className="card-hover"
                style={{ background: "#111111", padding: "48px 40px", display: "flex", gap: "28px", alignItems: "flex-start", cursor: "default" }}
              >
                <div style={{ width: "52px", height: "52px", border: "1px solid rgba(200,169,110,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={v.icon} />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "1.1rem", color: "#F0EBE3", marginBottom: "10px", letterSpacing: "-0.02em" }}>{v.title}</h3>
                  <p style={{ fontSize: "0.88rem", color: "#5A5550", lineHeight: 1.8 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-xl" style={{ background: "#0D0D0D" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <p className="section-label" style={{ justifyContent: "center", marginBottom: "20px" }}>Notre parcours</p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 3.5vw, 3.2rem)", letterSpacing: "-0.03em", color: "#F0EBE3" }}>
              Une croissance <span style={{ color: "#C8A96E" }}>maîtrisée</span>
            </h2>
          </div>
          <div style={{ position: "relative", maxWidth: "720px", margin: "0 auto", paddingLeft: "56px" }}>
            <div
              style={{
                position: "absolute",
                left: "23px",
                top: "24px",
                bottom: "24px",
                width: "1px",
                background: "linear-gradient(to bottom, transparent, rgba(200,169,110,0.25) 8%, rgba(200,169,110,0.25) 92%, transparent)",
              }}
            />
            {timeline.map((item, i) => (
              <div
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
                    <div style={{ width: "6px", height: "6px", background: "#C8A96E", borderRadius: "50%" }} />
                  </div>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "0.7rem", color: "#C8A96E", letterSpacing: "0.1em" }}>
                    {item.year}
                  </span>
                </div>
                <div className="tl-content" style={{ flex: 1, minWidth: 0, order: 2 }}>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "1rem", color: "#F0EBE3", marginBottom: "8px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "0.82rem", color: "#5A5550", lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="section-xl" style={{ background: "#0A0A0A" }}>
        <div className="container">
          <div style={{ marginBottom: "56px" }}>
            <p className="section-label" style={{ marginBottom: "20px" }}>Les visages de projet concept</p>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 3.5vw, 3.2rem)", letterSpacing: "-0.03em", color: "#F0EBE3" }}>
              Notre équipe
            </h2>
          </div>
          <div className="team-grid">
            {team.map((member, i) => (
              <div key={i} className="card-hover" style={{ background: "#111111", overflow: "hidden" }}>
                <div style={{ height: "300px", backgroundImage: `url('${member.img}')`, backgroundSize: "cover", backgroundPosition: "center top", opacity: 0.65, filter: "grayscale(20%)" }} />
                <div style={{ padding: "24px 28px 28px" }}>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "1.1rem", color: "#F0EBE3", letterSpacing: "-0.02em" }}>{member.name}</h3>
                  <p style={{ fontSize: "0.72rem", color: "#C8A96E", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "4px" }}>{member.role}</p>
                  <p style={{ fontSize: "0.82rem", color: "#5A5550", lineHeight: 1.7, marginTop: "14px" }}>{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#111111", borderTop: "1px solid #1A1A1A", padding: "80px 0" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "-0.04em", color: "#F0EBE3", marginBottom: "24px", lineHeight: 1.0 }}>
            Travaillons ensemble
          </h2>
          <p style={{ fontSize: "0.95rem", color: "#5A5550", lineHeight: 1.8, marginBottom: "36px" }}>
            Discutons de votre projet lors d&apos;une consultation gratuite. Nos experts sont à votre écoute.
          </p>
          <div className="cta-row-center">
            <Link href="/contact" className="btn-gold">
              <span>Prendre contact</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
