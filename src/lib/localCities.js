// ─────────────────────────────────────────────────────────────────────────────
// Local cities data — single source of truth for all local SEO landing pages
// Each entry maps to: /amenagement-exterieur/[slug]
// ─────────────────────────────────────────────────────────────────────────────

export const LOCAL_CITIES = [
  {
    slug: "caen",
    name: "Caen",
    // Used in breadcrumb + page labels
    label: "Caen",
    // Short intro used in homepage zones strip and footer
    tagline: "Artisan de référence pour l'aménagement extérieur à Caen",
    // Hero description
    heroIntro:
      "Entreprise spécialisée dans l'aménagement extérieur à Caen : terrasses, allées, clôtures, maçonnerie et terrassement. Devis gratuit sous 48h, garantie décennale 10 ans.",
    // Opening paragraph — unique per city
    intro:
      "L'équipe de GB Projet Concept intervient à Caen pour tous vos travaux d'aménagement extérieur. Que vous habitiez dans un quartier résidentiel, une maison individuelle ou une propriété en périphérie de Caen, nous adaptons chaque projet à votre environnement, à votre budget et à votre style de vie.",
    // Second paragraph — unique per city
    body: "Caen est notre zone d'activité principale. Depuis plusieurs années, nous réalisons des terrasses en carrelage ou en moquette de pierre, des allées en pavés ou en enrobé, des clôtures rigides ou en alu, ainsi que des travaux de maçonnerie et de terrassement pour des particuliers à Caen. Chaque chantier est traité avec la même exigence : précision des finitions, respect des délais et propreté du chantier.",
    // Near cities mentioned on this page (for internal linking)
    nearbySlugs: ["herouville-saint-clair", "mondeville", "ifs"],
    seo: {
      title:
        "Aménagement extérieur Caen — Terrasses, Clôtures, Allées | GB Projet Concept",
      description:
        "Artisan aménagement extérieur à Caen : terrasses, clôtures, allées, maçonnerie et terrassement. Devis gratuit, garantie décennale 10 ans.",
    },
  },
  {
    slug: "herouville-saint-clair",
    name: "Hérouville-Saint-Clair",
    label: "Hérouville-Saint-Clair",
    tagline: "Aménagement extérieur à Hérouville-Saint-Clair",
    heroIntro:
      "GB Projet Concept réalise vos travaux d'aménagement extérieur à Hérouville-Saint-Clair : terrasses, clôtures, allées et maçonnerie. Artisan local, devis gratuit.",
    intro:
      "Commune limitrophe de Caen, Hérouville-Saint-Clair fait partie de nos zones d'intervention régulières. Nous intervenons sur des projets variés : pose de terrasses en carrelage, installation de clôtures aluminium ou rigides, création d'allées en pavés et travaux de maçonnerie courante pour des particuliers et des copropriétés.",
    body: "À Hérouville-Saint-Clair comme dans tout le Calvados, nous apportons le même soin à chaque réalisation. Notre équipe se déplace directement sur site pour évaluer votre projet, vous conseiller sur les matériaux adaptés à votre terrain et établir un devis clair et transparent. Résultat soigné, délais respectés et chantier propre sont nos engagements.",
    nearbySlugs: ["caen", "mondeville", "ifs"],
    seo: {
      title:
        "Aménagement extérieur Hérouville-Saint-Clair — Terrasses, Clôtures | GB Projet Concept",
      description:
        "Travaux d'aménagement extérieur à Hérouville-Saint-Clair : terrasses, clôtures, allées, maçonnerie. Artisan local, devis gratuit.",
    },
  },
  {
    slug: "mondeville",
    name: "Mondeville",
    label: "Mondeville",
    tagline: "Aménagement extérieur à Mondeville",
    heroIntro:
      "Entreprise d'aménagement extérieur à Mondeville : terrasses, clôtures, allées et maçonnerie paysagère. Devis gratuit, intervention rapide.",
    intro:
      "À Mondeville, les quartiers pavillonnaires et les maisons individuelles constituent le cœur de notre activité. Nous intervenons régulièrement pour réaliser des allées en enrobé ou en pavés autobloquants, des clôtures avec portail sur mesure, des terrasses en bois ou en pierre naturelle, et des travaux de maçonnerie paysagère.",
    body: "Notre connaissance du secteur de Mondeville nous permet de proposer des solutions concrètes et adaptées à chaque configuration de terrain. Nous travaillons en étroite collaboration avec nos clients pour que chaque aménagement soit à la fois fonctionnel, esthétique et durable. Devis offert, sans engagement, directement sur site.",
    nearbySlugs: ["caen", "herouville-saint-clair", "ifs"],
    seo: {
      title:
        "Aménagement extérieur Mondeville — Allées, Terrasses, Clôtures | GB Projet Concept",
      description:
        "Aménagement extérieur à Mondeville : allées, terrasses, clôtures, maçonnerie. Artisan sérieux, devis gratuit sans engagement.",
    },
  },
  {
    slug: "ifs",
    name: "Ifs",
    label: "Ifs",
    tagline: "Aménagement extérieur à Ifs",
    heroIntro:
      "GB Projet Concept intervient à Ifs pour vos projets d'aménagement extérieur : terrasses, clôtures, allées, terrassement et maçonnerie paysagère.",
    intro:
      "Ifs est une commune en pleine expansion résidentielle, où les projets d'aménagement extérieur sont de plus en plus nombreux. Nous intervenons à Ifs pour créer ou rénover allées, terrasses et clôtures, mais aussi pour des travaux de terrassement préalables à la construction de garages, extensions ou aménagements de jardin.",
    body: "Chaque projet à Ifs bénéficie d'un suivi personnalisé, de la visite initiale jusqu'à la réception des travaux. Notre équipe s'engage sur des délais clairs et des tarifs transparents. Vous disposez d'une garantie décennale sur l'ensemble des ouvrages réalisés, pour une tranquillité d'esprit totale après la fin du chantier.",
    nearbySlugs: ["caen", "fleury-sur-orne", "mondeville"],
    seo: {
      title:
        "Aménagement extérieur Ifs — Terrasses, Clôtures, Terrassement | GB Projet Concept",
      description:
        "Aménagement extérieur à Ifs (Calvados) : terrasses, clôtures, allées, terrassement. Garantie décennale, devis gratuit.",
    },
  },
  {
    slug: "fleury-sur-orne",
    name: "Fleury-sur-Orne",
    label: "Fleury-sur-Orne",
    tagline: "Aménagement extérieur à Fleury-sur-Orne",
    heroIntro:
      "Artisan spécialisé en aménagement extérieur à Fleury-sur-Orne : terrasses, clôtures, allées, maçonnerie et terrassement. Devis gratuit sous 48h.",
    intro:
      "Fleury-sur-Orne est une commune calme et résidentielle, idéale pour les projets d'aménagement extérieur soignés. Nous intervenons régulièrement à Fleury-sur-Orne pour des travaux de terrassement et de préparation de terrain, la pose de terrasses en carrelage ou en moquette de pierre, et l'installation de clôtures avec portail sur mesure.",
    body: "La qualité de notre travail à Fleury-sur-Orne repose sur une approche artisanale : chaque chantier est réalisé par notre propre équipe, sans sous-traitance, avec des matériaux sélectionnés auprès de fournisseurs de confiance. Nous vous remettons un devis détaillé avant tout démarrage, et nous restons disponibles tout au long du projet.",
    nearbySlugs: ["caen", "ifs", "mondeville"],
    seo: {
      title:
        "Aménagement extérieur Fleury-sur-Orne — Terrasses, Clôtures | GB Projet Concept",
      description:
        "Aménagement extérieur à Fleury-sur-Orne : terrasses, clôtures, allées, terrassement. Artisan local, garantie décennale, devis gratuit.",
    },
  },
];

/**
 * Lookup a city entry by its slug.
 */
export function getCityBySlug(slug) {
  return LOCAL_CITIES.find((c) => c.slug === slug) ?? null;
}
