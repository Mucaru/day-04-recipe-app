import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    browsersListForSwc: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
      },
    ],
    formats: ["image/webp"],
    minimumCacheTTL: 3600,
    qualities: [60, 75, 85],
  },
};

export default nextConfig;  