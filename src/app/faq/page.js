"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    cat: "Devis & Tarifs",
    items: [
      {
        q: "Comment obtenir un devis ?",
        a: "Vous pouvez nous contacter via notre formulaire en ligne, par téléphone ou par email. Nous nous déplaçons gratuitement sur site pour évaluer votre projet et vous remettre un devis détaillé sous 48h.",
      },
      {
        q: "Le déplacement pour le devis est-il payant ?",
        a: "Non. La visite sur site et l'établissement du devis sont entièrement gratuits et sans engagement. Nous nous déplaçons dans tout le secteur Île-de-France.",
      },
      {
        q: "Quels sont vos délais de réponse après une demande de devis ?",
        a: "Nous nous engageons à vous répondre sous 24h pour accuser réception de votre demande, et à vous remettre un devis complet sous 48h après la visite sur site.",
      },
      {
        q: "Puis-je obtenir plusieurs variantes de projet ?",
        a: "Absolument. Nous proposons généralement 2 à 3 variantes selon vos critères (budget, esthétique, matériaux) afin que vous puissiez comparer et faire le meilleur choix pour votre projet.",
      },
    ],
  },
  {
    cat: "Réalisation & Délais",
    items: [
      {
        q: "Quels sont les délais moyens d'un chantier ?",
        a: "Les délais varient selon la nature et l'ampleur du projet. Une clôture simple peut être posée en 2-3 jours. Un aménagement complet de jardin prend entre 2 et 6 semaines. Nous établissons un planning précis dans le devis.",
      },
      {
        q: "Travaillez-vous en hiver ?",
        a: "Oui, nous travaillons toute l'année. Certains travaux comme la pose de clôtures et les travaux de maçonnerie s'adaptent parfaitement aux conditions hivernales. Les plantations sont déconseillées en période de gel intense.",
      },
      {
        q: "Que se passe-t-il en cas de mauvais temps pendant le chantier ?",
        a: "Un délai de réserve météo est intégré dans chaque planning. En cas de météo défavorable, nous adaptons notre organisation pour minimiser les impacts sur les délais globaux.",
      },
      {
        q: "Combien d'ouvriers interviennent sur mon chantier ?",
        a: "Selon la taille du chantier, nos équipes comprennent généralement 2 à 5 personnes. Un chef de chantier est toujours désigné comme interlocuteur unique pour vous.",
      },
    ],
  },
  {
    cat: "Garanties & SAV",
    items: [
      {
        q: "Quelles garanties proposez-vous ?",
        a: "Tous nos travaux bénéficient de la garantie biennale (2 ans) et décennale (10 ans) pour les ouvrages de gros œuvre. Nous proposons également une garantie contractuelle de 5 ans sur les travaux de finition.",
      },
      {
        q: "Êtes-vous assurés ?",
        a: "Oui, nous sommes intégralement couverts par une assurance responsabilité civile professionnelle et une assurance décennale. Les attestations vous sont remises à la signature du devis.",
      },
      {
        q: "Que faire si je constate un problème après la réception du chantier ?",
        a: "Contactez-nous directement. Nous intervenons en général sous 5 jours ouvrés pour tout problème signalé. En cas d'urgence (infiltration, affaissement), notre équipe réactive intervient sous 24-48h.",
      },
    ],
  },
  {
    cat: "Matériaux & Techniques",
    items: [
      {
        q: "D'où proviennent vos matériaux ?",
        a: "Nous favorisons les fournisseurs français et européens. Nos pierres naturelles proviennent essentiellement de carrières du Bourgogne et du Périgord. Pour les matériaux de synthèse, nous travaillons avec des marques certifiées.",
      },
      {
        q: "Proposez-vous des matériaux écologiques ?",
        a: "Oui. Nous disposons d'une gamme de solutions éco-responsables : pavés perméables, revêtements recyclés, végétalisation des surfaces, systèmes de récupération d'eau de pluie et solutions drainantes naturelles.",
      },
      {
        q: "Comment entretenir ma terrasse après réalisation ?",
        a: "Nous vous remettons un guide d'entretien personnalisé selon les matériaux utilisés. En général, un nettoyage annuel au karcher basse pression et une application de produit hydrofuge tous les 2-3 ans suffisent pour conserver l'aspect d'origine.",
      },
    ],
  },
];

function AccordionItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{
        borderBottom: "1px solid #1A1A1A",
        transition: "background 0.2s ease",
        background: open ? "rgba(200,169,110,0.03)" : "transparent",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          padding: "28px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: "1rem",
            color: open ? "#C8A96E" : "#F0EBE3",
            lineHeight: 1.4,
            transition: "color 0.2s ease",
          }}
        >
          {q}
        </span>
        <span
          style={{
            width: "32px",
            height: "32px",
            border: `1px solid ${open ? "rgba(200,169,110,0.4)" : "#242424"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            color: open ? "#C8A96E" : "#4A4540",
            transition: "all 0.3s ease",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <p
          style={{
            fontSize: "0.9rem",
            color: "#6A6560",
            lineHeight: 1.8,
            paddingBottom: "28px",
            paddingRight: "56px",
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <section
        style={{
          background: "#0A0A0A",
          paddingTop: "160px",
          paddingBottom: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: "88px", left: "40px", width: "80px", height: "80px", border: "1px solid rgba(200,169,110,0.08)" }} />
        <div style={{ position: "absolute", bottom: "40px", right: "10%", width: "160px", height: "160px", border: "1px solid rgba(200,169,110,0.05)" }} />

        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
          <p className="section-label" style={{ marginBottom: "24px" }}>Questions fréquentes</p>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 5vw, 5.5rem)",
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "#F0EBE3",
              maxWidth: "700px",
              marginBottom: "32px",
            }}
          >
            Vos questions,<br />
            <span style={{ color: "#C8A96E" }}>nos réponses</span>
          </h1>
          <p style={{ fontSize: "1rem", color: "#6A6560", maxWidth: "480px", lineHeight: 1.8 }}>
            Retrouvez les réponses aux questions les plus fréquentes. Vous ne trouvez pas ce que vous cherchez ? Contactez-nous directement.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "24px", fontSize: "0.8rem", color: "#C8A96E", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>
            Poser votre question
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      <section style={{ background: "#0A0A0A", padding: "80px 0 120px" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 40px",
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          <div style={{ position: "sticky", top: "100px" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.7rem", fontWeight: 600, color: "#4A4540", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "20px" }}>
              Catégories
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
              {faqs.map((cat, i) => (
                <li key={i}>
                  <a
                    href={`#cat-${i}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px 16px",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      color: "#6A6560",
                      textDecoration: "none",
                      border: "1px solid transparent",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = "#C8A96E";
                      e.currentTarget.style.borderColor = "rgba(200,169,110,0.2)";
                      e.currentTarget.style.background = "rgba(200,169,110,0.04)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = "#6A6560";
                      e.currentTarget.style.borderColor = "transparent";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.65rem", color: "#3A3530" }}>0{i + 1}</span>
                    {cat.cat}
                  </a>
                </li>
              ))}
            </ul>

            <div
              style={{
                marginTop: "48px",
                padding: "28px",
                border: "1px solid #1A1A1A",
                background: "#111111",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C8A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "16px" }}>
                <path d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#F0EBE3", marginBottom: "8px" }}>
                Pas de réponse ?
              </h3>
              <p style={{ fontSize: "0.8rem", color: "#5A5550", lineHeight: 1.6, marginBottom: "20px" }}>
                Notre équipe est disponible du lundi au vendredi, de 8h à 18h.
              </p>
              <Link href="/contact" className="btn-gold" style={{ padding: "10px 20px", fontSize: "0.75rem" }}>
                <span>Nous contacter</span>
              </Link>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
            {faqs.map((cat, ci) => (
              <div key={ci} id={`cat-${ci}`}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    marginBottom: "8px",
                    paddingBottom: "24px",
                    borderBottom: "1px solid rgba(200,169,110,0.15)",
                  }}
                >
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
                    0{ci + 1}
                  </span>
                  <h2
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: "1.3rem",
                      color: "#F0EBE3",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {cat.cat}
                  </h2>
                  <span
                    style={{
                      marginLeft: "auto",
                      padding: "3px 10px",
                      border: "1px solid #242424",
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "0.65rem",
                      color: "#4A4540",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {cat.items.length} questions
                  </span>
                </div>

                <div>
                  {cat.items.map((item, ii) => (
                    <AccordionItem key={ii} q={item.q} a={item.a} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#111111",
          borderTop: "1px solid #1A1A1A",
          padding: "80px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                letterSpacing: "-0.03em",
                color: "#F0EBE3",
                marginBottom: "8px",
              }}
            >
              Prêt à démarrer votre projet ?
            </h2>
            <p style={{ fontSize: "0.9rem", color: "#5A5550" }}>
              Consultation et devis gratuits, sous 48h.
            </p>
          </div>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-gold">
              <span>Demander un devis</span>
            </Link>
            <a href="tel:+33123456789" className="btn-outline">
              <span>+33 1 23 45 67 89</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
