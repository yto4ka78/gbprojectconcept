import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",

  // ── Webpack alias (required for tailwindcss v4) ────────────────────────────
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      tailwindcss: path.resolve(__dirname, "node_modules/tailwindcss"),
    };
    config.resolve.modules = [
      path.resolve(__dirname, "node_modules"),
      ...(config.resolve.modules || []),
    ];
    return config;
  },

  // ── Image optimization ─────────────────────────────────────────────────────
  images: {
    // Serve AVIF first (best compression), fall back to WebP
    formats: ["image/avif", "image/webp"],
    // All images are local (no remote domains needed)
    // Device sizes for srcset generation
    deviceSizes: [375, 430, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 520],
    // Aggressive caching — images rarely change
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },

  // ── Compression ────────────────────────────────────────────────────────────
  compress: true,

  // ── Power headers (security + performance) ─────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Security
          { key: "X-Content-Type-Options",         value: "nosniff" },
          { key: "X-Frame-Options",                value: "SAMEORIGIN" },
          { key: "X-XSS-Protection",               value: "1; mode=block" },
          { key: "Referrer-Policy",                value: "strict-origin-when-cross-origin" },
          { key: "X-DNS-Prefetch-Control",         value: "on" },
          { key: "Strict-Transport-Security",      value: "max-age=63072000; includeSubDomains; preload" },
          // Performance
          { key: "Permissions-Policy",             value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      // Long-lived cache for static assets
      {
        source: "/(.*)\\.(webp|avif|png|jpg|jpeg|svg|ico|woff2|woff|ttf)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },

  // ── Experimental ───────────────────────────────────────────────────────────
  experimental: {
    // Optimize CSS output
    optimizeCss: false, // set to true if critters is installed
  },
};

export default nextConfig;
