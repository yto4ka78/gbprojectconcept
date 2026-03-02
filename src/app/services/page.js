// ── Server Component (SSG) ────────────────────────────────────────────────────
import Link from "next/link";
import Image from "next/image";
import { SITE_URL, SITE_NAME, OG_IMAGES } from "@/lib/seo";

// ── Per-page metadata ────────────────────────────────────────────────────────
export const metadata = {
  title: `Services — Clôtures, Terrasses, Allées & Paysagisme`,
  description:
    "Travaux extérieurs, allées, clôtures et portails, terrasses, aménagement paysager en Île-de-France. Devis gratuit 48h, garantie décennale 10 ans.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: `Services d'aménagement extérieur — ${SITE_NAME}`,
    description:
      "Clôtures, allées, terrasses, maçonnerie paysagère. Devis gratuit, garantie 10 ans en Île-de-France.",
    url: `${SITE_URL}/services`,
    images: OG_IMAGES,
  },
};

// ── Service JSON-LD ──────────────────────────────────────────────────────────
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
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/#travaux`,
      name: "Travaux extérieurs & maçonnerie paysagère",
      description:
        "Murets, soutènements, escaliers en pierre, pavage et dallage en Île-de-France.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "State", name: "Île-de-France" },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/#allees`,
      name: "Allées & Chemins",
      description:
        "Béton désactivé, pavés autobloquants, gravier stabilisé, pierre naturelle.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "State", name: "Île-de-France" },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/#clotures`,
      name: "Clôtures & Portails sur-mesure",
      description:
        "Systèmes de clôture acier, aluminium laqué, portails motorisés.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "State", name: "Île-de-France" },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/#terrasses`,
      name: "Terrasses bois composite et pierre",
      description:
        "Terrasses sur-élevées, dalles sur plots, bois composite, pierre naturelle. Garantie 10 ans.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "State", name: "Île-de-France" },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/#paysager`,
      name: "Aménagement paysager complet",
      description:
        "Conception jardin 3D, arrosage automatique, éclairage LED, massifs et plantations.",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "State", name: "Île-de-France" },
    },
  ],
};

// ── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    id: "terrasses",
    num: "01",
    title: "Terrasses",
    subtitle: "Espaces de vie extérieurs",
    desc: "Votre terrasse est le prolongement naturel de votre intérieur. Nous la concevons comme un véritable espace de vie : terrasses sur-élevées, dalles posées sur plots, terrasses en bois composite faiblement entretenu ou en pierre naturelle de caractère.",
    features: [
      "Terrasses bois composite",
      "Dalles sur plots réglables",
      "Pierre naturelle",
      "Béton architectonique",
      "Terrasses sur-élevées",
    ],
    img: "/gbprojectconcept_service12.webp",
    highlight: "Garantie 10 ANS",
  },
  {
    id: "allees",
    num: "02",
    title: "Allée & Cour & Parking",
    subtitle: "Revêtements extérieurs",
    desc: "Nous aménageons vos allées, cours et parkings afin qu'ils soient à la fois pratiques, esthétiques et durables. Chaque réalisation est pensée et adaptée à vos usages, à votre environnement et à votre style de vie, pour vous offrir une entrée harmonieuse, propre et accueillante.",
    features: ["Pavés", "Enrobé à chaud", "Gravier avec stabilisateur"],
    img: "/gbprojectconcept_service9.webp",
    highlight: "20+ matériaux disponibles",
  },
  {
    id: "cour",
    num: "03",
    title: "Cour",
    subtitle: "Aménagement de cour",
    desc: "Nous transformons votre cour en un espace fonctionnel et esthétique, adapté à vos besoins quotidiens. Qu'il s'agisse d'une cour pavée, bétonnée ou engazonnée, nous réalisons des aménagements soignés et durables qui valorisent votre propriété.",
    features: [
      "Cours pavées sur mesure",
      "Dallage béton et pierre",
      "Caniveaux et évacuation des eaux",
      "Bordures et délimitations",
      "Finitions soignées",
    ],
    img: "/gbprojectconcept_service4.webp",
    highlight: "Sur mesure",
  },
  {
    id: "clotures",
    num: "04",
    title: "Clôtures & Portails",
    subtitle: "Sécurisation & délimitation",
    desc: "Nous vous proposons l'installation de tous types de clôtures avec portails et portillons, pour sécuriser votre maison tout en valorisant votre patrimoine. En plus d'apporter une touche esthétique, nos solutions sont pratiques et durables. Nous réalisons tous types de clôtures : la pose de clôtures rigides avec soubassement béton, clôtures en alu, en bois ou en composite, ainsi que des murs en parpaings. Pour vos portails et portillons, nous proposons les mêmes matériaux et un ajustement parfait à votre clôture, pour un ensemble harmonieux, sécurisé et élégant. Et si votre projet nécessite un seuil en béton et des piliers avant l'installation du portail, nous prenons également en charge ces ouvrages, pour un résultat solide et durable.",
    features: [
      "Clôtures rigides avec soubassement béton",
      "Clôtures alu, bois ou composite",
      "Murs en parpaings",
      "Portails et portillons",
      "Seuil béton et piliers",
    ],
    img: "/gbprojectconcept_service10.webp",
    highlight: "Installation sous 2 semaines",
  },
  {
    id: "portail",
    num: "05",
    title: "Portail",
    subtitle: "Accès & sécurité",
    desc: "Nous concevons et installons des portails sur mesure qui s'adaptent parfaitement à votre clôture et à l'architecture de votre maison. Nos portails allient esthétique, robustesse et fonctionnalité, avec des options motorisées pour un confort d'utilisation optimal.",
    features: [
      "Portails battants et coulissants",
      "Motorisation et télécommande",
      "Portails aluminium, acier ou bois",
      "Interphonie et accès digital",
      "Piliers et seuil béton inclus",
    ],
    img: "/gbprojectconcept_service13.webp",
    highlight: "Motorisation incluse",
  },
  {
    id: "travaux",
    num: "06",
    title: "Travaux de maçonnerie",
    subtitle: "Maçonnerie",
    desc: "Nous réalisons vos travaux de maçonnerie avec précision, en respectant votre habitation et vos espaces extérieurs à chaque étape. Chaque chantier est soigneusement protégé et organisé, avec une exigence constante de propreté du début à la fin des travaux. Conformes aux normes en vigueur et couverts par une assurance décennale, nos ouvrages sont pensés pour vous garantir solidité, durabilité et sérénité.",
    features: [
      "Création d'ouvertures (portes, fenêtres, baies vitrées) – mur porteur ou non porteur",
      "Dallage béton armé (terrasse, garage, abri, extension)",
      "Jointoiement de pierre",
      "Élévation de murs en parpaings",
      "Création de piliers avec seuil pour portail",
      "Enduit de façade et finitions",
    ],
    img: "/gbprojectconcept_service12.webp",
    highlight: "Matériaux premium",
  },
  {
    id: "terrassement",
    num: "07",
    title: "Terrassement",
    subtitle: "Préparation du terrain",
    desc: "Le terrassement est la première étape essentielle de tout projet d'aménagement extérieur. Nous réalisons les travaux de terrassement nécessaires à la préparation de votre terrain : déblai, remblai, nivellement et compactage, pour poser des bases solides à vos futurs aménagements.",
    features: [
      "Déblai et évacuation des terres",
      "Remblai et compactage",
      "Nivellement de terrain",
      "Drainage et évacuation des eaux",
      "Préparation fondations",
    ],
    img: "/gbprojectconcept_service7.webp",
    highlight: "Terrain prêt en 48h",
  },
];

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* ── HERO ── */}
      <section
        style={{
          position: "relative",
          background: "#0A0A0A",
          paddingTop: "160px",
          paddingBottom: "80px",
          overflow: "hidden",
        }}
        aria-labelledby="services-page-heading"
      >
        <div
          className="hero-bg-photo"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/heroGB.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25,
          }}
          aria-hidden="true"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, #0A0A0A 0%, transparent 50%, #0A0A0A 100%)",
          }}
          aria-hidden="true"
        />

        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <p className="section-label" style={{ marginBottom: "24px" }}>
            Ce que nous faisons
          </p>
          <h1
            id="services-page-heading"
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
            Nos <span style={{ color: "#C8A96E" }}>services</span>
            <br />
            d&apos;excellence
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "#6A6560",
              maxWidth: "520px",
              lineHeight: 1.8,
            }}
          >
            Cinq domaines d&apos;expertise, une seule promesse : des
            réalisations durables, esthétiques et parfaitement exécutées.
          </p>

          {/* Quick-jump chips */}
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
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
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

      {/* ── SERVICE SECTIONS ── */}
      {services.map((svc, i) => (
        <section
          key={svc.id}
          id={svc.id}
          aria-labelledby={`svc-heading-${svc.id}`}
          style={{
            background: i % 2 === 0 ? "#0A0A0A" : "#0D0D0D",
            padding: "80px 0",
            borderTop: "1px solid #141414",
          }}
        >
          <div className="container">
            <div className={`svc-row ${i % 2 === 1 ? "svc-row-rtl" : ""}`}>
              {/* Image — next/image for optimization */}
              <div className="svc-img-wrap" style={{ direction: "ltr" }}>
                <Image
                  src={svc.img}
                  alt={`${svc.title} — projet concept Île-de-France`}
                  fill
                  loading={i === 0 ? "eager" : "lazy"}
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

              {/* Text */}
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
                  id={`svc-heading-${svc.id}`}
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
                  {svc.desc}
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

                <Link href="/contact" className="btn-gold">
                  <span>Demander un devis</span>
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
