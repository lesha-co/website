import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure headers for geolocation access
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "x-geo-enabled",
            value: "true",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
