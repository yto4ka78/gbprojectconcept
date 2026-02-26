import { SITE_URL } from "@/lib/seo";

/** Generates /sitemap.xml automatically via Next.js App Router */
export default function sitemap() {
  const now = new Date().toISOString();

  const routes = [
    { url: SITE_URL,                  lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITE_URL}/services`,    lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/about`,       lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/faq`,         lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/contact`,     lastModified: now, changeFrequency: "yearly",  priority: 0.8 },
    // Service section anchors (helps Googlebot discover sections)
    { url: `${SITE_URL}/services#travaux`,    lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/services#allees`,     lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/services#clotures`,   lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/services#terrasses`,  lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/services#paysager`,   lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  return routes;
}
