// ─────────────────────────────────────────────────────────────
// Central SEO configuration — update SITE_URL before going live
// ─────────────────────────────────────────────────────────────

export const SITE_URL = "https://gbprojetconcept.fr";
export const SITE_NAME = "GB Projet Concept";
export const PHONE = "+33620783131";
export const EMAIL = "contact@gbprojetconcept.fr";

export const SITE_DESCRIPTION =
  "Aménagement extérieur et maçonnerie paysagère à Caen et alentours, dans un rayon de 30 km — terrasses, clôtures, allées, maçonnerie, terrassement. Devis gratuit, garantie décennale 10 ans.";

/** Reusable OpenGraph image list */
export const OG_IMAGES = [
  {
    url: `${SITE_URL}/heroGB.webp`,
    width: 1200,
    height: 800,
    alt: "GB Projet Concept — Aménagement extérieur à Caen et alentours",
  },
];

/** Base metadata shared by all pages */
export const baseMeta = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Aménagement Extérieur à Caen et alentours`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "aménagement extérieur Caen",
    "terrasse Caen",
    "clôture portail Caen",
    "allée pavée Caen",
    "travaux maçonnerie Caen",
    "terrassement Caen",
    "maçonnerie paysagère Caen",
    "artisan extérieur Caen",
    "devis gratuit Caen",
    "garantie décennale",
    "GB Projet Concept",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Aménagement Extérieur à Caen et alentours`,
    description: SITE_DESCRIPTION,
    images: OG_IMAGES,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Aménagement Extérieur à Caen`,
    description: SITE_DESCRIPTION,
    images: OG_IMAGES.map((i) => i.url),
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.svg",
  },
};
