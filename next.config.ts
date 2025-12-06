import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  // Suppress hydration errors in development
  turbopack: {},
  // Disable server components hydration warnings
  transpilePackages: ['lucide-react'],
};

export default nextConfig;
