import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Produce a static export when running `next build`.
  // Next 16 removed `next export` in favor of `output: 'export'`.
  output: 'export',
  /* Image optimization */
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    // When using static export, disable the built-in image optimizer
    // so images are emitted as static assets and builds don't require
    // the runtime image optimization server.
    unoptimized: true,
  },
  /* Production optimization */
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  /* Internationalization removed for static export compatibility */
};

export default nextConfig;
