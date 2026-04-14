import "./globals.css";
import { Space_Grotesk, Inter } from "next/font/google";
import Link from "next/link";
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
        { "@type": "City", name: "Caen",                    "@id": "https://www.wikidata.org/wiki/Q6484" },
        { "@type": "City", name: "Cagny",                   "@id": "https://www.wikidata.org/wiki/Q1056115" },
        { "@type": "City", name: "Cabourg",                 "@id": "https://www.wikidata.org/wiki/Q202445" },
        { "@type": "City", name: "Soliers",                 "@id": "https://www.wikidata.org/wiki/Q453271" },
        { "@type": "City", name: "Mondeville",              "@id": "https://www.wikidata.org/wiki/Q622424" },
        { "@type": "City", name: "Ouistreham",              "@id": "https://www.wikidata.org/wiki/Q274825" },
        { "@type": "City", name: "Giberville",              "@id": "https://www.wikidata.org/wiki/Q844548" },
        { "@type": "City", name: "Amfreville",              "@id": "https://www.wikidata.org/wiki/Q838323" },
        { "@type": "City", name: "Colombelles",             "@id": "https://www.wikidata.org/wiki/Q662396" },
        { "@type": "City", name: "Luc-sur-Mer",             "@id": "https://www.wikidata.org/wiki/Q865397" },
        { "@type": "City", name: "Démouville",              "@id": "https://www.wikidata.org/wiki/Q848692" },
        { "@type": "City", name: "Bénouville",              "@id": "https://www.wikidata.org/wiki/Q316912" },
        { "@type": "City", name: "Hérouvillette",           "@id": "https://www.wikidata.org/wiki/Q726618" },
        { "@type": "City", name: "Fleury-sur-Orne",         "@id": "https://www.wikidata.org/wiki/Q1416697" },
        { "@type": "City", name: "Courseulles-sur-Mer",     "@id": "https://www.wikidata.org/wiki/Q309123" },
        { "@type": "City", name: "Hermanville-sur-Mer",     "@id": "https://www.wikidata.org/wiki/Q862669" },
        { "@type": "City", name: "Hérouville-Saint-Clair",  "@id": "https://www.wikidata.org/wiki/Q193671" },
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
          { "@type": "Offer", itemOffered: { "@type": "Service", "@id": `${SITE_URL}/services/#terrasses`,     name: "Terrasses — carrelage, moquette de pierre, bois composite" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", "@id": `${SITE_URL}/services/#allees`,        name: "Allée & Cour & Parking — pavés, enrobé, gravier" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", "@id": `${SITE_URL}/services/#clotures`,      name: "Clôtures & Portails sur-mesure" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", "@id": `${SITE_URL}/services/#travaux`,       name: "Travaux de maçonnerie" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", "@id": `${SITE_URL}/services/#terrassement`,  name: "Terrassement — déblai, remblai, nivellement" } },
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
        {/* ── Mobile sticky CTA bar (global, all pages) ── */}
        <div className="mobile-cta-bar" aria-label="Actions rapides">
          <Link href="/contact" className="btn-gold">
            <span>Devis gratuit</span>
          </Link>
          <a
            href="tel:+33620783131"
            className="btn-call"
            aria-label="Appeler GB Projet Concept"
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
      </body>
    </html>
  );
}
