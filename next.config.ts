import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '**', // Allow all hostnames
      },
    ],
  },
  eslint:{
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;