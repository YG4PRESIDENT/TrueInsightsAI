import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // Enable static export for GitHub Pages
  trailingSlash: true,  // Required for GitHub Pages
  images: {
    unoptimized: true,  // Required for static export
  },
  // Using custom domain (rankett.com) so no basePath needed
};

export default nextConfig;
