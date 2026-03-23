// ─────────────────────────────────────────────────────────────────────────────
// Central services data source — single source of truth for ALL service content
// Used by: homepage, /services, /services/[slug]
// ─────────────────────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    slug: "terrasses",
    num: "01",
    title: "Terrasses",
    subtitle: "Espaces de vie extérieurs",
    shortDescription:
      "Terrasses en bois composite, pierre naturelle ou béton architectonique.",
    fullDescription:
      "Nous réalisons des terrasses sur mesure pour que vous profitiez pleinement de votre jardin, en famille ou entre amis. Chaque terrasse est pensée pour être esthétique, durable et parfaitement adaptée à votre habitat. Selon vos besoins, nous vous proposons différentes finitions :",
    image: "/gbprojectconcept_service23.webp",
    features: [
      "Pose de carrelage",
      "Moquette de pierre avec motifs",
      "Terrasse en bois",
    ],
    highlight: "Garantie 10 ans",
    ctaText: "Demander un devis",
    seo: {
      title:
        "Terrasses sur mesure — Carrelage, Moquette de Pierre, Bois | Projet concept",
      description:
        "Réalisation de terrasses sur mesure à Caen et alentours : pose de carrelage, moquette de pierre avec motifs, terrasse en bois. Devis gratuit, garantie décennale 10 ans.",
    },
  },
  {
    slug: "allees",
    num: "02",
    title: "Allée & Cour & Parking",
    subtitle: "Revêtements extérieurs",
    shortDescription:
      "Pavés, enrobé à chaud ou gravier pour des accès élégants et durables.",
    fullDescription:
      "Nous aménageons vos allées, cours et parkings afin qu'ils soient à la fois pratiques, esthétiques et durables. Chaque réalisation est pensée et adaptée à vos usages, à votre environnement et à votre style de vie, pour vous offrir une entrée harmonieuse, propre et accueillante.",
    image: "/gbprojectconcept_service22.webp",
    features: [
      "Pavés autobloquants",
      "Enrobé à chaud",
      "Gravier avec stabilisateur",
    ],
    highlight: "20+ matériaux disponibles",
    ctaText: "Demander un devis",
    seo: {
      title:
        "Allée, Cour & Parking — Pavés, Enrobé, Gravier | Projet concept",
      description:
        "Aménagement d'allées, cours et parkings à Caen et alentours : pavés autobloquants, enrobé à chaud, gravier avec stabilisateur. Devis gratuit, garantie décennale 10 ans.",
    },
  },
  {
    slug: "clotures",
    num: "03",
    title: "Clôtures & Portails",
    subtitle: "Sécurisation & délimitation",
    shortDescription:
      "Systèmes de clôture sur-mesure — acier, aluminium, bois ou composite.",
    fullDescription:
      "Nous vous proposons l'installation de tous types de clôtures avec portails et portillons, pour sécuriser votre maison tout en valorisant votre patrimoine. En plus d'apporter une touche esthétique, nos solutions sont pratiques et durables. Nous réalisons tous types de clôtures : la pose de clôtures rigides avec soubassement béton, clôtures en alu, en bois ou en composite, ainsi que des murs en parpaings. Pour vos portails et portillons, nous proposons les mêmes matériaux et un ajustement parfait à votre clôture, pour un ensemble harmonieux, sécurisé et élégant. Et si votre projet nécessite un seuil en béton et des piliers avant l'installation du portail, nous prenons également en charge ces ouvrages, pour un résultat solide et durable.",
    image: "/gbprojectconcept_service13.webp",
    features: [
      "Clôtures rigides avec soubassement béton",
      "Clôtures alu, bois ou composite",
      "Murs en parpaings",
      "Portails et portillons",
      "Seuil béton et piliers (si nécessaire avant installation)",
    ],
    highlight: "Installation sous 2 semaines",
    ctaText: "Demander un devis",
    seo: {
      title:
        "Clôtures & Portails sur-mesure — Alu, Bois, Composite | Projet concept",
      description:
        "Installation de clôtures et portails sur-mesure à Caen et alentours : rigides, alu, bois, composite, murs en parpaings. Devis gratuit, garantie décennale 10 ans.",
    },
  },
  {
    slug: "travaux-de-maconnerie",
    num: "04",
    title: "Travaux de maçonnerie",
    subtitle: "Maçonnerie",
    shortDescription:
      "Ouvertures, dallage béton armé, murs en parpaings, façades et finitions.",
    fullDescription:
      "Nous réalisons vos travaux de maçonnerie avec précision, en respectant votre habitation et vos espaces extérieurs à chaque étape. Chaque chantier est soigneusement protégé et organisé, avec une exigence constante de propreté du début à la fin des travaux. Conformes aux normes en vigueur et couverts par une assurance décennale, nos ouvrages sont pensés pour vous garantir solidité, durabilité et sérénité.",
    image: "/gbprojectconcept_service1.webp",
    features: [
      "Extension de maison (possibilité clé en main)",
      "Création d'ouvertures (portes, fenêtres, baies vitrées) – mur porteur ou non porteur",
      "Dallage béton armé",
      "Jointoiement de pierre",
      "Élévation de murs en parpaings",
      "Création de piliers avec seuil pour portail",
      "Enduit de façade et finitions",
    ],
    highlight: "Assurance décennale",
    ctaText: "Demander un devis",
    seo: {
      title:
        "Travaux de Maçonnerie — Dallage, Murs, Façades | Projet concept",
      description:
        "Travaux de maçonnerie à Caen et alentours : création d'ouvertures, dallage béton armé, murs en parpaings, enduit de façade. Assurance décennale, devis gratuit.",
    },
  },
  {
    slug: "terrassement",
    num: "05",
    title: "Terrassement",
    subtitle: "Préparation du terrain",
    shortDescription:
      "Déblai, remblai, nivellement et drainage pour préparer votre terrain.",
    fullDescription:
      "Le terrassement est la première étape essentielle de tout projet d'aménagement extérieur. Nous réalisons les travaux de terrassement nécessaires à la préparation de votre terrain : déblai, remblai, nivellement et compactage, pour poser des bases solides à vos futurs aménagements.",
    image: "/gbprojectconcept_service18.webp",
    features: [
      "Déblai et évacuation des terres",
      "Remblai et compactage",
      "Nivellement de terrain",
      "Drainage et évacuation des eaux",
      "Préparation fondations",
      "Assainissement",
    ],
    highlight: "Terrain prêt en 48h",
    ctaText: "Demander un devis",
    seo: {
      title:
        "Terrassement — Déblai, Remblai, Nivellement | Projet concept",
      description:
        "Terrassement à Caen et alentours : déblai, remblai, nivellement, drainage, préparation de fondations. Terrain prêt rapidement. Devis gratuit.",
    },
  },
];

/**
 * Lookup a single service by its slug.
 * Returns null if not found (safe for 404 handling).
 */
export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug) ?? null;
}
