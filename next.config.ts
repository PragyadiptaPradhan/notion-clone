import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to complete even with ESLint errors
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "files.edgestore.dev"
    ]
  }
};

export default nextConfig;
