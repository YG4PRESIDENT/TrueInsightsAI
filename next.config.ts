import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static export for GitHub Pages
  images: {
    unoptimized: true,  // Required for static export
  },
  // Uncomment and set if using GitHub Pages project repo (not custom domain)
  // basePath: '/repo-name',
  // assetPrefix: '/repo-name',
};

export default nextConfig;
