import "./globals.css";
import { Space_Grotesk, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { baseMeta, SITE_URL, SITE_NAME, PHONE, EMAIL } from "@/lib/seo";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

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
        "Artisan spécialiste de l'aménagement extérieur à Caen et dans les communes alentours. Terrasses, clôtures, allées, maçonnerie et terrassement depuis 2012.",
      telephone:     PHONE,
      email:         EMAIL,
      foundingDate:  "2012",
      address: {
        "@type":           "PostalAddress",
        addressLocality:   "Caen",
        addressCountry:    "FR",
      },
      areaServed: [
        { "@type": "City", name: "Caen",                   "@id": "https://www.wikidata.org/wiki/Q6484" },
        { "@type": "City", name: "Hérouville-Saint-Clair", "@id": "https://www.wikidata.org/wiki/Q193671" },
        { "@type": "City", name: "Mondeville",             "@id": "https://www.wikidata.org/wiki/Q622424" },
        { "@type": "City", name: "Ifs",                    "@id": "https://www.wikidata.org/wiki/Q484037" },
        { "@type": "City", name: "Fleury-sur-Orne",        "@id": "https://www.wikidata.org/wiki/Q1416697" },
      ],
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
          { "@type": "Offer", itemOffered: { "@type": "Service", "@id": `https://www.gbprojectconcept.fr/services/#terrasses`,     name: "Terrasses — carrelage, moquette de pierre, bois composite" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", "@id": `https://www.gbprojectconcept.fr/services/#allees`,        name: "Allée & Cour & Parking — pavés, enrobé, gravier" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", "@id": `https://www.gbprojectconcept.fr/services/#clotures`,      name: "Clôtures & Portails sur-mesure" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", "@id": `https://www.gbprojectconcept.fr/services/#travaux`,       name: "Travaux de maçonnerie" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", "@id": `https://www.gbprojectconcept.fr/services/#terrassement`,  name: "Terrassement — déblai, remblai, nivellement" } },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`flex min-h-screen flex-col antialiased ${spaceGrotesk.variable} ${inter.variable}`}>
        <Navbar />
        <main className="flex-1" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
