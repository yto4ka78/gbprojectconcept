import { SITE_URL } from "@/lib/seo";
import { SERVICES } from "@/lib/servicesData";
import { LOCAL_CITIES } from "@/lib/localCities";

/** Generates /sitemap.xml automatically via Next.js App Router */
export default function sitemap() {
  const now = new Date().toISOString();

  const staticRoutes = [
    { url: SITE_URL,               lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`,    lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/faq`,      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`,  lastModified: now, changeFrequency: "yearly",  priority: 0.8 },
  ];

  // Individual service pages (high priority — core conversion pages)
  const serviceRoutes = SERVICES.map((svc) => ({
    url: `${SITE_URL}/services/${svc.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Local SEO landing pages (high priority — local search intent)
  const localRoutes = LOCAL_CITIES.map((city) => ({
    url: `${SITE_URL}/amenagement-exterieur/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticRoutes, ...serviceRoutes, ...localRoutes];
}
