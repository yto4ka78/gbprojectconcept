import Image from "next/image";

const defaultSuppliers = [
  {
    name: "Abords & Paysages",
    logo: "/abordsetpaysages_logo.webp",
    width: 160,
    height: 60,
    href: "https://abordsetpaysages.fr/",
  },
  {
    name: "VM Matériaux",
    logo: "/vm_materiaux_logo.webp",
    width: 160,
    height: 60,
    href: "https://magasin.vm-materiaux.fr/2-vm-materiaux-fontaine-etoupefour?utm_source=gmb",
  },
];

const defaultBrands = [
  { name: "STIHL", logo: "/brands/stihl-vector-logo.png" },
  { name: "DeWalt", logo: "/brands/DeWalt_Logo.png" },
  { name: "Leborgne", logo: "/brands/Logo_Leborg.png" },
  { name: "GEO FENNEL", logo: "/brands/geo-fennel-logo-.png" },
  { name: "RUBI", logo: "/brands/rubi-logo.png" },
  { name: "Moasure", logo: "/brands/moasure-logo.png" },
];

export default function PartnersSection({
  suppliers = defaultSuppliers,
  brands = defaultBrands,
}) {
  return (
    <section
      style={{ background: "#161616", borderTop: "1px solid #1E1E1E", padding: "52px 0" }}
      aria-labelledby="partners-heading"
    >
      <div className="container">
        <div style={{ marginBottom: "56px", maxWidth: "600px" }}>
          <p className="section-label" style={{ marginBottom: "20px" }}>
            Matériaux &amp; équipements
          </p>
          <h2
            id="partners-heading"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#F0EBE3",
              marginBottom: "20px",
            }}
          >
            Matériaux fiables,{" "}
            <span style={{ color: "#C8A96E" }}>outils de précision</span>
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#6A6560",
              lineHeight: 1.8,
              maxWidth: "520px",
            }}
          >
            Nous sélectionnons des fournisseurs éprouvés pour garantir des
            matériaux durables sur chaque chantier. Nos équipes travaillent
            avec des outillages professionnels de marques reconnues, pour des
            résultats propres, précis et pérennes.
          </p>
        </div>

        <div className="partners-layout">
          <div className="partners-block">
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#4A4540",
                marginBottom: "28px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "1px",
                  background: "#4A4540",
                  flexShrink: 0,
                }}
              />
              Fournisseurs de matériaux
            </p>

            <div className="suppliers-grid" role="list">
              {suppliers.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="listitem"
                  aria-label={`Visiter le site de ${s.name}`}
                  className="supplier-card"
                  style={{
                    background: "#111111",
                    border: "1px solid #1E1E1E",
                    borderRadius: "10px",
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "88px",
                    transition: "border-color 0.2s ease",
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <span className="supplier-card-logo">
                    <Image
                      src={s.logo}
                      alt={`Logo ${s.name}`}
                      width={s.width}
                      height={s.height}
                      style={{
                        objectFit: "contain",
                        maxWidth: "100%",
                        maxHeight: "72px",
                        width: "auto",
                        height: "auto",
                      }}
                    />
                  </span>
                </a>
              ))}
            </div>

            <p
              style={{
                fontSize: "0.78rem",
                color: "#3A3530",
                lineHeight: 1.6,
                marginTop: "20px",
                paddingLeft: "2px",
              }}
            >
              Sélection de matériaux professionnels, adaptés à chaque chantier.
            </p>
          </div>

          <div className="partners-block">
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#4A4540",
                marginBottom: "28px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "1px",
                  background: "#4A4540",
                  flexShrink: 0,
                }}
              />
              Outils &amp; marques professionnelles
            </p>

            <div className="brands-logos-grid" role="list">
              {brands.map((brand) => {
                const name = typeof brand === "string" ? brand : brand.name;
                const logo = typeof brand === "object" && brand.logo ? brand.logo : null;
                return (
                  <div
                    key={name}
                    role="listitem"
                    className="brand-logo-card"
                  >
                    <div className="brand-logo-inner">
                      {logo ? (
                        <img
                          src={logo}
                          alt={`Logo ${name}`}
                          className="brand-logo-img"
                          style={{
                            maxHeight: "44px",
                            maxWidth: "120px",
                            width: "auto",
                            height: "auto",
                            objectFit: "contain",
                            display: "block",
                          }}
                        />
                      ) : (
                        <span
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 600,
                            fontSize: "0.78rem",
                            letterSpacing: "0.14em",
                            color: "#6A6560",
                            textTransform: "uppercase",
                          }}
                        >
                          {name}
                        </span>
                      )}
                    </div>
                    <span className="brand-logo-name">{name}</span>
                  </div>
                );
              })}
            </div>

            <p
              style={{
                fontSize: "0.78rem",
                color: "#3A3530",
                lineHeight: 1.6,
                marginTop: "20px",
                paddingLeft: "2px",
              }}
            >
              Outils de précision pour un travail soigné et durable.
            </p>
          </div>
        </div>

        <p
          style={{
            fontSize: "0.68rem",
            color: "#2A2520",
            marginTop: "48px",
            letterSpacing: "0.03em",
            lineHeight: 1.6,
          }}
        >
          Les marques citées appartiennent à leurs propriétaires respectifs.
        </p>
      </div>
    </section>
  );
}
