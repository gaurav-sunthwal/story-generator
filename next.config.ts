import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '**', // Allow all hostnames
      },
    ],
  },
};

export default nextConfig;