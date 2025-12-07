import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    eslint: {
      ignoreDuringBuilds: true,
    },
  },
};

export default nextConfig;
