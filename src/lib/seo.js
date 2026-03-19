// ─────────────────────────────────────────────────────────────
// Central SEO configuration — update SITE_URL before going live
// ─────────────────────────────────────────────────────────────

export const SITE_URL  = "https://www.gbprojectconcept.fr";
export const SITE_NAME = "Projet concept";
export const PHONE     = "+33620783131";
export const EMAIL     = "contact@gbprojectconcept.fr";

export const SITE_DESCRIPTION =
  "Aménagement extérieur et maçonnerie paysagère en Île-de-France — clôtures, allées, terrasses, jardins. Devis gratuit, garantie 10 ans.";

/** Reusable OpenGraph image list */
export const OG_IMAGES = [
  {
    url:    `${SITE_URL}/heroGB.webp`,
    width:  1200,
    height: 800,
    alt:    "projet concept — Aménagement extérieur Île-de-France",
  },
];

/** Base metadata shared by all pages */
export const baseMeta = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:  `${SITE_NAME} — Aménagement Extérieur & Travaux Paysagers`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "aménagement extérieur Île-de-France",
    "terrasse extérieure",
    "allée pavée",
    "clôture portail sur mesure",
    "travaux de maçonnerie",
    "terrassement",
    "maçonnerie paysagère",
    "devis gratuit",
    "garantie décennale",
    "GB Projet Concept",
  ],
  authors:  [{ name: SITE_NAME, url: SITE_URL }],
  creator:  SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index:  true,
    follow: true,
    googleBot: {
      index:                true,
      follow:               true,
      "max-image-preview":  "large",
      "max-snippet":        -1,
      "max-video-preview":  -1,
    },
  },
  openGraph: {
    type:     "website",
    locale:   "fr_FR",
    url:      SITE_URL,
    siteName: SITE_NAME,
    title:    `${SITE_NAME} — Aménagement Extérieur & Travaux Paysagers`,
    description: SITE_DESCRIPTION,
    images:   OG_IMAGES,
  },
  twitter: {
    card:        "summary_large_image",
    title:       `${SITE_NAME} — Aménagement Extérieur`,
    description: SITE_DESCRIPTION,
    images:      OG_IMAGES.map((i) => i.url),
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.svg",
  },
};
