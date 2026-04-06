import { SITE_URL } from "@/lib/seo";
import { SERVICES } from "@/lib/servicesData";
import { LOCAL_CITIES } from "@/lib/localCities";

/** Generates /sitemap.xml automatically via Next.js App Router */
export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { url: SITE_URL, lastModified: now },
    { url: `${SITE_URL}/services`, lastModified: now },
    { url: `${SITE_URL}/about`, lastModified: now },
    { url: `${SITE_URL}/faq`, lastModified: now },
    { url: `${SITE_URL}/contact`, lastModified: now },
  ];

  // Individual service pages
  const serviceRoutes = SERVICES.map((svc) => ({
    url: `${SITE_URL}/services/${svc.slug}`,
    lastModified: now,
  }));

  // Local SEO landing pages
  const localRoutes = LOCAL_CITIES.map((city) => ({
    url: `${SITE_URL}/amenagement-exterieur/${city.slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...serviceRoutes, ...localRoutes];
}
