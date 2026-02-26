import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { baseMeta, SITE_URL, SITE_NAME, PHONE, EMAIL } from "@/lib/seo";

// ── Metadata (used by all pages unless overridden) ──────────────────────────
export const metadata = baseMeta;

// ── Viewport (prevents iOS auto-zoom on inputs) ─────────────────────────────
export const viewport = {
  width:        "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

// ── Organization + LocalBusiness JSON-LD ────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type":       ["LocalBusiness", "LandscapeService"],
      "@id":         `${SITE_URL}/#organization`,
      name:          SITE_NAME,
      url:           SITE_URL,
      logo: {
        "@type":     "ImageObject",
        url:         `${SITE_URL}/logo.svg`,
        width:       512,
        height:      512,
      },
      image:         `${SITE_URL}/heroGB.webp`,
      description:
        "Aménagement extérieur et maçonnerie paysagère en Île-de-France. Clôtures, allées, terrasses, jardins depuis 2012.",
      telephone:     PHONE,
      email:         EMAIL,
      foundingDate:  "2012",
      address: {
        "@type":           "PostalAddress",
        addressLocality:   "Caen",
        addressCountry:    "FR",
      },
      areaServed: {
        "@type": "State",
        name:    "Île-de-France",
      },
      openingHoursSpecification: [
        {
          "@type":     "OpeningHoursSpecification",
          dayOfWeek:   ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens:       "08:00",
          closes:      "18:00",
        },
        {
          "@type":    "OpeningHoursSpecification",
          dayOfWeek:  "Saturday",
          opens:      "09:00",
          closes:     "13:00",
        },
      ],
      priceRange: "€€",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name:    "Services d'aménagement extérieur",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Travaux extérieurs & maçonnerie paysagère" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Allées & Chemins" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Clôtures & Portails sur-mesure" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Terrasses bois composite et pierre" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aménagement paysager complet" } },
        ],
      },
      aggregateRating: {
        "@type":       "AggregateRating",
        ratingValue:   "4.9",
        reviewCount:   "340",
        bestRating:    "5",
        worstRating:   "1",
      },
      sameAs: [],
    },
    {
      "@type":  "WebSite",
      "@id":    `${SITE_URL}/#website`,
      url:      SITE_URL,
      name:     SITE_NAME,
      inLanguage: "fr-FR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        {/* ── Font preconnect (speeds up Space Grotesk + Inter) ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── Organization / LocalBusiness structured data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <Navbar />
        <main className="flex-1" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
