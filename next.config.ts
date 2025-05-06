import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false
      };
    }

    return config;
  },
  images: {
    domains: ['heroui.com'] // Define allowed domains for external image sources
  }
};

export default nextConfig;