"use client";

import { useState } from "react";

const services = [
  "Travaux extérieurs",
  "Allées & Chemins",
  "Clôtures & Portails",
  "Terrasses",
  "Aménagement paysager",
  "Autre",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", budget: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section
        style={{
          background: "#0A0A0A",
          paddingTop: "160px",
          paddingBottom: "60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "40%",
            backgroundImage: "url('/heroGB.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.07,
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #0A0A0A 50%, transparent 100%)" }} />

        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 2 }}>
          <p className="section-label" style={{ marginBottom: "24px" }}>Travaillons ensemble</p>
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
            Démarrez<br />
            votre <span style={{ color: "#C8A96E" }}>projet</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "#6A6560", maxWidth: "460px", lineHeight: 1.8 }}>
            Remplissez le formulaire ci-dessous ou appelez-nous directement. Nous vous répondons sous 24h.
          </p>
        </div>
      </section>

      <section style={{ background: "#0A0A0A", padding: "60px 0 120px" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 40px",
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", marginBottom: "48px" }}>
              {[
                {
                  icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                  label: "Téléphone",
                  value: "+33 1 23 45 67 89",
                  sub: "Lun–Ven, 8h–18h",
                  href: "tel:+33123456789",
                },
                {
                  icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                  label: "Email",
                  value: "contact@gaisa.fr",
                  sub: "Réponse sous 24h",
                  href: "mailto:contact@gaisa.fr",
                },
                {
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
                  label: "Adresse",
                  value: "12 rue des Jardins",
                  sub: "75000 Paris",
                  href: null,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    padding: "24px 28px",
                    background: "#111111",
                    border: "1px solid #1A1A1A",
                    transition: "border-color 0.2s ease",
                    cursor: item.href ? "pointer" : "default",
                  }}
                  onMouseEnter={e => { if (item.href) e.currentTarget.style.borderColor = "rgba(200,169,110,0.2)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#1A1A1A"; }}
                  onClick={() => item.href && (window.location.href = item.href)}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      border: "1px solid rgba(200,169,110,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", fontWeight: 600, color: "#4A4540", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "4px" }}>{item.label}</p>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "0.95rem", color: "#F0EBE3" }}>{item.value}</p>
                    <p style={{ fontSize: "0.75rem", color: "#4A4540", marginTop: "2px" }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                position: "relative",
                height: "240px",
                background: "#111111",
                border: "1px solid #1A1A1A",
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=2.29,48.85,2.38,48.88&layer=mapnik"
                style={{ width: "100%", height: "100%", border: "none", opacity: 0.6, filter: "grayscale(100%) invert(90%) sepia(10%) saturate(0.5)" }}
                title="Carte"
              />
              <div style={{ position: "absolute", inset: 0, border: "1px solid rgba(200,169,110,0.1)", pointerEvents: "none" }} />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "12px",
                  height: "12px",
                  background: "#C8A96E",
                  borderRadius: "50%",
                  boxShadow: "0 0 0 4px rgba(200,169,110,0.2)",
                  pointerEvents: "none",
                  zIndex: 10,
                }}
              />
            </div>

            <div style={{ marginTop: "2px", padding: "24px 28px", background: "#111111", border: "1px solid #1A1A1A" }}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", fontWeight: 600, color: "#4A4540", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "16px" }}>Horaires</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  { j: "Lun – Ven", h: "8h00 – 18h00" },
                  { j: "Samedi",    h: "9h00 – 13h00" },
                  { j: "Dimanche", h: "Fermé" },
                ].map((r, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "0.82rem", color: "#6A6560" }}>{r.j}</span>
                    <span style={{ fontSize: "0.82rem", color: r.h === "Fermé" ? "#3A3530" : "#F0EBE3", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>{r.h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              background: "#111111",
              border: "1px solid #1A1A1A",
              padding: "56px 48px",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", top: 0, right: 0, width: "60px", height: "60px", borderRight: "2px solid rgba(200,169,110,0.2)", borderTop: "2px solid rgba(200,169,110,0.2)" }} />

            {!sent ? (
              <>
                <div style={{ marginBottom: "40px" }}>
                  <p className="section-label" style={{ marginBottom: "12px" }}>Formulaire de contact</p>
                  <h2
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.8rem",
                      letterSpacing: "-0.03em",
                      color: "#F0EBE3",
                    }}
                  >
                    Demandez un devis <span style={{ color: "#C8A96E" }}>gratuit</span>
                  </h2>
                </div>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", fontWeight: 600, color: "#4A4540", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>
                        Nom complet *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Votre nom"
                        className="input-dark"
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", fontWeight: 600, color: "#4A4540", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="votre@email.fr"
                        className="input-dark"
                      />
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", fontWeight: 600, color: "#4A4540", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>
                        Téléphone
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+33 6 00 00 00 00"
                        className="input-dark"
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", fontWeight: 600, color: "#4A4540", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>
                        Service souhaité
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="input-dark"
                        style={{ cursor: "pointer" }}
                      >
                        <option value="">Sélectionner...</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", fontWeight: 600, color: "#4A4540", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>
                      Budget estimé
                    </label>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      {["< 5 000€", "5 000 – 15 000€", "15 000 – 30 000€", "> 30 000€"].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setForm({ ...form, budget: b })}
                          style={{
                            padding: "8px 16px",
                            border: `1px solid ${form.budget === b ? "rgba(200,169,110,0.6)" : "#242424"}`,
                            background: form.budget === b ? "rgba(200,169,110,0.08)" : "transparent",
                            color: form.budget === b ? "#C8A96E" : "#6A6560",
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontSize: "0.75rem",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", fontWeight: 600, color: "#4A4540", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>
                      Description du projet *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Décrivez votre projet : surface, type de travaux, contraintes particulières..."
                      className="input-dark"
                      style={{ resize: "vertical", minHeight: "120px" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold"
                    style={{ marginTop: "8px", justifyContent: "center" }}
                  >
                    <span>Envoyer ma demande</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <p style={{ fontSize: "0.72rem", color: "#3A3530", textAlign: "center" }}>
                    Devis gratuit sans engagement · Réponse sous 24–48h
                  </p>
                </form>
              </>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", minHeight: "500px", gap: "24px" }}>
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    border: "1px solid rgba(200,169,110,0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.8rem",
                      color: "#F0EBE3",
                      letterSpacing: "-0.03em",
                      marginBottom: "12px",
                    }}
                  >
                    Message envoyé
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "#6A6560", lineHeight: 1.7, maxWidth: "340px" }}>
                    Merci {form.name}. Nous avons bien reçu votre demande et vous répondrons dans les 24–48h.
                  </p>
                </div>
                <div style={{ width: "48px", height: "1px", background: "rgba(200,169,110,0.3)" }} />
                <a
                  href="/"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "0.8rem",
                    color: "#C8A96E",
                    textDecoration: "none",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  ← Retour à l&apos;accueil
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#111111",
          borderTop: "1px solid #1A1A1A",
          padding: "60px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 40px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
            background: "#1A1A1A",
          }}
        >
          {[
            {
              icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
              title: "Réponse rapide",
              desc: "Accusé de réception sous 24h, devis complet sous 48h.",
            },
            {
              icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
              title: "Sans engagement",
              desc: "Nos devis sont gratuits et sans obligation de commande.",
            },
            {
              icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z",
              title: "Déplacement gratuit",
              desc: "Nous visitons votre site en Île-de-France sans frais.",
            },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0A0A0A", padding: "40px 36px", display: "flex", gap: "20px", alignItems: "flex-start" }}>
              <div style={{ width: "40px", height: "40px", border: "1px solid rgba(200,169,110,0.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={item.icon} />
                </svg>
              </div>
              <div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#F0EBE3", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "0.8rem", color: "#5A5550", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
