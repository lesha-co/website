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
  async redirects() {
    return [
      {
        source: "/msba",
        destination: "/blog/factorio-status-bar-alerts",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
